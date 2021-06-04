import {combineReducers} from 'redux'
import {ListFilmReducer} from "./ListFilmReducer"
import {CumRapReducer} from './CumRapReducer'
import {FilmDetailReducer} from './FilmDetailReducer'
import {LichChieuReducer} from './LichChieuReducer'
import {UserInforReducer} from './UserInforReducer'
export const rootReducer = combineReducers({

    ListFilmReducer,
    CumRapReducer,
    FilmDetailReducer,
    LichChieuReducer,
    UserInforReducer
    
})