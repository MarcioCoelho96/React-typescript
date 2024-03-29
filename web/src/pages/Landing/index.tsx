import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import LogoVassoura from '../../assets/images/logovassoura.svg';


import './styles.css';
import api from '../../services/api';

function Landing(){
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => { // passas nas [] uma variavel e sempre que a variavel alterar a função atras vai correr outra vez
        api.get('connections').then(response =>{
            const {total} = response.data;

            setTotalConnections(total);
        })
    }, []) 

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Cleants"/>
                    <h2>Encontre aqui o seu melhor apoio</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="imagemcamisolaverdeegajocomaroxa" 
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">   
                        <img src={studyIcon} alt="findacleaner"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Limpar" className= "broom"/>
                        Dar aulas 
                    </Link>

                </div>
                <span className="total-connections">
                     {totalConnections} estudantes encontraram um professor <img src={purpleHeartIcon} alt="coração roxo"/>
                </span>
            </div>
        </div>
    )
}


export default Landing;