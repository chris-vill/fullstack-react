import React from 'react';
import { Formik, Form } from 'formik';
import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/react';
import { useMutation } from "urql";

import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps { }

const REGISTER_MUTATION = `
  mutation Register($username: String!, $password: String!) {
    register(options: { username: $username, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`;

const Register: React.FC<registerProps> = ({}) => {
  const [ {}, register ] = useMutation(REGISTER_MUTATION);

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          register(values);
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
