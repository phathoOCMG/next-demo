import React from 'react';
import Container from '@material-ui/core/Container';
import useSWR from 'swr'

import Box from '@material-ui/core/Box';

import Link from '../src/Link';
import Login from './login';
import { useRouter } from 'next/router';



export default function Index() {
  // const router = useRouter();
  // const isLogin = (sessionStorage.getItem('isLog') == 1) ? true : false;
  // if(isLogin) {
  //   router.push('/list_mail');
  // }else{
  //   router.push('/login');
  // }
  return (
    <Login />
  );
}