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

function changeColor(clickedElement) {
  clickedElement.style.color =
    clickedElement.style.color === "black" ? "#1F62AE" : "black";
}

function changeColorHeart(clickedElement) {
  clickedElement.style.color =
    clickedElement.style.color === "rgb(191, 191, 191)" ? "#ED1C24" : "#BFBFBF";
}

var carouselItems = [
  {
    imageSrc: "...",
    caption: "First slide label",
    content: "Some representative placeholder content for the first slide.",
  },
  {
    imageSrc: "...",
    caption: "Second slide label",
    content: "Some representative placeholder content for the second slide.",
  },
  {
    imageSrc: "...",
    caption: "Third slide label",
    content: "Some representative placeholder content for the third slide.",
  },
  // Add more items as needed
];

////////////////////////////// UserProfile page///////////////////////////////////////
try {
  const uploadImage_Id = document.getElementById("uploadImage_Id");
  const uploadImage_drag = document.getElementById("uploadImage_drag");
  const inputField = document.getElementById("fileInputField");
  const ProfilePic = document.getElementById("profilePic");
  uploadImage_Id.addEventListener("click", () => {
    inputField.value = "";
    inputField.click();
  });
  inputField.addEventListener("change", function (e) {
    const file = this.files[0];
    fileHandler(file);
  });
  // Add dragover event listener
  uploadImage_drag &&
    uploadImage_drag.addEventListener("dragover", (e) => {
      e.preventDefault();
      uploadImage_Id.classList.add("drag-over");
    });

  // Add dragleave event listener
  uploadImage_drag &&
    uploadImage_drag.addEventListener("dragleave", () => {
      uploadImage_Id.classList.remove("drag-over");
    });

  uploadImage_drag &&
    uploadImage_drag.addEventListener("drop", (e) => {
      e.preventDefault();
      uploadImage_Id.classList.remove("drag-over");

      const file = e.dataTransfer.files[0];
      fileHandler(file);
    });
  const fileHandler = (file) => {
    const validExt = ["image/jpeg", "image/jpg", "image/png"];
    if (validExt.includes(file.type)) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const fileURL = fileReader.result;
        ProfilePic.setAttribute("src", fileURL);
      };
      fileReader.readAsDataURL(file);
    } else {
      funToasterWarning("Only jpeg / png image type are acceptable");
    }
  };
} catch (err) {
  console.log("error in the user profile js");
}
// end
// faq tabs
$(".faqs-lis").on("click", "li", function (event) {
  $(".faq-side-btn-close").click();
});
// user-dash-board tabs
// $(".dashboard-lis").on("click", "li", function (event) {
//   $("usr-dashbrd-side-btn-close").click();
// });

// ----------select-tabs-------
// $(document).on("click", ".payment-method-main button", function () {
//   var radio = $(this).find('input[type="radio"]');
//   radio.prop("checked", !radio.prop("checked"));
// });

// $(".payment-method-main input[type='radio']").click(function (event) {
//   event.stopPropagation();
// });
$(document).on("click", ".custom-btn-swap", function () {
  $(this).prop("disabled", true);
  var button = $(this);
  setTimeout(function () {
    button.prop("disabled", false);
  }, 1000);
  var isActive = $(this).find("span").hasClass("active");
  $(".custom-radio").removeClass("active-radio-background");
  $(".custom-btn-swap span").removeClass("active");

  if (!isActive) {
    $(this)
      .closest(".custom-btn-swap")
      .find("p.custom-radio")
      .addClass("active-radio-background");
    $(this).find("span").addClass("active");
  }
});

// --------import-regulation-acrdin--------
try {
  document.addEventListener("DOMContentLoaded", function () {
    var accordionButton = document.querySelector(".custom-accordion-button");
    var accordionIcon = document.querySelector(".accordion-icon");

    accordionButton &&
      accordionButton.addEventListener("click", function () {
        if (accordionIcon.getAttribute("fill") === "#1C6A9B") {
          accordionIcon.setAttribute("fill", "#858A94");
        } else {
          accordionIcon.setAttribute("fill", "#1C6A9B");
        }
      });
  });
} catch (error) {
  console.error("import regulation acrdin:", error);
}

// --------======slider-img-counter=====--------

document.addEventListener("DOMContentLoaded", function () {
  const detailCounter = document.getElementById("detail-counter");

  if (detailCounter) {
    const totalSlides = document.querySelectorAll(".synced-slider div").length;
    detailCounter.textContent = `1/${totalSlides}`;

    if ($(".main-slider").length > 0 && $(".synced-slider").length > 0) {
      $(".main-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: ".synced-slider",
      });

      $(".synced-slider").slick({
        arrows: false,
        asNavFor: ".main-slider",
        focusOnSelect: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
      });

      $(".main-slider").on(
        "afterChange",
        function (event, slick, currentSlide) {
          const currentCount = currentSlide + 1;
          detailCounter.textContent = `${currentCount}/${totalSlides}`;
        }
      );
    }
  }
});

// mobile-detail-user-icon-stable-when we put input
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("exampleFormControlInput1");
  const userIcon = document.querySelector(".user-icon");

  if (inputField && userIcon) {
    inputField.addEventListener("input", function () {
      if (inputField.value.length > 0) {
        userIcon.style.display = "none";
      } else {
        userIcon.style.display = "block";
      }
    });

    inputField.addEventListener("keyup", function () {
      const paddingRight = inputField.scrollWidth - inputField.clientWidth;
      inputField.style.paddingRight = paddingRight + 30 + "px";
    });
  } else {
  }
});
