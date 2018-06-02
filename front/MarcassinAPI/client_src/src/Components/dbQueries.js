import axios from 'axios'

/**
 * Get all from url
 * @param {*} url 
 * @Simon HUET
 */
export function getFromApi(url){
     const request = axios.get(url)
    .then(response =>{
         return response.data 
        })
    .catch(err =>{
        console.log(err)
    })
    return request
};

/**
 * Post data in database
 * @param {*} url 
 * @Simon HUET
 */
export function postInApi(url){
    axios.post(url).then(response=> console.log(response))
};


