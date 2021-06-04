import { bookingMovieService } from "../../../service/BookingMovieService"
import { LIST_FILM } from "../../types/Type_Film"
import { LIST_FILM_SAP_CHIEU } from "../../types/Type_Film"
import { DATA_CUMRAP } from "../../types/Type_Film"

// listFilm
export const listFilm_Action = () => {
    return async dispatch => {

        try {

            // phim đang chiếu
            let result1 = await bookingMovieService.getListFilm()

            if( result1.status=== 200){
               dispatch({
                   type: LIST_FILM,
                   data:result1.data
               })
            }
            // phim sắp chiếu
            let result2 = await bookingMovieService.getListFilmSapChieu()

            if(result2.status === 200){
               dispatch({
                   type: LIST_FILM_SAP_CHIEU,
                   data:result2.data
               })
            }



        }
        catch (error){
            console.log(error.response);
        }
    }
}

// hê thống rạp

export const heThongRap_Action = () => {
    return async dispatch => {

        let {data,status} = await bookingMovieService.getThongTinLichChieuHTR()
        if(status === 200){
            dispatch({
                type:DATA_CUMRAP,
                data
            })
        }
    }
}

