import * as Yup from 'yup';

const FormValidation = Yup.object({
    name:Yup.string().min(6,"The length of name should be 6").required("Name is required"),
    email:Yup.string().email("Invalid email address").required("Email is required"),
    country:Yup.string().required("Country is required"),
    checkbox:Yup.array().required("Terms and Condition must be checked")
})

export default FormValidation;