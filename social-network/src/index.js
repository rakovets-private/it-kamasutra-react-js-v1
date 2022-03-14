import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './redux/redux-store';
import './index.css';
import StoreContext from './storeContext';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App store={store}/>
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
