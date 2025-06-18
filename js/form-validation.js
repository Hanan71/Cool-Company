// js/form-validation.js

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // منع الإرسال الافتراضي
    let form = e.target;
    let valid = true;
  
    // التحقق من الحقول
    ['name', 'email', 'message'].forEach(function (id) {
      let input = document.getElementById(id);
      if (!input.value.trim()) {
        input.classList.add('is-invalid');
        valid = false;
      } else {
        input.classList.remove('is-invalid');
      }
    });
  
    if (valid) {
      alert("Message sent successfully!");
      form.reset();
    }
  });
  