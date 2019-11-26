//launch with : docker-compose run node node exercise-1/string.js

    function ucfirst(str) {
        if(typeof str !== "string" || !str) return '';

        return str[0].toUpperCase() + str.substring(1);
    }  

    function capitalize(str) {
        if(typeof str !== "string" || !str) return '';

        var test = str.split("_").join(" ");
        return test.toLowerCase().split(" ").map(function(item) {
            return ucfirst(item);
        }).join(" ");
    }

    function camelCase(str) {
        if(typeof str !== "string" || !str) return '';

        var test = capitalize(str).replace(/ /g,"");
        return test;
    }

    console.log(camelCase("test"));
    console.log(camelCase("Test"));
    console.log(camelCase(" test"));
    console.log(camelCase("test Test_tst"));   
    console.log(camelCase(""));  
    console.log(camelCase(null));  
    console.log(camelCase({}));
    console.log(camelCase("ToggleCase is_the coolest")); 