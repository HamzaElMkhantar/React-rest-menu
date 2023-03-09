import React from 'react'
import { Row , Card , CardImg  , Button } from 'react-bootstrap'
import imagesItem from '../images/dinner1.jpg'

import Reveal from 'react-reveal/Reveal';

export const ItemsList = ({ dataItems }) => {
  return (
    <Row className='p-2'>
    <Reveal effect="fadeInUp" >
        {dataItems.length >= 1 ? (
            dataItems.map( (item) => {
                return    (<div key={item.id}  sm="12" className='mb-3 d-flex cardItems '>
                 <img variant="left" className='imagesItem' src={item.imgUrl} />
                 <div className='d-flex justify-content-around ' > 
                     <div className='title-price'>
                         <h3>{item.title}</h3>
                         <h4>Price : {item.price}$ </h4>
                     </div>
                     <p>
                         {item.description}
                     </p>
                     <Button className='cardBtn'>Shop Now</Button>
                 </div>
            </div>)
            } )
        ) : <h2 className='text-center'> No Items Here </h2>}


    </Reveal>   

         
    </Row>
  )
}
