import { useState, useEffect } from 'react'
import Modal from './components/Modal/Modal'
import Home from './components/Home/Home'
import ODSClass from './components/ODSClass/ODSClass'
import './App.css'

const odsList = [
  { id: 1, title: 'Fin de la pobreza' },
  { id: 2, title: 'Hambre cero' },
  { id: 3, title: 'Salud y bienestar' },
  { id: 4, title: 'Educación de calidad' },
  { id: 5, title: 'Igualdad de género' },
  { id: 6, title: 'Agua limpia y saneamiento' },
  { id: 7, title: 'Energía asequible y no contaminante' },
  { id: 8, title: 'Trabajo decente y crecimiento económico' },
  { id: 9, title: 'Industria, innovación e infraestructura' },
  { id: 10, title: 'Reducción de las desigualdades' },
  { id: 11, title: 'Ciudades y comunidades sostenibles' },
  { id: 12, title: 'Producción y consumo responsables' },
  { id: 13, title: 'Acción por el clima' },
  { id: 14, title: 'Vida submarina' },
  { id: 15, title: 'Vida de ecosistemas terrestres' },
  { id: 16, title: 'Paz, justicia e instituciones sólidas' },
  { id: 17, title: 'Alianzas para lograr los objetivos' }
]

function App () {
  const [responseData, setResponseData] = useState(null)
  const [controller, setController] = useState(null)
  const [selectedODS, setSelectedODS] = useState(null)
  const [visibleModal, setVisibleModal] = useState(false)
  const [visibleHome, setVisibleHome] = useState(true)
  const [visibleClass, setVisibleClass] = useState(false)

  const handleODSClick = (odsId) => {
    setSelectedODS(odsId)
    setVisibleModal(true)
    setVisibleHome(false)

    const newController = new AbortController()
    setController(newController)

    fetch('http://localhost:8000/create-ods-class/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: odsId, age: 15 }),
      signal: newController.signal
    })
      .then(response => response.json())
      .then(data => {
        setResponseData(data)
        setVisibleModal(false)
        setVisibleClass(true)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort()
      }
    }
  }, [controller])

  const handleCloseModal = () => {
    setVisibleModal(false)
    setVisibleHome(true)

    if (controller) {
      controller.abort()
    }
  }

  const handleReturnHome = () => {
    setVisibleClass(false)
    setVisibleHome(true)
  }

  return (
    <>
      <div>
        {visibleHome && <Home odsList={odsList} handleODSClick={handleODSClick} selectedODS={selectedODS} />}
        {visibleModal && <Modal closeModal={handleCloseModal} />}
        {visibleClass && <ODSClass responseData={responseData} handleReturnHome={handleReturnHome} />}
      </div>
    </>
  )
}

export default App
