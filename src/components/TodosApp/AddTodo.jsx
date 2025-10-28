import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { addTodo } from "../../redux/todos/slice"

export const AddTodo = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values, options) => {
    dispatch(addTodo(values.todo))
    options.resetForm()
  }
  return (
    <div className='flex gap-2 justify-center items-center p-2'>
      <Formik initialValues={{ todo: "" }} onSubmit={handleSubmit}>
        <Form className='flex gap-2'>
          <Field className='input' placeholder='enter todo...' name='todo' />
          <button className='btn' type='submit'>
            Create todo
          </button>
        </Form>
      </Formik>
    </div>
  )
}
