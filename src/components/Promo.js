import React from 'react'

import smile from '../assets/smile-1.svg';
import lsmb from '../assets/LSMB.svg'

// const SPREADSHEET_ID = "1bT0BDXEYO0KPn-3rV0Yt939Q4TsOgKeVU_F2RcxrPyk";
//     const SHEET_ID = "0";
//     const CLIENT_EMAIL = "test-784@lsmb-380409.iam.gserviceaccount.com";
//     const PRIVATE_KEY = "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCSrGcQ/P0jtBVp\nd35+lMKun0pytl7NoaXnOYiPNRtfiGI5YFbSe7o6Of0El7FbHWBOqohM5JpGDWoh\nNxK2T8QfAuSD11Ht2tXI+8QmJO23vpmuOJwvuTu14+2MtajSS/zk85+a6dxZBG9c\nxkMWS5WTkJO40V3yZp+dhYd+7qtv3Q3qqFlJfBxr/m50duO2h3D8alQSfUKDBQgq\nrZb6Kbh2w2P/m7xTsNzO/s8awz4KgJAAzZxu+AYZLjrWLxVIretMphy/Aj+t/gNC\nEfn7FXe1ZYe2uMe5tip8ynkKxT0/suBkbGgTJlVkaeG7JG7qSr2tdglLEbOPrgNI\ncWOasLLxAgMBAAECgf9ShsP3FbcuP5qh8k+E1BmLkf+cS8ChMt2GHHkZxWfWzjDL\ngnQCOluuJ11AbZmntVUFmNjYFZ2NjOlfhv1LAdaicZ43ZbpTeq3knW7gMicPG89H\nQn2e3I/G6ALhCSrUKK1CpVFIeLfiiPxKgcN9kp8L8xfVsE02oUdt+j54ImeTqJNM\nec+F6jUACBcXoZw//vMoZd4R41iytkDZKouZr8zdXt0+qp+Q9La3ZXm16ospEi07\nYbprEmgbKZk9/00N5ZHvuPsM6+VUibWhDnzfF7fb/mHmfkT17IDsf34ZlAjv2fnV\niuHwX+D1w9qZKTrQN6CjW4yx4whUZDvrZHd+MoECgYEAxJRnUoPt+M81yIF0Fmw9\nUvMk8WgtG80yjNsUB2hLcbwE9NmxEr26iRaYeb0Zs//qdPn9KC7KdKTjBiJTydXu\nqJIx6fSsitkbq0jvMkhpSLgF8rCJryClNvKexTvPJ4AqhdR/rvyAw3r0/Nls0WLJ\nGZ0pvP19Pk2EWiB3eKhF/7ECgYEAvwIv8rSRD/3QHXjf7uYhLmzFrHqdBLcNJMjR\nqN3N3Xu3u5ZsC3CloWQ6cxfNE7eXgX7S5QSf66FXzR/Nl6F+PlwI+Cx6+etwmizx\nspKc6t9gMG1DmmuM+p+RrGCSK6QJ8+Q86DgIKWvnafmcE8NJd0vv18yLia6184tt\nH6dn90ECgYEAgTUaBH56uANaUoPkDajvVcpDCflzTMa+5x5IN+YxUHxItbcwUCUs\nqlaTudC1SD55mJGH+BVpNOn73lhJwmw/BcWx0RjlIA47xYWW0vINYaKzJiUrGlTW\nwxsNiI4bRtdTG8vkcNu+tr3msRsoDyhjDdbjTDlBTOYejC6y2DeiasECgYAJts3D\ndSVvf8QGy6/v0WpclxGSjQXRSJH1jfUDtowSuIkGlEbYahkyVQuX8NzwJMUiw9Vr\n6klLzX/OodBt5rup5jpajMCQV0X5wVFleIlcdJHKxLPMda3MzTK2Zo7og0YyTig+\n0yKvIJq7TAOBCcyBsa339qIeFXGRekTJeFUUQQKBgQCpEOoGFKt3enEHTMFnmSNc\nxEj9zfReWvzModOLaH0Idas65A+JZkSRVtAPxCOMEHXksxiAQ/E9/OVe+M0RWoFr\nRZFG1x9lfo0GGBLloec4LUYVEEc9qtvgX4C1xShlx2yfNzNbiqhWnoslsW66vXYx\nMPnlK8msmUT58OxQlMnPAQ==";


const Promo = ({setIsOpenModal, blockScroll}) => {

    
    React.useEffect(() => {
        // appendSpreadsheet(newRow);
    }, []);


  return (
    <div className="container">
        <div className="promo__wrapper" id="header">
            <img src={lsmb} alt="lsmb" className='promo__lsmb-mob' />
            <h1>Лига <span>Ставок<img src={lsmb} alt="lsmb" /></span><br/>Медиа Баскет</h1>
            <div className="promo__descr">
                <div className="promo__descr-pic">
                    <img src={smile} alt="smile" />
                </div>
                <div className="promo__descr-text">
                Уникальный спортивно-развлекательный проект объединивший<br/>
                в себе профессиональных баскетболистов, звезд шоу-бизнесса и просто<br/> 
                баскетбольных энтузиастов. Этой весной пройдет первый сеезон 
                </div>
                <div className="promo__descr-text mob">
                Уникальный спортивно-развлекательный проект объединивший
                в себе профессиональных баскетболистов, звезд шоу-бизнесса и просто
                баскетбольных энтузиастов. Этой весной пройдет первый сеезон 
                </div>
            </div>
            <button className="promo__btn" onClick={() => {setIsOpenModal(true); blockScroll();}}>
                ОСТАВИТЬ ЗАЯВКУ
            </button>
        </div>
    </div>
  )
}

export default Promo