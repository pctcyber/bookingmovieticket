import { bookingMovieService } from "../../../service/BookingMovieService";
import swal from "@sweetalert/with-react";
import { listFilm_Action } from "../CumRap_ListFilm_Action/CumRap_ListFilm_Action";
import { history } from "../../../App";

// addFilm
export const addFilm_Action = (formData) => {
    return async dispatch => {

        try{
            let {data,status} = await bookingMovieService.addFilm(formData);
          
            if(status === 200){

                dispatch(listFilm_Action())
                swal({
                    title: "Update Success!",
                    icon: "success",
                    className: 'confirmlogin'
                })
               
            }

        } 
        catch(error){
            swal({
                title: `${error.response.data}`,
                icon: "warning",
                className: 'confirmlogin'
            })
        }
    }
}

// deleteFilm
export const deleteFilm_Action = (maphim) => {
    return async dispatch => {

        try{
            
            let token = localStorage.getItem('accessTokenAdmin')
            let { data,status} = await bookingMovieService.deleteFilm(maphim,token)
            if(status === 200){
                console.log(data);
            }

        }
        catch(error){
            console.log(error.response);
        }
    }
}