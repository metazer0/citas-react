const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 rounded-xl mb-5 font-bold uppercase'>
        {children}
    </div>
  )
}

export default Error