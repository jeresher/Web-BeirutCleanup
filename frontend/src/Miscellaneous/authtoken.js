function getAuthToken() {
    return localStorage.getItem('auth-token');
}

export default getAuthToken;