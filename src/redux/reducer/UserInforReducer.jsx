import { USER_INFOR } from "../types/Type_Film"

const stateDefault = {
    userInfor:{
        taiKhoan:'',
        matKhau:'',
        email:'',
        soDT:'',
        hoTen:'',
        thongTinDatVe:[],
    }
}

export const UserInforReducer = (state = stateDefault,action) => {
    switch (action.type){

        case USER_INFOR : {
            state.userInfor =action.data
            return {...state}
        }

        default : {
            return {...state}
        }
    }
}