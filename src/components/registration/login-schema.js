import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email field required"),
  password: Yup.string().min(6).max(40).required("Password field is required"),
});