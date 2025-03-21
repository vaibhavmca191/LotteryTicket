import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './component/Lottery'
import TicketNum from './component/TicketNum'
import Ticket from './component/Ticket'
import { sum } from './component/helper'

function App() {
 let winCondition = (ticket) =>{
  return ticket[0] === 1;

 }

  return (
    <>
<Lottery n={3}  winCondition = {winCondition}/>
    </>
  )
}

export default App
