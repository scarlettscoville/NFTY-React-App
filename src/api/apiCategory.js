import apiClientNoAuth from './clientNoAuth'
import apiClientTokenAuth from './clientTokenAuth'

const endpoint= '/api/category'

const get = async (cancelToken) =>{
    let error;
    let categories;

    const response = await apiClientNoAuth(cancelToken).get(endpoint)
    if (response.ok){
        categories=response.data.categories
    }else{
        error = "An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        categories
    }
}

const post = async (token, catName, cancelToken) => {
    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint,{name:catName})
    return response.ok
}

