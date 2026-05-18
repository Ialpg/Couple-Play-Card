/* ══════════════════════════════════════════
   SECRET DRAW — app.js
   ══════════════════════════════════════════ */

/* ── DEFAULT CARDS ─────────────────────── */
const DEFAULT_CARDS = [
  {
    title: "Cái Nhìn Thật Lâu",
    desc: "Nhìn vào mắt người kia thật sâu trong 30 giây, không được cười hay nói chuyện. Chỉ nhìn và cảm nhận.",
    level: 1,
  },
  {
    title: "Nụ Hôn Trán",
    desc: "Hôn lên trán người kia thật nhẹ nhàng, giữ môi ở đó 5 giây. Đặt tay lên má họ khi hôn.",
    level: 1,
  },
  {
    title: "Thì Thầm Điều Bí Mật",
    desc: "Nói thầm vào tai người kia một điều bạn chưa bao giờ nói ra. Không cần phải là gì to lớn – chỉ cần thật.",
    level: 1,
  },
  {
    title: "Massage Bàn Tay",
    desc: "Cầm tay người kia, massage nhẹ từng ngón tay và lòng bàn tay trong 1 phút. Chú ý từng đường chỉ tay của họ.",
    level: 1,
  },
  {
    title: "Ôm Chặt 60 Giây",
    desc: "Ôm người kia thật chặt, đặt đầu vào vai hoặc ngực họ. Không nói gì, chỉ nghe tiếng tim và hơi thở của nhau.",
    level: 1,
  },
  {
    title: "Vuốt Tóc",
    desc: "Dùng tay nhẹ nhàng vuốt tóc người kia từ đỉnh đầu xuống, như đang ru họ ngủ. Làm chậm và tình cảm.",
    level: 1,
  },
  {
    title: "Kể Kỷ Niệm Đẹp Nhất",
    desc: "Kể cho nhau nghe một kỷ niệm đẹp nhất bạn nhớ về người kia. Kể bằng giọng thật nhẹ và tình cảm.",
    level: 1,
  },
  {
    title: "Nụ Hôn Má",
    desc: "Hôn nhẹ lên từng bên má người kia, mỗi bên 3 giây. Giữ tay họ trong khi hôn.",
    level: 1,
  },
  {
    title: "Nụ Hôn Chậm",
    desc: "Hôn môi người kia thật chậm – bắt đầu nhẹ như chạm, rồi từ từ sâu hơn. Không vội vàng, tận hưởng từng khoảnh khắc trong ít nhất 45 giây.",
    level: 2,
  },
  {
    title: "Massage Cổ Vai",
    desc: "Để người kia ngồi trước mặt bạn và massage nhẹ nhàng cổ và vai họ trong 2 phút. Dùng ngón tay cái ấn nhẹ vào các điểm căng.",
    level: 2,
  },
  {
    title: "Hơi Thở Trên Da",
    desc: "Thổi nhẹ hơi thở ấm lên cổ, tai hoặc gáy người kia thật chậm. Quan sát phản ứng của họ.",
    level: 2,
  },
  {
    title: "Nhảy Chậm Không Nhạc",
    desc: "Đứng ôm nhau và nhảy chầm chậm dù không có nhạc. Nhắm mắt và chỉ cảm nhận cơ thể của nhau.",
    level: 2,
  },
  {
    title: "Hôn Lên Cổ",
    desc: "Hôn nhẹ nhàng lên cổ người kia – từ dưới tai xuống đến vai. Mỗi nụ hôn cách nhau một nhịp thở.",
    level: 2,
  },
  {
    title: "Chạm Tay Khắp Mặt",
    desc: "Nhắm mắt lại và để người kia dùng đầu ngón tay khẽ chạm lên từng phần khuôn mặt bạn: trán, gò má, mũi, môi... như đang vẽ lại ký ức.",
    level: 2,
  },
  {
    title: "Lời Thì Thầm Ngọt Ngào",
    desc: "Nói thầm vào tai người kia những gì bạn yêu thích nhất về cơ thể và tâm hồn họ, thật chi tiết và cụ thể.",
    level: 2,
  },
  {
    title: "Trán Chạm Trán",
    desc: "Đứng thật gần, để trán chạm trán nhau. Nhắm mắt lại, hít thở cùng nhịp. Giữ nguyên trong 1 phút không nói một lời.",
    level: 2,
  },
  {
    title: "Cởi Nút Áo Nhau",
    desc: "Chậm rãi, tình tứ cởi từng chiếc nút áo của người kia bằng chỉ hai ngón tay. Nhìn vào mắt họ trong khi làm.",
    level: 3,
  },
  {
    title: "Hôn Sâu Không Giới Hạn",
    desc: "Dành trọn thời gian hẹn hò chỉ để hôn nhau – khám phá mọi cách hôn khác nhau mà hai người chưa thử.",
    level: 3,
  },
  {
    title: "Massage Toàn Lưng",
    desc: "Để người kia nằm sấp, bắt đầu massage từ gáy xuống toàn bộ phần lưng. Dùng cả hai tay, thay đổi áp lực và tốc độ tùy theo cảm nhận.",
    level: 3,
  },
  {
    title: "Khiêu Vũ Gợi Cảm",
    desc: "Bật một bản nhạc chậm, sexy và khiêu vũ cho người kia xem trong 1 phút. Tự nhiên, tự tin – không cần hoàn hảo.",
    level: 3,
  },
  {
    title: "Thì Thầm Điều Muốn",
    desc: "Nói thật nhỏ vào tai người kia một điều bạn muốn họ làm cho mình tối nay. Chi tiết nhất có thể.",
    level: 3,
  },
  {
    title: "Hôn Từ Vai Xuống",
    desc: "Bắt đầu từ điểm nối vai và cổ, hôn nhẹ xuống theo đường vai người kia. Mỗi nụ hôn dừng lại một nhịp tim.",
    level: 3,
  },
];

