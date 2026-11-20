/* ---------- script block 1 ---------- */
const IA=ASSETS.img01,IB=ASSETS.img02,$=s=>document.querySelector(s);
/* ---------- HERO ---------- */
const hero=$('#hero'),N=14,NS='http://www.w3.org/2000/svg';
const D=[{k:'a',w:'DESIGNER',t:'I design<br>experiences.',p:'UI/UX designer turning real user problems into clear, usable products. Research-led, screen-ready.',bg:'linear-gradient(170deg,#ff5a00,#ff8f14 45%,#ff4d0a)',img:IA},
{k:'b',w:'RESEARCHER',t:'I research<br>real problems.',p:'Interviews, empathy maps, journeys and flows. Every screen starts with evidence.',bg:'linear-gradient(180deg,#0b3aa0,#061a52 70%,#030b26)',img:IB}];
const L=D.map((c,i)=>{const e=document.createElement('div');e.className='layer '+c.k;e.style.background=c.bg;if(i)e.setAttribute('aria-hidden','true');
e.innerHTML=(c.k=='b'?'<div class="grid"></div>':'')+`<div class="word">${c.w}</div><div class="eye mono"><i></i>V. Hari Prasath — UI/UX designer</div><${i?'div class="h1"':'h1'}>${c.t}</${i?'div':'h1'}><div class="roles mono">UX research / User flows / UI design</div><div class="cp"><p>${c.p}</p><a class="pill" href="#work">See the work ▾</a></div><div class="stats"><div>05<span>Users interviewed</span></div><div>12<span>Core modules</span></div><div>01<span>Case study</span></div>`;
hero.insertBefore(e,$('#ov'));return e});
const cpEl=$('#cp'),og=$('#og'),cc=[],oc=[];
for(let i=0;i<N;i++){[[cpEl,cc],[og,oc]].forEach(([p,a])=>{const c=document.createElementNS(NS,'circle');p.appendChild(c);a.push(c)})}
let base=0;const setBase=i=>{base=i;L[i].style.cssText+=';z-index:1;clip-path:none';L[1-i].style.zIndex=2;L[1-i].style.clipPath='url(#cp)';document.querySelectorAll('.tg button').forEach((b,j)=>b.classList.toggle('on',j==i))};setBase(0);
document.querySelectorAll('.tg button').forEach(b=>b.onclick=()=>setBase(+b.dataset.i));
const P=[],still=matchMedia('(prefers-reduced-motion:reduce)').matches;for(let i=0;i<N;i++)P.push({x:-300,y:-300});
let tx=-300,ty=-300,last=-1e4,R=62,tR=62,ready=0;
hero.addEventListener('pointermove',e=>{const b=hero.getBoundingClientRect();tx=e.clientX-b.left;ty=e.clientY-b.top;last=performance.now();if(!ready){P.forEach(p=>{p.x=tx;p.y=ty});ready=1}});
hero.addEventListener('pointerdown',()=>tR=105);addEventListener('pointerup',()=>tR=62);
(function f(n){const W=hero.clientWidth,H=hero.clientHeight;
if(n-last>2500&&!still){const t=n/1000;tx=W*(.62+.2*Math.sin(t*.8));ty=H*(.5+.2*Math.sin(t*1.3+1));if(!ready){P.forEach(p=>{p.x=tx;p.y=ty});ready=1}}
R+=(tR-R)*.1;P[0].x+=(tx-P[0].x)*.2;P[0].y+=(ty-P[0].y)*.2;
for(let i=1;i<N;i++){P[i].x+=(P[i-1].x-P[i].x)*.3;P[i].y+=(P[i-1].y-P[i].y)*.3}
for(let i=0;i<N;i++){const r=R*(1-i/N*.75),x=P[i].x,y=P[i].y;[cc[i],oc[i]].forEach(c=>{c.setAttribute('cx',x);c.setAttribute('cy',y);c.setAttribute('r',r)})}
requestAnimationFrame(f)})(0);
const hp=$('#hp'),hx=hp.getContext('2d');let ps=[];function hrs(){const d=devicePixelRatio||1;hp.width=hero.clientWidth*d;hp.height=hero.clientHeight*d;hx.setTransform(d,0,0,d,0,0)}hrs();addEventListener('resize',hrs);
(function g(){hx.clearRect(0,0,hero.clientWidth,hero.clientHeight);const sp=Math.hypot(tx-P[0].x,ty-P[0].y);if(ready&&sp>2)for(let i=0;i<Math.min(4,sp/4);i++){const a=Math.random()*6.283,r=Math.random()*R*.9;ps.push({x:P[0].x+Math.cos(a)*r,y:P[0].y+Math.sin(a)*r,vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2-.2,l:1,c:Math.random()<.5?'#9af2ff':'#fff'})}
ps=ps.filter(p=>(p.l-=.022)>0);for(const p of ps){p.x+=p.vx;p.y+=p.vy;hx.globalAlpha=p.l;hx.fillStyle=p.c;hx.fillRect(p.x,p.y,2.4,2.4)}requestAnimationFrame(g)})();
/* ---------- CRAFT ---------- */
const S=[{t:'UX Research',k:'From conversations to clarity.',p:'Interviews, qualitative research and empathy maps that turn what users say, do, think and feel into design decisions.',g:['Interviews','Empathy map','Insights','5 users','25 questions'],bg:'#2a0b14',fb:'linear-gradient(#ff7a1a,#b53d05)',fg:'#ff5a1f66'},
{t:'UX Flows',k:'Structure before pixels.',p:'User stories, journey maps and user flows that map every step of the experience before a single screen is drawn.',g:['User stories','Journey map','User flow','Site map'],bg:'#0a1235',fb:'linear-gradient(#0b3aa0,#030b26)',fg:'#2a7bff77'},
{t:'UI Design',k:'Screens that feel obvious.',p:'Mobile screens: 78 clickable screens from sign-up to the 3D house viewer, built as a working prototype.',g:['Mobile apps','Clickable prototype','78 screens'],bg:'#13082e',fb:'linear-gradient(#7a3cff,#1a0a4a)',fg:'#8f5bff77'}];
const cs=$('#cs'),bars=$('#bars');let ci=0,tm;
bars.innerHTML=S.map((s,i)=>`<div class="mono" data-i="${i}">0${i+1} — ${s.t}</div>`).join('');
function show(i){ci=i;const s=S[i];$('#craft').style.setProperty('--g',s.bg);$('#cn').textContent=`0${i+1} / 03`;
cs.innerHTML=`<div><div class="k">${s.k}</div><h2>${s.t}</h2><p>${s.p}</p><div class="tags">${s.g.map(x=>`<i>${x}</i>`).join('')}</div></div><svg class="wf" viewBox="0 0 200 260"><rect x="20" y="8" width="160" height="244" rx="26"/><rect x="38" y="36" width="124" height="62" rx="10"/><path d="M38 118h124M38 138h90M38 158h110"/><rect x="38" y="182" width="56" height="48" rx="8"/><rect x="106" y="182" width="56" height="48" rx="8"/></svg>`;
[...bars.children].forEach((b,j)=>{b.classList.remove('on');if(j==i){void b.offsetWidth;b.classList.add('on')}});clearInterval(tm);tm=setInterval(()=>show((ci+1)%3),7000)}
bars.onclick=e=>{const d=e.target.closest('[data-i]');d&&show(+d.dataset.i)};show(0);
/* ---------- PARTICLES ---------- */
function field(id,col,gen,rot,tilt){const cv=$(id),c=cv.getContext('2d');let W,H,pts=[],m={x:-999,y:-999},a=0,on=0;
const rs=()=>{const d=devicePixelRatio||1;W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;c.setTransform(d,0,0,d,0,0);pts=gen(W,H).map(p=>({...p,ox:0,oy:0}))};
new ResizeObserver(rs).observe(cv);
cv.parentElement.addEventListener('pointermove',e=>{const b=cv.getBoundingClientRect();m.x=e.clientX-b.left;m.y=e.clientY-b.top});
new IntersectionObserver(e=>on=e[0].isIntersecting).observe(cv);
(function f(){if(on){c.clearRect(0,0,W,H);a+=.0035;const ca=Math.cos(a),sa=Math.sin(a),ct=Math.cos(tilt||0),st=Math.sin(tilt||0);c.fillStyle=col;
for(const p of pts){let x=p.x,y=p.y;if(rot){const x2=x*ca-p.z*sa,z2=x*sa+p.z*ca;x=x2+W/2;y=p.y*ct+z2*st+H/2}
let dx=x+p.ox-m.x,dy=y+p.oy-m.y,d=Math.hypot(dx,dy);if(d<90&&d>0){p.ox+=dx/d*(90-d)*.08;p.oy+=dy/d*(90-d)*.08}p.ox*=.93;p.oy*=.93;
c.globalAlpha=rot?.35+.65*((p.z/(W*.4))+1)/2:.85;c.fillRect(x+p.ox,y+p.oy,1.7,1.7)}}requestAnimationFrame(f)})();return rs}
field('#c1','#6fb4ff',(W,H)=>{const o=[],R=Math.min(W,H*1.3)*.5;for(let i=0;i<4200;i++){const r=Math.pow(Math.random(),.6)*R,ang=r*.011+(i%3)*2.094+Math.random()*.35;o.push({x:Math.cos(ang)*r,z:Math.sin(ang)*r,y:(Math.random()-.5)*R*.05})}return o},1,.95);
field('#c3','#ff7a2e',(W,H)=>{const o=[],R=Math.min(W*.9,H)*.34;for(let i=0;i<2000;i++){const y=1-2*(i+.5)/2000,r=Math.sqrt(1-y*y),t=i*2.4;o.push({x:Math.cos(t)*r*R,y:y*R,z:Math.sin(t)*r*R})}
for(let k=0;k<3;k++)for(let i=0;i<300;i++){const t=Math.random()*6.283,q=R*(1.18+k*.12);o.push({x:Math.cos(t)*q,z:Math.sin(t)*q,y:Math.sin(t*2+k)*R*.12})}return o},1,.35);
let sil=[],f2,ar=1.2;const im=new Image();im.onload=()=>{ar=im.width/im.height;const w=170,h=Math.round(w/ar),o=document.createElement('canvas');o.width=w;o.height=h;const x=o.getContext('2d');x.drawImage(im,0,0,w,h);const d=x.getImageData(0,0,w,h).data;
for(let j=0;j<h;j++)for(let i=0;i<w;i++)if(d[(j*w+i)*4+3]>140&&Math.random()<.9)sil.push([i/w,j/h]);f2&&f2()};im.src=IB;
f2=field('#c2','#7fd4ff',(W,H)=>{const s=Math.min(W*.98,H*.92*ar),ox=(W-s)/2,oy=(H-s/ar)/2;return sil.map(([u,v])=>({x:ox+u*s+(Math.random()-.5)*2,y:oy+v*s/ar+(Math.random()-.5)*2,z:0}))},0);
/* ---------- MISC ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:0});document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const nav=[...document.querySelectorAll('.menu a')];new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)nav.forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+e.target.id))}),{threshold:.4}).observe($('#craft'));
['#craft','#work','#stack','#about'].forEach(s=>new IntersectionObserver(es=>es[0].isIntersecting&&nav.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==s)),{threshold:.35}).observe($(s)));
const lb=$('#lb');document.querySelectorAll('img.z').forEach(i=>i.onclick=()=>{lb.firstElementChild.src=i.src;lb.style.display='block'});lb.onclick=()=>lb.style.display='none';

/* ---------- script block 2 ---------- */
(()=>{const $=s=>document.querySelector(s);
const P=[['Discover','#28c8ff',['Competitor analysis','User journey map','Qualitative research','Quantitative research']],['Define','#7a6bff',['3 user personas','Empathy map']],['Ideate','#b44bff',['25 user stories','Information architecture','User flow']],['Design','#ff4fa3',['Paper wireframes','Style guide','High-fidelity screens','Clickable prototype']],['Test','#ff5a3d',['Usability testing','Impact and learning']]];
$('#proc').innerHTML=P.map((p,i)=>`<div style="--c:${p[1]}"><div class="dm"><span>0${i+1}</span></div><h6>${p[0]}</h6><ul>${p[2].map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('');
const J=[['Dream begins','Excited',4.5,'Dreamed of building a dream house.'],['Engineer consultation','Hopeful',4.1,'Contacted a civil engineer for planning.'],['Design challenges','Unsatisfied',2.6,'Design suggestions were not fully satisfying and the 2D blueprint was hard to visualise.'],['Construction problems','Frustrated',1.7,'Separate planning and estimation added complexity, and finding and managing workers took time.'],['App idea','Inspired',3.0,'Thought of an all-in-one construction mobile app.'],['3D design','Happy',3.9,'Users design and visualise homes in realistic 3D.'],['Smart estimation','Confident',4.1,'The app gives material quantity and cost estimates.'],['Professional booking','Relieved',3.6,'Users connect with and book engineers, architects and workers.'],['All-in-one management','Satisfied',4.2,'The whole construction journey is managed from one platform.'],['Happy outcome','Very satisfied',4.6,'Home construction feels simple, transparent, time-saving and stress-free.']];
const col=l=>l>=4.3?'#29d36a':l>=3.7?'#8fdc4a':l>=2.9?'#ffc93c':l>=2.1?'#ff8a3c':'#ff3b4a',em=l=>l>=4.3?'😄':l>=3.7?'🙂':l>=2.9?'😐':l>=2.1?'😕':'😞';
const SV=$('#jr'),AY=16,ax=i=>70+i*95,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
const B=J.map((j,i)=>({L:280-(j[2]-1)*60-AY,th:still?0:(Math.random()-.5)*.6,w:0,x:0,y:0,r:20,c:col(j[2])}));
SV.innerHTML=`<line x1="30" x2="970" y1="${AY}" y2="${AY}" stroke="#ffffff44" stroke-width="2"/><polyline id="jl" fill="none" stroke="#ffffff55" stroke-width="2" stroke-dasharray="3 7" stroke-linecap="round"/>`+B.map((b,i)=>`<line class="rp" stroke="#ffffff77" stroke-width="1.5"/><circle cx="${ax(i)}" cy="${AY}" r="4" fill="#fff"/><g class="jd" data-i="${i}" style="filter:drop-shadow(0 0 12px ${b.c})"><circle r="20" fill="${b.c}"/><text y="6" text-anchor="middle" style="font-size:18px;fill:#000;pointer-events:none">${em(J[i][2])}</text></g><text x="${ax(i)}" y="322" text-anchor="middle">${J[i][0].split(' ').map((w,k)=>`<tspan x="${ax(i)}" dy="${k?13:0}">${w}</tspan>`).join('')}</text>`).join('')+`<text x="500" y="346" text-anchor="middle" style="font-size:10px;opacity:.6;letter-spacing:.2em">TOUCH, DRAG OR SWIPE THE BALLS</text>`;
const sel=i=>{$('#jp').innerHTML=`<b style="color:${col(J[i][2])}">0${i+1} · ${J[i][0]} · ${J[i][1]}</b><p>${J[i][3]}</p>`};sel(3);
const G=[...SV.querySelectorAll('.jd')],RP=[...SV.querySelectorAll('.rp')],PL=SV.querySelector('#jl');
const Pt={x:-999,y:-999,vx:0,vy:0,t:0,in:0};let drag=-1,hov=-1,vis=0;SV.style.touchAction='pan-y';
const pos=e=>{const r=SV.getBoundingClientRect();return[(e.clientX-r.left)*1000/r.width,(e.clientY-r.top)*350/r.height]};
SV.addEventListener('pointermove',e=>{const[x,y]=pos(e),n=performance.now(),dt=Math.max(8,n-Pt.t)/1000;Pt.vx=Pt.vx*.6+(x-Pt.x)/dt*.4;Pt.vy=Pt.vy*.6+(y-Pt.y)/dt*.4;Pt.x=x;Pt.y=y;Pt.t=n;Pt.in=1;
if(drag>=0){const b=B[drag];b.th=Math.max(-1.25,Math.min(1.25,Math.atan2(x-ax(drag),y-AY)));b.w=0}});
SV.addEventListener('pointerleave',()=>{if(drag<0)Pt.in=0});
G.forEach((g,i)=>g.addEventListener('pointerdown',e=>{drag=i;SV.setPointerCapture(e.pointerId);sel(i);g.querySelector('text').textContent='😲';g.style.cursor='grabbing'}));
const rel=()=>{if(drag<0)return;const b=B[drag],g=G[drag];b.w=Math.max(-9,Math.min(9,(Pt.vx*Math.cos(b.th)-Pt.vy*Math.sin(b.th))/b.L));g.querySelector('text').textContent=em(J[drag][2]);g.style.cursor='';drag=-1};
SV.addEventListener('pointerup',rel);SV.addEventListener('pointercancel',rel);
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(SV);
let T0=performance.now();(function f(n){const dt=Math.min(.033,(n-T0)/1000);T0=n;requestAnimationFrame(f);if(!vis)return;const t=n/1000;
B.forEach((b,i)=>{if(i!==drag){b.w+=(-(1200/b.L)*Math.sin(b.th)-.9*b.w+(still?0:Math.sin(t*.7+i*.6)*.3))*dt;
if(Pt.in&&Math.hypot(b.x-Pt.x,b.y-Pt.y)<30){b.w+=((Pt.vx*Math.cos(b.th)-Pt.vy*Math.sin(b.th))/b.L-b.w)*.2;b.w=Math.max(-9,Math.min(9,b.w))}
b.th+=b.w*dt;if(Math.abs(b.th)>1.3){b.th=Math.sign(b.th)*1.3;b.w*=-.5}}
b.x=ax(i)+b.L*Math.sin(b.th);b.y=AY+b.L*Math.cos(b.th)});
for(let i=0;i<9;i++){const p=B[i],q=B[i+1],dx=q.x-p.x,d=Math.hypot(dx,q.y-p.y);if(d<44&&d>0){const o=(44-d)*Math.sign(dx||1);if(i!==drag)p.th-=o*.5/p.L,p.w-=o*.02;if(i+1!==drag)q.th+=o*.5/q.L,q.w+=o*.02}}
B.forEach((b,i)=>{const h=i===drag||(Pt.in&&Math.hypot(b.x-Pt.x,b.y-Pt.y)<28);if(h&&hov!==i){hov=i;sel(i)}const tr=h?25:20;b.r+=(tr-b.r)*.25;
G[i].setAttribute('transform',`translate(${b.x},${b.y})`);const c=G[i].firstChild,tx=G[i].lastChild;c.setAttribute('r',b.r);tx.style.fontSize=b.r*.9+'px';tx.setAttribute('y',b.r*.3);
RP[i].setAttribute('x1',ax(i));RP[i].setAttribute('y1',AY);RP[i].setAttribute('x2',b.x);RP[i].setAttribute('y2',b.y)});
PL.setAttribute('points',B.map(b=>b.x+','+b.y).join(' '))})(performance.now());
const U=[['I need an accurate construction cost estimation.','Cost estimation tool'],['I want to keep my expenses within budget.','Budget tracker with alerts'],['I need help finding a trustworthy civil engineer.','Verified engineer directory'],['I struggle to understand 2D blueprints.','Interactive 2D and 3D views'],['I am concerned about changing material prices.','Real-time price updates'],['I feel stressed managing the whole process.','One simple, friendly app']];
$('#stor').innerHTML=U.map(u=>`<div><span><small>As a user</small>${u[0]}</span><em>→</em><span><small>Design solution</small>${u[1]}</span></div>`).join('');
const M=[['New project',['Name, location, house type','Area, floors, budget','Design preferences','Review + AI estimated cost','PDF report + payment']],['My projects',['Project detail','Timeline, 6 phases','Team + photos','Update progress']],['Material list',['Search + filter chips','Cards with price trends','8 material calculators']],['Price tracker',['Material price cards','Daily updates + trends','Set price alert']],['3D design',['Design options + gallery','2D floor plan','3D viewer: rotate, zoom, pan','Colour picker']],['Find professionals',['Search + filters','Cards with ratings','Profile, services, rates','Call / chat / book']],['AI assistant',['Chat + voice input','Ask a query','Personalised recommendation']],['Budget tracker',['Stat boxes','Cost breakdown chart','Add expense + receipt']],['Documents',['Search + filter','Document list','Upload + confirmation']],['Notifications',['Today / yesterday','Unread indicators','Detail, mark as read']],['Search',['Projects, materials, professionals','Filters: location, price, rating','Filtered results']],['Settings + profile',['Edit profile','Payment methods','Log out']]];
$('#mods').innerHTML=M.map((m,i)=>`<div><span class="lab" style="opacity:.55">${String(i+1).padStart(2,'0')}</span><h6>${m[0]}</h6><ul>${m[1].map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('');
})();

/* ---------- script block 3 ---------- */
(()=>{const E=[['User'],['Log in'],['New user?','Sign up (email) or Guest',1],['Enter password'],['OTP verification'],['Log in']];
const F=[['New project',['Step indicator','Project name','Project location','House type','Area','Floors','Budget','Design preferences','BHK selection','Bathrooms',['Additional rooms','Pooja · Study · Parking · Garden'],'Project review','Summary card','AI estimated cost','Create / edit project','Cost estimator','Quality dropdown','Cost breakdown chart',['PDF report','Download · Share'],'Payment','Payment confirmation','Booking confirmation']],
['My projects',['Active projects list','Project detail','Hero image','Stats grid','Quick actions','Team','Photos','Project timeline','Timeline connector','6 phases','Foundation to handover','Update progress']],
['Material list',['Search','Filter chips','Material cards with price trends','Material calculator',['8 calculators grid','Cement · Sand · Bricks · Steel · Concrete · Tiles · Paint · Flooring'],'Select calculator','Cement calculator','Wall dimensions','Thickness','Result cards']],
['Price tracker',['Material price cards','Daily price updates','Trend charts','Set price alert','Alert notification']],
['3D design',['Blueprint grid','Design options','Gallery','Floor plan','2D floor plan','Room dimensions','Export','3D viewer',['3D model','Rotate · Zoom · Pan'],'View options','Colour picker']],
['Find professionals',['Search','Filter chips','Professional cards with ratings','Select professional','Professional detail','Profile','Services and rates','Reviews',['Contact','Call · Chat · Book'],'Booking confirmed']],
['AI assistant',['Chat interface','Voice input','Ask query','AI backend','Personalised recommendation']],
['Budget tracker',['Stat boxes','Cost breakdown chart','Expense list','Add expense','Amount','Category','Description','Date','Project','Receipt upload','Save expense']],
['Documents',['Search','Filter','Document list','Upload file','Choose file','Upload confirmation']],
['Notifications',['Today / yesterday','Unread indicators','Notification list','Notification detail','Mark as read']],
['Search bar',[['Search type','Projects · Material · Professional'],'Matching results','Relevant result list',['Filters','Location · Price · Ratings · Availability'],'Apply filters','Filtered result']],
['Settings / profile',['Profile page','Personal details','Edit profile','Name','Update','Payment methods','Saved cards','Add / edit / remove payment','Log out','Confirmation popup','Redirect to login']]];
const st=x=>Array.isArray(x)?`<div class="sp">${x[0]}<small>${x[1]}</small></div>`:`<div class="sp">${x}</div>`;
document.getElementById('flow').innerHTML=`<div class="fe">${E.map((e,i)=>`<div class="fb${e[2]?' dc':''}">${e[0]}${e[1]?`<small>${e[1]}</small>`:''}</div><div class="fa"></div>`).join('')}<div class="fb fh">Home screen</div></div><div class="fv"></div><div class="cols">${F.map((f,i)=>`<div class="col" style="--c:hsl(${190+i*14},90%,66%)"><div class="cm">${f[0]}</div>${f[1].map(st).join('')}</div>`).join('')}</div>`;
})();

/* ---------- script block 4 ---------- */
(()=>{const $=s=>document.querySelector(s);
const PS=[{n:'Abhitha',a:'#ff8a00',img:ASSETS.img03,th:ASSETS.img04,pers:'Consul · ESFJ',f:[['Age','20'],['Education','B.Sc. Fashion Designing'],['Marital status','Married'],['Occupation','Boutique Owner & Fashion Designer'],['Location','Karur'],['Tech literacy','High']],
bio:'A passionate fashion designer with a B.Sc. in Fashion Designing, dedicated to creating stylish and innovative clothing. Currently managing a boutique while exploring modern fashion trends and digital platforms to expand her business. Focused on delivering quality designs and building a strong brand presence.',
q:'“I want to design my dream home as beautifully as I design clothes – with proper guidance, planning, and the right support.”',
needs:['Easy-to-understand house planning and design guidance','Clear visualization of house layouts through 2D/3D models','Affordable labor and construction cost estimation','Access to interior design ideas and project tracking tools','Efficient management of construction progress and timelines'],
fr:['Confusion while planning and selecting house designs','Difficulty understanding measurements and 2D blueprints','High labor costs and expensive skilled workers','Delays caused by rain and worker shortages','Lack of proper guidance during the construction process'],
br:['Myntra','Meesho','Ajio'],pay:['UPI (Google Pay / PhonePe)','Credit / Debit card','Cash'],pl:['Website','Mobile app']},
{n:'Nivitha',a:'#b44bff',img:ASSETS.img05,th:ASSETS.img06,pers:'Campaigner · ENFP',f:[['Age','19'],['Education','Fashion Designing'],['Marital status','Unmarried'],['Occupation','Fashion Design Intern'],['Location','Bangalore'],['Tech literacy','Medium']],
bio:'A creative fashion designing student with a passion for clothing, styling, and digital fashion trends. Loves exploring new design techniques, creating unique collections, and building a career in the fashion industry. Eager to gain practical experience and continuously improve creative skills.',
q:'“I love turning ideas into designs and exploring new trends. I need the right tools and guidance to build my dream career in fashion.”',
needs:['Simple and user-friendly house planning experience','Realistic 2D/3D visualization to understand home designs easily','Accurate material quantity and construction cost estimation','Personalized interior and exterior design recommendations','Easy project tracking with budget and construction progress updates','Access to trusted professionals and construction services in one platform'],
fr:['Misplacing important certificates and design portfolios','Difficulty accessing documents while traveling or attending interviews','Files scattered across different apps and devices','Worry about losing physical documents','No single platform to organize important records'],
br:['Zara','H&M','Pinterest'],pay:['UPI (Google Pay / PhonePe)','Debit card','Cash'],pl:['Website','Mobile app']},
{n:'Naren',a:'#28c8ff',img:ASSETS.img07,th:ASSETS.img08,pers:'Logistician · ISTJ',f:[['Age','20'],['Education','B.Com (Computer Applications)'],['Occupation','Banking Associate'],['Location','Karur'],['Marital status','Unmarried'],['Tech literacy','High']],
bio:'A dedicated B.Com (Computer Applications) graduate with a keen interest in the banking and financial sector. Skilled in handling financial records, customer service, and digital banking tools. Passionate about learning new technologies and building a successful career in the banking industry.',
q:'“I’m building a strong foundation for a better tomorrow by managing today’s responsibilities smartly and efficiently.”',
needs:['Simple and user-friendly house planning experience','Realistic 2D/3D visualization to understand home designs easily','Accurate material quantity and construction cost estimation','Personalized interior and exterior design recommendations','Easy project tracking with budget and construction progress updates','Access to trusted professionals and construction services in one platform'],
fr:['Important financial documents are difficult to organize','Searching for documents during urgent situations takes time','Fear of losing physical records','No centralized platform for storing personal and financial documents','Sharing confidential documents securely is challenging'],
br:['HDFC Bank','SBI YONO','LinkedIn'],pay:['UPI (Google Pay / PhonePe)','Net banking','Debit card','Cash'],pl:['Website','Mobile app']}];
const L=a=>a.map(x=>`<li>${x}</li>`).join(''),C=a=>`<div class="chips">${a.map(x=>`<i>${x}</i>`).join('')}</div>`;
const tabs=$('#ptabs'),pz=$('#pz');
tabs.innerHTML=PS.map((p,i)=>`<button data-i="${i}" style="--a:${p.a}"><img alt="" src="${p.th}">${p.n}</button>`).join('');
function show(i){const P=PS[i];[...tabs.children].forEach((b,j)=>b.classList.toggle('on',j==i));pz.style.setProperty('--a',P.a);
pz.innerHTML=`<div class="pstage" id="pst"><div class="orb"><div class="disc"></div><div class="cw"><img alt="${P.n}, persona" src="${P.img}"></div></div><div class="flr"></div><div class="ntag">${P.n}<span>${P.pers}</span></div></div><div class="pcard"><div class="ph1"><h3>${P.n}</h3><span class="pchip">${P.pers}</span></div><div class="pf">${P.f.map(f=>`<div><small>${f[0]}</small>${f[1]}</div>`).join('')}</div><p class="pbio">${P.bio}</p><blockquote>${P.q}</blockquote><div class="pcols"><div><h5>Core needs</h5><ul class="ok">${L(P.needs)}</ul></div><div><h5>Frustrations</h5><ul class="no">${L(P.fr)}</ul></div></div><div class="prow"><div><h5>Preferred brands</h5>${C(P.br)}</div><div><h5>Payment methods</h5>${C(P.pay)}</div><div><h5>Platform</h5>${C(P.pl)}</div></div></div>`;
const st=$('#pst'),orb=st.querySelector('.orb');
st.addEventListener('pointermove',e=>{const r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;orb.style.setProperty('--ry',x*26+'deg');orb.style.setProperty('--rx',-y*18+'deg');orb.style.setProperty('--cx',x*-14+'px');orb.style.setProperty('--cy',y*-8+'px');orb.querySelector('.cw img').style.setProperty('--cx',x*14+'px')});
st.addEventListener('pointerleave',()=>{['--ry','--rx','--cx','--cy'].forEach(k=>orb.style.removeProperty(k));orb.querySelector('.cw img').style.removeProperty('--cx')})}
tabs.onclick=e=>{const b=e.target.closest('button');b&&show(+b.dataset.i)};show(0);})();

/* ---------- script block 5 ---------- */
(()=>{const $=s=>document.querySelector(s),mk=$('#mk'),pp=$('#mkpp'),N=7,SC=[["Home dashboard", ASSETS.img09], ["Start a new project", ASSETS.img10], ["AI cost estimate", ASSETS.img11], ["3D viewer", ASSETS.img12], ["Material calculators", ASSETS.img13], ["Price tracker", ASSETS.img14], ["Budget tracker", ASSETS.img15]];
pp.innerHTML=SC.map((x,i)=>`<div class="mk-ph" data-i="${i}"><div class="mk-sd"></div>${Array.from({length:9},(_,k)=>`<div class="mk-ed" style="transform:translateZ(${-(k+1)*2.2}px)"></div>`).join('')}<div class="mk-bd"><div class="mk-bz"><div class="mk-sc"><img alt="${x[0]} screen" src="${x[1]}"><i class="mk-isl"></i><i class="mk-gl"></i></div></div></div></div>`).join('')+document.getElementById('mkr-t').innerHTML;
const ph=[...pp.querySelectorAll('.mk-ph')],rock=null;let cur=0,view='stand',px=0,py=0;
const still=matchMedia('(prefers-reduced-motion:reduce)').matches;
function ptf(){const sh=mk.clientWidth>=1000?'translateX(11%) ':'';return sh+(view=='stand'?`rotateY(${px*7}deg) rotateX(${-py*3}deg)`:`translateY(2%) rotateX(56deg) rotateZ(-32deg) rotateZ(${px*2}deg)`)}
function layout(){const H=mk.clientHeight,W=Math.max(130,Math.min(230,H/3.3));mk.style.setProperty('--W',W+'px');mk.style.setProperty('--mh',H+'px');
ph.forEach((el,i)=>{let o=((i-cur)%N+N)%N;if(o>3)o-=N;const a=Math.abs(o);
el.style.transform=view=='stand'?`translate3d(${o*W*.78}px,0,${-a*190}px) rotateY(${-o*27}deg) scale(${a?.88:1.16})`:`translate3d(${o*W*.98}px,0,${a?0:46}px)`;
el.style.opacity=a>2?(view=='stand'?.0:.9):(a>1&&view=='stand'?.7:1);el.style.zIndex=10-a;el.style.pointerEvents=a>2&&view=='stand'?'none':'auto'});
pp.style.transform=ptf();const r=pp.querySelector('.mk-rock');if(r)r.style.opacity=view=='stand'?1:0;
$('#mkcap').textContent=`0${cur+1} / 07 · ${SC[cur][0]}`;showInfo();document.querySelectorAll('.mk-v button').forEach(b=>b.classList.toggle('on',b.dataset.v==view))}
const go=d=>{cur=(cur+d+N)%N;layout();strike()};
$('#mkpv').onclick=()=>go(-1);$('#mknx').onclick=()=>go(1);
document.querySelectorAll('.mk-v button').forEach(b=>b.onclick=e=>{e.stopPropagation();view=b.dataset.v;layout();strike()});
let dx=0,drag=0,moved=0;mk.addEventListener('pointerdown',e=>{if(e.target.closest('.mk-ui,.mk-v'))return;drag=1;dx=e.clientX;moved=0});
mk.addEventListener('pointermove',e=>{const r=mk.getBoundingClientRect();px=(e.clientX-r.left)/r.width-.5;py=(e.clientY-r.top)/r.height-.5;pp.style.transform=ptf();
if(drag&&Math.abs(e.clientX-dx)>70){moved=1;go(e.clientX<dx?1:-1);dx=e.clientX}});
mk.addEventListener('pointerup',e=>{if(drag&&!moved){const p=e.target.closest('.mk-ph');if(p&&+p.dataset.i!==cur){cur=+p.dataset.i;layout();strike()}}drag=0});
mk.addEventListener('pointerleave',()=>{drag=0;px=py=0;pp.style.transform=ptf()});
const cv=$('#mkl'),cx=cv.getContext('2d');let t0=0,vis=0,FL=0,WL=0,WC=1,WR=0,LXP=.5;
const seg=(a,b,d,o)=>{if(d<3){o.push(b);return}const m=[(a[0]+b[0])/2+(Math.random()-.5)*d,(a[1]+b[1])/2+(Math.random()-.5)*d*.45];seg(a,m,d/2,o);seg(m,b,d/2,o)};
const bolt=(x,y,x2,y2,d,w,out)=>{const pts=[[x,y]];seg([x,y],[x2,y2],d,pts);out.push([pts,w]);for(let i=6;i<pts.length-4;i+=7)if(Math.random()<.28&&w>1.2){const p=pts[i];bolt(p[0],p[1],p[0]+(Math.random()-.4)*170,p[1]+60+Math.random()*130,36,w*.5,out)}};
const E=[[0,0],[40,1],[90,.35],[140,1],[210,.55],[320,.2],[820,0]];let busy=0;
function tick(n){if(window.__mkHold===2)return;const t=n-t0;let v=0;for(let i=1;i<E.length;i++)if(t<=E[i][0]){const a=E[i-1],b=E[i];v=a[1]+(b[1]-a[1])*(t-a[0])/(b[0]-a[0]);break}
FL=v;mk.style.setProperty('--fl',v.toFixed(3));if(t<820)requestAnimationFrame(tick);else{busy=0;if(!window.__mkHold){FL=0;mk.style.setProperty('--fl',0)}}}
function strike(){if(busy||!vis)return;busy=1;cv.width=mk.clientWidth;cv.height=mk.clientHeight;cx.clearRect(0,0,cv.width,cv.height);const H=cv.height,x=cv.width*(.12+Math.random()*.76),out=[];
const ex=x+(Math.random()-.5)*140,ey=H*(.47+Math.random()*.07);bolt(x,0,ex,ey,120,3.4,out);cx.lineCap=cx.lineJoin='round';
for(const[pts,w]of out)[[w*5,'#5b8cff66',24],[w*2.4,'#aac8ff',12],[w,'#ffffff',4]].forEach(([lw,col,sh])=>{cx.beginPath();pts.forEach((p,i)=>i?cx.lineTo(p[0],p[1]):cx.moveTo(p[0],p[1]));cx.lineWidth=lw;cx.strokeStyle=col;cx.shadowColor='#7fb0ff';cx.shadowBlur=sh;cx.stroke()});
cx.shadowBlur=0;let g=cx.createRadialGradient(ex,ey,0,ex,ey,110);g.addColorStop(0,'#ffffffdd');g.addColorStop(.35,'#9cc0ff66');g.addColorStop(1,'#7fb0ff00');cx.fillStyle=g;cx.fillRect(ex-110,ey-110,220,220);

mk.style.setProperty('--lx',(ex/cv.width*100)+'%');{const f=ex/cv.width,l=Math.max(0,1-f*2),rr=Math.max(0,f*2-1);mk.style.setProperty('--wl',l);mk.style.setProperty('--wr',rr);mk.style.setProperty('--wc',1-l-rr);WL=l;WR=rr;WC=1-l-rr;LXP=f;window.__mkBolt=1}t0=performance.now();requestAnimationFrame(tick)}
(function auto(){if(!still&&!document.hidden&&!window.__mkHold)strike();setTimeout(auto,3200+Math.random()*4200)})();
new IntersectionObserver(e=>{vis=e[0].isIntersecting;if(vis&&!window.__mkFirst){window.__mkFirst=1;setTimeout(strike,500)}},{threshold:.25}).observe(mk);


let GY0=.62,GY1=.97,ripFromStage=()=>{};
const INF=[
{t:'Home dashboard',what:'One screen for the whole build: the active project card (Palakkad Villa, 2,400 sqft, foundation stage), the AI estimated cost, material price alerts, recent site updates and quick actions for the estimator, materials, 3D design and AI assistant.',why:'5 of 5 users wanted everything in one app, so the home screen puts the project, the money and the next actions in a single glance.',tags:['All-in-one','Dashboard']},
{t:'Start a new project',what:'A guided three-step form: project name, location, house type, plot area, floors and budget range. A progress bar shows step 1 of 3 and one primary button moves forward.',why:'Planning felt confusing to some users, so every step is short and asks only what the estimate really needs.',tags:['Guided flow','Planning was confusing']},
{t:'AI cost estimate',what:'Step 3 reviews the project summary and shows the AI estimated cost (₹41,20,000, ±8%) based on 240 similar projects nearby, with a button for the full breakdown.',why:'An unclear budget and fear of hidden charges came up again and again. A range, with the basis shown, builds trust.',tags:['Budget was not clear','Hidden charges']},
{t:'3D viewer',what:'A live 3D preview of the house with Rotate, Zoom and Pan controls and a colour picker to try finishes before construction starts.',why:'Users found 2D blueprints confusing and could not imagine the house, so the model comes first and the controls are large and thumb-friendly.',tags:['2D blueprints were hard','Couldn’t imagine the house']},
{t:'Material calculators',what:'Eight calculators for cement, sand, bricks, steel, concrete, tiles, paint and flooring. Pick one, enter the dimensions and get the quantity needed.',why:'Measurements were hard for users and wastage costs money, so each calculator asks for simple dimensions only.',tags:['Measurements were difficult','Material quantity']},
{t:'Price tracker',what:'Live prices for cement, steel and sand with the daily change, plus a 30-day trend chart for cement.',why:'Material prices kept changing for users, so the trend makes the right time to buy easy to see.',tags:['Material prices changed']},
{t:'Budget tracker',what:'Total budget, amount spent and remaining (₹41.2L, ₹13.2L, ₹28.0L), a cost breakdown bar, the expense list and a quick Add expense button.',why:'Unclear budgets and extra expenses were common complaints, so spending is always visible against the plan with an On track status.',tags:['Extra expenses came']}];
const inf=$('#mkinfo');let infT=0;
function showInfo(){const d=INF[cur];inf.classList.add('sw');clearTimeout(infT);infT=setTimeout(()=>{inf.innerHTML=`<div class="lab">0${cur+1} / 07</div><h4>${d.t}</h4><h5>What it does</h5><p>${d.what}</p><h5>Why it is designed this way</h5><p>${d.why}</p><div class="chips b">${d.tags.map(x=>`<i>${x}</i>`).join('')}</div>`;inf.classList.remove('sw')},still?0:260)}
showInfo();
/* water */
(()=>{const cv=$('#mkwt'),gl=cv.getContext('webgl',{alpha:true,premultipliedAlpha:true,antialias:false});const REF={"calm": ASSETS.img16, "L": ASSETS.img17, "C": ASSETS.img18, "R": ASSETS.img19};
if(!gl){const im=new Image();im.src=REF.calm;im.className='';im.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 72%;clip-path:inset(61% 0 0 0);opacity:.85';cv.replaceWith(im);return}
const A=1.8,PY=.72,T17=.30573,PIT=.06124,CP=Math.cos(PIT),SP=Math.sin(PIT);let fx=1,fy=1;
const cov=()=>{const a=mk.clientWidth/mk.clientHeight;if(a<A){fx=a/A;fy=1}else{fx=1;fy=A/a}};
const s2p=(x,y)=>[(x-.5)*fx+.5,y*fy+(1-fy)*PY],p2s=(u,v)=>[(u-.5)/fx+.5,(v-(1-fy)*PY)/fy];
const p2w=(u,v)=>{const ax=(u-.5)*2*T17*A,ay=(1-2*v)*T17,dy=ay*CP+SP,dz=ay*SP-CP,t=-2.4/dy;return[ax*t,15+dz*t]};
const RIP=new Float32Array(72*4);let ri=0,T=0;
const add=(x,z,a)=>{RIP[ri*4]=x;RIP[ri*4+1]=z;RIP[ri*4+2]=T;RIP[ri*4+3]=a;ri=(ri+1)%72};
ripFromStage=(sx,sy,a)=>{const[u,v]=s2p(sx,sy);if(v<.64)return;const w=p2w(u,v);add(w[0],w[1],a)};
const vs='attribute vec2 a;varying vec2 vUv;void main(){vUv=vec2(a.x*.5+.5,.5-a.y*.5);gl_Position=vec4(a,0.,1.);}';
const fs=`precision highp float;uniform sampler2D tC,tL,tM,tR,tB;uniform vec3 cov,wv;uniform float T,fl,lxp,asp,bolt;uniform vec4 rip[72];varying vec2 vUv;
vec2 wave(vec2 p,vec2 d,float k,float sp,float a){d=normalize(d);return d*a*k*cos(dot(p,d)*k+T*sp);}
void main(){vec2 p=vec2((vUv.x-.5)*cov.x+.5,vUv.y*cov.y+(1.-cov.y)*cov.z);if(p.y<.598)discard;
float ndcx=(p.x-.5)*2.,ndcy=1.-2.*p.y,t17=.30573;float ax=ndcx*t17*asp,ay=ndcy*t17,cP=.99812,sP=.06124;float dy=ay*cP+sP,dz=ay*sP-cP;if(dy>-.0005)discard;
float tt=-2.4/dy;vec2 w=vec2(ax*tt,15.+dz*tt);vec2 g=vec2(0.),gr=vec2(0.);float imp=0.;
g+=wave(w,vec2(1.,.35),.9,.8,.085);g+=wave(w,vec2(-.6,1.),2.1,1.3,.045);g+=wave(w,vec2(.4,.9),3.7,1.9,.026);g+=wave(w,vec2(-1.,.5),6.5,2.7,.014);g+=wave(w,vec2(.2,-1.),11.,3.4,.007);
for(int i=0;i<72;i++){vec4 r=rip[i];if(r.w<=0.)continue;vec2 d=w-r.xy;if(abs(d.x)>1.7||abs(d.y)>1.7)continue;float te=T-r.z;if(te<0.||te>1.7)continue;float rr=length(d);vec2 dir=d/max(rr,.001);
imp+=exp(-rr*rr/.0035)*exp(-te*16.)*r.w;
for(int m=0;m<3;m++){float fm=float(m),R=.55*te-fm*.13+.02;if(R<0.)continue;float s=rr-R,wd=.045+.025*te,env=exp(-s*s/(wd*wd)),kk=44.;float amp=r.w*exp(-te*1.9)*(1.-fm*.32)*.5/(.45+R*2.2);float dh=amp*env*(-kk*sin(kk*s)-2.*s/(wd*wd)*cos(kk*s));gr+=dh*dir*.05;}}
vec2 gt=g+gr;float dep=clamp((p.y-.6)/.4,0.,1.);vec3 N=normalize(vec3(-gt.x,1.,-gt.y));vec2 off=vec2(gt.x*.12,gt.y*.09)*(.25+.75*sqrt(dep));vec2 uv=clamp(p+off,vec2(.001),vec2(.999));
vec3 cc=texture2D(tC,uv).rgb,lit=texture2D(tL,uv).rgb*wv.x+texture2D(tM,uv).rgb*wv.y+texture2D(tR,uv).rgb*wv.z;vec3 refl=mix(cc,lit,fl);
vec3 V=normalize(-vec3(ax,dy,dz));float cs=max(dot(N,V),0.);float F=.04+.96*pow(1.-cs,5.);F=clamp(F*1.3+.34,0.,1.);
vec3 body=mix(vec3(.014,.03,.05),vec3(.028,.06,.095),dep)*(1.+fl*4.);vec3 col=body*(1.-F)+refl*F;
vec3 Rf=reflect(-V,N);vec3 Ld=normalize(vec3((lxp-.5)*70.,16.,-75.));col+=vec3(.75,.86,1.)*pow(max(dot(Rf,Ld),0.),160.)*fl*2.6;
vec3 Lm=normalize(vec3(-12.,16.,-34.));col+=vec3(.45,.56,.9)*pow(max(dot(Rf,Lm),0.),70.)*.5*(1.-fl*.7);
float rim=clamp(length(gr)*7.5,0.,1.);col+=vec3(.62,.78,1.)*rim*(.62+fl*1.6)*(.5+.5*F);col+=vec3(.85,.93,1.)*clamp(imp,0.,1.)*(.5+fl);
vec2 pr=vec2(p.x+off.x*1.3,1.2-p.y+off.y*.6);vec2 sr=vec2((pr.x-.5)/cov.x+.5,(pr.y-(1.-cov.y)*cov.z)/cov.y);
if(bolt>.5&&sr.x>0.&&sr.x<1.&&sr.y>0.&&sr.y<1.){vec4 bb=texture2D(tB,sr);col+=bb.rgb*bb.a*fl*F*1.6;}
col=mix(col,vec3(.08,.1,.18)*(1.+fl*2.),smoothstep(.12,0.,dep)*.55);float al=smoothstep(.598,.607,p.y);gl_FragColor=vec4(col*al,al);}`;
const sh=(t,src)=>{const o=gl.createShader(t);gl.shaderSource(o,src);gl.compileShader(o);return o},pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);
if(!gl.getProgramParameter(pr,gl.LINK_STATUS)){console.warn(gl.getProgramInfoLog(pr));return}
gl.useProgram(pr);const bf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,bf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);const al=gl.getAttribLocation(pr,'a');gl.enableVertexAttribArray(al);gl.vertexAttribPointer(al,2,gl.FLOAT,false,0,0);
const U=n=>gl.getUniformLocation(pr,n);let ready=0;
['calm','L','C','R'].forEach((k,i)=>{const im=new Image();im.onload=()=>{const t=gl.createTexture();gl.activeTexture(gl.TEXTURE0+i);gl.bindTexture(gl.TEXTURE_2D,t);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,im);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);ready++};im.src=REF[k]});
['tC','tL','tM','tR'].forEach((n,i)=>gl.uniform1i(U(n),i));gl.uniform1i(U('tB'),4);const bt=gl.createTexture();gl.activeTexture(gl.TEXTURE4);gl.bindTexture(gl.TEXTURE_2D,bt);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));[[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR],[gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE],[gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE]].forEach(([a,b])=>gl.texParameteri(gl.TEXTURE_2D,a,b));let boltOn=0;gl.uniform1f(U('asp'),A);gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
function size(){cov();GY0=Math.max(.45,p2s(.5,.665)[1]);GY1=.97;const sc=.62,w=Math.max(2,Math.round(mk.clientWidth*sc)),h=Math.max(2,Math.round(mk.clientHeight*sc));if(cv.width!==w||cv.height!==h){cv.width=w;cv.height=h}gl.viewport(0,0,cv.width,cv.height)}
new ResizeObserver(size).observe(mk);size();let lastP=0;
(function f(n){requestAnimationFrame(f);if(!vis||ready<4)return;T=still?3:n/1000;
if(!still&&n-lastP>650&&view=='stand'){lastP=n;const r=document.querySelector('.mk-rock');if(r){const a=r.getBoundingClientRect(),m=mk.getBoundingClientRect();ripFromStage((a.left+a.width*.5-m.left)/m.width,(a.bottom-a.height*.1-m.top)/m.height,1.05)}}
if(window.__mkBolt){window.__mkBolt=0;gl.activeTexture(gl.TEXTURE4);gl.bindTexture(gl.TEXTURE_2D,bt);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,document.getElementById('mkl'));boltOn=1}gl.uniform1f(U('bolt'),boltOn);gl.uniform3f(U('cov'),fx,fy,PY);gl.uniform3f(U('wv'),WL,WC,WR);gl.uniform1f(U('T'),T);gl.uniform1f(U('fl'),FL);gl.uniform1f(U('lxp'),s2p(LXP,0)[0]);gl.uniform4fv(U('rip'),RIP);
gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)})(performance.now())})();
/* rain */
(()=>{const rc=$('#mkrn'),rx=rc.getContext('2d');let W=0,H=0,D=[],R=[],SPL=[],last=performance.now(),lastRip=0;const spl=(x,y,z)=>{if(SPL.length>240)return;for(let i=0;i<4;i++)SPL.push({x,y,gy:y,vx:(Math.random()-.5)*(70+z*150),vy:-(70+Math.random()*180)*(.45+z),l:1,s:.7+z*1.1});if(R.length<70)R.push({x,y,r:1,m:4+z*9,a:.65})};
const mkd=()=>{const z=Math.random();return{x:Math.random()*(W+200),y:-Math.random()*H,z,vy:700+z*1300,len:10+z*34,w:.5+z*1.3,a:.12+z*.5,gy:H*(GY0+z*(GY1-GY0))}};
function rs(){const d=Math.min(devicePixelRatio||1,2);W=mk.clientWidth;H=mk.clientHeight;rc.width=W*d;rc.height=H*d;rx.setTransform(d,0,0,d,0,0);D=Array.from({length:Math.round(W*H/2800)},mkd)}
new ResizeObserver(rs).observe(mk);
(function f(n){requestAnimationFrame(f);if(!vis||still)return;const dt=Math.min(.04,(n-last)/1000);last=n;rx.clearRect(0,0,W,H);const k=1+FL*2.2;
rx.lineCap='round';
for(const q of D){const vx=-q.vy*.2;q.x+=vx*dt;q.y+=q.vy*dt;
if(q.y>q.gy){if(q.z>.12&&n-lastRip>22){lastRip=n;ripFromStage(q.x/W,q.gy/H,.6+q.z*.8);spl(q.x,q.gy,q.z)}q.x=Math.random()*(W+200);q.y=-20-Math.random()*60;q.gy=H*(GY0+Math.random()*(GY1-GY0));q.z=Math.min(1,Math.max(0,(q.gy/H-GY0)/(GY1-GY0)))}
const l=q.len;rx.strokeStyle=`rgba(196,214,255,${Math.min(1,q.a*k)})`;rx.lineWidth=q.w;rx.beginPath();rx.moveTo(q.x,q.y);rx.lineTo(q.x-vx/q.vy*l,q.y-l);rx.stroke()}
for(let i=SPL.length-1;i>=0;i--){const p=SPL[i];p.vy+=1100*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.l-=dt*3.2;if(p.l<=0||p.y>p.gy+4){SPL.splice(i,1);continue}rx.fillStyle=`rgba(205,222,255,${Math.min(1,p.l*k*.9)})`;rx.beginPath();rx.arc(p.x,p.y,p.s,0,6.283);rx.fill()}
for(let i=R.length-1;i>=0;i--){const p=R[i];p.r+=(p.m-p.r)*.14+.3;p.a-=dt*1.7;if(p.a<=0){R.splice(i,1);continue}
rx.strokeStyle=`rgba(200,218,255,${Math.min(1,p.a*k*.8)})`;rx.lineWidth=1;rx.beginPath();rx.ellipse(p.x,p.y,p.r,p.r*.32,0,0,6.283);rx.stroke()}})(performance.now())})();
new ResizeObserver(layout).observe(mk);window.__mkStrike=strike;window.__mkFL=v=>{FL=v;mk.style.setProperty('--fl',v)};layout();})();

