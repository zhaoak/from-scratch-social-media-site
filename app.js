/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { fetchAllProfiles } from './fetch-utils.js';
import { renderProfileCard } from './render-utils.js';

/* Get DOM Elements */
const profilesListEl = document.getElementById('profiles-list');

/* State */
let profiles = [];

/* Events */
window.addEventListener('load', async () => {
    profiles = await fetchAllProfiles();
    displayProfileList();
    console.log(profiles);
});

/* Display Functions */
function displayProfileList() {
    for (let profile of profiles) {
        const newProfileEl = renderProfileCard(profile);
        profilesListEl.append(newProfileEl);
    }
}
