import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';
import { useState } from 'react';

function Selection() {
  const [streamKey, setStreamKey] = useState('');
  const navigate = useNavigate();
  const { copy } = useClipboard({ copiedTimeout: 1000 });
  const [faqOpen, setFaqOpen] = useState(false);

  const onStreamKeyChange = (e) => {
    setStreamKey(e.target.value);
  };
  const onWatchStreamClick = () => {
    navigate(streamKey);
  };
  const onCopyClick = () => {
    try {
      navigator.clipboard.writeText('https://box.navve.studio/api/whip');
      alert('Servidor copiado! Cole no seu OBS Studio e crie uma streamkey.');
    } catch (err) {
      console.error('Falha ao copiar para a área de transferência: ', err);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onWatchStreamClick();
    }
  }
  
  const toggleFaq = () => {
    setFaqOpen(!faqOpen);
  };

  return (
    <div className='mx-auto max-w-2xl'>
      <div className='flex justify-between mb-4'>
        <h2 className='font-light text-4xl mt-0'>Bem-vindo ao N.Box</h2>
        <button onClick={toggleFaq} className='font-light text-sm'>
          Perguntas frequentes
        </button>
      </div>
      {faqOpen && (
        <div className='bg-green-700 p-4 rounded-md shadow-md'>
          <p>
            O que é N.box?
          </p>
          <p>
          Nbox permite a transferência de áudio e vídeo de alta qualidade sem necessidade de plugins ou softwares adicionais. Além disso, a tecnologia Whip permite que vários participantes se conectem em uma sessão de comunicação, oferecendo interação em tempo real.
</p>
          <br></br>

<p>Como usar o N.Box?</p>
      <ul>
        <li>1. Baixe o encoder na área de download.</li>
        <li>2. Cole o servidor copiado no OBS Studio e crie uma stream key.</li>
        <li>3. Insira a stream key na caixa de texto abaixo e clique em "Assistir Stream".</li>
        <li><a href='https://docs.google.com/presentation/d/1K4l7LKRLChup_i9HMspuVJA3D03MzFFs/edit?usp=sharing&ouid=115551664674650711033&rtpof=true&sd=true'target={'_blank'} id='guide'> Clique aqui para o guia completo.</a></li>
        <li><a href='https://docs.google.com/document/d/1CXqmd3Oa1sjVvYGTIenJq6vM1wEI0F83ekxle8dTMv4/edit?usp=sharing'target={'_blank'} id='terms'> Termos de uso.</a></li>
     
      </ul>
    </div>
  )}

      <form className='rounded-md bg-green-800 shadow-md p-8'>
        <p className='mb-4'>
          N.Box permite transmissão eficiente de vídeos em tempo real usando tecnologia WebRTC e codecs atuais.
        </p>
        <div className='my-4'>
          <label className='block text-sm font-bold mb-2' htmlFor='streamKey'>
            Stream Key
          </label>
                    <input 
            className='appearance-none border w-full py-2 px-3 bg-green-700 border-green-700 text-white rounded shadow-md placeholder-green-200' 
            id='streamKey' 
            type='text' 
            placeholder='Chave de streaming'
            onChange={onStreamKeyChange} 
            autoFocus 
            onKeyPress={handleKeyPress}
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
            className='py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:ring-opacity-75' 
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
