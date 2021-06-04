import React, { useEffect, useState } from 'react'
import "../../scss/Carousel.scss"
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../scss/lity.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../../node_modules/lity/dist/lity'

import { listFilm_Action } from '../../redux/actionCreater/CumRap_ListFilm_Action/CumRap_ListFilm_Action'
import { history } from '../../App'


export default function Carousel_Slider() {

    const usedispatch = useDispatch();
    const listFilm_Carousel = useSelector(state => state.ListFilmReducer.listFilm).slice(12, 17)

    const hanleFilmDetail = (maPhim) => {
        history.push(`/detail/${maPhim}`)
    }
    const settings = {
        infinite: true,
        speed: 1700,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 2000,
        autoplay: true,
        cssEase: "ease"

    };


    useEffect(() => {
        usedispatch(listFilm_Action())

    }, [])


    return (
        <div className="carousel_film  ">
            <Slider {...settings}>
                {listFilm_Carousel.map((itemFilm, index) => {
                    return <div key={index}
                        className="card four_carousel"
                        onClick={() => {
                            hanleFilmDetail(itemFilm.maPhim)
                        }}
                    >
                        <img className="card-img-top "
                            src={itemFilm.hinhAnh}
                            style={{ width: '100%', height: '100%' }}
                            alt={itemFilm.tenPhim}
                        />

                        <a href={itemFilm.trailer} data-lity className='lityFilm'>
                            <button className='btn btncarousel' >
                                <FontAwesomeIcon icon='play' className='iconPlay text-white' />
                            </button>
                        </a>

                    </div>
                })}
            </Slider>
        </div>
    )
}


