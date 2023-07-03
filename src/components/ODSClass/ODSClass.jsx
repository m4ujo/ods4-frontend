import './ODSClass.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { BiArrowBack, BiPrinter } from 'react-icons/bi'

export default function ODSClass (props) {
  const contentMd = '# Clase\n' + props.responseData.class + '\n' + '# Preguntas\n' + props.responseData.questions

  return (
    <div className='ODSClass'>
      <div className='ODSClass_content'>
        <ReactMarkdown>{contentMd}</ReactMarkdown>
      </div>
      <div className='ODSClass_actions'>
        <button onClick={() => window.print()}><BiPrinter /></button>
      </div>
      <button className='ODSClass_back' onClick={() => props.handleReturnHome()}>
        <BiArrowBack />
      </button>
    </div>
  )
}
