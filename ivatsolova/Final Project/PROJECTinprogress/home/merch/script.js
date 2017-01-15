"use strict";

(function () {
    var shirts = [
        {
            title: 'Black top',
            url: 'shirts/women black top.jpg',
            price: 20,
            desc: 'No sleeves, high neck black top',
            category: 'women shirts'
    },
        {
            title: 'Grey t-shirt',
            url: 'shirts/men grey t-shirt.jpg',
            price: 30,
            desc: 'short sleeves grey t-shirt',
            category: 'men shirts'
    },
        {
            title: 'Denim jacket',
            url: 'shirts/women denim jacket.jpg',
            price: 35,
            desc: 'Tno sleeves denim jacket',
            category: 'women shirts'
    },
        {
            title: 'Red hoodie',
            url: 'shirts/women red hoodie.jpg',
            price: 50,
            desc: 'long sleeves red hoodie',
            category: 'women shirts'
    },
        {
            title: 'Skull sweater',
            url: 'shirts/women skull sweater.jpg',
            price: 70,
            desc: 'long sleeves printed skull sweater',
            category: 'women shirts'
    },
        {
            title: 'Black n white t-shirt',
            url: 'shirts/men black n white t-shirt.jpg',
            price: 35,
            desc: 'short sleeves black and white t-shirt',
            category: 'men shirts'
    },
        {
            title: 'Blue t-shirt',
            url: 'shirts/men blue t-shirt.jpg',
            price: 30,
            desc: 'short sleeves blue t-shirt',
            category: 'men shirts'
    },
        {
            title: 'Grey hoodie short',
            url: 'shirts/men grey hoodie short sleeves.jpg',
            price: 40,
            desc: 'short sleeves grey hoodie',
            category: 'men shirts'
    },
        {
            title: 'Grey hoodie long',
            url: 'shirts/men grey hoodie.jpg',
            price: 80,
            desc: 'long sleeves grey hoodie',
            category: 'men shirts'
    },
  ];

    var shirtModel =
        '<div class="col-sm-3 col-lg-3 col-md-3">\n' +
        '  <div class="thumbnail">\n' +
        '    <img src="PUT-HERE-SHIRT-IMAGE" alt="">\n' +
        '    <div class="caption">\n' +
        '      <h4 class="pull-right">$PUT-HERE-SHIRT-PRICE</h4>\n' +
        '      <h4><a href="#">PUT-HERE-SHIRT-TITLE</a></h4>\n' +
        '      <p>PUT-HERE-SHIRT-DESC</p>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>';

    function filterByCategory(category) {
        var filteredShirts = shirts.filter(function (shirt) {
            return category === "all" || shirt.category === category;
        });

        filteredShirts.forEach(function (shirt) {
            var model = shirtModel
                .replace("PUT-HERE-SHIRT-IMAGE", shirt.url)
                .replace("PUT-HERE-SHIRT-TITLE", shirt.title)
                .replace("PUT-HERE-SHIRT-PRICE", shirt.price)
                .replace("PUT-HERE-SHIRT-DESC", shirt.desc)

            $('#shirts-container').append(model);
        });
    }

    filterByCategory("all");

    $("#select-category").click(function (event) {
        event.preventDefault();
        console.log(event.target);
        console.log(this);
    });

})();