/* ── STATE ──────────────────────────────── */
let S = {
  decks: {}, // { id: { name, cards[] } }
  activeDecks: [], // array of deck ids currently selected
  cards: [], // merged cards from active decks (computed)
  usedIdx: [],
  current: null,
  round: 0,
  heat: 0,
  timerSec: 120,
  timerPreset: 120,
  timerOn: false,
  timerInterval: null,
  history: [],
  safeWord: "Dừng Lại",
  musicOn: false,
};

/* ── INIT ───────────────────────────────── */
function init() {
  // Load decks
  const raw = localStorage.getItem("sd_decks");
  if (raw) {
    S.decks = JSON.parse(raw);
  } else {
    // First run or migrate from old format
    const oldCards = localStorage.getItem("sd_cards");
    S.decks = {
      default: {
        name: "Mặc Định",
        cards: oldCards ? JSON.parse(oldCards) : [...DEFAULT_CARDS],
      },
    };
    saveDecks();
  }

  // Load active deck selection
  const sad = localStorage.getItem("sd_active_decks");
  if (sad) {
    S.activeDecks = JSON.parse(sad).filter((id) => S.decks[id]); // clean stale ids
  }
  if (S.activeDecks.length === 0) {
    S.activeDecks = Object.keys(S.decks).slice(0, 1);
    saveActiveDecks();
  }

  rebuildCards();

  // Load history
  const sh = localStorage.getItem("sd_history");
  S.history = sh ? JSON.parse(sh) : [];

  // Load safe word
  const sw = localStorage.getItem("sd_sw");
  if (sw) {
    document.getElementById("safe-word-input").value = sw;
    S.safeWord = sw;
  }

  initCanvas();
  updateDeckLabel();
  updateActiveDeckBadge();

  document
    .getElementById("safe-word-input")
    .addEventListener("input", function () {
      S.safeWord = this.value;
      localStorage.setItem("sd_sw", this.value);
      document.getElementById("safe-word-display").innerHTML =
        "🛑 " + (this.value || "DỪNG");
    });

  setupDeckDrag();
}

/* ── DECK PERSISTENCE ───────────────────── */
function saveDecks() {
  localStorage.setItem("sd_decks", JSON.stringify(S.decks));
}
function saveActiveDecks() {
  localStorage.setItem("sd_active_decks", JSON.stringify(S.activeDecks));
}

/* Rebuild S.cards from active decks */
function rebuildCards() {
  S.cards = [];
  S.activeDecks.forEach((id) => {
    if (S.decks[id]) S.cards = S.cards.concat(S.decks[id].cards);
  });
  // Fallback: if nothing selected, use all cards from first deck
  if (S.cards.length === 0) {
    const firstId = Object.keys(S.decks)[0];
    if (firstId) S.cards = [...S.decks[firstId].cards];
  }
}

/* ── DECK SELECTOR MODAL ────────────────── */
function openDeckModal() {
  renderDeckList();
  document.getElementById("deck-modal").classList.add("open");
}
function closeDeckModal(e) {
  if (!e || e.target === document.getElementById("deck-modal"))
    document.getElementById("deck-modal").classList.remove("open");
}

function renderDeckList() {
  const container = document.getElementById("deck-list");
  const ids = Object.keys(S.decks);

  if (ids.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:rgba(255,215,225,.22);font-size:.82rem;margin:24px 0;font-family:'Playfair Display',serif;font-style:italic;">Chưa có bộ bài nào...</p>`;
    return;
  }

  container.innerHTML = ids
    .map((id) => {
      const deck = S.decks[id];
      const isActive = S.activeDecks.includes(id);
      const isDefault = id === "default";
      return `
      <div class="deck-item" onclick="toggleDeckSelection('${id}')">
        <div class="deck-check ${isActive ? "checked" : ""}"></div>
        <div class="deck-info">
          <h4>${escHtml(deck.name)}</h4>
          <p>${deck.cards.length} lá bài</p>
        </div>
        ${!isDefault ? `<button class="deck-del" onclick="deleteDeck(event,'${id}')" title="Xóa bộ bài">✕</button>` : ""}
      </div>`;
    })
    .join("");
}

function toggleDeckSelection(id) {
  const idx = S.activeDecks.indexOf(id);
  if (idx >= 0) {
    // Deselect – but keep at least 1 active
    if (S.activeDecks.length > 1) S.activeDecks.splice(idx, 1);
    else {
      showToast("⚠ Phải chọn ít nhất 1 bộ bài!");
      return;
    }
  } else {
    S.activeDecks.push(id);
  }
  saveActiveDecks();
  rebuildCards();
  updateDeckLabel();
  updateActiveDeckBadge();
  renderDeckList();
}

