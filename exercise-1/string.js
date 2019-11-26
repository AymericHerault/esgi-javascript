//launch with : docker-compose run node node exercise-1/string.js

    function ucfirst(str) {
        if(typeof str !== "string" || !str) return '';

        return str[0].toUpperCase() + str.substring(1);
    }

    console.log(ucfirst("test"));
    console.log(ucfirst("Test"));
    console.log(ucfirst(" test"));
    console.log(ucfirst("test Test tst"));   
    console.log(ucfirst(""));  
    console.log(ucfirst(null));  
    console.log(ucfirst({}));  

    function capitalize(str) {
        if(typeof str !== "string" || !str) return '';

        return str.toLowerCase().split(" ").map(function(item) {
            return ucfirst(item);
        }).join(" ");
    }

    console.log(capitalize("test"));
    console.log(capitalize("Test"));
    console.log(capitalize(" test"));
    console.log(capitalize("test Test tst"));   
    console.log(capitalize(""));  
    console.log(capitalize(null));  
    console.log(capitalize({}));  

    function camelCase(str) {
        if(typeof str !== "string" || !str) return '';

        var test = capitalize(str).replace(/ |_/g,"");
        return test;
    }

    console.log(camelCase("test"));
    console.log(camelCase("Test"));
    console.log(camelCase(" test"));
    console.log(camelCase("test Test_tst"));   
    console.log(camelCase(""));  
    console.log(camelCase(null));  
    console.log(camelCase({}));  