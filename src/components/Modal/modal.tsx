import Modal from 'react-modal'
import './modal.css'

type SubmitModalType = {
    isOpen: boolean,
    onRequestClose: () => void,
}

function SubmitModal({ isOpen, onRequestClose }: SubmitModalType) {
    return (
        <div className='container-modal'>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName='modal-overlay'
                className='modal-content'
            >
                <h3>Mensagem enviada!</h3>
                <button onClick={onRequestClose} className='btn-modal btn btn-primary'>Fechar</button>
            </Modal>
        </div>
    )
}

export default SubmitModal