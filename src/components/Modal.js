import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Modal = ({setIsOpenModal, allowScroll}) => {

    const navigate = useNavigate();

    const validate = Yup.object({
        name: Yup.string()
            .required('Обязательное поле'),
        phoneNumber: Yup.string()
            .required('Обязательное поле'),
        email: Yup.string()
            .required('Обязательное поле')
            .email('Неверно указан email'),
        sport: Yup.string()
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

    // const sendData = () => {
    //     gapi.client.init({
    //         'apiKey': '{AIzaSyDy6gNRtQjSJ_geNcikF4vq2AvONMa1nzc}',
    //         'discoveryDocs': ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    //     }).then(() => {
    //         return gapi.client.sheets.spreadsheets.values.get({
    //           spreadsheetId: '{1bT0BDXEYO0KPn-3rV0Yt939Q4TsOgKeVU_F2RcxrPyk}',
    //           range: '{test1}!{A1:E1}', // for example: List 1!A1:B6
    //         })
    //       })
    // }

    


    // React.useEffect(() => {
    //     appendSpreadsheet(newRow);
    // }, []);


    return (
    <div className="modal__wrapper">
        <div className="modal__content">
        <div className="modal__close" onClick={() => {setIsOpenModal(false); allowScroll();}}>✕</div>
        <Formik
                initialValues={{name: '', phoneNumber: '', social: '', sport: '', email: ''}}   
                validationSchema={validate}
                onSubmit={(values, {resetForm}) => {
                    // sentTelegramMessage(values);
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
                            name="social"
                            label="Ссылки на ваши соцсети"
                    />
                    <TextField  
                            placeholder="Введите ваши спортивные достижения"
                            type="text"
                            name="sport"
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