import React from 'react'
import './GameCover.css'

function GameCover({image = ""}) {
    return (
        <div className="game-cover" style={{backgroundImage: `url(${image})`}}>
        </div>
    )
}

export default GameCover
