/** Add any JavaScript you need to this file. */
function loadMenu(id) {
  let el = document.getElementById(id);

  this.active(el, !el.classList.contains('active'));
}

function loadHiphop(id) {
  let el = document.getElementById(id);
  let hiphop = document.getElementById('hiphop');
  let hiphopIntro = document.getElementById('hiphop-intro');
  let hiphopTeachers = document.getElementById('hiphop-teachers');
  let hiphopScheduler = document.getElementById('hiphop-scheduler');

  if (!el) return;

  this.active(hiphopIntro, false);
  this.active(hiphopTeachers, false);
  this.active(hiphopScheduler, false);

  this.active(hiphop, false);
  this.active(el, true);
}

function active(el, active) {
  if (!active) {
    el.classList.remove('active');
  } else {
    el.classList.add('active');
  }
}

function submitContact() {
  let form = document.getElementById('contactForm');
  let firstName = document.getElementById('firstName').value || '';

  if (firstName === '') {
    alert('please input');
    return;
  }

  form.submit();
}

function subscribeEmail() {
  let form = document.getElementById('emailForm');
  let email = document.getElementById('email').value || '';

  if (email === '') {
    alert('please input email');
    return;
  }

  form.submit();
}


this.loadHiphop('hiphop-intro');
