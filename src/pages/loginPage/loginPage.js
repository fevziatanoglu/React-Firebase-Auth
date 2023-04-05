import "./loginPage.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { login, register } from "../../firebase";

import { Formik, Form, Field, ErrorMessage } from "formik"
import { loginSchema, registerSchema } from "../validate/schemas";

function Login() {

    const navigate = useNavigate();
    // to run store functions 


    const [error, setError] = useState({
        isError: true,
        errorMessage: []
    });


    // ============= LOGIN VARIABLES =============
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })

    const loginSubmit = async (values) => {

        await login(values.email, values.password)
            .then(response => { console.log(response); navigate("/", { replace: true }) })
            .catch(error => console.log(error))
    }



    // ============= REGISTER VARIABLES =============

    const registerSubmit = async (values) => {
        await register(values.email, values.password)
            .then((response) => { console.log(response); navigate("/", { replace: true }); })
    }

    // slider
    const [slider, setSlider] = useState(false);

    const handleSlider = () => {
        setSlider(!slider)
        setError({ isError: false, errorMessage: [] });
    }



    return (
        // main
        <main className="main">


            <div className={slider ? "slider-left slider" : "slider-right slider"}>

                <h1>{slider ? "WELCOME!" : "HELLO :)"}</h1>

                <p>
                    {slider ? "If you have an account, let's login!" : "If you have not an account, let's create an account for you."}

                </p>

                <button className="slider-btn btn" onClick={(e) => handleSlider()}>
                    {slider ? "Login >" : "< Register "}
                </button>

            </div>

            {/* login */}
            <div className="box login-box">


                <h1>LOGIN</h1>

                <Formik
                    validationSchema={loginSchema}
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => { loginSubmit(values) }}

                >
                    {props => (
                        <Form className="form">
                            <Field type="email" name="email" placeholder="Email" className={props.errors.email && props.touched.email ? "red" : ""} ></Field>
                            <Field type="password" name="password" placeholder="Password" className={props.errors.email && props.touched.email ? "red" : ""} />
                            <button className="submit-btn btn" type="submit">Sign In</button>
                            <ErrorMessage component="div" name="email" />
                            <ErrorMessage component="div" name="password" />
                        </Form>
                    )}



                </Formik>


            </div>

            {/* register */}
            <div className="box register-box">

                <h1>REGISTER</h1>

                <Formik
                    validationSchema={registerSchema}
                    initialValues={{ email: "", password: "", confirmPassword: "" }}
                    onSubmit={(values) => {  registerSubmit(values) }}

                >
                    {props => (
                        <Form className="form">
                            <Field type="email" name="email" placeholder="Email" className={props.errors.email && props.touched.email ? "red" : ""} ></Field>
                            <Field type="password" name="password" placeholder="Password" className={props.errors.password && props.touched.password ? "red" : ""} />
                            <Field type="password" name="confirmPassword" placeholder="Confirm Password" className={props.errors.confirmPassword && props.touched.confirmPassword ? "red" : ""} />
                            <button className="submit-btn btn" type="submit">Sign In</button>
                            <ErrorMessage component="div" name="email" />
                            <ErrorMessage component="div" name="password" />
                            <ErrorMessage component="div" name="confirmPassword" />
                        </Form>
                    )}



                </Formik>
            </div>



        </main >


    );
}

export default Login;
