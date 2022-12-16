import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Email,
  Error,
  Form as Wrapper,
  Label,
  Section,
 
  Input,
  Text,
  TextArea,
  Title
} from "./style";




const Contact = () => {
  const fakeEndPoint = "hello world";
  const [statusCode, setStatusCode] = React.useState<number | undefined>();
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Please enter a valid email!")
      .required("Email is required"),
    message: Yup.string().required("message is required")
  });
  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: ""
    },
    validationSchema,
    onSubmit: () => {
      fetch(fakeEndPoint, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(values)
      }).then((res) => setStatusCode(res.status));
    }
  });
 
  return (
    <Section id="contact" >
      <div >
        <Title  >
          Contact Me
        </Title>
        <Wrapper
          onSubmit={handleSubmit}
        >
        
          <Text >
             fill the contact form down bellow.
          </Text>
          <Label >
            Full name:
          </Label>
          <Input
            type="text"
            name="fullName"
            error={errors.fullName && touched.fullName}
            aria-label="full name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.fullName}
            required
          />
          {errors.fullName && touched.fullName ? (
            <Error>{errors.fullName}</Error>
          ) : null}
          <Label >
            Your Email:
          </Label>
          <Input
            type="email"
            name="email"
            error={errors.email && touched.email}
            aria-label="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            required
          />
          {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
          <Label >
            Message:
          </Label>
          <TextArea
            name="message"
            error={errors.message && touched.message}
            aria-label="message"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.message}
            required
          />
          {errors.message && touched.message ? (
            <Error>{errors.message}</Error>
          ) : null}
          {statusCode === 200 ? (
            <p >
              The email is sent successfully
            </p>
          ) : statusCode === undefined ? (
            ""
          ) : (
            <p >
              unfortunately, an error happened
            </p>
          )}
          <Button>
            send
          </Button>
        </Wrapper>
      </div>
    </Section>
  );
};

export default Contact;