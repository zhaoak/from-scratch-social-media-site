/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { fetchAllProfiles } from './fetch-utils.js';
import { renderProfileCard, renderNavBarContents } from './render-utils.js';

/* Get DOM Elements */
const profilesListEl = document.getElementById('profiles-list');
const navSectionEl = document.querySelector('nav');

/* State */
let profiles = [];

/* Events */
window.addEventListener('load', async () => {
    profiles = await fetchAllProfiles();
    displayProfileList();
    console.log(profiles);

    // for now, pretend logged in user is first one in profiles array
    navSectionEl.append(renderNavBarContents(profiles[0]));
});

/* Display Functions */
function displayProfileList() {
    for (let profile of profiles) {
        const newProfileEl = renderProfileCard(profile);
        profilesListEl.append(newProfileEl);
    }
}
