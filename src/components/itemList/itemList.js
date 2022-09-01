import Item from './item.js'

const ItemList = ({itemsArray, items, updateItems}) => {
    console.log(itemsArray)
    itemsArray.map((element) => {
        return (
            console.log('elemento', element)
     ) })

    return (
        <ul>
            {itemsArray.map((element) => {
                 if(element.title){
                    updateItems([...items, element.title])
            }
            })}

            {items.map((element) => {
                return ( 
                    <Item name = {element}/>
                )
            })
            }
        </ul>
    )
}

export default ItemList;