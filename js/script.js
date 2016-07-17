// ********* Initial values *************
var theForm = document.getElementById("form1");
var theForm2 = document.getElementById("form2");
theForm2.style.display = "none";
var otherField = document.getElementById("othertypecontainer");
var selectElement = document.getElementById("pizzaselect");
var theName = document.getElementById("name");
var lastName = document.getElementById("lastName");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
//Error fields
var theNameE = document.getElementById("nameErrorMSG");
var lastNameE = document.getElementById("lastNameErrorMSG");
var phoneE = document.getElementById("phoneErrorMSG");
var emailE = document.getElementById("emailErrorMSG");
//Address fields
var adressType = document.getElementById("addresstype");
var othertype = document.getElementById("othertype");
var street = document.getElementById("street");
var aptnumb = document.getElementById("aptnumb");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zip = document.getElementById("zip");
//Address Error fields
var othertypeE = document.getElementById("otherErrorMSG");
var streetE = document.getElementById("streetErrorMSG");
var aptnumbE = document.getElementById("aptnumbErrorMSG");
var cityE = document.getElementById("cityErrorMSG");
var stateE = document.getElementById("stateErrorMSG");
var zipE = document.getElementById("zipErrorMSG");
var pizzaE = document.getElementById("pizzaErrorMSG");

//Billing Fields
var otherFieldB = document.getElementById("Billingothertypecontainer");
var sameAs = document.getElementById("sameAs");
var theNameB = document.getElementById("Billingname");
var lastNameB = document.getElementById("BillinglastName");
var adressTypeB = document.getElementById("Billingaddresstype");
var othertypeB = document.getElementById("Billingothertype");
var streetB = document.getElementById("Billingstreet");
var aptnumbB = document.getElementById("Billingaptnumb");
var cityB = document.getElementById("Billingcity");
var stateB = document.getElementById("Billingstate");
var zipB = document.getElementById("Billingzip");

//Error Billing Fields
var theNameEB = document.getElementById("BillingnameErrorMSG");
var lastNameEB = document.getElementById("BillinglastNameErrorMSG");
var othertypeEB = document.getElementById("BillingotherErrorMSG");
var streetEB = document.getElementById("BillingstreetErrorMSG");
var aptnumbEB = document.getElementById("BillingaptnumbErrorMSG");
var cityEB = document.getElementById("BillingcityErrorMSG");
var stateEB = document.getElementById("BillingstateErrorMSG");
var zipEB = document.getElementById("BillingzipErrorMSG");
var pizzaEB = document.getElementById("BillingpizzaErrorMSG");

// Pizza fields
var cheeseType = document.getElementById("cheese");
var sauceType = document.getElementById("sauce");
otherField.style.display = "none";
otherFieldB.style.display ="none";

// Credit Card fields.
var selectedCard = document.getElementById("cardselector");
var selectedCardE = document.getElementById("cardselectorErrorMSG");
var cardN = document.getElementById("cardnumber");
var cvcN = document.getElementById("cvcnumber");
var processBT = document.getElementById("processBT");
var cardError = document.getElementById("carderrorMSG");
var cardDate = document.getElementById("cardDate");


// creating a pizza object
var thePizza = new Object(); 
thePizza.price=0;
thePizza.cheesePrice=0;
thePizza.saucePrice=0;
thePizza.extras=0;


// creating a card object
var creditCard = new Object();
    creditCard.cardNumberIsValid = false;
    creditCard.cvcNumerIsValid = false;
    creditCard.dateIsValid = false;



// ******** Total div will follow the scroll on Y axes with transition. ********

    var myTotalBox = document.getElementById("total");
    var myLoop = setInterval(function(){
        myTotalBox.style.top = window.pageYOffset + 10 + "px" ; 
         myTotalBox.style.transition = "all 1s";
            }, 100);


// **************** If "OTHER" in type of address is selected
adressType.addEventListener("change",function(e){
        if(e.target.value =="other"){
            otherField.style.display = "block";
            }else{
            otherField.style.display = "none";
            }
    },false);



