import React, { useState } from "react"

export const ColorCard = ({ tarjeta }) => {
    const { likes, fecha, colores } = tarjeta /* Desestructuro la prop tarjeta */

    return (
        <div className="color-card">
            <div className="colors">
                <div className="color" style={{ backgroundColor: colores[0] }}></div> {/* Style inline: en React se escriben como objetos */}
                <div className="color" style={{ backgroundColor: colores[1] }}></div>
                <div className="color" style={{ backgroundColor: colores[2] }}></div>
                <div className="color" style={{ backgroundColor: colores[3] }}></div>
            </div>
            <div className="color-card-controls">
                <button className="btn-like" onClick={handleLike}>
                    <span>{likes}</span>
                </button>
                <span className="time">{fecha}</span>
            </div>
        </div>
    )
}
/* Lo style inline se escriben en CamelCase  */