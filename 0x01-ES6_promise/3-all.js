const uploadPhoto = require('./utils').uploadPhoto;
const createUser = require('./utils').createUser;

function handleProfileSignup() {
    // Create an array of promises
    const promises = [
        uploadPhoto(),
        createUser()
    ];

    // Use Promise.all() to resolve all promises
    Promise.all(promises)
        .then(([photoResult, userResult]) => {
            // Assuming the response contains a body with firstName and lastName properties
            const { firstName, lastName } = userResult.body;
            console.log(`User profile signup successful! Name: ${firstName} ${lastName}`);
        })
        .catch(error => {
            console.error('Signup system offline:', error.message);
        });
}

// Call the function
handleProfileSignup();