function deleteDeck(e, id) {
  e.stopPropagation();
  if (id === "default") {
    showToast("⚠ Không thể xóa bộ mặc định!");
    return;
  }
  if (!confirm(`Xóa bộ bài "${S.decks[id].name}"?`)) return;
  delete S.decks[id];
  S.activeDecks = S.activeDecks.filter((a) => a !== id);
  if (S.activeDecks.length === 0) S.activeDecks = ["default"];
  saveDecks();
  saveActiveDecks();
  rebuildCards();
  updateDeckLabel();
  updateActiveDeckBadge();
  renderDeckList();
  showToast("✓ Đã xóa bộ bài!");
}

function applyDeckSelection() {
  document.getElementById("deck-modal").classList.remove("open");
  showToast(
    `✓ Đang dùng ${S.activeDecks.length} bộ bài · ${S.cards.length} lá`,
  );
}

function updateActiveDeckBadge() {
  const el = document.getElementById("active-deck-badge");
  if (!el) return;
  const names = S.activeDecks.map((id) => S.decks[id]?.name || id);
  if (names.length === 0) {
    el.textContent = "";
    return;
  }
  el.textContent =
    names.length <= 2
      ? "Đang dùng: " + names.join(", ")
      : `Đang dùng: ${names[0]} + ${names.length - 1} bộ khác`;
}

/* ── IMPORT MODAL ───────────────────────── */
function openImportModal() {
  document.getElementById("deck-modal").classList.remove("open");
  document.getElementById("import-modal").classList.add("open");
}
function closeImportModal(e) {
  if (!e || e.target === document.getElementById("import-modal"))
    document.getElementById("import-modal").classList.remove("open");
}

function importManual() {
  const raw = document.getElementById("manual-import").value.trim();
  if (!raw) return;
  const deckName =
    document.getElementById("import-deck-name").value.trim() || "Bộ Bài Mới";

  const newCards = [];
  raw
    .split("\n")
    .filter((l) => l.trim())
    .forEach((line) => {
      const p = line.split("|");
      if (p.length >= 2) {
        newCards.push({
          title: p[0].trim(),
          desc: p[1].trim(),
          level: parseInt(p[2]) || 1,
        });
      }
    });

  if (newCards.length) {
    const id = "deck_" + Date.now();
    S.decks[id] = { name: deckName, cards: newCards };
    S.activeDecks.push(id);
    saveDecks();
    saveActiveDecks();
    rebuildCards();
    updateDeckLabel();
    updateActiveDeckBadge();
    showToast(`✓ Đã thêm "${deckName}" (${newCards.length} lá)!`);
    document.getElementById("manual-import").value = "";
    document.getElementById("import-deck-name").value = "";
    document.getElementById("import-modal").classList.remove("open");
  }
}

function importCards(input) {
  const file = input.files[0];
  if (!file) return;
  const deckName =
    document.getElementById("import-deck-name").value.trim() ||
    file.name.replace(/\.[^.]+$/, "");

  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result.replace(/^\uFEFF/, "");
    const newCards = [];

    // Proper CSV parser (handles quoted fields with commas inside)
    function parseCSVLine(line) {
      const result = [];
      let cur = "",
        inQ = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
          if (inQ && line[i + 1] === '"') {
            cur += '"';
            i++;
          } else inQ = !inQ;
        } else if (ch === "," && !inQ) {
          result.push(cur.trim());
          cur = "";
        } else {
          cur += ch;
        }
      }
      result.push(cur.trim());
      return result;
    }

    const lines = text.split(/\r?\n/);
    let headerRow = -1;

    // Find the header row (contains "title" and "description")
    for (let i = 0; i < lines.length; i++) {
      const low = lines[i].toLowerCase();
      if (low.includes("title") && low.includes("description")) {
        headerRow = i;
        break;
      }
    }
    if (headerRow === -1) {
      showToast("⚠ Không tìm thấy header (title, description)!");
      return;
    }

    const headers = parseCSVLine(lines[headerRow]).map((h) =>
      h.toLowerCase().trim(),
    );
    const iSuit = headers.indexOf("suit");
    const iLevel = headers.indexOf("level");
    const iLName = headers.indexOf("level_name");
    const iCName = headers.indexOf("card_name");
    const iTitle = headers.indexOf("title");
    const iDesc = headers.indexOf("description");
    const iDurSec = headers.indexOf("duration_seconds");
    const iDurTxt = headers.indexOf("duration_text");

    if (iTitle === -1 || iDesc === -1) {
      showToast("⚠ CSV thiếu cột title hoặc description!");
      return;
    }

    for (let i = headerRow + 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      const cols = parseCSVLine(lines[i]);

      const suit = iSuit >= 0 ? cols[iSuit] || "♥" : "♥";
      const level = Math.min(
        5,
        Math.max(1, parseInt(iLevel >= 0 ? cols[iLevel] : "1") || 1),
      );
      const level_name = iLName >= 0 ? cols[iLName] || "" : "";
      const card_name = iCName >= 0 ? cols[iCName] || "" : "";
      const title = iTitle >= 0 ? cols[iTitle] || card_name || "" : "";

      // ── description: nếu cột desc bị rỗng (file bị vỡ cột),
      //    gộp tất cả cột từ iDesc đến trước duration_seconds
      let desc = iDesc >= 0 ? cols[iDesc] || "" : "";
      let durationSec = iDurSec >= 0 ? parseInt(cols[iDurSec]) || null : null;
      let durationText = iDurTxt >= 0 ? cols[iDurTxt] || "" : "";

      // Fallback: nếu desc quá ngắn, file có thể bị vỡ cột → scan từ cuối
      if (!durationText && !durationSec) {
        let end = cols.length - 1;
        while (end >= iDesc && cols[end] === "") end--;
        if (/phút|giây/i.test(cols[end]) || /^\d+:\d+$/.test(cols[end])) {
          durationText = cols[end];
          end--;
          if (end >= iDesc && /^\d+$/.test(cols[end])) {
            durationSec = parseInt(cols[end]);
            end--;
          }
        } else if (/^\d+$/.test(cols[end]) && end > iDesc) {
          durationSec = parseInt(cols[end]);
          end--;
        }
        // Gộp tất cả phần còn lại thành description
        const parts = cols.slice(iDesc, end + 1).filter((p) => p !== "");
        if (parts.length > 1) desc = parts.join(" ");
      }

      if (!title || !desc) continue;
      newCards.push({
        suit,
        level,
        level_name,
        card_name,
        title,
        desc,
        duration: durationSec,
        durationText,
      });
    }

    if (newCards.length) {
      const id = "deck_" + Date.now();
      S.decks[id] = { name: deckName, cards: newCards };
      S.activeDecks.push(id);
      saveDecks();
      saveActiveDecks();
      rebuildCards();
      updateDeckLabel();
      updateActiveDeckBadge();
      showToast(`✓ Import thành công ${newCards.length} lá bài! 🔥`);
      document.getElementById("import-deck-name").value = "";
      document.getElementById("import-modal").classList.remove("open");
    } else {
      showToast("⚠ Không đọc được lá bài nào. Kiểm tra file CSV!");
    }
    input.value = "";
  };
  reader.readAsText(file, "UTF-8");
}
/* ── CANVAS ─────────────────────────────── */
function initCanvas() {
  const cv = document.getElementById("bg-canvas"),
    ctx = cv.getContext("2d");
  let W, H;
  const pts = [];
  function resize() {
    W = cv.width = innerWidth;
    H = cv.height = innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);
  const palettes = [
    "rgba(200,16,46,",
    "rgba(212,160,23,",
    "rgba(159,42,107,",
    "rgba(255,120,140,",
  ];
  for (let i = 0; i < 55; i++)
    pts.push({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 0.9 + 0.2,
      phase: Math.random() * Math.PI * 2,
      spd: Math.random() * 0.004 + 0.001,
      col: palettes[Math.floor(Math.random() * palettes.length)],
    });
  function frame() {
    ctx.clearRect(0, 0, W, H);
    const t = Date.now() * 0.001;
    pts.forEach((p) => {
      const a = 0.12 + 0.3 * Math.abs(Math.sin(t * p.spd * 8 + p.phase));
      ctx.beginPath();
      ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.col + a + ")";
      ctx.fill();
    });
    requestAnimationFrame(frame);
  }
  frame();
}

