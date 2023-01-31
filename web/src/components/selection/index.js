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
    
    <div className='mx-auto max-w-2xl'>
        
      <form className='rounded-md bg-gray-800 shadow-md p-8'>
       <h2 className="font-light text-4xl mt-0 mb-4">Bem-vindo ao N.Box</h2>
       
        <p className="mb-4">N.box permite transmissão eficiente de vídeos em tempo real usando tecnologia WebRTC e codecs atuais.</p>
  
        <div className="mb-4 font-bold bg-green-500 p-4 rounded-md shadow text-sm">
          <span>⚠️</span>
          <a href='https://docs.google.com/presentation/d/1K4l7LKRLChup_i9HMspuVJA3D03MzFFs/edit?usp=sharing&ouid=115551664674650711033&rtpof=true&sd=true' target={'_blank'}>  Para transmitir, baixe o encoder na área de download: Guia completo</a>
        </div>
  
        <div className='my-4'>
          <label className='block text-sm font-bold mb-2' htmlFor='streamKey'>
            Stream Key
          </label>
          <input 
            className='appearance-none border w-full py-2 px-3 bg-gray-700 border-gray-700 text-white rounded shadow-md placeholder-gray-200' 
            id='streamKey' 
            type='text' 
            placeholder='Chave de streaming'
            onChange={onStreamKeyChange} 
            autoFocus 
          />
        </div>
        <div className='flex justify-between'>
          <button 
            id='btnassistir' 
            className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-2' 
            type='button' 
            onClick={onWatchStreamClick}
          >
            Assistir Stream📡
          </button>
          <button 
            id='btncopiar' 
            className='py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75' 
            type='button' 
            onClick={onCopyClick}
          >
            Copiar Servidor
          </button>
        </div>
      </form>
    </div>
  )
  }

export default Selection
