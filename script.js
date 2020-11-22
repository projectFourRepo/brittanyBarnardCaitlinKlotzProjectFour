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
makeupApp.makeupPromise = (search) => {
    //create a constant to store our ajax call
    const makeupProducts = makeupApp.getMakeup();
    
    //storing search item so it can be passed through display makeup method
    const searchItems = search;
    //get promise back
    $.when(makeupProducts).then((result) => {
        makeupApp.displayMakeup(result, searchItems);
    }).fail(() => {
        $(".makeupGallery").html("Sorry our search engine is down! Please try again later.");
        //on Sunday, we were experiencing 503 errors and it was suggested that we create some dummy data so you would be able to see how our app would work
        $(".productType").html(searchItems);

        for (i = 0; i < 3; i++) {
            const htmlProduct = `
                <div class="searchItem">
                    <img src="http://lorempixel.com/200/200/fashion" alt="fashion placeholder image">
                    <h3>Product Brand</h3>
                    <h4>Name of Product</h4>
                    <p>$26.00CAD</p>
                </div>
            `;
        $(".makeupGallery").append(htmlProduct);
        }
    });
} 

//display makeup on the page
makeupApp.displayMakeup = function(makeupItems, search) {
    const products = makeupItems;
    const searchItem = search;

    //empty makeup gallery before returning next search
    $(".makeupGallery").html("");

    //set users search value to the heading in results container
    $(".productType").html(searchItems);
    //move through array to find product_type property inside each object
    products.filter((product, index) => {
        if (product.product_type === searchItem){
            const htmlProduct = `
                <div class="searchItem">
                    <img src="${product.image_link}" alt="${product.description}">
                    <h3>${product.brand}</h3>
                    <h4>${product.name}</h4>
                    <p>${product.price_sign} ${product.price.toFixed(2)} ${product.currency}</p>
                </div>
            `;
            $(".makeupGallery").append(htmlProduct);
        }
    });

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
    $("button").on("click", function(e) {
        e.preventDefault();

        const searchItems = $(this).val();

        // retrieve promise from ajax call


        makeupApp.makeupPromise(searchItems);

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


