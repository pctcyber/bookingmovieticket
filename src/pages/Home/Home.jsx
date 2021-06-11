import React, { useEffect } from 'react'
import Header from '../../Layout_Component/Header/Header';
import ScrollIndicator from '../../Layout_Component/ScrollIndicator/ScrollIndicator';
import "../../scss/Home.scss"
import Carousel from '../../Layout_Component/Carousel/Carousel_Slider';
import ShowTime from '../../Layout_Component/ShowTime/ShowTime';
import Theaters from '../../Layout_Component/Theaters/Theaters';
import News from '../../Layout_Component/News/News';
import Footer from '../../Layout_Component/Footer/Footer';
import Promotion from '../../Layout_Component/Promotion/Promotion';
import Carousel_Slider from '../../Layout_Component/Carousel/Carousel_Slider';
import ToolBlock from '../../Layout_Component/ToolBlock/ToolBlock';
import '../../scss/Home.scss'
import Loading from '../../Layout_Component/Loading/Loading';
import BackToTopBtn from '../../Layout_Component/BackToTop/BackToTopBtn';
export default function Home(props) {
    const { path } = props.match
    
    return (
        <div className='home'>
            <Loading />
            <Header path={path} />
            <ScrollIndicator />
            <Carousel_Slider />

          
            <ShowTime />

            <Theaters />

            <News />
            <Footer />
            <BackToTopBtn/>
        </div>
    )
}
