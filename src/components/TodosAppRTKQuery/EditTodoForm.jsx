import { useForm } from "react-hook-form"
import { useEditTodoMutation } from "../../redux/todoApi"

const EditTodoForm = ({ todo, onClose }) => {
  const { register, handleSubmit } = useForm({ defaultValues: todo })

  const [editTodo] = useEditTodoMutation()
  const submit = (data) => {
    editTodo(data)
    onClose()
  }

  return (
    <div className='w-full'>
      <form
        onSubmit={handleSubmit(submit)}
        className='flex flex-col gap-4 px-4 py-10 w-full'
      >
        <input
          type='text'
          {...register("todo")}
          placeholder='enter new todo...'
          className='input input-bordered input-info w-full text-white '
        />
        <label className='label cursor-pointer flex justify-between'>
          <span className='label-text'>Set as completed</span>
          <input
            type='checkbox'
            className='checkbox checkbox-primary'
            {...register("completed")}
          />
        </label>
        <label className='label cursor-pointer flex justify-between'>
          <span className='label-text'>Set as liked</span>
          <input
            type='checkbox'
            className='checkbox checkbox-primary'
            {...register("liked")}
          />
        </label>
        <button className='btn btn-primary' type='submit'>
          Save
        </button>
      </form>
    </div>
  )
}

export default EditTodoForm