//********  Selecting type of dough will display pizza size box.***********
    var myDoughType = document.getElementsByName('dough');
    var i;
    //Add Event listeners to each radio button
    for( i=0; i< myDoughType.length ; i++){
        myDoughType[i].addEventListener("change",openPizzaOption,false);
    }
    // Function gets called on radio button change. Event will be pass automatically to (e)
    function openPizzaOption(e) {
        selectElement.removeAttribute("disabled");
        switch (e.target.value){
                case "hand":
                                selectElement.innerHTML ="";
                            // populate select field
                            var opt = document.createElement("option");
                                opt.value = "";
                                opt.innerHTML = "-- Select Pizza Size --";
                                selectElement.appendChild(opt);
                            var opt1 = document.createElement("option");
                                opt1.value = 9.99;
                                opt1.innerHTML = "Small ($9.99)";
                                selectElement.appendChild(opt1);
                            var opt2 = document.createElement("option");
                                opt2.value = 12.99;
                                opt2.innerHTML = "Medium ($12.99)";
                                selectElement.appendChild(opt2);
                            var opt3 = document.createElement("option");
                                opt3.value = 14.99;
                                opt3.innerHTML = "Large ($14.99)";
                                selectElement.appendChild(opt3);
                    break;
                
                case "thin":
                                selectElement.innerHTML ="";
                            // populate select field
                            var opt = document.createElement("option");
                                opt.value = "";
                                opt.innerHTML = "-- Select Pizza Size --";
                                selectElement.appendChild(opt);
                            var opt1 = document.createElement("option");
                                opt1.value = 11.99;
                                opt1.innerHTML = "Medium ($11.99)";
                                selectElement.appendChild(opt1);
                            var opt2 = document.createElement("option");
                                opt2.value = 13.99;
                                opt2.innerHTML = "Large ($13.99)";
                                selectElement.appendChild(opt2);
                    break;
                
                case "ny":
                                selectElement.innerHTML ="";
                            // populate select field
                            var opt = document.createElement("option");
                                opt.value = "";
                                opt.innerHTML = "-- Select Pizza Size --";
                                selectElement.appendChild(opt);
                            var opt1 = document.createElement("option");
                                opt1.value = 16.99;
                                opt1.innerHTML = "Large($16.99)";
                                selectElement.appendChild(opt1);
                            var opt2 = document.createElement("option");
                                opt2.value = 19.99;
                                opt2.innerHTML = "Extra Large ($19.99)";
                                selectElement.appendChild(opt2);
                    break;
                
                case "gluten":
                                selectElement.innerHTML ="";
                            // populate select field
                            var opt = document.createElement("option");
                                opt.value = "";
                                opt.innerHTML = "-- Select Pizza Size --";
                                selectElement.appendChild(opt);
                            var opt1 = document.createElement("option");
                                opt1.value = 0.99;
                                opt1.innerHTML = "Small ($0.99)";
                                selectElement.appendChild(opt1);
                    break;}      
    };



// Enable of desable pizza fields acording to selection
selectElement.addEventListener("change", enableFields ,false);

function enableFields(e){
            var topings = document.querySelectorAll('input[name=toppings]');
                    if(e.target.value ==""){
                        cheeseType.setAttribute("disabled", "true");
                        sauceType.setAttribute("disabled", "true");
                         for (var i=0; i<topings.length ;i++){topings[i].setAttribute("disabled", "true");}
                        
                    }else{
                        cheeseType.removeAttribute("disabled");
                        sauceType.removeAttribute("disabled");
                        for (var i=0; i<topings.length ;i++){topings[i].removeAttribute("disabled");}
                    }
        };



// add event listener to form
// on form element click 
theForm.addEventListener("change", addIngredients, false);

function addIngredients(e){
    switch (e.target.type) 
    {
        case "radio":
            thePizza.price = 0;
             updateTotal();
            break;
        case "select-one":
                    // do stuff depending on the type of select box is target
                    if((e.target.id != "cheese") && (e.target.id !="sauce"))
                    {
                        // Add price of selected size pizza to pizza object and change style if field was invalid
                        thePizza.price = Number(e.target.value);
                        selectElement.style.border = "1px solid #bda990";
                        pizzaE.innerHTML ="";
                        for( i=0; i< myDoughType.length ; i++)
                        {
                            myDoughType[i].style.outline = "none";
                        } 
                        
                    }else if (e.target.id == "cheese"){
                        thePizza.cheesePrice = Number(e.target.value);
                    }else if (e.target.id == "sauce"){
                        thePizza.saucePrice = Number(e.target.value);
                    }
                 updateTotal();
            break;
        case "checkbox":
        // add topings
               if(e.target.checked == true){
                   thePizza.extras = thePizza.extras + 0.99; 
               }else{
                   thePizza.extras = thePizza.extras - 0.99;
               }
            updateTotal();
            break;
    }
    
}


