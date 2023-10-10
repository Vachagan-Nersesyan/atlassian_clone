import React, { Suspense, lazy } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import { Provider } from 'react-redux';
import store from './redux/redux-store';


const LoginComp = lazy(() => import("./components/LoginComp"))
const RegisterComp = lazy(() => import("./components/LoginComp/RegisterComp/RegisterScp"))
const VerifyComp = lazy(() => import("./components/LoginComp/RegisterComp/VerifyComp/VerifyScp"))
const CantLoginComp = lazy(() => import("./components/LoginComp/CantLoginComp/CantLoginScp"))





const App: React.FC<OwnProps> = () => {
  return (
    <div className="App">
      <div className='App_container'>
        <BrowserRouter>

        <Provider store={store}>

        </Provider>

          <Suspense fallback={<div>Loading...</div>}>

            <Routes>

              <Route path='/login' element={<LoginComp />} />
              <Route path='/register' element={<RegisterComp />} />
              <Route path='/register/verify' element={<VerifyComp />} />
              <Route path='/login/resetpassword' element={<CantLoginComp />} />

              <Route path='/' element={<LoginComp />} />



            </Routes>

          </Suspense>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;


type OwnProps = {}