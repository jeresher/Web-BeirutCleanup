
const dev = {
    url: {
        API_URL: 'http://localhost:5000'
    },
    key: {
        GOOGLE_KEY: 'AIzaSyCf7q432pZoSonob_rX7lWI5VOVYWop5ww'
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