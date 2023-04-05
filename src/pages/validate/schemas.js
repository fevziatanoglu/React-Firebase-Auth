import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valide email.")
        .required("You have to fill this field."),

    password: yup
        .string()
        .min(5)
        .required("You have to fill this field.")
})


export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valide email.")
        .required("You have to fill this field."),

    password: yup
        .string().min(5)
        .required("You have to fill this field."),

    confirmPassword: yup
        .string().oneOf([yup.ref("password")])
        .required("You have to fill this field.")
})