import { data } from "jquery"
import { FILM_DETAIL } from "../types/Type_Film"

const stateDefault = {
    filmDetail:{
        heThongRapChieu:[
            {cumRapChieu:[
                {lichChieuPhim:[
                    {thoiLuong:''}
                ]}
            ]}
        ]
    }
}

export const FilmDetailReducer = (state = stateDefault,action) => {
    switch(action.type){
        case FILM_DETAIL:{
            // console.log(action.data);
            state.filmDetail = action.data
        }
        default:{
            return {...state}
        }
    }
}