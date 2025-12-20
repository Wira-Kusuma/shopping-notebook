import { useState, useEffect } from 'react'
import './index.css'


const shoppingItem= [
  {
    id:1,
    name:"Pushup 100 times",
    checked:false
  },
  {
    id:2,
    name:"Debugging 12 hours",
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

  function handleClearItem() {
    if (window.confirm("Delete all task?")) {
    setItems([]);
  }
  }

  //toggle theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect untuk menambah/menghapus class "dark" di element html
  useEffect(() => {
    // Ambil element html (root element)
    const root = document.documentElement;
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");
    
    // Cek apakah dark mode aktif
    if (isDarkMode) {
      // Jika dark mode aktif, tambahkan class "dark" ke html element
      root.classList.add("dark");
      moon.style.display="none";
      sun.style.display="flex";
    } else { 
      // Jika light mode, hapus class "dark" dari html element
      root.classList.remove("dark");
      moon.style.display="flex";
      sun.style.display="none";
    }
  }, [isDarkMode]); 

  const toggleTheme = () => {
    // Balik nilai isDarkMode (true jadi false, false jadi true)
    setIsDarkMode(!isDarkMode);
  };
  
  return(
    <main>
      <Header toggleTheme={toggleTheme}/>
      <Form onAddItem={handleAddItem}/>
      <List items={items} onDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} handleClearItem={handleClearItem}/>
    </main>
  )

}

function Header({toggleTheme}) {
  return (
  <header>
    <h1>To Do</h1>
    <img src="images/icon-moon.svg" alt="moon icon dark mode" onClick={toggleTheme} id='moon'/>
    <img src="images/icon-sun.svg" alt="moon icon dark mode" onClick={toggleTheme} id='sun'/>
  </header>
)
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


function List({items, onDeleteItem, handleToggleItem, handleClearItem}) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} handleToggleItem={handleToggleItem}/>
        ))}
        <Control items={items} handleClearItem={handleClearItem}/>
      </ul>
      
    </div>
  )
}

function Item({item, onDeleteItem, handleToggleItem}) {
  
  return(
    <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => handleToggleItem(item.id)} className='checkbox'/>
      <span style={item.checked ? {textDecoration:"line-through"} : {} }>
        <p>{item.name}</p>
      </span>
      <img src="/images/icon-cross.svg" alt="close icon" onClick={() => onDeleteItem(item.id)}/>
    </li>
  )
}

function Control({items, handleClearItem}) {
  return(
    <li>
      <p>{items.length} item left</p>
      <p onClick={handleClearItem}>Clear items</p>
    </li>
  )
}