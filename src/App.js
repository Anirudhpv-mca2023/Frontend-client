import './App.css';
import Navbar from './navbar.js'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from './home.js';
import Create from './create.js';
import Deposit from './deposit.js';
import Withdraw from './withdraw.js';
import Alldata from './alldata.js';
import userContext from './context.js';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <userContext.Provider value={{'users':[]}}>
     <HashRouter>
      <Routes>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/create" element={<Create/>} ></Route>
        <Route path="/deposit" element={<Deposit/>} ></Route>
        <Route path="/withdraw" element={<Withdraw/>} ></Route>
        <Route path="/alldata" element={<Alldata/>} ></Route>
      </Routes>
     </HashRouter>
     </userContext.Provider>
    </>
  );
}
  export default App;








// import logo from './logo.svg';
// import './App.css';
// import Navbar from'./navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './home';
// import Create from './create';
// import Alldata from './alldata';
// import Withdraw from './withdraw';
// import Deposit from './deposit';
// import {HashRouter,Routes,Route} from 'react-router-dom';
// import userContext from './context';

// export default function App() {
//   return (
//     <>
//     <Navbar></Navbar>
//     <userContext.Provider value={{'users':[{
//       name:'xyz',
//       email:'xyz@gmail.com',
//       password:'123',
//       amount:'100'
//       }]}}
//       >
//       <HashRouter>
//         <Routes>
//         <Route path="/home" element={<Home/>} ></Route>
//           <Route path='/create' element={<Create/>}></Route>
//           <Route path='/deposit' element={<Deposit/>}></Route>
//           <Route path='/withdraw' element={<Withdraw/>}></Route>
//           <Route path='/alldata' element={<Alldata/>}></Route>
//         </Routes>
//       </HashRouter>
//     </userContext.Provider>
//     {/* <Create></Create>
//     <Deposit></Deposit>
//     <Withdraw></Withdraw>
//     <Alldata></Alldata> */}
//     </>
//   );
// }