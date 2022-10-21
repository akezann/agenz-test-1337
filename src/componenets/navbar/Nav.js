import React, {useState} from 'react';
import logo from '../../assets/images/Vector.png'
import logotext from '../../assets/images/Vector1.png'
import Star from '../../assets/images/Star.png'
import User from '../../assets/images/user.png'
import Offres from '../../assets/images/offres.png'
import './Nav.css'
import {VscTriangleDown} from 'react-icons/vsc'
import {FaBars} from 'react-icons/fa'

function Nav() {
  const [mobile, setMobile] = useState(false);
  const [acheterClick, setAcheterClick] = useState(false);
  const [estimerClick, setEstimerClick] = useState(false);
  const [creditClick, setCreditClick] = useState(false);

  const handleDrop = (list) => {
      if (list === 'acheter')
        setAcheterClick(!acheterClick);
      if (list === 'estimer')
        setEstimerClick(!estimerClick);
      if (list === 'credit')
        setCreditClick(!creditClick);
  }

  const handleMobile = () => {
    setMobile(!mobile);
  }
  return (
      <div className="navbar">
        <div className="logo-sec">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="logotext">
                <img src={logotext} alt="logotext" />
              </div>
              <p>.ma</p>
        </div>
        <div className='nav-big-screen notMobile'>
          <div className="mid-links">
              <ul className='links'>
                  <li className="acheter" onClick={handleDrop}>
                    <a href='Acheter'>
                        Acheter
                        <span className='polygon'><VscTriangleDown style={{}} /></span>
                       
                    </a>
                    </li>
                  <li className="louer"><a href='Louer'>Louer</a></li>
                  <li className="estimer"><a href='estimer'>
                    Estimer
                    <span className='polygon'><VscTriangleDown /></span>
                  </a>
                    
                  </li>

                  <li className="prix"><a href='PrixImmobiliers'>Prix immobiliers</a></li>
                  <li className="credit"><a href='credit'>credit<span className='polygon'><VscTriangleDown /></span></a>
                    
                  </li>
                  <li className="agences"><a href='PrixImmobiliers'>Agences</a></li>
              </ul>
          </div>
          <div className="end-links">
            <ul className='links'>
                  <li className="arabe"><img src={Star} alt="star" />Arabe</li>
                  <li className="connexion"><img src={User} alt="star" />Connexion</li>
                  <li className="offres">Offres pro<a href="proOffres"><img src={Offres} alt="star" /></a></li>
              </ul>
          </div>
      </div>
      {
        mobile ?
          <div className='nav-mobile-screen mobile'>
            <div className="mid-links">
                <ul className='links'>
                    <li className="acheter" onClick={handleDrop}>
                      <a href='Acheter'>
                          Acheter
                          <span className='polygon'><VscTriangleDown style={{}} /></span>
                      </a>
                      </li>
                    <li className="louer"><a href='Louer'>Louer</a></li>
                    <li className="estimer"><a href='estimer'>Estimer<span className='polygon'><VscTriangleDown /></span></a></li>
                    <li className="prix"><a href='PrixImmobiliers'>Prix immobiliers</a></li>
                    <li className="credit"><a href='credit'>credit<span className='polygon'><VscTriangleDown /></span></a></li>
                    <li className="agences"><a href='PrixImmobiliers'>Agences</a></li>
                </ul>
            </div>
            <div className="end-links">
              <ul className='links'>
                    <li className="arabe"><img src={Star} alt="star" />Arabe</li>
                    <li className="connexion"><img src={User} alt="star" />Connexion</li>
                    <li className="offres">Offres pro<a href="proOffres"><img src={Offres} alt="star" /></a></li>
                </ul>
            </div>
          </div>
        : null
      }
      <button className='btn-mobile' onClick={handleMobile}>
        <FaBars />
      </button>
    </div>
    
  )
}

export default Nav