/* ============ 作品数据 ============ */
const WORKS = [
  { f:'ai-01.jpg',          t:'高硼硅玻璃水杯',      d:'清透看得见 · 主图视觉', c:'ai',     cn:'AI 商品视觉' },
  { f:'ai-02.jpg',          t:'便携折叠水杯',        d:'户外露营场景合成',      c:'ai',     cn:'AI 商品视觉' },
  { f:'ai-03.jpg',          t:'和田玉手串',          d:'新中式国风质感',        c:'ai',     cn:'AI 商品视觉' },
  { f:'ai-04.jpg',          t:'运动吸管水杯',        d:'大容量 · 动感水花',     c:'ai',     cn:'AI 商品视觉' },
  { f:'ai-05.jpg',          t:'头戴式蓝牙耳机',      d:'奶油色调静物光影',      c:'ai',     cn:'AI 商品视觉' },
  { f:'ai-06.jpg',          t:'气泡酒罐视觉',        d:'悬浮水花创意合成',      c:'ai',     cn:'AI 商品视觉' },
  { f:'pdp-headphone.jpg',  t:'iKF R1 耳机详情页',   d:'六屏长图 · 模特场景',   c:'pdp',    cn:'详情页设计', tall:true },
  { f:'pdp-mouse.jpg',      t:'AULA SC525 详情页',   d:'六屏长图 · 全英文版',   c:'pdp',    cn:'详情页设计', tall:true },
  { f:'ppt-01.jpg',         t:'实证分析汇报',        d:'聚类 · 回归结果可视化', c:'data',   cn:'数据分析' },
  { f:'ppt-02.jpg',         t:'AISAS 路径拆解',      d:'Z 世代打卡决策链路',    c:'data',   cn:'数据分析' },
  { f:'logic-map.jpg',      t:'分析逻辑框架图',      d:'Scene-AISAS 模型树',    c:'data',   cn:'数据分析' },
  { f:'wordcloud.jpg',      t:'热门打卡地词云',      d:'高频词提取可视化',      c:'data',   cn:'数据分析' },
  { f:'viz-01.jpg',         t:'场景营销类别网络',    d:'关系网络图解',          c:'data',   cn:'数据分析' },
  { f:'uml-usecase.jpg',    t:'用例图',              d:'在线商城购买周边',      c:'uml',    cn:'系统建模' },
  { f:'uml-activity.jpg',   t:'活动图',              d:'下单支付全流程',        c:'uml',    cn:'系统建模' },
  { f:'uml-class.jpg',      t:'类图',                d:'对象结构与职责划分',    c:'uml',    cn:'系统建模' },
  { f:'uml-collab.jpg',     t:'协作图',              d:'消息时序与交互',        c:'uml',    cn:'系统建模' },
  { f:'wechat-ops.jpg',     t:'公众号运营',          d:'雍溪天华百卉 · 图文',   c:'ops',    cn:'内容运营' },
  { f:'flower-base.jpg',    t:'花卉基地宣传',        d:'种植基地品质展示',      c:'ops',    cn:'内容运营' },
  { f:'flower-category.jpg',t:'花卉品类运营',        d:'四季限定品类梳理',      c:'ops',    cn:'内容运营' },
  { f:'logo-huafan.jpg',    t:'花繁雍溪里 LOGO',     d:'工作室品牌图标设计',    c:'ops',    cn:'内容运营' },
  { f:'viz-02.jpg',         t:'关键词共现网络图',    d:'VOSviewer 文献可视化',  c:'data',   cn:'数据分析' },
  { f:'viz-03.jpg',         t:'文献数量趋势图',      d:'2015–2025 研究热度演变',c:'data',   cn:'数据分析' },
  { f:'flow-research.jpg',  t:'研究思路框架图',      d:'调查设计与分析路径',    c:'data',   cn:'数据分析' },
  { f:'flow-music-platform.jpg', t:'音乐平台流程图', d:'用户端全功能业务流程',  c:'uml',    cn:'系统建模' },
  { f:'poster-clean-culture.jpg', t:'清风廉语·墨韵中外', d:'书画大赛国风海报KV', c:'poster', cn:'海报设计', tall:true },
  { f:'poster-mothersday.jpg', t:'她听见了爱',        d:'物业母亲节活动海报',    c:'poster', cn:'海报设计', tall:true },
  { f:'poster-recruit.jpg',    t:'书画协会招新',      d:'撕纸拼贴国风海报',      c:'poster', cn:'海报设计', tall:true },
  { f:'product-quiz-app.jpg',  t:'题库小程序界面',    d:'刷题产品功能页设计',    c:'ui',     cn:'产品视觉' },
];

const CATS = [
  { k:'all',    label:'全部' },
  { k:'ai',     label:'AI 商品视觉' },
  { k:'pdp',    label:'详情页设计' },
  { k:'poster', label:'海报设计' },
  { k:'data',   label:'数据分析' },
  { k:'uml',    label:'系统建模' },
  { k:'ops',    label:'内容运营' },
  { k:'ui',     label:'题库搭建' },
];

const SKILLS = [
  { n:'01', h:'AI 商品视觉生成',   p:'商品主图、场景合成、国风与质感表达，覆盖水杯、耳机、饰品、饮品等品类。' },
  { n:'02', h:'电商详情页设计',   p:'六屏叙事结构、卖点层级规划、中英文排版与长图拼接输出。' },
  { n:'03', h:'海报与品牌视觉',   p:'活动海报、招新物料、LOGO 与品牌图标设计，兼顾国风与现代平面风格。' },
  { n:'04', h:'数据分析与可视化', p:'聚类、回归、词频与文献网络分析，结果图表化并转译为可读结论。' },
  { n:'05', h:'系统建模',         p:'UML 用例图、活动图、类图、协作图及业务流程图，完整表达系统结构。' },
  { n:'06', h:'内容运营与产品视觉',p:'公众号图文策划、基地宣传素材、产品界面设计与体系搭建。' },
];

