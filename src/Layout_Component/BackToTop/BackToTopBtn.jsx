import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { BackTop } from 'antd';
import '../../scss/BackToTop.scss'

export default function BackToTopBtn() {
const scrollTop = () => {
    window.scrollTo({
        top:'0',
        behavior:'smooth'
    })
}
    return (
        <div className='btn_backtotop'>
            <BackTop onClick={scrollTop}/>
        </div>
    )
}