import axios from "axios";
import { DOMAIN } from "../utility/constant/settingSystem"

class BookingMovie {
    constructor() { }

    //  lấy danh sách phim dang chieu
    getListFilm = () => {
        return axios({
            url:`${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`,
            method:'GET'
        })

    }
    //  lấy danh sách phim sắp chieu
    getListFilmSapChieu = () => {
        return axios({
            url:`${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07`,
            method:'GET'
        })

    }



    // lấy thông tin lich chiếu hê thống rạp
    getThongTinLichChieuHTR = () => {
        return axios ({
            url:`${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
            method:'GET'
        })
    }

    // lich chiu cum rap
    listFimCumRap = () => {
        return axios ({
            url:`${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP01`,
            method:'GET'
        })
    }
    
    // Sign Up User
    signUpUser = (InfoUser) => {
        return axios({
            url:`${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
            method:'POST',
            data: InfoUser
        })
    }

    // Login User
    loginUser = (inforUser) => {
        return axios({
            url:`${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
            method:'POST',
            data:inforUser
        })
    }

    // lấy thông tin lich chieu film

    filmInfo = (mafilm) => {
        return axios ({
            url:`${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${mafilm}`,
            method:'GET'
        })
    }
    // chi tiết phòng vé

    detailPhongVe = (malichchieu) => {
        return axios ({
            url:`${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${malichchieu}`,
            method:'GET'
        })
    }

    // booking

    bookingTicket = (databooking) => {
        return axios ({

            url:`${DOMAIN}/api/QuanLyDatVe/DatVe`,
            method:'POST',
            data: databooking,

            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}

        })
    }

    // USER INFOR
    userInfor = (userName) => {
        return axios ({
            url:`${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
            method:'POST',
            data:userName,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}

        })
    }

    // update inforUser

    updateInforUser = (userInfor) => {
        return axios ({
            url:`${DOMAIN}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method:'PUT',
            data:userInfor,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}

        })
    }

    // addFilm 
    addFilm = (formData) => {
        return axios({
            url:`${DOMAIN}/api/QuanLyPhim/ThemPhimUploadHinh`,
            method:'POST',
            data:formData
        })        
    }
    //  delete film
    deleteFilm = (maphim,token) => {
        console.log(token);
        return axios({
            url:`${DOMAIN}/api/QuanLyPhim/XoaPhim?MaPhim=${maphim}`,
            method:'DELETE',
            data: maphim,
            headers: {"Authorization": "Bearer " + token}
        })
    }
}

export const bookingMovieService = new BookingMovie();