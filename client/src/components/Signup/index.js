import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';
import GameLogic from '../GameLogic/GameLogic';


const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token)
      return <GameLogic/>;

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
    <Box p={2}>
      <Box textAlign="center">
        <Heading>Signup</Heading>
      </Box>
      <Box my={4} textAlign="left">
        <form onSubmit={handleFormSubmit}>
        <FormControl>
            <FormLabel>Username</FormLabel>
            <Input 
                id="username"
                type="username"
                name="username"
                autoComplete="on"
                placeholder="Username"
                value={formState.username}
                onChange={handleChange}/>
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input id="email"
                type="email"
                name="email"
                autoComplete="on"
                placeholder="Your email"
                value={formState.email}
                onChange={handleChange}/>
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <Input                 id="password"
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="on"
                value={formState.password}
                onChange={handleChange} />
          </FormControl>
          
          <Button width="full" mt={4} type="submit">
            Submit
          </Button>
         
        </form>
        {error && <div>Signup failed</div>}
      </Box>
    </Box>
  </Flex>
  );
};


export default Signup;
