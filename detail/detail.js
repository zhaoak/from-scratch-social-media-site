//imports

import { fetchCurrentUser, fetchProfile, redirectIfNoProfile } from '../fetch-utils.js';
import { renderProfileDetails, renderNavBarContents } from '../render-utils.js';

//dom
const navSectionEl = document.querySelector('nav');
const profileDetailsEl = document.querySelector('#profile-details');

const params = new URLSearchParams(location.search);
const id = params.get('id');

//state

//events

window.addEventListener('load', async () => {
    if (!id) {
        location.assign('/');

        return;
    }
    const currentUser = await fetchCurrentUser();

    redirectIfNoProfile(currentUser);

    const profile = await fetchProfile(id);
    displayProfileDetails(profile);
    navSectionEl.append(renderNavBarContents(currentUser));
});

//display functions

async function displayProfileDetails(profile) {
    profileDetailsEl.textContent = '';

    console.log('profile', profile);
    // profile;

    profileDetailsEl.append(renderProfileDetails(profile));
}
