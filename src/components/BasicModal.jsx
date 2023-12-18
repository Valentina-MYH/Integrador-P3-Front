import React from 'react'
import ReactModal from 'react-modal'


const customStyles={
    top: '50',
    bottom: 'auto',
    witdh: '60%',
    height: '80%', 
    

}
  const BasicModal = ({isOpen, setIsOpen}) => {
  const closeModal = () => setIsOpen(false)
    return (

    <ReactModal
    isOpen={isOpen}
    style={customStyles}
    
   

    >
        <div >
            <div className="modal-header">
                <button onClick={closeModal}>x</button>
                <h1>Soy el modal</h1>
            </div>
        </div>
        
        
    </ReactModal>
  )
}

export default BasicModal