//launch with : docker-compose run node node exercise-1/string.js

    function ucfirst(str) {
        if(typeof str !== "string" || !str) return '';

        return str[0].toUpperCase() + str.substring(1);
    }  

    function capitalize(str) {
        if(typeof str !== "string" || !str) return '';

        return str.toLowerCase().split(" ").map(function(item) {
            return ucfirst(item);
        }).join(" ");
    }

    function camelCase(str) {
        //premiere lettre de chaque mot en MAJ + coller les mots
        if(typeof str !== "string" || !str) return '';
    
        return str.toLowerCase().split(/[^a-zA-Z0-9]/).map(function(item) {
             return ucfirst(item);
        }).join("");
    }

    function snake_case(str){
        //joint les mots par des underscore en MIN
        if(typeof str !== "string" || !str) return '';
        
        return str.toLowerCase().split(/[^a-zA-Z0-9]/).map(function(item) {
            return item;
       }).join("_");       
    }



    // console.log(snake_case(" test"));
    // console.log(snake_case("Test"));
    // console.log(snake_case(" test"));
    // console.log(snake_case("test Test_tst"));   
    // console.log(snake_case(""));  
    // console.log(snake_case(null));  
    // console.log(snake_case({}));
    // console.log(snake_case("ToggleCase is_the coolest")); 