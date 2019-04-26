import axios from 'axios';
export default ({method, url, params}) => {
    return axios ({
        method,
        url,
        params
    })
        .then(result => {
            return result
        })
        .catch(error => {
            return error
        })
}