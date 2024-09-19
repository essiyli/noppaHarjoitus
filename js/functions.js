// Hae nopan kuva-elementti
const diceImage = document.getElementById('dice');

// Lisää kuuntelija klikkaustapahtumalle
diceImage.addEventListener('click', () => {
    // Arvo satunnaisluku väliltä 1-6
    const randomNum = Math.ceil(Math.random() * 6);

    // Päivitä kuvan lähde (src) arvotun luvun mukaan
    diceImage.src = './kuvat/noppa' + randomNum + '.svg';
});

 