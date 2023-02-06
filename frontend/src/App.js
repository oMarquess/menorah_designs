//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from "./components/BlogDetail";
import Category from './components/Category';
import NoPage from './components/NoPage';
import ReactDOM from 'react-dom/client';


const App = () => (
  <Router>
    <Layout>
      
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/blog' element={<Blog/>} />
        <Route exact path='/blog/:id' element={<BlogDetail/>} />
        <Route exact path='/category/:id' element={<Category/>} />
        <Route exact path='/nopage' element={<NoPage/>} />
    
    </Layout>
  </Router>
);


export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);