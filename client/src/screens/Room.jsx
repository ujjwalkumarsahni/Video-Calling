import React, { useCallback, useEffect, useState } from 'react'
import { useSocket } from '../context/socketProvider.jsx'
import ReactPlayer from 'react-player'
import peer from '../service/peer.jsx'

const Room = () => {
    const socket = useSocket()
    const [remoteSocketId,setRemoteSocketId] = useState(null)
    const [myStream, setMyStream] = useState()

    const handleUserJoined = useCallback(({email,id})=>{
        console.log(`Email ${email} joined the room`);
        setRemoteSocketId(id)
    },[])

    const handleCallUser = useCallback(async ()=>{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        }) 

        const offer = await peer.getOffer()
        socket.emit("user:call",{id: remoteSocketId, offer})
        setMyStream(stream)
        
    },[remoteSocketId,socket])
    useEffect(()=>{
        socket.on('user:joined',handleUserJoined)

        return ()=>{
            socket.off("user:joined",handleUserJoined)
        }
    },[socket,handleUserJoined])
  return (
    <>
        <div>
        <h1>Room Page</h1>
        <h3>{remoteSocketId ? "Connected" : "No one in room"}</h3>
        {
            remoteSocketId && <button onClick={handleCallUser}>CALL</button>
        }
        {myStream && <ReactPlayer playing muted height="100px" width="200px" url={myStream}/>}
    </div>
    </>
  )
}

export default Room