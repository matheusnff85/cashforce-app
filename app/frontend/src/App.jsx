import React from 'react';
import MainPage from './pages/MainPage';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <main>
      <Sidebar />
      <MainPage />
    </main>
  );
}

export default App;
