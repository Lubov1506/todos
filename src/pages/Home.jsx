import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
      <h1 className='text-4xl font-bold mb-4'>Todo App 📝</h1>

      <p className='text-lg text-gray-600 max-w-md'>
        Organize your tasks, track your progress, and stay productive with a
        simple and intuitive app.
      </p>

      <div className='mt-6'>
        <Link to='/todos'>
          <button className='bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
