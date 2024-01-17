import React from 'react'
import Background from './component/Background'
import Foreground from './component/Foreground'

function App() {
  return (
    <div className= ' relative h-screen w-full bg-zinc-800' >
  <Background></Background>
    <Foreground></Foreground>

    </div>

    
  )
}

export default App