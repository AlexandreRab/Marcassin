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
 * @param {Object} newData
 * @Simon HUET
 */
export function postInApi(url , newData){
   const request =  axios.request({
        method:'post',
        url: url,
        data:newData
    })
    .then(response => {return response.data} )
    .catch(err =>console.log(err))
    
    return request
};

