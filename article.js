// Mobile nav
var hm=document.getElementById('hm'),mn=document.getElementById('mn'),mx=document.getElementById('mx');
if(hm){hm.addEventListener('click',function(){mn.classList.add('o')});}
if(mx){mx.addEventListener('click',function(){mn.classList.remove('o')});}
if(mn){mn.querySelectorAll('.mn-b a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('o')})});}

// Reading progress bar
(function(){
  var rp=document.createElement('div');
  rp.className='rp';
  document.body.appendChild(rp);
  function upd(){
    var h=document.documentElement,b=document.body;
    var st=h.scrollTop||b.scrollTop;
    var sh=(h.scrollHeight||b.scrollHeight)-h.clientHeight;
    rp.style.width=(sh>0?(st/sh)*100:0)+'%';
  }
  window.addEventListener('scroll',upd,{passive:true});
  window.addEventListener('resize',upd);
  upd();
})();
