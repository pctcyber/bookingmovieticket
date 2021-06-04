import { bookingMovieService } from "../../../service/BookingMovieService";
import { FILM_DETAIL } from "../../types/Type_Film";


export const FilmInfo_Action = (maFilm) => {
    return async dispatch => {
        try{

           const {status,data} = await bookingMovieService.filmInfo(maFilm)
          if(status === 200){
              dispatch({
                  type:FILM_DETAIL,
                  data
              })
          }

        }
        catch (error){
            console.log(error.response);
        }
    }
}