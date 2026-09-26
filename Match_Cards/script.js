/* ===== Konfiguration ===== */
const ICONS = ["🔥","💧","⚡","🌿","❄️","🌙","⭐","💎","🍀","👑"];
const ROWS = 4;
const COLS = 5;

/* ===== Spielzustand ===== */
let deck = [];
let board = [];
let firstCard = null;
let secondCard = null;
let locked = true;
let moves = 0;
let errors = 0;
let pairsFound = 0;
let gameTimer = null;
let seconds = 0;
let previewTimeout = null;
let countdownInterval = null;

/* ===== DOM-Referenzen ===== */
const boardEl       = document.getElementById("board");
const overlay       = document.getElementById("overlay");
const banner        = document.getElementById("previewBanner");
const countdownEl   = document.getElementById("countdown");
const subtitle      = document.getElementById("subtitle");
const progressBar   = document.getElementById("progressBar");
const difficultyEl  = document.getElementById("difficulty");
const newGameBtn    = document.getElementById("newGameBtn");
const playAgainBtn  = document.getElementById("playAgainBtn");

/* ===== Hilfsfunktionen ===== */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ===== Spielstart / Reset ===== */
function newGame() {
  // Alles stoppen & zurücksetzen
  clearInterval(gameTimer);
  clearInterval(countdownInterval);
  clearTimeout(previewTimeout);
  overlay.classList.remove("show");
  banner.classList.remove("show");

  // Nur Karten entfernen (ProgressBar behalten)
  [...boardEl.querySelectorAll(".card")].forEach(c => c.remove());
  progressBar.style.width = "0%";

  board = [];
  firstCard = secondCard = null;
  locked = true;
  moves = errors = pairsFound = seconds = 0;
  updateHUD();

  // Deck bauen
  deck = shuffle([...ICONS, ...ICONS]);

  // Board rendern
  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      const icon = deck.pop();
      row.push(icon);

      const card = document.createElement("div");
      card.className = "card";
      card.dataset.icon = icon;
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">?</div>
          <div class="card-back">${icon}</div>
        </div>`;
      card.addEventListener("click", () => selectCard(card));
      boardEl.appendChild(card);
    }
    board.push(row);
  }

  // Vorschau-Phase starten
  startPreview();
}

/* ===== Vorschau-Phase ===== */
function startPreview() {
  const previewTime = parseInt(difficultyEl.value);
  const totalSeconds = Math.ceil(previewTime / 1000);

  subtitle.textContent = "Präge dir die Karten ein! 👀";
  subtitle.style.color = "#fbbf24";

  // Alle Karten aufdecken
  boardEl.querySelectorAll(".card").forEach(c => c.classList.add("flipped"));
  boardEl.classList.add("locked");

  // Banner einblenden
  banner.classList.add("show");
  countdownEl.textContent = totalSeconds;

  // Fortschrittsbalken animieren
  const startTime = Date.now();
  const progressInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const pct = Math.min(100, (elapsed / previewTime) * 100);
    progressBar.style.width = pct + "%";
  }, 50);

  // Countdown
  countdownInterval = setInterval(() => {
    const remaining = Math.ceil((previewTime - (Date.now() - startTime)) / 1000);
    if (remaining > 0) countdownEl.textContent = remaining;
  }, 100);

  // Nach Ablauf: Karten verdecken
  previewTimeout = setTimeout(() => {
    clearInterval(progressInterval);
    clearInterval(countdownInterval);
    progressBar.style.width = "0%";
    banner.classList.remove("show");

    // Karten zurückdrehen
    boardEl.querySelectorAll(".card").forEach(c => c.classList.remove("flipped"));

    // Nach Animation freigeben
    setTimeout(() => {
      boardEl.classList.remove("locked");
      locked = false;
      subtitle.textContent = "Jetzt spielen! Finde die Paare 🧠";
      subtitle.style.color = "";
      startGameTimer();
    }, 600);
  }, previewTime);
}

/* ===== Spiel-Timer ===== */
function startGameTimer() {
  seconds = 0;
  document.getElementById("time").textContent = "0s";
  gameTimer = setInterval(() => {
    seconds++;
    document.getElementById("time").textContent = seconds + "s";
  }, 1000);
}

/* ===== HUD aktualisieren ===== */
function updateHUD() {
  document.getElementById("moves").textContent = moves;
  document.getElementById("errors").textContent = errors;
  document.getElementById("pairs").textContent = pairsFound + "/" + ICONS.length;
}

/* ===== Karte anklicken ===== */
function selectCard(card) {
  if (locked) return;
  if (card.classList.contains("flipped") || card.classList.contains("matched")) return;

  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    moves++;
    updateHUD();
    checkMatch();
  }
}

/* ===== Übereinstimmung prüfen ===== */
function checkMatch() {
  const isMatch = firstCard.dataset.icon === secondCard.dataset.icon;

  if (isMatch) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    pairsFound++;
    updateHUD();
    resetSelection();

    if (pairsFound === ICONS.length) win();
  } else {
    locked = true;
    boardEl.classList.add("locked");
    errors++;
    updateHUD();

    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      boardEl.classList.remove("locked");
      locked = false;
      resetSelection();
    }, 900);
  }
}

function resetSelection() {
  firstCard = null;
  secondCard = null;
}

/* ===== Gewonnen ===== */
function win() {
  clearInterval(gameTimer);
  document.getElementById("finalStats").innerHTML =
    `⏱️ ${seconds}s &nbsp; • &nbsp; 🎯 ${moves} Züge &nbsp; • &nbsp; ❌ ${errors} Fehler`;
  setTimeout(() => {
    overlay.classList.add("show");
    launchConfetti();
  }, 500);
}

/* ===== Konfetti ===== */
function launchConfetti() {
  const colors = ["#a78bfa", "#f472b6", "#60a5fa", "#fbbf24", "#34d399"];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (2 + Math.random() * 2) + "s";
    c.style.animationDelay = (Math.random() * 0.5) + "s";
    c.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

/* ===== Event-Listener ===== */
newGameBtn.addEventListener("click", newGame);
playAgainBtn.addEventListener("click", newGame);

/* ===== Beim Laden starten ===== */
newGame();