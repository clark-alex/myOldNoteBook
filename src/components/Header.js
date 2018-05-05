import React from 'react'

export default function Header(props) {
    return (
        <header className="App-header">
            <div className='placeHolder'></div>
            <h1 className="App-title">My Old Notebook </h1>
            <h1 className="App-title">{`Hi: ${props.name}`}</h1>
            
        </header>
    )
}