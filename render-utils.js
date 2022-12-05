export function renderProfileCard(profile) {
    const profileContainer = document.createElement('div');
    const avatarImageEl = document.createElement('img');
    const usernameEl = document.createElement('h3');
    const popularityScoreEl = document.createElement('h2');

    avatarImageEl.src = profile.avatar_url;
    usernameEl.textContent = profile.user_name;
    popularityScoreEl.textContent = profile.popularity;

    // add classes to elements
    avatarImageEl.classList.add('avatar-img');

    // event listener for clicking on user

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

    profileListPageLink.href = '../index.html';
    profileListPageLink.textContent = 'All Profiles';
    editProfilePageLink.href = '../edit/';
    editProfilePageLink.textContent = 'Edit Your Profile';
    currentUserUsernameLink.href = `../detail/index.html?id=${profile.id}`;
    currentUserUsernameLink.textContent = `${profile.user_name}`;
    // making an anchor tag to put avatar image inside of so avatar can act as a link
    const avatarLinkWrapper = document.createElement('a');
    avatarLinkWrapper.href = `../detail/index.html?id=${profile.id}`;
    currentUserAvatar.src = profile.avatar_url;
    avatarLinkWrapper.append(currentUserAvatar);
    separatorChar.textContent = '|';

    // add css classes to nav bar elements
    currentUserAvatar.classList.add('avatar-img');

    navBarContents.append(
        profileListPageLink,
        separatorChar,
        editProfilePageLink,
        separatorChar,
        currentUserUsernameLink,
        avatarLinkWrapper
    );
    return navBarContents;
}
