import swal from "@sweetalert/with-react";
import { DAT_GHE_THANH_CONG, GHE_DANG_DAT, LICH_CHIEU } from "../types/Type_Film"

const stateDefault = {
    lichChieu: {
        danhSachGhe: [],
        thongTinPhim: {
            tenPhim: '',
            ngayChieu: '',
            gioChieu: '',
            tenCumRap: '',
            tenRap: '',
            diaChi: '',
            hinhAnh: ''
        }

    },
    ghedangdat: []
}
export const LichChieuReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case LICH_CHIEU: {
            state.lichChieu = action.data;
            return { ...state }
        }

        case GHE_DANG_DAT: {

            let indexGhe = state.ghedangdat.findIndex(item => item.maGhe === action.data.maGhe)

            let newGheDangDat = state.ghedangdat



            if (indexGhe === -1) {
                newGheDangDat.push(action.data)
                // kiểm tra newGheDangDat có > 6 hay ko, nếu ko thì ms push vào
                if (newGheDangDat.length > 6) {
                    swal("Max your seats are 6",{
                        className:'confirmlogin'
                    })
                    newGheDangDat.pop()
                }
            } else {
                newGheDangDat.splice(indexGhe, 1)
            }
            state.ghedangdat = newGheDangDat
            return { ...state }
        }

        case DAT_GHE_THANH_CONG: {
            state.ghedangdat = [];
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}