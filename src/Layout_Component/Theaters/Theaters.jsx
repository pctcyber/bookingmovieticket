import moment from 'moment'
import React, { useEffect } from 'react'
import { NavLink } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../App'
import { heThongRap_Action } from '../../redux/actionCreater/CumRap_ListFilm_Action/CumRap_ListFilm_Action'
import '../../scss/Theater.scss'


export default function Theaters() {

    // detailFilm
    const detailFilm = (maPhim) => {
        history.push(`/detail/${maPhim}`)
    }
    const { dataCumRap } = useSelector(state => state.CumRapReducer)
    const datVe = (malichchieu) => {

        history.push(`/datve/${malichchieu}`)
    }
    const usedispatch = useDispatch()

    // useEffect
    useEffect(() => {
        usedispatch(heThongRap_Action())
    }, [])

    // renderLogo
    const renderCumRap = () => {
        // rendercumrap
        return <div className="d-flex rendercumrap">

            {/* rendercumrap_row1 */}
            <div className="rendercumrap_row1 nav flex-column nav-pills me-3"
                id="v-pills-tab" role="tablist"
                aria-orientation="vertical">
                {dataCumRap.map((itemCumRap, index) => {
                    let activeClass = (index === 0) ? 'active' : '';
                    return <button key={index}

                        className={`nav-link ${activeClass} mb-2`}
                        id="v-pills-home-tab"
                        data-bs-target={`#${itemCumRap.maHeThongRap}`}
                        type="button"
                        data-bs-toggle="pill"
                        role="tab"
                        aria-controls={`${itemCumRap.maHeThongRap}`}
                        aria-selected="true">
                        <img src={itemCumRap.logo}
                            alt={itemCumRap.tenCumRap}
                        />
                    </button>
                })}
            </div>
            {/* rendercumrap_row2 */}
            <div className="rendercumrap_row2 tab-content" id="v-pills-tabContent">
                {dataCumRap.map((itemCumRap, index) => {
                    let activeClass = (index === 0) ? 'active show' : '';
                    return <div key={index}
                        className={`tab-pane fade ${activeClass}`}
                        id={`${itemCumRap.maHeThongRap}`}
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"

                    >
                        {/* renderlogocumrap */}
                        <div className="d-flex renderlogo">
                            {/* renderlogo_row1 */}
                            <div className="renderlogo_row1 nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                                {itemCumRap.lstCumRap.map((item, index) => {
                                    let active = (index === 0) ? 'active show' : '';

                                    return <div key={index}
                                        className={`nav-link ${active}`}
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target={`#${item.maCumRap}`}
                                        type="button" role="tab"
                                        aria-controls={`${item.maCumRap}`}
                                        aria-selected="true">

                                        <span className='tencumrap_infor'>

                                            {item.tenCumRap}
                                        </span>

                                        {/* diachi */}
                                        <p className='diachi'

                                        >{item.diaChi}</p>
                                    </div>

                                })}

                            </div>

                            {/* renderlogo_row2 */}
                            <div className="renderlogo_row2 tab-content" id="v-pills-tabContent">
                                {itemCumRap.lstCumRap.map((item, index) => {
                                    let active = (index === 0) ? 'active show' : '';
                                    return <div key={index}
                                        className={`tab-pane fade ${active}`}
                                        id={`${item.maCumRap}`}
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab">
                                        {item.danhSachPhim.slice(3, 8).map((item, index) => {
                                            return <div className='mr-2 mb-3' key={index}>
                                                <div className="row info_film">
                                                    <span className='col-3 hinhfilm' onClick={() => {
                                                        detailFilm(item.maPhim)
                                                    }}>

                                                        <img src={item.hinhAnh} alt={`${item.tenPhim}`} />
                                                    </span>
                                                    <span className='col-9 col9_infor'>
                                                        <p className='tenphim_infor'>   {item.tenPhim} </p>
                                                        <div>
                                                            {item.lstLichChieuTheoPhim.slice(0, 3).map((item, index) => {
                                                                return <span className=' mr-3 lichchieu_infor '
                                                                    onClick={() => {
                                                                        datVe(`${item.maLichChieu}`)
                                                                    }}
                                                                    key={index}>
                                                                    {moment(item.ngayChieuGioChieu).format('hh:mm a')}
                                                                </span>
                                                            })}
                                                        </div>
                                                    </span>
                                                </div>

                                            </div>
                                        })}
                                    </div>

                                })}
                            </div>
                        </div>




                        {/*  */}
                    </div>
                })}
            </div>
            {/*  */}

        </div>
    }

    return (
        <div className='container theater'>
            {renderCumRap()}
        </div >
    )
}
