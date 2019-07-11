export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    console.log("local",user)

    if (user.user && user.user.token) {
        return { 'Authorization': 'Bearer ' + user.user.token };
    } else {
        return {};
    }
}