// function that will display the total on form item click
function updateTotal(){
    if (isNaN(thePizza.price)){thePizza.price=0};
    var x = (thePizza.price + thePizza.cheesePrice + thePizza.saucePrice + thePizza.extras).toFixed(2);
    if (isNaN(x)){x=0.00};
    myTotalBox.innerHTML= "TOTAL: $" + x;
}

//Order pizza button click
var orderButton = document.getElementById("submit");
orderButton.addEventListener("click", validateFormFields,false);


// form will validate all the Address form Fields
function validateFormFields(e){ 
        e.preventDefault(); 
        // array that will keep track of the not valid fields.
        var formIsValid = [];
        // counter will contain 1 for each valid field.
        var counter=0;
        
        // name validation
        var nameEX = new RegExp(/^[a-zA-Z ]+$/);
            // compare with regular expression, if not modifi the css to alert user.
            if (!nameEX.test(theName.value)){
                theNameE.innerHTML ="Please enter a valid name";
                theName.style.border = "2px solid red";
                theName.setAttribute("class", "invalid");
                // push the word invalid to the array to keep track of invalid fields
                formIsValid.push("invalid");
            }else{
                theName.style.border = "1px solid #bda990";
                theName.setAttribute("class", "valid");
                theNameE.innerHTML ="";
                // push the word valid to the array to keep track of valid fields
                formIsValid.push("valid");
            };
        //last name
        if (!nameEX.test(lastName.value)){
                    lastNameE.innerHTML ="Please enter a valid Lastname";
                    lastName.style.border = "2px solid red";
                    lastName.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    lastName.style.border = "1px solid #bda990";
                    lastName.setAttribute("class", "valid");
                    lastNameE.innerHTML ="";
                    formIsValid.push("valid");
                };
        //phone
        var phoneEX = new RegExp(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/);
        if (!phoneEX.test(phone.value)){
                    phoneE.innerHTML ="Please enter a valid phone nubmer";
                    phone.style.border = "2px solid red";
                    phone.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    phone.style.border = "1px solid #bda990";
                    phone.setAttribute("class", "valid");
                    phoneE.innerHTML ="";
                    formIsValid.push("valid");
                };
        //Email
        var emailEX = new RegExp(/\S+@\S+\.\S+/);
        if (!emailEX.test(email.value)){
                    emailE.innerHTML ="Please enter a valid phone nubmer";
                    email.style.border = "2px solid red";
                    email.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    email.style.border = "1px solid #bda990";
                    email.setAttribute("class", "valid");
                    emailE.innerHTML ="";
                    formIsValid.push("valid");
                };
        //Street
        var streetEX = new RegExp(/^[a-zA-Z0-9 ]+$/);
        if (!streetEX.test(street.value)){
                    streetE.innerHTML ="Please enter a valid Street";
                    street.style.border = "2px solid red";
                    street.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    street.style.border = "1px solid #bda990";
                    street.setAttribute("class", "valid");
                    streetE.innerHTML ="";
                    formIsValid.push("valid");
                };
        //apt number
        var aptnumbEX = new RegExp(/^[0-9]+$/);
        if (!aptnumbEX.test(aptnumb.value)){
                    aptnumbE.innerHTML ="Please enter a valid Apt. nubmer";
                    aptnumb.style.border = "2px solid red";
                    aptnumb.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    aptnumb.style.border = "1px solid #bda990";
                    aptnumb.setAttribute("class", "valid");
                    aptnumbE.innerHTML ="";
                    formIsValid.push("valid");
                };
        //city
        if (!nameEX.test(city.value)){
                    cityE.innerHTML ="Please enter a valid City Name";
                    city.style.border = "2px solid red";
                    city.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    city.style.border = "1px solid #bda990";
                    city.setAttribute("class", "valid");
                    cityE.innerHTML ="";
                    formIsValid.push("valid");
                };
        //State
        var stateEX = new RegExp(/^[a-zA-Z]{2}$/);
        if (!stateEX.test(state.value)){
                    stateE.innerHTML ="Please enter a 2 letters State Name";
                    state.style.border = "2px solid red";
                    state.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    state.style.border = "1px solid #bda990";
                    state.setAttribute("class", "valid");
                    stateE.innerHTML ="";
                    formIsValid.push("valid");
                };
    //zip
        var zipEX = new RegExp(/^[0-9]{5}$/);
        if (!zipEX.test(zip.value)){
                    zipE.innerHTML ="Please enter a 5 digits zip code";
                    zip.style.border = "2px solid red";
                    zip.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    zip.style.border = "1px solid #bda990";
                    zip.setAttribute("class", "valid");
                    zipE.innerHTML ="";
                    formIsValid.push("valid");
                };
     //other 
        var showing = otherField.style.display;
        // do this if the Other Address type field is visible
        if(showing =="block"){   
    
                 if (!nameEX.test(othertype.value)){
                    othertypeE.innerHTML ="Please enter Other type of Address";
                    othertype.style.border = "2px solid red";
                    othertype.setAttribute("class", "invalid");
                     formIsValid.push("invalid");
                }else{
                    othertype.style.border = "1px solid #bda990";
                    othertype.setAttribute("class", "valid");
                    othertypeE.innerHTML ="";
                    formIsValid.push("valid");
                };
       };
    
    
    //doht selection
             if(selectElement.value==""){
                    pizzaE.innerHTML ="Please Select your Pizza";
                    selectElement.style.border = "2px solid red";
                    formIsValid.push("invalid");
                 
                 // add style to each pizza type radio button
                  for(i=0; i<myDoughType.length ; i++){
                        console.log(myDoughType[i]);
                        myDoughType[i].style.outline = "2px solid red";
                        }
                }else{
                    
                    selectElement.style.border = "1px solid #bda990";
                    formIsValid.push("valid");
                    pizzaE.innerHTML ="";
                    
                // add style to each pizza type radio button    
                for( i=0; i< myDoughType.length ; i++){
                    myDoughType[i].style.outline = "none";
                        }    
             };
        
        // for loop to go over all the element on the array and see if they are all valid
            for (var i=0; i<formIsValid.length ; i++){
                if(formIsValid[i] == "invalid")
                {
                //There is at least one invalid field scroll back to the top to see errors
                    window.scrollTo(0, 620);  
                    break;
                }else{ 
                    //add 1 to counter if field is valid
                    counter ++;}
            };// end for loop
            
            // if counter is as long as the Array all the fields are valid.
             if( counter == Number(formIsValid.length)){
                 var nextForm = window.confirm("Are you done, with your pizza?") 
                 }
                 
                 
            // user clicked yes so let's go to billing
            if(nextForm){
                theForm.style.display = "none";
                theForm2.style.display = "block";
                window.scrollTo(0, 520); 
                billing();
            };  
    
};// end functio validate




