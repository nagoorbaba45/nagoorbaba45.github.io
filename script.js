function contactSubmit(e){
  e.preventDefault();
  alert("Thanks! Your message was prepared. Replace this with a server endpoint or use Formspree/EmailJS.");
  e.target.reset();
}
// small animated accent - optional
document.addEventListener('DOMContentLoaded', ()=>{
  const logo = document.querySelector('.logo');
  if(logo) setInterval(()=> logo.style.opacity = (logo.style.opacity==0.8?1:0.8), 2000);
});