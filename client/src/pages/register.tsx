import React from 'react';
import { Formik, Form } from 'formik';
import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/react';
import { useRegisterMutation } from '../generated/graphql';
import { useRouter } from 'next/router';

import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { toErrorMap } from '../utils/toErrorMap';

interface registerProps { }

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [ {}, register ] = useRegisterMutation();

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register(values);

          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));

          } else if (response.data?.register.user) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              mt={ 4 }
              type="submit"
              isLoading={ isSubmitting }
              backgroundColor="teal"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

// <FormErrorMessage>{form.errors.name}</FormErrorMessage>

export default Register;
