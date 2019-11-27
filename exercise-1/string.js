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



