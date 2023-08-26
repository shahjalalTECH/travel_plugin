//Country Flag

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

$(document).ready(function () {
  // Password field hide and show
  $(".bb-input-password .fa-solid").on("click", function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    if ($(this).hasClass('fa-eye-slash')) {
      $(this).parent('.bb-input-password').find('input').attr('type', 'text');
    } else {
      $(this).parent('.bb-input-password').find('input').attr('type', 'password');
    }
  });

  // Select To Plugin with search
  $('.bb-country-list').select2({
    placeholder: "Select an option...",
    selectOnClose: true,
    allowClear: true
  });
  $('.bb-hotel-room-category').select2();

  // $('.bb-hotel-list').select2();
  $('.bb-package-list').select2({
    "language": {
      "noResults": function (searchedTerm) {
        return "<button class='add-new-customer'  data-toggle='modal' data-target='#modal-default' style='cursor: pointer;'><i class='fa fa-plus'></i> Add New</button>";
      }
    },
    "escapeMarkup": function (markup) {
      return markup;
    },
    placeholder: "Select an option...",
    selectOnClose: true,
    allowClear: true
  });

  $(document).on('click', '.add-new-customer', function () {
    var addNew = $('.bb-package-list').data("select2").dropdown.$search.val();
    $('.bb-package-list').append(`<option value="${addNew}" selected>${addNew}</option>`);
  });

  
  $(document).on('click', '.add-new-customer2', function () {
    var hotelCount = $(this).attr('data-count');
    var addNew = $('.bb-hotel-count-' + hotelCount).data("select2").dropdown.$search.val();
    $('.bb-hotel-count-' + hotelCount).append(`<option value="${addNew}" selected>${addNew}</option>`);
  });

  $('.js-example-basic-multiple').select2({
    tags: true,
    tokenSeparators: [',', ' ']
  });


  // Date Picker
  $('#basicDate').flatpickr();

  // Append input fields

  $(document).on("click", ".bbb-add-btn", function () {
    $(".bbb-form-field-item-append-field-parent").append(`<div class="bbb-new-append-field">
        <input type="text">
        <button type="button" class="bbb-add-btn"><i class="fa-solid fa-plus"></i></button>
        <button type="button" class="bbb-remove-btn"><i class="fa-solid fa-minus"></i></button>
    </div>`);
  });
  $(document).on("click", ".bbb-remove-btn", function () {
    $(".bbb-new-append-field:last-child").remove();
  });

  $(document).on("click", ".bbb-delete-btn", function () {
    $(this).parents(".bbb-hotel-details-table-tr").remove();
    if ($(".bbb-hotel-details-table-tr").length < 2) {
      $(".bb-there-are-no-hotels").show();
    } else {
      $(".bb-there-are-no-hotels").hide();
    }
  });

  // Image Crop

  $("#cropzee-input").cropzee({
    allowedInputs: ['gif', 'png', 'jpg', 'jpeg'],
    returnImageMode: 'data-url'
  });

  
  // Add new Hotel
  $(document).on('click', '.add-new-hotel', function () {
    let new_hotel_count = $(this).attr("class");
    console.log(new_hotel_count);
    var addNew = $('.bb-hotel-list').data("select2").dropdown.$search.val();
    $('.bb-hotel-list').append(`<option value="${addNew}" selected>${addNew}</option>`);
  });

  let hotelCount = 0;
  $(document).on("click", ".bbb-add-new-hotel", function() {
    hotelCount++;
    $(".bbb-hotel-details-main-grand-parent").append(`<div class="bbb-hotel-details-main-parent">
    <div class="bbb-form-fields bbb-form-fields-padding">
        <div class="bbb-form-field-item">
            <label for="">Country</label>
            <select class="bb-country-list" name="country">
                <option value="" disabled selected>Select Country</option>
                <option value="Bangladesh">Bangladesh </option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Srilanka">Srilanka</option>
                <option value="Nepal">Nepal</option>
                <option value="German">German</option>
                <option value="Shiligury">Shiligury</option>
                <option value="Australia">Australia</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>

            </select>
        </div>
        <div class="bbb-form-field-item">
            <label for="">Hotel Duration</label>
            <select name="" id="">
                <option value="1 Night">1 Night</option>
                <option value="2 Nights">2 Nights</option>
                <option value="3 Nights">3 Nights</option>
                <option value="4 Nights">4 Nights</option>
                <option value="5 Nights">5 Nights</option>
            </select>
        </div>
        <div class="bbb-form-field-item">
            <label for="">Hotel Name</label>
            <select class="bb-hotel-list bb-hotel-count-` + hotelCount + `" name="bb_hotel[]">
                <option value="Al Khoory Inn Hotel, Bur Dubai">Al Khoory Inn Hotel, Bur Dubai</option>
                <option value="Crowne Plaza Dubai - Deira">Crowne Plaza Dubai - Deira</option>
                <option value="Hotel Royal Batoo or Similar at Srinagar">Hotel Royal Batoo or Similar at
                    Srinagar</option>
                <option value="Redission Blue">Redission Blue</option>
                <option value="XYZ New Hotel">XYZ New Hotel</option>
                <option value="New Hotel ADD 2">New Hotel ADD 2</option>
                <option value="New Hotel PQR">New Hotel PQR</option>
            </select>
        </div>
        <div class="bbb-form-field-item">
            <label for="">Room Inclusion</label>
            <select class="form-control" name="input_4" id="input_7_4" aria-invalid="false"
                fdprocessedid="zweqo">
                <option value="Complimentary Daily Breakfast and Dinner">Complimentary Daily Breakfast and
                    Dinner
                </option>
                <option value="Complimentary Daily Breakfast, Lunch and Dinner">Complimentary Daily Breakfast,
                    Lunch and Dinner
                </option>
                <option value="without Daily Breakfast and Dinner">without Daily Breakfast and Dinner</option>
                <option value="without Daily Breakfast, Lunch and Dinner">without Daily Breakfast, Lunch and
                    Dinner
                </option>
                <option value="Complimentary Daily Breakfast">Complimentary Daily Breakfast</option>
                <option value="without Daily Breakfast">without Daily Breakfast</option>
                <option value="Complimentary Daily Dinner">Complimentary Daily Dinner</option>
                <option value="without Daily Dinner">without Daily Dinner</option>
            </select>
        </div>
    </div>
    <div class="bbb-form-fields bbb-form-fields-third bbb-form-fields-third-padding">
        <div class="bbb-form-field-item">
            <label for="">No of Rooms</label>
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

        </div>
        <div class="bbb-form-field-item">
            <label for="">Room category</label>
            <select name="input_36" id="input_2_36" class="form-control" aria-invalid="false"
                fdprocessedid="52s5c8">
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Standard Room">Standard Room</option>
                <option value="Single Room">Single Room</option>
                <option value="Twin Room">Twin Room</option>
                <option value="Double Room">Double Room</option>
                <option value="Triple Room">Triple Room</option>
                <option value="Quadruple Room">Quadruple Room</option>
                <option value="Studio Room">Studio Room</option>
                <option value="Duplex">Duplex</option>
                <option value="Adjoining Room">Adjoining Room</option>
                <option value="Apartment-Style Room">Apartment-Style Room</option>
                <option value="Suite">Suite</option>
                <option value="Junior Suite">Junior Suite</option>
                <option value="Presidential Suite">Presidential Suite</option>
                <option value="Penthouse Suite">Penthouse Suite</option>
                <option value="Bridal Suite">Bridal Suite</option>
                <option value="Honeymoon Suite">Honeymoon Suite</option>
                <option value="Cabana">Cabana</option>
                <option value="Villa">Villa</option>
            </select>
        </div>
        <div class="bbb-form-field-item">
            <label for="">No of pax</label>
            <select name="input_38" id="input_2_38" class="large gfield_select" aria-invalid="false"
                fdprocessedid="jr7ath">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    </div>
    <button type="button" class="bbb-remove-new-hotel">Remove Hotel</button>
</div>`);
$('.bb-hotel-list').select2({
  "language": {
    "noResults": function (searchedTerm) {
      return "<button class='add-new-customer2' data-count='" + hotelCount + "' style='cursor: pointer;'><i class='fa fa-plus'></i> Add New</button>";
    }
  },
  "escapeMarkup": function (markup) {
    return markup;
  }
});
  });

  $(document).on("click", ".bbb-remove-new-hotel", function() {
    $(this).parents(".bbb-hotel-details-main-parent").remove();
  });
});












