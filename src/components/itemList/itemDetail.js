import rem from '../../images/products/rem01.jfif'
import raph from '../../images/products/raph01.jfif'
import React, {Component, useEffect, useState} from "react";

const productos = async (id) => {

    const product = [
      {
        id: 1,
        title: 'Raphtalia',
        description: {
            serie: 'Tate no Yuusha',
            weight: 100,
            width: 20,
            heigh: 200,
            model: 'Original'
        },
        price: 10000,
        pictureUrl : raph
      },
      {
        id: 2,
        title: 'Rem',
        description:{
            serie:  'Re Zero',
            weight: 100,
            width: 20,
            heigh: 200,
            model: 'Alternative'
        },
        price: 20000,
        pictureUrl : rem
      },
    ]
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(product.filter(product => product.id === id));
        }, 2000);
      });
  }

const ItemDetail = ({idItem, addProducts}) => {

    const [name, setNames] = useState([])
    useEffect(() => {
     productos(idItem).then((data) => {
       setNames(data)
     })
   },[])


   const updateCart = (event) => {
    event.stopPropagation();
    addProducts(oldValues => [...oldValues, name[0]])
}

    return (
        <div>
            { name[0] ?(
<div className="card mb-3">
  <img className="card-img-top" src={name[0].pictureUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Modelo : {name[0].description.model}</p>
    <p className="card-text">Serie : {name[0].description.serie}</p>
    <p className="card-text">Peso : {name[0].description.weight} gr</p>
    <p className="card-text">Size : {name[0].description.width} cm x {name[0].description.heigh} cm</p>
    <p className="card-text">Precio : ${name[0].price}</p>
    <button type="button" className="btn btn-primary" onClick={updateCart}>Buy</button>
  </div>
  </div>
                ):(
                    <div>
                    </div>
                )
            }
           
        </div>
    )
}

export default ItemDetail;
