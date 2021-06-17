export default (error)=>{
    if (error.response) {
        // Request made and server responded
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        
        return Promise.reject(error.response.data)
        
    } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
        
        return Promise.reject(error.request.data)
    } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
        return Promise.reject(error.message)
    }
}