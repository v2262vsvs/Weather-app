//import React from 'react';

import { useForm } from "react-hook-form";

import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useState } from "react";






interface IFormInput {
  email: string;
  firstName: string;
  password: string;
}

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
}));




function LogIn() {
  const {
    register,
    handleSubmit,
  } = useForm<IFormInput>();

  const { heading, submitButton } = useStyles();
  const [isRegistered,setIsRegistered] = useState(true)

  //const [json, setJson] = useState<string>();


  const refreshPage = () => {
    window.location.reload();
  }



  const onSubmit = (data: IFormInput) => {
    if (JSON.stringify(data.email) === localStorage.getItem('email') && JSON.stringify(data.password) === localStorage.getItem('password')) {
      window.localStorage.setItem('logged', JSON.stringify(data))
      refreshPage();

      console.log(`YOU ARE LOGGED IN, ${data.firstName}`);
    } else {
      setIsRegistered(false);
      console.log("first, you have to sing up");

    }


    //setJson(JSON.stringify(data));
  };




  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h3">
        Sign in Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register("email")}
          variant="outlined"
          margin="normal"
          label="Email"
          fullWidth
          required
        />
        
        <TextField
          {...register("password")}
          variant="outlined"
          margin="normal"
          label="Password"
          type="password"
          fullWidth
          required
        />
        {(isRegistered===false) && (
          <a href="./SingUp" className="text-center text-red-500">
            You need to register first
          </a>
        )}
        <Button
          type="submit"

          fullWidth
          variant="contained"
          color="secondary"
          className={submitButton}
        >
          Sign In
        </Button>


      </form>



    </Container>

  );

}
export default LogIn;