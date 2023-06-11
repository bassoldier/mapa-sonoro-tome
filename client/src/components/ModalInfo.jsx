import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const ModalInfo = ({nombre, descripcion, foto, audio}) => {

    return (
        <div className="modal-info"  data-aos="fade-left">
            <section className='imagenModal'>
                <img className="bg-modal" src={foto} alt="" />
                <p>{nombre}</p>
            </section>
            <section className='bodyModal'>
                <p>{descripcion} </p>
            </section>

            <section className="player-section">
                <AudioPlayer
                    autoPlay
                    src={audio}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                />
            </section>

        </div>
        
    );
};

export default ModalInfo;