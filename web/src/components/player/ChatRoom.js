import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ChatRoom() {
  const location = useLocation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [peerConnection, setPeerConnection] = useState(null);

  useEffect(() => {
    const peer = new RTCPeerConnection();
    setPeerConnection(peer);
    
    peer.ondatachannel = function(event) {
      const receiveChannel = event.channel;
      receiveChannel.onmessage = function(event) {
        setMessages((prevMessages) => [...prevMessages, event.data]);
      };
    };
    
    const dataChannel = peer.createDataChannel("chat");
    
    dataChannel.onopen = function(event) {
      dataChannel.send("Hello World!");
    };
    
    peer.createOffer().then((offer) => {
      peer.setLocalDescription(offer);
  
      fetch(process.env.REACT_APP_API_PATH, {
        method: "POST",
        body: offer.sdp,
        headers: {
          Authorization: `Bearer ${location.pathname.substring(1)}`,
          "Content-Type": "application/sdp",
        },
      })
        .then((r) => {
          return r.text();
        })
        .then((answer) => {
          peer.setRemoteDescription({
            sdp: answer,
            type: "answer",
          });
        });
    });
  
    return function cleanup() {
      peer.close();
    };
  }, [location.pathname]);
  
  const handleSendMessage = () => {
    if (peerConnection && peerConnection.signalingState === 'stable') {
      peerConnection.createDataChannel("chat").send(message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage('');
    }
  };
  
  return (
    <div>
      <div className="chat-area">
        {messages.map((m, index) => (
          <div key={index}>{m}</div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;
