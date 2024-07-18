// search result mobile
function selectRoro() {
  const roroButton = document.querySelector(".rorobtndefa");
  const containerButton = document.querySelector(".containerbtndefa");
  const radiororo = document.querySelector("#ROROContainer");
  radiororo.checked = true;
  // for class toggle
  if (roroButton.classList.contains("activerorocontainer")) {
    return;
  } else {
    roroButton.classList.add("activerorocontainer");
    roroButton.classList.remove("notactiverorocontainer");
    containerButton.classList.remove("activerorocontainer");
    containerButton.classList.add("notactiverorocontainer");
  }
}

function selectContainer() {
  const roroButton = document.querySelector(".rorobtndefa");
  const containerButton = document.querySelector(".containerbtndefa");
  const radiocontainer = document.querySelector("#Container");
  radiocontainer.checked = true;
  // for class toggle
  if (containerButton.classList.contains("activerorocontainer")) {
    return;
  } else {
    containerButton.classList.add("activerorocontainer");
    containerButton.classList.remove("notactiverorocontainer");
    roroButton.classList.remove("activerorocontainer");
    roroButton.classList.add("notactiverorocontainer");
  }
}
// custom sidebar
function showsidebar() {
  const body = document.body;
  const sidebar = document.querySelector(".sidebarcanvasfilters");
  sidebar.classList.add("activesidebar-filters");
  body.classList.add("no-scroll");
}
function hidesidebar() {
  const body = document.body;
  const sidebar = document.querySelector(".sidebarcanvasfilters");
  sidebar.classList.remove("activesidebar-filters");
  body.classList.remove("no-scroll");
}
// search page functionality
$(".user-selected-filters").on("click", ".deselect", function () {
  // Remove the corresponding <span> tag
  $(this).parent().remove();

  // Get the value of the removed item
  var removeduniq = $(this).parent().attr("data-name");
  var removedValue = $(this).parent().attr("data-value");

  // Remove the selected class from the corresponding <li> item
  $(".list-group_make li[value='" + removedValue + "']").removeClass(
    "selectedtag"
  );
  $("span.filter-item-side[data-name='" + removeduniq + "']").remove();
});

