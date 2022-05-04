import * as Yup from "yup";
 
 export const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Name is too short!")
    .max(40, "Name is too long!")
    .required("Name is required"),
  lastName: Yup.string()
    .min(3, "Last Name is too short!")
    .max(40, "Last Name is too long!")
    .required("Last Name is required"),
  email: Yup.string().email().required("Email field required"),
  password: Yup.string()
    .min(6, "Password is too short, it must be at least 6 characters")
    .max(
      40,
      "Password is too long, your password must be less then 40 characters"
    )
    .required("Password field is required"),
  changepassword: Yup.string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both passwords need to be the same"
      ),
    })
    .required("Both passwords need to be the same and they are both required"),
});
