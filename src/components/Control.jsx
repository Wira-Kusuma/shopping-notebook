export default function Control({items, handleClearItem, filterActive,showAll,filterComplete}) {
  return(
    <li>
      <p>{items.length} item left</p>
      <p onClick={showAll}>all</p>
      <p onClick={filterActive}>active</p>
      <p onClick={filterComplete}>completed</p>
      <p onClick={handleClearItem}>Clear items</p>
    </li>
  )
}