/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { fetchAllProfiles, fetchCurrentUser, redirectIfNoProfile } from './fetch-utils.js';
import { renderProfileCard, renderNavBarContents } from './render-utils.js';

/* Get DOM Elements */
const profilesListEl = document.getElementById('profiles-list');
const navSectionEl = document.querySelector('nav');

/* State */
let profiles = [];
let currentUser;

/* Events */
window.addEventListener('load', async () => {
    profiles = await fetchAllProfiles();
    currentUser = await fetchCurrentUser();

    redirectIfNoProfile(currentUser);

    displayProfileList();
    console.log(profiles);

    navSectionEl.append(renderNavBarContents(currentUser));
});

/* Display Functions */
function displayProfileList() {
    for (let profile of profiles) {
        const newProfileEl = renderProfileCard(profile);
        profilesListEl.append(newProfileEl);
    }
}
