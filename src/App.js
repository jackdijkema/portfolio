import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Project from './components/Projects/Project';

function App() {
  return (
    <main> 
        <Navbar />
        <Profile /> 
        <Project />
    </main>
  );
}

export default App;