const dateControl = document.querySelector('input[type="date"]');
const datechenge = document.querySelector('input[type="text"]');

function chenge(event) {

    if (dateControl) {
        event.preventDefault();


    }
    if (datechenge) {

        event.target.type = "date";
    }
}

dateControl.addEventListener('click', chenge)
datechenge.addEventListener('click', chenge)