const slides = [
{
 tag:"FOUNDATIONS",eyebrow:"WELCOME TO THE CIRCLE LAB",title:"Circles are full of clues.",
 lead:"Explore how arcs, angles, secants, and tangents work together. Use the diagrams and mini activities to discover the rules.",
 content:`
 <article class="card diagram-card"><h2>Meet the circle</h2><p class="subtext">A circle is the set of points equally distant from its center.</p><div class="diagram-wrap">
 <svg viewBox="0 0 420 300" role="img" aria-label="Circle with center, radius, diameter, chord and arc">
 <circle cx="210" cy="150" r="105" fill="#e9efff" stroke="#3867f4" stroke-width="3"/>
 <path d="M105 150 A105 105 0 0 1 315 150" fill="none" stroke="#12a99a" stroke-width="8" stroke-linecap="round"/>
 <line x1="105" y1="150" x2="315" y2="150" stroke="#f5a623" stroke-width="3"/>
 <line x1="210" y1="150" x2="275" y2="67" stroke="#3867f4" stroke-width="4"/>
 <line x1="130" y1="85" x2="280" y2="95" stroke="#f06b85" stroke-width="4"/>
 <circle cx="210" cy="150" r="5" fill="#17243a"/><circle cx="275" cy="67" r="5" fill="#3867f4"/>
 <text x="220" y="169" font-size="13" fill="currentColor" font-weight="700">Center</text><text x="236" y="100" font-size="12" fill="#3867f4" font-weight="700">Radius</text>
 <text x="175" y="139" font-size="12" fill="#b97908" font-weight="700">Diameter</text><text x="155" y="70" font-size="12" fill="#d44a69" font-weight="700">Chord</text><text x="155" y="30" font-size="12" fill="#12a99a" font-weight="700">Arc</text>
 </svg></div><div class="legend"><span><i class="dot" style="background:#3867f4"></i>Radius</span><span><i class="dot" style="background:#f5a623"></i>Diameter</span><span><i class="dot" style="background:#f06b85"></i>Chord</span><span><i class="dot" style="background:#12a99a"></i>Arc</span></div></article>
 <article class="card rule-card"><h2>Circle vocabulary</h2><p class="subtext">Learn these before solving angle problems.</p>
 <div class="rule-box"><h3>Radius (r)</h3><p>A segment from the center to a point on the circle.</p></div><div class="rule-box orange"><h3>Diameter (d)</h3><p>A chord through the center. It is twice the radius.</p><div class="formula">d = 2r</div></div><div class="rule-box teal"><h3>Arc</h3><p>A curved part of the circle's circumference. One full circle measures 360°.</p></div>
 <div class="callout"><strong>Remember:</strong> The center is the point inside the circle. A chord connects two points on the circle.</div></article>
 <article class="card wide"><h2>Quick check</h2><p class="subtext">If a circle has radius 8 cm, what is its diameter?</p><div class="interactive" data-check="diameter"><div class="answer-row"><button class="choice" data-answer="8">8 cm</button><button class="choice" data-answer="16">16 cm</button><button class="choice" data-answer="64">64 cm</button></div><div class="feedback"></div></div></article>`
},
{
 tag:"ANGLE RELATIONSHIPS",eyebrow:"RULE 01 • ANGLES & ARCS",title:"Central vs. inscribed angles",
 lead:"Both angles can intercept the same arc—but the angle's vertex tells you which rule to use.",
 content:`
 <article class="card diagram-card"><h2>Same arc, different angle</h2><p class="subtext">Tap the buttons to compare the central angle and the inscribed angle.</p><div class="diagram-wrap"><svg id="angleDiagram" viewBox="0 0 420 300">
 <circle cx="210" cy="150" r="105" fill="#eaf0ff" stroke="#3867f4" stroke-width="3"/><path d="M210 150 L302 99 A105 105 0 0 0 118 99 Z" fill="#12a99a" opacity=".17"/>
 <path d="M118 99 A105 105 0 0 1 302 99" fill="none" stroke="#12a99a" stroke-width="7" stroke-linecap="round"/>
 <line x1="210" y1="150" x2="118" y2="99" stroke="#3867f4" stroke-width="3"/><line x1="210" y1="150" x2="302" y2="99" stroke="#3867f4" stroke-width="3"/>
 <line x1="210" y1="255" x2="118" y2="99" stroke="#f06b85" stroke-width="3"/><line x1="210" y1="255" x2="302" y2="99" stroke="#f06b85" stroke-width="3"/>
 <circle cx="210" cy="150" r="5" fill="#17243a"/><circle cx="210" cy="255" r="5" fill="#f06b85"/><text x="220" y="166" font-size="12" font-weight="700">O</text><text x="218" y="274" font-size="12" font-weight="700">P</text><text x="98" y="91" font-size="12" font-weight="700">A</text><text x="308" y="91" font-size="12" font-weight="700">B</text>
 <path d="M188 138 Q210 126 232 138" stroke="#3867f4" stroke-width="3" fill="none"/><path d="M193 231 Q210 219 227 231" stroke="#f06b85" stroke-width="3" fill="none"/>
 <text x="165" y="119" font-size="12" fill="#3867f4" font-weight="700">Central</text><text x="230" y="228" font-size="12" fill="#d44a69" font-weight="700">Inscribed</text>
 </svg></div><div class="answer-row"><button class="choice selected" id="showCentral">Show central angle</button><button class="choice" id="showInscribed">Show inscribed angle</button></div><div class="callout" id="angleCompare"><strong>Central angle:</strong> Its vertex is at the center O. Its measure equals the measure of intercepted arc AB.</div></article>
 <article class="card rule-card"><h2>The two big rules</h2><div class="rule-box"><h3>Central angle</h3><div class="formula">∠AOB = arc AB</div><p>The angle and its intercepted arc have equal degree measures.</p></div><div class="rule-box pink"><h3>Inscribed angle</h3><div class="formula">∠APB = ½ arc AB</div><p>The vertex P is on the circle. The angle is half the intercepted arc.</p></div><div class="callout"><strong>Example:</strong> If arc AB = 100°, then central angle AOB = 100° and inscribed angle APB = 50°.</div></article>
 <article class="card wide"><h2>Try it yourself</h2><p class="subtext">An inscribed angle intercepts an arc measuring 84°. Find the angle.</p><div class="interactive" data-check="inscribed"><div class="answer-row"><button class="choice" data-answer="42">42°</button><button class="choice" data-answer="84">84°</button><button class="choice" data-answer="168">168°</button></div><div class="feedback"></div></div></article>`
},
{
 tag:"INTERSECTING LINES",eyebrow:"RULE 02 • SECANTS & CHORDS",title:"Where lines meet matters.",
 lead:"When two lines intersect, the angle formula depends on whether the intersection is inside or outside the circle.",
 content:`
 <article class="card diagram-card"><h2>Inside the circle</h2><p class="subtext">Two chords cross at point R inside the circle.</p><div class="diagram-wrap"><svg viewBox="0 0 420 290">
 <circle cx="210" cy="145" r="105" fill="#eaf0ff" stroke="#3867f4" stroke-width="3"/>
 <line x1="130" y1="70" x2="300" y2="220" stroke="#3867f4" stroke-width="4"/><line x1="120" y1="215" x2="305" y2="75" stroke="#12a99a" stroke-width="4"/>
 <path d="M210 145 L234 165 A32 32 0 0 0 233 126 Z" fill="#f5a623" opacity=".8"/><circle cx="210" cy="145" r="5" fill="#17243a"/>
 <text x="219" y="138" font-size="13" font-weight="700">R</text><text x="105" y="62" font-size="12">N</text><text x="306" y="68" font-size="12">K</text><text x="109" y="232" font-size="12">P</text><text x="306" y="235" font-size="12">M</text><text x="240" y="155" font-size="12" fill="#8d5a00" font-weight="700">∠R</text>
 </svg></div><div class="rule-box orange"><h3>Chords intersect inside</h3><div class="formula">Angle = ½ (arc₁ + arc₂)</div><p>Add the measures of the two arcs intercepted by the angle and its vertical angle, then divide by 2.</p></div></article>
 <article class="card diagram-card"><h2>Outside the circle</h2><p class="subtext">Two secants begin at an outside point O.</p><div class="diagram-wrap"><svg viewBox="0 0 420 290">
 <circle cx="245" cy="145" r="100" fill="#eaf0ff" stroke="#3867f4" stroke-width="3"/>
 <line x1="35" y1="110" x2="340" y2="45" stroke="#12a99a" stroke-width="4"/><line x1="35" y1="110" x2="340" y2="245" stroke="#12a99a" stroke-width="4"/>
 <path d="M245 45 A100 100 0 0 1 340 45" stroke="#f5a623" stroke-width="6" fill="none"/><path d="M145 145 A100 100 0 0 0 185 215" stroke="#f06b85" stroke-width="6" fill="none"/>
 <circle cx="35" cy="110" r="5" fill="#17243a"/><text x="18" y="98" font-size="13" font-weight="700">O</text><text x="345" y="45" font-size="12">K</text><text x="140" y="145" font-size="12">N</text><text x="345" y="250" font-size="12">M</text><text x="58" y="129" font-size="12" fill="#12a99a" font-weight="700">angle</text>
 </svg></div><div class="rule-box teal"><h3>Secants intersect outside</h3><div class="formula">Angle = ½ (larger arc − smaller arc)</div><p>Subtract the smaller intercepted arc from the larger one, then divide by 2.</p></div></article>
 <article class="card wide"><h2>Which operation?</h2><p class="subtext">An angle is formed by two chords crossing inside a circle. What do you do with the two intercepted arcs?</p><div class="interactive" data-check="inside"><div class="answer-row"><button class="choice" data-answer="sum">Add, then divide by 2</button><button class="choice" data-answer="difference">Subtract, then divide by 2</button><button class="choice" data-answer="equal">Use only one arc</button></div><div class="feedback"></div></div><div class="callout" style="margin-top:13px"><strong>Also remember:</strong> For a tangent and a secant meeting outside, use half the difference of the intercepted arcs. For a tangent and a secant meeting at the point of tangency, use half the intercepted arc.</div></article>`
},
{
 tag:"REAL-LIFE APPLICATION",eyebrow:"RULE 03 • TANGENT PATHWAYS",title:"How long is the garden path?",
 lead:"A tangent touches a circle at exactly one point. The radius to that point is perpendicular to the tangent, creating a right triangle.",
 content:`
 <article class="card diagram-card"><h2>Garden pathway model</h2><p class="subtext">The main entrance is outside the circular garden. Both pathways are tangents, so their lengths are equal.</p><div class="diagram-wrap"><svg viewBox="0 0 430 300">
 <circle cx="145" cy="150" r="82" fill="#e6f7f1" stroke="#12a99a" stroke-width="3"/><circle cx="145" cy="150" r="4" fill="#17243a"/>
 <line x1="145" y1="150" x2="227" y2="150" stroke="#3867f4" stroke-width="3" stroke-dasharray="6 5"/><line x1="227" y1="150" x2="380" y2="83" stroke="#f5a623" stroke-width="4"/><line x1="227" y1="150" x2="380" y2="217" stroke="#f5a623" stroke-width="4"/>
 <line x1="145" y1="150" x2="201" y2="90" stroke="#3867f4" stroke-width="3"/><line x1="201" y1="90" x2="380" y2="83" stroke="#f5a623" stroke-width="4"/>
 <line x1="145" y1="150" x2="201" y2="90" stroke="#3867f4" stroke-width="3"/>
 <path d="M190 101 L198 108 L205 100" stroke="#3867f4" stroke-width="2" fill="none"/>
 <text x="117" y="171" font-size="12" font-weight="700">Center</text><text x="161" y="112" font-size="12" fill="#3867f4" font-weight="700">r</text><text x="273" y="75" font-size="12" fill="#bd7a08" font-weight="700">Pathway u</text><text x="298" y="145" font-size="12" font-weight="700">d</text><text x="342" y="238" font-size="12" font-weight="700">Entrance</text>
 </svg></div><div class="legend"><span><i class="dot" style="background:#3867f4"></i>Radius</span><span><i class="dot" style="background:#f5a623"></i>Tangent pathway</span></div></article>
 <article class="card rule-card"><h2>Use the Pythagorean theorem</h2><div class="rule-box"><h3>Step 1 • Find the radius</h3><div class="formula">A = πr²</div><p>Rearrange: r = √(A ÷ π)</p></div><div class="rule-box orange"><h3>Step 2 • Find the tangent</h3><div class="formula">r² + u² = d²</div><p>Rearrange: u = √(d² − r²)</p></div><div class="callout"><strong>Key idea:</strong> Radius, tangent, and the line from the center to the entrance make a right triangle. The tangent is never the hypotenuse here; the center-to-entrance distance d is.</div></article>
 <article class="card wide"><h2>Worked example from your lesson</h2><p class="subtext">Garden area = 706.5 m² and center-to-entrance distance = 40 m. Use π ≈ 3.1416.</p><div class="step-list"><div class="step"><div class="step-number">1</div><b>Find radius</b><p>r² = 706.5 ÷ 3.14 ≈ 225<br>r ≈ 15 m</p></div><div class="step"><div class="step-number">2</div><b>Substitute</b><p>15² + u² = 40²<br>225 + u² = 1600</p></div><div class="step"><div class="step-number">3</div><b>Solve</b><p>u² = 1375<br>u = √1375 ≈ <strong>37.08 m</strong></p></div></div></article>
 <article class="card wide"><h2>Calculate a new pathway</h2><p class="subtext">Area = 381.15 m², distance from center to entrance = 60 m, π ≈ 3.1416. About how long is each tangent pathway?</p><div class="interactive" data-check="path"><div class="answer-row"><button class="choice" data-answer="11">11 m</button><button class="choice" data-answer="58.98">58.98 m</button><button class="choice" data-answer="60">60 m</button></div><div class="feedback"></div></div><p class="subtext" style="margin-top:10px">Hint: first calculate r = √(381.15 ÷ 3.1416), then calculate u = √(60² − r²).</p></article>`
},
{
 tag:"REGULAR SHAPES",eyebrow:"RULE 04 • STARS & SPOKES",title:"A star hides a circle pattern.",
 lead:"Regular shapes divide the circle into equal arcs. Once you know one arc, you can find central and inscribed angles.",
 content:`
 <article class="card diagram-card"><h2>Regular five-pointed star</h2><p class="subtext">Five equally spaced points divide the circumference into five equal arcs.</p><div class="diagram-wrap"><svg viewBox="0 0 420 300">
 <circle cx="210" cy="150" r="110" fill="#f8faff" stroke="#3867f4" stroke-width="3"/>
 <path d="M210 40 L274.7 239 L105.3 116.1 L314.7 116.1 L145.3 239 Z" fill="#f5a623" fill-opacity=".13" stroke="#f5a623" stroke-width="4" stroke-linejoin="round"/>
 <path d="M210 40 A110 110 0 0 1 314.7 116.1" fill="none" stroke="#12a99a" stroke-width="7" stroke-linecap="round"/>
 <text x="203" y="25" font-size="13" font-weight="700">A</text><text x="321" y="117" font-size="13" font-weight="700">B</text><text x="277" y="259" font-size="13" font-weight="700">C</text><text x="91" y="259" font-size="13" font-weight="700">D</text><text x="79" y="117" font-size="13" font-weight="700">E</text><text x="247" y="62" font-size="12" fill="#12a99a" font-weight="700">72° arc</text>
 </svg></div></article>
 <article class="card rule-card"><h2>Regular star calculations</h2><div class="rule-box teal"><h3>Step 1 • One arc</h3><div class="formula">360° ÷ 5 = 72°</div><p>There are five equal arcs around the circle.</p></div><div class="rule-box"><h3>Step 2 • Inscribed angle</h3><div class="formula">72° ÷ 2 = 36°</div><p>An inscribed angle intercepting a 72° arc measures 36°.</p></div><div class="rule-box orange"><h3>Six wheel spokes</h3><div class="formula">360° ÷ 6 = 60°</div><p>Six equally spaced spokes create six equal central angles of 60° each.</p></div><div class="callout"><strong>Ferris wheel example:</strong> If consecutive spokes are 15° apart, there are 360° ÷ 15° = 24 spokes. With 2 seats per spoke, capacity = 24 × 2 = 48 seats.</div></article>
 <article class="card wide"><h2>Mini challenge</h2><p class="subtext">A wheel has 6 equally spaced spokes. What is the central angle between neighboring spokes?</p><div class="interactive" data-check="spokes"><div class="answer-row"><button class="choice" data-answer="30">30°</button><button class="choice" data-answer="60">60°</button><button class="choice" data-answer="90">90°</button></div><div class="feedback"></div></div></article>`
},
{
 tag:"CHECK YOUR LEARNING",eyebrow:"FINAL ROUND • MINI QUIZ",title:"Ready to test your circle skills?",
 lead:"Answer each question. Select an option to get instant feedback, then submit the quiz to see your score.",
 content:`
 <article class="card wide"><h2>Mini quiz: circle geometry</h2><p class="subtext">Six questions • one point each. You can change your answers before checking your final score.</p>
 <div id="quizArea">
 <div class="quiz-question" data-q="0"><p>1. A central angle measures 125°. What is the measure of its intercepted minor arc?</p><button class="quiz-option" data-v="0">62.5°</button><button class="quiz-option" data-v="1">125°</button><button class="quiz-option" data-v="2">250°</button></div>
 <div class="quiz-question" data-q="1"><p>2. An inscribed angle intercepts a 94° arc. The angle measures…</p><button class="quiz-option" data-v="0">47°</button><button class="quiz-option" data-v="1">94°</button><button class="quiz-option" data-v="2">188°</button></div>
 <div class="quiz-question" data-q="2"><p>3. Two chords intersect inside a circle. The angle is half the…</p><button class="quiz-option" data-v="0">difference of the intercepted arcs</button><button class="quiz-option" data-v="1">sum of the intercepted arcs</button><button class="quiz-option" data-v="2">smaller intercepted arc only</button></div>
 <div class="quiz-question" data-q="3"><p>4. A circle has radius 9 cm. How long is its diameter?</p><button class="quiz-option" data-v="0">4.5 cm</button><button class="quiz-option" data-v="1">18 cm</button><button class="quiz-option" data-v="2">81 cm</button></div>
 <div class="quiz-question" data-q="4"><p>5. A regular pentagon's five vertices divide the circle into equal arcs. Each arc measures…</p><button class="quiz-option" data-v="0">36°</button><button class="quiz-option" data-v="1">60°</button><button class="quiz-option" data-v="2">72°</button></div>
 <div class="quiz-question" data-q="5"><p>6. A tangent pathway, radius, and center-to-entrance segment form a…</p><button class="quiz-option" data-v="0">right triangle</button><button class="quiz-option" data-v="1">equilateral triangle</button><button class="quiz-option" data-v="2">straight angle</button></div>
 </div><div class="answer-row"><button id="checkQuiz" class="primary-btn">Check my score</button><button id="resetQuiz" class="secondary-btn">Try again</button></div><div id="scoreBox" class="score-box"><strong id="scoreNumber">0 / 6</strong><b id="scoreMessage">Keep practicing!</b><p id="scoreDetail" class="subtext"></p></div></article>
 <article class="card"><h2>Quick formula sheet</h2><div class="rule-box"><div class="formula">Central = arc</div><p>Vertex at the center.</p></div><div class="rule-box pink"><div class="formula">Inscribed = ½ arc</div><p>Vertex on the circle.</p></div><div class="rule-box orange"><div class="formula">Inside = ½ sum</div><p>Two chords cross inside.</p></div><div class="rule-box teal"><div class="formula">Outside = ½ difference</div><p>Two secants or tangents meet outside.</p></div><div class="rule-box"><div class="formula">A = πr²</div><p>Circle area.</p></div><div class="rule-box"><div class="formula">r² + u² = d²</div><p>Tangent pathway triangle.</p></div></article>
 <article class="card"><h2>You did it!</h2><p class="subtext">The most important habit is to identify where the angle's vertex is located before choosing a formula.</p><div class="callout"><strong>Self-check:</strong><br>• Center vertex → central angle<br>• On the circle → inscribed angle<br>• Chords cross inside → half the sum<br>• Lines meet outside → half the difference</div></article>`
}
];

