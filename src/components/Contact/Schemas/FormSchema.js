import * as Yup from "yup"

const FormSchema = Yup.object({
    name:Yup.string().min(2).max(30).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your name"),
    subject:Yup.string().min(2).max(30).required("Please enter subject"),
    message:Yup.string().min(5).max(200).required("Please enter your Message"),
    

})
export default FormSchema