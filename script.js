/* ============================================================
SECRET DRAW — script.js
Dark Luxury Erotic Game Logic
============================================================ */

‘use strict’;

/* ─────────────────────────────────────────────────────────────
DEFAULT CARD DATA
───────────────────────────────────────────────────────────── */
const DEFAULT_CARDS = [
// Level 1 – Nhẹ nhàng, dạo đầu
{ title: “Cái Nhìn Thật Lâu”,       desc: “Nhìn vào mắt người kia thật sâu trong 30 giây, không được cười hay nói chuyện. Chỉ nhìn và cảm nhận nhịp tim của nhau.”, level: 1 },
{ title: “Nụ Hôn Trán”,             desc: “Hôn lên trán người kia thật nhẹ nhàng, giữ môi ở đó 5 giây. Đặt tay lên má họ khi hôn – như đang nâng niu một điều quý giá.”, level: 1 },
{ title: “Thì Thầm Điều Bí Mật”,    desc: “Nói thầm vào tai người kia một điều bạn chưa bao giờ dám nói ra. Không cần phải là gì to lớn – chỉ cần thật.”, level: 1 },
{ title: “Massage Bàn Tay”,         desc: “Cầm tay người kia, massage nhẹ từng ngón tay và lòng bàn tay trong 1 phút. Chú ý từng đường chỉ tay, từng đốt ngón tay của họ.”, level: 1 },
{ title: “Ôm Chặt 60 Giây”,         desc: “Ôm người kia thật chặt, đặt đầu vào vai hoặc ngực họ. Không nói gì – chỉ nghe tiếng tim và hơi thở ấm của nhau.”, level: 1 },
{ title: “Vuốt Tóc Nhẹ Nhàng”,      desc: “Dùng tay nhẹ nhàng vuốt tóc người kia từ đỉnh đầu xuống, như đang ru họ ngủ. Làm chậm và tình cảm, mỗi sợi tóc đều được trân trọng.”, level: 1 },
{ title: “Kể Kỷ Niệm Đẹp Nhất”,     desc: “Kể cho nhau nghe một kỷ niệm đẹp nhất bạn nhớ về người kia, thật chi tiết. Kể bằng giọng thật nhẹ và tình cảm.”, level: 1 },
{ title: “Nụ Hôn Má”,               desc: “Hôn nhẹ lên từng bên má người kia, mỗi bên dừng lại 3 giây. Giữ tay họ trong khi hôn và cảm nhận hơi ấm từ da họ.”, level: 1 },
{ title: “Trán Chạm Trán”,          desc: “Đứng thật gần, để trán chạm trán nhau. Nhắm mắt lại, hít thở cùng nhịp. Giữ nguyên trong 1 phút không nói một lời.”, level: 1 },

// Level 2 – Vừa phải, tình cảm hơn
{ title: “Nụ Hôn Chậm”,             desc: “Hôn môi người kia thật chậm – bắt đầu nhẹ như chạm, rồi từ từ sâu hơn. Không vội vàng, tận hưởng từng khoảnh khắc trong ít nhất 45 giây.”, level: 2 },
{ title: “Massage Cổ Vai”,          desc: “Để người kia ngồi trước mặt bạn và massage nhẹ nhàng cổ và vai họ trong 2 phút. Dùng ngón tay cái ấn nhẹ vào các điểm căng cứng.”, level: 2 },
{ title: “Hơi Thở Trên Da”,         desc: “Thổi nhẹ hơi thở ấm lên cổ, tai hoặc gáy người kia thật chậm. Quan sát từng phản ứng của cơ thể họ.”, level: 2 },
{ title: “Nhảy Chậm Không Nhạc”,    desc: “Đứng ôm nhau và nhảy chầm chậm dù không có nhạc. Nhắm mắt và chỉ cảm nhận cơ thể của nhau di chuyển nhẹ nhàng.”, level: 2 },
{ title: “Hôn Lên Cổ”,              desc: “Hôn nhẹ nhàng lên cổ người kia – từ dưới tai xuống đến vai. Mỗi nụ hôn cách nhau một nhịp thở, thật chậm và tình tứ.”, level: 2 },
{ title: “Chạm Tay Khắp Mặt”,       desc: “Nhắm mắt lại và để người kia dùng đầu ngón tay khẽ chạm lên từng phần khuôn mặt bạn – như đang vẽ lại ký ức về khuôn mặt người yêu.”, level: 2 },
{ title: “Lời Thì Thầm Ngọt Ngào”,  desc: “Nói thầm vào tai người kia những gì bạn yêu thích nhất về cơ thể và tâm hồn họ, thật chi tiết và cụ thể. Đừng ngại ngùng.”, level: 2 },
{ title: “Ánh Mắt Và Nụ Cười”,      desc: “Nhìn vào mắt người kia và mỉm cười thật tình cảm trong 1 phút. Không được nói gì – chỉ dùng ánh mắt và nụ cười để truyền đạt tất cả.”, level: 2 },

// Level 3 – Nóng hơn, táo bạo hơn
{ title: “Cởi Nút Áo Nhau”,         desc: “Chậm rãi, tình tứ cởi từng chiếc nút áo của người kia bằng chỉ hai ngón tay. Nhìn vào mắt họ trong khi làm, không vội vàng.”, level: 3 },
{ title: “Hôn Sâu Không Giới Hạn”,  desc: “Dành trọn thời gian hẹn hò chỉ để hôn nhau – khám phá mọi cách hôn khác nhau mà hai người chưa thử. Hãy bất ngờ với nhau.”, level: 3 },
{ title: “Massage Toàn Lưng”,        desc: “Để người kia nằm sấp, bắt đầu massage từ gáy xuống toàn bộ phần lưng. Dùng cả hai tay, thay đổi áp lực và tốc độ tùy theo phản ứng.”, level: 3 },
{ title: “Khiêu Vũ Gợi Cảm”,        desc: “Bật một bản nhạc chậm, sexy và khiêu vũ cho người kia xem trong 1 phút. Tự nhiên, tự tin – không cần hoàn hảo, chỉ cần thật sự.”, level: 3 },
{ title: “Thì Thầm Điều Muốn”,       desc: “Nói thật nhỏ vào tai người kia một điều bạn muốn họ làm cho mình tối nay. Chi tiết nhất có thể – đừng giữ lại bất cứ điều gì.”, level: 3 },
{ title: “Hôn Từ Vai Xuống”,         desc: “Bắt đầu từ điểm nối vai và cổ, hôn nhẹ xuống theo đường vai người kia. Mỗi nụ hôn dừng lại một nhịp tim, mỗi điểm chạm đều có chủ ý.”, level: 3 },
];

