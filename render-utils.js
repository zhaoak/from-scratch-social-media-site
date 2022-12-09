import {
    incrementPopularity,
    decrementPopularity,
    signOutUser,
    fetchProfile,
} from './fetch-utils.js';

export function renderProfileCard(profile) {
    const profileContainer = document.createElement('div');
    const avatarImageEl = document.createElement('img');
    const usernameEl = document.createElement('h3');
    const popularityScoreEl = document.createElement('h2');

    avatarImageEl.src = profile.avatar_url;
    usernameEl.textContent = profile.user_name;
    popularityScoreEl.textContent = profile.popularity;

    // add classes to elements
    profileContainer.classList.add('profile-card');
    avatarImageEl.classList.add('avatar-img');

    // event listener for clicking on user
    profileContainer.addEventListener('click', () => {
        location.assign(`./detail/index.html?id=${profile.id}`);
    });

    profileContainer.append(avatarImageEl, usernameEl, popularityScoreEl);
    return profileContainer;
}

// pass in logged in user's profile as argument
export function renderNavBarContents(profile) {
    const navBarContents = document.createElement('div');
    const profileListPageLink = document.createElement('a');
    const editProfilePageLink = document.createElement('a');
    const currentUserUsernameLink = document.createElement('a');
    const currentUserAvatar = document.createElement('img');
    const logoutLink = document.createElement('a');
    const separatorChar = document.createElement('span');
    const chatRoomLink = document.createElement('a');

    profileListPageLink.href = '../index.html';
    profileListPageLink.textContent = 'All Profiles';
    editProfilePageLink.href = '../edit/';
    editProfilePageLink.textContent = 'Edit Your Profile';
    currentUserUsernameLink.href = `../detail/index.html?id=${profile.id}`;
    currentUserUsernameLink.textContent = `${profile.user_name}`;
    chatRoomLink.href = `../chat/index.html`;
    chatRoomLink.textContent = 'Chat';
    // making an anchor tag to put avatar image inside of so avatar can act as a link
    const avatarLinkWrapper = document.createElement('a');
    avatarLinkWrapper.href = `../detail/index.html?id=${profile.id}`;
    currentUserAvatar.src = profile.avatar_url;
    avatarLinkWrapper.append(currentUserAvatar);
    separatorChar.textContent = '|';
    logoutLink.textContent = 'Logout';
    logoutLink.href = '.';

    logoutLink.addEventListener('click', async () => {
        await signOutUser();
        location.replace('../auth');
    });

    // add css classes to nav bar elements
    currentUserAvatar.classList.add('avatar-img');

    navBarContents.append(
        profileListPageLink,
        separatorChar,
        editProfilePageLink,
        chatRoomLink,
        separatorChar,
        currentUserUsernameLink,
        avatarLinkWrapper,
        logoutLink
    );
    return navBarContents;
}

export function renderProfileDetails(profile) {
    const profileDetailsContainerEl = document.createElement('div');
    const imageEl = document.createElement('img');
    const popularityEl = renderPopularityEl(profile);
    const usernameHeaderEl = document.createElement('h2');
    const userBioEl = document.createElement('div');

    imageEl.src = profile.avatar_url;

    usernameHeaderEl.textContent = profile.user_name;
    userBioEl.textContent = profile.bio;

    //css styling yet unfinished
    imageEl.classList.add('detailimg');
    popularityEl.classList.add('popularity-section');
    profileDetailsContainerEl.classList.add('profile-details-div');

    profileDetailsContainerEl.append(imageEl, popularityEl, usernameHeaderEl, userBioEl);

    return profileDetailsContainerEl;
}

export function renderPopularityEl(profile) {
    const popularityContainerEl = document.createElement('div');
    const popularityDisplayEl = document.createElement('div');
    const upvoteEl = document.createElement('button');
    const downvoteEl = document.createElement('button');

    popularityDisplayEl.textContent = profile.popularity;
    upvoteEl.textContent = 'Upvote';
    downvoteEl.textContent = 'Downvote';

    //eventHandler for up/downvote buttons
    upvoteEl.addEventListener('click', async () => {
        upvoteEl.disabled = true;

        await incrementPopularity(profile.id);

        popularityDisplayEl.textContent++;
    });

    downvoteEl.addEventListener('click', async () => {
        downvoteEl.disabled = true;

        await decrementPopularity(profile.id);

        popularityDisplayEl.textContent--;
    });

    popularityContainerEl.append(upvoteEl, popularityDisplayEl, downvoteEl);

    return popularityContainerEl;
}

// needs to fetch avatar url from profiles table
export async function renderMessage(message) {
    const messageBubble = document.createElement('div');
    const messageUsername = document.createElement('p');
    const messageContent = document.createElement('p');
    const messageAvatar = document.createElement('img');
    const timeStamp = document.createElement('span');

    // divs for spacing different parts of message
    const avatarUsernameSect = document.createElement('div');
    const messageTextSect = document.createElement('div');

    messageUsername.textContent = message.sender_username;
    messageContent.textContent = message.text;

    const senderProfile = await fetchProfile(message.sender_id);
    messageAvatar.src = senderProfile.avatar_url;

    timeStamp.textContent = message.created_at;

    //Add css classes
    messageAvatar.classList.add('avatar-img');
    messageBubble.classList.add('message-bubble');
    avatarUsernameSect.classList.add('message-left-section');
    messageTextSect.classList.add('message-content-section');
    timeStamp.classList.add('message-timestamp');

    avatarUsernameSect.append(messageAvatar, messageUsername);
    messageTextSect.append(messageContent, timeStamp);
    messageBubble.append(avatarUsernameSect, messageTextSect);

    return messageBubble;
}
