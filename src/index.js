import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './redux/redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import CreatePage from './pages/CreatePage';
import ListPage from './pages/ListPage';
import './styles/main.css';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreatePage />}></Route>
          <Route path="/employee-list" element={<ListPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);