/* ── SCREEN NAV ─────────────────────────── */
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}
function goHome() {
  stopTimer();
  showScreen("screen-home");
  document.getElementById("btn-heat").classList.remove("visible");
}
function goToDeck() {
  stopTimer();
  showScreen("screen-deck");
  document.getElementById("btn-heat").classList.remove("visible");
  updateDeckLabel();
}

function startGame() {
  S.safeWord = document.getElementById("safe-word-input").value || "Dừng Lại";
  document.getElementById("safe-word-display").innerHTML = "🛑 " + S.safeWord;
  S.usedIdx = [];
  S.round = 0;
  S.heat = 0;
  S.history = [];
  // Reset emotional arc state
  S._lastLevel = 0;
  S._microPeakDone = false;
  S._microPeakUsed = 0;
  S._hotStreak = 0;
  showScreen("screen-deck");
  updateDeckLabel();
  const layers = document.querySelectorAll(".s-layer");
  layers.forEach((l, i) => {
    l.style.opacity = "0";
    l.style.transform = "translateY(28px)";
    setTimeout(
      () => {
        l.style.transition = "all .5s cubic-bezier(.4,0,.2,1)";
        const trs = [
          "rotate(-7deg) translateY(14px) translateX(-8px)",
          "rotate(-3deg) translateY(8px) translateX(-3px)",
          "rotate(2deg) translateY(4px)",
          "rotate(0deg)",
        ];
        const ops = [0.4, 0.65, 0.82, 1];
        l.style.opacity = ops[i];
        l.style.transform = trs[i];
      },
      i * 100 + 80,
    );
  });
}

function updateDeckLabel() {
  const remaining = S.cards.length - S.usedIdx.length;
  document.getElementById("deck-count-label").textContent =
    `${remaining} lá còn lại · ${S.cards.length} tổng`;
}

/* ── DECK DRAG ──────────────────────────── */
function setupDeckDrag() {
  const stage = document.getElementById("deck-stage");
  let sy = 0,
    cy = 0,
    drag = false;
  const top = document.getElementById("top-card");

  stage.addEventListener(
    "touchstart",
    (e) => {
      sy = e.touches[0].clientY;
      drag = true;
      top.style.transition = "none";
    },
    { passive: true },
  );
  stage.addEventListener(
    "touchmove",
    (e) => {
      if (!drag) return;
      cy = e.touches[0].clientY;
      const dy = sy - cy;
      if (dy > 0) {
        const p = Math.min(dy / 120, 1);
        top.style.transform = `translateY(${-dy * 0.7}px) rotate(${p * 6}deg) scale(${1 + p * 0.02})`;
        top.style.opacity = String(1 - p * 0.25);
      }
    },
    { passive: true },
  );
  stage.addEventListener(
    "touchend",
    () => {
      if (!drag) return;
      drag = false;
      const dy = sy - cy;
      if (dy > 65) {
        animateDraw(top);
      } else {
        top.style.transition = "all .4s cubic-bezier(.4,0,.2,1)";
        top.style.transform = "rotate(0deg)";
        top.style.opacity = "1";
      }
    },
    { passive: true },
  );
  stage.addEventListener("click", () => animateDraw(top));
}

