document.addEventListener("DOMContentLoaded", function () {
  homePageLoader();
  searchPageLoader();
  mobilesliderLoader()
});

// for index page
function homePageLoader() {
  setTimeout(() => {
    try {
      // index page
      const headingSkeletonLoaders = document.getElementsByClassName(
        "headingSkeletonLoader"
      );
      const showHeadingsLoaded =
        document.getElementsByClassName("ShowHtmlLoaded");
      // Hide all elements with class "headingSkeletonLoader"
      for (let i = 0; i < headingSkeletonLoaders.length; i++) {
        headingSkeletonLoaders[i].style.display = "none";
      }
      // Show all elements with class "ShowHtmlLoaded"
      for (let i = 0; i < showHeadingsLoaded.length; i++) {
        showHeadingsLoaded[i].style.display = "block";
      }
      $(".slick").slick("setPosition");
      $(".slider_form").slick({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        centerPadding: "60px",
        arrows: true, // Set arrows to false to remove arrow navigation
      });
      $(".slider_form").slick("setPosition");
      $(".comp-card-slider").slick("setPosition");
      $(".car-rev-ne").slick("setPosition");
      $(".slider-form-mobile").slick("setPosition");
      // Reinitialize the popular_makesn slider
      $(".popular_makesn").slick("unslick"); // Destroy the current slider
      $(".popular_makesn").slick({
        rows: 2,
        dots: true,
        arrows: true,
        infinite: true,
        centerPadding: "60px",
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
      });
      // navbar reinitialize
      const indicator = document.querySelector(".nav-indicator");
      const items = document.querySelectorAll(".nav-item");

      function handleIndicator(el) {
        items.forEach((item) => {
          item.classList.remove("is-active");
          item.removeAttribute("style");
        });

        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.left = `${el.offsetLeft}px`;
        indicator.style.backgroundColor = el.getAttribute("active-color");

        el.classList.add("is-active");
        el.style.color = el.getAttribute("active-color");
      }

      items.forEach((item, index) => {
        item.addEventListener("click", (e) => {
          handleIndicator(e.target);
        });
        item.classList.contains("is-active") && handleIndicator(item);
      });
    } catch (err) {
      // console.log(err);
    }
  }, 4600);
}
// for search page
function searchPageLoader() {
  setTimeout(() => {
    try {
      // index page
      const headingSkeletonLoaders = document.getElementsByClassName(
        "headingSkeletonLoadersearch"
      );
      const showHeadingsLoaded = document.getElementsByClassName(
        "ShowHtmlLoadedsearch"
      );
      // Hide all elements with class "headingSkeletonLoader"
      for (let i = 0; i < headingSkeletonLoaders.length; i++) {
        headingSkeletonLoaders[i].style.display = "none";
      }
      // Show all elements with class "ShowHtmlLoaded"
      for (let i = 0; i < showHeadingsLoaded.length; i++) {
        showHeadingsLoaded[i].style.display = "block";
      }
      $(".slick").slick("setPosition");
      $(".car-rev-ne").slick("setPosition");
    } catch (err) {
      // console.log(err);
    }
  }, 2000);
}
function mobilesliderLoader() {
  setTimeout(() => {
    try {
      // index page
      const headingSkeletonLoaders = document.getElementsByClassName(
        "headingSkeletonLoadersld"
      );
      const showHeadingsLoaded = document.getElementsByClassName(
        "ShowHtmlLoadedsld"
      );
      // Hide all elements with class "headingSkeletonLoader"
      for (let i = 0; i < headingSkeletonLoaders.length; i++) {
        headingSkeletonLoaders[i].style.display = "none";
      }
      // Show all elements with class "ShowHtmlLoaded"
      for (let i = 0; i < showHeadingsLoaded.length; i++) {
        showHeadingsLoaded[i].style = "";
      }
      $(".slider_form_mobile").slick("setPosition");
    } catch (err) {
      // console.log(err);
    }
  }, 3000);
}
