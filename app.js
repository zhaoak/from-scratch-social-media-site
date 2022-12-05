/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { fetchAllProfiles } from './fetch-utils.js';

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */
console.log(await fetchAllProfiles());
