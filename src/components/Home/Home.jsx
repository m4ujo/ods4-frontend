import './Home.css'

export default function Home ({ odsList, handleODSClick, selectedODS }) {
  return (
    <div className='Home'>
      <h1 className='Home_title'>📖Clases teóricas sobre los Objetivos de Desarrollo Sostenible</h1>
      <h2>Genera tu clase seleccionando un ODS:</h2>
      <div>
        {odsList.map((ods) => (
          <button
            key={ods.id}
            onClick={() => handleODSClick(ods.id)}
            className={selectedODS === ods.id ? 'selected' : ''}
          >
            {ods.title}
          </button>
        ))}
      </div>
    </div>
  )
}