/* ---------- script block 6 ---------- */
(()=>{const $=s=>document.querySelector(s);
const R=[['50','#F3E8FF'],['100','#E0C2FF'],['200','#C18AFF'],['300','#A45AFF'],['400','#963FFF'],['500','#7B2FFF'],['600','#5E1FE6'],['700','#4615B8']];
const lum=h=>{const c=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4));return .2126*c[0]+.7152*c[1]+.0722*c[2]};
const cr=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const INK='#16131C',tag=r=>r>=7?'AAA':r>=4.5?'AA':r>=3?'AA large':'Fail';
const to=$('#sgto');let tt;
function copy(h){const done=()=>{to.textContent='Copied '+h;to.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>to.classList.remove('on'),1400)};
try{navigator.clipboard.writeText(h).then(done,()=>{fb()})}catch(e){fb()}
function fb(){const t=document.createElement('textarea');t.value=h;t.style.position='fixed';t.style.opacity=0;document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(e){}t.remove();done()}}
$('#sgr').innerHTML=R.map(([n,h])=>{const w=cr(h,'#FFFFFF'),d=cr(h,INK),on=w>=d?'#FFFFFF':INK,r=Math.max(w,d);return `<button class="sg-sw" data-h="${h}" style="background:${h};color:${on}" aria-label="Copy ${h}"><div class="aa">Aa</div><div><b>${n}</b><span>${h}</span><small>${r.toFixed(1)}:1 · ${tag(r)}</small></div></button>`}).join('');
const N=[['Ink','#16131C'],['Muted','#8B8497'],['Surface','#F8F5FC']];
$('#sgn').innerHTML=N.map(([n,h])=>`<button data-h="${h}"><i style="background:${h}"></i>${n}<span>${h}</span></button>`).join('');
document.querySelectorAll('[data-h]').forEach(b=>b.onclick=()=>copy(b.dataset.h));
const T=[['Display','Budget tracker',32,700,-.03,'screen titles'],['Title','Start a new project',28,700,-.03,'step titles'],['Value','₹41.2L',18,700,-.035,'key numbers'],['Heading','Expense list',15,700,-.01,'card headings'],['Button','Next: Design Preferences',15,700,-.03,'primary actions'],['Amount','₹49,440',14,700,-.045,'list amounts'],['Body','Cement — 120 bags',13,600,-.01,'list text'],['Subtitle','Tell us the basics — we handle the rest',13,400,0,'supporting text'],['Caption','Total budget',10.5,500,-.01,'labels'],['Eyebrow','STEP 1 OF 3',9.5,700,.09,'step and tags, uppercase']];
$('#sgt').innerHTML=T.map(([n,t,sz,w,ls,use])=>{const st=`font-size:${sz}px;font-weight:${w};letter-spacing:${ls}em`;
const smp=n=='Button'?`<span class="sg-btn" style="${st}">${t}</span>`:n=='Eyebrow'?`<span class="sg-eb" style="${st}">${t}</span>`:`<span style="${st};${n=='Caption'||n=='Subtitle'?'color:#8B8497;':''}">${t}</span>`;
return `<div class="sg-row"><div><div class="nm2">${n}</div><div class="sgs" style="margin-top:2px;opacity:.7">${use}</div></div><div class="smp">${smp}</div><div class="sgs">${sz}px · ${({400:'Regular',500:'Medium',600:'SemiBold',700:'Bold'})[w]} ${w} · ${ls>0?'+':''}${ls?ls.toFixed(3).replace(/0+$/,'').replace(/\.$/,''):'0'}em</div></div>`}).join('');
})();

