
const dev = {
    url: {
        API_URL: 'http://localhost:5000'
    }
 }
const prod = {
    url: {
        API_URL: 'https://beirutcleanup.herokuapp.com'
    }
}

const Config = process.env.NODE_ENV === "development" ? dev : prod;

export default Config;