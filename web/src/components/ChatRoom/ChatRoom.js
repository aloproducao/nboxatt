import React, { useState } from 'react'

function ChatRoom() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const peerConnection1 = new RTCPeerConnection() // eslint-disable-line
  const peerConnection2 = new RTCPeerConnection() // eslint-disable-line

  const channel1 = peerConnection1.createDataChannel("chat")
  channel1.onmessage = function(event) {
    setMessages([...messages, event.data])
  }

  channel1.onopen = function() {
    channel1.send("Hello World!")
  }

  peerConnection2.ondatachannel = function(event) {
    const channel2 = event.channel
    channel2.onmessage = function(event) {
      setMessages([...messages, event.data])
    }
  }

  peerConnection1.createOffer().then(offer => {
    peerConnection1.setLocalDescription(offer)
    peerConnection2.setRemoteDescription(offer)
    return peerConnection2.createAnswer()
  }).then(answer => {
    peerConnection2.setLocalDescription(answer)
    peerConnection1.setRemoteDescription(answer)
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    channel1.send(message)
    setMessage('')
  }

  return (
    <div className="chat-room">
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="send-button">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default ChatRoom
