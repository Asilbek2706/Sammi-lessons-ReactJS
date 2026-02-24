import useInputValidation from "../../hook/useInputValidate.js";

const MyButton = ({children}) => <button className='mt-3 btn btn-success'>{children}</button>

const User = () => {
  const firstname = useInputValidation("")
  const lastname = useInputValidation("")

  return (
      <div className='w-150 mx-auto flex justify-center mb-5'>
        <div className='border p-3 mt-5'>
          <p className='text-center fs-3'>Register</p>
          <div className='d-flex gap-3'>
            <input
                type='text'
                className={`form-control ${firstname.validateColor}`}
                placeholder='Firstname'
                value={firstname.value}
                onChange={firstname.onChange}/>
            <input
                type='text'
                className={`form-control ${lastname.validateColor}`}
                placeholder='Lastname'
                value={lastname.value}
                onChange={lastname.onChange}/>
          </div>
            <MyButton>
                send data
            </MyButton>
        </div>
      </div>
  )
};

const App = () => {
  return <User />
};

export default App;
