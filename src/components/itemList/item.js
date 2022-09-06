const Item = ({item}) => {
    return(
    <li id = {item.id}>
        <div>
            <img src= {item.pictureUrl} alt=""/>
            <p>{item.title}</p>
            <p>${item.price}</p>
        </div>
    </li>
    )
}

export default Item;