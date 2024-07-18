// tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// scroll to top
$("#back_to_top").click(function () {
  $("html, body").animate(
    { scrollTop: 0 },
    {
      duration: "slow",
      easing: "swing",
    }
  );
  return false;
});

try {
  document
    .getElementById("passwordIcon")
    .addEventListener("click", togglePassword);

  function togglePassword() {
    const myButton = document.getElementById("passwordIcon");
    const passwordInput = document.getElementById("passwordtype");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      myButton.setAttribute("src", "assets/images/index/icon/eye-open-svg.svg");
    } else {
      passwordInput.type = "password";
      myButton.setAttribute(
        "src",
        "assets/images/index/icon/eye-close-icon.svg"
      );
    }
  }
} catch (err) {
  // console.log("password");
}
try {
  document
    .getElementById("passwordIcon1")
    .addEventListener("click", togglePassword1);

  function togglePassword1() {
    const myButton = document.getElementById("passwordIcon1");
    const passwordInput = document.getElementById("passwordtype1");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      myButton.setAttribute("src", "assets/images/index/icon/eye-open-svg.svg");
    } else {
      passwordInput.type = "password";
      myButton.setAttribute(
        "src",
        "assets/images/index/icon/eye-close-icon.svg"
      );
    }
  }
  document
    .getElementById("passwordIcon2")
    .addEventListener("click", togglePassword2);

  function togglePassword2() {
    const myButton = document.getElementById("passwordIcon2");
    const passwordInput = document.getElementById("passwordtype2");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      myButton.setAttribute("src", "assets/images/index/icon/eye-open-svg.svg");
    } else {
      passwordInput.type = "password";
      myButton.setAttribute(
        "src",
        "assets/images/index/icon/eye-close-icon.svg"
      );
    }
  }
} catch (err) {
  // console.log("password2");
}
function showLoginForm() {
  const Logindiv_Id = document.getElementById("loginform");
  const Registerdiv_Id = document.getElementById("registerform");
  const Forgo_Id = document.getElementById("forgo_password");
  const check_password = document.getElementById("check_password");
  const loginformfinal = document.getElementById("loginformfinal");
  Registerdiv_Id.style.display = "none";
  Forgo_Id.style.display = "none";
  check_password.style.display = "none";
  loginformfinal.style.display = "none";
  Logindiv_Id.style.display = "block";
}
function showRegisterForm() {
  const Logindiv_Id = document.getElementById("loginform");
  const Registerdiv_Id = document.getElementById("registerform");
  const Forgo_Id = document.getElementById("forgo_password");
  const check_password = document.getElementById("check_password");
  Logindiv_Id.style.display = "none";
  Forgo_Id.style.display = "none";
  check_password.style.display = "none";
  Registerdiv_Id.style.display = "block";
}
function ShowForgoPassword() {
  const Logindiv_Id = document.getElementById("loginform");
  const Registerdiv_Id = document.getElementById("registerform");
  const Forgo_Id = document.getElementById("forgo_password");
  const check_password = document.getElementById("check_password");
  const loginformfinal = document.getElementById("loginformfinal");
  Forgo_Id.style.display = "block";
  Registerdiv_Id.style.display = "none";
  Logindiv_Id.style.display = "none";
  loginformfinal.style.display = "none";
  check_password.style.display = "none";
}
function ShowCheckPassword() {
  const Logindiv_Id = document.getElementById("loginform");
  const Registerdiv_Id = document.getElementById("registerform");
  const Forgo_Id = document.getElementById("forgo_password");
  const check_password = document.getElementById("check_password");
  Forgo_Id.style.display = "none";
  Registerdiv_Id.style.display = "none";
  Logindiv_Id.style.display = "none";
  check_password.style.display = "block";
}
function ShowHideListing() {
  const show_hide_listing = document.getElementById("show_hide_listing");
  const countries_lists = document.getElementById("countries_lists");
  show_hide_listing.innerText =
    show_hide_listing.innerText === "Show All Countries"
      ? "Show Less Countries"
      : "Show All Countries";
  const active_clr_listing_none = document.querySelectorAll(
    ".active_clr_listing-none "
  );
  active_clr_listing_none.forEach((e) => {
    e.classList.toggle("active_clr_listing");
  });
  countries_lists.style.display =
    countries_lists.style.display === "none" ? "block" : "none";
}
function showLoginfinal() {
  const Logindiv_Id = document.getElementById("loginform");
  const Registerdiv_Id = document.getElementById("registerform");
  const Forgo_Id = document.getElementById("forgo_password");
  const check_password = document.getElementById("check_password");
  const login_formfinal = document.getElementById("loginformfinal");
  Forgo_Id.style.display = "none";
  Registerdiv_Id.style.display = "none";
  Logindiv_Id.style.display = "none";
  check_password.style.display = "none";
  login_formfinal.style.display = "block";
}
// slider form js
// make
$(".list-group_make").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#make_search_input").val(altValue);
  $("#MakeItem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// model
$(".list-group_model").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#model_search_input").val(altValue);
  $("#ModalItem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// model code
$(".list-group-modalcode").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#modelcode_search_input").val(altValue);
  $("#modalitemcode").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// type
$(".list-group-type").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#Type_search_input").val(altValue);
  $("#type_item").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// steering
$(".list_group_steer").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#steer_search_input").val(altValue);
  $("#steering_item").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// years min
$(".list_group_yearmin").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#yearsmin_search_input").val(altValue);
  $("#years_itemmin").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// years min day
$(".list-group-min-year-day").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#minyearday_search_input").val(altValue);
  $("#min-year-day").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// years max
$(".list_group_yearmax").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#yearsmax_search_input").val(altValue);
  $("#years_itemmax").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// years max day
$(".list-group-max-year-day").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#maxyearday_search_input").val(altValue);
  $("#max-year-day").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// transmission max
$(".list-group_transmissionitem").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#transmissionitem_search_input").val(altValue);
  $("#transmissionitem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// body
$(".list-group-body").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#body_search_input").val(altValue);
  $("#bodyitem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// fuel
$(".list-group-fuel").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#fuel_search_input").val(altValue);
  $("#fuelitem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// min price
$(".list-group-minprice").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#minprice_search_input").val(altValue);
  $("#minpriceitem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// max price
$(".list-group-maxprice").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#maxprice_search_input").val(altValue);
  $("#maxpriceitem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// min milage
$(".list-group-minmilage").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#minmilage_search_input").val(altValue);
  $("#minmilageitem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// max milage
$(".list-group-maxmilage").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#maxmilage_search_input").val(altValue);
  $("#maxmilageitem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// enginsize
$(".list-group-enginsize").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#enginsize_search_input").val(altValue);
  $("#enginsizeitem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// minload
$(".list-group-minload").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#minload_search_input").val(altValue);
  $("#minloaditem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// maxload
$(".list-group-maxload").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#maxload_search_input").val(altValue);
  $("#maxloaditem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// Location
$(".list-group-location").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#location_search_input").val(altValue);
  $("#locationitem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// color
$(".list-group-color").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#color_search_input").val(altValue);
  $("#coloritem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// drivetrain
$(".list-group-drivetrain").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#drivetrain_search_input").val(altValue);
  $("#drivetrainitem").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// search sort
$(".list-group-search-item").on("click", "li", function (event) {
  var hrefValue = $(this).text();
  var altValue = $(this).attr("value");
  $("#car-search-input").val(altValue);
  $("#select-search-item").text(hrefValue.replace(/\s*\([^)]*\)\s*/, ""));
});
// search result page
try {
  var button = document.getElementById("show-hide-adv-filt");
  var filters = document.getElementById("adv-filter");
  button.addEventListener("click", function () {
    if (filters.style.display === "none") {
      filters.style.display = "block";
      button.innerHTML = `<span id="show-hide-text-car-detail"> Hide Additional Filters   <i class="fas fa-chevron-up fs-10 ms-1"></i></span>`;
    } else {
      filters.style.display = "none";
      button.innerHTML = `<span id="show-hide-text-car-detail"> View Additional Filters    <i class="fas fa-chevron-down fs-10 ms-1"></i></span>`;
    }
  });
} catch (err) {
  // console.log("search result page");
}
// country page active_clr_listing
try {
  var button_import_show = document.querySelector(".show_more_import_texts");
  var import_regulation_details = document.getElementById(
    "import_regulation_details"
  );
  button_import_show &&
    button_import_show.addEventListener("click", function () {
      if (import_regulation_details.classList[0] === "import_div_show") {
        import_regulation_details.classList.remove("import_div_show");
        button_import_show.innerHTML =
          ` <h4 class="cursor-pointer">
      Show More
    </h4>` +
          ` <span class="cursor-pointer">
    <svg width="24" height="24" class="plus_icon_clr active-clr-listing-none  ms-1 mt-1" id="plus_country_icon">
      <use href="#plus_icon"></use>
    </svg>
  </span>`;
      } else {
        import_regulation_details.classList.add("import_div_show");
        button_import_show.innerHTML =
          ` <h4 class="cursor-pointer clr-blue-70s">
      Hide More
    </h4>` +
          `<svg width="24" height="24" class="plus_icon_clr active-clr-listing-none active_clr_listing_country ms-1 mt-1" id="plus_country_icon">
    <use href="#plus_icon"></use>
  </svg>
</span>`;
      }
    });
} catch (err) {
  console.log("active_clr_listing");
}
// mobile homepage
$(".make-list-items-mobile").on("click", "li", function (event) {
  $(".common-btn-drop-close").click();
});
$("#dashboard_icon_setting").on("click", function (event) {
  $("#dashboard_icon_setting i").toggleClass("rotate-icon-90");
});
$(".rotate-icon-div").on("click", function (event) {
  $(".rotate-icon-div i").toggleClass("rotate-icon-90");
});
$(".rotate-icon-setting").on("click", function (event) {
  $(".rotate-icon-setting i").toggleClass("rotate-icon-90");
});
// mobile search
function searchItems(event, type) {
  event.preventDefault();
  var input = document
    .getElementsByClassName("search-inline-items-" + type)[0]
    .value.toLowerCase();
  var items = document.querySelectorAll(
    `.search-items-values-${type} .list-group-item`
  );
  items.forEach(function (item) {
    var text = item.textContent.toLowerCase();
    text = text.trim();
    if (text.startsWith(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
function searchItems2(event, type) {
  event.preventDefault();
  var input = document
    .getElementsByClassName("search-inline-items-" + type)[0]
    .value.toLowerCase();
  var items = document.querySelectorAll(
    `.search-items-values-${type} .hov-item-dd`
  );
  var selectedIndex = -1;

  // Handle keyboard navigation
  if (event.key === "ArrowDown") {
    selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
  } else if (event.key === "ArrowUp") {
    selectedIndex = Math.max(selectedIndex - 1, 0);
  }

  items.forEach(function (item, index) {
    var text = item.textContent.toLowerCase().trim();
    var isVisible = text.startsWith(input);

    if (isVisible) {
      item.style.display = "block";
      if (index === selectedIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    } else {
      item.style.display = "none";
      item.classList.remove("active");
    }
  });

  // Handle selection with Enter key
  if (event.key === "Enter" && selectedIndex !== -1) {
    var selectedOption = items[selectedIndex].querySelector(".dropdown-item");
    selectedOption.click();
  }
}
function searchItemsdes(event, type) {
  event.preventDefault();
  var input = document
    .getElementsByClassName("search-inline-items-" + type)[0]
    .value.toLowerCase();
  var items = document.querySelectorAll(
    `.search-items-values-${type} .search-itms`
  );
  items.forEach(function (item) {
    let text = item.textContent.toLowerCase();
    text = text.trim();
    if (text.startsWith(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
// change title mobile login
const changeTitleLogin = async (title) => {
  title === "Check Your Email" || title === "Forgot Password"
    ? (document.querySelector(
        ".login-text-mob"
      ).innerHTML = `<span class="tile-change-mob">${title}</span>`)
    : (document.querySelector(
        ".tile-change-mob"
      ).innerHTML = `<span class="tile-change-mob">${title} with SAT</span>`);
  const allDivs = document.querySelectorAll(".swap-divs-register");
  allDivs.forEach((div) => {
    if (div.getAttribute("data-title") === title) {
      div.classList.remove("d-none");
    } else {
      div.classList.add("d-none");
    }
  });
};

const delaySwaping = (title) => {
  setTimeout(() => {
    title === "Check Your Email" || title === "Forgot Password"
      ? (document.querySelector(
          ".login-text-mob"
        ).innerHTML = `<span class="tile-change-mob">${title}</span>`)
      : (document.querySelector(
          ".tile-change-mob"
        ).innerHTML = `<span class="tile-change-mob">${title} with SAT</span>`);
    const allDivs = document.querySelectorAll(".swap-divs-register");
    allDivs.forEach((div) => {
      if (div.getAttribute("data-title") === title) {
        div.classList.remove("d-none");
      } else {
        div.classList.add("d-none");
      }
    });
  }, 1000);
};

// login swaping
try {
  var login_password = document.getElementById("login_password");
  if (login_password)
    document
      .getElementById("login_password")
      .addEventListener("click", loginpassword);

  function loginpassword() {
    const myButton = document.getElementById("login_password");
    const passwordInput = document.getElementById("login_password_input");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      myButton.classList.remove("login-eye-close");
      myButton.classList.add("login-eye-open");
    } else {
      passwordInput.type = "password";
      myButton.classList.remove("login-eye-open");
      myButton.classList.add("login-eye-close");
    }
  }
} catch (err) {
  // console.error("password");
}
try {
  var regist_password = document.getElementById("regist_password");
  if (regist_password)
    document
      .getElementById("regist_password")
      .addEventListener("click", loginpassword);

  function loginpassword() {
    const myButton = document.getElementById("regist_password");
    const passwordInput = document.getElementById("regist_input_password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      myButton.classList.remove("login-eye-close");
      myButton.classList.add("login-eye-open");
    } else {
      passwordInput.type = "password";
      myButton.classList.remove("login-eye-open");
      myButton.classList.add("login-eye-close");
    }
  }
} catch (err) {
  console.error("password");
}
try {
  var regist_confirm_password = document.getElementById(
    "regist_confirm_password"
  );
  if (regist_confirm_password)
    document
      .getElementById("regist_confirm_password")
      .addEventListener("click", loginpassword);

  function loginpassword() {
    const myButton = document.getElementById("regist_confirm_password");
    const passwordInput = document.getElementById(
      "regist_input_confirm_password"
    );
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      myButton.classList.remove("login-eye-close");
      myButton.classList.add("login-eye-open");
    } else {
      passwordInput.type = "password";
      myButton.classList.remove("login-eye-open");
      myButton.classList.add("login-eye-close");
    }
  }
} catch (err) {
  console.error(err);
}
try {
  var PasswordCloseExist = document.getElementById("password_close");
  if (PasswordCloseExist)
    document
      .getElementById("password_close")
      .addEventListener("click", resetpassword);

  function resetpassword() {
    const myButton = document.getElementById("password_close");
    const passwordInput = document.getElementById("password_initial");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      myButton.removeAttribute("src");
      myButton.setAttribute(
        "src",
        "/assets/images/mobile/icons/eye-open-mob.svg"
      );
    } else {
      passwordInput.type = "password";
      myButton.removeAttribute("src");
      myButton.setAttribute(
        "src",
        "/assets/images/index/icon/eye-close-icon.svg"
      );
    }
  }
} catch (err) {
  console.error(err);
}
try {
  var PasswordConfirmExist = document.getElementById("password_confirm_close");
  if (PasswordConfirmExist)
    document
      .getElementById("password_confirm_close")
      .addEventListener("click", resetpassword2);

  function resetpassword2() {
    const myButton = document.getElementById("password_confirm_close");
    const passwordInput = document.getElementById("password_confirm");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      myButton.removeAttribute("src");
      myButton.setAttribute(
        "src",
        "/assets/images/mobile/icons/eye-open-mob.svg"
      );
    } else {
      passwordInput.type = "password";
      myButton.removeAttribute("src");
      myButton.setAttribute(
        "src",
        "/assets/images/index/icon/eye-close-icon.svg"
      );
    }
  }
} catch (err) {
  console.error(err);
}
let selectedItemIndex = -1;

// Function to handle keyboard events
function handleKeyboardEvent(event) {
  // Function to filter out list items containing an 'a' tag with display: none;
  const listItems = document.querySelectorAll(".search-items-values-flags");

  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    listItems.forEach((item) => item.classList.remove("hover-item-key"));

    if (event.key === "ArrowUp") {
      selectedItemIndex = Math.max(selectedItemIndex - 1, 0);
    } else {
      selectedItemIndex = Math.min(selectedItemIndex + 1, listItems.length - 1);
    }
    const filteredListItems = [];
    listItems.forEach((item) => {
      const link = item.querySelector("a");
      if (link && window.getComputedStyle(link).display !== "none") {
        filteredListItems.push(item);
      }
    });
    filteredListItems[selectedItemIndex].classList.add("hover-item-key");
  } else if (event.key === "Enter") {
    const filteredListItems = [];
    listItems.forEach((item) => {
      const link = item.querySelector("a");
      if (link && window.getComputedStyle(link).display !== "none") {
        filteredListItems.push(item);
      }
    });
    if (selectedItemIndex !== -1) {
      const selectedItem = filteredListItems[selectedItemIndex];
      const link = selectedItem.querySelector('a[style="display: block;"]');
      if (link) {
        let liParent = link.parentElement;
        while (liParent && liParent.tagName.toLowerCase() !== "li") {
          liParent = liParent.parentElement;
        }
        if (liParent && window.getComputedStyle(liParent).display !== "none") {
          link.click();
        }
      }
    }
  }
}
// document.addEventListener("keydown", handleKeyboardEvent);
// function showdivmodal() {
//   document.getElementsByClassName("ty-border")[0].style.visibility = "visible";
// }
