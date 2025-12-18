import { useState } from 'react'
import './index.css'

 export default function App() {
  return(
    <main>
      <Header />
      <List />
    </main>
  )

}

function Header() {
  return <h1>Shopping list</h1>
}
function List() {
  return (
    <div>
      <input type="checkbox"/>
      <span>kentang 1</span>
    </div>
  )
}