/* REPLAY site — shared header, footer and helpers */
(function () {
  var REMOTE = 'https://www.replaymasters.eu'; // images still hosted on the current site
  window.REPLAY_REMOTE = REMOTE;

  var LOGO = '<symbol id="replay-logo" viewBox="0 0 644 131"><g fill="currentColor">' +
    '<path d="M608.4,19.8c-0.7,0-1.3,0.4-1.7,1c-1.6,2.7-3.3,5.5-5,8.5c-2,3.3-4,6.7-6,10.1s-4,6.8-6.1,10.2c-1.4,2.3-2.8,4.6-4.1,6.7c-0.8,1.3-2.6,1.3-3.4,0c-3.3-5.4-6.6-11-10-16.8c-3.8-6.4-7.4-12.6-11-18.6c-0.4-0.6-1-1-1.7-1h-16c-1.5,0-2.5,1.7-1.7,3c5,8.6,10.3,17.1,15.8,25.7c6,9.4,11.8,18.8,17.2,28.2c0.2,0.3,0.3,0.7,0.3,1v32.5c0,1.1,0.9,2,2,2h13.7c1.1,0,2-0.9,2-2V77.7c0-0.4,0.1-0.7,0.3-1c2.3-3.9,5-8.3,8-13.1c3.1-5,6.3-10.1,9.5-15.3s6.3-10.3,9.4-15.2c2.3-3.7,4.4-7.1,6.3-10.2c0.8-1.3-0.1-3-1.7-3L608.4,19.8L608.4,19.8z"/>' +
    '<path d="M299.8,29.3c-3-3-6.4-5.3-10.4-7s-8.3-2.6-12.8-2.6h-39.2c-1.1,0-2,0.9-2,2v11.7c0,1.1,0.9,2,2,2h37.3c2.8,0,5.2,0.5,7.3,1.5c2.1,1,3.9,2.3,5.3,3.9c1.4,1.6,2.5,3.4,3.3,5.5s1.1,4.2,1.1,6.3s-0.3,4.1-0.9,6.1c-0.6,1.9-1.5,3.7-2.7,5.2c-1.2,1.5-2.8,2.7-4.7,3.6s-4.2,1.3-6.8,1.3h-39.2c-1.1,0-2,0.9-2,2v39.5c0,1.1,0.9,2,2,2h13.7c1.1,0,2-0.9,2-2V86.7c0-1.1,0.9-2,2-2h18.6c5.9,0,11.1-0.8,15.6-2.5c4.5-1.6,8.2-3.9,11.2-6.8s5.2-6.3,6.7-10.2c1.5-3.9,2.3-8.1,2.3-12.6s-0.9-8.8-2.6-12.8S302.8,32.2,299.8,29.3"/>' +
    '<path d="M134,19.8h64c1.1,0,2,0.9,2,2v11.5c0,1.1-0.9,2-2,2h-64c-1.1,0-2-0.9-2-2V21.8C132,20.7,132.9,19.8,134,19.8z"/>' +
    '<path d="M134,58.7h64c1.1,0,2,0.9,2,2v11.6c0,1.1-0.9,2-2,2h-64c-1.1,0-2-0.9-2-2V60.7C132,59.6,132.9,58.7,134,58.7z"/>' +
    '<path d="M134,96.6h64c1.1,0,2,0.9,2,2v11.5c0,1.1-0.9,2-2,2h-64c-1.1,0-2-0.9-2-2V98.6C132,97.5,132.9,96.6,134,96.6z"/>' +
    '<path d="M25.5,67h13.4c1.1,0,2,0.9,2,2v41c0,1.1-0.9,2-2,2H25.5c-1.1,0-2-0.9-2-2V69C23.5,67.9,24.4,67,25.5,67z"/>' +
    '<path d="M357.1,19.7h-13.7c-1.1,0-2,0.9-2,2v88.5c0,1.1,0.9,2,2,2H406c1.1,0,2-0.9,2-2V98.5c0-1.1-0.9-2-2-2h-44.9c-1.1,0-2-0.9-2-2V21.7C359.1,20.6,358.2,19.7,357.1,19.7L357.1,19.7z"/>' +
    '<path d="M460.8,111l22.8-49.1c0.7-1.5,2.9-1.5,3.6,0L510,111c0.3,0.7,1,1.2,1.8,1.2H527c1.5,0,2.4-1.5,1.8-2.9l-43-90.6h-1l-43.1,90.6c-0.6,1.3,0.3,2.9,1.8,2.9H459C459.8,112.2,460.5,111.7,460.8,111L460.8,111z"/>' +
    '<path d="M92.3,69.8c3.5-5.2,5.3-11.4,5.3-18.4c0-4.7-0.8-8.9-2.4-12.9c-1.6-3.9-3.8-7.3-6.6-10.2c-2.8-2.8-6.2-5-10.1-6.6s-8.3-2.3-13-2.3H25.3c-1.1,0-2,0.9-2,2v11.7c0,1.1,0.9,2,2,2h40.2c3.1,0,5.6,0.6,7.5,1.8s3.3,2.6,4.3,4.3s1.7,3.5,2,5.3c0.3,1.9,0.5,3.5,0.5,4.8c0,2.6-0.4,4.9-1.3,6.8c-0.9,1.9-2,3.6-3.4,4.9c-1.4,1.3-2.9,2.3-4.6,2.9s-3.4,0.9-5,0.9H53c-1.6,0-2.5,1.8-1.7,3.1c7.3,11.3,15.9,24.7,18,27.6c3.4,4.6,6.8,9.2,10.3,13.8c0.4,0.5,1,0.8,1.6,0.8h16.3c1.6,0,2.6-1.9,1.6-3.2c-6.4-8.7-12.8-17.4-19.3-26c-0.8-1-0.4-2.4,0.7-3C85.3,77.8,89.2,74.4,92.3,69.8"/>' +
    '</g></symbol>';

  var NAV = [
    ['home', 'Home', './'],
    ['masters', 'The Masters', 'the-masters.html', [
      ['The Consortium', 'the-masters.html#the-consortium'],
      ['Facilities and Equipment', 'the-masters.html#facilities-and-equipment']]],
    ['people', 'People', 'people.html', [
      ['Teachers', 'teachers.html'], ['Special Guests', 'special-guests.html'], ['Students', 'students.html']]],
    ['curriculum', 'Course Curriculum', 'course-curriculum.html', [
      ['Academic Programme', 'course-curriculum.html#academic-programme'], ['The Thesis', 'course-curriculum.html#the-thesis'],
      ['Mobility Scheme', 'course-curriculum.html#mobility-scheme'], ['Diploma Award', 'course-curriculum.html#diploma-award']]],
    ['admissions', 'Admissions and Requirements', 'admissions-and-requirements.html', [
      ['Application Requirements', 'admissions-and-requirements.html#application-req'], ['Selection Criteria', 'admissions-and-requirements.html#selection-criteria'],
      ['Appeal', 'admissions-and-requirements.html#appeal'], ['Privacy Statement', 'admissions-and-requirements.html#privacy'],
      ['Proof of proficiency in the English language', 'admissions-and-requirements.html#proof'], ['Tuition Fees', 'admissions-and-requirements.html#tuition'],
      ['Scholarships', 'admissions-and-requirements.html#scholarships']]],
    ['games', 'Games', 'games.html'],
    ['faq', 'FAQ', 'faq.html'],
    ['contact', 'Contact Us', 'contact-us.html']
  ];

  var page = document.body.getAttribute('data-page') || '';
  var logoSvg = function (cls) { return '<svg class="logo ' + (cls || '') + '" viewBox="0 0 644 131" role="img" aria-label="REPLAY"><use href="#replay-logo"/></svg>'; };
  window.REPLAY_LOGO = logoSvg;

  var menu = NAV.map(function (n) {
    var cur = n[0] === page ? ' aria-current="page"' : '';
    var sub = n[3] ? '<ul class="sub">' + n[3].map(function (s) { return '<li><a href="' + s[1] + '">' + s[0] + '</a></li>'; }).join('') + '</ul>' : '';
    return '<li' + (n[3] ? ' class="has"' : '') + '><a href="' + n[2] + '"' + cur + '>' + n[1] + '</a>' + sub + '</li>';
  }).join('');

  var head = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' + LOGO + '</svg>' +
    '<div class="callbar" role="status"><div class="wrap"><span class="dot" aria-hidden="true"></span><span>Applications are open · 7 October 2026 to 8 January 2027</span><a class="apply" href="https://mundus.ulusofona.pt" target="_blank" rel="noopener">Apply now ↗</a></div></div>' +
    '<header class="site"><div class="wrap"><a class="home" href="./" aria-label="REPLAY home">' + logoSvg() + '</a>' +
    '<button class="burger" id="burger" aria-expanded="false" aria-controls="menu">Menu</button>' +
    '<nav aria-label="Main"><ul class="menu" id="menu">' + menu + '</ul></nav></div></header>';

  var ERASMUS = 'https://erasmus-plus.ec.europa.eu/pt-pt/opportunities/opportunities-for-organisations/cooperation-among-organisations-and-institutions/erasmus-mundus-joint-masters';
  var stars = '';
  for (var i = 0; i < 12; i++) {
    var a = i * Math.PI / 6, cx = 405 + 180 * Math.sin(a), cy = 270 - 180 * Math.cos(a), p = [];
    for (var k = 0; k < 10; k++) { var r = k % 2 ? 11.6 : 30, t = k * Math.PI / 5; p.push((cx + r * Math.sin(t)).toFixed(1) + ',' + (cy - r * Math.cos(t)).toFixed(1)); }
    stars += '<polygon points="' + p.join(' ') + '"/>';
  }
  var foot = '<footer class="site"><div class="wrap"><div class="top">' + logoSvg() +
    '<div class="cols"><div><h3>Follow</h3><ul>' +
    '<li><a href="https://www.facebook.com/replaymasterseu">Facebook</a></li><li><a href="https://www.linkedin.com/company/replay-masters-eu/">LinkedIn</a></li>' +
    '<li><a href="https://www.instagram.com/replaymasterseu/">Instagram</a></li><li><a href="https://twitter.com/replaymasterseu">Twitter</a></li></ul></div>' +
    '<div><h3>Partners</h3><ul><li><a href="' + ERASMUS + '">Erasmus Mundus Joint Masters</a></li><li><a href="https://www.em-a.eu/">Erasmus Mundus Association</a></li><li><a href="https://www.filmeu.eu/">FilmEU</a></li></ul></div>' +
    '<div><h3>Contact</h3><ul><li><a href="contact-us.html">Contact Us</a></li><li><a href="faq.html">FAQ</a></li></ul></div></div></div>' +
    '<div class="eu"><a href="' + ERASMUS + '"><svg width="66" height="44" viewBox="0 0 810 540" role="img" aria-label="Flag of the European Union"><rect width="810" height="540" fill="#003399"/><g fill="#ffcc00">' + stars + '</g></svg><span>Co-funded by<br>the European Union</span></a>' +
    '<p class="disc">Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.</p></div>' +
    '<p class="copy">University Lusófona 2026 // Webdesign by Nathaly Kalantar</p></div></footer>';

  var h = document.getElementById('site-header'); if (h) h.outerHTML = head;
  var f = document.getElementById('site-footer'); if (f) f.outerHTML = foot;

  var b = document.getElementById('burger'), m = document.getElementById('menu');
  if (b && m) b.addEventListener('click', function () { var o = m.classList.toggle('open'); b.setAttribute('aria-expanded', o); b.textContent = o ? 'Close' : 'Menu'; });

  // images hosted on replaymasters.eu: if they can't load here, show a striped placeholder instead
  document.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && !t.classList.contains('broken')) { t.classList.add('broken'); if (t.parentElement && !t.parentElement.classList.contains('av')) t.parentElement.classList.add('imgx'); }
  }, true);
  window.R = function (path) { if (/^https?:/.test(path)) return path; return (window.IMGMAP && IMGMAP[path]) || (REMOTE + path); };

  // in-page tabs highlight
  var tabs = document.querySelectorAll('.tabs a[href^="#"]');
  if (tabs.length && 'IntersectionObserver' in window) {
    var map = {};
    tabs.forEach(function (a) { var s = document.getElementById(a.getAttribute('href').slice(1)); if (s) map[s.id] = a; });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { tabs.forEach(function (a) { a.classList.remove('on'); }); map[en.target.id] && map[en.target.id].classList.add('on'); } });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  // shared dialog
  window.openDialog = function (html) {
    var d = document.getElementById('pd');
    if (!d) { d = document.createElement('dialog'); d.id = 'pd'; d.className = 'pd'; document.body.appendChild(d);
      d.addEventListener('click', function (e) { if (e.target === d) d.close(); }); }
    d.innerHTML = '<button class="x" aria-label="Close" onclick="this.closest(\'dialog\').close()">✕</button>' + html;
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  };
  window.initials = function (n) { return n.replace(/[^A-Za-zÀ-ÿ ]/g, ' ').trim().split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase(); };
  window.esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
})();
