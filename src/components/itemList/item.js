import {useState} from 'react';

const Item = ({item}) => {
    const [isActive, setIsActive] = useState(false);
    console.log(item);
    const handleClick = event => {
        setIsActive(current => !current);
      };
    return(
    <li id = {item.id}  className={isActive ? 'activeList' : ''} onClick={handleClick}>
        <div>
            <img src= {item.pictureUrl} alt=""/>
            <p>{item.title}</p>
            <div className={isActive ? 'activeDetails' : 'disableDetails'}>
                <p>{item.description}</p>
                <p>{item.title}</p>
                <p>${item.price}</p>
            </div>
        </div>
    </li>
    )
}

export default Item;