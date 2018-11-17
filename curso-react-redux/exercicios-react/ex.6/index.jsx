import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(        
    <Family>            
        <Member name='João' lastName='Saci'/>
        <Member name='Maria' lastName='Saci'/>
        <Member name='Jose' lastName='Saci'/>
        <Member name='Pedro' lastName='Saci'/>    
    </Family>
    , document.getElementById('app'))