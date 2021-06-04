import { LIST_FILM, LIST_FILM_SAP_CHIEU } from "../types/Type_Film";

const stateListFilm_Default = {
    listFilm: [],
    listFilmSapChieu:[]
}

export const ListFilmReducer = (state = stateListFilm_Default, action) => {

    switch (action.type) {
        // phim đang chiếu
        case LIST_FILM: {

            state.listFilm = action.data
            return { ...state }
        }

        // film sắp chiếu
        case LIST_FILM_SAP_CHIEU: {

            state.listFilmSapChieu = action.data
            return { ...state }
        }



        default: {

            return { ...state }
        }

    }
}