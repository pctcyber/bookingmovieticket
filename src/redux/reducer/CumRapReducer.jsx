import { DATA_CUMRAP } from "../types/Type_Film"

const stateDefault = {
    dataCumRap: []
}

export const CumRapReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case DATA_CUMRAP: {
            state.dataCumRap = action.data
            return { ...state }
        }

        default: {
            return { ...state }
        }
    }
}