//*********************************** Billing *****************************************

function billing(){
    
    // same as shipping check box click action
    sameAs.addEventListener("click", function(){
        if(sameAs.checked){
            theNameB.value = theName.value;
            lastNameB.value = lastName.value;
            adressTypeB.value = adressType.value;
            othertypeB.value = othertype.value;
            streetB.value = street.value;
            aptnumbB.value = aptnumb.value;
            cityB.value = city.value;
            stateB.value = state.value;
            zipB.value = zip.value;
        }else{
            theNameB.value="";
            lastNameB.value = "";
            adressTypeB.value = "";
            othertypeB.value = "";
            streetB.value = "";
            aptnumbB.value = "";
            cityB.value = "";
            stateB.value = "";
            zipB.value = "";
        }
        
    }, false);
    
}



// **************** If "OTHER Billing" in type of address is selected
adressTypeB.addEventListener("change",function(e){
        if(e.target.value =="other"){
            otherFieldB.style.display = "block";
            }else{
            otherFieldB.style.display = "none";
            }
    },false);



//********************************** Credit Card ***************************************

var isValid = false;

// hide fields until card type has been selected
extra.style.display = 'none';
processBT.addEventListener("click", validateBilling, false);


// Get card type value.
selectedCard.addEventListener("change", function(e){ 
    if (e.target.value == "null"){extra.style.display = 'none';
    }else {extra.style.display = 'block';}
        }, false);




