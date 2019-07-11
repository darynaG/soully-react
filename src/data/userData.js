import {authHeader} from '../helpers/authHeader'
import {dbConstants} from '../constants'
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

    return fetch(dbConstants.SERVER_ADDRESS +'/api/accounts/current' , requestOptions).then(this.handleResponse);
}
handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
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