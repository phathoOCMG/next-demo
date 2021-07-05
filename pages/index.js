import React from 'react';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';

import Link from '../src/Link';



export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Link href="/about" color="secondary">
          about
        </Link>
        <br></br>
        <Link href="/login" color="primary">
          Login
        </Link>
        <br></br>
        <Link href="/list_mail" color="primary">
          Mails
        </Link>
      </Box>
    </Container>
  );
}