// Add event listener to the button
document.querySelector('[data-test-id="card-button"]')
.addEventListener('click', () => {
    alert('Button clicked!');
});
const timestampElement = 
document.querySelector( '[ data-testid="timestamp"]');
const currentTime = new Date();
timestampElement.textContent = currentTime.toLocaleTimeString
( 'en-NG' , {timeZone: 'Africa/Lagos' });
timestampElement.datetime = currentTime.toISOString();