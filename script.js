//create namespace
const makeupApp = {};

//make ajax call
makeupApp.getMakeup = function() {
    return $.ajax ({
        //url
        url: "https://makeup-api.herokuapp.com/api/v1/products.json",
        //method
        method: "GET",
        //datatype
        dataType: "json"
    })
}

//store promise
makeupApp.makeupPromise = () => {
    //create a constant to store our ajax call
    const makeupProducts = makeupApp.getMakeup();
    console.log("Inside makeup promise", makeupProducts);

    //get promise back
    $.when(makeupProducts).then((result) => {
        console.log(result);

        makeupApp.displayMakeup(result);
    }).fail((error) => {
        console.log(error);
    });
} 

//get input (event listener)
makeupApp.displayMakeup = function(makeupItems) {
    const products = makeupItems;
    console.log(products);
    
    //store user search value in text field in a variable
    const searchInput = $("#makeupSearch").val();
    console.log(searchInput);

    // NOTE
        // when the user selects one of the items in the drop down menu:
            // compare the id of the item to value of product_type
            // display the products that have the same product_type value
    // REVIEW
        // event listener:
            // how does the event listener know which item has been selected
                // UNLESS we're actually using a SELECT menu (like the monkey art code along)
            // have the event listener on the container for the li's/buttons?
            // $("li").on("click", function() {})
                // have the ids as values for the li's as well
                // store $(this).val() in a variable
                    // THEN compare to API
                    // this value can be stored inside of the event listener, and then called upon inside of the displayMakeup method because they should be within the same scope
                // no need to prevent default


    // products.forEach((product) => {
        //     console.log(product);
        // })


        //pass variable through relevant param
        //compare search input available params
        //to the lowercase value



        // compare searchInput to product_type

    //display input on page
//print search on page param(stretch)
//display results with tags (stretch)
    //create html for the results
        //img
        //price
        //name

}

//search engine:
//form
    //text field
        //params(product type & category)
        //stretch goal params: price/price range, product brand & tags
    //submit button
        //prevent default
    //label for text field

//take input


    


//STRETCH:
//create <p> tag
    //set a starting number of stock
    //decrease stock
//display number in each result
//buy now button

// drop down with search

// create an event listener to listen for when a search item has been clicked on
makeupApp.createEventListeners = function() {
    //listen for submit
    $("#searchButton").on("click", function (e) {
        e.preventDefault();
        
        // retrieve promise from ajax call
        makeupApp.makeupPromise();
        // display makeup on the page
        makeupApp.displayMakeup();
    })
}


//initialize app
makeupApp.init = function() {
    makeupApp.createEventListeners();
}

//make the doc ready
$(function() {
    //call init
    makeupApp.init();
});


