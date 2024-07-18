const totalinventory = document.getElementById("total_inv_cars_added");
let inventoryHtml = `<div class="container">
<ul class="total-list-group">
  <li class="total-list-item">Total Inventory: 376,5164</li>
  <li class="total-list-item">Cars added Today: 8231</li>
</ul>
</div>`;
totalinventory.innerHTML = inventoryHtml;
const headermain = document.getElementById("header_main");
let headermainHtml = `<!-- modals login and register -->
<div class="modal fade modelloginregister" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable | model-logregis-setup">
  <div class="modal-content br-none">
      <div class="modal-body">
      <div class="row">
          <div class="col-12" style="display: none" id="loginform">
          <div class="col-12 d-flex justify-content-between">
              <img src="assets/images/index/icon/arrow-left-model.svg" class="cursor-pointer" alt=""
              onclick="showRegisterForm()">
              <img src="assets/images/index/icon/close-model.svg" class="cursor-pointer" alt=""
              data-bs-dismiss="modal" aria-label="Close">
          </div>
          <div class="col-12 text-center">
              <h4 class="mb-0  text-center  fs-24 fsr768-18 line-h-20 clr-black-80 fw-600">
              Sign Up
              </h4>
              <p class="mb-0 clr-black-50  text-center ff-Lato fs-12 fw-500 line-h-20">
              Create an account and get ready to explore your dream car
              </p>
          </div>
          <div class="col-12 new-home-page mt-24">
              <form action="">
              <div class="row">
                  <div class="col-12">
                  <label for="NameSignup" class="form-label clr-black-80 ff-Lato fs-12 fw-500">Name</label>
                  <input type="text"
                      class="form-control bg-white-50 h-34 fs-12 fw-500 plc-style-modal brr-none br-4p"
                      id="NameSignup" placeholder="Name" style="font-family: Lato, 'Font Awesome 5 Free'"
                      aria-describedby="emailHelp" />
                  </div>
                  <div class="col-12 mt-2 mainLoginInput">
                  <div class="input-groups" name="password">
                      <label class="form-label mb-1 clr-black-80 ff-Lato fs-12 fw-500" for="password">Password <span
                          class="text-danger fs-12">*</span></label>
                      <div class="input-icon-container br-4p h-34 pe-3 ps-3">
                      <img src="/assets/images/common/social-icon/reset-lock.svg" height="14" width="14" alt="">
                      <input class="" type="password" placeholder="************"
                          style="font-family: Lato, 'Font Awesome 5 Free'" id="passwordtype1" />
                      <img src="assets/images/index/icon/eye-close-icon.svg" class="cursor-pointer"
                          id="passwordIcon1" alt="" />
                      <!-- <i class="fa fa-eye-slash cursor-pointer" id="passwordIcon1"></i> -->
                      </div>
                  </div>
                  </div>
                  <div class="col-12 mt-2 mainLoginInput">
                  <div class="input-groups" name="password">
                      <label class="form-label mb-1 clr-black-80 ff-Lato fs-12 fw-500" for="password">Confirm
                      Password <span class="text-danger fs-12">*</span></label>
                      <div class="input-icon-container br-4p h-34 pe-3 ps-3">
                      <img src="/assets/images/common/social-icon/reset-lock.svg" height="14" width="14" alt="">
                      <input class="" type="password" placeholder="************"
                          style="font-family: Lato, 'Font Awesome 5 Free'" id="passwordtype2" />
                      <img src="assets/images/index/icon/eye-close-icon.svg" class="cursor-pointer"
                          id="passwordIcon2" alt="" />
                      <!-- <i class="fa fa-eye-slash cursor-pointer" id="passwordIcon2"></i> -->
                      </div>
                  </div>
                  </div>
                  <div class="col-12">
                  <ul class="list-group list-group-flush brb-none">
                      <li class="list-group-item d-flex justify-content-between px-0">
                      <div>
                          <input class="form-check-input me-1 clr-purple-500 br-none" type="checkbox" value=""
                          id="firstCheckbox" />
                          <label class="form-check-label ff-Lato fs-12 fw-400 clr-purple-500"
                          for="firstCheckbox">Remember me</label>
                      </div>
                      </li>
                  </ul>
                  </div>
                  <div class="col-12 mt-10mdl">
                  <button class="btn login-btn-m">
                      Sign Up
                  </button>
                  </div>
                  <div class="col-12">
                  <h4 class="fs-12 fw-600 text-center clr-black-20s my-2">
                      Or
                  </h4>
                  </div>
              </div>
              <div class="col-12">
                  <button class="btn login-btn-g ">
                  <img src="assets/images/index/icon/google-svg.svg" alt="" />
                  <span class="ms-2"> Log in with Google </span>
                  </button>
              </div>
              <div class="col-12 mt-2">
                  <p class="fs-12 fw-500 ff-Lato clr-black-40 mb-0">By creating an account, you agree to our<a href="javascript:;" class="clr-blue-70 ms-1 text-decoration-none">terms
                  and conditions</a> and
                  <a href="javascript:;" class="clr-blue-70 ms-1 text-decoration-none">cookie policy.</a>
                  </p>
              </div>
              </form>
          </div>
          </div>
          <div class="col-12" id="loginformfinal" style="display: none">
          <div class="col-12 d-flex justify-content-between">
              <img src="assets/images/index/icon/arrow-left-model.svg" class="cursor-pointer" alt=""
              onclick="showLoginForm()">
              <img src="assets/images/index/icon/close-model.svg" class="cursor-pointer" alt=""
              data-bs-dismiss="modal" aria-label="Close">
          </div>
          <div class="col-12 mt-26-modl">
              <h4 class="mb-0 text-center  fs-24 fsr768-18 line-h-20 clr-black-80 fw-600">
              Welcome back <span class="">Jon!</span>
              </h4>
              <!-- d-none  -->
              <p class="mb-0 clr-blue-70 text-center ff-Lato fs-18 fw-700 line-h-20">
              example@gmail.com
              </p>
              <div class="col-12 new-home-page mt-24">
              <form action="">
                  <div class="row">
                  <div class="col-12">
                      <div class="input-groups" name="password">
                      <label class="form-label  clr-black-80 ff-Lato fs-12 fw-500" for="password">Password
                      </label>
                      <div class="input-icon-container br-4p h-34 pe-3 ps-3">
                          <img src="/assets/images/common/social-icon/reset-lock.svg" height="14" width="14" alt="">
                          <input class="" type="password" placeholder="************" id="passwordtype" />
                          <img src="assets/images/index/icon/eye-close-icon.svg" class="cursor-pointer"
                          id="passwordIcon" alt="" />
                          <!-- <i class="fa fa-eye-slash cursor-pointer" id="passwordIcon"></i> -->
                      </div>
                      </div>
                  </div>
                  <div class="col-12">
                      <ul class="list-group list-group-flush brb-none">
                      <li class="list-group-item d-flex justify-content-between px-0">
                          <div>
                          <input class="form-check-input me-1 clr-purple-500 br-none" type="checkbox" value=""
                              id="logincheckbox" />
                          <label class="form-check-label ff-Lato fs-12 fw-400 clr-purple-500"
                              for="logincheckbox">Remember me</label>
                          </div>
                          <div>
                          <a href="javascript:;" class="ff-Lato fs-12 fw-400 clr-blue-60 text-decoration-none"
                              onclick="ShowForgoPassword()">Forgot Password?</a>
                          </div>
                      </li>
                      </ul>
                  </div>
                  <div class="col-12 mt-33">
                      <button class="btn login-btn-m">
                      Log in
                      </button>
                  </div>
                  </div>
              </form>
              </div>
          </div>
          </div>
          <div class="col-12" id="registerform" style="display: block">
          <div class="col-12 d-flex justify-content-between">
              <img src="assets/images/index/icon/arrow-left-model.svg" class="cursor-pointer" alt=""
              onclick="showLoginForm()">
              <img src="assets/images/index/icon/close-model.svg" class="cursor-pointer" alt=""
              data-bs-dismiss="modal" aria-label="Close">
          </div>
          <div class="col-12 mt-26-modl">
              <h4 class="mb-0  text-center  fs-24 fsr768-18 line-h-20 clr-black-80 fw-600">
              Login or create an account
              </h4>
              <p class="mb-0 clr-black-50  text-center ff-Lato fs-12 fw-500 line-h-20">
              Enter your credentials and get ready to explore your dream car
              </p>
              <div class="col-12 new-home-page mt-24">
              <form action="">
                  <div class="row">
                  <div class="col-12">
                      <label for="Nametext" class="form-label mb-1 clr-black-80 ff-Lato fs-12 fw-500">Email</label>
                      <div class="reset-paswrod-input-s">
                      <img src="assets/images/common/social-icon/reset-mail.svg" height="13" width="13" alt="">
                      <input type="email" class="h-34" placeholder="example@gmail.com">
                      </div>
                  </div>
                  <div class="col-12 mt-2">
                      <button class="btn login-btn-m">
                      Continue
                      </button>
                  </div>
                  <div class="col-12">
                      <h4 class="fs-12 fw-600 text-center clr-black-20s my-12-modl" onclick="showLoginfinal()">
                      Or
                      </h4>
                  </div>
                  </div>
                  <div class="col-12">
                  <button
                      class="btn login-btn-g ">
                      <img src="assets/images/index/icon/google-svg.svg" alt="" />
                      <span class="ms-2"> Log in with Google </span>
                  </button>
                  </div>
              </div>
              </form>
          </div>
          </div>
          <div class="col-12" id="forgo_password" style="display: none;">
          <div class="col-12 d-flex justify-content-between">
              <img src="assets/images/index/icon/arrow-left-model.svg" class="cursor-pointer" alt=""
              onclick="showLoginForm()">
              <img src="assets/images/index/icon/close-model.svg" class="cursor-pointer" alt=""
              data-bs-dismiss="modal" aria-label="Close">
          </div>
          <div class="col-12 mt-24">
              <h2 class="text-center ff-Lato mb-1 fs-24 fsr768-18 line-h-20 clr-black-80 fw-600">Reset Password</h2>
              <p class="mb-0 clr-black-50 ff-Lato fs-12 fw-500" style="text-align: center;">Please
              enter the email address associated with your SAT account.
              We will email you a link from where you can reset your password.
              </p>
              <div class="my-42s">
              <label class="form-label mb-1  clr-black-80 ff-Lato fs-12 fw-500">Email</label>
              <div class="reset-paswrod-input-s">
                  <img src="assets/images/common/social-icon/reset-mail.svg" height="13" width="13" alt="">
                  <input type="email" placeholder="example@gmail.com">
              </div>
              </div>
              <div class="text-center">
              <button class="btn login-btn-m"
                  onclick="ShowCheckPassword()">
                  Continue
              </button>
              </div>
              <div class="text-center mt-2">
              <span class="fs-12 fw-500 ff-Lato clr-black-80">
                  <a class="cursor-pointer clr-black-80 ms-1 text-decoration-none" onclick="showLoginForm()">
                  <i class="fas fa-arrow-left align-self-center me-1"></i> Return to the login
                  </a></span>
              </div>
          </div>
          </div>
          <div class="col-12" id="check_password" style="display: none;">
          <div class="col-12 d-flex justify-content-between">
              <img src="assets/images/index/icon/arrow-left-model.svg" class="cursor-pointer" alt=""
              onclick="showLoginForm()">
              <img src="assets/images/index/icon/close-model.svg" class="cursor-pointer" alt=""
              data-bs-dismiss="modal" aria-label="Close">
          </div>
          <div class="col-12 mt-24">
              <h2 class="text-center ff-Lato mb-1 fs-24 fsr768-18 line-h-20 clr-black-80 fw-600">Check Your Email</h1>
              <p class="mb-0 clr-black-50 ff-Lato fs-12 fw-500 line-h-20" style="text-align: center;">We have
                  sent you a link to reset your password at "email_address</p>
              <div class="my-42s">
                  <p class="mb-0 clr-black-50 ff-Lato fs-12 fw-500 line-h-20" style="text-align: center;">Did not
                  receive the link? Check your spam folder or click the "Resend Email" button.</p>
              </div>
              <div class="text-center">
                  <button class="btn login-btn-m">
                  Resend Email
                  </button>
              </div>
              <div class="text-center mt-2">
                  <span class="fs-12 fw-500 ff-Lato clr-black-80">
                  <a class="cursor-pointer clr-black-80 ms-1 text-decoration-none" onclick="showLoginForm()">
                      <i class="fas fa-arrow-left align-self-center me-1"></i> Return to login
                  </a></span>
              </div>
          </div>
          </div>
      </div>
      </div>
  </div>
  </div>
</div>
<!-- Modal end-->
<div class="container">
  <div id="header_contain_divs">
  <div class="head-sec-1 flex-grow-1">
      <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#LoginModal">
      <img data-src="/assets/images/logo/logosv.svg" alt="Logo" width="140" height="46"
          class="d-inline-block align-text-top logo1024 lazy">
      </a>
      <div class="input-group align-self-center">
      <input type="text" class="form-control header-search-des plc" placeholder="Search Your Dream Car"
          aria-label="Search Your Dream Car" aria-describedby="button-addon2">
          <button class="btn search_header bg-black-900" type="button" id="button-addon2">
            <div class="headingSkeletonLoader" style="display: block;">
              <p class="shimmer mb-0 rounded-circle srch-loader"></p>
            </div>
            <div class="ShowHtmlLoaded" style="display: none;">
            <img data-src="assets/images/index/Icon/searchicon-svg.svg" class="me-1 mb-1 img-fluid lazy" alt="">
          </div>
            </button>
      <div class="ajax-search-suggestions" style="display: none;"><div class="ajax-search-suggestion-item" data-slug="mk_toyota">Toyota</div><div class="ajax-search-suggestion-item" data-slug="mk_toyota/md_4-runer">TOYOTA 4 RUNER</div><div class="ajax-search-suggestion-item" data-slug="mk_toyota/md_86">TOYOTA 86</div><div class="ajax-search-suggestion-item" data-slug="mk_toyota/md_allex">TOYOTA ALLEX</div><div class="ajax-search-suggestion-item" data-slug="mk_toyota/md_allion">TOYOTA ALLION</div><div class="ajax-search-suggestion-item" data-slug="mk_toyota/md_alphard">TOYOTA ALPHARD</div><div class="ajax-search-suggestion-item" data-slug="mk_toyota/md_alphard-hybrid">TOYOTA ALPHARD HYBRID</div><div class="ajax-search-suggestion-item" data-slug="mk_toyota/md_altezza">TOYOTA ALTEZZA</div><div class="ajax-search-suggestion-item" data-slug="mk_toyota/md_aqua">TOYOTA AQUA</div><div class="ajax-search-suggestion-item" data-slug="mk_toyota/md_aristo">TOYOTA ARISTO</div><div class="ajax-search-suggestion-item" data-slug="mk_toyota/md_auris">TOYOTA AURIS</div></div>
      </div>
  </div>
  <div class="head-sec-2 flex-grow-1">
      <!-- ship to -->
      <div class="dropdown btn-custom-ship-to">
      <a class="remove_icon_drop btn-custom  dropdown-toggle fsr-12 fsr768-10" href="javascript:;" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          <div class="d-flex justify-content-start gap-1">
          Ship to
          <img data-src="assets/images/common/countries-flag/PK.svg" class="img-fluid headr-flag-img lazy shimmer" alt="">
          </div>
          <i class="fas fa-chevron-down fs-10 align-self-center ms-2"></i>
      </a>
      <ul class="dropdown-menu shadow"
          style="max-height: 455px;width: 210px;overflow-y: auto;border-radius: 0px;">
          <span class="dropdown-item px-0">
          <div class="search-filter-field-desk">
              <input type="text" class="flex-grow-1 search-inline-items-flags" onkeyup="searchItemsdes(event ,'flags')" placeholder="Search Country">
              <img src="assets/images/common/icons/new-search-filter.svg" class="img-filter-slider" alt="">
          </div>
          </span>
          <li class="hov-item-dd search-items-values-flags">
          <a class="dropdown-item search-itms" href="reset-password.html">
              <img data-src="assets/images/common/countries-flag/PK.svg" height="15" width="23" class="img-fluid lazy" alt="">
              Pakistan
          </a>
          </li>
          <li class="hov-item-dd search-items-values-flags">
          <a class="dropdown-item search-itms" href="javascript:;">
              <img data-src="assets/images/common/countries-flag/PK.svg" height="15" width="23" class="img-fluid lazy" alt="">
              Pakistan
          </a>
          </li>
          <li class="hov-item-dd search-items-values-flags">
          <a class="dropdown-item search-itms" href="javascript:;">
              <img data-src="assets/images/common/countries-flag/PK.svg" height="15" width="23" class="img-fluid lazy" alt="">
              America
          </a>
          </li>
          <li class="hov-item-dd search-items-values-flags">
          <a class="dropdown-item search-itms" href="javascript:;">
              <img data-src="assets/images/common/countries-flag/PK.svg" height="15" width="23" class="img-fluid lazy" alt="">
              Afganistan
          </a>
          </li>
          <li class="hov-item-dd search-items-values-flags">
          <a class="dropdown-item search-itms" href="javascript:;">
              <img data-src="assets/images/common/countries-flag/PK.svg" height="15" width="23" class="img-fluid lazy" alt="">
              India
          </a>
          </li>
          <li class="hov-item-dd search-items-values-flags">
          <a class="dropdown-item search-itms" href="javascript:;">
              <img data-src="assets/images/common/countries-flag/PK.svg" height="15" width="23" class="img-fluid lazy" alt="">
              Pakistan
          </a>
          </li>
          <li class="hov-item-dd search-items-values-flags">
          <a class="dropdown-item search-itms" href="javascript:;">
              <img data-src="assets/images/common/countries-flag/PK.svg" height="15" width="23" class="img-fluid lazy" alt="">
              Pakistan
          </a>
          </li>
      </ul>
      </div>
      <!-- currency -->
      <div class="dropdown btn-custom-currency">
      <a class="btn-custom dropdown-toggle fsr-12 fsr768-10" href="javascript:;" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          USD
          <i class="fas fa-chevron-down fs-10"></i>
      </a>
      <ul class="dropdown-menu w-71 shadow">
        <span class="dropdown-item px-0">
          <div class="search-filter-field-desk">
              <input type="text" class="flex-grow-1 search-inline-items-currency" onkeyup="searchItemsdes(event ,'currency')" placeholder="Search Country">
              <img src="assets/images/common/icons/new-search-filter.svg" class="img-filter-slider" alt="">
          </div>
          </span>
          <li class="hov-item-dd search-items-values-currency">
          <a class="dropdown-item search-itms" href="reset-password.html">JPY</a>
          </li>
          <li class="hov-item-dd search-items-values-currency">
          <a class="dropdown-item search-itms" href="javascript:;">ERU</a>
          </li>
          <li class="hov-item-dd search-items-values-currency">
          <a class="dropdown-item search-itms" href="javascript:;">USD</a>
          </li>
          <li class="hov-item-dd search-items-values-currency">
          <a class="dropdown-item search-itms" href="javascript:;">PKR</a>
          </li>
          <li class="hov-item-dd search-items-values-currency">
          <a class="dropdown-item search-itms" href="javascript:;">AED</a>
          </li>
          <li class="hov-item-dd search-items-values-currency">
          <a class="dropdown-item search-itms" href="javascript:;">INR</a>
          </li>
          <li class="hov-item-dd search-items-values-currency">
          <a class="dropdown-item search-itms" href="javascript:;">JPY</a>
          </li>
      </ul>
      </div>
      <!-- language -->
      <div class="dropdown btn-custom-language">
      <a class="btn-custom fsr-12 fsr768-10 dropdown-toggle" href="javascript:;" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          English
          <i class="fas fa-chevron-down fs-10"></i>
      </a>

      <ul class="dropdown-menu w-100-s shadow">
          <li class="hov-item-dd">
          <a class="dropdown-item fsr-10 fsr768-10" href="javascript:;">English</a>
          </li>
      </ul>
      </div>
      <!-- favourite -->
      <div class="">
      <img src="/assets/images/index/icon/heart-icon.svg" class="img-fav-head" width="32" height="32" alt="">
      </div>
      <!-- profile -->
      <div class="cursor-pointer d-none custom-profile-head">
      <div class="dropdown">
          <a class="btn-border-none dropdown-toggle btn-custom" href="javascript:;" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          <div class="position-relative">
              <img src="assets/images/index/icon/loginprofile-icon.jpg" class="rounded-circle hov-login-img"
              height="41" width="41" alt="">
              <img src="assets/images/index/icon/arrow-down-icon.svg" width="11" height="11"
              class="position-absolute bottom-ve13 left-80 translate-middle rounded-pill" alt="">
          </div>
          </a>

          <ul class="dropdown-menu w-251 shadow br-none">
          <li class="hov-item-dd px-10">
              <a class="dropdown-item fsr-12 fsr768-10" href="javascript:;">
              <span>
                  <svg width="24" height="24" class="dashborad_icons">
                  <use href="#dashboard_svg"></use>
                  </svg>
                  <span class="ms-2"> Dashboard </span>
              </span>
              <span>
                  <i class="fas fa-chevron-right fs-10"></i>
              </span>
              </a>
          </li>
          <li class="hov-item-dd px-10">
              <a class="dropdown-item fsr-12 fsr768-10" href="javascript:;">
              <span>
                  <svg width="24" height="24" class="dashborad_icons">
                  <use href="#inquiries_svg"></use>
                  </svg>
                  <span class="ms-2"> My Inquires </span>
              </span>
              <span>
                  <i class="fas fa-chevron-right fs-10"></i>
              </span>
              </a>
          </li>
          <li class="hov-item-dd px-10">
              <a class="dropdown-item fsr-12 fsr768-10" href="javascript:;">
              <span>
                  <svg width="24" height="24" class="dashborad_icons">
                  <use href="#Orders_svg"></use>
                  </svg>
                  <span class="ms-2"> My Orders </span>
              </span>
              <span>
                  <i class="fas fa-chevron-right fs-10"></i>
              </span>
              </a>
          </li>
          <li class="hov-item-dd px-10">
              <a class="dropdown-item fsr-12 fsr768-10" href="javascript:;">
              <span>
                  <svg width="24" height="24" class="dashborad_icons">
                  <use href="#heart_svg"></use>
                  </svg>
                  <span class="ms-2"> Favorites </span>
              </span>
              <span>
                  <i class="fas fa-chevron-right fs-10"></i>
              </span>
              </a>
          </li>
          <li class="hov-item-dd px-10">
              <a class="dropdown-item fsr-12 fsr768-10" href="javascript:;">
              <span>
                  <svg width="24" height="24" class="dashborad_icons">
                  <use href="#Settings_svg"></use>
                  </svg>
                  <span class="ms-2"> Settings </span>
              </span>
              <span>
                  <i class="fas fa-chevron-right fs-10"></i>
              </span>
              </a>
          </li>
          <li class="hov-item-dd px-10">
              <a class="dropdown-item fsr-12 fsr768-10" href="javascript:;">
              <span>
                  <svg width="24" height="24" class="dashborad_icons">
                  <use href="#Logout_svg"></use>
                  </svg>
                  <span class="ms-2"> Sign Out </span>
              </span>
              <span>
                  <i class="fas fa-chevron-right fs-10"></i>
              </span>
              </a>
          </li>
          </ul>
      </div>
      </div>
      <!-- register -->
      <!-- d-none -->
      <div
      class="clr-black-50 ff-Lato fs-14 fsr-12 fsr768-10 fw-600 line-h-24 d-flex align-items-center cursor-pointer"
      data-bs-toggle="modal" data-bs-target="#LoginModal">
      <img src="assets/images/index/icon/user-regist.svg" class="res1024_register_img me-1" width="32" height="32"
          alt="">
      <span>Sign in</span>
      </div>
  </div>
  </div>
</div>`;
headermain.innerHTML = headermainHtml;
const headersticky = document.getElementById("header_sticky");
let headerstickyHtml = `<div class="row">
<div class="d-flex justify-content-start gap-32s">
    <div class="hov-nav-items position-relative">
    <p class="cnm-cls fs-14 fsr-12 fsr768-8">
        Find Your Car <i class="fas fa-chevron-down fs-10 ms-2"></i>
    </p>
    <div class="dropdown_content_header">
        <div class="card w-1282 br-none br-top-blue-1">
        <span class="border_dropdown_content_header w-105h"></span>
        <div class="card-body px-8 py-10">
            <div class="grid_5 lists-space-sub-head">
            <!-- Explore Stock -->
            <!-- px-8 pt-0 pb-2 line-h-20 -->
            <div class="">
                <ul class="list-group list-group-flush">
                <li class="list-group-item border-bottom-0 px-8 fw-600 fs-18 fsr-14 fsr768-10 ff-Lato">
                    <img src="assets/images/index/Icon/deals.svg" alt="" />
                    <span class="ms-2">Explore Stock</span>
                </li>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd border-bottom-0 clr-black-50 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato pt-0 pb-2 line-h-20">
                    Find Used Cars for Sale
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Top Selling Cars
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Recommended For You
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Price Generator
                </a>
                </ul>
                <!-- Explore By Price -->
                <ul class="list-group list-group-flush mt-10i">
                <li class="list-group-item border-bottom-0 px-8 fw-600 fs-18 fsr-14 fsr768-10 ff-Lato">
                    <img src="assets/images/index/Icon/explore.svg" alt="" />
                    <span class="ms-2">Explore By Price</span>
                </li>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Less than $1000
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Between $1000 - $2000
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Between $2000 - $3000
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Between $3000 - $4000
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Between $4000 - $5000
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Above $5000
                </a>
                </ul>
            </div>
            <!-- Explore by Make -->
            <div class="">
                <ul class="list-group list-group-flush make-lists-i">
                <li class="list-group-item border-bottom-0 px-8 fw-600 fs-18 fsr-14 fsr768-10 ff-Lato">
                    <img src="assets/images/index/Icon/make.svg" alt="" />
                    <span class="ms-2">Explore by Make</span>
                </li>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/toyota.svg" height="20" width="20" alt="" />
                    <span class="ms-2"> Toyota </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/honda-logo-png-picture-20.svg" height="20" width="20"
                    alt="" />
                    <span class="ms-2"> Honda </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/toyota.svg" height="20" width="20" alt="" />
                    <span class="ms-2"> Nissan </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/toyota.svg" height="20" width="20" alt="" />
                    <span class="ms-2"> Daihatsu </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/toyota.svg" height="20" width="20" alt="" />
                    <span class="ms-2"> Mazda </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/toyota.svg" height="20" width="20" alt="" />
                    <span class="ms-2"> Mitsubishi </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/toyota.svg" height="20" width="20" alt="" />
                    <span class="ms-2"> Suzuki </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/toyota.svg" height="20" width="20" alt="" />
                    <span class="ms-2"> Subaru </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/toyota.svg" height="20" width="20" alt="" />
                    <span class="ms-2"> Lexus </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/toyota.svg" height="20" width="20" alt="" />
                    <span class="ms-2"> BMW </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <img src="assets/images/index/car-icon/toyota.svg" height="20" width="20" alt="" />
                    <span class="ms-2"> Mercedes </span>
                </a>
                </ul>
            </div>

            <!-- Explore by Type -->
            <div class="">
                <ul class="list-group list-group-flush make-lists-i">
                <li class="list-group-item border-bottom-0 px-8  fw-600 fs-18 fsr-14 fsr768-10 ff-Lato">
                    <img src="assets/images/index/Icon/type.svg" alt="" />
                    <span class="ms-2">Explore by Type</span>
                </li>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> SUV </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> Sedan </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> Hatchback </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> Wagon </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> Coupe </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> Pickup </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> Convertible </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> Bus </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> Van </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> Mini Van </span>
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    <span class=""> Tractor </span>
                </a>
                </ul>
            </div>
            <!-- Explore by Year -->
            <div class="">
                <ul class="list-group list-group-flush">
                <li class="list-group-item border-bottom-0 px-8 fw-600 fs-18 fsr-14 fsr768-10 ff-Lato">
                    <img src="assets/images/index/Icon/years.svg" alt="" />
                    <span class="ms-2">Explore by Year</span>
                </li>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    2004 and older
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    2005 and newer
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    2010 and newer
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    2015 and newer
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    2020 and newer
                </a>
                </ul>
                <!-- Explore by Discount -->
                <ul class="list-group list-group-flush mt-10i ">
                <li class="list-group-item border-bottom-0 px-8 fw-600 fs-18 fsr-14 fsr768-10 ff-Lato">
                    <img src="assets/images/index/Icon/deals.svg" alt="" />
                    <span class="ms-2">Explore by Discount</span>
                </li>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    60% Off or More
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    50% Off or More
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    40% Off or More
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    30% Off or More
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    1% - 30% Off
                </a>
                </ul>
            </div>

            <!-- Inventory Location -->
            <div class="">
                <ul class="list-group list-group-flush">
                <li class="list-group-item border-bottom-0 px-8 fw-600 fs-18 fsr-14 fsr768-10 ff-Lato">
                    <img src="assets/images/index/Icon/invloc.svg" alt="" />
                    <span class="ms-2">Inventory Location</span>
                </li>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Japan
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Tanzania
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Dominican Republic
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Kenya
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Chile
                </a>
                </ul>
                <!-- Other Categories -->
                <ul class="list-group list-group-flush mt-10i">
                <li class="list-group-item border-bottom-0 px-8  fw-600 fs-18 fsr-14 fsr768-10 ff-Lato">
                    <img src="assets/images/index/Icon/category.svg" alt="" />
                    <span class="ms-2">Other Categories</span>
                </li>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Right Hand Drive
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Diesel
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Gasoline/Petrol
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Electric
                </a>
                <a href="javascript:;"
                    class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato">
                    Hybrid
                </a>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div class="hov-nav-items position-relative">
    <p class="cnm-cls fs-14 fsr-12 fsr768-8">
        Local Pages <i class="fas fa-chevron-down fs-10 ms-2"></i>
    </p>
    <div class="dropdown_content_header">
        <div class="card w-820 br-none br-top-blue-1">
        <span class="border_dropdown_content_header w-100h"></span>
        <div class="card-body px-8 py-10">
            <div class="grid_5 grid_5s lists-group-local">
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/lesotho.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Lesotho</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/usa.svg" alt="" class="lazy" />
            <span class="ms-2">SAT USA</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/malawi.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Malawi</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/botswana.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Botswana</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/mauritius.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Mauritius</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/zimbabwe.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Zimbabwe</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/mongolia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Mongolia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/cambodia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Cambodia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Mozambique</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>                  
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a> 
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>     
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            <a href="javascript:;"
             onclick="window.location.href='/country-page.html'"
            class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
            <img data-src="assets/images/common/countries-flag/australia.svg" alt="" class="lazy" />
            <span class="ms-2">SAT Australia</span>
            </a>
            </div>
        </div>
        </div>
    </div>
    </div>
    <!-- services -->
    <div class="hov-nav-items position-relative">
    <p class="cnm-cls fs-14 fsr-12 fsr768-8">
        Car Services <i class="fas fa-chevron-down fs-10 ms-2"></i>
    </p>
    <div class="dropdown_content_header">
        <div class="card w-167 br-none br-top-blue-1">
        <span class="border_dropdown_content_header w-100h"></span>
        <div class="card-body px-8 py-10">
            <ul class="list-group list-group-flush">
            <a href="javascript:;"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="15" class="sub-dropdown-item">
                <use href="#Shipping_svg"></use>
                </svg>
                <span class="ms-2"> Shipping Schedule </span>
            </a>
            <a href="/insurance-services.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#Insurance_svg"></use>
                </svg>
                <span class="ms-2"> Insurance </span>
            </a>
            <a href="javascript:;"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#Storage_svg"></use>
                </svg>
                <span class="ms-2"> Storage Service </span>
            </a>
            <a href="javascript:;"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#auction_services"></use>
                </svg>
                <span class="ms-2"> Auction Service </span>
            </a>
            <a href="javascript:;"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#security_export"></use>
                </svg>
                <span class="ms-2"> Security Export</span>
            </a>
            </ul>
        </div>
        </div>
    </div>
    </div>
    <!-- reviews -->
    <div class="hov-nav-items position-relative">
    <p class="cnm-cls fs-14 fsr-12 fsr768-8">
        Reviews <i class="fas fa-chevron-down fs-10 ms-2"></i>
    </p>
    <div class="dropdown_content_header">
        <div class="card w-253 br-none br-top-blue-1">
        <span class="border_dropdown_content_header w-70h"></span>
        <div class="card-body px-8 py-10">
            <ul class="list-group list-group-flush">
            <a href="javascript:;"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#car_review_svg"></use>
                </svg>
                <span class="ms-2"> Car Reviews </span>
            </a>
            <a href="/blogs-car-comparisons.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#comparison-pro"></use>
                </svg>
                <span class="ms-2"> Car Comparisons </span>
            </a>
            <a href="/blogs-car.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#car_blogs_svg"></use>
                </svg>
                <span class="ms-2"> Car Blogs </span>
            </a>
            </ul>
        </div>
        </div>
    </div>
    </div>
    <!-- company overview -->
    <div class="hov-nav-items position-relative">
    <p class="cnm-cls fs-14 fsr-12 fsr768-8">
        Company Overview <i class="fas fa-chevron-down fs-10 ms-2"></i>
    </p>
    <div class="dropdown_content_header">
        <div class="card w-253 br-none br-top-blue-1">
        <span class="border_dropdown_content_header w-140h"></span>
        <div class="card-body px-8 py-10">
            <ul class="list-group list-group-flush">
            <a href="/about-us-page.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#information_svg"></use>
                </svg>
                <span class="ms-2"> About SAT </span>
            </a>
            <a href="/why-chose-sat.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#company_log_svg"></use>
                </svg>
                <span class="ms-2"> Why Choose SAT </span>
            </a>
            <a href="/Company-profile.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#company-pro"></use>
                </svg>
                <span class="ms-2"> Company Profile </span>
            </a>
            <a href="/term-condition.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#terms_and_condition_svg"></use>
                </svg>
                <span class="ms-2">Terms and Conditions</span>
            </a>
            <a href="/cookie-policy.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#cookie_svg"></use>
                </svg>
                <span class="ms-2">Cookie Policy</span>
            </a>
            </ul>
        </div>
        </div>
    </div>
    </div>
    <!-- help -->
    <div class="cursor-pointer hov-nav-items position-relative">
    <p class="cnm-cls fs-14 fsr-12 fsr768-8">
        Help <i class="fas fa-chevron-down fs-10 ms-2"></i>
    </p>
    <div class="dropdown_content_header">
        <div class="card w-253 br-none br-top-blue-1">
        <span class="border_dropdown_content_header w-50h"></span>
        <div class="card-body px-8 py-10">
            <ul class="list-group list-group-flush">
            <a href="/inquiry-form.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#track_order"></use>
                </svg>
                <span class="ms-2">Track Your Order</span>
            </a>
            <a href="/inquiry-form.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#inquiery_s"></use>
                </svg>
                <span class="ms-2"> Inquiry Form</span>
            </a>
            <a href="/vehicle-information.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#information_svg"></use>
                </svg>
                <span class="ms-2"> Request A Car </span>
            </a>
            <a href="/how-to-buy.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#buy_svg"></use>
                </svg>
                <span class="ms-2"> How to Buy </span>
            </a>
            <a href="/how-to-pay.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#pay_svg"></use>
                </svg>
                <span class="ms-2"> How to Pay </span>
            </a>
            <a href="javascript:;"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#car_review_svg"></use>
                </svg>
                <span class="ms-2">
                How to Pick the RIght Used Car
                </span>
            </a>
            <a href="/faqs-tabs.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#faq_svg"></use>
                </svg>
                <span class="ms-2"> FAQ’s </span>
            </a>
            <a href="bank-information.html"
                class="list-group-item hov_sub_item_dd clr-black-50 border-bottom-0 px-8 fw-500 fs-14 fsr-12 fsr768-10 ff-Lato line-h-20 pt-0 pb-2">
                <svg width="16" height="16" class="sub-dropdown-item">
                <use href="#bank_s"></use>
                </svg>
                <span class="ms-2"> Bank Information </span>
            </a>
            </ul>
        </div>
        </div>
    </div>
    </div>
</div>
</div>`;
headersticky.innerHTML = headerstickyHtml;
