import Item from './item.js'

const ItemList = ({ items}) => {

    return (
        <ul>
           {items.map(item =>{
            return <Item item = {item}/>
           })}
        </ul>
    )
}

export default ItemList;