/* ---------- script block 7 ---------- */
(()=>{const $=s=>document.querySelector(s);
const sq=(bg,st,t,col)=>`<svg viewBox="0 0 64 64"><rect x="2.5" y="2.5" width="59" height="59" rx="15" fill="${bg}" stroke="${st}" stroke-width="3"/><text x="32" y="43.5" text-anchor="middle" font-family="Space Grotesk,Sora,sans-serif" font-size="31" font-weight="700" letter-spacing="-1" fill="${col}">${t}</text></svg>`;
const L={
figma:'<svg class="fg" viewBox="0 0 38 57"><path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/><path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>',
ps:sq('#001E36','#31A8FF','Ps','#31A8FF'),

claude:'<svg viewBox="0 0 24 24"><path fill="#D97757" d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/></svg>',
gpt:'<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#10A37F"/><g transform="translate(32 32)" fill="none" stroke="#fff" stroke-width="3.2" stroke-linejoin="round">'+[0,60,120,180,240,300].map(a=>`<rect x="-5.5" y="-20" width="11" height="22" rx="5.5" transform="rotate(${a})"/>`).join('')+'</g></svg>',
stitch:'<svg viewBox="0 0 64 64"><defs><linearGradient id="stg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4285F4"/><stop offset="1" stop-color="#A142F4"/></linearGradient></defs><rect x="2.5" y="2.5" width="59" height="59" rx="15" fill="url(#stg)"/><path d="M42 20c-3-4-9-5-13-3s-5 8 0 11 12 4 13 10-7 9-14 6c-3-1-5-3-6-5" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-dasharray="1 7"/></svg>',
excel:'<svg viewBox="0 0 64 64"><defs><linearGradient id="exg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#33C481"/><stop offset="1" stop-color="#107C41"/></linearGradient></defs><rect x="2.5" y="2.5" width="59" height="59" rx="15" fill="url(#exg)"/><rect x="36" y="14" width="18" height="36" rx="3" fill="#fff" opacity=".22"/><path d="M36 22h18M36 32h18M36 42h18" stroke="#fff" stroke-width="2" opacity=".7"/><path d="M12 18l16 28M28 18L12 46" stroke="#fff" stroke-width="7" stroke-linecap="round"/></svg>'};
const T=[['Figma','UI design','#A259FF','figma'],['Photoshop','Image editing','#31A8FF','ps'],['Claude AI','AI assistant','#D97757','claude'],['ChatGPT','AI assistant','#10A37F','gpt'],['Stitch AI','AI UI design','#7C6BFF','stitch'],['Excel','Data & sheets','#21A366','excel']];
$('#tl').innerHTML=T.map((t,i)=>`<div class="tc2" tabindex="0" style="--c:${t[2]};--i:${i}" role="button" aria-label="${t[0]}"><div class="lg">${L[t[3]]}</div><div><h6>${t[0]}</h6><div class="tct">${t[1]}</div></div></div>`).join('');
document.querySelectorAll('.tc2').forEach(c=>{
c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty('--mx',x+'px');c.style.setProperty('--my',y+'px');c.style.setProperty('--ry',((x/r.width)-.5)*18+'deg');c.style.setProperty('--rx',-((y/r.height)-.5)*14+'deg');c.style.setProperty('--tx',((x/r.width)-.5)*10+'px');c.style.setProperty('--ty',((y/r.height)-.5)*8+'px')});
c.addEventListener('pointerleave',()=>{['--rx','--ry','--tx','--ty'].forEach(k=>c.style.removeProperty(k));c.classList.remove('press')});
c.addEventListener('pointerdown',e=>{c.classList.add('press');const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
const rp=document.createElement('span');rp.className='rpl';rp.style.cssText=`left:${x}px;top:${y}px;width:${r.width*1.6}px;height:${r.width*1.6}px`;c.appendChild(rp);setTimeout(()=>rp.remove(),720);
for(let i=0;i<12;i++){const a=Math.random()*6.283,d=40+Math.random()*70,sp=document.createElement('i');sp.className='spk';sp.style.cssText=`left:${x}px;top:${y}px;--dx:${Math.cos(a)*d}px;--dy:${Math.sin(a)*d}px`;c.appendChild(sp);setTimeout(()=>sp.remove(),720)}});
['pointerup','pointercancel'].forEach(ev=>c.addEventListener(ev,()=>c.classList.remove('press')))});
})();

