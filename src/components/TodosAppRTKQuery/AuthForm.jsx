import { Field, Form, Formik } from "formik"
import { useUser } from "../../store/hooks"

export const AuthForm = () => {
  const { login } = useUser()
  const handleSubmit = (values) => {
    login(values.name)
  }
  return (
    <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-2 w-[300px] items-center justify-between">
        <Field
          placeholder='enter username...'
          name='name'
          className='input'
        />
        <button className="btn" type='submit'>Login</button>
      </Form>
    </Formik>
  )
}
