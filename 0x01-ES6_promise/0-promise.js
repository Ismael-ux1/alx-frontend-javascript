function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
	    resolve('API response data');
	    });
}

// Usage:
getResponseFromAPI()
    .then((data) => {
        console.log('API response:', data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error.message);
    });
