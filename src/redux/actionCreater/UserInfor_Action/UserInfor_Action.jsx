import swal from "@sweetalert/with-react";
import { history } from "../../../App";
import { bookingMovieService } from "../../../service/BookingMovieService";
import { USER_INFOR } from "../../types/Type_Film";

export const UserInfor_Action = (userName) => {
    return async dispatch => {
        try {
            const { data, status } = await bookingMovieService.userInfor(userName)
            if (status === 200) {
                dispatch({
                    type: USER_INFOR,
                    data
                })
            }
        }
        catch (error) {
            console.log(error.response.data);
        }
    }
}

export const UpdateUserInfor_Action = (userInfor) => {

    return async dispatch => {
        try {

            const { data, status } = await bookingMovieService.updateInforUser(userInfor)
            if (status === 200) {
                swal({
                    title: "Update Success!",
                    icon: "success",
                    className: 'confirmlogin'
                })
                    .then((value) => {
                        if (value) {
                            history.push("/")
                        }
                    })
            }
        }
        catch (error) {
            swal({
                title: `${error.response.data}`,
                icon: "warning",
                className: 'confirmlogin'
            })
        }
    }
}