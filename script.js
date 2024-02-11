document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const profileList = document.getElementById('profile-items');
    const profileForm = document.getElementById('profile-form');
    const profileData = []; // Array to store profile data

    if (!profileList || !profileForm) {
        console.error('One or more elements could not be found');
        return;
    }

    function displayProfile(name, url, platform, description) {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${name}</h3>
            <p><a href="${url}" target="_blank">${url}</a></p>
            <p>Platform: ${platform}</p>
            <p>Description: ${description}</p>
        `;
        profileList.appendChild(li);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log('Form submitted');

        const name = document.getElementById('profile-name').value;
        const url = document.getElementById('profile-url').value;
        const platform = document.getElementById('platform').value;
        const description = document.getElementById('profile-description').value;

        console.log('Profile Data:', { name, url, platform, description });

        displayProfile(name, url, platform, description);
        profileForm.reset();

        // Store the profile data in the array
        profileData.push({ name, url, platform, description });

        // Display the information in a popup or any other way you prefer
        // Example: using the alert function to display the data
        alert(`Profile Data:\nName: ${name}\nURL: ${url}\nPlatform: ${platform}\nDescription: ${description}`);
    }

    profileForm.addEventListener('submit', handleFormSubmit);
});
  
  