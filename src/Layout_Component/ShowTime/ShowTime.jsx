import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import '../../scss/Showtime.scss'

export default function ShowTime() {

    const listFilm_Showtime = useSelector(state => state.ListFilmReducer.listFilm)
    const {listFilmSapChieu} = useSelector(state => state.ListFilmReducer)
   
    // setting line listFilm
    const settings1 = {
        autoplaySpeed: 2000,
        autoplay: true,
        cssEase: "ease",
        className: "center1",
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        centerPadding: "200px",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]

    };
    // settings2 listFilm đang chiếu
    const settings2 = {
        className: 'center2',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplaySpeed: 2000,
        autoplay: true,
        cssEase: "ease"
    };
    return (
        <div className='container my-5 showtime'>
            <ul className="nav nav-pills  row text-white txt_playing_comming" id="pills-tab" role="tablist">
                <li className="nav-item col-6 d-flex justify-content-end" role="presentation">
                    <button className="nav-link active btn_playing" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Now Playing</button>
                </li>

                <li className="nav-item col-6" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Comming Soon</button>
                </li>

            </ul>
            {/* nội dung */}
            <div className="tab-content" id="pills-tabContent">
                {/* phim đang chiếu */}
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                    <Slider {...settings1}>
                        {
                            listFilm_Showtime.map((itemFilm, index) => {
                                return <div key={index}
                                    className="card text-center mb-4 ">

                                    <div
                                        style={{ backgroundImage: `url(${itemFilm.hinhAnh})` }}
                                        className='hinhPhim'
                                    >
                                        {/* trailer  */}
                                        <a href={itemFilm.trailer} data-lity className='lityFilm'>
                                            <button className='btn ' >
                                                <FontAwesomeIcon icon='play' className='iconPlay text-white' />
                                            </button>
                                        </a>
                                    </div>
                                    <p className='danhGia '>{itemFilm.danhGia}</p>

                                    {/* tên phim & đánh giá & filmDetail*/}
                                    <div className="card-body p-0 mt-2">
                                        <p className='text text-center p-2 textTenFilm  '>{itemFilm.tenPhim}</p>

                                        <NavLink 
                                        className='btn  btnGetTicket w-100  text-white
                                        '
                                       to ={`/detail/${itemFilm.maPhim}`}
                                        >
                                            Get Ticket
                                        </NavLink>
                                    </div>
                                </div>
                            })
                        }
                    </Slider>

                    {/* change list film đang chiếu when screen < 576px */}
                    <Slider {...settings2}>
                        {
                            listFilm_Showtime.map((itemFilm, index) => {
                                return <div key={index}
                                    className="card text-center mb-4 ">

                                    <div
                                        style={{ backgroundImage: `url(${itemFilm.hinhAnh})` }}
                                        className='hinhPhim'
                                    >
                                        {/* trailer  */}
                                        <a href={itemFilm.trailer} data-lity className='lityFilm'>
                                            <button className='btn ' >
                                                <FontAwesomeIcon icon='play' className='iconPlay text-white' />
                                            </button>
                                        </a>
                                    </div>
                                    <p className='danhGia '>{itemFilm.danhGia}</p>

                                    {/* tên phim & đánh giá */}
                                    <div className="card-body p-0 mt-2">
                                        <p className='text text-center p-2 textTenFilm  '>{itemFilm.tenPhim}</p>

                                        <NavLink 
                                        className='btn  btnGetTicket w-100  text-white
                                        '
                                       to ={`/detail/${itemFilm.maPhim}`}
                                        >
                                            Get Ticket
                                        </NavLink>
                                    </div>
                                </div>
                            })
                        }
                    </Slider>
                </div>

                {/* phim sắp chiếu */}
                <div className="tab-pane fade phimsapchieu" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Slider {...settings1}>
                        {
                            listFilmSapChieu.map((itemFilm, index) => {
                                return <div key={index}
                                    className="card text-center mb-4 ">

                                    <div
                                        style={{ backgroundImage: `url(${itemFilm.hinhAnh})` }}
                                        className='hinhPhim'
                                    >
                                        {/* trailer  */}
                                        <a href={itemFilm.trailer} data-lity className='lityFilm'>
                                            <button className='btn ' >
                                                <FontAwesomeIcon icon='play' className='iconPlay text-white' />
                                            </button>
                                        </a>
                                    </div>
                                    <p className='danhGia '>{itemFilm.danhGia}</p>

                                    {/* tên phim & đánh giá & filmDetail*/}
                                    <div className="card-body p-0 mt-2">
                                        <p className='text text-center p-2 textTenFilm  '>{itemFilm.tenPhim}</p>

                                       
                                    </div>
                                </div>
                            })
                        }
                    </Slider>

                    {/* change list film đang chiếu when screen < 576px */}
                    <Slider {...settings2}>
                        {
                            listFilm_Showtime.map((itemFilm, index) => {
                                return <div key={index}
                                    className="card text-center mb-4 ">

                                    <div
                                        style={{ backgroundImage: `url(${itemFilm.hinhAnh})` }}
                                        className='hinhPhim'
                                    >
                                        {/* trailer  */}
                                        <a href={itemFilm.trailer} data-lity className='lityFilm'>
                                            <button className='btn ' >
                                                <FontAwesomeIcon icon='play' className='iconPlay text-white' />
                                            </button>
                                        </a>
                                    </div>
                                    <p className='danhGia '>{itemFilm.danhGia}</p>

                                    {/* tên phim & đánh giá */}
                                    <div className="card-body p-0 mt-2">
                                        <p className='text text-center p-2 textTenFilm  '>{itemFilm.tenPhim}</p>

                                        
                                    </div>
                                </div>
                            })
                        }
                    </Slider>
               </div>

            </div>
        </div>

    )
}
