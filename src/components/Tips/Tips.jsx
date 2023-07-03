import { useEffect, useState } from 'react'
import './Tips.css'

const tipsList = [
  { tip: '🌱 Planta árboles y cuida de la naturaleza', ods: 'Acción por el clima' },
  { tip: '🚴‍♀️ Opta por la bicicleta o caminar en distancias cortas', ods: 'Ciudades y comunidades sostenibles' },
  { tip: '💡 Reduce el consumo de energía en casa', ods: 'Energía asequible y no contaminante' },
  { tip: '🌍 Promueve el turismo responsable', ods: 'Turismo sostenible' },
  { tip: '🚰 Ahorra agua y reutiliza', ods: 'Agua limpia y saneamiento' },
  { tip: '🍃 Compra productos orgánicos y locales', ods: 'Producción y consumo responsables' },
  { tip: '♻️ Recicla y separa tus residuos', ods: 'Vida terrestre' },
  { tip: '🐟 Elige pescado de pesca sostenible', ods: 'Vida submarina' },
  { tip: '📚 Fomenta la educación ambiental', ods: 'Educación de calidad' },
  { tip: '💪 Promueve la igualdad de género en todos los ámbitos', ods: 'Igualdad de género' },
  { tip: '🏘️ Apoya la construcción de viviendas sostenibles', ods: 'Vivienda digna' },
  { tip: '👥 Involúcrate en proyectos comunitarios', ods: 'Paz, justicia e instituciones sólidas' },
  { tip: '📢 Difunde información sobre desarrollo sostenible', ods: 'Alianzas para lograr los objetivos' },
  { tip: '💧 No desperdicies agua potable', ods: 'Agua limpia y saneamiento' },
  { tip: '🥦 Reduce el consumo de carne y opta por una dieta balanceada', ods: 'Vida saludable y bienestar' },
  { tip: '📷 Utiliza la tecnología para crear conciencia sobre el cambio climático', ods: 'Acción por el clima' },
  { tip: '💼 Apoya negocios locales y sostenibles', ods: 'Trabajo decente y crecimiento económico' },
  { tip: '🌐 Conéctate con personas de diferentes culturas', ods: 'Reducción de las desigualdades' },
  { tip: '⚡ Utiliza energía renovable en tu hogar', ods: 'Energía asequible y no contaminante' },
  { tip: '📝 Firma peticiones y participa en movimientos sociales', ods: 'Paz, justicia e instituciones sólidas' }
]

export default function Tips () {
  const [tip, setTip] = useState(tipsList[0])

  useEffect(() => {
    const changeTip = () => {
      const currentIndex = tipsList.indexOf(tip)
      const nextIndex = (currentIndex + 1) % tipsList.length
      setTip(tipsList[nextIndex])
    }

    const intervalId = setInterval(changeTip, 10000)

    return () => {
      clearInterval(intervalId)
    }
  }, [tip, tipsList])

  return (
    <div className='Tips'>
      <p className='Tips_title'>Mientras esperas te doy algunos consejos de desarrollo sostenible...</p>
      <span className='Tips_ods'>{tip.ods}</span>
      <p className='Tips_content'>{tip.tip}</p>
    </div>
  )
}
