/* Pensum-sidens logik – normalt behøver denne fil ikke at rettes. */
(function(){
  /* Menu */
  var btn=document.getElementById('menuBtn'), nav=document.getElementById('nav');
  var mq=window.matchMedia('(max-width:860px)');
  function setNav(open){btn.setAttribute('aria-expanded',open);nav.hidden=!open}
  function sync(){setNav(!mq.matches)}
  sync(); mq.addEventListener('change',sync);
  btn.addEventListener('click',function(){setNav(nav.hidden)});

  /* Logo-reserve */
  document.querySelectorAll('img[data-fallback]').forEach(function(im){
    function swap(){var s=document.createElement('span');s.className='mark';s.setAttribute('aria-hidden','true');s.textContent=im.dataset.fallback;im.replaceWith(s)}
    if(im.complete&&im.naturalWidth===0)swap();else im.addEventListener('error',swap);
  });

  var BELTS=[
    {id:'alle',  label:'Alle'},
    {id:'gul',   label:'Gul',    kyu:'5. kyu', v:'gul'},
    {id:'orange',label:'Orange', kyu:'4. kyu', v:'orange'},
    {id:'grøn',  label:'Grøn',   kyu:'3. kyu', v:'groen'},
    {id:'blå',   label:'Blå',    kyu:'2. kyu', v:'blaa'},
    {id:'brun',  label:'Brun',   kyu:'1. kyu', v:'brun'},
    {id:'bonus', label:'Bonus',  kyu:'Ekstra teknik', v:'bonus'}
  ];
  var LABELS={
    kast:['Kuzushi · balance','Tsukuri · indgang','Kake · kast'],
    gulv:['Kontrol','Position','Fastholdelse']
  };
  var state={type:'kast',belt:'alle',q:''};

  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function belt(id){return BELTS.filter(function(b){return b.id===id})[0]}
  function norm(s){return String(s).toLowerCase().replace(/-/g,' ')}

  var beltsEl=document.getElementById('belts'), cards=document.getElementById('cards'), count=document.getElementById('count'), q=document.getElementById('q');

  function renderBelts(){
    beltsEl.innerHTML=BELTS.map(function(b){
      var n=PENSUM.filter(function(t){return t.type===state.type&&(b.id==='alle'||t.grade===b.id)}).length;
      var dot=b.v?'<i style="background:var(--belt-'+b.v+')"></i>':'';
      return '<button class="chip" data-belt="'+b.id+'" aria-pressed="'+(state.belt===b.id)+'"'+(n?'':' disabled')+'>'+dot+b.label+' <b>'+n+'</b></button>';
    }).join('');
  }

  function media(t,b){
    var badge='<span class="badge" style="background:var(--belt-'+b.v+');color:var(--belt-'+b.v+'-ink)">'+esc(b.label)+(b.kyu?' · '+esc(b.kyu):'')+'</span>';
    var ph='<div class="no-video"><div><b>'+esc(t.name)+'</b>Ingen video endnu</div></div>';
    if(t.youtube){
      return '<div class="media">'+badge+'<iframe src="https://www.youtube-nocookie.com/embed/'+esc(t.youtube)+'?rel=0" title="'+esc(t.name)+'" loading="lazy" allowfullscreen></iframe></div>';
    }
    if(t.video){
      return '<div class="media">'+badge+'<video controls loop muted playsinline preload="metadata" data-ph="'+esc(ph)+'"><source src="'+esc(t.video)+'" type="video/mp4"></video></div>'+
        '<div class="speed" hidden><button data-rate="0.5" aria-pressed="false">0,5× slowmotion</button><button data-rate="1" aria-pressed="true">1× normal</button></div>';
    }
    return '<div class="media">'+badge+ph+'</div>';
  }

  function render(){
    var qq=norm(state.q.trim());
    var list=PENSUM.filter(function(t){
      return t.type===state.type && (state.belt==='alle'||t.grade===state.belt) &&
        (!qq||norm(t.name).indexOf(qq)>-1||norm(t.danish).indexOf(qq)>-1);
    });
    count.textContent=list.length+(list.length===1?' teknik':' teknikker');
    if(!list.length){cards.innerHTML='<p class="empty">Ingen teknikker passer til søgningen. Prøv et andet ord eller vælg "Alle".</p>';return}
    var L=LABELS[state.type];
    cards.innerHTML=list.map(function(t){
      var b=belt(t.grade)||{label:t.grade,v:'bonus'};
      return '<article class="card">'+media(t,b)+
        '<div class="body"><h3>'+esc(t.name)+'</h3><p class="da">'+esc(t.danish)+'</p>'+
        '<ul class="steps"><li><em>'+L[0]+'</em>'+esc(t.k)+'</li><li><em>'+L[1]+'</em>'+esc(t.t)+'</li><li><em>'+L[2]+'</em>'+esc(t.ka)+'</li></ul></div></article>';
    }).join('');
    /* Videoer: vis pladsholder hvis filen mangler, ellers hastighedsknapper */
    cards.querySelectorAll('video').forEach(function(v){
      var src=v.querySelector('source');
      function missing(){var wrap=v.parentNode;var d=document.createElement('div');d.innerHTML=v.dataset.ph;wrap.replaceChild(d.firstChild,v)}
      src.addEventListener('error',missing);
      v.addEventListener('loadedmetadata',function(){var sp=v.parentNode.nextElementSibling;if(sp&&sp.classList.contains('speed'))sp.hidden=false});
    });
  }

  cards.addEventListener('click',function(e){
    var b=e.target.closest('.speed button'); if(!b)return;
    var v=b.parentNode.previousElementSibling.querySelector('video'); if(!v)return;
    v.playbackRate=parseFloat(b.dataset.rate);
    b.parentNode.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
  });
  document.querySelectorAll('.seg-btn').forEach(function(b){
    b.addEventListener('click',function(){
      state.type=b.dataset.type; state.belt='alle';
      document.querySelectorAll('.seg-btn').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
      renderBelts(); render();
    });
  });
  beltsEl.addEventListener('click',function(e){
    var c=e.target.closest('.chip'); if(!c||c.disabled)return;
    state.belt=c.dataset.belt; renderBelts(); render();
  });
  q.addEventListener('input',function(){state.q=q.value;render()});

  renderBelts(); render();
})();
