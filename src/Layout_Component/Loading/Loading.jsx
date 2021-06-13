import React, { useEffect, useState } from 'react'
import '../../scss/Loading.scss'
import imgloading from '../../assets/image/loading/loading.gif'

export default function Loading() {

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      let timeout =  setTimeout(() => {
            setIsLoading(false)
        },2000)

        return () => {
            clearTimeout(timeout)
        }

    },[])

    if(isLoading){
        return (
            <div className='loading'>
                <img src={imgloading}
                
                alt="loading" />
    
            </div>
        )
    } else {
        return ""
    }
   
}
