/** Add any JavaScript you need to this file. */
function loadMenu(id) {
  let el = document.getElementById(id);

  this.active(el, !el.classList.contains('active'));
}

function load(id) {
  let el = document.getElementById(id);
  let hiphop = document.getElementById('hiphop');
  let hiphopIntro = document.getElementById('hiphop-intro');
  let hiphopTeachers = document.getElementById('hiphop-teachers');


  let popping = document.getElementById('popping');
  let poppingIntro = document.getElementById('popping-intro');
  let poppingTeachers = document.getElementById('popping-teachers');

  let locking = document.getElementById('locking');
  let lockingIntro = document.getElementById('locking-intro');
  let lockingTeachers = document.getElementById('locking-teachers');

  let breaking = document.getElementById('breaking');
  let breakingIntro = document.getElementById('breaking-intro');
  let breakingTeachers = document.getElementById('breaking-teachers');

  let tution = document.getElementById('tution');
  let tutionfee = document.getElementById('tution-fee');
  let tutionschedule = document.getElementById('tution-scheduler');

  if (!el) return;

  this.active(hiphopIntro, false);
  this.active(hiphopTeachers, false);


  this.active(hiphop, false);

  this.active(poppingIntro, false);
  this.active(poppingTeachers, false);

  this.active(popping, false);

  this.active(lockingIntro, false);
  this.active(lockingTeachers, false);

  this.active(locking, false);

  this.active(breakingIntro, false);
  this.active(breakingTeachers, false);

  this.active(breaking, false);

  this.active(tutionfee, false);
  this.active(tutionschedule, false);
  this.active(tution, false);

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
  let firstname = document.getElementById('firstName').value || '';
  let lastname = document.getElementById('lastName').value || '';
  let email = document.getElementById('email').value || '';
  let address = document.getElementById('address').value || '';
  if (firstname === '' || lastname === '' || email === '' || address === '') {
    alert('Please fill the whole form, thanks');
    return;
  }

  form.submit();
}

function subscribeEmail() {
  let form = document.getElementById('emailForm');
  let email = document.getElementById('email').value || '';

  if (email === '') {
    alert('Please input your email address');
    return;
  }

  form.submit();
}


this.load('hiphop-intro');

/*this.active(hiphopScheduler, false);
this.active(poppingScheduler, false);
this.active(lockingScheduler, false);
this.active(breakingScheduler, false);
let hiphopScheduler = document.getElementById('hiphop-scheduler');
 let poppingScheduler = document.getElementById('popping-scheduler');
 let lockingScheduler = document.getElementById('locking-scheduler');
let breakingScheduler = document.getElementById('breaking-scheduler');*/
