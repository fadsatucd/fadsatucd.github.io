(function() {
    'use strict';

    const vid = document.getElementById('theme-reveal');
    console.log(vid);

    vid.addEventListener('ended', function() {
        vid.style.display = "none";
        console.log("vid show go byby");
    })

})();
