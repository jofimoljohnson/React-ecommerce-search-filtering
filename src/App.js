import React from 'react'
import { useState } from "react";
import Nav from "./Navigation/Nav";
import Recommended from "./Recommended/Recommended";
import Products from "./products/Products";
import Sidebar from "./sidebar/Sidebar";
import './index.css'
// import database
import products from  './db/Data'
import Card from './components/Card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query,setQuery]=useState("")

  //  input filter
const handleInputChange = event=>{
  setQuery(event.target.value)
}

const filteredItem = products.filter(product=>product.title.toLocaleLowerCase().
indexOf(query.toLocaleLowerCase())!==-1)

const handleChange = event=>{
  setSelectedCategory(event.target.value)
}

const handleClick = event=>{
  setSelectedCategory(event.target.value)
}

function filterdData(products,selected,query){
  let filteredProducts = products

  // filtering input items
  if(query){
    filteredProducts = filteredItem
  }

  // selected filter
if(selected){
  filteredProducts =filteredProducts.filter(
    ({category,color, company, newPrice,title})=>
  category === selected || 
  color===selected ||
   company===selected||
    newPrice===selected|| 
    title===selected )
}
return filteredProducts.map(({
  img,title,star,reviews,prevPrice,newPrice
})=>(
  <Card
  key={Math.random()}
  img={img}
  title={title}
  star={star}
  reviews={reviews}
  prevPrice={prevPrice}
  newPrice={newPrice}
  
  
  />
))
}
const result = filterdData(products,selectedCategory,query)
 
  return (
    <div>

<Sidebar handleChange={handleChange}/>
     <Nav query={query} handleInputChange ={handleInputChange }/>
       <Recommended  handleClick={handleClick}/>

       <Products result={result}/>



    </div>
  )
}

export default App




