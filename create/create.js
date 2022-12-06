import { fetchCurrentUser, upsertProfile } from '../fetch-utils.js';

const userData = document.getElementById('create');
let currentUser;

window.addEventListener('load', async () => {
    currentUser = fetchCurrentUser();
});

userData.addEventListener('submit', async (e) => {
    e.preventDefault();
    const profileData = new FormData(userData);
    const newProfile = { user_name: profileData.get('username'), bio: profileData.get('bio') };
    const imgFile = profileData.get('avatar');

    if (imgFile.size) {
        const imgPath = `${currentUser.id}/${imgFile.name}`;
        const url = await uploadImg(imgPath, imgFile);
    }

    upsertProfile();
});
