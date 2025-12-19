import { useState } from 'react'
import './index.css'
import { useEffect } from 'react';


const shoppingItem= [
  {
    id:1,
    name:"Pushup 100 times",
    checked:false
  },  
]


 export default function App() {
  const [items, setItems] = useState(shoppingItem);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter((shoppingItem) => shoppingItem.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((shoppingItem) => 
      (shoppingItem.id === id 
        ? {...shoppingItem, checked: !shoppingItem.checked}
        : shoppingItem
      )
    ));
  }
  
  return(
    <main>
      <Header />
      <Form onAddItem={handleAddItem}/>
      <List items={items} onDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem}/>
    </main>
  )

}

function Header() {
  return <h1>To Do</h1>
}

function Form({onAddItem}) {
  const [name, setName]  = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(!name) {
      alert("do not blank")
      return;
    }
    const newItem = {name, checked:false, id:Date.now()}
    onAddItem(newItem);
    setName("");
  }
  return(
    <form className='add' onSubmit={handleSubmit}>
      <input type="text" placeholder='add new item' value={name} onChange={(e) => setName(e.target.value)}/>

    </form>
  )
}


function List({items, onDeleteItem, handleToggleItem}) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} handleToggleItem={handleToggleItem}/>
        ))}
      </ul>
    </div>
  )
}

function Item({item, onDeleteItem, handleToggleItem}) {
  
  return(
    <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => handleToggleItem(item.id)} className='checkbox'/>
      <span style={item.checked ? {textDecoration:"line-through"} : {} }>
        {item.name}
      </span>
      <img src="/images/icon-cross.svg" alt="close icon" onClick={() => onDeleteItem(item.id)}/>
    </li>
  )
}