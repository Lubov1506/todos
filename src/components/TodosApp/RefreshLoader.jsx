import { Oval } from "react-loader-spinner"

const RefreshLoader = () => {
  return (
    <Oval
      visible={true}
      height='150'
      width='150'
      color='#4fa94d'
      ariaLabel='oval-loading'
      wrapperStyle={{}}
      wrapperClass='min-h-screen bg-teal-100/10 flex justify-center items-center'
    />
  )
}

export default RefreshLoader
