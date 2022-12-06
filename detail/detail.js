//imports

import { fetchAllProfiles, fetchProfile } from '../fetch-utils.js';
import { renderProfileDetails } from '../render-utils.js';

//dom

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
    //displayProfileDetails
});

//display functions

async function displayProfileDetails() {
    profileDetailsEl.textContent = '';

    const profile = await fetchProfile(id);
    console.log('profile', profile);
    // profile;

    profileDetailsEl.append(renderProfileDetails(profile));
}
