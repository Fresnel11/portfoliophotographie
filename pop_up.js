function openPhoto(imageSrc, event) {
    event.preventDefault();
    const modal = document.getElementById("modal");
    // const modalImage = document.getElementById("modalImage");
    // const modalImage = modal.querySelectorAll("img");
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

function closePhoto() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}


function promoNav() {
    const promo = document.getElementById("demo");
    promo.style.display = "none";
}

// Set the date we're counting down to
let countDownDate = new Date("july 18, 2024 14:20:20").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "Jours " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);