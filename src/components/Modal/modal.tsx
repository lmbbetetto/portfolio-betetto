import Modal from 'react-modal'
import './modal.css'

type SubmitModalType = {
    isOpen: boolean,
    onRequestClose: () => void,
}

function SubmitModal({isOpen, onRequestClose}: SubmitModalType) {
    return(
        <>
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <div className='modal-content'>
                <p>Olá mundo</p>
            </div>
        </Modal>
        </>
    )
}

export default SubmitModal