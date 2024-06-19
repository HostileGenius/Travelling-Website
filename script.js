document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    
    alert(`Thank you, ${name}! Your booking to ${destination} has been received. We will contact you shortly at ${email}.`);
});
