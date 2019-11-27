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

    // function leet(str){
    //     //remplace les voyelle par des chiffres
    // }

    // function prop_access(prairie, "animal.type.name"){
    //     //parcours l'objet pour aller chercher le dernier attribut du chemin``
    //     //si attribut non existant, afficher le chemin jusqu'à l'attribut => "animal.gender not exist"
    //     //si path vide ou null, renvoyer l'objet complet
    // }

    // function verlan(str){
    //     //inverser chaque mot d'une phrase
    // }

    // function yoda(str){
    //     //inverser la position des mots d'une phrase
    // }

    // function vig(str){
    //     //cryptage => Chiffre de Vigenère
    //     //wiwipedia + crypto => yzixisfzy
    // }

    // console.log(snake_case(" test"));
    // console.log(snake_case("Test"));
    // console.log(snake_case(" test"));
    // console.log(snake_case("test Test_tst"));   
    // console.log(snake_case(""));  
    // console.log(snake_case(null));  
    // console.log(snake_case({}));
    // console.log(snake_case("ToggleCase is_the coolest")); 