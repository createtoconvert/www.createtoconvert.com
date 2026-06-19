(function() {
    // Handle menu toggle clicks
    var menuToggleElement = document.getElementById('menu-toggle');
    if (menuToggleElement !== null) {
        menuToggleElement.addEventListener('click', function(e) {
            if (document.body.className.indexOf('menu-open') >= 0) {
                document.body.className = document.body.className.replace(/\s*menu-open\s*/g, ' ').trim();
                menuToggleElement.setAttribute('aria-expanded', 'false');
            } else {
                document.body.className = (document.body.className + ' menu-open').trim();
                menuToggleElement.setAttribute('aria-expanded', 'true');
            }
            e.preventDefault();
            e.stopPropagation();
        });
    }
})();
