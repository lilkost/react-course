import ListItems from './ListItems';
const List = ({items}) => {
  return (
    <ul>
      {items.map(item=>(
        <ListItems 
          item={item} 
          key={item.id}
        />
      ))}
    </ul>
  )
}

export default List