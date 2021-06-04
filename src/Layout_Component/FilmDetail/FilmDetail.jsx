import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import { FilmInfo_Action } from '../../redux/actionCreater/thongTinFilm_Action/thongTinFilm_Action'
import { FaHandPointRight } from 'react-icons/fa'
import '../../scss/filmDetail.scss'
import moment from 'moment'
import 'sweetalert2/src/sweetalert2.scss'
import { history } from '../../App';

import 'sweetalert2/src/sweetalert2.scss'
import Loading from '../Loading/Loading';
export default function FilmDetail(props) {
    const { id } = props.match.params
    const dispatch = useDispatch()
    const { filmDetail } = useSelector(state => state.FilmDetailReducer)
    // console.log(filmDetail);
    const datVe = (malichchieu) => {

        history.push(`/datve/${malichchieu}`)
    }
    useEffect(() => {
        dispatch(FilmInfo_Action(id))
    }, [])
    return (
        <div>
            <Loading />
            <Header />
            <div className="bgFilm" style={{ backgroundImage: `url(${filmDetail.hinhAnh})` }} >
                <div className='filmdetail ' >
                    {/* row 1 */}
                    <div className="row row1 ">
                        <div className=" col-lg-5 col-xl-4 p-4 col41">
                            <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})` }}
                                className='bgFilmDetail'
                            >

                            </div>
                        </div>
                        <div className=" col-lg-7 col-xl-8 col42 text-white">
                            <p >  <span className='filmname text-primary ml-0'> {filmDetail.tenPhim}</span></p>
                            <p > Release Date: <span>{moment(filmDetail.ngayKhoiChieu).format('YYYY-MM-DD')}</span></p>
                            <p>Evaluate: <span>{filmDetail.danhGia}/10</span></p>
                            <p className='description'>Description: <span> {filmDetail.moTa}</span></p>
                            <a href="#getticket" className='btngetticket p-2'> <FaHandPointRight className='mr-2' />Choose Times & Get Ticket</a>
                        </div>
                        {/* row2 Lịch Chiếu */}

                        <div className=" row2 my-1  " id='getticket'>
                            {filmDetail.heThongRapChieu?.length === 0 ? <p className='lead text-center text-danger display-4'>NO SHOWTIMES FOR THIS FILM !</p> : <div className="d-flex align-items-start responsive">
                                {/* Cụm rạp */}
                                <div className="row2CumRap nav pr-4  nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">


                                    {filmDetail.heThongRapChieu?.map((item, index) => {

                                        let active = (index === 0) ? 'active' : '';

                                        return <button className={`nav-link btncumrap text-left ${active}`} key={index}
                                            id="v-pills-home-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target={`#${item.maHeThongRap}`}
                                            type="button" role="tab"
                                            aria-controls={`${item.maHeThongRap}`}
                                            aria-selected="true">
                                            <span>
                                                <img src={item.logo}
                                                    style={{ width: '50px', height: '50px' }}
                                                    alt={item.tenHeThongRap} />
                                            </span>
                                            <span className='ml-3 tenhethongrap'>{item.tenHeThongRap}</span>

                                        </button>
                                    })}
                                </div>

                                {/* ngày chiếu giờ chiếu */}

                                <div className="row2ngaygiochieu tab-content " id="v-pills-tabContent">
                                    {filmDetail.heThongRapChieu?.map((item1, index1) => {
                                        let active = (index1 === 0) ? 'active' : '';

                                        return <div className={`tab-pane fade show ${active}`}
                                            key={index1}
                                            id={`${item1.maHeThongRap}`}
                                            role="tabpanel"
                                            aria-labelledby="v-pills-home-tab">
                                            {
                                                item1.cumRapChieu.map((item2, index2) => {
                                                    return <div key={index2} className='mt-3 itemcumrap'>
                                                        <p className='mb-2 tenCumRap'>{item2.tenCumRap}</p>
                                                        <div className='d-flex w-100 justify-content-evenly'>{item2.lichChieuPhim.slice(0, 4).map((itemLichChieu, index3) => {
                                                            return <button key={index3}
                                                                className='text-white mb-2 p-2 ngaychieugiochieu'
                                                                onClick={() => {
                                                                    datVe(itemLichChieu.maLichChieu)
                                                                }}
                                                            >
                                                                <span className='ngaychieu'>
                                                                    {moment(itemLichChieu.ngayChieuGioChieu).format('YYYY-MM-DD')}

                                                                </span>
                                                                <br />
                                                                <span className=''>
                                                                    {moment(itemLichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                </span>
                                                            </button>
                                                        })}</div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    })}

                                </div>
                            </div>}

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}