function animateDraw(el) {
  const r = el.getBoundingClientRect(),
    W = innerWidth,
    H = innerHeight;
  const fly = document.createElement("div");
  fly.className = "fly-card";
  fly.style.cssText = `left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;`;
  fly.innerHTML = el.innerHTML;
  document.body.appendChild(fly);
  el.style.opacity = "0";
  spawnSparkles(r.left + r.width / 2, r.top + r.height / 2);
  requestAnimationFrame(() => {
    fly.style.transition = "all .55s cubic-bezier(.34,1.1,.64,1)";
    fly.style.left = W / 2 - r.width / 2 + "px";
    fly.style.top = H / 2 - r.height / 2 + "px";
    fly.style.transform = "scale(1.04) rotate(4deg)";
    fly.style.boxShadow =
      "0 40px 100px rgba(0,0,0,.95),0 0 80px rgba(200,16,46,.2)";
    setTimeout(() => {
      fly.style.opacity = "0";
      fly.style.transform = "scale(.93) translateY(-14px) rotate(-3deg)";
      setTimeout(() => {
        fly.remove();
        el.style.opacity = "1";
        el.style.transition = "";
        el.style.transform = "";
        drawCard();
      }, 270);
    }, 440);
  });
}

function spawnSparkles(cx, cy) {
  const colors = [
    "#F0C040",
    "#D4A017",
    "#C8102E",
    "#E91E8C",
    "#fff",
    "#FF6B7A",
  ];
  for (let i = 0; i < 10; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    const a = (i / 10) * Math.PI * 2,
      d = 22 + Math.random() * 42;
    s.style.cssText = `left:${cx}px;top:${cy}px;background:${colors[Math.floor(Math.random() * colors.length)]};`;
    document.body.appendChild(s);
    const tx = cx + Math.cos(a) * d,
      ty = cy + Math.sin(a) * d;
    requestAnimationFrame(() => {
      s.style.transition = "all .55s ease-out";
      s.style.left = tx + "px";
      s.style.top = ty + "px";
      s.style.opacity = "0";
      s.style.transform = "scale(2.5)";
      setTimeout(() => s.remove(), 550);
    });
  }
}

