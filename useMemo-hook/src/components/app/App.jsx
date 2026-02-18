import {useMemo, useState} from 'react';

const bigCountNumber = number => {
  console.log('render');
  let i = 0
  while(i < 1000000000) i++
  return number * 2
}

const User = () => {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(true);

  const onIncrement = () => {
    setCounter(prevState => prevState + 1);
  }

  const onToggle = () => setActive(prevState => !prevState);

  const colors = {
    fontWeight: 'bold',
    color: active ? 'green' : 'red',
  }

  const number = useMemo(() => bigCountNumber(counter), [counter]);

  return (
    <div className={'w-500 mx-auto mb-15'}>
      <div className={'border p-3 mt-5'}>
        <p className={'text-center'} style={colors}>
          User Activated {number}
        </p>
        <div className={'d-flex justify-content-center'}>
          <button className={'btn btn-success m-2'} onClick={onIncrement}>
            Increase
          </button>
          <button className={'btn btn-warning m-2'} onClick={onToggle}>
            Toggle
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {

  return (
    <>
      <User firstName="Asilbek" lastName="Karomatov" link={'youtube.com'} />
    </>
  );
};

export default App;
