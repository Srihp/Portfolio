/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
$(document).ready(() => $('#contact-form').submit(function(e) {
    const name = document.getElementById('inputName');
    const email = document.getElementById('inputEmail');
    const message = document.getElementById('inputMessage');
    if (!name.value || !email.value || !message.value) {
      alertify.error('Please check your entries');
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/sriharigohan1@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      return alertify.success('Message sent');
    }
  }));