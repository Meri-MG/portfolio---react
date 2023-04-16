import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import Blog from "./components/Blog/Blog"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx"
import PrivateRoute from "./utils/PrivateRoute.jsx"
import Dashboard from "./components/Admin/Dashboard"
import Inscription from "./components/Inscription/Inscription.jsx"
import NotFound from "./components/NotFound/notFound"
import AddArticle from './components/Admin/AddArticle';
import Article from './components/Blog/Article/Article';
import EditArticle from './components/Admin/editArticle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

      <Route path="/" element={<App/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/connexion" element={<Login/>} />
      <Route path="/aboalsim" element={<Inscription/>} />
      <Route path="/aboalsim" element={<Inscription/>} />
      <Route path='*' exact={true} element={<NotFound/>} />
      <Route path='/article/:userid'  element={<Article/>} />
      <Route path="/editArticle/:userid" element={<EditArticle />} />

      <Route element={<PrivateRoute/>}>
      <Route path="/Dashboard/:userid" element={<Dashboard />}  />
      <Route path="/AddArticle/:userid" element={<AddArticle />}  />
      </Route>

      </Routes>
    </Router>
 
  </React.StrictMode>
);
