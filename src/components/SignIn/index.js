import React from 'react';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
        
          <Icon to='/'><img src={Logo} style={{height:60}} /></Icon>
          <FormContent>
            <Form action='/'>
              <FormH1>Coming Soon</FormH1>
              {/*
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              */}
              <Text>Page Under Development</Text>
              <Text></Text>
              
              
                <FormButton type='submit' to='/'>Go Back</FormButton>
              
              
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
{/* Chandan Choudhury */}