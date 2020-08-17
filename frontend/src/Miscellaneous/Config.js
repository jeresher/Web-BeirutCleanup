
const dev = {
    url: {
        API_URL: 'http://localhost:5000'
    },
    key: {
        GOOGLE_KEY: 'AIzaSyAU-1wDQIL9WbWwCuC0-pmbzpXa4p64EF8'
    }
 }
const prod = {
    url: {
        API_URL: 'https://beirutcleanup.herokuapp.com'
    },
    key: {
        GOOGLE_KEY: 'AIzaSyBHav4d5W1QMtzNLGNZt2q6yGv8sDhwxY0'
    }

}

const Config = process.env.NODE_ENV === "development" ? dev : prod;

export default Config;