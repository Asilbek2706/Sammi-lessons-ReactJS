import {useRef, useState} from "react";

const User = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cvcNumber, setCvcNumber] = useState('');

    const cvcRef = useRef(null)
    const dateRef = useRef(null)

    const handleInput = e => {
        const val = e.target.value
        setCardNumber(val)

        if (val.length === 16) {
            cvcRef.current.focus()
        }
    }

    const handleInputCvc = e => {
        const val = e.target.value
        setCvcNumber(val)
        if (val.length === 3) {
            dateRef.current.focus()
        }
    }

  return (
      <div className={'w-500 mx-auto mb-5'}>
        <div className={'border p-3 mt-5'}>
            <input type={'text'} className={'form-control'} placeholder={'Card number...'} onChange={handleInput} value={cardNumber} />
            <input ref={cvcRef} type={'text'} className={'form-control mt-2'} placeholder={'Secure number...'} onChange={handleInputCvc} value={cvcNumber} />
            <input ref={dateRef} type={'text'} className={'form-control mt-2'} placeholder={'Year/Month...'} />
        </div>
      </div>
  )
}

const App = () => {
  return <User firstName={'Asilbek'} lastName={'Karomatov'} link={'google.com'} />
}

export default App