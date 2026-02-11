// Sticky nav background on scroll
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  var scrollThreshold = 50;

  window.addEventListener('scroll', function () {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('nav--scrolled');
    } else {
      header.classList.remove('nav--scrolled');
    }
  }, { passive: true });
})();

// Active nav link highlighting
(function () {
  var sections = document.querySelectorAll('main > section');
  var navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');
        navLinks.forEach(function (link) {
          link.classList.toggle('nav-link--active',
            link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-20% 0px -80% 0px' });

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
