import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../scss/New.scss'
import { FaHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Slider from "react-slick";
const settingslogo = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 900,
    cssEase: "linear",
    pauseOnHover: true
};

export default function News() {

    const { dataCumRap } = useSelector(state => state.CumRapReducer)
    // promotion
    const rendercontentPromotion = () => {
        return <div className='promotion mt-4'>
            {/* logorap */}
            <div className="nav logorap justify-content-center" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home1" type="button" role="tab" aria-controls="nav-home1" aria-selected="true">
                    <img src={`${dataCumRap[0]?.logo}`} alt="1" />
                </button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile1" type="button" role="tab" aria-controls="nav-profile1" aria-selected="false"> <img src={`${dataCumRap[1]?.logo}`} alt="1" /></button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact1" type="button" role="tab" aria-controls="nav-contact1" aria-selected="false"> <img src={`${dataCumRap[2]?.logo}`} alt="1" /></button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact2" type="button" role="tab" aria-controls="nav-contact2" aria-selected="false"> <img src={`${dataCumRap[3]?.logo}`} alt="1" /></button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact3" type="button" role="tab" aria-controls="nav-contact3" aria-selected="false"> <img src={`${dataCumRap[4]?.logo}`} alt="1" /></button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact4" type="button" role="tab" aria-controls="nav-contact4" aria-selected="false"> <img src={`${dataCumRap[5]?.logo}`} alt="1" /></button>
            </div>
            {/* thongtinkhuyenmai */}
            <div className="tab-content thongtinkhuyenmai mt-4" id="nav-tabContent">
                {/* bhd */}
                <div className="tab-pane fade show active" id="nav-home1" role="tabpanel" aria-labelledby="nav-home-tab">

                    <Slider {...settingslogo}>

                        <img src="https://www.bhdstar.vn/wp-content/uploads/2017/10/BHD-Star-SuatSom-710x320.jpg" alt="1" />

                        <img src="https://www.bhdstar.vn/wp-content/uploads/2018/03/admin-ajax.jpeg" alt="2" />
                        <img src="https://www.bhdstar.vn/wp-content/uploads/2017/03/BHDStar-Movie365_710x320.jpg" alt="3" />
                        <img src="https://www.bhdstar.vn/wp-content/uploads/2021/03/AW_BHD_1920x1080.png" alt="4" />
                        <img src="https://www.bhdstar.vn/wp-content/uploads/2021/03/BHD-Website-Banner-1920x1080-01.png" alt="5" />
                    </Slider>
                </div>

                {/* cgv */}
                <div className="tab-pane fade" id="nav-profile1" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <Slider {...settingslogo}>

                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/n/9/n95_240x201_1.jpg" alt="1" />
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/a/happy-new-year-240x201_1.png" alt="2" />
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/d/o/doreamon_web_app_240x201.jpg" alt="3" />
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-crm-team-chi-1-duoc-2-240x201_1.jpg" alt="4" />
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_79k_240x201_170920.png" alt="5" />
                    </Slider>

                </div>


                {/* cinesta */}
                <div className="tab-pane fade" id="nav-contact1" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Slider {...settingslogo}>
                        <img src="http://cinestar.com.vn/pictures/Hình%20nền%20CTKM/c'member.jpg" alt="2" />
                        <img src="http://cinestar.com.vn/pictures/Hình%20nền%20CTKM/c'member.jpg" alt="1" />
                        <img src="http://cinestar.com.vn/pictures/Hình%20nền%20CTKM/hssv.jpg" alt="3" />
                        <img src="http://cinestar.com.vn/pictures/big-star-_-trang-chủ-web.jpg" alt="5" />
                        <img src="http://cinestar.com.vn/pictures/c_ten.jpg" alt="4" />
                    </Slider>

                </div>

                {/* galaxy */}
                <div className="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Slider {...settingslogo}>
                        <img src="https://www.galaxycine.vn/media/2021/4/27/1135x660_1619508530964.jpg" alt="1" />
                        <img src="https://www.galaxycine.vn/media/2021/4/20/1135x660_1618909184475.jpg" alt="2" />
                        <img src="https://www.galaxycine.vn/media/2021/4/12/1135x660_1618212629019.jpg" alt="3" />
                        <img src="https://www.galaxycine.vn/media/2021/1/18/1035x660_1610956392715.png" alt="4" />
                        <img src="https://www.galaxycine.vn/media/2021/4/22/1135x660_1619065005049.jpg" alt="5" />
                    </Slider>
                </div>

                {/* lote */}
                <div className="tab-pane fade" id="nav-contact3" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Slider {...settingslogo}>
                        <img src="https://media.lottecinemavn.com/Media/Event/5a90d93aa3154ef689221fb534e59044.jpg" alt="1" />
                        <img src="https://media.lottecinemavn.com/Media/Event/50f2d32a285b4ef6b78d563dec61986e.jpg" alt="2" />
                        <img src="https://media.lottecinemavn.com/Media/Event/2991fe6486bb4acea8ab37ae43efa261.jpg" alt="3" />
                        <img src="https://media.lottecinemavn.com/Media/Event/dc1d22b92bd04592b8ec0d373bb9273c.jpg" alt="4" />
                        <img src="https://media.lottecinemavn.com/Media/Event/d9eadccd09384e97a0fb4672b0f04da0.jpg" alt="5" />
                    </Slider>
                </div>

                {/* megas */}
                <div className="tab-pane fade" id="nav-contact4" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Slider {...settingslogo}>
                        <img src="https://cms.megagscinemas.vn//media/76076/share-800x600.png?width=345&height=256" alt="1" />
                        <img src="https://cms.megagscinemas.vn//media/76318/tra_800x600.png?width=345&height=256" alt="2" />
                        <img src="https://cms.megagscinemas.vn//media/76281/refill-bắp_800x600.png?width=345&height=256" alt="3" />
                        <img src="https://cms.megagscinemas.vn//media/75681/u22-800x600_2020.png?width=345&height=256" alt="4" />
                        <img src="https://cms.megagscinemas.vn//media/75345/hour-800x600.png?width=345&height=256" alt="5" />
                    </Slider>
                </div>
            </div>

        </div>

    }

    // new
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)
    const [count3, setcount3] = useState(0)
    const [count4, setcount4] = useState(0)
    const [count5, setcount5] = useState(0)
    const changeCount1 = () => {
        if (count1 === 0) {
            document.getElementById('heartclick1').style.color = "red";
            setcount1(count1 + 1)
        } else {
            document.getElementById('heartclick1').style.color = "pink";

            setcount1(count1 - 1)
        }
    }
    const changeCount2 = () => {
        if (count2 === 0) {
            document.getElementById('heartclick2').style.color = "red";
            setcount2(count2 + 1)
        } else {
            document.getElementById('heartclick2').style.color = "pink";

            setcount2(count2 - 1)
        }
    }
    const changeCount3 = () => {
        if (count3 === 0) {
            document.getElementById('heartclick3').style.color = "red";
            setcount3(count3 + 1)
        } else {
            document.getElementById('heartclick3').style.color = "pink";

            setcount3(count3 - 1)
        }
    }
    const changeCount4 = () => {
        if (count4 === 0) {
            document.getElementById('heartclick4').style.color = "red";
            setcount4(count4 + 1)
        } else {
            document.getElementById('heartclick4').style.color = "pink";

            setcount4(count4 - 1)
        }
    }
    const changeCount5 = () => {
        if (count5 === 0) {
            document.getElementById('heartclick5').style.color = "red";
            setcount5(count5 + 1)
        } else {
            document.getElementById('heartclick5').style.color = "pink";

            setcount5(count5 - 1)
        }
    }
    const rendercontentNew24h = () => {
        return <div className='contentnew24h mt-5'>
            {/* rowfilm_1 */}
            <div className="row rowfilm_1">
                {/* godzilla */}
                <div className="col-6 film_col6">
                    <img src="https://variety.com/wp-content/uploads/2021/02/Adam-Wingard.jpg?w=681&h=383&crop=1" alt="123" />
                    <a href="https://variety.com/2021/film/news/adam-wingard-hardcore-comic-unviersal-godzilla-vs-kong-1234980304/" target='_blank'>
                        ‘Godzilla vs. Kong’ Filmmaker Adam Wingard to Direct Comic Adaptation
                        ‘Hardcore’ at Universal
                   </a>

                    <div className='d-flex align-items-center'>
                        <FaHeart id='heartclick1' onClick={changeCount1} className='heart mr-2'></FaHeart>
                        <span className='count'>
                            {count1}
                        </span>
                    </div>
                </div>

                {/* lindsaylohan */}
                <div className="col-6 film_col6">

                    <img src="https://variety.com/wp-content/uploads/2021/05/Lindsay-Lohan-02.jpg?w=681&h=383&crop=1" alt="234" />

                    <a href="https://variety.com/2021/film/news/lindsay-lohan-returns-acting-netflix-romantic-comedy-christmas-movie-1234979200/" target='_blank'>Lindsay Lohan to Return to Acting by Starring in Netflix Christmas Romantic Comedy (EXCLUSIVE)</a>



                    <div className='d-flex align-items-center'>
                        <FaHeart id='heartclick2' onClick={changeCount2} className='heart mr-2'></FaHeart>
                        <span className='count'>
                            {count2}
                        </span>
                    </div>
                </div>
            </div>
            {/* rowfilm_2*/}
            <div className="row mt-3 rowfilm_2">
                {/* tranformer */}
                <div className="col-4 film_col4">
                    <img src="https://img.cinemablend.com/filter:scale/quill/b/e/7/1/7/5/be71753f6a2407b948e75f3e8f03c0d8e198a45f.jpg?mw=600" alt="345" />
                    <a href="https://www.cinemablend.com/news/2567879/transformers-5-other-franchises-immune-bad-reviews-twilight" target='_blank'>Transformers And 5 Other Franchises That Are Immune To Bad Reviews</a>


                    <div className='d-flex align-items-center'>
                        <FaHeart id='heartclick3' onClick={changeCount3} className='heart mr-2'></FaHeart>
                        <span className='count'>
                            {count3}
                        </span>
                    </div>
                </div>

                {/* alltheboy */}
                <div className="col-4 film_col4">
                    <img src="https://img.cinemablend.com/filter:scale/quill/c/8/7/e/e/8/c87ee8254691235f090ebe67157a37b8747e45a5.jpg?mw=600" alt="456" />

                    <a href="https://www.cinemablend.com/news/2567458/to-all-the-boys-3-lana-condor-honest-thoughts-lara-jean-and-peter-kavinsky-relationship-status-final-film-noah-centineo?pv=related_list" target='_blank'>One of Netflix’s biggest runaway hits came in 2018 with To All The Boys I’ve Loved Before</a>



                    <div className='d-flex align-items-center'>
                        <FaHeart id='heartclick4' onClick={changeCount4} className='heart mr-2'></FaHeart>
                        <span className='count'>
                            {count4}
                        </span>
                    </div>
                </div>

                {/* thebacker */}
                <div className="col-4 film_col4 ">
                    <img src="https://img.cinemablend.com/filter:scale/quill/1/b/d/7/a/2/1bd7a2abff3c97854a821ee3e456d1a9e6eba132.jpg?mw=600" alt="567" />

                    <a href="https://www.cinemablend.com/television/2567044/the-baker-and-the-beauty-what-to-watch-on-netflix-if-you-like-the-abc-series?pv=related_list" target='_blank'>The Baker And The Beauty: What To Watch On Netflix If You Like The ABC Series</a>



                    <div className='d-flex align-items-center'>
                        <FaHeart id='heartclick5' onClick={changeCount5} className='heart mr-2'></FaHeart>
                        <span className='count'>
                            {count5}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    }

    const renderNew = () => {
        return <div className='new mt-5'>
            {/* row1 */}
            <nav className='row1'>
                <div className=" nav d-flex justify-content-center" id="nav-tab" role="tablist">
                    <button className="tintuc1 nav-link active mr-4" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Lastest News</button>

                    <button className="khuyenmai1 nav-link ml-4" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Promotion</button>

                </div>
            </nav>

            {/* row2 */}
            <div className="row2 tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                    {rendercontentNew24h()}
                </div>

                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    {rendercontentPromotion()}
                </div>

            </div>


        </div>
    }

    return (
        <div >
            {renderNew()}
        </div>
    )
}
