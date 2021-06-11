import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../scss/manageFilm.scss'
import moment from 'moment'
import { listFilm_Action } from '../../redux/actionCreater/CumRap_ListFilm_Action/CumRap_ListFilm_Action';
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { Modal, Button, Form, Input, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { addFilm_Action, deleteFilm_Action } from '../../redux/actionCreater/AddFilm_Action/addFilm_Action';

export default function ManageFilm() {
   
    const [visible, setVisible] = useState(false);
    const usedispatch = useDispatch();
    useEffect(() => {
        usedispatch(listFilm_Action())

    }, [])

    const { listFilm } = useSelector(state => state.ListFilmReducer)
    // deletePhim
    const deletePhim = (maphim) => {
        // console.log(maphim)
       usedispatch(deleteFilm_Action(maphim))
    }
    // stateFormInput
    const [stateInput, setInput] = useState({
        maPhim: '',
        tenPhim: '',
        biDanh: '',
        trailer: '',
        hinhAnh: '',
        moTa: '',
        maNhom: 'GP03',
        ngayKhoiChieu: '',
        danhGia: '',

    })
    // handleChange 
    const handleChange = (event) => {
        let { name, value } = event.target

        if (name === "hinhAnh") {
            setInput({
                ...stateInput,
                hinhAnh: event.target.files[0]
            })
        } else {

            setInput({
                ...stateInput,
                [name]: value,
            })
        }



    }

    // handleSubmit
    const handleSubmit = () => {
        let form_data = new FormData();
        for (let key in stateInput) {
            form_data.append(key, stateInput[key])
        }
        usedispatch(addFilm_Action(form_data))
    }
    // formAddFilm
    const formAddFilm = () => {

        return <Form
            onFinish={handleSubmit}
            className='formAddFilm'

        >
            <Form.Item label='Mã Phim'>
                <Input
                    name='maPhim'
                    onChange={(event) => {
                        handleChange(event)
                    }}
                />
            </Form.Item>

            <Form.Item label='Tên Phim'>
                <Input
                    name='tenPhim'
                    onChange={(event) => {
                        handleChange(event)
                    }}
                />
            </Form.Item>
            <Form.Item label='Bí danh'>
                <Input
                    name='biDanh'
                    onChange={(event) => {
                        handleChange(event)
                    }}
                />
            </Form.Item>
            <Form.Item label='Trailer'>
                <Input
                    name='trailer'
                    onChange={(event) => {
                        handleChange(event)
                    }}
                />
            </Form.Item>
            <Form.Item label='Đánh giá'>
                <Input
                    name='danhGia'
                    onChange={(event) => {
                        handleChange(event)
                    }}
                />
            </Form.Item>

            <Form.Item label='Mô tả'>
                <Input
                    name='moTa'
                    onChange={(event) => {
                        handleChange(event)
                    }}
                />
            </Form.Item>


            <Form.Item label='Hình ảnh'>

                <Input
                    id='getFile'
                    type='file'
                    name='hinhAnh'
                    onChange={(event) => {
                        handleChange(event)
                    }}
                />
            </Form.Item>
            <Form.Item label='Ngày Khởi chiếu'>
                <Input
                    type='date'
                    name='ngayKhoiChieu'

                    onChange={(event) => {
                        let { name, value } = event.target
                        let newValue = moment(value).format('DD/MM/YYYY')
                        setInput({
                            ...stateInput,
                            ngayKhoiChieu: newValue
                        })

                    }}
                />
            </Form.Item>
            <Form.Item label='Mã nhóm'>
                <Input
                    disabled
                    value='GP03'
                    name='maNhom'
                    onChange={(event) => {
                        handleChange(event)
                    }}
                />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                 </Button>
               
            </Form.Item>



        </Form>
    }
    // renderAddFilm
    const renderAddFilm = () => {
        return <div>
            <Button type="primary" onClick={() => setVisible(true)}>
                Add Film
            </Button>
            <Modal
                title='Add Film'
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={466}
                footer={null}
                className='modalAddFilm'
            >
                {formAddFilm()}
            </Modal>
        </div>
    }
    // renderListFilm
    const renderListFilm = () => {
        return <div className='listFilm'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã Phim</th>
                        <th>Tên Phim</th>
                        <th>Bí danh</th>
                        <th>Hình ảnh</th>
                        <th>trailer</th>
                        <th>Mô tả</th>
                        <th>Mã Nhóm</th>
                        <th>Ngày khởi chiếu</th>
                        <th>Đánh giá</th>
                        <th>sửa</th>
                        <th>xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {listFilm.map((item, index) => {
                        return <tr key={index}>
                            <th>{item.maPhim}</th>
                            <th>{item.tenPhim}</th>
                            <th>{item.biDanh}</th>
                            <th>
                                <img src={item.hinhAnh} alt={item.hinhAnh} />
                            </th>
                            <th>{item.trailer}</th>
                            <th>{item.moTa}</th>
                            <th>{item.maNhom}</th>
                            <th>{moment(item.ngayKhoiChieu).format("YYYY-MM-DD")}</th>
                            <th>{item.danhGia}</th>
                            <th>
                                <FaEdit className='btnedit' />
                            </th>
                            <th>
                                <FaTrash  className='btnDelete' onClick={() => {
                                    deletePhim(item.maPhim)
                                }}/>
                            </th>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    }

    return (
        <div className='manageFilm'>
            <div>
                {renderAddFilm()}
            </div>
            <div>
                {renderListFilm()}
            </div>
        </div>
    )
}
