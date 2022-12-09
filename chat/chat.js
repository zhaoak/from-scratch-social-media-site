import {
    fetchCurrentUser,
    fetchRecentMessages,
    onMessage,
    redirectIfNoProfile,
    redirectIfNotLoggedIn,
    sendMessage,
} from '../fetch-utils.js';
import { renderMessage, renderNavBarContents } from '../render-utils.js';

// Dom Elements
const navBarEl = document.querySelector('nav');
const messageDisplay = document.getElementById('chat-display');
const messageForm = document.querySelector('form');

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

    onMessage(async (payload) => {
        console.log('this code is running');
        console.log('payload', payload);
        displayNewMessage(payload.new);
    });
});

messageForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    //make a formData object
    const messageData = new FormData(messageForm);

    const newMessage = {
        text: messageData.get('message-text'),
        sender_id: currentUser.id,
        sender_username: currentUser.user_name,
    };
    await sendMessage(newMessage);

    messageForm.reset();
});

async function displayPreviousMessages() {
    for (let message of messageLog) {
        messageDisplay.append(await renderMessage(message));
    }
}

async function displayNewMessage(message) {
    messageDisplay.append(await renderMessage(message));
}