/* ─────────────────────────────────────────────────────────────
APPLICATION STATE
───────────────────────────────────────────────────────────── */
const state = {
cards: [],
usedIndices: [],
currentCard: null,
roundCount: 0,
heatLevel: 1,
heatForced: 0,
timerSeconds: 120,
timerPreset: 120,
timerRunning: false,
timerInterval: null,
history: [],
safeWord: ‘Dừng Lại’,
musicPlaying: false,
currentScreen: ‘screen-home’,
};

/* ─────────────────────────────────────────────────────────────
INIT
───────────────────────────────────────────────────────────── */
function init() {
// Load saved data
const savedCards   = localStorage.getItem(‘sd_cards’);
const savedHistory = localStorage.getItem(‘sd_history’);
const savedSW      = localStorage.getItem(‘sd_safeword’);

state.cards   = savedCards   ? JSON.parse(savedCards)   : […DEFAULT_CARDS];
state.history = savedHistory ? JSON.parse(savedHistory) : [];

if (savedSW) {
state.safeWord = savedSW;
document.getElementById(‘safe-word-input’).value = savedSW;
}

updateDeckLabel();
initBackground();
setupDeckInteraction();

// Safe word input listener
document.getElementById(‘safe-word-input’).addEventListener(‘input’, function () {
state.safeWord = this.value || ‘Dừng Lại’;
localStorage.setItem(‘sd_safeword’, state.safeWord);
const badge = document.getElementById(‘safe-badge-text’);
if (badge) badge.textContent = ’🛑 ’ + state.safeWord;
});
}

