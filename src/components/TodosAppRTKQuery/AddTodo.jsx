import { Field, Form, Formik } from "formik"
import { useAddTodoMutation } from "../../redux/todoApi"

export const AddTodo = () => {
  const [addTodo]= useAddTodoMutation()
  
  const handleSubmit = (values, options) => {
    addTodo({ todo: values.todo })
    options.resetForm()
  }
  return (
    <div className='flex gap-2 justify-center items-center'>
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
