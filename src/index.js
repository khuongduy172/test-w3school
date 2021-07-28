import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {useState} from 'react'
import Appbar from './components/Appbar'
import Button from './components/Button'
const Ob= ()=>{
    // const [color,setColor]=useState('blue');
    var [isTrue,setBool]=useState('true');
    return(
        <>
        <Appbar>
        
        <div style={{backgroundColor: (isTrue && 'white') || (!isTrue && 'green') }}>
        <App 
        
        //colorBox={{color: color}}
        
        />
        </div>
        <button style={{borderWidth : 0, backgroundColor: 'blue'}} onClick={()=>setBool(!isTrue)}><Button></Button></button>
        </Appbar>
        </>
    );
}
ReactDOM.render(<Ob />,document.getElementById('root'))
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
