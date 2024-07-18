const AddFavourite = "/assets/images/alerts-icons/add-favourite.svg";
const RemoveFavourite = "/assets/images/alerts-icons/remove-favourite.svg";
const AddAddress = "/assets/images/alerts-icons/address.svg";
const RemoveAddress = "/assets/images/alerts-icons/remove-address.svg";
const CreditCard = "/assets/images/alerts-icons/credit-card.svg";
const RemoveCreditCard = "/assets/images/alerts-icons/remove-creditcard.svg";
const Login = "/assets/images/alerts-icons/login.svg";
const Logout = "/assets/images/alerts-icons/logout.svg";
const Message = "/assets/images/alerts-icons/message-inquiry.svg";
const Coupon = "/assets/images/alerts-icons/coupon-add.svg";
const LoyaltyPoints = "/assets/images/alerts-icons/loyalty-points.svg";
const ShoppingCart = "/assets/images/alerts-icons/shopping-cart.svg";
const BankCardSuccess = "/assets/images/alerts-icons/bank-card-success.svg";
const BankCardError = "/assets/images/alerts-icons/bank-card-error.svg";
const Errors = "/assets/images/alerts-icons/generic-error.svg";
const Success = "/assets/images/alerts-icons/";
const SaveSearch = "/assets/images/alerts-icons/save_search.svg";
const RemoveSearch = "/assets/images/alerts-icons/remove_search.svg";
const bordergreen = ["Success", "BankCardSuccess", "LoyaltyPoints"];
const borderred = ["Errors", "BankCardError"];
function CommonAlertToaster(Icon, title) {
  const selectedIcon = getIconString(Icon);
  let html = `<div class="toast toaster-alerts show cursor-pointer ${
    bordergreen.includes(Icon)
      ? "success"
      : borderred.includes(Icon)
      ? "error"
      : "ok"
  }" role="alert" aria-live="assertive" aria-atomic="true">`;
  html += `<div class="flex">`;
  //   Icons Image
  html += `<img src="${
    selectedIcon || ""
  }" width="24" height="24" alt="saticon">`;
  //   Text
  html += `<p>${title || "Lorem ipsum dolor sit amet."}</p>`;
  //   Close btn
  html += `<img src="/assets/images/alerts-icons/close-fill.svg" class="cursor-pointer" width="18" height="18" data-bs-dismiss="toast" aria-label="Close" alt="">`;
  html += `</div>`;
  html += `</div>`;
  const div = document.getElementById("toaste-alert-div");
  div.innerHTML = html;
  removetoast();
}
function getIconString(gotIcon) {
  switch (gotIcon) {
    case "Message":
      return Message;
    case "ShoppingCart":
      return ShoppingCart;
    case "Logout":
      return Logout;
    case "Login":
      return Login;
    case "Coupon":
      return Coupon;
    case "CreditCard":
      return CreditCard;
    case "RemoveCreditCard":
      return RemoveCreditCard;
    case "RemoveAddress":
      return RemoveAddress;
    case "AddAddress":
      return AddAddress;
    case "RemoveFavourite":
      return RemoveFavourite;
    case "AddFavourite":
      return AddFavourite;
    case "BankCardError":
      return BankCardError;
    case "LoyaltyPoints":
      return LoyaltyPoints;
    case "BankCardSuccess":
      return BankCardSuccess;
    case "Errors":
      return Errors;
    case "Success":
      return Success;
    case "SaveSearch":
      return SaveSearch;
    case "RemoveSearch":
      return RemoveSearch;
    default:
      return "";
  }
}
let toastTimeouts;
function removetoast() {
  const toastElement = document.querySelector(".toast");
  if (toastElement) {
    toastElement.addEventListener("mouseenter", () => {
      clearTimeout(toastTimeouts); // Clear the timeout when mouse enters the toast
    });
    toastElement.addEventListener("mouseleave", () => {
      startToastTimer(); // Start the timer again when mouse leaves the toast
    });
  }
  // Set a timeout to remove the toast after 5 seconds
  startToastTimer();
}
function startToastTimer() {
  toastTimeouts = setTimeout(() => {
    const toastElement = document.querySelector(".toast");
    if (toastElement) {
      toastElement.remove();
    }
  }, 5000);
}
