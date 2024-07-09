import React from 'react'
import { ColorCard } from './ColorCard'

const Colores = [
  {
    likes: 70,
    fecha: '20/05/2018',
    colores: ['#36BA98', '#E9C46A', '#F4A261', '#E76F51']
  },
  {
    likes: 100,
    fecha: '6 horas',
    colores: ['#EEEDEB', '#E6B9A6', '#939185', '#2F3645']
  },
  {
    likes: 2086,
    fecha: '6 dias',
    colores: ['#219C90', '#059212', '#D8EFD3', '#78ABA8']
  },
  {
    likes: 4,
    fecha: '1 dia',
    colores: ['#91DDCF', '#F7F9F2', '#7776B3', '#E2BBE9']
  }
]

const App = () => {
  return (
    <section className="color-cards">
      {Colores.map((tarjeta, index) => (
        <ColorCard key={index} tarjeta={tarjeta} />
        ))}
    </section>
  )
}

export default App
