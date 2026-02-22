import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const data = await response.json();
    console.log(data);

    alert("User Registered Successfully!");
    resetForm();

  } catch (error) {
    console.log(error);
  }
};


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>

        <h2>Formik Registration Form</h2>

        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Register</button>

      </Form>
    </Formik>
  );
}

export default FormikForm;