import { bookingMovieService } from "../../../service/BookingMovieService";
import swal from 'sweetalert'
import { history } from "../../../App";
import { lichChieu_Action } from "../LichChieu_Action/LichChieu_Action";
import { DAT_GHE_THANH_CONG } from "../../types/Type_Film";

export const bookingTicket_Action = (dataTicket) => {

    return async dispatch => {

        try {

            let { data, status } = await bookingMovieService.bookingTicket(dataTicket)

            if (status === 200) {

                dispatch(await lichChieu_Action(dataTicket.maLichChieu))
                dispatch({
                    type: DAT_GHE_THANH_CONG
                })
                swal({
                    title: `${data}`,
                    className: 'confirmlogin',
                    icon: 'success'
                })
            }

        } catch (error) {
            console.log(error);
        }


    }
}