/* ── CARD LOGIC ─────────────────────────── */
/*
  Emotional Arc Algorithm
  ─────────────────────────────────────────────
  GIAI ĐOẠN 1 — Dạo Đầu (bài 1–10):
    • Chủ yếu level 1, xen kẽ nhẹ một vài level 2
    • Tạo "micro-peak" ở bài 5–7: rút 1 bài level 2 rồi hạ lại level 1,
      để cảm xúc được nâng lên → hạ → dễ chịu rồi mới tiếp tục leo.

  GIAI ĐOẠN 2 — Leo Dần (bài 11 → 70% tổng số bài):
    • Tăng dần mức độ: level 2 → xen 3
    • Sau mỗi lần rút bài cấp cao thì cho 1 bài cấp thấp hơn để "nghỉ thở"
      trước khi tiếp tục leo.

  GIAI ĐOẠN 3 — Bùng Cháy (sau 70% bài đã rút):
    • Chỉ còn level 3+, không có dạo đầu nữa.
    • Nếu heat > 0: đẩy thêm level.
  ─────────────────────────────────────────────
*/
function pickCard() {
  if (S.usedIdx.length >= S.cards.length) S.usedIdx = [];

  const total = S.cards.length;
  const used = S.usedIdx.length;
  const r = S.round; // bài thứ mấy (1-indexed, tăng SAU khi pick)
  const heat = S.heat;
  const pct = used / Math.max(total, 1); // % bài đã rút

  // ── Tính maxLevel theo arc ──────────────
  let maxLevel;

  if (heat > 0) {
    // Người chơi đã bấm 🔥 → bỏ qua arc, đẩy thẳng
    maxLevel = Math.min(5, 2 + heat);
  } else if (pct >= 0.7) {
    // ── Giai đoạn 3: Bùng Cháy ──────────
    maxLevel = 3;
    // Xen kẽ bài cực đỉnh sau mỗi 2–3 bài level 3
    if (S._hotStreak === undefined) S._hotStreak = 0;
    S._hotStreak++;
    if (S._hotStreak >= 3 && S.cards.some((c) => c.level >= 4)) {
      maxLevel = 4;
      S._hotStreak = 0;
    }
  } else if (r <= 10) {
    // ── Giai đoạn 1: Dạo Đầu ────────────
    // Bài 5–7: micro-peak — rút 1 bài level 2 (cao trào nhỏ)
    if (r >= 5 && r <= 7 && !S._microPeakDone) {
      // 60% xác suất rút bài level 2 trong window này
      if (Math.random() < 0.6) {
        maxLevel = 2;
        S._microPeakUsed = (S._microPeakUsed || 0) + 1;
        if (S._microPeakUsed >= 1) S._microPeakDone = true;
      } else {
        maxLevel = 1;
      }
    } else if (S._lastLevel === 2) {
      // Vừa rút bài level 2 → hạ về level 1 để "hạ nhiệt"
      maxLevel = 1;
    } else {
      // Phần còn lại của giai đoạn 1: chủ yếu level 1
      maxLevel = Math.random() < 0.85 ? 1 : 2;
    }
  } else {
    // ── Giai đoạn 2: Leo Dần ────────────
    // progress trong giai đoạn 2: 0 → 1
    const p2 = (pct - 0) / 0.7;

    if (S._lastLevel === 3) {
      // Vừa rút bài level 3 → cho 1 bài "nghỉ thở" level 1–2
      maxLevel = Math.random() < 0.6 ? 2 : 1;
    } else if (p2 < 0.35) {
      // Đầu giai đoạn 2: chủ yếu level 2, xen chút level 1
      maxLevel = Math.random() < 0.7 ? 2 : 1;
    } else if (p2 < 0.65) {
      // Giữa giai đoạn 2: leo lên level 2–3
      maxLevel = Math.random() < 0.55 ? 3 : 2;
    } else {
      // Cuối giai đoạn 2 (gần 70%): chuẩn bị bùng cháy
      maxLevel = Math.random() < 0.7 ? 3 : 2;
    }
  }

  // ── Lọc bài theo maxLevel ──────────────
  const allUnused = S.cards
    .map((c, i) => ({ ...c, i }))
    .filter((c) => !S.usedIdx.includes(c.i));

  let pool = allUnused.filter((c) => c.level <= maxLevel);

  // Fallback: nếu không còn bài phù hợp thì dùng toàn bộ chưa dùng
  if (!pool.length) pool = allUnused;
  // Fallback tuyệt đối: reset và dùng tất cả
  if (!pool.length) {
    S.usedIdx = [];
    pool = S.cards.map((c, i) => ({ ...c, i }));
  }

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  S.usedIdx.push(chosen.i);
  S._lastLevel = chosen.level; // nhớ level vừa rút để điều chỉnh lần sau
  return chosen;
}
function drawCard() {
  const card = pickCard();
  S.current = card;
  S.round++;

  // Title & Suit
  document.getElementById("card-title").textContent = card.title;
  document.getElementById("card-suit").textContent = card.suit || "♥";
  document.getElementById("round-counter").textContent = `Lá ${S.round}`;

  // Level Badge + Level Name
  const badge = document.getElementById("card-level-badge");
  const levelInfo = getLevelInfo(card.level, card.level_name);

  badge.textContent = levelInfo.text;
  badge.className = `l-tag ${levelInfo.class}`;

  // Description + Duration
  let htmlDesc = card.desc || "";

  if (card.duration || card.durationText) {
    htmlDesc += `
      <div class="duration-info">
        ⏱ <strong>${card.durationText || card.duration + " giây"}</strong>
      </div>`;
  }

  document.getElementById("card-desc").innerHTML = htmlDesc;

  // Heat & History
  const hp = Math.min(96, (S.round / 12) * 100 + S.heat * 17);
  document.getElementById("heat-fill").style.width = hp + "%";

  for (let i = 0; i < 5; i++)
    document.getElementById("hd-" + i).classList.toggle("on", i <= S.heat);

  document.getElementById("btn-next").classList.remove("visible");
  resetTimer();

  // Save history
  S.history.push({ ...card, round: S.round });
  localStorage.setItem("sd_history", JSON.stringify(S.history));

  showScreen("screen-play");
  document.getElementById("btn-heat").classList.add("visible");
  updateDeckLabel();

  // Animation
  const fc = document.getElementById("card-flip");
  fc.classList.remove("flipped"); // reset flip state
  fc.style.transition = "none";
  fc.style.opacity = "0";
  fc.style.transform = "translateY(-22px) rotateY(-8deg)";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fc.style.transition = "all .62s cubic-bezier(.34,1.1,.64,1)";
      fc.style.opacity = "1";
      fc.style.transform = "";
    });
  });
}

// Helper function
function getLevelInfo(level, level_name) {
  const levels = {
    1: { text: level_name || "✦ Dạo Đầu", class: "t-gentle" },
    2: { text: level_name || "♥ Tình Cảm", class: "t-warm" },
    3: { text: level_name || "🔥 Nóng Bỏng", class: "t-hot" },
    4: { text: level_name || "🌋 Thô Bạo", class: "t-rough" },
    5: { text: level_name || "☠️ Cực Hạn", class: "t-extreme" },
  };
  return levels[level] || levels[1];
}

function drawNextCard(skipAnim) {
  const fc = document.getElementById("card-flip");
  // If called from swipe, card is already animated out — skip own animation
  if (skipAnim) {
    showScreen("screen-deck");
    document.getElementById("btn-heat").classList.remove("visible");
    // Unflip card for next round
    fc.classList.remove("flipped");
    updateDeckLabel();
    return;
  }
  fc.style.transition = "all .35s ease";
  fc.style.opacity = "0";
  fc.style.transform = "translateX(-48px) rotate(-4deg)";
  setTimeout(() => {
    showScreen("screen-deck");
    document.getElementById("btn-heat").classList.remove("visible");
    fc.classList.remove("flipped");
    updateDeckLabel();
    fc.style.transition = "none";
    fc.style.opacity = "1";
    fc.style.transform = "";
  }, 360);
}

