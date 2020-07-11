
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

$(window).blur(function() {
    displaySpotlight();
});
const displaySpotlight = async () => {
    //do stuff
     await sleep(3000);
    console.log('Set Spotlight modal from display none to display block');
    document.getElementById('spotlight').style.display = "inline-flex";
}
