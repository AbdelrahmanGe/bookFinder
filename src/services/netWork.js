

import axios from 'axios';




let url='https://www.googleapis.com/books/v1/volumes?q=react';

export function getAllBooks(){
return axios.get(url)
}


export function searchBook(val) {
return axios.get('https://www.googleapis.com/books/v1/volumes?',{
params:{
    q:val
}
})
}




