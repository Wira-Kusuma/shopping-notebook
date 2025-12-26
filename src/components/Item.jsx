export default function Item({item, onDeleteItem, handleToggleItem}) {
  
  return(
    <li key={item.id}>
      <input 
      type="checkbox" 
      checked={item.checked} 
      onChange={() => handleToggleItem(item.id)} 
      className='checkbox'/>

      <span 
      style={item.checked ? {textDecoration:"line-through"} : {} }>

        <p>{item.name}</p>

      </span>

      <img src="/images/icon-cross.svg" alt="close icon" onClick={() => onDeleteItem(item.id)}/>
    </li>
  )
}