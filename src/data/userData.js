import {authHeader} from '../helpers/authHeader'
class UserData {
    constructor() {
        this.handleResponse = this.handleResponse.bind(this);
    };
static postData(uData) {
    
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(uData)
    };

    return fetch('http://127.0.0.1:5000/api/accounts/current' , requestOptions).then(this.handleResponse);
    //return fetch(`/users/register`, requestOptions).then(handleResponse);
}
handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
}
export default UserData