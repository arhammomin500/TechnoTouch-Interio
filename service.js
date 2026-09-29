/* === TechnoTouch Interio — Service Page JS === */

// Mobile menu toggle
var hm=document.getElementById('hm'),mn=document.getElementById('mn'),mx=document.getElementById('mx');
if(hm&&mn){
  hm.addEventListener('click',function(){mn.classList.add('o');document.body.style.overflow='hidden'});
}
if(mx&&mn){
  mx.addEventListener('click',function(){mn.classList.remove('o');document.body.style.overflow=''});
}
if(mn){
  mn.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){mn.classList.remove('o');document.body.style.overflow=''});
  });
}

// FAQ accordion
document.querySelectorAll('.fq').forEach(function(f){
  var q=f.querySelector('.fq-q');
  if(q)q.addEventListener('click',function(){
    var wasOn=f.classList.contains('on');
    document.querySelectorAll('.fq').forEach(function(x){x.classList.remove('on')});
    if(!wasOn)f.classList.add('on');
  });
});

// Scroll-up button
var su=document.getElementById('su');
if(su){
  window.addEventListener('scroll',function(){
    if(window.scrollY>500)su.classList.add('v');else su.classList.remove('v');
  });
  su.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
}

// Lead form submission (EmailJS with service tag)
function submitLead(e){
  e.preventDefault();
  var f=e.target;
  var btn=f.querySelector('button[type=submit]');
  var origText=btn.innerHTML;
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled=true;
  var params={
    service:f.querySelector('[name=service]').value,
    name:f.querySelector('[name=name]').value,
    email:f.querySelector('[name=email]').value,
    phone:f.querySelector('[name=phone]').value,
    location:f.querySelector('[name=location]')?f.querySelector('[name=location]').value:'',
    size:f.querySelector('[name=size]')?f.querySelector('[name=size]').value:'',
    budget:f.querySelector('[name=budget]')?f.querySelector('[name=budget]').value:'',
    timeline:f.querySelector('[name=timeline]')?f.querySelector('[name=timeline]').value:'',
    message:f.querySelector('[name=message]')?f.querySelector('[name=message]').value:''
  };
  emailjs.send('service_ydayddk','template_wryzkwd',params).then(function(){
    window.location.href='/thank-you.html';
  },function(err){
    btn.innerHTML='<i class="fas fa-exclamation-triangle"></i> Error, try again';
    setTimeout(function(){btn.innerHTML=origText;btn.disabled=false},2500);
    console.error('EmailJS error:',err);
  });
  return false;
}
