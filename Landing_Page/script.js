
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

if (logalStorage.getItem('isRegistered') !== 'true') {
    window.location.href = 'regform.html';
}

var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleCaptions'), {
  wrap: true,
  ride: 'carousel'
});