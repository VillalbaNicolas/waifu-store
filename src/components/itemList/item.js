import {useState} from 'react'; 
import ItemDetail from './itemDetail';

const Item = ({item, addProducts}) => {
    const [isActive, setIsActive] = useState(false);
    console.log(item);
    const handleClick = event => {
        setIsActive(current => !current);
      };

      const updateCart = (event) => {
        event.stopPropagation();
        addProducts(oldValues => [...oldValues, item])
      }
    return(
    <li id = {item.id}   onClick={handleClick}>
        <div>

            {isActive ?(
                <div className="detail-container">
                    <ItemDetail idItem = {item.id} addProducts={addProducts}/>
                </div>
            ) : (

                <div class="card" >
                <img className="card-img-top" src={item.pictureUrl} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <a href="#" className="btn btn-primary" onClick={updateCart}>Buy</a>
                </div>
              </div>
            )}
            
        </div>
    </li>
    )
}

export default Item;