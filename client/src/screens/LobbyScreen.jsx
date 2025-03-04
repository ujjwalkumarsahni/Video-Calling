import { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/socketProvider.jsx";
import { useNavigate } from "react-router-dom";

function LobbyScreen() {
    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");
    const socket = useSocket()
    const navigate = useNavigate()

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        socket.emit('room:join',{email,room})

    },[email,room,socket]);

    const handleJoinRoom = useCallback((data)=>{
        const {email,room} = data
        console.log(email,room);
        navigate(`/room/${room}`)
    },[])

    useEffect(()=>{
        socket.on('room:join', handleJoinRoom)

        return () =>{
            socket.off('room:join',handleJoinRoom)
        }
    },[socket,handleJoinRoom])


    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-white text-center mb-4">Join a Room</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-1">Room</label>
                        <input
                            type="text"
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Join
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LobbyScreen;
