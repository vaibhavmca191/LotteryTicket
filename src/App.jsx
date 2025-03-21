import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './component/Lottery'
import TicketNum from './component/TicketNum'
import Ticket from './component/Ticket'


function App() {
 let col = () =>{

 }

  return (
    <>
<Lottery n={3} winningSum={15}/>
    </>
  )
}

export default App
