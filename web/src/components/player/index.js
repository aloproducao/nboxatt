import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom'

function Player(props) {
const videoRef = useRef(null);
const location = useLocation();
const [mute, setMute] = React.useState(false);

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
<video
ref={videoRef}
autoPlay
muted={mute}
controls
playsInline
className='mx-auto h-full'
poster={'https://i.imgur.com/qsZ8VbK.jpeg'}
id='playervideo'
/>
<div class="button-container">
<button onClick={handleFullscreen} title='Clique para tela cheia.' class="button fullscreen">🖵Full</button>
<button onClick={handleMuted} title='Clique para mutar ou desmutar o áudio.' class="button mute">{mute ? "🔇" : "🔈"}</button>
</div>
</>
)
}

export default Player