/* ---------- script block 8 ---------- */
(()=>{const $=s=>document.querySelector(s),D={"apps": ["Civil Calculator", "Construction Calculator", "MagicPlan", "Planner 5D", "Houzz"], "feats": [["User Registration & Login", "n", "n", "y", "y", "y"], ["User Profile Management", "n", "n", "y", "y", "y"], ["Construction Cost Estimation", "y", "y", "l", "n", "n"], ["Material Quantity Calculator", "y", "y", "l", "n", "n"], ["Cement Quantity Calculator", "y", "y", "n", "n", "n"], ["Sand quantity Calculator", "y", "y", "n", "n", "n"], ["Brick Quantity Calculator", "y", "y", "n", "n", "n"], ["Steel Quantity Calculator", "y", "y", "n", "n", "n"], ["Concrete volume Calculator", "y", "y", "n", "n", "n"], ["Tile Quantity Calculator", "y", "y", "n", "n", "n"], ["Paint Quantity Calculator", "y", "y", "n", "n", "y"], ["Flooring Cost Calculator", "y", "y", "n", "n", "n"], ["Roofing Cost Calculator", "l", "l", "n", "n", "n"], ["Plumbing Material Estimation", "n", "n", "n", "n", "n"], ["Electrical material Estimation", "n", "n", "n", "n", "n"], ["Building Area Calculator", "y", "y", "y", "y", "n"], ["Floor Plan Design", "n", "n", "y", "y", "n"], ["2D House Layout", "n", "n", "y", "y", "n"], ["3D House Visualization", "n", "n", "l", "y", "y"], ["Room Dimension Calculator", "y", "y", "y", "y", "n"], ["Budget Planning", "n", "n", "l", "n", "n"], ["Expense Tracking", "n", "n", "n", "n", "n"], ["Cost Comparison by Material Brand", "n", "n", "n", "n", "n"], ["Material Price Updates", "n", "n", "n", "n", "n"], ["Labor Cost Estimation", "n", "l", "n", "n", "n"], ["Construction Timeline Planner", "n", "n", "l", "n", "n"], ["Project Progress Tracking", "n", "n", "y", "n", "n"], ["Daily Work Log", "n", "n", "y", "n", "n"], ["Project Document storage", "n", "n", "y", "n", "n"], ["PDF Estimate Report Generation", "l", "l", "y", "y", "n"], ["Save & Manage Multiple Projects", "n", "n", "y", "y", "y"], ["Material Checklist", "n", "n", "l", "n", "n"], ["Construction Tips & Guidelines", "n", "l", "n", "n", "y"], ["Unit Converter (ft, m, sq.ft, sq.m)", "y", "y", "n", "n", "n"], ["Loan / EMI Calculator", "n", "n", "n", "n", "n"], ["Contractor Contact Directory", "n", "n", "n", "n", "y"], ["Supplier Contact Directory", "n", "n", "n", "n", "l"], ["Notifications & Reminders", "n", "n", "y", "y", "y"], ["Offline Calculation Support", "y", "y", "l", "l", "n"], ["AI-Based Construction Cost Recommendation", "n", "n", "n", "n", "n"]], "rev": {"Planner 5D": [["C.S.", "The way the wall drawing works is badly implemented (adjacent rooms dont share the same wall but sometimes habe their own representation of that wall side which leads to…", "The wall editing system is poorly implemented because adjacent rooms do not share common walls, making precise dimension adjustments difficult."], ["C.L.", "First mistake, I bought a non-refundable subscription. I thought it had a free trial period- NO FREE TRIAL on subscription. Second, the functionality of this program was…", "The app lacks a free trial and offers a non-refundable subscription, which can lead to user dissatisfaction if expectations are unclear."], ["IBW", "I paid for designer to do a layout of a house and they we're receptive at first then I had to meet with the builder so it's been several months but now I need to go back…", "The user experienced poor customer support, as the design team stopped responding despite requests for paid revisions."]], "magicplan": [["S.S.", "Great U.I but after you get so far into a design it kicks you off and will not let you back on at all but it allows you too look at the sample design im assuming this…", "The app has an attractive user interface, but users may lose access to their designs after spending significant time creating them."], ["H.P.", "app is way too slow, from sign up to click a button. It needs several seconds to complete an simple action. The UX is also not good enough, too many pop op, too many…", "The UI is not well optimized for Android, and basic settings like measurement units should automatically match the user's selected country."], ["K.I.", "So close for my needs. the measurement aspect is glitchy cant always make the correct measurements. I'm a custom cabinet guy so I need to to design and show what the…", "The measurement tool is unreliable, making it difficult to create accurate designs for professional use."]], "Houzz": [["H.C.", "It was working so well, until I accidentally clicked save. I spent 2 HOURS working on a floor plan and it was a wonderful experience. But then it said saving design. I…", "The lack of a reliable save and recovery mechanism may result in lost progress and a poor user experience."], ["T.E.", "This is not a design app. There's only pictures and a way to shop. Prepare to go in circles...over and over.", "Its confusing navigation and lack of useful design tools create a frustrating user experience."], ["S.H.", "I used to really enjoy thos app but the new layout is too focused. I'm not always looking for anything specific. This new layout doesn't foster browsing and day…", "The new layout reduces the browsing experience, making it harder for users to explore ideas freely and discover inspiration."]], "Construction Calculator": [["D.C.", "another useless app on Google play. there's not one major subject in this app. construction is not solar panels, or water retaining, or what ever is on this app. if you…", "Users are dissatisfied because the app lacks essential construction calculators and focuses on unrelated topics."], ["R.K.C.", "Please update ASAP: 1. For the cost of concrete by volume, there shall be option of rate for individual material then to calculate total cost in each segments 2…", "Users expect advanced construction calculations, including detailed material-wise cost estimation and support for more structural elements."], ["S.T.", "Gives wrong results. Please don't depend on this apps. Work little bit harder, make your own excel sheet, make your own ready reckoner. I am uninstalling app now.", "Improving calculation accuracy and thoroughly testing the app are essential to increase user confidence and satisfaction."]], "civil Construction": [["K.B.", "Too many ads can't use it long enough to determine if it is a good app due to ads", "Excessive advertisements negatively affect the user experience and make the app difficult to use."], ["B.W.", "Construction has framing this app doesn't", "Users expect essential construction features like framing calculations, but the app does not provide them."], ["C.V.", "This app constantly pops up ads to upgrade to pro all throughout the day even when the app isn't being used. A pop up while using the app is one thing, but if the app…", "Frequent upgrade advertisements, even when the app is not in use, create a poor user experience and frustrate users."]]}, "gaps": ["Plumbing Material Estimation", "Electrical material Estimation", "Expense Tracking", "Cost Comparison by Material Brand", "Material Price Updates", "Loan / EMI Calculator", "AI-Based Construction Cost Recommendation"]};
const COL=['#f5a524','#ff7a45','#4fe3ff','#b44bff','#5bd66f'],NM=['Civil Calculator','Construction Calculator','magicplan','Planner 5D','Houzz'];
const F=D.feats,V={y:'Yes',l:'Limited',n:'No'};
const gaps=F.filter(f=>f.slice(1).every(v=>v=='n')).map(f=>f[0]);$('#cpgn').textContent=gaps.length;
$('#cpa').innerHTML=NM.map((n,i)=>{const c=['y','l','n'].map(k=>F.filter(f=>f[i+1]==k).length);return `<div class="cp-app" style="--c:${COL[i]}"><h6>${n}</h6><div class="cp-bar"><i class="y" style="width:${c[0]/F.length*100}%"></i><i class="l" style="width:${c[1]/F.length*100}%"></i><i class="n" style="width:${c[2]/F.length*100}%"></i></div><p>${c[0]} Yes · ${c[1]} Limited · ${c[2]} No</p></div>`}).join('');
const strong=F.filter(f=>f.slice(1).filter(v=>v=='y').length>=3).length;
const FL=[['all','All '+F.length,()=>true],['gap','Gaps · nobody offers ('+gaps.length+')',f=>gaps.includes(f[0])],['strong','Well covered · 3+ apps ('+strong+')',f=>f.slice(1).filter(v=>v=='y').length>=3]];
const tb=$('#cpt');
function table(k){const fn=FL.find(x=>x[0]==k)[2];tb.innerHTML=`<thead><tr><th>Feature</th>${NM.map((n,i)=>`<th style="color:${COL[i]}">${n}</th>`).join('')}</tr></thead><tbody>${F.filter(fn).map(f=>`<tr class="${gaps.includes(f[0])?'gap':''}"><td>${f[0]}${gaps.includes(f[0])?'<span class="gt">GAP</span>':''}</td>${f.slice(1).map(v=>`<td class="${v}"><span class="c" aria-hidden="true">${v=='y'?'✓':v=='l'?'':'·'}</span><span class="vh">${V[v]}</span></td>`).join('')}</tr>`).join('')}</tbody>`;
document.querySelectorAll('#cpf button').forEach(b=>b.classList.toggle('on',b.dataset.k==k))}
$('#cpf').innerHTML=FL.map(x=>`<button data-k="${x[0]}">${x[1]}</button>`).join('');$('#cpf').onclick=e=>{const b=e.target.closest('button');b&&table(b.dataset.k)};table('all');
const RV=D.rev,RK=['civil Construction','Construction Calculator','magicplan','Planner 5D','Houzz'],RC=[COL[0],COL[1],COL[2],COL[3],COL[4]];
$('#cpr-t').innerHTML=RK.map((k,i)=>`<button data-i="${i}" style="--c:${RC[i]}">${k}</button>`).join('');
function rv(i){const k=RK[i],c=RC[i];document.querySelectorAll('#cpr-t button').forEach((b,j)=>b.classList.toggle('on',j==i));$('#cpr').innerHTML=(RV[k]||[]).map(r=>`<div class="cp-rv" style="--c:${c}"><b>${r[2]}</b><blockquote>${r[1]}</blockquote><span>REVIEWER ${r[0]}</span></div>`).join('')}
$('#cpr-t').onclick=e=>{const b=e.target.closest('button');b&&rv(+b.dataset.i)};rv(3);
const OK={'Expense Tracking':'Budget tracker','Material Price Updates':'Price tracker','AI-Based Construction Cost Recommendation':'AI cost estimate'};
$('#cpg').innerHTML=gaps.map(g=>`<div class="cp-g${OK[g]?' ok':''}">${g}${OK[g]?`<br><em>IN DREAM HOUZZZ · ${OK[g].toUpperCase()}</em>`:''}</div>`).join('');
})();