// function that validates if the text input is a number and not letters, and if the field is empty.
function validateBilling(event){
        event.preventDefault();
    
    // form2 validation
            // array that will keep track of the not valid fields.
        var formIsValid = [];
        // counter will contain 1 for each valid field.
        var counter=0;
        
        // name validation
        var nameEX = new RegExp(/^[a-zA-Z ]+$/);
   
            // compare with regular expression, if not modifi the css to alert user.
            if (!nameEX.test(theNameB.value)){
                theNameEB.innerHTML ="Please enter a valid name";
                theNameB.style.border = "2px solid red";
                theNameB.setAttribute("class", "invalid");
                // push the word invalid to the array to keep track of invalid fields
                formIsValid.push("invalid");
            }else{
                theNameB.style.border = "1px solid #bda990";
                theNameB.setAttribute("class", "valid");
                theNameEB.innerHTML ="";
                // push the word valid to the array to keep track of valid fields
                formIsValid.push("valid");
            };
        //last name
        if (!nameEX.test(lastNameB.value)){
                    lastNameEB.innerHTML ="Please enter a valid Lastname";
                    lastNameB.style.border = "2px solid red";
                    lastNameB.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    lastNameB.style.border = "1px solid #bda990";
                    lastNameB.setAttribute("class", "valid");
                    lastNameEB.innerHTML ="";
                    formIsValid.push("valid");
                };
                
        //Street
        var streetEXB = new RegExp(/^[a-zA-Z0-9 ]+$/);
        if (!streetEXB.test(streetB.value)){
                    streetEB.innerHTML ="Please enter a valid Street";
                    streetB.style.border = "2px solid red";
                    streetB.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    streetB.style.border = "1px solid #bda990";
                    streetB.setAttribute("class", "valid");
                    streetEB.innerHTML ="";
                    formIsValid.push("valid");
                };
 
   
        //apt number
        var aptnumbEX = new RegExp(/^[0-9]+$/);
        if (!aptnumbEX.test(aptnumbB.value)){
                    aptnumbEB.innerHTML ="Please enter a valid Apt. nubmer";
                    aptnumbB.style.border = "2px solid red";
                    aptnumbB.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    aptnumbB.style.border = "1px solid #bda990";
                    aptnumbB.setAttribute("class", "valid");
                    aptnumbEB.innerHTML ="";
                    formIsValid.push("valid");
                };
               
        //city
        if (!nameEX.test(cityB.value)){
                    cityEB.innerHTML ="Please enter a valid City Name";
                    cityB.style.border = "2px solid red";
                    cityB.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    cityB.style.border = "1px solid #bda990";
                    cityB.setAttribute("class", "valid");
                    cityEB.innerHTML ="";
                    formIsValid.push("valid");
                };
        //State
        var stateEX = new RegExp(/^[a-zA-Z]{2}$/);
        if (!stateEX.test(stateB.value)){
                    stateEB.innerHTML ="Please enter a 2 letters State Name";
                    stateB.style.border = "2px solid red";
                    stateB.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    stateB.style.border = "1px solid #bda990";
                    stateB.setAttribute("class", "valid");
                    stateEB.innerHTML ="";
                    formIsValid.push("valid");
                };
    //zip
        var zipEX = new RegExp(/^[0-9]{5}$/);
        if (!zipEX.test(zipB.value)){
                    zipEB.innerHTML ="Please enter a 5 digits zip code";
                    zipB.style.border = "2px solid red";
                    zipB.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    zipB.style.border = "1px solid #bda990";
                    zipB.setAttribute("class", "valid");
                    zipEB.innerHTML ="";
                    formIsValid.push("valid");
                };
     //other 
        var showing = otherFieldB.style.display;
        // do this if the Other Address type field is visible
        if(showing =="block"){   
    
                 if (!nameEX.test(othertypeB.value)){
                    othertypeEB.innerHTML ="Please enter Other type of Address";
                    othertypeB.style.border = "2px solid red";
                    othertypeB.setAttribute("class", "invalid");
                     formIsValid.push("invalid");
                }else{
                    othertypeB.style.border = "1px solid #bda990";
                    othertypeB.setAttribute("class", "valid");
                    othertypeEB.innerHTML ="";
                    formIsValid.push("valid");
                };
       };
    
    // Credit Card 
                 if (selectedCard.value =="null"){
                    selectedCardE.innerHTML ="Please select a card type";
                    selectedCard.style.border = "2px solid red";
                    selectedCard.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                }else{
                    selectedCard.style.border = "1px solid #bda990";
                    selectedCardE.innerHTML ="";
                    formIsValid.push("valid");
                };

    
    // Expression to make sure the field contains just numbers
            var justNumbers = new RegExp(/\d/g);
    
        // Validate carDate;
          validateCardDate();
    
// validate cvc number more than 3 digits and only numbes using Expression above.
    if( cvcN.value.length >2 && justNumbers.test(Number(cvcN.value))){ 
                            cvcerrorMSG.innerHTML = "";
                            cvcN.setAttribute("class", "valid"); 
                            cvcN.style.border = "1px solid #bda990";
                            creditCard.cvcNumerIsValid = true;
                            formIsValid.push("valid");
                }else{
                    cvcerrorMSG.innerHTML = "Please, type a valid cvc number";
                    cvcN.style.border = '2px solid red';
                    cvcN.setAttribute("class", "invalid");
                    formIsValid.push("invalid");
                };
    
    
    
  // make sure card field is not empty
            if(!cardN.value == true){
                cardError.innerHTML = "Please, type a valid credit card number";
                cardN.style.border = '2px solid red';
                cardN.setAttribute("class", "invalid");
                formIsValid.push("invalid");
            }else{
                        if (justNumbers.test(Number(cardN.value))){
                            // do if card is just Numbers
                            cardError.innerHTML = "";
                            cardN.setAttribute("class", "valid");
                            formIsValid.push("valid");
                            
                            // call function to validate card type and place to Crecit Card object
                           creditCard.cardNumberIsValid = validatedcarType();
                            console.log(creditCard);
                         }else{
                            cardError.innerHTML = "Please, type only numbers";
                            cardN.style.border = '2px solid red';
                            cardN.setAttribute("class", "invalid");
                             formIsValid.push("invalid");
                            };
            };
    

    // for loop to go over all the element on the array and see if they are all valid
            for (var i=0; i<formIsValid.length ; i++){
                if(formIsValid[i] == "invalid")
                {
                //There is at least one invalid field scroll back to the top to see errors
                    window.scrollTo(0, 620);  
                    break;
                }else{ 
                    //add 1 to counter if field is valid
                    counter ++;}
           
            };// end for loop
    
            // if counter is as long as the Array all the fields are valid.
             if( counter == Number(formIsValid.length) && creditCard.cardNumberIsValid == true && creditCard.dateIsValid == true){
                        window.alert("Thanks you. Your order has been submited.");
                 }

    
}// End function validate card Number