$(".user-selected-filters2").on("click", ".deselect", function () {
  // Remove the corresponding <span> tag
  $(this).parent().remove();

  // Get the value of the removed item
  var removedValue = $(this).parent().attr("data-value");
  var removeduniq = $(this).parent().attr("data-name");

  // Remove the selected class from the corresponding <li> item
  $(".list-group_make li[value='" + removedValue + "']").removeClass(
    "selectedtag"
  );

  // Remove the element based on data-name
  $("li.field-pill[data-name='" + removeduniq + "']").remove();
});
// adding the elements
// make mobile
$("#filters_multiple .list-group_make").on("click", "li", function (event) {
  var altValue = $(this).attr("data-value");
  // Check if the item is already selected
  if ($(this).hasClass("selectedtag")) {
    return; // Do nothing if already selected
  }
  // Add selected class to highlight the item
  $(this).addClass("selectedtag");
  customhtml(altValue);
});
// model mobile
$("#filters_multiple .list-group_model").on("click", "li", function (event) {
  var altValue = $(this).attr("data-value");
  if ($(this).hasClass("selectedtag")) {
    return;
  }

  $(this).addClass("selectedtag");
  customhtml(altValue);
});
// steer mobile
$("#filters_multiple .list_group_steer").on("click", "li", function (event) {
  var altValue = $(this).attr("data-value");
  if ($(this).hasClass("selectedtag")) {
    return;
  }
  $(this).addClass("selectedtag");
  customhtml(altValue);
});
// transmission
$("#filters_multiple .list_group_transmission").on(
  "click",
  "li",
  function (event) {
    var altValue = $(this).attr("data-value");
    if ($(this).hasClass("selectedtag")) {
      return;
    }
    $(this).addClass("selectedtag");
    customhtml(altValue);
  }
);
// engine size
$("#filters_multiple .list_group_enginesize").on(
  "click",
  "li",
  function (event) {
    var altValue = $(this).attr("data-value");
    if ($(this).hasClass("selectedtag")) {
      return;
    }
    $(this).addClass("selectedtag");
    customhtml(altValue);
  }
);
// list_group_fuel
$("#filters_multiple .list_group_fuel").on("click", "li", function (event) {
  var altValue = $(this).attr("data-value");
  if ($(this).hasClass("selectedtag")) {
    return;
  }
  $(this).addClass("selectedtag");
  customhtml(altValue);
});
// list_group_location
$("#filters_multiple .list_group_location").on("click", "li", function (event) {
  var altValue = $(this).attr("data-value");
  if ($(this).hasClass("selectedtag")) {
    return;
  }
  $(this).addClass("selectedtag");
  customhtml(altValue);
});
// list_group_color
$("#filters_multiple .list_group_color").on("click", "li", function (event) {
  var altValue = $(this).attr("data-value");
  if ($(this).hasClass("selectedtag")) {
    return;
  }
  $(this).addClass("selectedtag");
  customhtml(altValue);
});
// list_group_drivetrain
$("#filters_multiple .list_group_drivetrain").on(
  "click",
  "li",
  function (event) {
    var altValue = $(this).attr("data-value");
    if ($(this).hasClass("selectedtag")) {
      return;
    }
    $(this).addClass("selectedtag");
    customhtml(altValue);
  }
);
// list_group_modelcode
$("#filters_multiple .list_group_modelcode").on(
  "click",
  "li",
  function (event) {
    var altValue = $(this).attr("data-value");
    if ($(this).hasClass("selectedtag")) {
      return;
    }
    $(this).addClass("selectedtag");
    customhtml(altValue);
  }
);
// list_group_bodytype
$("#filters_multiple .list_group_bodytype").on("click", "li", function (event) {
  var altValue = $(this).attr("data-value");
  if ($(this).hasClass("selectedtag")) {
    return;
  }
  $(this).addClass("selectedtag");
  customhtml(altValue);
});
$("#min_load").change(function () {
  var selectedValue = $(this).val();
  customhtml(selectedValue);
});
$("#max_load").change(function () {
  var selectedValue = $(this).val();
  customhtml(selectedValue);
});
$("#min_mileage").change(function () {
  var selectedValue = $(this).val();
  customhtml(selectedValue);
});
$("#max_mileage").change(function () {
  var selectedValue = $(this).val();
  customhtml(selectedValue);
});
$("#min_price").change(function () {
  var selectedValue = $(this).val();
  customhtml(selectedValue);
});
$("#max_price").change(function () {
  var selectedValue = $(this).val();
  customhtml(selectedValue);
});
$("#min_year").change(function () {
  var selectedValue = $(this).val();
  customhtml(selectedValue);
});
$("#max_year").change(function () {
  var selectedValue = $(this).val();
  customhtml(selectedValue);
});
$("#appfilt_price_bar").on("click", function (event) {
  const min = $("#min_price_bar").val();
  const max = $("#max_price_bar").val();

  customhtml(min + "|" + max);
  $(".close-common-side").click();
});
$("#min_year_downbarapply").on("click", function (event) {
  const min = $("#min_year_downbar").val();
  const max = $("#max_year_downbar").val();

  customhtml(min + "|" + max);
  $(".close-common-side").click();
});
$("#appfilt_mileage_downbar").on("click", function (event) {
  const min = $("#min_mileage_downbar").val();
  const max = $("#max_mileage_downbar").val();

  customhtml(min + "|" + max);
  $(".close-common-side").click();
});
$("#newyearsale").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#newyearsale").val();
  customhtml(value);
});
$("#premiumcarssale").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#premiumcarssale").val();
  customhtml(value);
});
$("#cleardiscountsale").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#cleardiscountsale").val();
  customhtml(value);
});
$("#camera_degree").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#camera_degree").val();
  customhtml(value);
});
$("#tv").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#tv").val();
  customhtml(value);
});
$("#sun_roof").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#sun_roof").val();
  customhtml(value);
});
$("#roof_rails").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#roof_rails").val();
  customhtml(value);
});
$("#rear_spoiler").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#cleardiscountsale").val();
  customhtml(value);
});
$("#push_start").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#push_start").val();
  customhtml(value);
});
$("#power_window").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#power_window").val();
  customhtml(value);
});
$("#power_steering").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#power_steering").val();
  customhtml(value);
});
$("#keyless_entry").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#keyless_entry").val();
  customhtml(value);
});
$("#fog_lights").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#fog_lights").val();
  customhtml(value);
});
$("#dual_airbags").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#dual_airbags").val();
  customhtml(value);
});
$("#back_camera").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#back_camera").val();
  customhtml(value);
});
$("#air_bags").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#air_bags").val();
  customhtml(value);
});
$("#ac").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#ac").val();
  customhtml(value);
});
$("#abs").on("click", function (event) {
  var isChecked = $(this).prop("checked");
  if (!isChecked) {
    return;
  }
  const value = $("#abs").val();
  customhtml(value);
});

const customhtml = (altValue) => {
  var html = `<li class="field-pill active-filters-close tags-item" data-name='${
    altValue + "uniq"
  }' value='${altValue}'> <span class="field-text">${altValue}</span><i class="fas fa-times deselect"></i>
    </li>`;
  var html2 = ` <span class="d-flex filter-item-side" data-name='${
    altValue + "uniq"
  }' value='${altValue}'>${altValue} <i class="fas fa-times deselect"></i></span>`;

  $(".user-selected-filters")
    .find(".show-all-filters")
    .eq(0)
    .closest("li")
    .after(html);
  $(".user-selected-filters2").prepend(html2);
};
