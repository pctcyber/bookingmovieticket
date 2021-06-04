import React, { useState } from 'react'
import "../../scss/Footer.scss"
import footerimg from '../../assets/image/footer/footer.jpg'
import { useSelector } from 'react-redux'
export default function Footer() {
    const {dataCumRap} = useSelector(state=>state.CumRapReducer)
    return (
        <div className='footerfilm '>
            
            <div className=" textfooter">
                <img src={footerimg} alt="footer" />
                <div className='pl-3 '>
                    <p className='mb-0 text-justify'>Giấy ĐKKD số: 123456789 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp ngày 22 tháng 01 năm 2020 .</p>
                    
                    <p>Email: pct.hcmut@gmail.com</p>
                </div>
            </div>
            <div className=" logofooter">
                <p className='text-center mb-0'>PARTNER</p>
                <div className='logorap mt-1'>
                    <div className="row mb-2">
                    <a className='col-5  pr-0' href="https://www.bhdstar.vn/" target='_blank'>
                        <img src={`${dataCumRap[0]?.logo}`} alt="1" />
                    </a>
                    <a className='col-2  px-0' href="https://www.cgv.vn/" target='_blank'>
                        <img src={`${dataCumRap[1]?.logo}`} alt="1" alt="" />
                    </a>
                    <a className='col-5 pl-0' href="http://cinestar.com.vn/" target='_blank'>
                        <img src={`${dataCumRap[2]?.logo}`} alt="1" alt="" />
                    </a>
                    </div>

                        <div className="row">
                    <a className='col-5  pr-0' href="http://galaxycine.vn/" target='_blank'>
                        <img src={`${dataCumRap[3]?.logo}`} alt="1" alt="" />
                    </a>
                    <a className='col-2  px-0' href="http://lottecinemavn.com/LCHS/index.aspx" target='_blank'>
                        <img src={`${dataCumRap[4]?.logo}`} alt="1" alt="" />
                    </a>
                    <a className='col-5 pl-0' href="https://www.megagscinemas.vn/" target='_blank'>
                        <img src={`${dataCumRap[5]?.logo}`} alt="1" alt="" />
                    </a>
                    </div>
                </div>
            </div>
            <div className=" bocongthuong">
                <img src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" alt="bocongthuong" />
            </div>
            </div>
    )
}
