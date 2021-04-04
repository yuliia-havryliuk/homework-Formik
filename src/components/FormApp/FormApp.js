import React from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import style from './FormApp.module.css';
import * as Yup from 'yup';

const FormApp = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        checkbox: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .required('Required')
          .min(8, 'Password is too short - should be 8 characters minimum.')
          .max(20, 'Must be 20 characters or less')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        checkbox: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You should accept the licence'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        /*setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);*/
      }}
    >
      <Form className={style.form}>
        <h1 className={style.title}>Register</h1>
        <label htmlFor="firstName">First Name</label>
        <Field
          name="firstName"
          type="text"
          className={style.field}
          placeholder="Mary"
        />
        <ErrorMessage
          name="firstName"
          component="div"
          className={style.error}
        />

        <label htmlFor="lastName">Last Name</label>
        <Field
          name="lastName"
          type="text"
          className={style.field}
          placeholder="Watson"
        />
        <ErrorMessage name="lastName" component="div" className={style.error} />

        <label htmlFor="email">Email</label>
        <Field
          name="email"
          type="email"
          className={style.field}
          placeholder="youremail@gmail.com"
        />
        <ErrorMessage name="email" component="div" className={style.error} />

        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          className={style.field}
          placeholder="* * * * * * * *"
        />
        <ErrorMessage name="password" component="div" className={style.error} />
        <label htmlFor="checkbox" className={style.acceptLicence}>
          <Field type="checkbox" name="checkbox" id="checkbox" />
          <p>
            I agree with{' '}
            <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">
              terms and conditions
            </a>
          </p>
        </label>
        <ErrorMessage name="checkbox" component="div" className={style.error} />
        <button type="submit" className={style.btn}>
          Submit
        </button>
      </Form>
    </Formik>
  );
  /* const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };*/
  /* const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, 'Must be 3 characters or high')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    /!*validate,*!/
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={style.form}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );*/
};

export default FormApp;
