
import breakfastimg1 from './images/breakfast1-oeufs.jpg' ;
import breakfastimg2 from './images/breakfast2.jpg' ;
import breakfastimg3 from './images/breakfast3.jpg' ;

import dinner1 from './images/dinner1.jpg' ;
import dinner2 from './images/dinner2.jpg' ;

import lunch1 from './images/lunch1.jpg' ;
import lunch2 from './images/lunch2-spaghetti.jpg' ;
import lunch3 from './images/lunch3-pizza.jpg' ;
import lunch4 from './images/lunch4.jpg' ;
import lunch5 from './images/lunch-5.jpg' ;
import lunch6 from './images/lunch6.jpg' ;

const items = [
    {id: Math.random()*10 , title: 'Breakfast' , description: 'food description' , price: '30' ,category: 'Breakfast' , imgUrl : breakfastimg1 } ,
    {id: Math.random()*10 , title: 'Dinner' , description: 'food description' , price: '70' ,category: 'Dinner' , imgUrl : dinner1 } ,
    {id: Math.random()*10 , title: 'Lunch' , description: 'food description' , price: '50' ,category: 'Lunch' , imgUrl : lunch1 } ,
    {id: Math.random()*10 , title: 'Dinner' , description: 'food description' , price: '60' ,category: 'Dinner' , imgUrl : dinner2 } ,
    {id: Math.random()*10 , title: 'Lunch' , description: 'food description' , price: '45' ,category: 'Lunch' , imgUrl : lunch2 } ,
    {id: Math.random()*10 , title: 'Breakfast' , description: 'food description' , price: '50' ,category: 'Breakfast' , imgUrl : breakfastimg2 } ,
    {id: Math.random()*10 , title: 'Lunch' , description: 'food description' , price: '80' ,category: 'Lunch' , imgUrl : lunch3 } ,
    {id: Math.random()*10 , title: 'Lunch' , description: 'food description' , price: '60' ,category: 'Lunch' , imgUrl : lunch4 } ,
    {id: Math.random()*10 , title: 'Lunch' , description: 'food description' , price: '50' ,category: 'Lunch' , imgUrl : lunch5 } ,
    {id: Math.random()*10 , title: 'Breakfast' , description: 'food description' , price: '40' ,category: 'Breakfast' , imgUrl : breakfastimg3 } ,
    {id: Math.random()*10 , title: 'Lunch' , description: 'food description' , price: '100' ,category: 'Lunch' , imgUrl : lunch6 }  
]

export default items ;