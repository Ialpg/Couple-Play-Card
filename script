/**

- COUPLE PLAY — script.js
- Vanilla JavaScript, không dùng framework
- Tất cả dữ liệu lưu vào localStorage
  */

‘use strict’;

// ═══════════════════════════════════════════════════
// STATE — Trạng thái ứng dụng
// ═══════════════════════════════════════════════════

const STATE = {
cards: [],           // Toàn bộ 52 lá bài
currentLevel: 1,     // Level đang chơi (1–4)
session: {
drawn: [],         // Danh sách ID đã rút trong phiên
history: []        // Lịch sử đầy đủ [{card, level, time}]
},
currentCard: null,   // Lá bài đang hiển thị
isFlipped: false,    // Trạng thái lật bài

// Timer
timer: {
seconds: 120,      // Thời gian mặc định
remaining: 120,
interval: null,
running: false
},

// Music
music: {
playlist: [],      // [{name, url, type}] — type: ‘local’ | ‘url’
currentIndex: -1,
playing: false
}
};

// Metadata các level
const LEVEL_META = {
1: { suit: ‘♥’, name: ‘Dạo đầu’,   desc: ‘Những hoạt động nhẹ nhàng, lãng mạn để bắt đầu buổi tối’,            color: ‘#e87c9a’ },
2: { suit: ‘♦’, name: ‘Trung bình’, desc: ‘Tăng dần sự thú vị — lãng mạn và táo bạo hơn một chút’,              color: ‘#e86c2c’ },
3: { suit: ‘♣’, name: ‘Cao’,        desc: ‘Đầy cảm xúc và kích thích — dành cho những phút thật sự gần nhau’,   color: ‘#6ca0e8’ },
4: { suit: ‘♠’, name: ‘Rất cao’,   desc: ‘Mạnh mẽ, bạo dạn — chỉ khi cả hai hoàn toàn thoải mái’,             color: ‘#b0b0b0’ }
};

// ═══════════════════════════════════════════════════
// KHỞI TẠO
// ═══════════════════════════════════════════════════

document.addEventListener(‘DOMContentLoaded’, () => {
loadFromStorage();
updateLandingUI();
setupSafeWord();
});

/** Tải dữ liệu đã lưu từ localStorage */
function loadFromStorage() {
// Tải bài
const savedCards = localStorage.getItem(‘coupleplay_cards’);
if (savedCards) {
STATE.cards = JSON.parse(savedCards);
}

// Tải phiên chơi
const savedSession = localStorage.getItem(‘coupleplay_session’);
if (savedSession) {
STATE.session = JSON.parse(savedSession);
}

// Tải playlist nhạc (chỉ URL, không lưu blob)
const savedPlaylist = localStorage.getItem(‘coupleplay_playlist’);
if (savedPlaylist) {
STATE.music.playlist = JSON.parse(savedPlaylist).filter(t => t.type === ‘url’);
}
}

/** Cập nhật UI trang chủ dựa theo dữ liệu có sẵn */
function updateLandingUI() {
const hasData = STATE.cards.length > 0;
const dataStatus = document.getElementById(‘dataStatus’);
const statusText = document.getElementById(‘dataStatusText’);
const btnStart = document.getElementById(‘btnStartPlay’);

if (hasData) {
dataStatus.classList.remove(‘hidden’);
statusText.textContent = `${STATE.cards.length} lá bài đã sẵn sàng`;
btnStart.style.display = ‘flex’;
} else {
dataStatus.classList.add(‘hidden’);
btnStart.style.display = ‘none’;
}
}

// ═══════════════════════════════════════════════════
// ĐIỀU HƯỚNG TRANG
// ═══════════════════════════════════════════════════

/** Chuyển đến trang chính */
function goToMain() {
if (STATE.cards.length === 0) {
showToast(‘⚠️ Chưa có dữ liệu bài. Hãy import file Excel hoặc dùng dữ liệu mẫu!’);
return;
}
showPage(‘pageMain’);
renderLevelUI(STATE.currentLevel);
renderAllTabCounts();
renderPlaylist();
}

/** Quay về trang chủ */
function goToLanding() {
showPage(‘pageLanding’);
stopTimer();
}

/** Hiển thị trang theo id */
function showPage(pageId) {
document.querySelectorAll(’.page’).forEach(p => p.classList.remove(‘active’));
document.getElementById(pageId).classList.add(‘active’);
}

/** Đóng màn hình bài, về trang main */
function closeCard() {
stopTimer();
document.getElementById(‘pageCard’).classList.remove(‘active’);
showPage(‘pageMain’);
}

// ═══════════════════════════════════════════════════
// IMPORT EXCEL
// ═══════════════════════════════════════════════════

/** Kích hoạt input file */
function triggerImport() {
document.getElementById(‘excelInput’).click();
}

/** Xử lý khi người dùng chọn file Excel */
function handleExcelImport(event) {
const file = event.target.files[0];
if (!file) return;

const reader = new FileReader();
reader.onload = (e) => {
try {
const data = new Uint8Array(e.target.result);
const workbook = XLSX.read(data, { type: ‘array’ });

```
  // Lấy sheet đầu tiên
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });

  const cards = rows
    .filter(row => row.level && row.title)
    .map((row, idx) => ({
      id: `card_${idx}_${Date.now()}`,
      level: parseInt(row.level) || 1,
      suit: row.suit || LEVEL_META[parseInt(row.level) || 1]?.suit || '♥',
      title: String(row.title).trim(),
      description: String(row.description || '').trim(),
      duration: parseInt(row.duration) || 120
    }));

  if (cards.length === 0) {
    showToast('❌ Không tìm thấy dữ liệu hợp lệ trong file!');
    return;
  }

  STATE.cards = cards;
  saveCards();
  updateLandingUI();
  showToast(`✅ Đã import ${cards.length} lá bài thành công!`);
} catch (err) {
  console.error(err);
  showToast('❌ Lỗi đọc file Excel. Kiểm tra định dạng file!');
}
```

};
reader.readAsArrayBuffer(file);

// Reset input để có thể import lại cùng file
event.target.value = ‘’;
}

/** Lưu bài vào localStorage */
function saveCards() {
localStorage.setItem(‘coupleplay_cards’, JSON.stringify(STATE.cards));
}

/** Lưu phiên chơi vào localStorage */
function saveSession() {
localStorage.setItem(‘coupleplay_session’, JSON.stringify(STATE.session));
}

// ═══════════════════════════════════════════════════
// DỮ LIỆU MẪU
// ═══════════════════════════════════════════════════

/** Tải 52 lá bài mẫu */
function loadSampleData() {
const sampleCards = [
// Level 1 — Dạo đầu (13 lá)
{ id:‘s1’,  level:1, suit:‘♥’, title:‘Nắm tay nhau’,           description:‘Cùng nhau ngồi và nắm tay trong 1 phút. Nhìn vào mắt nhau và mỉm cười không nói gì.’, duration:60 },
{ id:‘s2’,  level:1, suit:‘♥’, title:‘Lời khen chân thành’,     description:‘Mỗi người nói 3 điều bạn yêu thích ở đối phương hôm nay — cụ thể và từ trái tim.’, duration:90 },
{ id:‘s3’,  level:1, suit:‘♥’, title:‘Hôn nhẹ trán’,           description:‘Người A nhắm mắt lại. Người B nhẹ nhàng hôn lên trán và thì thầm một điều tốt đẹp.’, duration:60 },
{ id:‘s4’,  level:1, suit:‘♥’, title:‘Massage tay’,            description:‘Một người massage tay kia trong 2 phút — chú ý từng ngón tay và lòng bàn tay.’, duration:120 },
{ id:‘s5’,  level:1, suit:‘♥’, title:‘Kể kỷ niệm đẹp’,        description:‘Chia sẻ kỷ niệm yêu thích nhất của hai người kể từ khi quen nhau.’, duration:180 },
{ id:‘s6’,  level:1, suit:‘♥’, title:‘Điệu nhảy chậm’,        description:‘Bật một bản nhạc chậm và cùng nhau khiêu vũ trong phòng, không cần nhạc nếu muốn.’, duration:180 },
{ id:‘s7’,  level:1, suit:‘♥’, title:‘Chạm mặt nhẹ nhàng’,    description:‘Nhẹ nhàng chạm tay vào má, cằm và trán của nhau trong im lặng hoàn toàn.’, duration:90 },
{ id:‘s8’,  level:1, suit:‘♥’, title:‘Đọc thơ cho nhau’,      description:‘Mỗi người đọc một đoạn thơ hoặc bài hát yêu thích — có thể tự sáng tác.’, duration:120 },
{ id:‘s9’,  level:1, suit:‘♥’, title:‘Ôm nhau yên tĩnh’,      description:‘Ôm nhau chặt và đếm nhịp tim của nhau trong 2 phút yên tĩnh hoàn toàn.’, duration:120 },
{ id:‘s10’, level:1, suit:‘♥’, title:‘Ánh mắt kết nối’,       description:‘Nhìn thẳng vào mắt nhau liên tục trong 2 phút. Không cười, không nhìn đi chỗ khác.’, duration:120 },
{ id:‘s11’, level:1, suit:‘♥’, title:‘Hôn nhẹ môi’,           description:‘Một nụ hôn nhẹ nhàng, chậm rãi — không vội vàng, tận hưởng từng giây.’, duration:60 },
{ id:‘s12’, level:1, suit:‘♥’, title:‘Nói điều bí mật nhỏ’,   description:‘Mỗi người kể một điều bí mật nhỏ mà chưa từng nói với ai khác.’, duration:120 },
{ id:‘s13’, level:1, suit:‘♥’, title:‘Massage vai cổ’,        description:‘Người A ngồi phía trước, người B nhẹ nhàng massage vai và cổ trong 3 phút.’, duration:180 },

```
// Level 2 — Trung bình (13 lá)
{ id:'s14', level:2, suit:'♦', title:'Hôn sâu kéo dài',       description:'Một nụ hôn sâu, tay chạm nhẹ vào mặt nhau — kéo dài không dưới 1 phút.', duration:60 },
{ id:'s15', level:2, suit:'♦', title:'Thì thầm vào tai',      description:'Thay nhau thì thầm điều bạn muốn đêm nay vào tai nhau — dùng giọng thật nhẹ.', duration:90 },
{ id:'s16', level:2, suit:'♦', title:'Massage lưng',          description:'Massage toàn bộ lưng cho nhau — chú ý đến điểm căng thẳng nhất.', duration:240 },
{ id:'s17', level:2, suit:'♦', title:'Cởi áo cho nhau',       description:'Chậm rãi và nhẹ nhàng cởi áo của nhau — mỗi động tác đều có chủ ý.', duration:120 },
{ id:'s18', level:2, suit:'♦', title:'Hôn cổ nhau',          description:'Từ từ hôn từ cổ xuống vai và ngược lại — chú ý phản ứng của đối phương.', duration:120 },
{ id:'s19', level:2, suit:'♦', title:'Trò chuyện về mong muốn',description:'Mỗi người nói thẳng một điều mình thật sự muốn đêm nay — không ngại ngùng.', duration:180 },
{ id:'s20', level:2, suit:'♦', title:'Bịt mắt và đoán',      description:'Bịt mắt nhau và chạm vào các phần cơ thể để đoán — chỉ được dùng tay.', duration:180 },
{ id:'s21', level:2, suit:'♦', title:'Hôn bàn tay và cổ tay', description:'Hôn nhẹ vào lòng bàn tay, ngón tay và cổ tay của nhau thật chậm.', duration:90 },
{ id:'s22', level:2, suit:'♦', title:'Ôm từ phía sau',       description:'Ôm nhau từ phía sau, cằm tựa lên vai — hít thở cùng nhịp trong 2 phút.', duration:120 },
{ id:'s23', level:2, suit:'♦', title:'Nói điều táo bạo',     description:'Nói thẳng một điều bạn vẫn ngại nói — không được dùng từ lịch sự thay thế.', duration:90 },
{ id:'s24', level:2, suit:'♦', title:'Khám phá bằng đầu ngón tay',description:'Chỉ dùng đầu ngón tay để nhẹ nhàng khám phá cơ thể nhau trong 3 phút.', duration:180 },
{ id:'s25', level:2, suit:'♦', title:'Hôn ở nơi bất ngờ',    description:'Mỗi người chọn một vị trí bất ngờ trên cơ thể để hôn — vị trí khác mọi khi.', duration:90 },
{ id:'s26', level:2, suit:'♦', title:'Thư tình nhỏ',         description:'Trong 3 phút, mỗi người viết 5 từ mô tả cảm xúc lúc này rồi đọc cho nhau nghe.', duration:180 },

// Level 3 — Cao (13 lá)
{ id:'s27', level:3, suit:'♣', title:'Làm chủ hoàn toàn',     description:'Một người hoàn toàn theo hướng dẫn của người kia trong 5 phút — không được từ chối.', duration:300 },
{ id:'s28', level:3, suit:'♣', title:'Massage sâu',           description:'Massage toàn thân cho nhau — bắt đầu từ vai, lưng, mông và chân trong 5 phút.', duration:300 },
{ id:'s29', level:3, suit:'♣', title:'Trò chuyện không rào cản',description:'Nói thẳng điều gì trong quan hệ thể xác bạn muốn thay đổi hoặc thử mới.', duration:240 },
{ id:'s30', level:3, suit:'♣', title:'Nhiếp ảnh riêng tư',    description:'Chụp cho nhau những bức ảnh nghệ thuật — chỉ lưu trên máy, không chia sẻ.', duration:300 },
{ id:'s31', level:3, suit:'♣', title:'Kịch bản vai diễn',     description:'Cùng đóng vai một cặp đôi xa lạ mới gặp — diễn xuất trong 5 phút.', duration:300 },
{ id:'s32', level:3, suit:'♣', title:'Hôn từ đầu đến chân',   description:'Hôn theo đường thẳng từ trán xuống đến bàn chân của nhau — đừng bỏ sót.', duration:300 },
{ id:'s33', level:3, suit:'♣', title:'Đặt tên các vùng nhạy', description:'Cùng nhau xác định và đặt tên riêng cho 3 vị trí nhạy cảm yêu thích của mỗi người.', duration:180 },
{ id:'s34', level:3, suit:'♣', title:'Bịt mắt & thỏa mãn',   description:'Bịt mắt và để người kia làm bất kỳ điều gì họ muốn trong 4 phút.', duration:240 },
{ id:'s35', level:3, suit:'♣', title:'Nói trong khi...',       description:'Hai người thay nhau nói 3 câu mô tả cảm xúc ngay lúc đó, thật chi tiết.', duration:180 },
{ id:'s36', level:3, suit:'♣', title:'Khám phá bóng tối',     description:'Tắt đèn hoàn toàn và khám phá nhau chỉ bằng xúc giác trong 5 phút.', duration:300 },
{ id:'s37', level:3, suit:'♣', title:'Thách thức 10 hôn',     description:'Hôn nhau 10 lần ở 10 vị trí khác nhau — không được lặp lại vị trí nào.', duration:180 },
{ id:'s38', level:3, suit:'♣', title:'Hơi thở và tiếp xúc',   description:'Ngồi cực gần nhau, hơi thở chạm nhau — không chạm người, chỉ hơi thở trong 2 phút.', duration:120 },
{ id:'s39', level:3, suit:'♣', title:'Lời thì thầm táo bạo',  description:'Thay nhau thì thầm vào tai những điều thật sự khiêu gợi — thật và cụ thể.', duration:180 },

// Level 4 — Rất cao (13 lá)
{ id:'s40', level:4, suit:'♠', title:'Không giới hạn — 5 phút',description:'Không có quy tắc, không có giới hạn — chỉ có safe word. Thoải mái hoàn toàn trong 5 phút.', duration:300 },
{ id:'s41', level:4, suit:'♠', title:'Thống trị & Phục tùng',  description:'Một người hoàn toàn kiểm soát. Người kia phải xin phép trước mọi hành động trong 5 phút.', duration:300 },
{ id:'s42', level:4, suit:'♠', title:'Kịch bản bạo dạn',      description:'Cùng nhau diễn một kịch bản mà cả hai đã bàn trước — không ngại ngùng.', duration:300 },
{ id:'s43', level:4, suit:'♠', title:'Thách thức bền',        description:'Thi xem ai có thể "cưỡng lại" lâu hơn khi người kia đang cố ý khiêu khích.', duration:300 },
{ id:'s44', level:4, suit:'♠', title:'Thử điều chưa từng làm', description:'Cùng nhau thử một điều hoàn toàn mới mà cả hai chưa bao giờ thử trước đây.', duration:240 },
{ id:'s45', level:4, suit:'♠', title:'Quà tặng cơ thể',       description:'Một người hoàn toàn "tặng" cơ thể mình cho người kia sử dụng tùy ý trong 5 phút.', duration:300 },
{ id:'s46', level:4, suit:'♠', title:'Gương và ánh sáng nến',  description:'Đặt gương trước mặt và nhìn vào mắt nhau trong gương trong suốt 3 phút.', duration:180 },
{ id:'s47', level:4, suit:'♠', title:'Cởi bỏ tất cả',        description:'Cùng nhau hoàn toàn không mặc gì và chỉ ôm nhau trong im lặng trong 3 phút.', duration:180 },
{ id:'s48', level:4, suit:'♠', title:'Phần thưởng mạo hiểm',  description:'Người thắng trò bốc thăm được yêu cầu một điều bất kỳ — người kia không được từ chối.', duration:300 },
{ id:'s49', level:4, suit:'♠', title:'Màn trình diễn riêng',  description:'Mỗi người thực hiện một màn trình diễn gợi cảm trong 2 phút cho người kia xem.', duration:120 },
{ id:'s50', level:4, suit:'♠', title:'Nước và xúc giác',      description:'Dùng nước ấm hoặc đá để tạo cảm giác trên cơ thể nhau — chú ý phản ứng.', duration:240 },
{ id:'s51', level:4, suit:'♠', title:'Lệnh và tuân lệnh',     description:'Người ra lệnh nói thật chậm, thật rõ ràng — người nhận lệnh thực hiện từng điều một.', duration:300 },
{ id:'s52', level:4, suit:'♠', title:'Kết thúc hoàn hảo',     description:'Cùng nhau tạo ra khoảnh khắc đáng nhớ nhất của đêm nay — tự do hoàn toàn.', duration:300 }
```

];

STATE.cards = sampleCards;
saveCards();
updateLandingUI();
showToast(‘✅ Đã tải 52 lá bài mẫu!’);
}

// ═══════════════════════════════════════════════════
// LEVEL UI
// ═══════════════════════════════════════════════════

/** Chuyển level */
function switchLevel(level) {
STATE.currentLevel = level;

// Cập nhật tab active
document.querySelectorAll(’.level-tab’).forEach(tab => {
tab.classList.toggle(‘active’, parseInt(tab.dataset.level) === level);
});

renderLevelUI(level);
}

/** Render toàn bộ UI của một level */
function renderLevelUI(level) {
const meta = LEVEL_META[level];
const levelCards = getCardsByLevel(level);
const drawnInLevel = STATE.session.drawn.filter(id =>
levelCards.some(c => c.id === id)
);
const remaining = levelCards.length - drawnInLevel.length;

// Cập nhật thông tin level
document.getElementById(‘levelIcon’).textContent = meta.suit;
document.getElementById(‘levelTitle’).textContent = `Level ${level} — ${meta.name}`;
document.getElementById(‘levelDesc’).textContent = meta.desc;
document.getElementById(‘totalCards’).textContent = levelCards.length;
document.getElementById(‘drawnCards’).textContent = drawnInLevel.length;
document.getElementById(‘remainCards’).textContent = remaining;

// Màu suit theo level
document.getElementById(‘levelIcon’).style.color = meta.color;

// Render danh sách bài
renderCardsGrid(levelCards);
}

/** Render grid bài xem trước */
function renderCardsGrid(cards) {
const grid = document.getElementById(‘cardsGrid’);
grid.innerHTML = ‘’;

if (cards.length === 0) {
grid.innerHTML = ‘<p style="color:var(--text-muted);font-size:0.85rem;grid-column:1/-1;text-align:center;padding:1rem;">Chưa có lá bài nào ở mức này</p>’;
return;
}

cards.forEach(card => {
const isDrawn = STATE.session.drawn.includes(card.id);
const item = document.createElement(‘div’);
item.className = `card-preview-item ${isDrawn ? 'drawn' : ''}`;
item.onclick = () => openCardDirect(card);
item.innerHTML = `<div class="preview-suit">${card.suit}</div> <div class="preview-title-text">${card.title}</div> <div class="preview-duration">⏱ ${formatDuration(card.duration)}</div> ${isDrawn ? '<span class="preview-drawn-badge">Đã rút</span>' : ''}`;
grid.appendChild(item);
});
}

/** Cập nhật số lượng bài ở từng tab */
function renderAllTabCounts() {
for (let l = 1; l <= 4; l++) {
const cards = getCardsByLevel(l);
const drawn = STATE.session.drawn.filter(id => cards.some(c => c.id === id));
const remaining = cards.length - drawn.length;
const el = document.getElementById(`count${l}`);
if (el) el.textContent = remaining;
}
}

// ═══════════════════════════════════════════════════
// RÚT BÀI
// ═══════════════════════════════════════════════════

/** Rút bài ngẫu nhiên từ level hiện tại */
function drawCard() {
const level = STATE.currentLevel;
const levelCards = getCardsByLevel(level);
const available = levelCards.filter(c => !STATE.session.drawn.includes(c.id));

if (available.length === 0) {
// Hết bài ở level này
if (level < 4) {
if (confirm(`Bạn đã rút hết ${levelCards.length} lá bài ở Level ${level}!\nTự động chuyển sang Level ${level + 1}?`)) {
levelUp();
return;
}
} else {
showToast(‘🎉 Bạn đã hoàn thành tất cả 52 lá bài! Phiên chơi thật tuyệt vời!’);
}
return;
}

// Random lá bài
const randomIndex = Math.floor(Math.random() * available.length);
const card = available[randomIndex];

showCardScreen(card);
}

/** Mở trực tiếp một lá bài từ danh sách */
function openCardDirect(card) {
showCardScreen(card);
}

/** Hiển thị màn hình bài */
function showCardScreen(card) {
STATE.currentCard = card;
STATE.isFlipped = false;

// Cập nhật nội dung
const meta = LEVEL_META[card.level];
document.getElementById(‘cardLevelBadge’).textContent = `${meta.suit} Level ${card.level}`;
document.getElementById(‘cardSuitLarge’).textContent = card.suit;
document.getElementById(‘cardTitleLarge’).textContent = card.title;
document.getElementById(‘cardDescription’).textContent = card.description;

// Reset flip
document.getElementById(‘cardFlipInner’).classList.remove(‘flipped’);

// Reset timer theo duration của bài
stopTimer();
setTimer(card.duration);

// Load hình ảnh nếu có
loadCardImage(card.id);

// Hiện màn hình
document.getElementById(‘pageCard’).classList.add(‘active’);
document.getElementById(‘pageMain’).classList.remove(‘active’);
}

/** Lật bài */
function flipCard() {
STATE.isFlipped = !STATE.isFlipped;
document.getElementById(‘cardFlipInner’).classList.toggle(‘flipped’, STATE.isFlipped);
}

/** Hoàn thành lá bài — đánh dấu đã rút */
function completeCard() {
const card = STATE.currentCard;
if (!card) return;

// Thêm vào danh sách đã rút (tránh duplicate)
if (!STATE.session.drawn.includes(card.id)) {
STATE.session.drawn.push(card.id);
}

// Thêm vào lịch sử
STATE.session.history.push({
card: { id: card.id, title: card.title, suit: card.suit, level: card.level },
level: card.level,
time: new Date().toLocaleTimeString(‘vi-VN’, { hour: ‘2-digit’, minute: ‘2-digit’ })
});

saveSession();
stopTimer();
renderAllTabCounts();
renderLevelUI(STATE.currentLevel);

showToast(`✅ Hoàn thành: ${card.title}`);
}

// ═══════════════════════════════════════════════════
// TĂNG MỨC ĐỘ
// ═══════════════════════════════════════════════════

/** Tăng level */
function levelUp() {
if (STATE.currentLevel >= 4) {
showToast(‘Bạn đang ở mức độ cao nhất rồi! 🔥’);
return;
}

STATE.currentLevel++;
switchLevel(STATE.currentLevel);
showToast(`🔥 Tăng lên Level ${STATE.currentLevel} — ${LEVEL_META[STATE.currentLevel].name}!`);
}

// ═══════════════════════════════════════════════════
// TIMER
// ═══════════════════════════════════════════════════

/** Đặt thời gian timer (giây) */
function setTimer(seconds) {
stopTimer();
STATE.timer.seconds = seconds;
STATE.timer.remaining = seconds;
updateTimerDisplay();
}

/** Bật/tắt timer */
function toggleTimer() {
if (STATE.timer.running) {
stopTimer();
} else {
startTimer();
}
}

/** Bắt đầu đếm */
function startTimer() {
if (STATE.timer.remaining <= 0) {
STATE.timer.remaining = STATE.timer.seconds;
}

STATE.timer.running = true;
document.getElementById(‘timerStartBtn’).textContent = ‘⏸ Dừng’;
document.getElementById(‘timerDisplay’).classList.add(‘running’);

STATE.timer.interval = setInterval(() => {
STATE.timer.remaining–;
updateTimerDisplay();

```
// Cảnh báo khi còn 10 giây
if (STATE.timer.remaining === 10) {
  document.getElementById('timerDisplay').classList.add('warning');
}

if (STATE.timer.remaining <= 0) {
  stopTimer();
  timerFinished();
}
```

}, 1000);
}

/** Dừng timer */
function stopTimer() {
if (STATE.timer.interval) {
clearInterval(STATE.timer.interval);
STATE.timer.interval = null;
}
STATE.timer.running = false;

const btn = document.getElementById(‘timerStartBtn’);
if (btn) btn.textContent = ‘▶ Bắt đầu’;

const display = document.getElementById(‘timerDisplay’);
if (display) {
display.classList.remove(‘running’, ‘warning’);
}
}

/** Reset timer về giá trị ban đầu */
function resetTimer() {
stopTimer();
STATE.timer.remaining = STATE.timer.seconds;
updateTimerDisplay();
}

/** Cập nhật hiển thị timer */
function updateTimerDisplay() {
const m = Math.floor(STATE.timer.remaining / 60);
const s = STATE.timer.remaining % 60;
const display = document.getElementById(‘timerDisplay’);
if (display) {
display.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
}

/** Khi timer kết thúc */
function timerFinished() {
showToast(‘⏰ Hết giờ! Hoàn thành hoặc tiếp tục?’);
// Rung điện thoại (nếu hỗ trợ)
if (navigator.vibrate) {
navigator.vibrate([300, 100, 300]);
}
}

// ═══════════════════════════════════════════════════
// HÌNH ẢNH BÀI
// ═══════════════════════════════════════════════════

/** Xử lý upload hình ảnh cho lá bài */
function handleImageUpload(event) {
const file = event.target.files[0];
if (!file || !STATE.currentCard) return;

const reader = new FileReader();
reader.onload = (e) => {
const imageData = e.target.result;
const key = `coupleplay_img_${STATE.currentCard.id}`;

```
try {
  localStorage.setItem(key, imageData);
  displayCardImage(imageData);
  showToast('✅ Đã lưu hình ảnh!');
} catch (err) {
  // localStorage có thể đầy nếu ảnh quá lớn
  showToast('❌ Hình ảnh quá lớn! Hãy chọn ảnh nhỏ hơn.');
}
```

};
reader.readAsDataURL(file);
event.target.value = ‘’;
}

/** Hiển thị hình ảnh lên card */
function displayCardImage(src) {
const img = document.getElementById(‘cardImage’);
const placeholder = document.getElementById(‘imagePlaceholder’);
const actions = document.getElementById(‘imageActions’);

img.src = src;
img.classList.remove(‘hidden’);
placeholder.style.display = ‘none’;
actions.classList.remove(‘hidden’);
}

/** Load hình ảnh của lá bài từ localStorage */
function loadCardImage(cardId) {
const img = document.getElementById(‘cardImage’);
const placeholder = document.getElementById(‘imagePlaceholder’);
const actions = document.getElementById(‘imageActions’);

const key = `coupleplay_img_${cardId}`;
const saved = localStorage.getItem(key);

if (saved) {
displayCardImage(saved);
} else {
img.src = ‘’;
img.classList.add(‘hidden’);
placeholder.style.display = ‘flex’;
actions.classList.add(‘hidden’);
}
}

/** Xóa hình ảnh của lá bài */
function removeCardImage() {
if (!STATE.currentCard) return;
const key = `coupleplay_img_${STATE.currentCard.id}`;
localStorage.removeItem(key);
loadCardImage(STATE.currentCard.id);
showToast(‘Đã xóa hình ảnh’);
}

// ═══════════════════════════════════════════════════
// LỊCH SỬ
// ═══════════════════════════════════════════════════

/** Mở modal lịch sử */
function openHistory() {
const modal = document.getElementById(‘modalHistory’);
const list = document.getElementById(‘historyList’);

if (STATE.session.history.length === 0) {
list.innerHTML = ‘<p class="empty-text">Chưa rút lá bài nào trong phiên này</p>’;
} else {
list.innerHTML = STATE.session.history
.slice().reverse() // Mới nhất lên trên
.map((entry, i) => `<div class="history-item"> <span class="history-num">${STATE.session.history.length - i}</span> <div> <div class="history-title">${entry.card.suit} ${entry.card.title}</div> <div class="history-meta">Level ${entry.level} · ${entry.time}</div> </div> </div>`).join(’’);
}

modal.classList.remove(‘hidden’);
}

/** Đóng modal lịch sử */
function closeHistory(event) {
if (!event || event.target.id === ‘modalHistory’) {
document.getElementById(‘modalHistory’).classList.add(‘hidden’);
}
}

// ═══════════════════════════════════════════════════
// SAFE WORD
// ═══════════════════════════════════════════════════

/** Thiết lập safe word button */
function setupSafeWord() {
document.getElementById(‘safeWordBtn’).onclick = openSafeWord;
}

/** Mở modal safe word */
function openSafeWord() {
document.getElementById(‘modalSafeWord’).classList.remove(‘hidden’);
stopTimer(); // Dừng timer khi safe word được kích hoạt
}

/** Đóng modal safe word */
function closeSafeWord(event) {
if (!event || event.target.id === ‘modalSafeWord’) {
document.getElementById(‘modalSafeWord’).classList.add(‘hidden’);
}
}

// ═══════════════════════════════════════════════════
// RESET SESSION
// ═══════════════════════════════════════════════════

/** Xác nhận reset phiên chơi */
function confirmReset() {
if (confirm(‘Reset phiên chơi? Toàn bộ lịch sử rút bài sẽ bị xóa.’)) {
resetSession();
}
}

/** Reset phiên chơi */
function resetSession() {
STATE.session = { drawn: [], history: [] };
STATE.currentLevel = 1;
saveSession();
switchLevel(1);
renderAllTabCounts();
showToast(‘🔄 Đã reset phiên chơi mới!’);
}

// ═══════════════════════════════════════════════════
// MUSIC PLAYER
// ═══════════════════════════════════════════════════

const audioPlayer = document.getElementById(‘audioPlayer’);

/** Bật/tắt phần mở rộng music player */
function toggleMusicExpand() {
const body = document.getElementById(‘musicBody’);
const chevron = document.getElementById(‘musicChevron’);
const isExpanded = body.classList.toggle(‘expanded’);
chevron.style.transform = isExpanded ? ‘rotate(180deg)’ : ‘’;
}

/** Load file nhạc từ máy */
function loadMusicFile(event) {
const file = event.target.files[0];
if (!file) return;

const url = URL.createObjectURL(file);
const track = { name: file.name.replace(/.[^/.]+$/, ‘’), url, type: ‘local’ };

STATE.music.playlist.push(track);
renderPlaylist();
playTrack(STATE.music.playlist.length - 1);
event.target.value = ‘’;
}

/** Load nhạc từ URL */
function loadMusicUrl() {
const input = document.getElementById(‘musicUrlInput’);
const url = input.value.trim();
if (!url) return;

// Kiểm tra YouTube
const isYoutube = url.includes(‘youtube.com’) || url.includes(‘youtu.be’);
if (isYoutube) {
showToast(‘ℹ️ YouTube không hỗ trợ trực tiếp. Hãy dùng SoundCloud hoặc URL nhạc trực tiếp (.mp3)’);
return;
}

const name = url.split(’/’).pop().replace(/?.*/, ‘’) || ‘Nhạc online’;
const track = { name, url, type: ‘url’ };

STATE.music.playlist.push(track);
savePlaylistToStorage();
renderPlaylist();
playTrack(STATE.music.playlist.length - 1);
input.value = ‘’;
}

/** Phát track theo index */
function playTrack(index) {
const playlist = STATE.music.playlist;
if (index < 0 || index >= playlist.length) return;

STATE.music.currentIndex = index;
const track = playlist[index];

audioPlayer.src = track.url;
audioPlayer.volume = parseFloat(document.getElementById(‘volumeSlider’).value);
audioPlayer.play().catch(() => showToast(‘❌ Không thể phát nhạc. Kiểm tra lại URL!’));

STATE.music.playing = true;
document.getElementById(‘musicPlayBtn’).textContent = ‘⏸’;
document.getElementById(‘musicTitle’).textContent = track.name;

renderPlaylist();
}

/** Bật/tắt nhạc */
function toggleMusic() {
if (STATE.music.playlist.length === 0) {
showToast(‘Chưa có nhạc. Hãy upload hoặc nhập URL!’);
return;
}

if (STATE.music.playing) {
audioPlayer.pause();
STATE.music.playing = false;
document.getElementById(‘musicPlayBtn’).textContent = ‘▶’;
} else {
if (STATE.music.currentIndex === -1) {
playTrack(0);
} else {
audioPlayer.play();
STATE.music.playing = true;
document.getElementById(‘musicPlayBtn’).textContent = ‘⏸’;
}
}
}

/** Bài trước */
function prevTrack() {
const prev = STATE.music.currentIndex - 1;
if (prev >= 0) playTrack(prev);
else playTrack(STATE.music.playlist.length - 1);
}

/** Bài tiếp theo */
function nextTrack() {
const next = STATE.music.currentIndex + 1;
if (next < STATE.music.playlist.length) playTrack(next);
else playTrack(0);
}

/** Điều chỉnh âm lượng */
function setVolume(value) {
audioPlayer.volume = parseFloat(value);
// Cập nhật gradient của slider
const slider = document.getElementById(‘volumeSlider’);
slider.style.background = `linear-gradient(to right, var(--accent-rose) ${value*100}%, var(--bg-elevated) ${value*100}%)`;
}

/** Render danh sách playlist */
function renderPlaylist() {
const container = document.getElementById(‘playlist’);
if (!container) return;

if (STATE.music.playlist.length === 0) {
container.innerHTML = ‘’;
return;
}

container.innerHTML = STATE.music.playlist.map((track, i) => `<div class="playlist-item ${i === STATE.music.currentIndex ? 'active' : ''}" onclick="playTrack(${i})"> <span>${i === STATE.music.currentIndex ? '♪' : '○'}</span> <span class="track-name">${track.name}</span> <button onclick="removeTrack(event, ${i})" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:0.75rem;">✕</button> </div>`).join(’’);
}

/** Xóa track khỏi playlist */
function removeTrack(event, index) {
event.stopPropagation();
STATE.music.playlist.splice(index, 1);
if (STATE.music.currentIndex >= STATE.music.playlist.length) {
STATE.music.currentIndex = STATE.music.playlist.length - 1;
}
savePlaylistToStorage();
renderPlaylist();
}

/** Lưu playlist (chỉ URL, không lưu blob) vào localStorage */
function savePlaylistToStorage() {
const urlTracks = STATE.music.playlist.filter(t => t.type === ‘url’);
localStorage.setItem(‘coupleplay_playlist’, JSON.stringify(urlTracks));
}

// Tự động next khi hết nhạc
audioPlayer.addEventListener(‘ended’, () => {
if (STATE.music.playlist.length > 1) nextTrack();
});

// ═══════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════

/** Lấy bài theo level */
function getCardsByLevel(level) {
return STATE.cards.filter(c => c.level === level);
}

/** Format thời gian từ giây */
function formatDuration(seconds) {
if (seconds < 60) return `${seconds}s`;
const m = Math.floor(seconds / 60);
const s = seconds % 60;
return s > 0 ? `${m}p${s}s` : `${m} phút`;
}

/** Hiển thị toast notification */
function showToast(message, duration = 3000) {
const toast = document.getElementById(‘toast’);
toast.textContent = message;
toast.classList.remove(‘hidden’);

// Force reflow để animation hoạt động đúng
toast.offsetHeight;
toast.classList.add(‘show’);

setTimeout(() => {
toast.classList.remove(‘show’);
setTimeout(() => toast.classList.add(‘hidden’), 300);
}, duration);
}

// ═══════════════════════════════════════════════════
// TAILWIND CONFIG — Custom colors
// ═══════════════════════════════════════════════════

// Tailwind JIT config (nếu cần mở rộng)
if (typeof tailwind !== ‘undefined’) {
tailwind.config = {
darkMode: ‘class’,
theme: {
extend: {
colors: {
rose: { DEFAULT: ‘#c0144c’, dark: ‘#8b0626’ },
wine: ‘#6b1427’,
plum: ‘#4a0d2e’,
gold: ‘#c9a84c’,
cream: ‘#f0e6d3’
}
}
}
};
}