/* ── TIMER ──────────────────────────────── */
function setTimer(s) {
  stopTimer();
  S.timerPreset = s;
  S.timerSec = s;
  updateTimerDisplay();
  document.querySelectorAll(".chip").forEach((b) => {
    b.classList.remove("active");
    if (b.getAttribute("onclick") === `setTimer(${s})`)
      b.classList.add("active");
  });
  document.getElementById("btn-next").classList.remove("visible");
  document.getElementById("timer-play-btn").textContent = "▶";
}
function toggleTimer() {
  S.timerOn ? pauseTimer() : startTimer();
}
function startTimer() {
  if (S.timerSec <= 0) resetTimer();
  S.timerOn = true;
  document.getElementById("timer-play-btn").textContent = "⏸";
  document.getElementById("timer-display").className = "clock running";
  S.timerInterval = setInterval(() => {
    S.timerSec--;
    updateTimerDisplay();
    if (S.timerSec <= 10 && S.timerSec > 0)
      document.getElementById("timer-display").className = "clock warning";
    if (S.timerSec <= 0) timerDone();
  }, 1000);
}
function pauseTimer() {
  S.timerOn = false;
  clearInterval(S.timerInterval);
  document.getElementById("timer-play-btn").textContent = "▶";
  document.getElementById("timer-display").className = "clock idle";
}
function stopTimer() {
  S.timerOn = false;
  clearInterval(S.timerInterval);
}
function resetTimer() {
  stopTimer();
  S.timerSec = S.timerPreset;
  updateTimerDisplay();
  document.getElementById("timer-play-btn").textContent = "▶";
  document.getElementById("timer-display").className = "clock idle";
  document.getElementById("btn-next").classList.remove("visible");
}
function timerDone() {
  stopTimer();
  document.getElementById("timer-display").className = "clock idle";
  document.getElementById("timer-display").textContent = "00:00";
  document.getElementById("timer-play-btn").textContent = "▶";
  if (navigator.vibrate) navigator.vibrate([180, 80, 180]);
  document.getElementById("btn-next").classList.add("visible");
  const d = document.getElementById("timer-display");
  d.style.color = "rgba(233,30,140,.82)";
  d.style.textShadow = "0 0 28px rgba(233,30,140,.5)";
  setTimeout(() => {
    d.style.color = "";
    d.style.textShadow = "";
    d.className = "clock idle";
  }, 2100);
}
function updateTimerDisplay() {
  const m = Math.floor(S.timerSec / 60),
    s = S.timerSec % 60;
  document.getElementById("timer-display").textContent =
    String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

/* ── HEAT ───────────────────────────────── */
function increaseHeat() {
  if (S.heat < 4) {
    S.heat++;
    for (let i = 0; i < 5; i++)
      document.getElementById("hd-" + i).classList.toggle("on", i <= S.heat);
    const f = document.getElementById("heat-fill");
    f.style.width = Math.min(96, parseInt(f.style.width) + 13) + "%";
    showToast("🔥 Nhiệt độ tăng lên!");
  } else showToast("🔥 Đã đạt mức tối đa!");
}

/* ── TOAST ──────────────────────────────── */
function showToast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => {
    t.style.opacity = "1";
    setTimeout(() => {
      t.style.opacity = "0";
      setTimeout(() => t.remove(), 300);
    }, 1750);
  });
}

/* ── SAFE WORD ──────────────────────────── */
function triggerSafeWord() {
  document.getElementById("safe-word-text").textContent =
    '"' + S.safeWord + '"';
  document.getElementById("safe-overlay").style.display = "flex";
  stopTimer();
  if (navigator.vibrate) navigator.vibrate([300, 150, 300]);
}
function hideSafeWord() {
  document.getElementById("safe-overlay").style.display = "none";
}

/* ── HISTORY ────────────────────────────── */
function showHistory() {
  renderHistory();
  document.getElementById("screen-history").classList.remove("hidden");
}
function hideHistory() {
  document.getElementById("screen-history").classList.add("hidden");
}
function clearHistory() {
  S.history = [];
  localStorage.removeItem("sd_history");
  renderHistory();
}
function renderHistory() {
  const list = document.getElementById("history-list");
  if (!S.history.length) {
    list.innerHTML = `<p style="text-align:center;color:rgba(255,215,225,.22);font-size:.82rem;margin-top:46px;font-family:'Playfair Display',serif;font-style:italic;">Chưa có lá bài nào được rút...</p>`;
    return;
  }
  const lc = [
    "rgba(212,160,23,.42)",
    "rgba(159,42,107,.52)",
    "rgba(200,16,46,.68)",
  ];
  list.innerHTML = S.history
    .map(
      (h, i) =>
        `<div class="h-item"><span class="h-num">${i + 1}</span><div class="h-info"><h4>${escHtml(h.title)}</h4><p>${escHtml(h.desc.substring(0, 56))}${h.desc.length > 56 ? "..." : ""}</p></div><span class="h-lv" style="color:${lc[h.level - 1]};">${"●".repeat(h.level)}</span></div>`,
    )
    .join("");
}

/* ── PHOTO ──────────────────────────────── */
function triggerPhotoUpload() {
  document.getElementById("photo-input").click();
}
function loadPhoto(input) {
  const file = input.files[0];
  if (!file) return;
  // photo removed
}

