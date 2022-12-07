import { fetchCurrentUser, redirectIfNoProfile, redirectIfNotLoggedIn } from '../fetch-utils.js';
import { renderNavBarContents } from '../render-utils.js';

// Dom Elements
const navBarEl = document.querySelector('nav');

// State
let currentUser;

//Event Listeners
window.addEventListener('load', async () => {
    redirectIfNotLoggedIn();
    currentUser = await fetchCurrentUser();

    redirectIfNoProfile(currentUser);
    navBarEl.append(renderNavBarContents(currentUser));
});
