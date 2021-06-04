import { bookingMovieService } from "../../../service/BookingMovieService";
import { GHE_DANG_DAT, LICH_CHIEU } from "../../types/Type_Film";


export const lichChieu_Action = (malichchieu) => {
    return async dispatch => {

        try{
            const {data,status} = await bookingMovieService.detailPhongVe(malichchieu)
            if(status === 200){
                dispatch({
                    type: LICH_CHIEU,
                    data
                })
            }
        }
        catch (error){
            console.log(error);
        }

    }
}

export const listGheDangDat_Action = (gheDangDat) => {
    return dispatch => {

        dispatch({
            type:GHE_DANG_DAT,
            data:gheDangDat
        })

    }
}