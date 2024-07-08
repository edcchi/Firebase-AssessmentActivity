import './App.css';
//import Modal from './components/Modal';
//import ReminderList from './components/ReminderList';

import { BrowserRouter, Route, NavLink, Routes, Navigate} from 'react-router-dom'

import React, {useState} from 'react';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Article from './pages/Article';
import FormArticle from './pages/FormArticle';
import EditArticle from './components/EditArticle';
import SignIn from './components/SignIn';
import { signOut } from 'firebase/auth';
import {auth} from './firebase/config';
import SignUp from './components/SignUp';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false); 
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
      {loggedIn ? (
        <>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/new">New Article</NavLink>
          <button className='logout' onClick={handleLogout}>Logout</button> {/* Logout button */}
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About /> }/>
          <Route path="/contact" element={<Contact /> }/>
          <Route path="/articles/:urlId" element={<Article/> }/>
          <Route path="/new" element={<FormArticle /> }/>
          <Route path="/edit/:id" element={<EditArticle /> }/>
          <Route path="/*" element={<Navigate to="/"/> }/>
        </Routes>

        </>
        ) : (

        <Routes>
            <Route path="/" element={<SignIn setLoggedIn={setLoggedIn} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