// function that validates if the number enterded belongs to the type of card
function validatedcarType(){
    var cardType = selectedCard.value;
    // process car by type
    switch (cardType){
        case "visa":
            // does Visa match requirements?
            if (cardN.value.charAt(0)=="4" && (cardN.value.length == 13 || cardN.value.length == 16)){
                // card is ok
                cardN.setAttribute("class", "valid");
                 cardN.style.border = "1px solid #bda990";
                    // call luhn method to validate
                    var n = Number(cardN.value);
                    isValid = n.luhn();
                    
                    if(!n.luhn()){
                        cardError.innerHTML = "Your card is not valid";
                        cardN.style.border = '2px solid red';
                        cardN.setAttribute("class", "invalid");
                       return false;
                        
                    }else{cardN.setAttribute("class", "valid"); return true;};
            }else {
                cardError.innerHTML = "A Visa card number must beging with number 4 and contain 13 or 16 digits.";
                cardN.style.border = '2px solid red';
                cardN.setAttribute("class", "invalid");
                return false;
            };
            break;
            
        case "master":
            // does Master Card match requirements?
                var ex = new RegExp(/5[1-5]/);
                //take only the first 2 digits of the creditcard number
                var testString = cardN.value.charAt(0) + cardN.value.charAt(1);
                // run it aginst the Expression
                var beginNumber = ex.test(Number(testString));
            
                if (cardN.value.length == 16 && beginNumber){
                    // card is ok
                    cardN.setAttribute("class", "valid");
                    cardN.style.border = "1px solid #bda990";
                    // call luhn method to validate
                    var n = Number(cardN.value);
                    
                    if(!n.luhn()){
                        cardError.innerHTML = "Your card is not valid";
                        cardN.style.border = '2px solid red';
                        cardN.setAttribute("class", "invalid");
                       return false;
                        
                    }else{cardN.setAttribute("class", "valid"); cardN.style.border = "1px solid #bda990"; return true;};

                }else{
                    cardError.innerHTML = "A MasterCard number must beging with number 51-55 and contain 16 digits.";
                    cardN.style.border = '2px solid red';
                    cardN.setAttribute("class", "invalid");
                    return false;
                };    
            
            break;
            
        case "american":
                 // does American card match requirements?
                var ex = new RegExp(/37/);
                //take only the first 2 digits of the creditcard number
                var testString = cardN.value.charAt(0) + cardN.value.charAt(1);
                // run it aginst the Expression
                var beginNumber = ex.test(Number(testString));
            
                if (cardN.value.length == 15 && beginNumber){
                    // card is ok
                    cardN.cardN.setAttribute("class", "valid");
                    cardN.style.border = "1px solid #bda990";
                    // call luhn method to validate
                    var n = Number(cardN.value);
                    isValid = n.luhn();
                    
                    if(!n.luhn()){
                        cardError.innerHTML = "Your card is not valid";
                        cardN.style.border = '2px solid red';
                        cardN.setAttribute("class", "invalid");
                        return false;
                        
                    }else{cardN.setAttribute("class", "valid"); cardN.style.border = "1px solid #bda990"; return true;};
                }else{
                    cardError.innerHTML = "An Amercian Express number must beging with number 37 and contain 15 digits.";
                    cardN.style.border = '2px solid red';
                    cardN.setAttribute("class", "invalid");
                    return false;
                };    
            break;
            
    }
    
};//End function validate card Type
    

