/* Sidens logik – normalt behøver denne fil ikke at rettes. */
(function(){
  /* Menu */
  var btn=document.getElementById('menuBtn'), nav=document.getElementById('nav');
  var mq=window.matchMedia('(max-width:860px)');
  function setNav(open){btn.setAttribute('aria-expanded',open);nav.hidden=!open}
  function sync(){setNav(!mq.matches)}
  sync(); mq.addEventListener('change',sync);
  btn.addEventListener('click',function(){setNav(nav.hidden)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'&&mq.matches)setNav(false)});

  /* I dag */
  var today=document.querySelector('.day[data-d="'+new Date().getDay()+'"]');
  if(today){today.classList.add('today');var p=document.createElement('span');p.className='pill';p.textContent='I dag';today.querySelector('h3').appendChild(p)}

  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function initials(n){var w=n.split(/\s+/);return (w[0][0]+(w.length>1?w[w.length-1][0]:'')).toUpperCase()}

  /* Trænere */
  document.getElementById('coaches').innerHTML=COACHES.map(function(c){
    var ini='<span class="ini" aria-hidden="true">'+initials(c.name)+'</span>';
    var img=c.photo?'<img src="'+esc(c.photo)+'" alt="'+esc(c.name)+'" loading="lazy" data-ini="'+initials(c.name)+'">':ini;
    return '<figure class="coach"><div class="photo">'+img+'</div><figcaption><b>'+esc(c.name)+'</b>'+(c.grade?'<span class="grade">'+esc(c.grade)+'</span>':'')+'</figcaption></figure>';
  }).join('');
  /* Hvis et billede ikke kan hentes, vises initialer */
  document.querySelectorAll('#coaches img').forEach(function(im){
    im.addEventListener('error',function(){var s=document.createElement('span');s.className='ini';s.setAttribute('aria-hidden','true');s.textContent=im.dataset.ini;im.replaceWith(s)});
  });

  /* Kalender */
  var slot=document.getElementById('calSlot'), src=(typeof CALENDAR_URL!=='undefined'&&CALENDAR_URL)||slot.getAttribute('data-src');
  if(src){
    slot.innerHTML='<iframe src="'+esc(src)+'" title="Brøndby Judo Klubs kalender" loading="lazy"></iframe>';
  }else{
    slot.innerHTML='<div class="cal-empty"><div><h3>Kalenderen vises her</h3><p class="note">Bestyrelsens kalender indsættes i dette felt og opdateres automatisk, når der tilføjes aktiviteter.</p></div></div>';
  }

  /* Logo: vis "BJK" hvis billedet ikke kan hentes */
  document.querySelectorAll('img[data-fallback]').forEach(function(im){
    function swap(){var s=document.createElement('span');s.className='mark'+(im.classList.contains('hero-logo')?' mark-big':'');s.setAttribute('aria-hidden','true');s.textContent=im.dataset.fallback;im.replaceWith(s)}
    if(im.complete&&im.naturalWidth===0)swap();else im.addEventListener('error',swap);
  });

  /* Kopiér mail */
  document.querySelectorAll('.copy').forEach(function(b){
    b.addEventListener('click',function(){
      var t=b.getAttribute('data-copy');
      function done(){b.textContent='Kopieret';setTimeout(function(){b.textContent='Kopiér'},1500)}
      function sel(){var r=document.createRange();r.selectNodeContents(b.parentNode.firstChild);var s=getSelection();s.removeAllRanges();s.addRange(r)}
      try{navigator.clipboard.writeText(t).then(done,sel)}catch(e){sel()}
    });
  });
})();
