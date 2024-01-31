async function base_api() {
    window.location.href = '/api';
}

async function fetch_all_pets() {
    try {
        const response = await fetch('/api/v1/pets');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Display the fetched data in the result div
        document.getElementById('fetched-all-pets').innerText = JSON.stringify(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('fetched-all-pets').innerText = 'Error fetching pets.';
    }
}

async function fetch_pet(name) {
    try {
        const endpoint = `/api/v1/pet/${name}`;
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Display the fetched data in the result div
        document.getElementById('pet-name-div').innerText = JSON.stringify(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('pet-name-div').innerText = 'Error fetching pets.';
    }
}

async function fetch_pet_by_owner(name) {
    try {
        const endpoint = `/api/v1/pet-owner/${name}`;
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Display the fetched data in the result div
        document.getElementById('owner-name-div').innerText = JSON.stringify(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('owner-name-div').innerText = 'Error fetching pets.';
    }
}
