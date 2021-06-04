import React, { useState } from 'react'
import "../../scss/Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import '../../../node_modules/antd/dist/antd.css'
import { FaUser, FaPowerOff } from "react-icons/fa"
import logo from "../../assets/image/logo/logoHeader.jpg"
import { Button, Popover } from 'antd'
import { Link } from 'react-scroll'
import { history } from '../../App'
import { Fragment } from 'react'

export default function Header(props) {
    const { path } = props
    // handleLogout
    const handleLogout = () => {
        history.push('/')
        setUserAccount(null)
        localStorage.clear()

        localStorage.clear()
    }
    // scrolltoshowtime
    const scrollToShowTime = () => {

        if (path === '/') {
            window.scrollTo({
                top: 490,
                left: 0,
                behavior: 'smooth'
            })
        } else if (path !== '/') {
            history.push('/')
            setTimeout(() => {
                window.scrollTo({
                    top: 476,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 4500)
        }

    }
    // scrolltoTheater
    const scrollToTheater = () => {
        if (path === '/') {
            window.scrollTo({
                top: 1400,
                left: 0,
                behavior: 'smooth'
            })
        } else if (path !== '/') {
            history.push('/')
            setTimeout(() => {
                window.scrollTo({
                    top: 1440,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 4500)
        }

    }
    // scrolltonew
    const scrollToNew = () => {
        if (path === '/') {
            window.scrollTo({
                top: 2050,
                left: 0,
                behavior: 'smooth'
            })
        } else if (path !== '/') {
            history.push('/')
            setTimeout(() => {
                console.log(234);
                window.scrollTo({
                    top: 2050,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 4500)
        }
    }
    // scrolltopromotion
    const scrollToPromotion = () => {
        if (path === '/') {
            window.scrollTo({
                top: 2050,
                left: 0,
                behavior: 'smooth'
            })
        } else if (path !== '/') {
            history.push('/')
            setTimeout(() => {
                console.log(234);
                window.scrollTo({
                    top: 2050,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 4500)
        }
    }
    const [visible, setVisible] = useState(false)
    const hide = () => {
        setVisible(false)
    }
    const handleVisibleChange = (visible) => {
        setVisible(visible)
    }
    const [userAccount, setUserAccount] = useState(localStorage.getItem('taiKhoan'))
    return (
        <div>
            <div className='header'>
                <div className="row">
                    <div className="col-3 colum2">
                        <NavLink to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="col-9 colum10" >
                        {/* nav-pc */}
                        <div className="nav-pc">
                            <div className="row">
                                <div className="col-9 colum9">
                                    <ul>
                                        <li><a onClick={scrollToShowTime}>Showtime</a></li>
                                        <li><a onClick={scrollToTheater}>Theatres</a></li>
                                        <li><a onClick={scrollToNew}>News</a></li>
                                        <li><a onClick={scrollToPromotion}>Promotion</a></li>
                                    </ul>
                                </div>
                                <div className="col-3 colum3">
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <span className='spanUserIcon'>
                                                <FaUser />
                                            </span>
                                        </div>
                                        <div className="col-9 p-0">
                                            {!userAccount ?
                                                <div>
                                                    <NavLink to="/login" className='userLogin mx-2'>Log In</NavLink>
                                                    <NavLink to='/signup' className='userSignup'>Sign Up</NavLink>
                                                </div>
                                                :
                                                <div className='loginsignup'>
                                                    <NavLink to='/userinfo'
                                                        className=' text-success userInfor mx-2'>
                                                        {localStorage.getItem('taiKhoan')}
                                                    </NavLink>


                                                    <Popover
                                                        content={<NavLink
                                                            to='/'
                                                            className='btn text-success btnLogout'
                                                            onClick={() => {
                                                                setUserAccount(null)
                                                                localStorage.clear()
                                                            }}>Logout</NavLink>}

                                                        trigger="click"
                                                        visible={visible}
                                                        onVisibleChange={handleVisibleChange}
                                                    >
                                                        <Button className='ml-2 powerOff' type="primary">
                                                            <FaPowerOff className='iconPoweroff' /></Button>
                                                    </Popover>

                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* nav-btn */}
                        <label htmlFor="nav-mobile-input" className="nav-btn">
                            <FontAwesomeIcon icon="bars" className="iconbars">
                            </FontAwesomeIcon></label>

                        <input hidden type="checkbox" id='nav-mobile-input' className="nav-input" />

                        {/* nav-mobile */}
                        <label htmlFor="nav-mobile-input" className="nav-mobile">
                            <div className='row p-3 row1'>
                                <div className="col-8 colum6right">

                                    {!userAccount ? <FontAwesomeIcon icon='user' className='iconUser' /> :
                                        <div className='loginsignup'>
                                            <NavLink to='/userinfo'
                                                className=' text-success userInfor mx-2'>
                                                {localStorage.getItem('taiKhoan')}
                                            </NavLink>
                                        </div>
                                    }

                                </div>
                                <div className="col-4 text-right colum6left">
                                    <img className='iconTimes' src="https://fullstack.edu.vn/assets/images/close-black.svg" alt="close" />
                                </div>

                                <div className="row">

                                </div>
                            </div>
                            <div className="row row2">
                                <ul>

                                    {!userAccount ?
                                        <Fragment>

                                            <li> <NavLink to="/login" className='userLogin '>Log In</NavLink>
                                            </li>
                                            <li> <NavLink to='/signup' className='userSignup'>Sign Up</NavLink>
                                            </li>
                                        </Fragment>

                                        : ''}
                                    <li><a onClick={scrollToShowTime}>Showtime</a></li>
                                    <li><a onClick={scrollToTheater}>Theatres</a></li>
                                    <li><a onClick={scrollToNew}>News</a></li>
                                    <li><a onClick={scrollToPromotion}>Promotion</a></li>
                                    <li><a onClick={handleLogout}>Logout</a></li>

                                </ul>
                            </div>

                        </label>
                        <label htmlFor="nav-mobile-input" className="nav-overlay">
                        </label>
                    </div>
                </div>
            </div>
        </div >
    )
}
