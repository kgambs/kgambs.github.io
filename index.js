const closeModal = document.querySelector('.modal-dismiss');

closeModal.addEventListener('click', clickContinue);

function clickContinue() {
    document.getElementById('ack-window').classList.add('modal-close');
}

const form = document.getElementById('enquiry-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.reset();
});