import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useId } from "react-id-generator";

const Modal = ({setIsOpenModal, allowScroll}) => {

    const navigate = useNavigate();
    const [htmlId] = useId();

    const validate = Yup.object({
        name: Yup.string()
            .required('Обязательное поле'),
        phoneNumber: Yup.string()
            .required('Обязательное поле'),
        email: Yup.string()
            .required('Обязательное поле')
            .email('Неверно указан email'),
        sportingRecords: Yup.string()
            .max(100, 'Введите не более 100 символов'),
        
    })

    const TextField = ({...props}) => {
    const [field, meta] = useField(props);
        return (
            <div className={`modal__form ${meta.touched && meta.error && 'error'}`}>
                <div className='modal__form-label'>{props.label}</div>
                <input
                    id={props.name}
                    {...field} {...props}
                    autoComplete="off"
                />
            <ErrorMessage component="div" name={field.name} className="modal__form-error" />
            </div>
        )
    }

    const sendData = (values) => {
        let data = {};
        data.id = htmlId;
        data.fio = values.name;
        data.email = values.email;
        data.phone = values.phoneNumber;
        data.socialNetworks = values.socialNetworks;
        data.sportingRecords = values.sportingRecords;
        console.log(data);
        axios.post("https://my-parser.tw1.su/leads/add", data)
        .then((response) => {
        // console.log(response);
        }).catch(e => console.log(e));
    }


    return (
    <div className="modal__wrapper">
        <div className="modal__content">
        <div className="modal__close" onClick={() => {setIsOpenModal(false); allowScroll();}}>✕</div>
        <Formik
                initialValues={{name: '', phoneNumber: '', socialNetworks: '', sportingRecords: '', email: ''}}   
                validationSchema={validate}
                onSubmit={(values, {resetForm}) => {
                    sendData(values);
                    resetForm();
                    allowScroll();
                    setIsOpenModal(false);
                    navigate("/thanks");
                }}>
                    <Form className="modal__form-wrapper">
                    <TextField 
                            placeholder="Введите ваше ФИО"
                            type="text"
                            name="name"
                            label="Ваше ФИО"
                    />
                    <TextField 
                            placeholder="Введите ваш e-mail"
                            type="text"
                            name="email"
                            label="E-mail"
                    />
                    <TextField 
                            placeholder="Введите ваш телефон"
                            type="text"
                            name="phoneNumber"
                            label="Ваш телефон"
                    />
                    <TextField  
                            placeholder="Введите ваши ссылки"
                            type="text"
                            name="socialNetworks"
                            label="Ссылки на ваши соцсети"
                    />
                    <TextField  
                            placeholder="Введите ваши спортивные достижения"
                            type="text"
                            name="sportingRecords"
                            label="Ваши спортивные достижения"
                    />
                    <button type="submit" className='modal__form-btn'>ОТПРАВИТЬ ДАННЫЕ</button>
                    <div className="modal__policy">
                        Нажимая на кнопку, Вы принимаете <a href='#'>Положение и Согласие на обработку персональных данных</a>
                    </div>
                </Form>
            </Formik>  
        </div>
    </div>
    )
}

export default Modal