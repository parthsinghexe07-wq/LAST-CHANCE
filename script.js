const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");

function playMusic(){
  music.volume=.55;
  music.play().then(()=>musicBtn.textContent="🔊").catch(()=>{});
}
function toggleMusic(){
  if(music.paused){playMusic()}else{music.pause();musicBtn.textContent="🎵"}
}
function startSite(){
  playMusic();
  document.querySelectorAll(".reveal").forEach((x,i)=>setTimeout(()=>x.classList.add("show"),i*120));
  spawnHearts(12);
  document.getElementById("letter").scrollIntoView({behavior:"smooth"});
}
function poll(){
  const picked=document.querySelector('input[name="reason"]:checked');
  const box=document.getElementById("pollResult");
  box.style.display="block";
  if(!picked){box.textContent="Panuu 😭 pehle ek option toh choose kar.";return}
  const replies={
    time:"Fair. Time first. Main uss answer ko respect karta hoon. 🫶",
    someone:"Okay. I won't compete with someone you like. I just wanted you to know my side. ❤️",
    friend:"Samajh gaya. Main tumhari boundary respect karunga. No guilt trip. 🤝",
    feel:"Fair enough. Feelings force nahi hoti. Thank you for being honest. ❤️",
    other:"Theek hai. Jab tum comfortable ho tab bata dena. No pressure."
  };
  box.textContent=replies[picked.value];
}
function quiz(){
  const a=document.getElementById("q1").value;
  const b=document.getElementById("q2").value;
  const c=document.getElementById("q3").value;
  const box=document.getElementById("quizResult");
  box.style.display="block";
  box.innerHTML=`<b>Official Panuu Report 😂</b><br>
  Diagnosis: Parth ko ${a.toLowerCase()} thoda kam karna chahiye,
  ${b.toLowerCase()} pe kaam karna chahiye...
  aur "${c}" ko seriously lena chahiye. ❤️`;
}
function finish(){
  playMusic();
  document.getElementById("end").classList.add("show");
  document.body.style.overflow="hidden";
  spawnHearts(30);
  confetti();
}
function closeEnd(){
  document.getElementById("end").classList.remove("show");
  document.body.style.overflow="";
}
function spawnHearts(n){
  const holder=document.getElementById("hearts");
  for(let i=0;i<n;i++){
    const h=document.createElement("span");
    h.className="heart";
    h.textContent=["💗","💕","❤️","✨","🫶"][Math.floor(Math.random()*5)];
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(18+Math.random()*25)+"px";
    h.style.animationDuration=(3+Math.random()*4)+"s";
    holder.appendChild(h);
    setTimeout(()=>h.remove(),8000);
  }
}
function confetti(){
  const c=document.getElementById("confetti"),ctx=c.getContext("2d");
  c.width=innerWidth;c.height=innerHeight;
  const pieces=Array.from({length:220},()=>({
    x:innerWidth/2+(Math.random()-.5)*140,y:innerHeight*.43,
    vx:(Math.random()-.5)*17,vy:-Math.random()*16-5,
    g:.25+Math.random()*.2,s:4+Math.random()*8,r:Math.random()*6.2
  }));
  let f=0;
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    pieces.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.r+=.08;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);
      ctx.fillStyle=["#fff","#ffd1e5","#ffe66d","#ff4f9e"][Math.floor(Math.random()*4)];
      ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*1.7);ctx.restore();
    });
    if(f++<180)requestAnimationFrame(draw);
  }
  draw();
}
window.addEventListener("load",()=>{
  document.querySelectorAll(".reveal").forEach((x,i)=>setTimeout(()=>x.classList.add("show"),i*140));
  spawnHearts(10);
});
