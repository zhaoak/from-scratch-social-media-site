import {
    fetchCurrentUser,
    fetchRecentMessages,
    redirectIfNoProfile,
    redirectIfNotLoggedIn,
} from '../fetch-utils.js';
import { renderMessage, renderNavBarContents } from '../render-utils.js';

// Dom Elements
const navBarEl = document.querySelector('nav');
const messageDisplay = document.getElementById('chat-display');

// State
let currentUser;
let messageLog = [];
let currentChatroom = 1;

//Event Listeners
window.addEventListener('load', async () => {
    redirectIfNotLoggedIn();
    currentUser = await fetchCurrentUser();

    redirectIfNoProfile(currentUser);
    navBarEl.append(renderNavBarContents(currentUser));

    messageLog = await fetchRecentMessages();
    console.log(messageLog);

    displayPreviousMessages();
});

async function displayPreviousMessages() {
    for (let message of messageLog) {
        messageDisplay.append(await renderMessage(message));
    }
}