/* ─────────────────────────────────────────────────────────────
CANVAS BACKGROUND — stars + neon glow
───────────────────────────────────────────────────────────── */
function initBackground() {
const canvas = document.getElementById(‘bg-canvas’);
const ctx = canvas.getContext(‘2d’);
let W, H;

const stars = Array.from({ length: 90 }, () => ({
x: Math.random(),
y: Math.random(),
r: Math.random() * 1.1 + 0.2,
phase: Math.random() * Math.PI * 2,
speed: Math.random() * 0.006 + 0.003,
}));

// Nebula particles
const nebulas = Array.from({ length: 4 }, (_, i) => ({
x: [0.15, 0.8, 0.5, 0.3][i],
y: [0.2, 0.7, 0.45, 0.85][i],
r: 120 + Math.random() * 80,
hue: [320, 0, 300, 340][i],
phase: Math.random() * Math.PI * 2,
}));

function resize() {
W = canvas.width  = window.innerWidth;
H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener(‘resize’, resize);

function draw() {
ctx.clearRect(0, 0, W, H);
const t = Date.now() * 0.001;

```
// Deep background
const bg = ctx.createRadialGradient(W * 0.5, H * 0.65, 0, W * 0.5, H * 0.5, W * 0.85);
bg.addColorStop(0, 'rgba(26,0,12,0.92)');
bg.addColorStop(0.45, 'rgba(14,6,14,0.95)');
bg.addColorStop(1, 'rgba(8,6,8,1)');
ctx.fillStyle = bg;
ctx.fillRect(0, 0, W, H);

// Nebula blobs
nebulas.forEach(n => {
  const x = n.x * W + Math.sin(t * 0.3 + n.phase) * 15;
  const y = n.y * H + Math.cos(t * 0.25 + n.phase) * 12;
  const grd = ctx.createRadialGradient(x, y, 0, x, y, n.r);
  grd.addColorStop(0, `hsla(${n.hue},80%,40%,0.055)`);
  grd.addColorStop(1, 'transparent');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, W, H);
});

// Stars
stars.forEach(s => {
  const alpha = 0.15 + 0.55 * Math.abs(Math.sin(t * s.speed * 9 + s.phase));
  ctx.beginPath();
  ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
  const isGold = Math.random() < 0.006; // rare gold star twinkle
  ctx.fillStyle = `rgba(${isGold ? '201,164,90' : '245,200,215'},${alpha * 0.55})`;
  ctx.fill();
});

requestAnimationFrame(draw);
```

}
draw();
}

/* ─────────────────────────────────────────────────────────────
SCREEN NAVIGATION
───────────────────────────────────────────────────────────── */
function showScreen(id) {
document.querySelectorAll(’.screen’).forEach(s => s.classList.add(‘hidden’));
const el = document.getElementById(id);
if (el) el.classList.remove(‘hidden’);
state.currentScreen = id;
}

function goHome() {
stopTimer();
showScreen(‘screen-home’);
document.getElementById(‘btn-heat’).classList.remove(‘visible’);
}

function goToDeck() {
stopTimer();
showScreen(‘screen-deck’);
document.getElementById(‘btn-heat’).classList.remove(‘visible’);
updateDeckLabel();
}

/* ─────────────────────────────────────────────────────────────
GAME START
───────────────────────────────────────────────────────────── */
function startGame() {
state.safeWord    = document.getElementById(‘safe-word-input’).value || ‘Dừng Lại’;
state.usedIndices = [];
state.roundCount  = 0;
state.heatForced  = 0;
state.history     = [];

const badge = document.getElementById(‘safe-badge-text’);
if (badge) badge.textContent = ’🛑 ’ + state.safeWord;

updateDeckLabel();
showScreen(‘screen-deck’);

// Staggered card stack animation
document.querySelectorAll(’.stack-card’).forEach((c, i) => {
c.style.opacity = ‘0’;
c.style.transform = `translateY(40px) rotate(${[-4, 2.5, 0][i]}deg)`;
setTimeout(() => {
c.style.transition = ‘all 0.55s cubic-bezier(.4,0,.2,1)’;
c.style.opacity = ‘1’;
c.style.transform = `translateY(${[10, 5, 0][i]}px) rotate(${[-4, 2.5, 0][i]}deg) translateZ(${[-8, -4, 0][i]}px)`;
}, i * 130 + 80);
});
}

function updateDeckLabel() {
const total = state.cards.length;
const used  = state.usedIndices.length;
const el = document.getElementById(‘deck-count-label’);
if (el) el.textContent = `${total - used} lá còn lại · ${total} tổng`;
}

/* ─────────────────────────────────────────────────────────────
DECK INTERACTION — swipe / tap
───────────────────────────────────────────────────────────── */
function setupDeckInteraction() {
const wrap    = document.getElementById(‘deck-wrap’);
const topCard = document.getElementById(‘top-card’);
if (!wrap || !topCard) return;

let startY = 0, curY = 0, dragging = false;

wrap.addEventListener(‘touchstart’, e => {
startY   = e.touches[0].clientY;
dragging = true;
topCard.style.transition = ‘none’;
}, { passive: true });

wrap.addEventListener(‘touchmove’, e => {
if (!dragging) return;
curY = e.touches[0].clientY;
const dy = startY - curY;
if (dy > 0) {
const pct = Math.min(dy / 130, 1);
topCard.style.transform = `translateY(${-dy * 0.75}px) rotate(${pct * 6}deg) scale(${1 + pct * 0.04})`;
topCard.style.opacity   = String(1 - pct * 0.35);
}
}, { passive: true });

wrap.addEventListener(‘touchend’, () => {
if (!dragging) return;
dragging = false;
const dy = startY - curY;
if (dy > 75) {
animateCardDraw(topCard);
} else {
topCard.style.transition = ‘all 0.4s cubic-bezier(.4,0,.2,1)’;
topCard.style.transform  = ‘’;
topCard.style.opacity    = ‘1’;
}
});

// Click fallback
wrap.addEventListener(‘click’, () => animateCardDraw(topCard));
}

/* ─────────────────────────────────────────────────────────────
CARD DRAW ANIMATION
───────────────────────────────────────────────────────────── */
function animateCardDraw(cardEl) {
const rect = cardEl.getBoundingClientRect();
const W    = window.innerWidth;
const H    = window.innerHeight;

// Clone flying card
const fly = document.createElement(‘div’);
fly.className = ‘card-flying’;
fly.style.cssText = `left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;`;
fly.innerHTML = cardEl.innerHTML;
document.body.appendChild(fly);
cardEl.style.opacity = ‘0’;

spawnSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);

requestAnimationFrame(() => {
fly.style.transition = ‘all 0.52s cubic-bezier(.4,0,.2,1)’;
fly.style.left       = `${W / 2 - rect.width / 2}px`;
fly.style.top        = `${H / 2 - rect.height / 2}px`;
fly.style.transform  = ‘scale(1.06) rotate(4deg)’;
fly.style.boxShadow  = ‘0 40px 100px rgba(0,0,0,0.95), 0 0 70px rgba(159,42,107,0.4)’;

```
setTimeout(() => {
  fly.style.opacity   = '0';
  fly.style.transform = 'scale(0.94) rotate(-4deg) translateY(-24px)';
  setTimeout(() => {
    fly.remove();
    cardEl.style.opacity   = '1';
    cardEl.style.transition = '';
    cardEl.style.transform  = '';
    drawCard();
  }, 280);
}, 420);
```

});
}

