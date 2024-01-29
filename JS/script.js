//========================================== Java Script file ========================================

// =============================  Mobile (Burger) - Navbar Implementation ============================= 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar_links');
    const navLinks = document.querySelectorAll('.navbar_links li');

    burger.addEventListener('click', () => {
        // Toggle nav.
        nav.classList.toggle('nav_active');

        //Animate links. 
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 2}s`;
        });

        //Burger animation.
        burger.classList.toggle('toggle')
    });
};
navSlide();

// =============================  Function to highlight the active menu item ==========================
const highlightMenuItem = () => {
    const navLinks = document.querySelectorAll('.navbar_links li');
    const currentURL = window.location.href;

    navLinks.forEach((link) => {
        if (link.querySelector('a').href == currentURL) {
            link.classList.add('active');
        }
        else {
            link.classList.remove('active');
        }
    });
};
highlightMenuItem()

//  ============================= Function to add asterisks to required fields ============================= 
function addAsterisk(elementId) {
    var label = document.querySelector(`label[for="${elementId}"]`);

    if (label) {
        var requiredSpan = label.querySelector(".required");

        // Adding asterisk only if it doesn't already exist
        if (!requiredSpan) {
            label.innerHTML += "<span class='required'> *</span>";
            requiredSpan = label.querySelector(".required");
            requiredSpan.style.color = "darkred";
        }
    }
    else {
        console.error(`Label with for="${elementId}" not found.`);
    }
}

//  ============================= Registration form validation - JS ============================= 
function validateRegistrationForm(event) {
    // Prevent the default form submission behaviour and check it with the custom requirements. 
    event.preventDefault();

    // Taking the input values of the form.
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var email = document.getElementById("email").value;
    var icecream = document.getElementById("ice-cream").value;
    var terms = document.getElementById("terms").checked;

    // Storing the error messsage. 
    var ErrorMessage = "";

    // Assuming no error.
    var result = true;

    // Expression for letters and spaces only.
    var pattern = /^[a-zA-Z ]+$/;

    // Requirement 1, check if all required inputs have value. 
    if (username == "") {
        ErrorMessage += "Username cannot be empty. \n";
        addAsterisk("username");
    }
    if (password == "") {
        ErrorMessage += "Password cannot be empty. \n";
        addAsterisk("password");
    }
    if (male == "" && female == "") {
        ErrorMessage += "A gender must be selected. \n";
        addAsterisk("gender");
    }
    if (email == "") {
        ErrorMessage += "Email cannot be empty. \n";
        addAsterisk("email");
    }
    if (icecream == "") {
        ErrorMessage += "Please select a favourite ice-cream flavour. \n";
        addAsterisk("ice-cream");
    }
    if (!terms) {
        ErrorMessage += "You must agree to the terms and conditions. \n";
        addAsterisk("terms");
    }

    // Requirement 2, checking that the password is at least 9-character long. 
    if (password.length < 9) {
        ErrorMessage += "Password must be at least 9 characters long. \n"
    }

    // Check if password contains at least one uppercase letter.
    if (!/[A-Z]/.test(password)) {
        ErrorMessage += "Password must contain at least one uppercase letter. \n";
    }

    // Check if password contains at least one lowercase letter.
    if (!/[a-z]/.test(password)) {
        ErrorMessage += "Password must contain at least one lowercase letter. \n";
    }

    /* Display error message any error(s) is/are detected */
    if (ErrorMessage != "") {
        alert(ErrorMessage);
        result = false;
    }

    // Submit the form if there are no errors
    if (result) {
        event.target.submit();
    }
}

// ============================= Order Form Validation - JS ============================= 
function validateOrderForm(event) {
    // Prevent the default form submission behaviour and check it with the custom requirements. 
    event.preventDefault();

    // Taking the input values of the form.
    var deliver = document.getElementById("delivery-pickup").value;
    var streetAddress = document.getElementById("delivery-street").value;
    var deliverycity = document.getElementById("delivery-city").value;
    var deliverystate = document.getElementById("delivery-state").value;
    var deliverypostcode = document.getElementById("delivery-postcode").value;
    var billingStreet = document.getElementById("billing-street").value;
    var billingcity = document.getElementById("billing-city").value;
    var billingstate = document.getElementById("billing-state").value;
    var billingpostcode = document.getElementById("billing-postcode").value;
    var contactNumber = document.getElementById("contact-number").value;
    var email = document.getElementById("email").value;
    var paypick = document.getElementById("pay-on-pickup").checked;
    var payonline = document.getElementById("pay-online").checked;
    var cardholdername = document.getElementById("cardholder-name").value;
    var cardnumber = document.getElementById("card-number").value;
    var expirydate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;
    var cardtype = document.getElementById("card-type").value;

    // Storing the error messsage. 
    var ErrorMessage = "";

    // Assuming no error.
    var result = true;

    // Expression for letters and spaces only.
    var pattern = /^[a-zA-Z ]+$/;

    if (deliver == "select-one") {
        ErrorMessage += "Please select delivery or pickup. \n";
        addAsterisk("delivery-pickup");
    }

    if (deliver == "delivery") {
        if (streetAddress == "") {
            ErrorMessage += "Street Address for delivery cannot be empty. \n";
            addAsterisk("delivery-street");
        }
        if (deliverycity == "") {
            ErrorMessage += "City/Suburb for delivery cannot be empty. \n";
            addAsterisk("delivery-city");
        }
        if (deliverystate == "") {
            ErrorMessage += "State/Territory for delivery cannot be empty. \n";
            addAsterisk("delivery-state");
        }
        if (deliverypostcode == "") {
            ErrorMessage += "Postcode for delivery cannot be empty. \n";
            addAsterisk("delivery-postcode");
        }
        if (!/^\d{4}$/.test(deliverypostcode)) {
            ErrorMessage += "Postcode for delivery must be a 4-digit number. \n";
        }
    }

    if (deliver == "pickup") {
        if (billingStreet == "") {
            ErrorMessage += "Street Address for billing cannot be empty. \n";
            addAsterisk("billing-street");
        }

        if (billingcity == "") {
            ErrorMessage += "City/Suburb for billingcannot be empty. \n";
            addAsterisk("billing-city");
        }

        if (billingstate == "") {
            ErrorMessage += "State/Territory for billing cannot be empty. \n";
            addAsterisk("billing-state");
        }

        if (billingpostcode == "") {
            ErrorMessage += "Postcode for billing cannot be empty. \n";
            addAsterisk("billing-postcode");
        }

        if (!/^\d{4}$/.test(billingpostcode)) {
            ErrorMessage += "Postcode must be a 4-digit number. \n";
        }
    }

    if (contactNumber == "") {
        ErrorMessage += "Contact number cannot be empty.\n";
        addAsterisk("contact-number");
    }

    if (email == "") {
        ErrorMessage += "Email cannot be empty. \n";
        addAsterisk("email");
    }

    if (!paypick && !payonline) {
        ErrorMessage += "A payment method must be selected. \n";
    }

    if (payonline) {
        if (cardtype == "select") {
            ErrorMessage += "Please select the Credit Card Type. \n";
            addAsterisk("card-type");
        }

        if (cardholdername == "") {
            ErrorMessage += "Card holders name cannot be empty. \n";
            addAsterisk("cardholder-name");
        }

        if (cardnumber == "") {
            ErrorMessage += "Card number cannot be empty. \n";
            addAsterisk("card-number");
        }

        if (expirydate == "") {
            ErrorMessage += "Expiry date cannot be empty. \n";
            addAsterisk("expiry-date");
        }

        if (cvv == "") {
            ErrorMessage += "CVV cannot be empty. \n";
            addAsterisk("cvv");
        }
    }

    /* Display error message any error(s) is/are detected */
    if (ErrorMessage != "") {
        alert(ErrorMessage);
        result = false;
    }

    // Submit the form if there are no errors
    if (result) {
        event.target.submit();
    }
}
//  ============================= Contact Form Validation - JS  ============================= 
function validateContactForm(event) {
    // Prevent the default form submission behaviour and check it with the custom requirements. 
    event.preventDefault();

    // Taking the input values of the form.
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Storing the error messsage. 
    var ErrorMessage = "";

    // Assuming no error.
    var result = true;

    // Expression for letters and spaces only.
    var pattern = /^[a-zA-Z ]+$/;

    if (name == "") {
        ErrorMessage += "Name Cannot be empty. \n";
        addAsterisk("name");
    }

    if (address == "") {
        ErrorMessage += "Address cannot be empty. \n";
        addAsterisk("address1");
    }

    if (email == "") {
        ErrorMessage += "Email cannot be empty. \n";
        addAsterisk("email");
    }

    if (message == "") {
        ErrorMessage += "Message cannot be empty. \n";
        addAsterisk("message");
    }

    /* Display error message any error(s) is/are detected */
    if (ErrorMessage != "") {
        // Adding a custom alert message.
        ErrorMessage = "<div id='scrnOverlay'></div>" +
            "<section id='errWin' class='window'><ul><li>" + ErrorMessage.replace(/\n/g, "</li><li>") + "</li></ul>" +
            "<a href='#' id='errBtn' class='button'>Close</a></section>";
        var numOfItems = (ErrorMessage.match(/<li>/g) || []).length + 6;
        $("body").after(ErrorMessage);
        $("#scrnOverlay").css('visibility', 'visible');
        $("#errWin").css('height', numOfItems + 'em');

        // Close error window when 'Close' button is clicked.
        $("#errBtn").click(function () {
            $("#scrnOverlay").remove();
            $("#errWin").remove();
        });
        return false;
    }

    // Submit the form if there are no errors
    if (result) {
        event.target.submit();
    }
}
// ==== DOMContentLoaded event listener to handle actions when the HTML content has finished loading. =====
document.addEventListener("DOMContentLoaded", function () {
    const deliver = document.getElementById("delivery-pickup");
    const deliveryAddress = document.getElementById("delivery-address");
    const pickupAddress = document.getElementById("billing-address");
    const address = document.getElementById("address");
    const payonline = document.getElementById("pay-online");
    const cardinfo = document.getElementById("credit-card-info");
    const paypick = document.getElementById("pay-on-pickup");
    const address1 = document.getElementById("check-address");
    const cardTypeSelect = document.getElementById('card-type');
    const cardNumberInput = document.getElementById('card-number');
    const contactButton = document.getElementById("contact-button");
    const streetAddress = document.getElementById("delivery-street");
    const deliverycity = document.getElementById("delivery-city");
    const deliverystate = document.getElementById("delivery-state");
    const deliverypostcode = document.getElementById("delivery-postcode");
    const billingStreet = document.getElementById("billing-street");
    const billingcity = document.getElementById("billing-city");
    const billingstate = document.getElementById("billing-state");
    const billingpostcode = document.getElementById("billing-postcode");
    const logo = document.getElementById("Page-Logo");

    contactButton.addEventListener("click", function () {
        window.location.href = "contact.html";
    });

    logo.addEventListener("click", function(){
        window.location.href = "index.html";
    });

    if (document.getElementById("delivery-pickup") != null) {
        deliver.addEventListener("change", function () {
            if (deliver.value == "delivery") {
                deliveryAddress.style.display = "block";
                pickupAddress.style.display = "block";
                address1.style.display = "block";
            }
            else if (deliver.value == "pickup") {
                deliveryAddress.style.display = "none";
                pickupAddress.style.display = "block";
                address1.style.display = "none";
            }
            else if (deliver.value == "select-one") {
                deliveryAddress.style.display = "none";
                pickupAddress.style.display = "none";
                address1.style.display = "none";
            }
            else {
                deliveryAddress.style.display = 'none';
                pickupAddress.style.display = 'none';
            }
        });
        payonline.addEventListener("change", function () {
            if (payonline.checked) {
                cardinfo.style.display = "block";
            }
            else {
                cardinfo.style.display = "none";
            }
        });

        paypick.addEventListener("change", function () {
            if (paypick.checked) {
                cardinfo.style.display = "none";
            }
        });

        // Function for making the billing address same as the delivery address. 
        address.addEventListener("change", function () {
            if (address.checked) {
                if (streetAddress.value == "" || deliverycity.value == "" || deliverystate.value == "" || deliverypostcode.value == "") {
                    alert("Please enter your delivery address first.");
                    address.checked = false;
                    return;
                }

                billingStreet.value = streetAddress.value;
                billingcity.value = deliverycity.value;
                billingstate.value = deliverystate.value;
                billingpostcode.value = deliverypostcode.value;
                pickupAddress.style.display = "none";
            }

            else {
                pickupAddress.style.display = "block";
            }
        });

        // Function for the credit card type.
        cardTypeSelect.addEventListener('change', function () {
            const selectedCardType = cardTypeSelect.value;
            if (selectedCardType == 'amex') {
                cardNumberInput.maxLength = 15;
            }
            else {
                cardNumberInput.maxLength = 16;
            }
        });
    }
});

/*   =============== Linking HTML elements to corresponding event function  ============== */
function init() {
    /* Linking the variables to the HTML elements */
    var regForm = document.getElementById("reg-form");
    var orderForm = document.getElementById("order-form");
    var contactForm = document.getElementById("contact-form");

    /* Assigning functions to corresponding events */
    if (regForm) {
        regForm.addEventListener("submit", validateRegistrationForm);
    }

    if (orderForm) {
        orderForm.addEventListener("submit", validateOrderForm);
    }

    if (contactForm) {
        contactForm.addEventListener("submit", validateContactForm);
    }
}

/* ======================== Execute the initialisation function once the window ======================= */
window.onload = init;

