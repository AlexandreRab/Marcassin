import axios from 'axios'

/**
 * Get all from url 
 * 
 */
function getFromApi(url){
     const request = axios.get(url)
    .then(response =>{
         return response.data 
        })
    .catch(err =>{
        console.log(err)
    })
    return request
};
export default getFromApi;