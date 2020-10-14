$(document).ready(function () {
    $("#comment").submit(function (event) {
      event.preventDefault();
      if ($("input").val() === " ") {
        alert('enter a valid data')
        return;
      }
      alert('Thank you for contacting us!')
      this.reset();
    });
  });