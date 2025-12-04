import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* 엄근진 모드 레츠고 */}
    <BrowserRouter> {/* 이 안에 들어가면 라우터 기능 사용 가능 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);