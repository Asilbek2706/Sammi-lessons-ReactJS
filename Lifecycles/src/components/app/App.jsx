import { Component } from 'react';

// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//       age: '',
//       isLogin: false,
//     };
//   }

//   onIncrement = () => {
//     this.setState((prevState) => ({
//       counter: prevState.counter + 1,
//     }));
//   };

//   onDecrement = () => {
//     this.setState((prevState) => ({
//       counter: prevState.counter - 1,
//     }));
//   };

//   onRestart = () => {
//     this.setState({
//       counter: 0,
//     });
//   };

//   changeHandler = (e, name) => {
//     console.log(name);
//     this.setState({
//       age: e.target.value,
//     });
//   };

//   onToggleLogin = () => {
//     this.setState((prevState) => ({
//       isLogin: !prevState.isLogin,
//     }));
//   };

//   componentDidMount() {
//     document.title = `Counter: ${this.state.counter}`;
//     console.log('Component did mount'); // -> Component yaratilib, DOM ga joylashtirilgandan keyin ishga tushadi
//   }

//   componentDidUpdate() {
//     document.title = `Counter: ${this.state.counter}`;
//     console.log('Component did update'); // -> Component yangilanganidan keyin ishga tushadi
//   }

//   componentWillUnmount() {
//     console.log('Component will unmount'); // -> Component DOM dan o'chirilishidan oldin ishga tushadi
//   }

//   render() {
//     const { firstName, lastName, link } = this.props;
//     const { counter, age, isLogin } = this.state;

//     return (
//       <div className="container mt-5">
//         <div className="card w-50 mx-auto shadow-sm">
//           <div className="card-body">
//             <h4 className="card-title text-dark">
//               Mening ismim - <span className="text-primary">{firstName}</span>,
//               sharifim - <span className="text-primary">{lastName}</span>,
//               yoshim - <span className="text-primary">{age}</span>
//             </h4>

//             <a
//               href={link}
//               className="btn btn-link p-0 mb-3 text-decoration-none"
//             >
//               YouTube kanalim
//             </a>

//             <div className="d-flex align-items-center gap-2 mb-3">
//               <button
//                 onClick={this.onIncrement}
//                 className="btn btn-success px-4"
//               >
//                 +
//               </button>
//               <button
//                 onClick={this.onDecrement}
//                 className="btn btn-danger px-4"
//               >
//                 -
//               </button>
//               <button
//                 onClick={this.onRestart}
//                 className="btn btn-outline-secondary"
//               >
//                 Restart
//               </button>
//               <span className="h4 mb-0 ms-auto">{counter}</span>
//             </div>

//             <form className="border-top pt-3">
//               <label className="form-label fw-bold">Yoshingiz:</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Yoshingizni kiriting..."
//                 onChange={(e) => this.changeHandler(e, 'Asilbek')}
//               />
//             </form>
//             {this.state.isLogin ? (
//               <p className="text-center mt-3">LOGIN</p>
//             ) : null}
//             <button onClick={this.onToggleLogin} className="btn btn-info">
//               Toggle Login
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // const User = ({ firstName, lastName, link }) => {
// //   const [counter, setCounter] = useState(0);
// //   const [isLogin, setIsLogin] = useState(true);

// //   const onIncrement = () => {
// //     setCounter((counter) => counter + 1);
// //   };

// //   const onDecrement = () => {
// //     setCounter((counter) => counter - 1);
// //   };

// //   const onReset = () => {
// //     setCounter(0);
// //   };

// //   const onToggleLogin = () => {
// //     setIsLogin((isLogin) => !isLogin);
// //   };

// //   return (
// //     <div className={'w-50 mx-auto mb-10 shadow-sm'}>
// //       <div className={'border p-3 mt-5'}>
// //         <h1>
// //           Mening ismim - {firstName}, sharifim - {lastName}
// //         </h1>
// //         <a href={link}>Youtube kanalim</a>
// //         <p className={'text-center'}>{counter}</p>
// //         <div className={'d-flex justify-content-center'}>
// //           <button className={'btn btn-success'} onClick={onIncrement}>
// //             +
// //           </button>
// //           <button className={'btn btn-danger mx-2'} onClick={onDecrement}>
// //             -
// //           </button>
// //           <button className={'btn btn-dark'} onClick={onReset}>
// //             0
// //           </button>
// //         </div>
// //         {isLogin ? <p className="text-center mt-3">LOGIN</p> : null}
// //         <div className={'d-flex justify-content-center'}>
// //           <button className={'btn btn-outline-primary'} onClick={onToggleLogin}>
// //             TOGGLE
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// const App = () => {
//   const [isDisplay, setIsDisplay] = useState(true);

//   const deleteDisplayHandler = () => {
//     setIsDisplay(false);
//   };

//   return (
//     <>
//       <div className="container mt-5">
//         <button onClick={deleteDisplayHandler} className="btn btn-primary mb-3">
//           Display
//         </button>
//         {isDisplay && (
//           <User firstName="Asilbek" lastName="Karomatov" link={'youtube.com'} />
//         )}
//       </div>
//     </>
//   );
// };

// export default App;

// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       countTime: 0,
//     };
//   }

//   componentDidMount() {
//     console.log('Component did mount - Timer started');
//     this.timer = setInterval(() => {
//       this.setState((prevState) => ({
//         countTime: prevState.countTime + 1,
//       }));
//     }, 1000);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.countTime === 10 && prevState.countTime !== 10) {
//       alert("10 sekund o'tdi!");
//     }
//     console.log('Component did update - Timer updated');
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//     console.log('Component will unmount - Timer stopped');
//   }

//   render() {
//     return (
//       <div className="card p-3 mb-3">
//         <h2>User Timer Component</h2>
//         <p className="fs-4">
//           Vaqt: <b>{this.state.countTime}</b> sekund
//         </p>
//         <button
//           onClick={() => this.setState({ countTime: 0 })}
//           className="btn btn-warning"
//         >
//           Reset Timer
//         </button>
//       </div>
//     );
//   }
// }

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: navigator.onLine,
    };
  }

  handleOnline = () => this.setState({ isOnline: true });
  handleOffline = () => this.setState({ isOnline: false });

  componentDidMount() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  render() {
    const { isOnline } = this.state;
    return (
      <div
        className={`card p-4 mt-3 shadow ${isOnline ? 'border-success' : 'border-danger'}`}
      >
        <h2>Tarmoq Holati</h2>
        <div className={`alert ${isOnline ? 'alert-success' : 'alert-danger'}`}>
          {isOnline
            ? '✅ Siz onlaynsiz'
            : '❌ Aloqa uzildi. Internetni tekshiring!'}
        </div>
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>React Lifecycles Amaliyoti</h1>
      <User />
    </div>
  );
};

export default App;
