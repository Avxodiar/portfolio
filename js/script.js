'use strict';

(function() {

  var images = document.querySelectorAll('section figure.maket img');
  images.forEach(function(img) {
    img.addEventListener('click', function(){
      window.open(img.src, "_blank");
    });
  });

})();