/* ── MUSIC ──────────────────────────────── */
function loadMusic(input) {
  const file = input.files[0];
  if (!file) return;
  const audio = document.getElementById("bg-music");
  audio.src = URL.createObjectURL(file);
  const name = file.name.replace(/\.[^.]+$/, "");
  ["music-title", "music-title2"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = name;
  });
  audio.play();
  S.musicOn = true;
  ["music-play-btn", "music-play-btn2"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = "⏸";
  });
}
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  if (!audio.src) return;
  if (S.musicOn) {
    audio.pause();
    S.musicOn = false;
    ["music-play-btn", "music-play-btn2"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "▶";
    });
  } else {
    audio.play();
    S.musicOn = true;
    ["music-play-btn", "music-play-btn2"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "⏸";
    });
  }
}

/* ── UTILS ──────────────────────────────── */
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ── TOUCH EVENTS ───────────────────────── */
document.addEventListener(
  "touchmove",
  (e) => {
    // Allow scroll in designated scroll areas and card body
    if (e.target.closest(".scroll-area") || e.target.closest(".c-body")) return;
    // Allow two-finger gestures (pinch/zoom) through
    if (e.touches.length > 1) return;
    e.preventDefault();
  },
  { passive: false },
);

let _lt = 0;
document.addEventListener(
  "touchend",
  (e) => {
    const n = Date.now();
    // Prevent double-tap zoom (iOS) but allow normal taps
    if (n - _lt < 260) e.preventDefault();
    _lt = n;
  },
  { passive: false },
);

/* ── CARD SWIPE (play screen) ───────────── */
function setupCardSwipe() {
  const scene = document.getElementById("card-scene");

  // Per-touch state
  let sx = 0,
    sy = 0,
    dx = 0,
    dy = 0;
  let dragging = false;
  let lastDx = 0,
    velX = 0,
    prevTime = 0;
  let animating = false;

  function getFC() {
    return document.getElementById("card-flip");
  }

  // ── Touch start ──────────────────────────
  scene.addEventListener(
    "touchstart",
    (e) => {
      if (animating) return;
      if (e.target.closest(".c-body")) return;
      const t = e.touches[0];
      sx = t.clientX;
      sy = t.clientY;
      dx = 0;
      dy = 0;
      lastDx = 0;
      velX = 0;
      dragging = false;
      prevTime = Date.now();
      const fc = getFC();
      fc.style.transition = "none";
      fc.style.willChange = "transform, opacity";
    },
    { passive: true },
  );

  // ── Touch move ───────────────────────────
  scene.addEventListener(
    "touchmove",
    (e) => {
      if (animating || !e.touches.length) return;
      if (e.target.closest(".c-body")) return;
      const t = e.touches[0];
      dx = t.clientX - sx;
      dy = t.clientY - sy;

      // Lock into horizontal drag only after clear intent
      if (!dragging) {
        if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
        if (Math.abs(dx) <= Math.abs(dy) * 1.2) return; // vertical scroll → ignore
        dragging = true;
      }

      const now = Date.now();
      const dt = Math.max(now - prevTime, 1);
      velX = ((dx - lastDx) / dt) * 16; // px per frame ~estimate
      lastDx = dx;
      prevTime = now;

      const fc = getFC();
      const ratio = Math.min(Math.abs(dx) / 200, 1);
      const rot = dx * 0.05;
      fc.style.transform = `translateX(${dx * 0.82}px) rotate(${rot}deg)`;
      fc.style.opacity = String(1 - ratio * 0.38);
    },
    { passive: true },
  );

  // ── Touch end ────────────────────────────
  scene.addEventListener(
    "touchend",
    () => {
      const fc = getFC();
      if (!dragging) {
        // Just a tap — reset
        fc.style.transition =
          "transform .3s cubic-bezier(.34,1.2,.64,1), opacity .3s ease";
        fc.style.transform = "";
        fc.style.opacity = "1";
        fc.style.willChange = "";
        return;
      }

      dragging = false;
      const threshold = window.innerWidth * 0.28;
      const flick = Math.abs(velX) > 6; // fast flick regardless of distance

      if (Math.abs(dx) > threshold || flick) {
        // ── Fly out ──────────────────────────
        animating = true;
        const dir = dx > 0 || velX > 0 ? 1 : -1;
        const flyX = dir * (window.innerWidth + 120);
        const flyRot = dir * 24;

        fc.style.transition =
          "transform .26s cubic-bezier(.4,0,.8,.6), opacity .22s ease";
        fc.style.transform = `translateX(${flyX}px) rotate(${flyRot}deg)`;
        fc.style.opacity = "0";

        setTimeout(() => {
          // Reset silently, then draw next card
          fc.style.transition = "none";
          fc.style.transform = "";
          fc.style.opacity = "1";
          fc.style.willChange = "";
          animating = false;
          drawCard();
        }, 260);
      } else {
        // ── Snap back with spring ─────────────
        fc.style.transition =
          "transform .4s cubic-bezier(.34,1.25,.64,1), opacity .3s ease";
        fc.style.transform = "";
        fc.style.opacity = "1";
        fc.style.willChange = "";
      }

      dx = 0;
      dy = 0;
      velX = 0;
    },
    { passive: true },
  );

  // ── Cancel (finger stolen by OS) ─────────
  scene.addEventListener(
    "touchcancel",
    () => {
      const fc = getFC();
      fc.style.transition =
        "transform .3s cubic-bezier(.34,1.2,.64,1), opacity .3s ease";
      fc.style.transform = "";
      fc.style.opacity = "1";
      fc.style.willChange = "";
      dragging = false;
      dx = 0;
      velX = 0;
    },
    { passive: true },
  );
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  setupCardSwipe();
});
