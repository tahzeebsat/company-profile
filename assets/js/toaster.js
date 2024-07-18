// toaster
var option = {
  animation: true,
  delay: 2000,
  autohide: true,
};

var toastElList = [].slice.call(document.querySelectorAll(".toast"));
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option);
});

function funToasterSuccess(title, message) {
  let html = `<div id="liveToast" class="toast text-white show cursor-pointer" role="alert" aria-live="assertive" aria-atomic="true" style="top:0px;right:0;position:fixed;background-color:#379D00; z-index: 10000;">`;
  if (title != undefined && title != "" && message != undefined) {
    html += `<div class="toast-header text-white" style="background-color:#379D00">
    <strong class="me-auto">${title}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>`;
  }
  html += `<div class="toast-body">
  ${message === undefined ? title : message}
  ${
    message === undefined || message === ""
      ? ` <button type="button" class="btn-close float-end" data-bs-dismiss="toast" aria-label="Close"></button>`
      : ""
  }
</div>`;
  html += `</div>`;
  const divToast = document.createElement("div");
  divToast.innerHTML = html;
  document.body.appendChild(divToast);
  removetoast();
}
function funToasterError(title, message) {
  let html = `<div id="liveToast" class="toast text-white show cursor-pointer" role="alert" aria-live="assertive" aria-atomic="true" style="top:0px;right:0;position:fixed;background-color:#CA0201; z-index: 10000;">`;
  if (title != undefined && title != "" && message != undefined) {
    html += `<div class="toast-header text-white" style="background-color:#CA0201">
        <strong class="me-auto">${title}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>`;
  }
  html += `<div class="toast-body">
  ${message === undefined ? title : message}
  ${
    message === undefined || message === ""
      ? ` <button type="button" class="btn-close float-end" data-bs-dismiss="toast" aria-label="Close"></button>`
      : ""
  }
  </div>`;
  html += `</div>`;
  const divToast = document.createElement("div");
  divToast.innerHTML = html;
  document.body.appendChild(divToast);
  removetoast();
}
function funToasterWarning(title, message) {
  let html = `<div id="liveToast" class="toast text-dark show cursor-pointer" role="alert" aria-live="assertive" aria-atomic="true" style="top:0px;right:0;position:fixed;background-color:#ffeb3b; z-index: 10000;">`;
  if (title != undefined && title != "" && message != undefined) {
    html += `<div class="toast-header text-dark" style="background-color:#ffeb3b">
        <strong class="me-auto">${title}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>`;
  }
  html += `<div class="toast-body">
  ${message === undefined ? title : message}
  ${
    message === undefined || message === ""
      ? ` <button type="button" class="btn-close float-end" data-bs-dismiss="toast" aria-label="Close"></button>`
      : ""
  }
  </div>`;
  html += `</div>`;
  const divToast = document.createElement("div");
  divToast.innerHTML = html;
  document.body.appendChild(divToast);
  removetoast();
}

let toastTimeout;

function removetoast() {
  const toastElement = document.querySelector(".toast");
  if (toastElement) {
    toastElement.addEventListener("mouseenter", () => {
      clearTimeout(toastTimeout); // Clear the timeout when mouse enters the toast
    });

    toastElement.addEventListener("mouseleave", () => {
      startToastTimer(); // Start the timer again when mouse leaves the toast
    });
  }

  // Set a timeout to remove the toast after 5 seconds
  startToastTimer();
}

function startToastTimer() {
  toastTimeout = setTimeout(() => {
    const toastElement = document.querySelector(".toast");
    if (toastElement) {
      toastElement.remove();
    }
  }, 5000);
}
