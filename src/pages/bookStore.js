import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import axios from 'axios';
import {getAllBooks , searchBook} from '../services/netWork';





export default function BookStore() {


const [books , setBooks]=useState([])

useEffect(()=>{

console.log('mounted')
getAllBooks().then((result)=>{
console.log(result.data.items)
setBooks(result.data.items)

console.log(result.data.items[0].volumeInfo.imageLinks.smallThumbnail)

}).catch((err)=>{
console.log(err)
})
return()=>{
console.log("destory")
}
},[])

const [searchVal , setSearchval]=useState({value:''})

function getval(v){
  setSearchval({
    ...searchVal,
    value:v.target.value,
  })
}

function searchbooks(){
  searchBook(searchVal.value).then((va)=>{
   
    console.log(va.data.items);
    setBooks(va.data.items)
  })
}

let linkOFcover='https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1153&q=80'
let color='rgba(128, 255, 0, 0.137)'
    return(
        <>

<div className='container' style={{backgroundImage:'url('+linkOFcover+')'}} >
<div className=" container-fluid card  text-center" style={{width:"700px" , backgroundColor:color}}>
  <div className="card-body">
    <h5 className="card-title"style={{color:'white'}} >Search for books</h5>
    <input className="form-control mr-sm-2" type="search" onChange={getval} value={searchVal.value} placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-light m-3 " onClick={searchbooks} >Search</button>
  </div>
</div>
</div>

<div className='container d-flex flex-wrap'>
{books.map((data,index)=>{
return(
<div key={index}> 
<CardComponent Book={data}  pic={data.volumeInfo.imageLinks}></CardComponent>
</div>
);
})}
</div>
</>
);
}
