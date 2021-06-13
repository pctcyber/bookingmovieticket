import React, { useState } from 'react'
import "../../scss/Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import '../../../node_modules/antd/dist/antd.css'
import { FaUser, FaPowerOff, FaTimes } from "react-icons/fa"
import logo from "../../assets/image/logo/logoHeader.jpg"
import { Button, Popover } from 'antd'
import { Link } from 'react-scroll'
import { history } from '../../App'
import { Fragment } from 'react'
// drawer
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import { FaBars } from 'react-icons/fa'
import { set } from 'react-hook-form'


export default function Header(props) {


    const taiKhoan = localStorage.getItem("taiKhoan")
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [userAccount, setUserAccount] = useState(localStorage.getItem('taiKhoan'))

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const { path } = props
    // handleLogout
    const handleLogout = () => {
        setVisible(false)
        setUserAccount(null)
        localStorage.clear()

    }
    // scrolltoshowtime
    const scrollToShowTime = () => {

        if (path === '/') {
            setVisible(false)
            setTimeout(() => {
                window.scrollTo({
                    top: 490,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 300)
        } else if (path !== '/') {
            history.push('/')
            setTimeout(() => {
                window.scrollTo({
                    top: 476,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 3000)
        }

    }
    // scrolltoTheater
    const scrollToTheater = () => {
        if (path === '/') {
            setVisible(false)
            setTimeout(() => {
                window.scrollTo({
                    top: 1400,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 300)

        } else if (path !== '/') {
            history.push('/')
            setTimeout(() => {
                window.scrollTo({
                    top: 1440,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 3000)
        }

    }
    // scrolltonew
    const scrollToNew = () => {
        if (path === '/') {
            setVisible(false)

            setTimeout(() => {
                window.scrollTo({
                    top: 2050,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 300)
        } else if (path !== '/') {
            history.push('/')
            setTimeout(() => {
                console.log(234);
                window.scrollTo({
                    top: 2050,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 3000)
        }
    }
    // handleUserInfor
    const handleUserInfor = () => {
        history.push('/userinfo')
    }

    const handleVisibleChange = (visible1) => {
        setVisible1(visible1)
    }
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
                                <div className="col-9 colum9 ">
                                    <ul>

                                        <li><a onClick={scrollToShowTime}>Showtime</a></li>
                                        <li><a onClick={scrollToTheater}>Theatres</a></li>
                                        <li><a onClick={scrollToNew}>News</a></li>
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
                                                        visible={visible1}
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

                        {/* nav-moble */}
                        <div className='nav-mobile'>
                            <Button
                                className='btnshowdrawer'
                                type="primary"
                                onClick={showDrawer}>
                                <FaBars />
                            </Button>
                            <Drawer
                                className='showdrawer'
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                            >
                                {
                                    <div>
                                        <div className='user_title'>
                                            <span>
                                                {taiKhoan ? <span className='txt_taikhoan'
                                                    onClick={handleUserInfor}
                                                >{taiKhoan}</span> : <FaUser />}
                                            </span>
                                            <span>
                                                <FaTimes
                                                    className='icontime'
                                                    onClick={() => {
                                                        setVisible(false)
                                                    }}></FaTimes>
                                            </span>
                                        </div>
                                        <div className="user_link">
                                            <p
                                                onClick={scrollToShowTime}>Showtime</p>
                                            <p
                                                onClick={scrollToTheater}
                                            >Theaters</p>

                                            <p
                                                onClick={scrollToNew}
                                            >News</p>
                                            <p onClick={() => {
                                                history.push('/login')
                                            }}
                                            > Login                                           </p>
                                            <p onClick={() => {
                                                history.push('/signup')
                                            }}>
                                                Signup
                                            </p>

                                            <p onClick={() => {
                                                handleLogout()
                                            }}>
                                                Logout</p>
                                        </div>
                                    </div>
                                }
                            </Drawer>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
