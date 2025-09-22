document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "¡Gracias por tu mensaje! Me pondré en contacto pronto.";
  this.reset();
});
