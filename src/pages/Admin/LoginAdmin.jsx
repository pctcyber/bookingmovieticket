import React, { useEffect, useState } from 'react'
import '../../scss/Login.scss'
import Modal from 'react-modal'
import { NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { LoginAction_Api_Admin } from '../../redux/actionCreater/Login_SignUp_Action/Login_SignUp_Action'

// customStyle
const customStyle = {
    overlay: {

        backgroundColor: 'rgba(0, 0, 0, 0.342)',
       

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
//  validation
const userLoginSchema = yup.object().shape({
    taiKhoan: yup.string().required('* UserName is required'),
    matKhau: yup.string().required("* PassWord is required")

})

export default function LoginAdmin() {

    const dispatch = useDispatch()
    // handleSubmit
    const handleSubmit = (value) => {
        dispatch(LoginAction_Api_Admin(value))
        
    }

    // customModal
    const [isOpenModal, setOpenModal] = useState(false)
    const closeModal = () => {
        setOpenModal(false)
    }
   
    // useEffect
    useEffect(() => {
        setOpenModal(true);
        localStorage.clear();
    })
    return (
        <div className='login'>

            <Modal
                className='modalLogin'
                isOpen={isOpenModal}
                style={customStyle}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >
                {/* Button Close Modal */}
                <NavLink className="btn btn-danger closeModalLogin" to='/' onClick={closeModal}>
                    <FaTimes></FaTimes>
                </NavLink>
                {/* Form Login */}
                <div className="formLogin mt-4 text-center">
                    <p>LOGIN ADMIN ACCOUNT</p>
                    <Formik
                        initialValues={
                            {
                                taiKhoan: '',   
                                matKhau: ''
                            }
                        }
                        onSubmit={handleSubmit}
                        validationSchema={userLoginSchema}
                    >
                        {
                            ({ handleChange }) => {
                                return <Form className='form '>
                                    <div className="form-group mx-3">
                                        <Field type="text"
                                            placeholder='UserName'
                                            className='form-control '
                                            name="taiKhoan"
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='taiKhoan'>{(error) => {
                                            return <div className='alert alert-danger'>
                                                {error}
                                            </div>
                                        }}</ErrorMessage>
                                    </div>
                                    <div className="form-group mx-3">
                                        <Field type="password"
                                            placeholder='PassWord'
                                            className='form-control'
                                            name="matKhau"
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='matKhau'>
                                            {(error) => {
                                                return <div className='alert alert-danger'>
                                                    {error}
                                                </div>
                                            }}
                                        </ErrorMessage>
                                    </div>
                                    <div className='form-group mx-3'>
                                        <button className='form-control btn btn-primary'
                                            type='submit'>LOGIN</button>

                                    </div>
                                    <div className='form-group mx-3'>
                                        <span  ><hr/></span>
                                        <NavLink className='bg-success  text-white form-control ' to = "/signup_admin">Create New Admin Account</NavLink>
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
