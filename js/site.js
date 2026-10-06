// theme: dark by default, remembered per browser
(function(){
  var saved=null; try{saved=localStorage.getItem('theme');}catch(e){}
  if(saved==='light'||saved==='dark'){document.documentElement.setAttribute('data-theme',saved);}
  document.addEventListener('DOMContentLoaded',function(){
    document.documentElement.classList.remove('no-js');
    var btn=document.getElementById('theme-toggle');
    function label(){var t=document.documentElement.getAttribute('data-theme')||'dark';btn.textContent=(t==='dark'?'Light mode':'Dark mode');}
    if(btn){label();btn.addEventListener('click',function(){var t=document.documentElement.getAttribute('data-theme')||'dark';var n=(t==='dark'?'light':'dark');document.documentElement.setAttribute('data-theme',n);try{localStorage.setItem('theme',n);}catch(e){}label();});}
    var tl=document.getElementById('timeline'); if(tl){buildTimeline(tl);}
  });
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function buildTimeline(tl){
    fetch('data/timeline.json').then(function(r){return r.json();}).then(function(items){
      items.sort(function(a,b){return a.sort<b.sort?1:-1;});
      var html='',lastYear='';
      items.forEach(function(it){
        var y=it.sort.slice(0,4);
        if(y!==lastYear){html+='<div class="year-mark"><span>'+y+'</span></div>';lastYear=y;}
        var links=(it.links||[]).map(function(l){return '<a href="'+esc(l.url)+'" target="_blank" rel="noopener">'+esc(l.label)+'</a>';}).join('');
        html+='<article class="tl-item" data-type="'+esc(it.type)+'">'
          +'<div class="tl-text"><div class="date">'+esc(it.date)+'<span class="tag">'+esc(it.type)+'</span></div>'
          +'<h3>'+esc(it.title)+'</h3>'+(it.org?'<p class="org">'+esc(it.org)+'</p>':'')
          +'<p>'+esc(it.text)+'</p>'+(links?'<div class="plinks">'+links+'</div>':'')+'</div>'
          +'<div class="tl-dot" aria-hidden="true"></div>'
          +(it.img?'<figure class="tl-fig"><img loading="lazy" src="'+esc(it.img)+'" alt="'+esc(it.alt||'')+'"></figure>':'')
          +'</article>';
      });
      tl.innerHTML=html;
      var els=tl.querySelectorAll('.tl-item');
      if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('visible');});return;}
      var io=new IntersectionObserver(function(entries){entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('visible');io.unobserve(en.target);}});},{rootMargin:'0px 0px -10% 0px',threshold:0.1});
      els.forEach(function(e){io.observe(e);});
    }).catch(function(){tl.innerHTML='<p class="muted">Timeline could not be loaded.</p>';});
  }
})();
