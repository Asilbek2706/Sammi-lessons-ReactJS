import {useCallback, useState} from 'react';
import CounterItem from "../Counter-item/Counter-item.jsx";

const User = () => {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(true);

  const onIncrement = () => {
    setCounter(prevState => prevState + 1);
  }

  const onToggle = () => setActive(prevState => !prevState);

  const counterGenerate = useCallback(() => new Array(counter).fill('').map((_, idx) => `Counter number: ${idx + 1}`), [counter]);

  console.log(counterGenerate())

  const colors = {
    fontWeight: 'bold',
    color: active ? 'green' : 'red',
  }

  return (
    <div className={'w-500 mx-auto mb-15'}>
      <div className={'border p-3 mt-5'}>
        <p className={'text-center'} style={colors}>
          User Activated {counter}
        </p>
        <div className={'d-flex justify-content-center'}>
          <button className={'btn btn-success m-2'} onClick={onIncrement}>
            Increase
          </button>
          <button className={'btn btn-warning m-2'} onClick={onToggle}>
            Toggle
          </button>
        </div>
        <CounterItem counterGenerate={counterGenerate} />
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
