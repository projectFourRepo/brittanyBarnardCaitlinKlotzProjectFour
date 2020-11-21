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
    console.log("Inside makeup promise", makeupProducts);
    
    //storing search item so it can be passed through display makeup method
    const searchItems = search;
    //get promise back
    $.when(makeupProducts).then((result) => {
        console.log(result);

        makeupApp.displayMakeup(result, searchItems);
    }).fail((error) => {
        console.log(error);
    });
} 

//display makeup on the page
makeupApp.displayMakeup = function(makeupItems, search) {
    const products = makeupItems;
    console.log(products);

    const searchItem = search;
    console.log(searchItem);

    //empty makeup gallery before returning next search
    $(".makeupGallery").html("");

    //move through array to find product_type property inside each object
    products.filter((product, index) => {
        if (product.product_type === searchItem){
            const htmlProduct = `
                <div class="searchItem">
                    <img src="${product.image_link}" alt="${product.description}">
                    <h3>${product.brand}</h3>
                    <h4>${product.name}</h4>
                    <!-- <p class="description">${product.description}</p> -->
                    <p>${product.tag_list}</p>
                    <!-- <p>${product.product_colors.map(function(index) {return `product.product_colors[${index}].hex_value`})} ${product.product_colors.map(function() {return ".color_names"})}</p> -->
                    <p>${product.price_sign} ${product.price} ${product.currency}</p>
                    <p>${product.rating}</p>
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
        console.log(searchItems);


        
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


