import "./modules/lightSlider";
import "./modules/burgerMenu";
import "./modules/favicon";

// Reloads page whenever the resolution changes
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});

// init safari image fix
objectFitImages();