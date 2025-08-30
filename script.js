document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


const sections = document.querySelectorAll(".section");
function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
}
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


const skillSpans = document.querySelectorAll(".skills span");
function revealSkills() {
  skillSpans.forEach((span, idx) => {
    const top = span.getBoundingClientRect().top;
    if(top < window.innerHeight * 0.85){
      setTimeout(() => span.classList.add("visible"), idx * 100);
    }
  });
}
window.addEventListener("scroll", revealSkills);
window.addEventListener("load", revealSkills);


const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0px)`;
  });
});


const footer = document.querySelector("footer");
function revealFooter() {
  const footerTop = footer.getBoundingClientRect().top;
  if(footerTop < window.innerHeight * 0.95){
    footer.classList.add("visible");
  }
}
window.addEventListener("scroll", revealFooter);
window.addEventListener("load", revealFooter);
