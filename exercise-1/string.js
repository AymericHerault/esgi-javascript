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

    function leet(str){
        //remplace les voyelle par des chiffres
        // A=4, E=3, I=1, O=0, U=(_), Y=7
        if(typeof str !== "string" || !str) return ''; 
        return str.replace(/[aA]/g, "4").replace(/[eE]/g, "3").
        replace(/[iI]/g, "1").replace(/[oO]/g, "0").replace(/[uU]/g, "_").replace(/[yY]/g, "7");
        
        
    }

    console.log(leet(" test"));
    console.log(leet("Test"));
    console.log(leet("AnacondA"));
    console.log(leet("test Test_tst"));   
    console.log(leet(""));  
    console.log(leet(null));  
    console.log(leet({}));
    console.log(leet("ToggleCase is_the coolest")); 


