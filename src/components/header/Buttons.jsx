import CV from '../../assets/David_Orquera.pdf';

const Buttons = ()=>{
    return (
        <>
            <div className="buttons">
                <a href={CV} download className="btn"> Descargar CV </a>
                <a href="#about" className="btn btn-primary"> Acerca de mí </a>
            </div>
        </>
    )

}

export default Buttons;