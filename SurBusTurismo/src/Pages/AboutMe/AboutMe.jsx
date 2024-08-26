//Importo librerias
import React from 'react'
//Importo estilos
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about-container'>
            <div className='about-content'>
            <img src="./imagenes/sprinter.jpg" alt="" className='about-img' />
            <h1 className='title-about'>Empresa</h1>
            <span className='description-about'>Somos una agencia de viajes dedicada a crear momentos inolvidables junto a nuestros pasajeros.</span>
            <span className='description-about'>En Sur Bus Turismo ofrecemos servicios de traslado de personal para empresas y a particulares, con horarios flexibles acordes a las necesidades operativas de nuestros clientes.</span>
            <span className='description-about'>Sur Bus se destaca por ofrecer un Servicio Puntual, realizando traslado y recepción de pasajeros en los distintos aeropuertos del país y terminales de ómnibus. También brindamos servicios de traslados a toda la costa e interior de nuestro país, servicios de transporte de personas para eventos empresariales, casamientos, días de campo, cenas y turismo nacional… estos solo son algunos de nuestros servicios.</span>
            <span className='description-about'>Los vehículos son conducidos por sus propios dueños con amplia experiencia en el traslado de pasajeros, quienes poseen registro profesional que dan garantía y confianza a todos aquellos que contratan nuestros servicios.</span>
            <span className='description-about'><b>Garantizamos una excelente atención, puntualidad, seguridad y confort.</b></span>
            <span className='description-about'>Cualquier consulta o sugerencia no dude en comunicarse enviándonos un e-mail a alankokoravec@gmail, o a través de nuestros formularios de contacto.</span>
        </div>
        </div>
    )
}

export default AboutMe