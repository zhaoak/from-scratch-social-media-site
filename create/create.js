import { upsertProfile, uploadImg, getUser, redirectIfNotLoggedIn } from '../fetch-utils.js';

const userData = document.getElementById('create');

window.addEventListener('load', async () => {
    redirectIfNotLoggedIn();
});

userData.addEventListener('submit', async (e) => {
    e.preventDefault();

    const profileData = new FormData(userData);
    const newProfile = {
        user_name: profileData.get('username'),
        bio: profileData.get('bio'),
        user_id: getUser().id,
    };
    const imgFile = profileData.get('avatar');

    if (imgFile.size) {
        const imgPath = `${newProfile.user_id}/${imgFile.name}`;
        const url = await uploadImg(imgPath, imgFile);
        newProfile.avatar_url = url;
    }
    const response = await upsertProfile(newProfile);

    if (response.error) {
        console.error(response.error);
    } else {
        location.assign(`../`);
    }
});