let current=0;
const content=document.getElementById('slideContent');
const title=document.getElementById('slideTitle');
const lead=document.getElementById('slideLead');
const eyebrow=document.getElementById('eyebrow');
const tag=document.getElementById('sectionTag');
const navItems=[...document.querySelectorAll('.nav-item')];
function renderSlide(index){
 current=index; const s=slides[index];
 title.textContent=s.title;lead.textContent=s.lead;eyebrow.textContent=s.eyebrow;tag.textContent=s.tag;
 content.innerHTML=s.content;
 navItems.forEach((n,i)=>n.classList.toggle('active',i===index));
 document.getElementById('progressLabel').textContent=`Lesson ${index+1} of ${slides.length}`;
 document.getElementById('pageCount').textContent=`${String(index+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
 document.getElementById('progressBar').style.width=((index+1)/slides.length*100)+'%';
 document.getElementById('prevBtn').disabled=index===0;
 document.getElementById('nextBtn').textContent=index===slides.length-1?'Back to start ↺':'Next lesson →';
 bindChecks();bindAngleButtons();bindQuiz();
 window.scrollTo({top:0,behavior:'smooth'});
}
navItems.forEach(n=>n.addEventListener('click',()=>renderSlide(Number(n.dataset.slide))));
document.getElementById('prevBtn').addEventListener('click',()=>{if(current>0)renderSlide(current-1)});
document.getElementById('nextBtn').addEventListener('click',()=>renderSlide(current===slides.length-1?0:current+1));
document.getElementById('themeBtn').addEventListener('click',()=>{document.body.classList.toggle('dark');document.getElementById('themeBtn').textContent=document.body.classList.contains('dark')?'☀':'☾'});
function bindChecks(){
 document.querySelectorAll('.interactive[data-check]').forEach(box=>{
  box.querySelectorAll('.choice').forEach(btn=>btn.addEventListener('click',()=>{
   box.querySelectorAll('.choice').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');
   const key=box.dataset.check, val=btn.dataset.answer;let ok=false,msg='';
   const responses={
    diameter:['16','Correct! Diameter = 2 × radius = 2 × 8 = 16 cm.','Not quite. Multiply the radius by 2 to get the diameter.'],
    inscribed:['42','Yes! An inscribed angle is half its intercepted arc: 84° ÷ 2 = 42°.','Remember: an inscribed angle is half the measure of its intercepted arc.'],
    inside:['sum','Exactly! For chords intersecting inside, add the two intercepted arc measures and divide by 2.','For intersecting chords inside the circle, use the sum of the two intercepted arcs, then divide by 2.'],
    path:['58.98','Correct! The radius is about 11.02 m, so u = √(60² − 11.02²) ≈ 58.98 m.','First find the radius from the area, then use u = √(d² − r²). The pathway is a little shorter than 60 m.'],
    spokes:['60','Correct! 360° ÷ 6 equal angles = 60° per central angle.','Divide the full turn, 360°, by the 6 equal spaces.']
   };
   ok=val===responses[key][0];msg=ok?responses[key][1]:responses[key][2];
   const f=box.querySelector('.feedback');f.className='feedback show '+(ok?'good':'try');f.textContent=msg;
  }));
 });
}
function bindAngleButtons(){
 const a=document.getElementById('showCentral'),b=document.getElementById('showInscribed'),box=document.getElementById('angleCompare');if(!a||!b)return;
 a.addEventListener('click',()=>{a.classList.add('selected');b.classList.remove('selected');box.innerHTML='<strong>Central angle:</strong> Its vertex is at the center O. Its measure equals the measure of intercepted arc AB.'});
 b.addEventListener('click',()=>{b.classList.add('selected');a.classList.remove('selected');box.innerHTML='<strong>Inscribed angle:</strong> Its vertex is on the circle at P. It measures half the intercepted arc AB—so if the arc is 100°, the angle is 50°.'});
}
const quizAnswers={0:1,1:0,2:1,3:1,4:2,5:0};let quizPicks={};
function bindQuiz(){
 const area=document.getElementById('quizArea');if(!area)return;quizPicks={};
 area.querySelectorAll('.quiz-option').forEach(btn=>btn.addEventListener('click',()=>{
  const q=btn.closest('.quiz-question').dataset.q;quizPicks[q]=Number(btn.dataset.v);
  btn.parentElement.querySelectorAll('.quiz-option').forEach(b=>b.classList.remove('chosen'));btn.classList.add('chosen');
  document.getElementById('scoreBox').classList.remove('show');
 }));
 const check=document.getElementById('checkQuiz'),reset=document.getElementById('resetQuiz');
 check.addEventListener('click',()=>{
  let score=0;area.querySelectorAll('.quiz-question').forEach(q=>{
   const qi=Number(q.dataset.q);q.querySelectorAll('.quiz-option').forEach(b=>{b.classList.remove('correct','wrong');const v=Number(b.dataset.v);if(v===quizAnswers[qi])b.classList.add('correct');if(quizPicks[qi]===v&&v!==quizAnswers[qi])b.classList.add('wrong')});
   if(quizPicks[qi]===quizAnswers[qi])score++;
  });
  document.getElementById('scoreNumber').textContent=`${score} / 6`;
  document.getElementById('scoreMessage').textContent=score===6?'Excellent work! 🌟':score>=4?'Good job—nearly there!':'Keep practicing—you can do it!';
  document.getElementById('scoreDetail').textContent=score===6?'You have a strong grasp of the main circle rules.':`You got ${score} out of 6. Review the green answers and revisit the lesson sections that need more practice.`;
  document.getElementById('scoreBox').classList.add('show');
 });
 reset.addEventListener('click',()=>{quizPicks={};area.querySelectorAll('.quiz-option').forEach(b=>b.classList.remove('correct','wrong','chosen'));document.getElementById('scoreBox').classList.remove('show')});
}
renderSlide(0);
