$(function() {

    $.getJSON("http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
        function(data) {
            console.log(data.drinks);

            data.drinks.forEach(element => {

                $("#category-list").append("<li>" + element.strCategory + "</li>");
            });

            $("#category-list > li").click(function(e) {
                e.preventDefault();
                var value = $(this).html();
                $.getJSON("http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + value,
                    function(data) {
                        var drinksDiv = $("#category-drinks").empty();
                        data.drinks.forEach(function(element) {
                            var drinkElement = "<div class=\"drink\"><span class=\"name\">" + element.strDrink + "</span><img src=\"" + element.strDrinkThumb + "\" /></div>";
                            $("#category-drinks").append(drinkElement);
                        });
                    }
                );
            });
        }
    );
});