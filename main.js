import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  // Add your Firebase config here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export app and db if needed by other modules
export { app, db };