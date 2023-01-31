import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useClipboard } from 'use-clipboard-copy'

function Selection(props) {
  const [streamKey, setStreamKey] = React.useState('')
  const navigate = useNavigate()
  const { copy } = useClipboard({ copiedTimeout: 1000 })

  const onStreamKeyChange = e => {
    setStreamKey(e.target.value)
  }
  const onWatchStreamClick = () => {
    navigate(streamKey)
  }
  const onCopyClick = () => {
    copy("https://box.navve.studio/api/whip")
  }


  return (
    <div className='space-y-4 mx-auto max-w-2xl'>
      <br />
      <br />  
      <form className='rounded-md bg-gray-800 shadow-md p-8'>
      
      <h2 className="font-light leading-tight text-4xl mt-0 mb-2">Bem-vindo ao N.Box</h2>
        <p>N.box é uma ferramenta que permite você transmitir vídeos de alta qualidade em tempo real de maneira eficiente, usando os últimos codecs de vídeo e tecnologia WebRTC.</p>
        <div id='signal' class="font-bold m-4 bg-green-500 p-4 rounded-md shadow">
        <span id='alert'>⚠️</span>

 Para enviar sinal de video baixe o nosso encoder na área de download: <a href='https://docs.google.com/presentation/d/1K4l7LKRLChup_i9HMspuVJA3D03MzFFs/edit?usp=sharing&ouid=115551664674650711033&rtpof=true&sd=true'target={'_blank'} id='guide'> Clique aqui para o guia completo.</a>
</div>



        <div className='my-4'>
          <label className='block text-sm font-bold mb-2' htmlFor='streamKey'>
            Stream Key - Coloque a chave de transmissão para abrir o vídeo
          </label>
          <input className='appearance-none border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-700 text-white rounded shadow-md placeholder-gray-200' id='streamKey' type='text' title='🚨 ⚠️Coloque aqui ou escreva sua chave de streaming a mesma que colocou no OBS.' placeholder='Chave de streaming' onChange={onStreamKeyChange} autoFocus />
        </div>
        <div className='flex items-center justify-between'>
          <button id='btnassistir' className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-2' type='button' onClick={onWatchStreamClick}>
            Assistir Stream📡
          </button>
          <button id='btncopiar' className='py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75' type='button' onClick={onCopyClick}>
            Copiar servidor
          </button>
        </div>
      </form>
    </div>
  )
}

export default Selection
