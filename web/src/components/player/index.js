import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom'

function Player(props) {
const videoRef = useRef(null);
const location = useLocation();
const [mute, setMute] = React.useState(false);
const [paused, setPaused] = React.useState(false);
const [hideButtons, setHideButtons] = React.useState(false);
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code === "F8") {
    setHideButtons(!hideButtons);
  }
  if (event.code === "KeyF") {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  }
  if (event.code === "Space") {
    event.preventDefault();
    setPaused(!paused);
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
  } 
  if (event.code === 'KeyM') {
    videoRef.current.muted = !videoRef.current.muted;
    setMute(!mute);
    }
  if (event.code === "F4") {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
       
      })
      .catch(err => {
        console.error("Não foi possível copiar o endereço: ", err);
      });
  }
  if (event.code === 'F6') {
    event.preventDefault();
    var url = window.location.href;
    var iframe = '<iframe src="' + url + '" allow="autoplay; fullscreen" allowfullscreen frameborder="0" style="overflow:hidden;min-height:400px; height:100%;width:100%" height="100%" width="100%"></iframe>';
    navigator.clipboard.writeText(iframe);
    
  }
  
});

function handleClick() {
  setHideButtons(!hideButtons);
}
function handleFullscreen() {
if (videoRef.current.requestFullscreen) {
videoRef.current.requestFullscreen();
} else if (videoRef.current.webkitRequestFullscreen) {
videoRef.current.webkitRequestFullscreen();
} else if (videoRef.current.mozRequestFullScreen) {
videoRef.current.mozRequestFullScreen();
} else if (videoRef.current.msRequestFullscreen) {
videoRef.current.msRequestFullscreen();
}
}
function handlePause() {
  setPaused(!paused);
  videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
  }
function handleMuted() {
videoRef.current.muted = !videoRef.current.muted;
setMute(!mute);
}

React.useEffect(() => {
const peerConnection = new RTCPeerConnection() // eslint-disable-line
peerConnection.ontrack = function (event) {
videoRef.current.srcObject = event.streams[0]
}

peerConnection.addTransceiver('audio')
peerConnection.addTransceiver('video')

peerConnection.createOffer().then(offer => {
  peerConnection.setLocalDescription(offer)

  fetch(process.env.REACT_APP_API_PATH, {
    method: 'POST',
    body: offer.sdp,
    headers: {
      Authorization: `Bearer ${location.pathname.substring(1)}`,
      'Content-Type': 'application/sdp'
    }
  }).then(r => {
    return r.text()
  }).then(answer => {
    peerConnection.setRemoteDescription({
      sdp: answer,
      type: 'answer'
    })
  })
})

return function cleanup() {
  peerConnection.close()
}


}, [videoRef, location.pathname])


return (
<>
<video onClick={handleClick}
ref={videoRef}
autoPlay
muted={mute}

playsInline
preload="auto"
buffered={1}
className='mx-auto h-full'
poster={'https://gerador.navve.studio/gif.gif'}
id='playervideo'
/>
<div className={`button-container ${hideButtons ? 'fadeOut' : ''}`}>
<button onClick={handlePause} id='playpause'  
title='Clique para dar play ou pausar a mídia.' 
class="button play-pause">{paused ? "▶️" : "⏸️"}</button>
<button onClick={handleMuted} title='Clique para mutar ou desmutar o áudio.' class="button mute">{mute ? "🔇" : "🔈"}</button>
<button onClick={handleFullscreen} title='Clique para tela cheia.' class="button fullscreen">😎Full</button>



<button onClick={() => window.location.href='/'} title='Clique para voltar a seleção de stream' id='nbox' class="button nbox">voltar à nbox</button>
</div>
</>

)
}

export default Player




