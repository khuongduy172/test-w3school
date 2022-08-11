import React, { useEffect, useState } from "react"
import {io} from "socket.io-client"

function Comment() {
    const [comments, setComments] = useState([]);
    const [room, setRoom] = useState(1);

    const socket = io('http://localhost:3000')
    useEffect(()=>{
        setComments([]);
    },[room])
    useEffect(()=> {
        socket.emit('joinRoom', room);
        socket.on('message', (data)=> {
            console.log(data)
            setComments([...comments, data]);
        });

        return ()=>socket.disconnect();
    },[comments, socket, room])

    const renderComments = () => {
        console.log(comments)
        return (
            comments.map((item, index)=> {
                return (
                    <div key={index}>{item.userId}: {item.content}</div>
                )
            })
        )
    }
    const onFormSubmit = (e) => {
        const data = {userId: 1, lessonId: 1, content: e.target.content.value}
        socket.emit('message', data, room)
        e.preventDefault();
    }
    return (
        <div>
            <button type="button" class="btn btn-primary" onClick={()=>{setRoom(1)}}>Room 1</button>
            <button type="button" class="btn btn-primary" onClick={()=>{setRoom(2)}}>Room 2</button>
            <button type="button" class="btn btn-primary" onClick={()=>{setRoom(3)}}>Room 3</button>
            {(room === 1) && (<h2>Room 1</h2>)}
            {(room === 2) && (<h2>Room 2</h2>)}
            {(room === 3) && (<h2>Room 3</h2>)}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="content"/>
                <button type='submit'>Đăng</button>
            </form>
            <h2>Comments</h2>
            {renderComments()}
        </div>
    )
}

export default Comment
