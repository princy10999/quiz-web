import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const onSubmit = (values) => {
//   console.log("Form data", values);
// };
const onSubmit = (values, submitProps) => {
  console.log('Form data', values)
  console.log('submitProps', submitProps)
  submitProps.setSubmitting(false)
  submitProps.resetForm()
}
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid Mobile Number")
    .required("Required")
    .min(10, "required 10 digits")
    .max(10, "Must be shorter than 10"),
  email: Yup.string().email("Invalid email format").required("Required"),
  message:Yup.string(),
});

function ContactUs() {
  return (
    <div className="container">
      <section className="points">
        <h1 className="text-center mb-3">Contact</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="qz-contactform-form">
            <div className="mb-3">
              <label className="form-label">
                Enter Your Name
                <span className="contact-form-name-span"> *</span>{" "}
              </label>
              <Field
                className="qz-contactform-inputfield"
                type="text"
                id="name"
                name="name"
              />
              <div className="contact-form-errormessage">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Enter Your Mobile
                <span className="contact-form-name-span"> *</span>{" "}
              </label>
              <Field
                className="qz-contactform-inputfield"
                type="phone"
                id="phone"
                name="phone"
              />
              <div className="contact-form-errormessage">
                <ErrorMessage name="phone" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Enter Your Email
                <span className="contact-form-name-span"> *</span>{" "}
              </label>
              <Field
                className="qz-contactform-inputfield"
                type="email"
                id="email"
                name="email"
              />
              <div className="contact-form-errormessage">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Your Message Here </label>
              <Field
                className="qz-contactform-inputfield"
                as="textarea"
                id="message"
                name="message"
                rows="5"
              />
            </div>
            <center>
              <button
                className="btn btn-primary"
                type="submit"
           
              >
                Submit
              </button>
            </center>
          </Form>
        </Formik>
      </section>
    </div>
  );
}

export default ContactUs;
