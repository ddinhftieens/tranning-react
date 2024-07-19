import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo';
import './assets/css/custom.css'
import Part2 from './Part2';
import Form from './Form';
import Student from './Student';
import { Provider } from 'react-redux';
import store from './app/store/store';
import { BrowserRouter } from 'react-router-dom';
import DemoRouter from './DemoRouter';
import RouterHook from './RouterHook';
import DemoRouter2 from './DemoRouter2';
import RoutersHook from './RoutersHook';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      {/* <DemoRouter /> */}
      {/* <RouterHook /> */}
      {/* <DemoRouter2 /> */}
      <RoutersHook />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
