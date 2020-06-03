$(window).blur(function() {
    console.log('User Has Changed focus');
    displaySpotlight();
});
const displaySpotlight = async () => {
    //do stuff
    console.log('Set Spotlight modal from display none to display block');
    document.getElementById('spotlight').style.display = "inline-flex";
}
