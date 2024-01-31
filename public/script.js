document.addEventListener('DOMContentLoaded', function() {
    const baseAPIButton = document.getElementById('api-show');
    const fetchPetsButton = document.getElementById('fetch-pets-button');
    const petNameButton = document.getElementById("pet-name-button");
    const ownerNameButton = document.getElementById("owner-name-button");

    baseAPIButton.addEventListener('click', function () {
        base_api();
    });

    fetchPetsButton.addEventListener('click', function () {
        fetch_all_pets();
    });

    petNameButton.addEventListener('click', function () {
        const name = document.getElementById('pet-name').value;
        fetch_pet(name);
    })

    ownerNameButton.addEventListener('click', function () {
        const name = document.getElementById('owner-name').value;
        fetch_pet_by_owner(name);
    })
})