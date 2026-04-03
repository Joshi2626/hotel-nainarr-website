// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });
}

// ===== ACTIVE NAV LINK =====
(function () {
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
})();

// ===== BOOKING FORM ALERT =====
var bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;
    var guests = document.getElementById('guests').value;

    if (!checkin || !checkout || !guests) {
      alert('Please fill in all booking fields.');
      return;
    }

    if (new Date(checkout) <= new Date(checkin)) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    alert('Thank you for your interest!\nWe have received your booking request.\nOur team will contact you shortly to confirm your reservation at Hotel Nainarr.');
    bookingForm.reset();
  });
}

// ===== BOOK NOW BUTTONS (room cards) =====
document.querySelectorAll('.book-now-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var roomName = this.closest('.room-card-body').querySelector('h3').textContent;
    alert('You selected: ' + roomName + '\n\nPlease visit our Contact page or call us to complete your booking.\n\nPhone: 0461 235 5524');
  });
});

// ===== CONTACT FORM VALIDATION =====
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('contactName').value.trim();
    var email = document.getElementById('contactEmail').value.trim();
    var message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Basic email format check
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you, ' + name + '!\nYour message has been received.\nWe will get back to you at ' + email + ' within 24 hours.');
    contactForm.reset();
  });
}

// ===== SMOOTH SCROLL for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== SET MIN DATE for check-in/check-out =====
(function () {
  var checkinInput = document.getElementById('checkin');
  var checkoutInput = document.getElementById('checkout');
  if (checkinInput) {
    var today = new Date().toISOString().split('T')[0];
    checkinInput.setAttribute('min', today);

    checkinInput.addEventListener('change', function () {
      if (checkoutInput) {
        checkoutInput.setAttribute('min', this.value);
        if (checkoutInput.value && checkoutInput.value <= this.value) {
          checkoutInput.value = '';
        }
      }
    });
  }
})();