// Function that validates the card date 
function validateCardDate(){
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() +1;
    var currentYear = currentDate.getFullYear();
    console.log(currentMonth + " / " + currentYear);
    
    var exp = new RegExp(/^\d{1,2}\/\d{4}$/);
    // if date has correct format
    if(exp.test(cardDate.value)){    
        
    // split date in day and year and place in to an array
            var y = cardDate.value.split("/");
            // Mon't is large than 12
            if((y[0] >12) || (y[0] <1)){
                dateerrorMSG.innerHTML = "Please, enter a correct month";
                cardDate.style.border = '2px solid red';
                cardDate.setAttribute("class", "invalid");
            }else{
                    // if year is less than todays year
                    if(y[1]< currentYear){
                            dateerrorMSG.innerHTML = "The year you entered has alredy pass";
                            cardDate.style.border = '2px solid red';
                            cardDate.setAttribute("class", "invalid");
                        }else{
                                
                            var myCardDate =  new Date(y[0] +"/"+ currentDay + "/" + y[1]); 
                                    if( myCardDate < currentDate ){
                                        dateerrorMSG.innerHTML = "Your card is expired";
                                        cardDate.style.border = '2px solid red';
                                        cardDate.setAttribute("class", "invalid");
                                    }else{
                            cardDate.setAttribute("class", "valid");
                            cardDate.style.border = "1px solid #bda990";
                            creditCard.dateIsValid = true;
                            dateerrorMSG.innerHTML = "";
                                        }
                            }
            }       
        
       }else{
            dateerrorMSG.innerHTML = "Please, enter a correct Date format MM/YYYY";
            cardDate.style.border = '2px solid red';
            cardDate.setAttribute("class", "invalid");
       };
}//End card date validation




//Expand Number object with luhn method
Number.prototype.luhn = function() {
    var v = String(this.valueOf());
    var l = v.length;
    var arrayNum =[];
    var i;
    // put all the digits in an array
    for (i=0; i<l; i++){
        arrayNum.push(v.charAt(i));
        }
    // reverse to start from the back
    arrayNum.reverse();
    
    // Doble the value starting from the second digit
    for (i=1; i<l ; i=i+2){
        arrayNum[i]= String(arrayNum[i]*2);
    }
    // reverse the array back up
    arrayNum.reverse();
    
    // array to string of digits to add them all
    var z = arrayNum.join("");
    
    // put all the digits in an array individuall again
    // clear array
    arrayNum=[];
    
    for (i=0; i<z.length ; i++){
        arrayNum.push(z.charAt(i));
        }
    var z = arrayNum.join("+");
    if (eval(z)%10 == 0){return true;} else {return false; };
    
}; // End expand Nmber methode






