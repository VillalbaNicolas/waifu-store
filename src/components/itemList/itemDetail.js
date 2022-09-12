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

const ItemDetail = ({idItem}) => {

    const [name, setNames] = useState([])
    useEffect(() => {
     productos(idItem).then((data) => {
       setNames(data)
     })
   },[])


    return (
        <div>
            { name[0] ?(
                    <div className = 'detail-info-card'>
                        <img src= {name[0].pictureUrl} alt="" className='detail-info-card-icon' />
                        <div>
                            <h1>{name[0].title}</h1>
                            <p>Modelo : {name[0].description.model}</p>
                            <p>Serie : {name[0].description.serie}</p>
                            <p>Peso : {name[0].description.weight} gr</p>
                            <p>Size : {name[0].description.width} cm x {name[0].description.heigh} cm</p>
                            <p>Precio : ${name[0].price}</p>
                            <p>BUY</p>
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
