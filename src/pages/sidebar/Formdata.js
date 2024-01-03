import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { Link } from "react-router-dom";

const initialValues = {
  name: '',
  lastname: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  email: '',
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const onSubmit = (values) => {
  console.log('Form data', values);
};
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  //   phone: Yup.number("It's not number").required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required')
    .min(10, 'Must have a character'),
  email: Yup.string().email('Invalid email format').required('Required'),
});

function Shippingform() {
  return (
    <div className='ec-checkout-rightside col-lg-8 col-sm-12 '>
      <div className='checkout_heading'>
        <h1>Shipping Address</h1>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='ec-checout-form'>
          <form>
            <div className='form-row ec-checkout-2cal'>
              <div className='form-group d-flex flex-column col-md-6 '>
                <label className='checout-form-label' htmlFor='name'>
                  First name <span className='checout-form-name-span'>*</span>
                </label>
                <Field
                  className='ec-checout-inputfield'
                  type='text'
                  id='name'
                  name='name'
                />
                <div className='checout-form-errormessage'>
                  <ErrorMessage name='name' />
                </div>
              </div>

              <div className='form-group d-flex flex-column col-md-6 '>
                <label className='checout-form-label ' htmlFor='lastname'>
                  Last name <span className='checout-form-name-span '>*</span>
                </label>
                <Field
                  className='ec-checout-inputfield'
                  type='text'
                  id='lastname'
                  name='lastname'
                />
                <div className='checout-form-errormessage'>
                  <ErrorMessage name='lastname' />
                </div>
              </div>
            </div>

            <div className='form-group d-flex flex-column'>
              <label className='checout-form-label ' htmlFor='address'>
                Address <span className='checout-form-name-span '>*</span>
              </label>
              <Field
                className='ec-checout-inputfield'
                type='text'
                id='address'
                name='address'
              />
              <div className='checout-form-errormessage'>
                <ErrorMessage name='address' />
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group d-flex flex-column col-md-4'>
                <label className='checout-form-label ' htmlFor='state'>
                  State <span className='checout-form-name-span '>*</span>
                </label>
                <Field
                  className='ec-checout-inputfield'
                  type='state'
                  id='state'
                  name='state'
                />
                <div className='checout-form-errormessage'>
                  <ErrorMessage name='state' />
                </div>
              </div>

              <div className='form-group d-flex flex-column col-md-4'>
                <label className='checout-form-label ' htmlFor='city'>
                  City <span className='checout-form-name-span '>*</span>
                </label>
                <Field
                  className='ec-checout-inputfield'
                  type='city'
                  id='city'
                  name='city'
                />
                <div className='checout-form-errormessage'>
                  <ErrorMessage name='city' />
                </div>
              </div>

              <div className='form-group d-flex flex-column col-md-4'>
                <label className='checout-form-label ' htmlFor='zip'>
                  Zip <span className='checout-form-name-span '>*</span>
                </label>
                <Field
                  className='ec-checout-inputfield'
                  type='zip'
                  id='zip'
                  name='zip'
                />
                <div className='checout-form-errormessage'>
                  <ErrorMessage name='zip' />
                </div>
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group d-flex flex-column col-md-6'>
                <label className='checout-form-label ' htmlFor='phone'>
                  Phone <span className='checout-form-name-span '>*</span>
                </label>
                <Field
                  className='ec-checout-inputfield'
                  type='phone'
                  id='phone'
                  name='phone'
                />
                <div className='checout-form-errormessage'>
                  <ErrorMessage name='phone' />
                </div>
              </div>

              <div className='form-group d-flex flex-column col-md-6'>
                <label className='checout-form-label ' htmlFor='email'>
                  E-mail <span className='checout-form-name-span '>*</span>
                </label>
                <Field
                  className='ec-checout-inputfield'
                  type='email'
                  id='email'
                  name='email'
                />
                <div className='checout-form-errormessage'>
                  <ErrorMessage name='email' />
                </div>
              </div>
            </div>
          </form>
          <div className='ec-cart-btn'>
            {/* <Link to="/payment"> */}
            <button className='btn btn-primary' type='submit'>
              Payment
            </button>
            {/* </Link> */}
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Shippingform;
