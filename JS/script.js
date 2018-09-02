$(document).ready(function(){
//riples skinuto sa github-a

$("#header, .info").ripples({
  dropRadius: 20,
  perturbance: 0.003
});              
    
//magnific popout skinuto sa github-a
    
$('.parent-container').magnificPopup({
delegate: 'a', // child items selector, by clicking on it popup will open
type: 'image', 
gallery: {
    enabled:true
    }    
  // other options
});
    
    
    
});