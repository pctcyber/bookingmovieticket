import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import '../../scss/DatVe.scss'
import Header from '../Header/Header';
import { LichChieuReducer } from '../../redux/reducer/LichChieuReducer'
import { lichChieu_Action, listGheDangDat_Action } from '../../redux/actionCreater/LichChieu_Action/LichChieu_Action';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert'
import { history } from '../../App';
import { bookingTicket_Action } from '../../redux/actionCreater/BookingTicket_Action/BookingTicket_Action';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export default function DatVe(props) {

    const [timeM, setTimeM] = useState(5);
    const [timeS, setTimeS] = useState(0);
    const [temp, setTemp] = useState(0);


    // mã lịch chiếu
    const maLichChieu = props.match.params.id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(lichChieu_Action(maLichChieu))

    }, [])

    useEffect(() => {

        let tempTime = timeS;
        let time = setInterval(() => {
            tempTime = tempTime - 1;
            if (tempTime === -1) {
                setTimeM(a => a - 1);
                tempTime = 59
            }
            setTimeS(tempTime);
            if (document.getElementById("timephut")) {
                var timeM1 = document.getElementById("timephut").innerText;
            }
            if ((Number(timeM1) === 0 && tempTime === 0) || props.match.path !== '/datve/:id') {
                clearInterval(time);
            }
            if (Number(timeM1) === 0 && tempTime === 0) {
                swal({
                    title: "TIME'S UP",
                    text: "Do you want to book again ?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                    className: 'giughe',
                    buttons: ['No', 'Yes'],

                })
                    .then((willDelete) => {
                        if (willDelete) {
                            setTimeM(5);
                            setTemp(temp + 1);

                        } else {
                            history.push({ pathname: "/" });
                        }
                    });

            }

        }, 1000);

        return () => {
            clearInterval(time);
        }
    }, [temp])
    // list & info ghế
    const { danhSachGhe, thongTinPhim } = useSelector(state => state.LichChieuReducer.lichChieu)

    //  thời lượng
    const listHTRChieu = useSelector(state => state.FilmDetailReducer.filmDetail.heThongRapChieu)
    const itemHTRChieu = listHTRChieu[0].cumRapChieu
    const itemHTRChieu_1 = itemHTRChieu[0].lichChieuPhim
    const thoiLuong = itemHTRChieu_1[0].thoiLuong
    const { tenPhim, ngayChieu, gioChieu, tenCumRap, tenRap, hinhAnh, diaChi } = thongTinPhim



    // booking ticket
    const bookingTicket = () => {

        if (!localStorage.getItem('taiKhoan')) {
            swal('YOU NEED TO LOGIN', {
                className: 'confirmlogin'
            })
                .then((value) => {
                    if (value) {
                        history.push('/login')
                    }
                })
        } else {

            if (ghedangdat.length === 0) {
                swal('YOUR NEED TO CHOOSE A SEAT', {
                    className: 'confirmlogin'
                })
            } else {
                const dataTicket = {
                    maLichChieu: maLichChieu,
                    danhSachVe: ghedangdat,
                    taiKhoanNguoiDung: localStorage.getItem('taiKhoan')
                }
                dispatch(bookingTicket_Action(dataTicket))

            }

        }
    }

    // handle click ghế

    const { ghedangdat } = useSelector(state => state.LichChieuReducer)

    const handleClickGhe = (itemGhe) => {


        dispatch(listGheDangDat_Action(itemGhe))
    }

    // renderthongtinlichchieu
    const renderThongTinLichChieu = () => {
        return <div className='text-white thongtindatve'>
            <p className='text-center tenphim '> {tenPhim}</p>
            <p className='d-flex justify-content-between pb-2 ngaygio'><span>Date - Session</span>
                <span>
                    <span>{ngayChieu} </span> - <span className='text-warning'>{gioChieu}</span>
                </span>
            </p>
            <p className='d-flex justify-content-between pb-2 theaterfilm'>
                <span className='mr-2'>Theater</span> <span>{tenCumRap}</span>
            </p>
            <p className='d-flex justify-content-between pb-2 tenrap'>
                <span>Screen</span> <span>{tenRap}</span>
            </p>
            <p className='d-flex justify-content-between pb-2 tenrap'>
                <span>Running Times</span>
                <span>{thoiLuong} min</span>
            </p>
            <p className='d-flex justify-content-between pb-2 seats'>
                <span> Seat(s) : </span>
                <span>
                    {ghedangdat.map((item, index) => {
                        return <span className='mr-2 text-warning' key={index}>{item.stt}</span>

                    })}
                </span>
            </p>
            <p className='d-flex justify-content-between pb-2 totalprice'>
                <span>
                    Total Price :
                </span>
                <span className='text-warning ml-2'> {

                    ghedangdat.reduce((tongTien, itemGhe, index) => {
                        return tongTien += itemGhe.giaVe
                    }, 0).toLocaleString()
                } VND</span>
            </p>
            <button className='btn btn-success w-100'
                onClick={() => {
                    bookingTicket()
                }}
            >Booking Ticket </button>
        </div>
    }

    // renderTenCR thời gian đăt ghế

    const renderTenCR_tgDatGhe = () => {
        return <div className='row text-white'>
            <div className="col-6">
                <p className='text-center tencumrap mb-0'>{tenCumRap}</p>
                <p className='text-center'>{diaChi}</p>
            </div>
            <div className="col-6">
                <p className='text-center mb-0'>TIMMING THRESHOLD</p>

                <div className='countdown-wrapper text-center text-warning'>
                    <span className="time " id="timephut">0{timeM}</span> : <span>{`0${timeS}`.slice(-2)}</span>

                </div>
            </div>
        </div>

    }

    // renderdayghe
    const renderDayGhe = () => {
        return <div>
            {danhSachGhe?.slice(0, 50).map((itemGhe, index) => {
                // console.log(danhSachGhe);
                let brk = ((index + 1) % 10 === 0) ? <br /> : '';
                let ghe_thuong_vip = (itemGhe.loaiGhe === 'Vip') ? 'btn-primary' : 'ghe_thuong';
                let ghedadat = (itemGhe.daDat) ? 'ghedadat disabled' : '';

                let indexGheDD = ghedangdat.findIndex(item => item.maGhe === itemGhe.maGhe)

                let ghesellecting = (indexGheDD !== -1) ? 'ghedangchon' : '';

                return <Fragment
                    key={index}
                >
                    <button
                        className={`btn ghe  ${ghesellecting} ${ghe_thuong_vip} ${ghedadat}  `}
                        onClick={() => {
                            handleClickGhe(itemGhe)
                        }}
                    >
                        <span className='text-white'>
                            {itemGhe.tenGhe}
                        </span>
                    </button>
                    {brk}
                </Fragment>
            })}
        </div>
    }

    // render mô tả ghế

    const renderMotaGhe = () => {
        return <div className="motaghe text-white d-flex justify-content-around">
            <div >
                <button className='btn  casual'></button>
                <span>Casual</span>
            </div>
            <div>
                <button className='btn btn-primary '></button>

                <span>Vip</span>
            </div>
            <div>
                <button className='btn btn-success'></button>
                <span>Sellecting</span>
            </div>
            <div>
                <button className='btn btn-secondary'></button>
                <span>Sold</span>
            </div>
        </div>
    }

    // return 
    return (
        <div className='datve'>
            <Loading />
            <Header />
            <div className="row booking">

                <div className=" col-lg-7 screen">
                    <div className='w-100 tencr_tgiandatghe'>
                        {renderTenCR_tgDatGhe()}
                    </div>
                    <p className="bgscreen"></p>

                    <div className='lishGhe'>
                        {renderDayGhe()}
                    </div>
                    <div className='w-50% mt-3'>
                        {renderMotaGhe()}
                    </div>
                </div>
                <div className=" col-lg-5 chitietdatve">
                    {renderThongTinLichChieu()}
                </div>
            </div>
        </div>
    )
}
