/* =====================================
   SELECT HTML ELEMENTS
===================================== */

const variantButtons = document.querySelectorAll(".variant");

const priceElement = document.getElementById("price");

const quantityElement = document.getElementById("quantity");

const totalPriceElement = document.getElementById("totalPrice");

const increaseButton = document.getElementById("increase");

const decreaseButton = document.getElementById("decrease");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

const enquiryForm = document.getElementById("enquiryForm");


/* =====================================
   PRODUCT DATA
===================================== */

let selectedPrice = 2999;

let quantity = 1;


/* =====================================
   FORMAT PRICE
===================================== */

function formatPrice(price) {

    return "₹" + price.toLocaleString("en-IN");

}


/* =====================================
   UPDATE PRICE
===================================== */

function updatePrice() {

    const total = selectedPrice * quantity;

    priceElement.textContent = formatPrice(selectedPrice);

    totalPriceElement.textContent = formatPrice(total);

    quantityElement.textContent = quantity;

}


/* =====================================
   PRODUCT VARIANT SELECTION
===================================== */

variantButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /* Remove active class from all buttons */

        variantButtons.forEach(function(item) {

            item.classList.remove("active");

        });


        /* Add active class to selected button */

        button.classList.add("active");


        /* Get selected price */

        selectedPrice = Number(button.dataset.price);


        /* Update displayed price */

        updatePrice();

    });

});


/* =====================================
   INCREASE QUANTITY
===================================== */

increaseButton.addEventListener("click", function() {

    quantity++;

    updatePrice();

});


/* =====================================
   DECREASE QUANTITY
===================================== */

decreaseButton.addEventListener("click", function() {

    if (quantity > 1) {

        quantity--;

        updatePrice();

    }

});


/* =====================================
   MOBILE NAVIGATION
===================================== */

menuToggle.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});


/* =====================================
   CLOSE MOBILE MENU AFTER CLICK
===================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


/* =====================================
   FORM VALIDATION
===================================== */

enquiryForm.addEventListener("submit", function(event) {

    /* Prevent actual form submission */

    event.preventDefault();


    /* Get form values */

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();


    /* Error elements */

    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    const phoneError = document.getElementById("phoneError");

    const messageError = document.getElementById("messageError");

    const successMessage = document.getElementById("successMessage");


    /* Clear previous errors */

    nameError.textContent = "";

    emailError.textContent = "";

    phoneError.textContent = "";

    messageError.textContent = "";

    successMessage.style.display = "none";


    let isValid = true;


    /* =====================================
       NAME VALIDATION
    ===================================== */

    if (name === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;

    }


    /* =====================================
       EMAIL VALIDATION
    ===================================== */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent = "Please enter your email.";

        isValid = false;

    }

    else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    /* =====================================
       PHONE VALIDATION
    ===================================== */

    const phonePattern = /^[0-9]{10}$/;


    if (phone === "") {

        phoneError.textContent =
            "Please enter your phone number.";

        isValid = false;

    }

    else if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Please enter a valid 10-digit phone number.";

        isValid = false;

    }


    /* =====================================
       MESSAGE VALIDATION
    ===================================== */

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    }


    /* =====================================
       SUCCESS
    ===================================== */

    if (isValid) {

        successMessage.style.display = "block";

        enquiryForm.reset();

    }

});