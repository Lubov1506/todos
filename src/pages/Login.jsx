import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  }
  const handleSubmit = (values, options) => {
    console.log(values)

    options.resetForm()
  }
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <div className='card-body'>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className='fieldset'>
                <label className='label flex flex-col gap-2 items-start'>
                  Email
                  <Field
                    name='email'
                    type='email'
                    className='input'
                    placeholder='Email'
                  />
                </label>
                <label className='label flex flex-col gap-2 items-start'>
                  Password
                  <Field
                    name='password'
                    type='password'
                    className='input'
                    placeholder='Password'
                  />
                </label>
                <div>
                  <Link to='/register' className='link link-hover'>
                    You don't have an account? Register now!
                  </Link>
                </div>
                <button className='btn btn-neutral mt-4 ' type='submit'>
                  Login
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
