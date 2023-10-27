//https://buy.stripe.com/test_4gwcMQa8H97z6Ri3cc
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import './App.css';
// import Home from './Home';
import Question from './question';
import Article from './article';
// import CreatePost from './CreatePost';
// import Login from './Login';
import Payment from './payment';
import FindQuestion from './findquestion';
import './article.css';


function App() {
  const [isAuth, setIsAuth] = useState(false);


  const signout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      alert('You have Successfully Logged Out!! :D')
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> DEV@DEAKIN </Link>
        <Link to="/article"> Articles </Link>
        <Link to="/question"> Questions </Link>
        <Link to="/payment"> Plans </Link>
        <Link to="/findquestion">FindQuestion</Link>
       
         

      </nav>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/question" element={<Question />} />
        <Route path="/article" element={<Article />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/findquestion" element={<FindQuestion/>} />
  

      </Routes>
    </Router>
  );
}

export default App;