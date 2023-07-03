import Tips from '../Tips/Tips'
import './Modal.css'

function Modal ({ closeModal }) {
  return (
    <div className='Modal'>
      <div className='Modal_content'>
        <header>
          <span onClick={() => closeModal()}>&times;</span>
        </header>
        <main>
          <Tips />
          <progress />
        </main>
      </div>
    </div>
  )
}

export default Modal
