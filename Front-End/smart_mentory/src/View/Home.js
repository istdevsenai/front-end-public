import React from 'react';

import '../CSS/ViewHome.css'
import {BsList} from 'react-icons/bs'
import LogoIST from '../Image/Logo_IST_branco.png'


function Home() {
    const date = new Date()
    let yaer = date.getFullYear()
    return(
        <body>
            <div className="container-header">
                <div className="container-icon">
                    <button className="button-icon" >
                        <BsList size={30} color="white"/>
                    </button>
                </div>
                <div className="container-image-home">
                    <img src={LogoIST} alt="LogoIST" width="35%" header="5%" />
                </div>
                <div className="container-name-user">
                    <div className="user-section">
                        <div className="user-name"> 
                            Admin
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-welcome">
                <div className="container-backdrop">
                    <div className="text-welcome">
                        SEJA BEM-VINDO!
                    </div>
                </div>
            </div>
            <div className="container-section">
                <div className="section-content">
                    <div className="content" >
                    </div>
                </div>
                <div className="container-copyrigth">
                    <div className="diviser"/>
                    <p>Copyrigth © Instituto Senai de Tecnologia Eficiência Operacional {yaer}</p>
                </div>
            </div>
        </body>
    )
}

export default Home;