/* ---------- script block 9 ---------- */
(()=>{const g=document.querySelector('#wfg');if(!g)return;const cs=[...g.querySelectorAll('.wf-c')];
const cur=new WeakMap(),raf=new WeakMap();
const set=(c,v)=>{cur.set(c,v);c.style.setProperty('--x',v+'%')};
function anim(c,to,ms){cancelAnimationFrame(raf.get(c));const from=cur.get(c)??62,t0=performance.now();const f=n=>{const k=Math.min(1,(n-t0)/ms),e=1-Math.pow(1-k,3);set(c,from+(to-from)*e);if(k<1)raf.set(c,requestAnimationFrame(f))};raf.set(c,requestAnimationFrame(f))}
cs.forEach(c=>{set(c,62);const mv=e=>{cancelAnimationFrame(raf.get(c));const r=c.getBoundingClientRect();set(c,Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100)))};
c.addEventListener('pointermove',mv);c.addEventListener('pointerdown',mv)});
const still=matchMedia('(prefers-reduced-motion:reduce)').matches;
new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){o.unobserve(e.target);const c=e.target;if(!still){set(c,100);setTimeout(()=>anim(c,55,1100),120*cs.indexOf(c))}}}),{threshold:.3}).observe&&cs.forEach(c=>{});
const io=new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){o.unobserve(e.target);const c=e.target;if(!still){set(c,100);setTimeout(()=>anim(c,55,1100),90*cs.indexOf(c))}}}),{threshold:.25});cs.forEach(c=>io.observe(c));
document.querySelector('#wfb').onclick=e=>{const b=e.target.closest('button');if(!b)return;document.querySelectorAll('#wfb button').forEach(x=>x.classList.toggle('on',x===b));cs.forEach((c,i)=>setTimeout(()=>anim(c,+b.dataset.v,700),i*60))}})();

