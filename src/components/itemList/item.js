import {useState} from 'react'; 
import ItemDetail from './itemDetail';

const Item = ({item}) => {
    const [isActive, setIsActive] = useState(false);
    console.log(item);
    const handleClick = event => {
        setIsActive(current => !current);
      };
    return(
    <li id = {item.id}   onClick={handleClick}>
        <div>

            {isActive ?(
                <div className="detail-container">
                    <ItemDetail idItem = {item.id}/>
                </div>
            ) : (
                <div>
                    <img src= {item.pictureUrl} alt=""/>
                    <p>{item.title}</p>
                </div>
            )}
            
        </div>
    </li>
    )
}

export default Item;