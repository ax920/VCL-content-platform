import * as yup from "yup";

export const validationSchema = yup.object({
    author: yup.string().required("Author is required"),
    title: yup.string().required("Title is required"),
    contributors: yup.string().required("At least 1 contributor is required"),
})