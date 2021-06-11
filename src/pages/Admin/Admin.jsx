import React from 'react'
import ManageFilm from './ManageFilm'
import ManageUser from './ManageUser'
import '../../scss/admin.scss'
import logo from '../../assets/image/logo/logoHeader.jpg'
import { history } from '../../App'
export default function Admin() {
    const manageAdmin = () => {
        return <div className="d-flex align-items-start admin">

            {/* columleft */}
            <div className="columleft nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                <img src={logo} alt="logo" onClick={() => {
                    history.push('/')
                }}/>

                <button className="nav-link active my-5" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Manage Film</button>
                
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Manage User</button>

            </div>
            {/* columright */}
            <div className="columright tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <ManageFilm></ManageFilm>
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                    <ManageUser></ManageUser>
                </div>

            </div>
        </div>

    }
    return (
        <div>
            {manageAdmin()}
        </div>
    )
}
