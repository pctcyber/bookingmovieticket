import React, { useEffect, useState } from 'react'
import "../../scss/Signup.scss"
import Modal from "react-modal"
import { FaTimes } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { signUpAction_Api, signUpAdmin } from '../../redux/actionCreater/Login_SignUp_Action/Login_SignUp_Action'

// validation
let userSingupSchema = yup.object().shape({
    taiKhoan: yup.string().required("* Field is required")
        .matches(/^[a-zA-Z0-9]+$/, 'Only number and letters '),
    matKhau: yup.string().required("* Field is required"),
    email: yup.string().required("* Field is required").email("Email is invalid"),
    soDt: yup.string().required("* Field is required")
        .min(10, "Min 10 digits")
        .max(11, "Max 11 digits"),
    hoTen: yup.string().required("* Field is required"),
})

// customModal
const customStyle = {
    overlay: {

        backgroundColor: 'rgba(0,0,0, 0.185)'
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '27%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: '#FFCCFF',
        boxShadow: '0px 0px 24px 10px grey'


    }

}

export default function SignUpAdmin() {

    const dispatch = useDispatch()
    // stateModal
    const [isOpenModal, setOpenModal] = useState(false)
    const closeModal = () => {
        setOpenModal(false)
    }

    // useEffect
    useEffect(() => {
        setOpenModal(true)
    })

    // dispatch Action
    const _handleSubmit = (value) => {
        dispatch(signUpAdmin(value))
    }

    return (
        <div className='signup'>
            {/* Modal */}
            <Modal
                isOpen={isOpenModal}
                style={customStyle}
                className='modalSingup'
                ariaHideApp={false}
            >
                {/* button close Modal */}
                <NavLink className="btn btn-danger closeModalSignup"
                    to='/' onClick={closeModal}>
                    <FaTimes></FaTimes>
                </NavLink>


                {/* formRegister */}
                <div className='formRegister mt-4 text-center'>
                    <p>REGISTER NEW ACCOUNT</p>

                    <Formik
                        initialValues={{
                            taiKhoan: '',
                            matKhau: '',
                            email: '',
                            soDt: '',
                            hoTen: '',
                            maNhom: 'GP03',
                            maLoaiNguoiDung: 'QuanTri',

                        }}
                        validationSchema={userSingupSchema}
                        onSubmit={_handleSubmit}
                    >
                        {
                            (formikProps) => {
                                return <Form className='form'>
                                    <div className="form-group mx-3">
                                        <Field className='form-control'
                                            type="text"
                                            placeholder='UserName'
                                            name='taiKhoan'
                                            onChange={formikProps.handleChange}
                                        />
                                        <ErrorMessage name='taiKhoan'>
                                            {(error) => {
                                                return <div className='alert alert-danger'>
                                                    {error}
                                                </div>
                                            }}
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group mx-3">
                                        <Field className='form-control'
                                            type="password"
                                            placeholder='PassWord'
                                            name='matKhau'
                                            onChange={formikProps.handleChange} />
                                        <ErrorMessage name='matKhau'>
                                            {(error) => {
                                                return <div className='alert alert-danger'>
                                                    {error}
                                                </div>
                                            }}
                                        </ErrorMessage>

                                    </div>
                                    <div className="form-group mx-3">
                                        <Field className='form-control'
                                            type="email" placeholder='Email'
                                            name='email'
                                            onChange={formikProps.handleChange} />
                                        <ErrorMessage name='email'>
                                            {(error) => {
                                                return <div className='alert alert-danger'>
                                                    {error}
                                                </div>
                                            }}
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group mx-3">
                                        <Field className='form-control'
                                            type="text" placeholder='Phone Number'
                                            name="soDt"
                                            onChange={formikProps.handleChange}
                                        />
                                        <ErrorMessage name='soDt'>
                                            {(error) => {
                                                return <div className='alert alert-danger'>
                                                    {error}
                                                </div>
                                            }}
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group mx-3">
                                        <Field className='form-control'
                                            type="text" placeholder='Full Name'
                                            name="hoTen"
                                            onChange={formikProps.handleChange}
                                        />
                                        <ErrorMessage name='hoTen'>
                                            {(error) => {
                                                return <div className='alert alert-danger'>
                                                    {error}
                                                </div>
                                            }}
                                        </ErrorMessage>
                                    </div>
                                    <div className='form-group mx-3'>
                                        <button className='form-control btn btn-success'
                                            type='submit'
                                        >SUBMIT</button>
                                    </div>
                                </Form>
                            }
                        }
                    </Formik>
                </div>

            </Modal>

        </div>
    )
}
