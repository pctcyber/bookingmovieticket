import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import '../../scss/userInfor.scss'
import { NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { FaEdit } from 'react-icons/fa'
import { UpdateUserInfor_Action, UserInfor_Action } from '../../redux/actionCreater/UserInfor_Action/UserInfor_Action'
import moment from 'moment'
import { Fragment } from 'react'
import Loading from '../Loading/Loading'

export default function UserInfo() {

    const usedispatch = useDispatch()
    const userName = {
        taiKhoan: localStorage.getItem('taiKhoan')
    }

    const { taiKhoan, matKhau, email, soDT, hoTen, thongTinDatVe } = useSelector(state => state.UserInforReducer.userInfor)
    // console.log(thongTinDatVe);

    const [stateUserInfor, setstateUserInfor] = useState({

        taiKhoan: `${taiKhoan}`,
        matKhau: `${matKhau}`,
        email: `${email}`,
        soDt: `${soDT}`,
        maNhom: 'GP01',
        maLoaiNguoiDung: 'KhachHang',
        hoTen: `${hoTen}`,

    }
    )
    // console.log(stateUserInfor);

    // useEffect
    useEffect(() => {
        usedispatch(UserInfor_Action(userName))
    }, [])

    useEffect(() => {
        setstateUserInfor({
            ...stateUserInfor,
            taiKhoan: `${taiKhoan}`,
            matKhau: `${matKhau}`,
            email: `${email}`,
            soDt: `${soDT}`,
            hoTen: `${hoTen}`,
            maNhom: 'GP01',
            maLoaiNguoiDung: 'KhachHang',
        })
    }, [taiKhoan])


    // handlechange
    const handleChangeValue = (event) => {
        let { name, value } = event.target;
        setstateUserInfor({
            ...stateUserInfor,
            [name]: value
        })
    }

    // handleSubmit

    const handleSubmit = (event) => {
        event.preventDefault();
        usedispatch(UpdateUserInfor_Action(stateUserInfor))
    }

    // personalInfor
    const personalInfor = () => {
        return <form className='form'>
            <p className='text-center text-success'>EDIT PERSONAL INFORMATION</p>
            <div className="form-group d-flex align-items-center mb-0 divfirst">
                <span  >UserName</span>
                <input name='taiKhoan' type="text" className='form-control text-right username123 ' disabled={true} placeholder={taiKhoan} onChange={handleChangeValue} />
                <span className='changeusername'>You cann't change UserName</span>
            </div>
            <div className="form-group d-flex align-items-center mb-0">
                <span >Password</span>
                <input name='matKhau' type="password" className='form-control text-right username' placeholder={matKhau} onChange={handleChangeValue} />
            </div>
            <div className="form-group d-flex align-items-center mb-0">
                <span >Email</span>
                <input name='email' type="email" className='form-control text-right ' placeholder={email} onChange={handleChangeValue} />
            </div>
            <div className="form-group d-flex align-items-center mb-0">
                <span >Phone Number</span>
                <input name='soDt' type="text" className='form-control text-right ' placeholder={soDT} onChange={handleChangeValue} />
            </div>
            <div className="form-group d-flex align-items-center mb-2">
                <span >FullName</span>
                <input name='hoTen' type="text" className='form-control text-right ' placeholder={hoTen} onChange={handleChangeValue} />
            </div>
            <div className='form-group '>
                <button className='form-control btn btn-success ' onClick={handleSubmit}>Update</button>
            </div>
        </form>
    }

    // booking history

    const bookingHistory = () => {
        return <div className='h-100'>
            <h4 className='table text-success text-center mt-3'>HISTORY BOOKING</h4>
            <table className='table table-borderless text-white d-inline-block h-90'>
                <thead>
                    <tr className=' row'>
                        <th className='col-1 ordinal '>Ordinal</th>
                        <th className='col-2'>Film</th>
                        <th className='col-2'>Time Booking</th>
                        <th className='col-3 address'>Address</th>
                        <th className='col-2 screen'>Screen</th>
                        <th className='col-2 seats'>Seat(s)</th>
                    </tr>
                </thead>
                <tbody className='scrollit d-inline-block w-100'>
                    {thongTinDatVe.map((item, index) => {
                        return <tr key={index} className=' row'>
                            <th className='col-1 d-flex justify-content-center align-items-center'>{index + 1}</th>
                            <th className='col-2 d-flex justify-content-center align-items-center'>{item.tenPhim}</th>
                            <th className='col-2  '>
                                <span>{moment(item.ngayDat).format('YYYY-MM-DD')}</span>
                                <br />
                                <span>{moment(item.ngayDat).format('hh:mm:ss a')}</span>
                            </th>
                            <th className='col-3 '>{item.danhSachGhe[0].tenHeThongRap}</th>
                            <th className='col-2 '>{item.danhSachGhe[0].tenCumRap}</th>
                            <th className='col-2  '>{item.danhSachGhe.map((itemGhe, index) => {
                                let brk = ((index + 1) % 3 === 0) ? <br /> : '';

                                return <Fragment key={index}>
                                    <span className='mr-2' >
                                        {itemGhe.tenGhe}
                                    </span>
                                    {brk}
                                </Fragment>
                            })}</th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }

    return (
        <div className='userinfor'>
            <Loading/>
            <Header />
            <div className="row changeUserInfo">
                <div className="changeUserInfo_top d-flex align-items-center ">
                    <div className=" changeUserInfo_left nav flex-column nav-pills me-3 py-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                        <button className="nav-link pb-3" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Personal information</button>

                        <button className="nav-link pb-3" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Booking History</button>

                        {/* <NavLink to="/login_admin" className='text-center exit mt-3'>Admin</NavLink> */}
                        
                        <NavLink to="/" className='text-center exit mt-3'>Exit</NavLink>
                    </div>
                   
                   
                    <div className=" changeUserInfo_right tab-content text-white" id="v-pills-tabContent">
                        {/* personal infor */}
                        <div className="tab-pane fade show active personInfor" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                            {personalInfor()}

                        </div>

                        {/* booking history */}
                        <div className="tab-pane fade bookinghistory text-center" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                            {bookingHistory()}

                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
