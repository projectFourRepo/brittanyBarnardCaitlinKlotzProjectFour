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
    console.log("eyeliner", makeupProducts);

    //get promise back

    $.when(makeupProducts).then((result) => {
        console.log(result);
    })
} 

//get input (event listener)
makeupApp.displayMakeup = function() {
    //listen for submit
    $("#searchButton").on("click", function(e){
        e.preventDefault();
        //store value in text field in a variable
        const searchInput = $("#makeupSearch").val();
        console.log(searchInput);
        //pass variable through relevant param
        //compare search input available params
            //to the lowercase value
            makeupApp.makeupPromise();
    })

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


    
//display input on page
//print search on page param(stretch)
//display results with tags (stretch)
    //create html for the results
        //img
        //price
        //name

//STRETCH:
//create <p> tag
    //set a starting number of stock
    //decrease stock
//display number in each result
//buy now button

//initialize app
makeupApp.init = function() {
    // console.log("initialized:)");
    makeupApp.getMakeup();
    makeupApp.displayMakeup();
}

//make the doc ready
$(function() {
    // console test
    console.log("I'm ready!");
    //call init
    makeupApp.init();
});


