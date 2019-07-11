export function authHeader() {

    let user = JSON.parse(localStorage.getItem('user'));


    if (user.user && user.user.token) {
        return { 'Authorization': 'Bearer ' + user.user.token };
    } else {
        return {};
    }
}