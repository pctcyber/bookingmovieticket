import React, { useEffect, useState } from 'react'
import "../../scss/ScrollIndicator.scss"
export default function ScrollIndicator() {

    const [scrollTop, setScrollTop] = useState(0)
    const onScroll = () => {
        
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll/height)*100;
        setScrollTop(scrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll',onScroll)
        return ()=> window.removeEventListener('scroll',onScroll)
    })

    return (
        <div>
            <div className='progressMainWrapper'>
            <div className="progressMainStyle" style = {{width:`${scrollTop}%`}}>

            </div>
            </div>
        </div>
    )
}
