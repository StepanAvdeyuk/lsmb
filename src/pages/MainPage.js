import React from 'react'

import Modal from "../components/Modal";
import Promo from "../components/Promo";
import Register from "../components/Register";
import Teams from "../components/Teams";
import Video from '../components/Video';
import Buy from "../components/Buy";
import Footer from "../components/Footer";
import FirstScreen from '../components/FirstScreen';
import Header from '../components/Header';

import useScrollBlock from '../hooks/useScrollBlock';

const MainPage = () => {

    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    return (
    <>
        <FirstScreen/>
        <Header/>
        <Promo setIsOpenModal={setIsOpenModal} blockScroll={blockScroll}/>
        <Register setIsOpenModal={setIsOpenModal} blockScroll={blockScroll}/>
        <Teams/>
        <Buy setIsOpenModal={setIsOpenModal} blockScroll={blockScroll}/>
        <Footer/>
        {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} allowScroll={allowScroll}/>}
        <Video/>
    </>
    )
}

export default MainPage