import { Component, Fragment, useState } from 'react';

// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0,
//             age: '',
//         }
//     }

//
//     onIncrement = () => {
//         this.setState(prevState => ({
//             counter: prevState.counter + 1,
//         }))
//     }
//
//     onDecrement = () => {
//         this.setState(prevState => ({
//             counter: prevState.counter - 1,
//         }))
//     }
//
//     onRestart = () => {
//         this.setState({
//             counter: 0,
//         })
//     }
//
//     changeHandler = (e, name) => {
//         console.log(name)
//         this.setState({
//             age: e.target.value,
//         })
//     }
//
//     render() {
//         const { firstName, lastName, link } = this.props
//         const { counter, age } = this.state
//
//         return (
//             <div className="container mt-5">
//                 <div className="card w-50 mx-auto shadow-sm">
//                     <div className="card-body">
//                         <h4 className="card-title text-dark">
//                             Mening ismim - <span className="text-primary">{firstName}</span>,
//                             sharifim - <span className="text-primary">{lastName}</span>,
//                             yoshim - <span className="text-primary">{age}</span>
//                         </h4>
//
//                         <a href={link} className="btn btn-link p-0 mb-3 text-decoration-none">
//                             YouTube kanalim
//                         </a>
//
//                         <div className="d-flex align-items-center gap-2 mb-3">
//                             <button onClick={this.onIncrement} className="btn btn-success px-4">
//                                 +
//                             </button>
//                             <button onClick={this.onDecrement} className="btn btn-danger px-4">
//                                 -
//                             </button>
//                             <button onClick={this.onRestart} className="btn btn-outline-secondary">
//                                 Restart
//                             </button>
//                             <span className="h4 mb-0 ms-auto">{counter}</span>
//                         </div>
//
//                         <form className="border-top pt-3">
//                             <label className="form-label fw-bold">Yoshingiz:</label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 placeholder="Yoshingizni kiriting..."
//                                 onChange={e => this.changeHandler(e, 'Asilbek')}
//                             />
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

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
  return (
    <Fragment>
      <User firstName="Asilbek" lastName="Karomatov" link={'youtube.com'} />
      <User firstName="Ali" lastName="Lazizov" link={'google.com'} />
    </Fragment>
  );
};

export default App;
