import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiAddToQueue } from "react-icons/bi";
import { Link ,useParams} from 'react-router-dom';


import '../topbar/topbar.css';

const Nav = () => {
    const userid = localStorage.getItem("userid").replace(/"/g, "");
    const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
<Link to={`/Dashboard/${userid}`} className={activeNav}><AiOutlineHome /></Link>
<Link to={`/AddArticle/${userid}`} className={activeNav}><BiAddToQueue /></Link>
      
    </nav>
  )
}

export default Nav;