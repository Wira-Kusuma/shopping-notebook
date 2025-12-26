import Item from './Item'
import Control from './Control'

export default function List({items, 
  onDeleteItem, 
  handleToggleItem, 
  handleClearItem, 
  filterActive,
  showAll,
  filterComplete}) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item 
          item={item} 
          key={item.id} 
          onDeleteItem={onDeleteItem} 
          handleToggleItem={handleToggleItem}/>
        ))}
        <Control 
        items={items} 
        handleClearItem={handleClearItem}
        filterActive={filterActive}
        showAll={showAll}
        filterComplete={filterComplete}
        />
      </ul>
      
    </div>
  )
}