import React, { useState } from 'react'
import './Navbar.css'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faUser, faXmark, faCircleH} from '@fortawesome/free-solid-svg-icons'
// import SearchResultList from '../BoutiqueHotel/SearchResultList'

const Navbar=()=>{
  const [click, setClick] = useState(false);
  const [modal, setModal] = useState(false);

  const togglePopup =() =>{
    setModal(!modal);
  }

  const handleClick =() =>{
    setClick(!click);
    const reservations = document.querySelector('.reservations');
    const secondaryBtn = document.querySelector('.secondary_btn');

    reservations.classList.toggle('active');
    secondaryBtn.classList.toggle('active');
  };

const navLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/aboutUs',
    display:'About us'
  },
  {
    path:'/destinations',
    display:'Destinations'
  },
  {
    path:'/rooms',
    display:'Boutique Hotel'
  },
  {
    path:'/contact',
    display:'Contact Us'
  },  
]

  return (
    <header>
      <Container className='header_container'>
        <Row>
          <div className='nav_container'>
          <div className='nav_above'>
            <div className='logo'><FontAwesomeIcon icon={faCircleH} />otel N2</div>
            <div className='nav_right'>
          <Button className='reservations' onClick={togglePopup}>🔍Search reservation</Button>
          <Button className='primary_btn'><Link to='/login'>Log in <FontAwesomeIcon icon={faUser} /></Link></Button>
          <Button className='secondary_btn'><Link to='/reservation'>Book a room </Link></Button>
            </div>
          </div>
          <nav className='navigation'>
            <ul className={`menu ${click ? 'active' : ''}`}>
              {navLinks.map((item,index)=>(
                  <li className='nav_item' key={index}>
                    <NavLink to={item.path} className={navClass =>
                      navClass.isActive ? "active_link" :" "}>{item.display}</NavLink>
                  </li>
                ))}
            </ul>
            <div className='dropdownMenu' onClick={handleClick}>
              <FontAwesomeIcon icon={click ? faXmark : faBars}/>
            </div>
          </nav>
          </div>
        </Row>
      </Container>
      {/* {modal && <SearchResultList togglePopup={togglePopup} />} */}
    </header>
  )
}
export default Navbar