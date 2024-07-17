import React from 'react';
import MovieSelector from './components/MovieSelector';
import UploadButton from './components/UploadButton';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Interactive Media Toolbar</h1>
      <MovieSelector />
      <UploadButton />
    </div>
  );
};

export default App;