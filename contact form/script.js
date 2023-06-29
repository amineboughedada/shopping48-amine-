document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  let data = {
      name: name,
      email: email,
      message: message
  };

  let json = JSON.stringify(data);

  let blob = new Blob([json], {type: "application/json"});
  let url  = URL.createObjectURL(blob);

  let a = document.createElement('a');
  a.download = "data.json";
  a.href = url;
  a.click();
});