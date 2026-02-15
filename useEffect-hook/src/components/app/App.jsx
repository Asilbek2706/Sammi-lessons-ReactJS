import {useEffect, useState} from 'react';

const User = ({ firstName, lastName, link }) => {
  const [counter, setCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(true);

  const onIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const onDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  const onReset = () => {
    setCounter(0);
  };

  const onToggleLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  // useEffect(() => {   /*didMount and Update*/
  //   console.log('effect')
  //   document.title = `Counter: ${counter}`;
  // }, [counter])

  // useEffect(() => {   /*didMount*/
  //   console.log('effect')
  //   document.title = `Counter: ${counter}`;
  // }, [])

  useEffect(() => {   /*willUnMount*/
    console.log('effect')
    document.title = `Counter: ${counter}`;

    return () => console.log('Deleted')
  }, [])

  return (
    <div className={'w-50 mx-auto mb-10 shadow-sm'}>
      <div className={'border p-3 mt-5'}>
        <h1>
          Mening ismim - {firstName}, sharifim - {lastName}
        </h1>
        <a href={link}>Youtube kanalim</a>
        <p className={'text-center'}>{counter}</p>
        <div className={'d-flex justify-content-center'}>
          <button className={'btn btn-success'} onClick={onIncrement}>
            +
          </button>
          <button className={'btn btn-danger mx-2'} onClick={onDecrement}>
            -
          </button>
          <button className={'btn btn-dark'} onClick={onReset}>
            0
          </button>
        </div>
        {isLogin ? <p className="text-center mt-3">LOGIN</p> : null}
        <div className={'d-flex justify-content-center'}>
          <button className={'btn btn-outline-primary'} onClick={onToggleLogin}>
            TOGGLE
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isDisplay, setIsDisplay] = useState(true);

  const deleteDisplayHandler = () => {
    setIsDisplay(prev => !prev);
  };

  return (
    <>
      <div className="container mt-5">
        <button onClick={deleteDisplayHandler} className="btn btn-primary mb-3">
          Display
        </button>
        {isDisplay && (
            <User firstName="Asilbek" lastName="Karomatov" link={'youtube.com'} />
        )}
      </div>
    </>
  );
};

export default App;
