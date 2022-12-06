//imports

import { fetchAllProfiles, fetchProfile } from '../fetch-utils.js';
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
    const profile = await fetchProfile(id);
    displayProfileDetails(profile);
    navSectionEl.append(renderNavBarContents(profile));
});

//display functions

async function displayProfileDetails(profile) {
    profileDetailsEl.textContent = '';

    console.log('profile', profile);
    // profile;

    profileDetailsEl.append(renderProfileDetails(profile));
}
