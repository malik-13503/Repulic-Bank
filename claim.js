document.getElementById('giftClaimForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Here you would typically send the form data to your server
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Simulate a successful claim
    document.getElementById('responseMessage').innerText = `Thank you, ${name}! Your gift will be sent to ${address}.`;

    // Optionally, you could clear the form
    this.reset();
});