

export const firebaseConfig = {
    // apiKey: "AIzaSyAJr75mou4_hm3qYG7weck2CvtL6Kqg5Vk",
    // authDomain: "netflixclonetg.firebaseapp.com",
    // projectId: "netflixclonetg",
    // storageBucket: "netflixclonetg.appspot.com",
    // messagingSenderId: "278239364629",
    // appId: "1:278239364629:web:089f8bc8dab55a2814f01c"

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

