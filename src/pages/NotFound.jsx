import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-5'>
      <img
        className=''
        src='https://ps.w.org/404-to-301/assets/banner-1544x500.png?rev=2251139'
        alt='Error 404'
        // width={}
      />

        <Link className='btn btn-accent px-10 text-3xl text-white py-5 rounded-xl'>Go home</Link>

    </div>
  )
}

export default NotFound
