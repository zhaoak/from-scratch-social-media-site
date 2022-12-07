import {
    upsertProfile,
    uploadImg,
    getUser,
    fetchCurrentUser,
    redirectIfNoProfile,
    redirectIfNotLoggedIn,
} from '../fetch-utils.js';
import { renderNavBarContents } from '../render-utils.js';

const userData = document.getElementById('edit');
const navSectionEl = document.querySelector('nav');
const usernameEntryEl = document.querySelector('input[name=username]');
const bioEntryEl = document.querySelector('textarea');

let currentUser;

window.addEventListener('load', async () => {
    redirectIfNotLoggedIn();

    currentUser = await fetchCurrentUser();

    redirectIfNoProfile(currentUser);

    navSectionEl.append(renderNavBarContents(currentUser));

    usernameEntryEl.value = currentUser.user_name;
    bioEntryEl.textContent = currentUser.bio;
});

userData.addEventListener('submit', async (e) => {
    e.preventDefault();

    const profileData = new FormData(userData);
    const editedProfile = {
        user_name: profileData.get('username'),
        bio: profileData.get('bio'),
        user_id: getUser().id,
    };
    const imgFile = profileData.get('avatar');

    if (imgFile.size) {
        const imgPath = `${editedProfile.user_id}/${imgFile.name}`;
        const url = await uploadImg(imgPath, imgFile);
        editedProfile.avatar_url = url;
    }
    const response = await upsertProfile(editedProfile);

    if (response.error) {
        console.error(response.error);
    } else {
        location.assign(`../detail/index.html?id=${currentUser.id}`);
    }
});
