const ModalInfo = ({nombre, descripcion, foto}) => {

    return (
        <div className="modal-info"  data-aos="fade-left">
            <section className='imagenModal'>
                <img className="bg-modal" src={foto} alt="" />
                <p>Playa de Bellavista</p>
            </section>
            <section className='bodyModal'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi </p>
            </section>

        </div>
        
    );
};

export default ModalInfo;