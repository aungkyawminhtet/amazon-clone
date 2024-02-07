import React from 'react'
import Card from './Card';

interface pdsType {
  id: number,
  title: String,
  price: number,
  description: String,
  image: String,
  category: String,
 
}

const ProductsFeed = async() => {
  const products: pdsType[] = await getData();
  // console.log(products);
  return (
    <div className='flex flex-wrap gap-6 items-center justify-center mt-5 md:-mt-20'>
      {
        products.map((pds) => (
          <Card key={pds.id} id={pds.id} title = {pds.title} price = {pds.price} description = {pds.description} image ={pds.image} category = {pds.category} />
        ))
      }
    </div>
  )
}
export default ProductsFeed

export async function getData(){
  const response = await fetch("https://fakestoreapi.com/products");
  if(!response.ok){
    throw new Error("Data fetching is error");
  }
  return response.json();
}