/* ============ 渲染 ============ */
const grid = document.getElementById('grid');
const filterBox = document.getElementById('filters');

function count(k){ return k==='all' ? WORKS.length : WORKS.filter(w=>w.c===k).length; }

CATS.forEach((c,i)=>{
  const b=document.createElement('button');
  b.innerHTML = c.label + '<i>'+count(c.k)+'</i>';
  b.dataset.k=c.k;
  if(i===0) b.classList.add('on');
  filterBox.appendChild(b);
});

WORKS.forEach((w,i)=>{
  const el=document.createElement('article');
  el.className='card';
  el.dataset.c=w.c;
  el.dataset.i=i;
  el.innerHTML = `
    <div class="card-img${w.tall?' tall':''}">
      <span class="badge">${w.cn}</span>
      <img src="assets/${w.f}" alt="${w.t}" loading="lazy">
      <span class="zoom"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5M11 8v6M8 11h6"/></svg></span>
    </div>
    <div class="card-txt">
      <div><h3>${w.t}</h3><p>${w.d}</p></div>
      <span class="tag">${String(i+1).padStart(2,'0')}</span>
    </div>`;
  grid.appendChild(el);
});

const skillBox=document.getElementById('skills');
SKILLS.forEach(s=>{
  const d=document.createElement('div');
  d.className='skill';
  d.innerHTML=`<b>${s.n}</b><div><h4>${s.h}</h4><p>${s.p}</p></div>`;
  skillBox.appendChild(d);
});

const mq=document.getElementById('mq');
const words=['AI Product Visual','Detail Page Design','Poster & Branding','Data Visualization','System Modeling','Content Operation'];
mq.innerHTML = [0,1].map(()=>words.map(w=>`<span>${w}</span>`).join('')).join('');

document.getElementById('yr').textContent=new Date().getFullYear();
document.getElementById('n1').textContent=String(WORKS.length).padStart(2,'0');
const fieldCount = new Set(WORKS.map(w=>w.c)).size;
const n2 = document.querySelector('.hero-meta div:nth-child(2) span');
if(n2) n2.textContent = String(fieldCount).padStart(2,'0');
document.getElementById('note').textContent=`本页面为纯静态本地页面，${WORKS.length} 张作品图已全部下载至 assets/ 目录，断网环境下同样可正常浏览。`;

/* ============ 筛选 ============ */
filterBox.addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b) return;
  filterBox.querySelectorAll('button').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');
  const k=b.dataset.k;
  document.querySelectorAll('.card').forEach(c=>{
    const show = (k==='all'||c.dataset.c===k);
    c.classList.toggle('hide',!show);
    if(show){ c.classList.remove('in'); requestAnimationFrame(()=>io.observe(c)); }
  });
});

/* ============ 入场动画 ============ */
const io=new IntersectionObserver((es)=>{
  es.forEach((en,idx)=>{
    if(en.isIntersecting){
      const c=en.target;
      setTimeout(()=>c.classList.add('in'), Math.min(idx*55,330));
      io.unobserve(c);
    }
  });
},{threshold:.06,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.card').forEach(c=>io.observe(c));

/* ============ 导航 & 进度 ============ */
const nav=document.getElementById('nav'), prog=document.getElementById('prog');
function onScroll(){
  const y=window.scrollY;
  nav.classList.toggle('pinned', y>60);
  const h=document.documentElement.scrollHeight-window.innerHeight;
  prog.style.width = (h>0 ? (y/h*100) : 0) + '%';
}
window.addEventListener('scroll',onScroll,{passive:true});
onScroll();

/* ============ 灯箱 ============ */
const lb=document.getElementById('lb'), lbB=document.getElementById('lbB'),
      lbT=document.getElementById('lbT'), lbS=document.getElementById('lbS'),
      lbC=document.getElementById('lbC');
let cur=0;

function visible(){
  return [...document.querySelectorAll('.card:not(.hide)')].map(c=>+c.dataset.i);
}
function show(i){
  const w=WORKS[i]; if(!w) return;
  cur=i;
  lbT.textContent=w.t;
  lbS.textContent=w.cn+' · '+w.d;
  const list=visible();
  lbC.textContent=(list.indexOf(i)+1)+' / '+list.length;
  lbB.innerHTML='';
  const img=new Image();
  img.src='assets/'+w.f;
  img.alt=w.t;
  lbB.appendChild(img);
  lbB.scrollTop=0;
}
function open(i){ show(i); lb.classList.add('on'); document.body.style.overflow='hidden'; }
function close(){ lb.classList.remove('on'); document.body.style.overflow=''; }
function step(d){
  const list=visible(); if(!list.length) return;
  let p=list.indexOf(cur);
  p=(p+d+list.length)%list.length;
  show(list[p]);
}

grid.addEventListener('click',e=>{
  const c=e.target.closest('.card'); if(!c) return;
  open(+c.dataset.i);
});
document.getElementById('lbX').addEventListener('click',close);
document.getElementById('lbP').addEventListener('click',()=>step(-1));
document.getElementById('lbN').addEventListener('click',()=>step(1));
lb.addEventListener('click',e=>{ if(e.target===lb||e.target===lbB) close(); });
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('on')) return;
  if(e.key==='Escape') close();
  if(e.key==='ArrowLeft') step(-1);
  if(e.key==='ArrowRight') step(1);
});