/* ---------- script block 10 ---------- */
(()=>{const $=s=>document.querySelector(s);
/* quantitative */
const QD=[
{q:'What was the hardest part of planning your house?',c:'🏠 Planning · Home construction',it:[['Budget and material cost',2],['Planning and choosing a design',2],['Finding a good engineer',1]]},
{q:'How did you picture the house before construction?',c:'🖼️ Visualising · Home construction',it:[['Photos or online searches',2],['Asked the engineer',1],['Visited a built house',1],['Imagined it myself',1]]},
{q:'What made cost estimation difficult?',c:'💰 Cost · Home construction',it:[['Unclear or confusing cost',2],['Changing material prices',1],['High labour cost',1],['Extra expenses',1]]},
{q:'How did you manage the construction work?',c:'🛠️ Site work · Home construction',it:[['Checked the site themselves',3],['Left it to the contractor',1],['Family helped',1]]},
{q:'What usually caused delays?',c:'⏳ Delays · Home construction',it:[['Workers late or short',2],['Materials arrived late',1],['Rain',1],['Payment issues',1]]},
{q:'How useful would a realistic 3D view be?',c:'🧊 3D view · Home construction',it:[['Very useful or helpful',2],['Easier to understand',2],['Helps planning',1]]}];
const PAL=['#ff4fa3','#ffc93c','#4fe3ff','#6cdc4f'];
const dk=(h,k)=>'#'+[1,3,5].map(i=>Math.round(parseInt(h.slice(i,i+2),16)*k).toString(16).padStart(2,'0')).join('');
function pie(it){const cx=130,cy=76,rx=94,ry=54,d=26,tot=it.reduce((a,b)=>a+b[1],0);let a0=-Math.PI/2;const P=(a,dy=0)=>[cx+rx*Math.cos(a),cy+ry*Math.sin(a)+dy];
const sl=it.map((x,i)=>{const a1=a0+x[1]/tot*2*Math.PI,m=(a0+a1)/2,o={i,a0,a1,m,col:PAL[i%4],ox:Math.cos(m)*5,oy:Math.sin(m)*3};a0=a1;return o}).sort((p,q)=>Math.sin(p.m)-Math.sin(q.m));
let g='';for(const o of sl){const s0=Math.max(o.a0,0),e0=Math.min(o.a1,Math.PI);let wall='';if(s0<e0){const A=P(s0),B=P(e0),C=P(e0,d),D=P(s0,d);wall=`<path d="M${A} A${rx} ${ry} 0 0 1 ${B} L${C} A${rx} ${ry} 0 0 0 ${D}Z" fill="${dk(o.col,.62)}"/>`}
const A=P(o.a0),B=P(o.a1),big=o.a1-o.a0>Math.PI?1:0;g+=`<g class="qd-s" data-i="${o.i}" style="--ox:${o.ox.toFixed(1)}px;--oy:${o.oy.toFixed(1)}px">${wall}<path d="M${cx},${cy} L${A} A${rx} ${ry} 0 ${big} 1 ${B}Z" fill="${o.col}" stroke="${dk(o.col,.8)}" stroke-width=".8"/><path d="M${cx},${cy} L${A} A${rx} ${ry} 0 ${big} 1 ${B}Z" fill="url(#qgl)" opacity=".55"/></g>`}
return `<svg class="qd-p" viewBox="0 0 260 ${cy+ry+d+14}"><defs><radialGradient id="qgl" cx=".35" cy=".25" r=".9"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><ellipse cx="${cx}" cy="${cy+d+10}" rx="${rx+6}" ry="14" fill="#000" opacity=".35"/>${g}</svg>`}
$('#qdg').innerHTML=QD.map((c,n)=>{const tot=c.it.reduce((a,b)=>a+b[1],0);return `<div class="qd-c"><div class="qd-h"><i>${n+1}</i><div><b>${c.q}</b><span>${c.c} · ${tot} responses</span></div></div>${pie(c.it)}<div class="qd-l">${c.it.map((x,i)=>`<div class="qd-r" data-i="${i}" style="--c:${PAL[i%4]}"><u></u><span>${x[0]}</span><em>${x[1]}</em><strong>${Math.round(x[1]/tot*100)}%</strong></div>`).join('')}</div></div>`}).join('');
document.querySelectorAll('.qd-c').forEach(c=>{const hv=(i,on)=>c.querySelectorAll(`[data-i="${i}"]`).forEach(e=>e.classList.toggle('hv',on));c.addEventListener('pointerover',e=>{const t=e.target.closest('[data-i]');if(t)hv(t.dataset.i,true)});c.addEventListener('pointerout',e=>{const t=e.target.closest('[data-i]');if(t)hv(t.dataset.i,false)})});
/* empathy maps users 2 and 3 */
const EM=[{S:['Finding a good engineer was hard','The engineer experience was just OK','Did not like the kitchen design','2D blueprints were hard to understand','Workers were expensive and came late'],T:['Technology makes the work easy','Ratings help choose professionals','Accurate details build trust','Price updates would help'],D:['Asked the engineer to picture the house','Compared prices to pick materials','Let the contractor manage the work'],F:['Worried about wrong estimation']},
{S:['Planning was confusing','Could not imagine the house from a 2D plan','Labour cost was high','Workers were unavailable'],T:['Technology reduces mistakes','Reviews help choose professionals','Wants a timeline before starting','Interior ideas would be nice'],D:['Searched online to picture the house','Asked friends about materials','Checked the site every day'],F:['Worried about security']}];
const L=a=>a.map(x=>`<li>${x}</li>`).join('');
$('#emx').innerHTML=EM.map((e,i)=>`<div class="em em-p" id="em${i+1}" hidden><div><h5>Says</h5><ul>${L(e.S)}</ul></div><div><h5>Thinks</h5><ul>${L(e.T)}</ul></div><div><h5>Does</h5><ul>${L(e.D)}</ul></div><div><h5>Feels</h5><ul>${L(e.F)}</ul></div></div>`).join('');
$('#emt').onclick=e=>{const b=e.target.closest('button');if(!b)return;document.querySelectorAll('#emt button').forEach(x=>x.classList.toggle('on',x===b));[0,1,2].forEach(i=>{const p=$('#em'+i);p.hidden=String(i)!==b.dataset.u})};
})();
