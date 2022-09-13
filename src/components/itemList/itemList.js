import Item from './item.js'

const ItemList = ({ items, addProducts}) => {

    return (
        <ul>
           {items.map(item =>{
            return <Item item = {item} addProducts = {addProducts}/>
           })}
        </ul>
    )
}

export default ItemList;