
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

    //const [json, setJson] = useState<string>();


    const refreshPage = () => {
        window.location.reload();
    }
    const [isRegistered,setIsRegistered] = useState(false)




    const onSubmit = (data: IFormInput) => {
        if (JSON.stringify(data.email) === localStorage.getItem('email')) {
            setIsRegistered(true);
            refreshPage();
        } else {
            window.localStorage.setItem('email', JSON.stringify(data.email))
            window.localStorage.setItem('firstName', JSON.stringify(data.firstName))
            window.localStorage.setItem('password', JSON.stringify(data.password))
            refreshPage();
            console.log("YOU ARE SINGED UP");
        }


        //setJson(JSON.stringify(data));
    };

    return (
        <Container maxWidth="xs">
            <Typography className={heading} variant="h3">
                Sign up Form
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
                    {...register("firstName")}
                    variant="outlined"
                    margin="normal"
                    label="First Name"
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
                {(isRegistered===true) && (
                    <a href="./LogIn" className="text-center text-red-500">
                    You already have an account
                    </a>
                )}
                


                <Button
                    type="submit"

                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={submitButton}
                >
                    Sign Up
                </Button>


            </form>



        </Container>

    );

}
export default LogIn;