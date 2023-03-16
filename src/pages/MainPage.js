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
import DraftModal from '../components/DraftModal';
import AboutModal from '../components/AboutModal';

const MainPage = () => {

    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    const [isOpenDraftModal, setIsOpenDraftModal] = React.useState(false);
    const [isOpenAboutModal, setIsOpenAboutModal] = React.useState(false);


    return (
    <>
        <FirstScreen/>
        <Header/>
        <Promo setIsOpenModal={setIsOpenModal} blockScroll={blockScroll}/>
        <Register setIsOpenModal={setIsOpenAboutModal} blockScroll={blockScroll}/>
        {/* <Teams/> */}
        {/* <Buy setIsOpenModal={setIsOpenDraftModal} blockScroll={blockScroll}/> */}
        <Footer/>
        {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} allowScroll={allowScroll}/>}
        {isOpenDraftModal && <DraftModal setIsOpenDraftModal={setIsOpenDraftModal} setIsOpenModal={setIsOpenModal} allowScroll={allowScroll}/>}
        {isOpenAboutModal && <AboutModal setIsOpenAboutModal={setIsOpenAboutModal} allowScroll={allowScroll}/>}
        <Video/>
    </>
    )
}

export default MainPage