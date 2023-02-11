import React from 'react';
import './App.css';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider 
    theme={{}}>
      <div>
        App started
      </div>
    </ConfigProvider>
  );
}

export default App;