/* ─────────────────────────────────────────────────────────────
SPARKLE BURST
───────────────────────────────────────────────────────────── */
function spawnSparkles(cx, cy) {
const colors = [’#e8cb88’, ‘#ff2d78’, ‘#c9a45a’, ‘#d4387e’, ‘#9f2a6b’];
for (let i = 0; i < 10; i++) {
const s = document.createElement(‘div’);
s.className = ‘sparkle’;
const angle = (i / 10) * Math.PI * 2 + Math.random() * 0.3;
const dist  = 30 + Math.random() * 50;
const color = colors[Math.floor(Math.random() * colors.length)];
s.style.cssText = `left:${cx}px;top:${cy}px;opacity:1;transform:scale(1);background:${color};width:${3+Math.random()*4}px;height:${3+Math.random()*4}px;`;
document.body.appendChild(s);

```
requestAnimationFrame(() => {
  s.style.transition = 'all 0.65s ease-out';
  s.style.left       = `${cx + Math.cos(angle) * dist}px`;
  s.style.top        = `${cy + Math.sin(angle) * dist}px`;
  s.style.opacity    = '0';
  s.style.transform  = 'scale(0)';
  setTimeout(() => s.remove(), 700);
});
```

}
}

/* ─────────────────────────────────────────────────────────────
SMART CARD PICKER
───────────────────────────────────────────────────────────── */
function pickNextCard() {
const { cards, usedIndices, roundCount, heatForced } = state;

// Reset if exhausted
if (usedIndices.length >= cards.length) state.usedIndices.length = 0;

// Determine max level
let maxLevel;
if (heatForced >= 3)       maxLevel = 3;
else if (heatForced >= 1)  maxLevel = Math.min(3, heatForced + 1);
else if (roundCount < 3)   maxLevel = 1;
else if (roundCount < 6)   maxLevel = Math.random() < 0.65 ? 1 : 2;
else if (roundCount < 10)  maxLevel = [1, 2, 2, 3][Math.floor(Math.random() * 4)];
else                        maxLevel = 3;

const available = cards
.map((c, i) => ({ …c, i }))
.filter(c => !state.usedIndices.includes(c.i) && c.level <= maxLevel);

const pool = available.length > 0
? available
: cards.map((c, i) => ({ …c, i })).filter(c => !state.usedIndices.includes(c.i));

const sameLevel = pool.filter(c => c.level === maxLevel);
const chosen = (sameLevel.length > 0 && Math.random() < 0.65)
? sameLevel[Math.floor(Math.random() * sameLevel.length)]
: pool[Math.floor(Math.random() * pool.length)];

state.usedIndices.push(chosen.i);
return chosen;
}

/* ─────────────────────────────────────────────────────────────
DRAW CARD → PLAY SCREEN
───────────────────────────────────────────────────────────── */
function drawCard() {
const card = pickNextCard();
state.currentCard = card;
state.roundCount++;

// Populate card content
document.getElementById(‘card-title’).textContent = card.title;
document.getElementById(‘card-desc’).textContent  = card.desc;
document.getElementById(‘round-counter’).textContent = `Lá ${state.roundCount}`;

// Suit
const suits = [‘♥’, ‘♦’, ‘♠’, ‘♣’];
document.getElementById(‘card-suit’).textContent = suits[Math.floor(Math.random() * 4)];

// Level badge
const badge = document.getElementById(‘card-level-badge’);
if (card.level === 1)      { badge.textContent = ‘✦ Nhẹ Nhàng’;  badge.className = ‘level-badge level-1’; }
else if (card.level === 2) { badge.textContent = ‘♥ Tình Cảm’;   badge.className = ‘level-badge level-2’; }
else                        { badge.textContent = ‘🔥 Nóng Bỏng’; badge.className = ‘level-badge level-3’; }

// Corner suit labels
[‘corner-tl’, ‘corner-br’].forEach(id => {
const el = document.getElementById(id);
if (el) el.innerHTML = `${suits[Math.floor(Math.random() * 4)]}<br>${card.level}`;
});

// Heat bar
const heatPct = Math.min(100, (state.roundCount / 12) * 100 + state.heatForced * 20);
document.getElementById(‘heat-fill’).style.width = heatPct + ‘%’;

// Heat dots
for (let i = 0; i < 5; i++) {
document.getElementById(`dot-${i}`).classList.toggle(‘on’, i <= state.heatForced);
}

// Reset flip
const flip = document.getElementById(‘card-flip’);
flip.classList.remove(‘flipped’);
flip.style.transition = ‘none’;
requestAnimationFrame(() => { flip.style.transition = ‘’; });

// Reset photo area
const area = document.getElementById(‘photo-upload-area’);
const img  = area.querySelector(‘img’);
if (img) {
img.remove();
area.querySelectorAll(‘span’).forEach(s => s.style.display = ‘’);
}

// Save history
state.history.push({ title: card.title, desc: card.desc, level: card.level, round: state.roundCount });
localStorage.setItem(‘sd_history’, JSON.stringify(state.history));

// Hide next btn, reset timer
document.getElementById(‘btn-next’).classList.remove(‘visible’);
resetTimer();

// Show play screen
showScreen(‘screen-play’);
document.getElementById(‘btn-heat’).classList.add(‘visible’);
updateDeckLabel();

// Entrance animation
const scene = document.getElementById(‘card-flip’);
scene.style.opacity   = ‘0’;
scene.style.transform = ‘translateY(-28px) rotateY(-12deg)’;
requestAnimationFrame(() => {
scene.style.transition = ‘all 0.6s cubic-bezier(.4,0,.2,1)’;
scene.style.opacity    = ‘1’;
scene.style.transform  = ‘’;
});
}

/* ─────────────────────────────────────────────────────────────
DRAW NEXT CARD
───────────────────────────────────────────────────────────── */
function drawNextCard() {
const scene = document.getElementById(‘card-flip’);
scene.style.transition = ‘all 0.38s cubic-bezier(.4,0,.2,1)’;
scene.style.opacity    = ‘0’;
scene.style.transform  = ‘translateX(-70px) rotate(-6deg)’;

setTimeout(() => {
showScreen(‘screen-deck’);
document.getElementById(‘btn-heat’).classList.remove(‘visible’);
updateDeckLabel();
scene.style.transition = ‘none’;
scene.style.opacity    = ‘1’;
scene.style.transform  = ‘’;
}, 380);
}

/* ─────────────────────────────────────────────────────────────
CARD FLIP
───────────────────────────────────────────────────────────── */
function flipCard() {
document.getElementById(‘card-flip’).classList.toggle(‘flipped’);
}

/* ─────────────────────────────────────────────────────────────
TIMER
───────────────────────────────────────────────────────────── */
function setTimer(seconds) {
stopTimer();
state.timerPreset  = seconds;
state.timerSeconds = seconds;
updateTimerDisplay();
document.querySelectorAll(’.preset-btn’).forEach(btn => {
btn.classList.toggle(‘active’, btn.dataset.seconds === String(seconds));
});
document.getElementById(‘btn-next’).classList.remove(‘visible’);
document.getElementById(‘timer-play-btn’).textContent = ‘▶’;
}

function toggleTimer() {
state.timerRunning ? pauseTimer() : startTimer();
}

function startTimer() {
if (state.timerSeconds <= 0) resetTimer();
state.timerRunning = true;
document.getElementById(‘timer-play-btn’).textContent = ‘⏸’;
document.getElementById(‘timer-display’).className = ‘timer-display running’;

state.timerInterval = setInterval(() => {
state.timerSeconds–;
updateTimerDisplay();
if (state.timerSeconds <= 10 && state.timerSeconds > 0) {
document.getElementById(‘timer-display’).className = ‘timer-display warning’;
}
if (state.timerSeconds <= 0) timerFinished();
}, 1000);
}

function pauseTimer() {
state.timerRunning = false;
clearInterval(state.timerInterval);
document.getElementById(‘timer-play-btn’).textContent = ‘▶’;
document.getElementById(‘timer-display’).className = ‘timer-display idle’;
}

function stopTimer() {
state.timerRunning = false;
clearInterval(state.timerInterval);
}

function resetTimer() {
stopTimer();
state.timerSeconds = state.timerPreset;
updateTimerDisplay();
document.getElementById(‘timer-play-btn’).textContent = ‘▶’;
document.getElementById(‘timer-display’).className = ‘timer-display idle’;
document.getElementById(‘btn-next’).classList.remove(‘visible’);
}

function timerFinished() {
stopTimer();
document.getElementById(‘timer-display’).className = ‘timer-display idle’;
document.getElementById(‘timer-display’).textContent = ‘00:00’;
document.getElementById(‘timer-play-btn’).textContent = ‘▶’;
if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
document.getElementById(‘btn-next’).classList.add(‘visible’);

// Glow flash
const disp = document.getElementById(‘timer-display’);
disp.style.color      = ‘#ff2d78’;
disp.style.textShadow = ‘0 0 40px rgba(255,45,120,0.9)’;
setTimeout(() => {
disp.style.color      = ‘’;
disp.style.textShadow = ‘’;
disp.className        = ‘timer-display idle’;
}, 2200);
}

function updateTimerDisplay() {
const s = state.timerSeconds;
document.getElementById(‘timer-display’).textContent =
`${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

/* ─────────────────────────────────────────────────────────────
HEAT
───────────────────────────────────────────────────────────── */
function increaseHeat() {
if (state.heatForced < 4) {
state.heatForced++;
for (let i = 0; i < 5; i++) {
document.getElementById(`dot-${i}`).classList.toggle(‘on’, i <= state.heatForced);
}
const fill = document.getElementById(‘heat-fill’);
fill.style.width = Math.min(100, parseInt(fill.style.width) + 18) + ‘%’;
showToast(‘🔥 Nhiệt độ tăng lên!’);
} else {
showToast(‘🔥 Đã đạt mức cao nhất!’);
}
}

/* ─────────────────────────────────────────────────────────────
TOAST
───────────────────────────────────────────────────────────── */
function showToast(msg) {
const t = document.createElement(‘div’);
t.style.cssText = `position:fixed;bottom:110px;left:50%;transform:translateX(-50%); background:rgba(26,0,16,0.92);border:1px solid rgba(200,16,46,0.4); color:#f5e8de;font-family:'Outfit',sans-serif;font-size:0.82rem;font-weight:500; padding:10px 22px;border-radius:30px;z-index:600; backdrop-filter:blur(14px);white-space:nowrap; opacity:0;transition:opacity 0.28s; box-shadow:0 4px 24px rgba(200,16,46,0.3);`;
t.textContent = msg;
document.body.appendChild(t);
requestAnimationFrame(() => {
t.style.opacity = ‘1’;
setTimeout(() => {
t.style.opacity = ‘0’;
setTimeout(() => t.remove(), 300);
}, 1800);
});
}

/* ─────────────────────────────────────────────────────────────
SAFE WORD
───────────────────────────────────────────────────────────── */
function triggerSafeWord() {
const overlay = document.getElementById(‘safe-overlay’);
document.getElementById(‘safe-word-shown’).textContent = `"${state.safeWord}"`;
overlay.style.display = ‘flex’;
stopTimer();
if (navigator.vibrate) navigator.vibrate([300, 200, 300]);
}

function hideSafeWord() {
document.getElementById(‘safe-overlay’).style.display = ‘none’;
}

/* ─────────────────────────────────────────────────────────────
HISTORY
───────────────────────────────────────────────────────────── */
function showHistory() {
renderHistory();
document.getElementById(‘screen-history’).classList.remove(‘hidden’);
}

function hideHistory() {
document.getElementById(‘screen-history’).classList.add(‘hidden’);
}

function renderHistory() {
const list = document.getElementById(‘history-list’);
if (!state.history.length) {
list.innerHTML = `<p style="text-align:center;color:rgba(245,232,222,0.25);font-size:0.85rem;margin-top:50px;font-family:'Playfair Display',serif;font-style:italic;">Chưa có lá bài nào được rút...</p>`;
return;
}
list.innerHTML = state.history.map((h, i) => `<div class="history-item"> <span class="history-num">${i + 1}</span> <div class="history-info"> <h4>${h.title}</h4> <p>${h.desc.slice(0, 65)}${h.desc.length > 65 ? '…' : ''}</p> </div> <span style="font-size:0.62rem;color:${h.level===1?'rgba(201,164,90,0.55)':h.level===2?'rgba(212,56,126,0.6)':'rgba(255,45,120,0.7)'};margin-left:auto;padding-left:8px;white-space:nowrap;"> ${'●'.repeat(h.level)} </span> </div>`).join(’’);
}

function clearHistory() {
state.history = [];
localStorage.removeItem(‘sd_history’);
renderHistory();
}

/* ─────────────────────────────────────────────────────────────
IMPORT MODAL
───────────────────────────────────────────────────────────── */
function openImportModal() {
document.getElementById(‘import-modal’).classList.add(‘open’);
}

function closeImportModal(e) {
if (!e || e.target === document.getElementById(‘import-modal’)) {
document.getElementById(‘import-modal’).classList.remove(‘open’);
}
}

function importManual() {
const raw = document.getElementById(‘manual-import’).value.trim();
if (!raw) return;
let added = 0;
raw.split(’\n’).filter(l => l.trim()).forEach(line => {
const parts = line.split(’|’);
if (parts.length >= 2) {
state.cards.push({ title: parts[0].trim(), desc: parts[1].trim(), level: parseInt(parts[2]) || 1 });
added++;
}
});
if (added > 0) {
localStorage.setItem(‘sd_cards’, JSON.stringify(state.cards));
updateDeckLabel();
showToast(`✓ Đã thêm ${added} lá bài!`);
document.getElementById(‘manual-import’).value = ‘’;
closeImportModal();
}
}

function importCards(input) {
const file = input.files[0];
if (!file) return;
const reader = new FileReader();
reader.onload = e => {
let added = 0;
e.target.result.split(’\n’).filter(l => l.trim()).forEach((line, idx) => {
if (idx === 0 && line.toLowerCase().includes(‘title’)) return;
const parts = line.split(’,’);
if (parts.length >= 2) {
state.cards.push({ title: parts[0].replace(/”/g,’’).trim(), desc: parts[1].replace(/”/g,’’).trim(), level: parseInt(parts[2]) || 1 });
added++;
}
});
if (added > 0) {
localStorage.setItem(‘sd_cards’, JSON.stringify(state.cards));
updateDeckLabel();
showToast(`✓ Import ${added} lá bài!`);
closeImportModal();
}
};
reader.readAsText(file, ‘UTF-8’);
}

/* ─────────────────────────────────────────────────────────────
PHOTO UPLOAD
───────────────────────────────────────────────────────────── */
function triggerPhotoUpload() {
document.getElementById(‘photo-input’).click();
}

function loadPhoto(input) {
const file = input.files[0];
if (!file) return;
const area = document.getElementById(‘photo-upload-area’);
const old  = area.querySelector(‘img’);
if (old) old.remove();
const img = document.createElement(‘img’);
img.src = URL.createObjectURL(file);
img.style.borderRadius = ‘14px’;
area.appendChild(img);
area.querySelectorAll(‘span’).forEach(s => s.style.display = ‘none’);
}

/* ─────────────────────────────────────────────────────────────
MUSIC
───────────────────────────────────────────────────────────── */
function loadMusic(input) {
const file = input.files[0];
if (!file) return;
const audio = document.getElementById(‘bg-music’);
audio.src = URL.createObjectURL(file);
document.getElementById(‘music-name’).textContent = file.name.replace(/.[^.]+$/, ‘’);
audio.play();
state.musicPlaying = true;
document.getElementById(‘music-play-btn’).textContent = ‘⏸’;
}

function toggleMusic() {
const audio = document.getElementById(‘bg-music’);
if (!audio.src) return;
if (state.musicPlaying) {
audio.pause();
state.musicPlaying = false;
document.getElementById(‘music-play-btn’).textContent = ‘▶’;
} else {
audio.play();
state.musicPlaying = true;
document.getElementById(‘music-play-btn’).textContent = ‘⏸’;
}
}

/* ─────────────────────────────────────────────────────────────
TOUCH GUARDS
───────────────────────────────────────────────────────────── */
document.addEventListener(‘touchmove’, function (e) {
if (e.target.closest(’.scroll-area’) || e.target.closest(’.card-desc’)) return;
e.preventDefault();
}, { passive: false });

let _lastTap = 0;
document.addEventListener(‘touchend’, function (e) {
const now = Date.now();
if (now - _lastTap < 290) e.preventDefault();
_lastTap = now;
}, { passive: false });

/* ─────────────────────────────────────────────────────────────
BOOT
───────────────────────────────────────────────────────────── */
document.addEventListener(‘DOMContentLoaded’, init);
