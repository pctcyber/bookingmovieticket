import { bookingMovieService } from "../../../service/BookingMovieService"
import "../../../scss/Signup.scss"
import { NavLink } from 'react-router-dom'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { history } from "../../../App"
import { PASSWORD,   } from "../../types/Type_Film"

// signupAction_api
export const signUpAction_Api = (inforUser) => {
    return async dispatch => {

        try {

            let { status } = await bookingMovieService.signUpUser(inforUser)

            if (status === 200) {
                Swal.fire({
                    customClass: 'alertSignupSuccess',
                    title: 'Signed In Successfully',
                    icon: 'success',
                    width: '40%',
                    confirmButtonText:'You can login with this account now'
                })

                history.push('/login')
               
            }


        } catch (error) {

            Swal.fire({
                customClass: 'alertSignupError',
                title: `${error.response.data}`,
                icon: 'warning',
                width: '40%',
                showConfirmButton:true
                               

            })
        }
    }
}

// loginAction_api
export const LoginAction_Api = (inforUser) => {
    return async dispatch => {

        try {

            let {data,status} = await bookingMovieService.loginUser(inforUser)
            if(status === 200){
                let {taiKhoan,accessToken} = data
                localStorage.setItem('taiKhoan',taiKhoan)
                localStorage.setItem('accessToken',accessToken)
                
               Swal.fire({
                customClass: 'alertSignupSuccess',
                title: 'LogIn Successfully',
                icon: 'success',
                width: '40%',
                
               })

               history.push('/')
               
            }
        }
        catch (error){
            Swal.fire({
                customClass: 'alertSignupError',
                title: `${error.response.data}`,
                icon: 'warning',
                width: '40%',
                showConfirmButton:true
                               
            })
        }
    }
}