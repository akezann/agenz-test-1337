import React, { useState} from 'react';
import logo from '../../assets/images/Vector.png'
import logotext from '../../assets/images/Vector1.png'
import Star from '../../assets/images/Star.png'
import User from '../../assets/images/user.png'
import Offres from '../../assets/images/offres.png'
import './Nav.css'
import {VscTriangleDown} from 'react-icons/vsc'
import {FaBars} from 'react-icons/fa'

function Nav() {
  // mobile state to handle responsive devices
  const [mobile, setMobile] = useState(false);

  // those states to handle dropDowns if their open or close. im tryin to use vanilla CSS with react.
  const [openAcha, setOpenAcha] = useState(false);
  const [openEstim, setOpenEstim] = useState(false);
  const [openCredit, setOpencredit] = useState(false);

  const handleOpenAcha = () => {
    setOpenAcha(!openAcha)
    if (openEstim)
      setOpenEstim(!openEstim)
    if (openCredit)
      setOpencredit(!openCredit)

  }

  const handleOpenEstim = () => {
    setOpenEstim(!openEstim)
    if (openAcha)
      setOpenAcha(!openAcha)
    if (openCredit)
      setOpencredit(!openCredit)

  }

  const handleOpenCredit = () => {
    setOpencredit(!openCredit)
    if (openAcha)
      setOpenAcha(!openAcha)
    if (openEstim)
      setOpenEstim(!openEstim)
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
                  <li className="acheter" onClick={handleOpenAcha}>
                        Acheter
                        <span className='polygon'><VscTriangleDown /></span>
                        {
                            openAcha ?
                            <ul className='dropAchat'>
                              <li>Drop one</li>
                              <li>Drop to</li>
                              <li>Drop thre</li>
                            </ul>
                            :
                            null                      
                        }
                    </li>
                  <li className="louer">Louer</li>
                  <li className="estimer" onClick={handleOpenEstim}>
                    Estimer
                    <span className='polygon'><VscTriangleDown /></span>
                    {
                            openEstim ?
                            <ul className='dropEstim'>
                              <li>Drop one</li>
                              <li>Drop to</li>
                              <li>Drop thre</li>
                            </ul>
                            :
                            null                      
                        }
                  </li>

                  <li className="prix">Prix immobiliers</li>
                  <li className="credit" onClick={handleOpenCredit}>
                      credit
                    <span className='polygon'><VscTriangleDown /></span>
                    {
                          openCredit ?
                          <ul className='dropCredit'>
                            <li>Drop one</li>
                            <li>Drop to</li>
                            <li>Drop thre</li>
                          </ul>
                          :
                          null                      
                      }
                    </li>
                  <li className="agences">Agences</li>
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
                  <li className="acheter" onClick={handleOpenAcha}>
                        Acheter
                        <span className='polygon'><VscTriangleDown style={{}} /></span>
                        {
                            openAcha ?
                            <ul className='dropAchat'>
                              <li>Drop one</li>
                              <li>Drop to</li>
                              <li>Drop thre</li>
                            </ul>
                            :
                            null                      
                        }
                    </li>
                  <li className="louer">Louer</li>
                  <li className="estimer" onClick={handleOpenEstim}>
                    Estimer
                    <span className='polygon'><VscTriangleDown /></span>
                    {
                            openEstim ?
                            <ul className='dropEstim'>
                              <li>Drop one</li>
                              <li>Drop to</li>
                              <li>Drop thre</li>
                            </ul>
                            :
                            null                      
                        }
                  </li>

                  <li className="prix">Prix immobiliers</li>
                  <li className="credit" onClick={handleOpenCredit}>
                      credit
                    <span className='polygon'><VscTriangleDown /></span>
                    {
                          openCredit ?
                          <ul className='dropCredit'>
                            <li>Drop one</li>
                            <li>Drop to</li>
                            <li>Drop thre</li>
                          </ul>
                          :
                          null                      
                      }
                    </li>
                  <li className="agences">Agences</li>
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