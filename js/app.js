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

  /* Galleri */
  var years=Object.keys(GALLERY).sort(function(a,b){return b-a});
  var yearsEl=document.getElementById('years'), view=document.getElementById('galleryView');
  var hues=[222,212,232,200,240,218];
  function tile(seed){var h=hues[seed%hues.length];return 'background:linear-gradient(135deg,hsl('+h+' 55% 32%),hsl('+(h+18)+' 60% 22%))'}
  function photoList(ev){
    if(Array.isArray(ev.photos)) return ev.photos;
    var a=[];for(var i=0;i<ev.photos;i++)a.push({});return a;
  }
  var current=null;

  function renderYear(y){
    yearsEl.innerHTML=years.map(function(yr){return '<a href="#galleri-'+yr+'"'+(yr===y?' aria-current="page"':'')+'>'+yr+'</a>'}).join('');
    var evs=GALLERY[y]||[];
    if(!evs.length){view.innerHTML='<p class="empty">Der er ingen albums fra '+y+' endnu.</p>';return}
    view.innerHTML='<div class="events">'+evs.map(function(ev,i){
      var list=photoList(ev), c=list[0]&&list[0].src;
      var cover=c?'<div class="cover"><img src="'+esc(c)+'" alt="" loading="lazy"></div>':'<div class="cover" style="'+tile(i+2)+'">'+esc(ev.name)+'</div>';
      return '<a class="event" href="#galleri-'+y+'-'+esc(ev.id)+'">'+cover+'<div class="meta"><b>'+esc(ev.name)+(ev.example?'<span class="tag">Eksempel</span>':'')+'</b><span>'+esc(ev.date)+' · '+list.length+' billeder</span></div></a>';
    }).join('')+'</div>';
  }
  function renderEvent(y,ev){
    yearsEl.innerHTML=years.map(function(yr){return '<a href="#galleri-'+yr+'"'+(yr===y?' aria-current="page"':'')+'>'+yr+'</a>'}).join('');
    var list=photoList(ev); current={ev:ev,list:list};
    view.innerHTML='<div class="crumbs"><a href="#galleri-'+y+'">'+y+'</a><span aria-hidden="true">/</span><span>'+esc(ev.name)+'</span>'+(ev.example?'<span class="tag">Eksempelbilleder</span>':'')+'</div>'+
      '<div class="photos">'+list.map(function(p,i){
        var inner=p.src?'<img src="'+esc(p.src)+'" alt="'+esc(p.alt||ev.name)+'" loading="lazy">':'Billede '+(i+1);
        return '<button data-i="'+i+'" aria-label="Vis billede '+(i+1)+'"><div class="ph" style="'+(p.src?'':tile(i))+'">'+inner+'</div></button>';
      }).join('')+'</div>';
  }
  function route(){
    var h=location.hash.replace('#','');
    var m=/^galleri-(\d{4})(?:-([a-z0-9-]+))?$/.exec(h);
    if(m&&GALLERY[m[1]]){
      var ev=m[2]&&GALLERY[m[1]].filter(function(e){return e.id===m[2]})[0];
      if(ev)renderEvent(m[1],ev);else renderYear(m[1]);
      document.getElementById('galleri').scrollIntoView();
    }else if(!view.innerHTML){renderYear(years.filter(function(y){return GALLERY[y].length})[0]||years[0])}
  }
  window.addEventListener('hashchange',route); route();

  /* Lightbox */
  var lb=document.getElementById('lb'), stage=document.getElementById('lbStage'), cnt=document.getElementById('lbCount'), idx=0;
  function show(i){
    var n=current.list.length; idx=(i+n)%n; var p=current.list[idx];
    stage.innerHTML=p.src?'<img src="'+esc(p.src)+'" alt="'+esc(p.alt||current.ev.name)+'">':'<div class="ph" style="'+tile(idx)+'">Billede '+(idx+1)+'</div>';
    cnt.textContent=current.ev.name+' · '+(idx+1)+' af '+n;
  }
  view.addEventListener('click',function(e){var b=e.target.closest('button[data-i]');if(!b)return;lb.hidden=false;show(+b.dataset.i);document.getElementById('lbClose').focus()});
  document.getElementById('lbClose').onclick=function(){lb.hidden=true};
  document.getElementById('lbPrev').onclick=function(){show(idx-1)};
  document.getElementById('lbNext').onclick=function(){show(idx+1)};
  document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1)});

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
