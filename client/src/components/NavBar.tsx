import React from 'react';
import { Box, Link, Flex, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';

interface NavBarProps { }

export const NavBar: React.FC<NavBarProps> = ({}) => {

  const [{ data, fetching }] = useMeQuery();
  let body = null;

  // data is loading
  if (fetching) {
    body = null;

  // user is not logged in
  } else if (!data?.me) {

    body = (
      <>
        <NextLink href="/login">
          <Link mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link>
            Register
          </Link>
        </NextLink>
      </>
    );

  // user is logged in
  } else {
    body = (
      <Flex>
        <Box color="black" mr={2}>{ data.me.username }</Box>
        <Button color="black" variant="link">Logout</Button>
      </Flex>
    );
  }

  return (
    <Flex bg="tan" p={ 4 }>
      <Box ml={'auto'}>
        { body }
      </Box>
    </Flex>
  );
}
