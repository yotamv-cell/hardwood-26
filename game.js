const teams = [
  { id:"ATL", city:"Atlanta", name:"Hawks", conf:"East", primary:"#E03A3E", secondary:"#C1D32F", current:["Trae Young","Jalen Johnson","Dyson Daniels"], alltime:["Dominique Wilkins","Bob Pettit","Dikembe Mutombo"], rating:84 },
  { id:"BOS", city:"Boston", name:"Celtics", conf:"East", primary:"#007A33", secondary:"#BA9653", current:["Jayson Tatum","Jaylen Brown","Derrick White"], alltime:["Larry Bird","Bill Russell","Paul Pierce"], rating:94 },
  { id:"BKN", city:"Brooklyn", name:"Nets", conf:"East", primary:"#111111", secondary:"#FFFFFF", current:["Cam Thomas","Nic Claxton","Cameron Johnson"], alltime:["Jason Kidd","Julius Erving","Vince Carter"], rating:79 },
  { id:"CHA", city:"Charlotte", name:"Hornets", conf:"East", primary:"#1D1160", secondary:"#00788C", current:["LaMelo Ball","Brandon Miller","Miles Bridges"], alltime:["Kemba Walker","Larry Johnson","Alonzo Mourning"], rating:81 },
  { id:"CHI", city:"Chicago", name:"Bulls", conf:"East", primary:"#CE1141", secondary:"#FFFFFF", current:["Coby White","Josh Giddey","Nikola Vucevic"], alltime:["Michael Jordan","Scottie Pippen","Derrick Rose"], rating:82 },
  { id:"CLE", city:"Cleveland", name:"Cavaliers", conf:"East", primary:"#860038", secondary:"#FDBB30", current:["Donovan Mitchell","Darius Garland","Evan Mobley"], alltime:["LeBron James","Mark Price","Brad Daugherty"], rating:93 },
  { id:"DAL", city:"Dallas", name:"Mavericks", conf:"West", primary:"#00538C", secondary:"#B8C4CA", current:["Anthony Davis","Kyrie Irving","Klay Thompson"], alltime:["Dirk Nowitzki","Luka Doncic","Jason Kidd"], rating:88 },
  { id:"DEN", city:"Denver", name:"Nuggets", conf:"West", primary:"#0E2240", secondary:"#FEC524", current:["Nikola Jokic","Jamal Murray","Aaron Gordon"], alltime:["Nikola Jokic","Alex English","Carmelo Anthony"], rating:94 },
  { id:"DET", city:"Detroit", name:"Pistons", conf:"East", primary:"#C8102E", secondary:"#1D42BA", current:["Cade Cunningham","Jalen Duren","Ausar Thompson"], alltime:["Isiah Thomas","Joe Dumars","Ben Wallace"], rating:86 },
  { id:"GSW", city:"Golden State", name:"Warriors", conf:"West", primary:"#1D428A", secondary:"#FFC72C", current:["Stephen Curry","Jimmy Butler","Draymond Green"], alltime:["Stephen Curry","Wilt Chamberlain","Kevin Durant"], rating:89 },
  { id:"HOU", city:"Houston", name:"Rockets", conf:"West", primary:"#CE1141", secondary:"#FFFFFF", current:["Alperen Sengun","Jalen Green","Amen Thompson"], alltime:["Hakeem Olajuwon","Moses Malone","James Harden"], rating:87 },
  { id:"IND", city:"Indiana", name:"Pacers", conf:"East", primary:"#002D62", secondary:"#FDBB30", current:["Tyrese Haliburton","Pascal Siakam","Myles Turner"], alltime:["Reggie Miller","Jermaine O'Neal","Paul George"], rating:90 },
  { id:"LAC", city:"LA", name:"Clippers", conf:"West", primary:"#C8102E", secondary:"#1D428A", current:["Kawhi Leonard","James Harden","Ivica Zubac"], alltime:["Chris Paul","Kawhi Leonard","Bob McAdoo"], rating:86 },
  { id:"LAL", city:"Los Angeles", name:"Lakers", conf:"West", primary:"#552583", secondary:"#FDB927", current:["LeBron James","Luka Doncic","Austin Reaves"], alltime:["Magic Johnson","Kobe Bryant","Kareem Abdul-Jabbar"], rating:92 },
  { id:"MEM", city:"Memphis", name:"Grizzlies", conf:"West", primary:"#5D76A9", secondary:"#F5B112", current:["Ja Morant","Jaren Jackson Jr.","Desmond Bane"], alltime:["Marc Gasol","Zach Randolph","Ja Morant"], rating:87 },
  { id:"MIA", city:"Miami", name:"Heat", conf:"East", primary:"#98002E", secondary:"#F9A01B", current:["Bam Adebayo","Tyler Herro","Andrew Wiggins"], alltime:["Dwyane Wade","LeBron James","Alonzo Mourning"], rating:86 },
  { id:"MIL", city:"Milwaukee", name:"Bucks", conf:"East", primary:"#00471B", secondary:"#EEE1C6", current:["Giannis Antetokounmpo","Damian Lillard","Khris Middleton"], alltime:["Kareem Abdul-Jabbar","Giannis Antetokounmpo","Oscar Robertson"], rating:91 },
  { id:"MIN", city:"Minnesota", name:"Timberwolves", conf:"West", primary:"#0C2340", secondary:"#78BE20", current:["Anthony Edwards","Julius Randle","Rudy Gobert"], alltime:["Kevin Garnett","Anthony Edwards","Kevin Love"], rating:91 },
  { id:"NOP", city:"New Orleans", name:"Pelicans", conf:"West", primary:"#0C2340", secondary:"#C8102E", current:["Zion Williamson","Trey Murphy III","CJ McCollum"], alltime:["Chris Paul","Anthony Davis","Zion Williamson"], rating:83 },
  { id:"NYK", city:"New York", name:"Knicks", conf:"East", primary:"#006BB6", secondary:"#F58426", current:["Jalen Brunson","Karl-Anthony Towns","Mikal Bridges"], alltime:["Patrick Ewing","Walt Frazier","Carmelo Anthony"], rating:93 },
  { id:"OKC", city:"Oklahoma City", name:"Thunder", conf:"West", primary:"#007AC1", secondary:"#EF3B24", current:["Shai Gilgeous-Alexander","Jalen Williams","Chet Holmgren"], alltime:["Kevin Durant","Russell Westbrook","Gary Payton"], rating:96 },
  { id:"ORL", city:"Orlando", name:"Magic", conf:"East", primary:"#0077C0", secondary:"#C4CED4", current:["Paolo Banchero","Franz Wagner","Jalen Suggs"], alltime:["Shaquille O'Neal","Penny Hardaway","Dwight Howard"], rating:88 },
  { id:"PHI", city:"Philadelphia", name:"76ers", conf:"East", primary:"#006BB6", secondary:"#ED174C", current:["Joel Embiid","Tyrese Maxey","Paul George"], alltime:["Allen Iverson","Julius Erving","Moses Malone"], rating:87 },
  { id:"PHX", city:"Phoenix", name:"Suns", conf:"West", primary:"#1D1160", secondary:"#E56020", current:["Devin Booker","Kevin Durant","Bradley Beal"], alltime:["Steve Nash","Charles Barkley","Devin Booker"], rating:88 },
  { id:"POR", city:"Portland", name:"Trail Blazers", conf:"West", primary:"#E03A3E", secondary:"#FFFFFF", current:["Anfernee Simons","Scoot Henderson","Deni Avdija"], alltime:["Damian Lillard","Clyde Drexler","Bill Walton"], rating:80 },
  { id:"SAC", city:"Sacramento", name:"Kings", conf:"West", primary:"#5A2D81", secondary:"#C4CED4", current:["Domantas Sabonis","Zach LaVine","DeMar DeRozan"], alltime:["Oscar Robertson","Chris Webber","Mitch Richmond"], rating:86 },
  { id:"SAS", city:"San Antonio", name:"Spurs", conf:"West", primary:"#111111", secondary:"#C4CED4", current:["Victor Wembanyama","De'Aaron Fox","Stephon Castle"], alltime:["Tim Duncan","David Robinson","George Gervin"], rating:90 },
  { id:"TOR", city:"Toronto", name:"Raptors", conf:"East", primary:"#CE1141", secondary:"#B4975A", current:["Scottie Barnes","RJ Barrett","Immanuel Quickley"], alltime:["Vince Carter","Kawhi Leonard","Chris Bosh"], rating:82 },
  { id:"UTA", city:"Utah", name:"Jazz", conf:"West", primary:"#002B5C", secondary:"#F9A01B", current:["Lauri Markkanen","Walker Kessler","Keyonte George"], alltime:["Karl Malone","John Stockton","Pete Maravich"], rating:79 },
  { id:"WAS", city:"Washington", name:"Wizards", conf:"East", primary:"#002B5C", secondary:"#E31837", current:["Jordan Poole","Alex Sarr","Bilal Coulibaly"], alltime:["Wes Unseld","Elvin Hayes","Gilbert Arenas"], rating:78 }
];

// Appearance palettes are assigned by player name so lineup order never changes a player's look.
const lightTonePlayers = new Set([
  "Bob Pettit", "Larry Bird", "Josh Giddey", "Nikola Vucevic", "Mark Price",
  "Luka Doncic", "Dirk Nowitzki", "Nikola Jokic", "Alperen Sengun", "Ivica Zubac",
  "Austin Reaves", "Marc Gasol", "Tyler Herro", "Kevin Love", "Chet Holmgren",
  "Franz Wagner", "Steve Nash", "Deni Avdija", "Bill Walton", "Domantas Sabonis",
  "Lauri Markkanen", "Walker Kessler", "John Stockton", "Pete Maravich"
]);
const warmTonePlayers = new Set([
  "Trae Young", "LaMelo Ball", "Jason Kidd", "Klay Thompson", "Stephen Curry",
  "Jamal Murray", "Aaron Gordon", "Kyrie Irving", "Devin Booker", "Paolo Banchero",
  "Jalen Suggs", "Zach LaVine", "Karl-Anthony Towns", "Carmelo Anthony"
]);

function playerSkinTone(name) {
  if (lightTonePlayers.has(name)) return "#e0ab80";
  if (warmTonePlayers.has(name)) return "#b97851";
  const shade = [...name].reduce((total, char) => total + char.charCodeAt(0), 0) % 3;
  return ["#633720", "#75442a", "#8a5131"][shade];
}

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const teamById = id => teams.find(team => team.id === id);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const lerp = (a, b, t) => a + (b - a) * t;

const selection = {
  home: { team: teamById("LAL"), era: "current" },
  away: { team: teamById("BOS"), era: "current" }
};

let pickerSide = "home";
let currentConference = "all";

function showScreen(id) {
  $$(".screen").forEach(screen => screen.classList.toggle("active", screen.id === id));
}

function openModal(id) {
  $("#" + id).classList.add("open");
}

function closeModal(modal) {
  modal.classList.remove("open");
}

function teamTitle(team) {
  return `${team.city} ${team.name}`;
}

function setTeamStyles(element, team) {
  element.style.setProperty("--team-primary", team.primary);
  element.style.setProperty("--team-secondary", team.secondary);
}

function renderSelection(side) {
  const data = selection[side];
  const card = $(`.selection-card[data-side="${side}"]`);
  setTeamStyles(card, data.team);
  $(".team-badge", card).textContent = data.team.id;
  const cityWords = data.team.city.toUpperCase();
  $("h3", card).innerHTML = `${cityWords}<br>${data.team.name.toUpperCase()}`;
  $(".featured-player b", card).textContent = data.team[data.era][0];
  $$(".era-btn", card).forEach(button => button.classList.toggle("active", button.dataset.era === data.era));
}

function renderTeamGrid() {
  const visible = teams.filter(team => currentConference === "all" || team.conf === currentConference);
  $("#teamGrid").innerHTML = visible.map(team => `
    <button class="team-option" data-team="${team.id}" style="--team-color:${team.primary};--team-secondary:${team.secondary}">
      <b>${team.id}</b>
      <span>${team.city}<br>${team.name}</span>
    </button>
  `).join("");
  $$(".team-option").forEach(button => {
    button.addEventListener("click", () => {
      const chosen = teamById(button.dataset.team);
      if (selection[pickerSide === "home" ? "away" : "home"].team.id === chosen.id) {
        const other = teams[(teams.indexOf(chosen) + 1) % teams.length];
        selection[pickerSide === "home" ? "away" : "home"].team = other;
        renderSelection(pickerSide === "home" ? "away" : "home");
      }
      selection[pickerSide].team = chosen;
      renderSelection(pickerSide);
      closeModal($("#teamModal"));
      sound("select");
    });
  });
}

$("#quickGameBtn").addEventListener("click", () => {
  showScreen("setupScreen");
  sound("select");
});
$("#howToBtn").addEventListener("click", () => openModal("howToModal"));
$$("[data-back='menu']").forEach(button => button.addEventListener("click", () => showScreen("menuScreen")));

$$(".choose-team-btn").forEach(button => button.addEventListener("click", () => {
  pickerSide = button.dataset.side;
  $("#modalSideLabel").textContent = pickerSide === "home" ? "YOUR TEAM" : "CPU OPPONENT";
  renderTeamGrid();
  openModal("teamModal");
}));

$$(".era-btn").forEach(button => button.addEventListener("click", () => {
  selection[button.dataset.side].era = button.dataset.era;
  renderSelection(button.dataset.side);
  sound("tick");
}));

$$(".conference-btn").forEach(button => button.addEventListener("click", () => {
  currentConference = button.dataset.conf;
  $$(".conference-btn").forEach(item => item.classList.toggle("active", item === button));
  renderTeamGrid();
}));

$$(".modal-close").forEach(button => button.addEventListener("click", () => closeModal(button.closest(".modal"))));
$(".guide-close-btn").addEventListener("click", () => closeModal($("#howToModal")));
$$(".modal").forEach(modal => modal.addEventListener("click", event => {
  if (event.target === modal && !["pauseModal", "endModal"].includes(modal.id)) closeModal(modal);
}));

renderSelection("home");
renderSelection("away");

// Audio is synthesized so the game stays self-contained and works offline on Android.
let audioContext;
let masterGain;
let crowdSource;
let crowdGain;
let soundEnabled = localStorage.getItem("hardwoodSound") !== "off";

function ensureAudio() {
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  if (!masterGain) {
    masterGain = audioContext.createGain();
    masterGain.gain.value = soundEnabled ? 1 : 0;
    masterGain.connect(audioContext.destination);
  }
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function noiseBuffer(duration = .25) {
  const audio = ensureAudio();
  const buffer = audio.createBuffer(1, Math.ceil(audio.sampleRate * duration), audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}

function startArenaAudio() {
  if (!soundEnabled || crowdSource) return;
  const audio = ensureAudio();
  crowdSource = audio.createBufferSource();
  crowdSource.buffer = noiseBuffer(2);
  crowdSource.loop = true;
  const filter = audio.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 520;
  filter.Q.value = .45;
  crowdGain = audio.createGain();
  crowdGain.gain.value = .022;
  crowdSource.connect(filter);
  filter.connect(crowdGain);
  crowdGain.connect(masterGain);
  crowdSource.start();
}

function noiseSound(type) {
  const audio = ensureAudio();
  const source = audio.createBufferSource();
  source.buffer = noiseBuffer(type === "cheer" ? .65 : .11);
  const filter = audio.createBiquadFilter();
  filter.type = type === "cheer" ? "bandpass" : "highpass";
  filter.frequency.value = type === "cheer" ? 780 : 2200;
  const gain = audio.createGain();
  const volume = type === "cheer" ? .11 : .04;
  gain.gain.setValueAtTime(volume, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + (type === "cheer" ? .65 : .11));
  source.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  source.start();
}

function sound(type) {
  if (!soundEnabled) return;
  try {
    if (type === "cheer" || type === "squeak") {
      noiseSound(type);
      return;
    }
    ensureAudio();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.connect(gain);
    gain.connect(masterGain);
    const presets = {
      tick: [220, .025, .025],
      select: [360, .045, .05],
      bounce: [95, .035, .035],
      rim: [180, .07, .06],
      swish: [620, .18, .08],
      buzzer: [115, .5, .1],
      steal: [450, .12, .08],
      whistle: [1450, .22, .07]
    };
    const [frequency, duration, volume] = presets[type] || presets.tick;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    if (type === "swish") oscillator.frequency.exponentialRampToValueAtTime(180, audioContext.currentTime + duration);
    oscillator.type = type === "buzzer" ? "sawtooth" : "sine";
    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch (_) {}
}

function updateSoundButton() {
  const button = $("#soundBtn");
  if (button) button.textContent = soundEnabled ? "SOUND ON" : "SOUND OFF";
}

$("#soundBtn").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem("hardwoodSound", soundEnabled ? "on" : "off");
  if (masterGain) masterGain.gain.value = soundEnabled ? 1 : 0;
  if (soundEnabled) {
    startArenaAudio();
    sound("select");
  }
  updateSoundButton();
});
updateSoundButton();

let installPrompt;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  $("#installBtn").hidden = false;
});

$("#installBtn").addEventListener("click", async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  $("#installBtn").hidden = true;
});

window.addEventListener("appinstalled", () => {
  $("#installBtn").hidden = true;
  installPrompt = null;
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}

const canvas = $("#gameCanvas");
const ctx = canvas.getContext("2d");
const W = canvas.width;
const H = canvas.height;
const court = { left: 28, right: 1252, top: 55, bottom: 665, centerX: 640, centerY: 360 };
const baskets = {
  home: { x: 1191, y: 360 },
  away: { x: 89, y: 360 }
};

const input = {
  keys: {},
  moveX: 0,
  moveY: 0,
  shooting: false
};

let game = null;
let animationFrame = null;
let lastFrame = 0;

function createPlayer(teamSide, index, name, team, era) {
  const boost = era === "alltime" ? 7 : 0;
  return {
    teamSide,
    index,
    name,
    team,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    radius: index === 1 ? 23 : 21,
    speed: 205 + (index === 0 ? 16 : 0) + boost,
    shooting: clamp(team.rating + boost + (index === 0 ? 3 : index === 2 ? 1 : -2), 72, 99),
    stamina: 100,
    hasBall: false,
    stealCooldown: 0,
    foulCooldown: 0,
    fouls: 0,
    aiTimer: .6 + Math.random(),
    number: [1, 23, 7][index],
    skin: playerSkinTone(name),
    animPhase: Math.random() * Math.PI * 2,
    dunking: false
  };
}

function newGame() {
  const home = selection.home;
  const away = selection.away;
  game = {
    homeTeam: home.team,
    awayTeam: away.team,
    homeEra: home.era,
    awayEra: away.era,
    homePlayers: home.team[home.era].map((name, index) => createPlayer("home", index, name, home.team, home.era)),
    awayPlayers: away.team[away.era].map((name, index) => createPlayer("away", index, name, away.team, away.era)),
    score: { home: 0, away: 0 },
    teamFouls: { home: 0, away: 0 },
    quarter: 1,
    quarterLength: Number($("#quarterLength").value),
    gameTime: Number($("#quarterLength").value),
    shotClock: 24,
    possession: "home",
    controlledIndex: 0,
    ball: { x: 0, y: 0, z: 0, owner: null, flight: null, loose: false, looseTimer: 0, vx: 0, vy: 0 },
    charge: 0,
    chargeDirection: 1,
    paused: false,
    deadBall: 1.7,
    messageCooldown: 0,
    bounceTimer: 0,
    squeakTimer: 0,
    dunk: null,
    freeThrows: null,
    running: true
  };
  resetPossession("home", true);
  updateScoreboard();
  setupGameBranding();
}

function setupGameBranding() {
  const home = game.homeTeam;
  const away = game.awayTeam;
  $("#homeMiniBadge").textContent = home.id;
  $("#awayMiniBadge").textContent = away.id;
  setTeamStyles($("#homeMiniBadge"), home);
  setTeamStyles($("#awayMiniBadge"), away);
  $("#homeScoreName").textContent = `${home.city} ${home.name}`;
  $("#awayScoreName").textContent = `${away.city} ${away.name}`;
  $("#homeEraLabel").textContent = game.homeEra === "alltime" ? "ALL-TIME" : "MODERN";
  $("#awayEraLabel").textContent = game.awayEra === "alltime" ? "ALL-TIME" : "MODERN";
}

function resetPossession(side, opening = false) {
  game.dunk = null;
  game.freeThrows = null;
  $("#freeThrowHud").classList.remove("show");
  [...game.homePlayers, ...game.awayPlayers].forEach(player => player.dunking = false);
  const homeSpots = side === "home"
    ? [[250,360],[335,205],[335,515]]
    : [[860,360],[970,220],[970,500]];
  const awaySpots = side === "away"
    ? [[1030,360],[945,205],[945,515]]
    : [[420,360],[310,220],[310,500]];
  game.homePlayers.forEach((player, i) => Object.assign(player, { x: homeSpots[i][0], y: homeSpots[i][1], vx: 0, vy: 0, hasBall: false }));
  game.awayPlayers.forEach((player, i) => Object.assign(player, { x: awaySpots[i][0], y: awaySpots[i][1], vx: 0, vy: 0, hasBall: false }));
  game.possession = side;
  const owner = side === "home" ? game.homePlayers[0] : game.awayPlayers[0];
  owner.hasBall = true;
  game.ball.owner = owner;
  game.ball.flight = null;
  game.ball.loose = false;
  game.ball.x = owner.x;
  game.ball.y = owner.y;
  game.ball.z = 12;
  game.shotClock = 24;
  game.charge = 0;
  game.deadBall = opening ? 1.7 : 1.15;
  game.controlledIndex = 0;
}

function updateScoreboard() {
  if (!game) return;
  $("#homeScore").textContent = game.score.home;
  $("#awayScore").textContent = game.score.away;
  $("#quarterDisplay").textContent = `Q${game.quarter}`;
  const minutes = Math.floor(Math.max(0, game.gameTime) / 60);
  const seconds = Math.floor(Math.max(0, game.gameTime) % 60).toString().padStart(2, "0");
  $("#gameClock").textContent = `${minutes}:${seconds}`;
  $("#shotClock").textContent = Math.ceil(Math.max(0, game.shotClock));
  $("#homeFouls").textContent = game.teamFouls.home;
  $("#awayFouls").textContent = game.teamFouls.away;
  $("#homeFouls").parentElement.classList.toggle("bonus", game.teamFouls.home >= 5);
  $("#awayFouls").parentElement.classList.toggle("bonus", game.teamFouls.away >= 5);
}

function beginMatch() {
  input.keys = {};
  input.moveX = 0;
  input.moveY = 0;
  input.shooting = false;
  newGame();
  startArenaAudio();
  enterMobileGameMode();
  showScreen("gameScreen");
  closeModal($("#pauseModal"));
  closeModal($("#endModal"));
  lastFrame = performance.now();
  if (animationFrame) cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(gameLoop);
  announce("TIP-OFF");
}

async function enterMobileGameMode() {
  if (!matchMedia("(pointer: coarse)").matches) return;
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen({ navigationUI: "hide" });
  } catch (_) {}
  try {
    await screen.orientation.lock("landscape");
  } catch (_) {}
}

$("#startGameBtn").addEventListener("click", () => {
  sound("select");
  beginMatch();
});
$("#pauseBtn").addEventListener("click", togglePause);
$("#resumeBtn").addEventListener("click", togglePause);
$("#restartBtn").addEventListener("click", beginMatch);
$("#quitBtn").addEventListener("click", quitToMenu);
$("#rematchBtn").addEventListener("click", beginMatch);
$("#endMenuBtn").addEventListener("click", quitToMenu);

function quitToMenu() {
  if (game) game.running = false;
  closeModal($("#pauseModal"));
  closeModal($("#endModal"));
  showScreen("menuScreen");
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
}

function togglePause() {
  if (!game || !game.running || $("#endModal").classList.contains("open")) return;
  game.paused = !game.paused;
  $("#pauseModal").classList.toggle("open", game.paused);
  if (!game.paused) lastFrame = performance.now();
}

window.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  input.keys[key] = true;
  if ([" ","arrowup","arrowdown","arrowleft","arrowright"].includes(key)) event.preventDefault();
  if (key === "escape" && $("#gameScreen").classList.contains("active")) togglePause();
  if (!game || game.paused || !game.running || game.deadBall > 0) return;
  if (key === "q" && !event.repeat) passBall();
  if (key === "r" && !event.repeat) attemptDunk();
  if (key === "f" && !event.repeat) attemptSteal();
  if (key === "e" && !event.repeat) switchDefender();
  if (key === " " && game.possession === "home" && game.ball.owner?.teamSide === "home" && !game.ball.flight) {
    input.shooting = true;
  }
});

window.addEventListener("keyup", event => {
  const key = event.key.toLowerCase();
  input.keys[key] = false;
  if (key === " " && input.shooting) {
    input.shooting = false;
    releaseShot();
  }
});

window.addEventListener("blur", () => {
  input.keys = {};
  input.moveX = 0;
  input.moveY = 0;
  if (input.shooting) {
    input.shooting = false;
    if (game?.running && !game.paused) releaseShot();
  }
});

function controlledPlayer() {
  if (!game) return null;
  if (game.possession === "home" && game.ball.owner?.teamSide === "home") return game.ball.owner;
  return game.homePlayers[game.controlledIndex];
}

function passBall() {
  if (game.possession !== "home" || game.ball.owner?.teamSide !== "home" || game.ball.flight) return;
  const passer = game.ball.owner;
  const teammates = game.homePlayers.filter(player => player !== passer);
  const target = teammates.sort((a, b) => {
    const openA = nearestOpponentDistance(a);
    const openB = nearestOpponentDistance(b);
    return (openB + b.x * .1) - (openA + a.x * .1);
  })[0];
  startPass(passer, target);
}

function startPass(passer, target) {
  passer.hasBall = false;
  game.ball.owner = null;
  game.ball.flight = {
    type: "pass",
    startX: passer.x,
    startY: passer.y,
    target,
    t: 0,
    duration: clamp(distance(passer, target) / 650, .22, .5)
  };
  sound("tick");
}

function switchDefender() {
  if (game.possession === "home") return;
  const target = game.ball.owner || game.ball;
  let bestIndex = 0;
  let bestDistance = Infinity;
  game.homePlayers.forEach((player, index) => {
    const d = distance(player, target);
    if (d < bestDistance && index !== game.controlledIndex) {
      bestDistance = d;
      bestIndex = index;
    }
  });
  game.controlledIndex = bestIndex;
  sound("tick");
}

function attemptSteal() {
  if (game.possession !== "away" || !game.ball.owner || game.ball.owner.teamSide !== "away") return;
  const defender = controlledPlayer();
  if (!defender || defender.stealCooldown > 0) return;
  defender.stealCooldown = 1.1;
  const d = distance(defender, game.ball.owner);
  if (d < 58 && Math.random() < (.34 - d * .0025)) {
    changePossessionTo(defender, "STEAL!");
    sound("steal");
  } else if (d < 64 && Math.random() < .42) {
    callFoul(defender, "away", "REACH-IN FOUL");
  } else {
    defender.stamina = Math.max(0, defender.stamina - 9);
  }
}

function nearestOpponentDistance(player) {
  const opponents = player.teamSide === "home" ? game.awayPlayers : game.homePlayers;
  return Math.min(...opponents.map(opponent => distance(player, opponent)));
}

function nearestOpponent(player) {
  const opponents = player.teamSide === "home" ? game.awayPlayers : game.homePlayers;
  return opponents.reduce((best, opponent) => distance(player, opponent) < distance(player, best) ? opponent : best, opponents[0]);
}

function callFoul(defender, offenseSide, label, freeThrowShots = 0, shooter = null) {
  if (!defender) return false;
  defender.fouls++;
  defender.foulCooldown = 1.5;
  game.teamFouls[defender.teamSide]++;
  input.shooting = false;
  game.charge = 0;
  sound("whistle");
  announce(`${label} • ${shortName(defender.name)}`);
  updateScoreboard();

  const inBonus = game.teamFouls[defender.teamSide] >= 5;
  const shots = freeThrowShots || (inBonus ? 2 : 0);
  if (shots > 0) {
    startFreeThrows(offenseSide, shots, shooter || (offenseSide === "home" ? game.homePlayers[0] : game.awayPlayers[0]));
  } else {
    resetPossession(offenseSide);
    game.deadBall = 1.65;
  }
  return true;
}

function startFreeThrows(side, shots, shooter) {
  [...game.homePlayers, ...game.awayPlayers].forEach(player => player.hasBall = false);
  game.ball.owner = null;
  game.ball.flight = null;
  game.ball.loose = false;
  game.freeThrows = {
    side,
    shooter,
    total: shots,
    remaining: shots,
    timer: 1.35,
    madeLast: null
  };
  const rightSide = side === "home";
  const offense = rightSide ? game.homePlayers : game.awayPlayers;
  const defense = rightSide ? game.awayPlayers : game.homePlayers;
  const hoop = baskets[side];
  const direction = rightSide ? -1 : 1;
  offense.forEach((player, index) => {
    player.x = index === shooter.index ? hoop.x + direction * 225 : hoop.x + direction * (110 + index * 28);
    player.y = index === 0 ? hoop.y : hoop.y + (index === 1 ? -90 : 90);
  });
  defense.forEach((player, index) => {
    player.x = hoop.x + direction * (82 + index * 34);
    player.y = hoop.y + (index === 0 ? -72 : index === 1 ? 72 : -125);
  });
  game.deadBall = 0;
  $("#freeThrowHud").classList.add("show");
  updateFreeThrowHud();
}

function updateFreeThrowHud() {
  if (!game.freeThrows) return;
  const attempt = game.freeThrows.total - game.freeThrows.remaining + 1;
  $("#freeThrowCount").textContent = `${attempt} OF ${game.freeThrows.total}`;
  $("#freeThrowShooter").textContent = game.freeThrows.shooter.name.toUpperCase();
}

function releaseShot() {
  if (!game || game.possession !== "home" || game.ball.owner?.teamSide !== "home" || game.ball.flight || game.charge < .05) {
    if (game) game.charge = 0;
    return;
  }
  takeShot(game.ball.owner, game.charge, false);
  game.charge = 0;
}

function attemptDunk() {
  if (!game || game.possession !== "home" || game.ball.owner?.teamSide !== "home" || game.ball.flight || game.dunk) return;
  const player = game.ball.owner;
  const basket = baskets.home;
  const dist = distance(player, basket);
  if (dist > 145) {
    showShotFeedback("GET CLOSER TO THE RIM", "#f4c95d");
    return;
  }
  const defenderDistance = nearestOpponentDistance(player);
  const defender = nearestOpponent(player);
  const made = Math.random() < clamp(.96 - Math.max(0, 62 - defenderDistance) * .006, .58, .96);
  const shootingFoul = defenderDistance < 58 && Math.random() < .2;
  player.hasBall = false;
  player.dunking = true;
  game.ball.owner = null;
  game.charge = 0;
  game.dunk = {
    player,
    startX: player.x,
    startY: player.y,
    targetX: basket.x - 18,
    targetY: basket.y,
    t: 0,
    duration: .58,
    made,
    shootingFoul,
    defender
  };
  announce("TAKE FLIGHT!");
}

function takeShot(shooter, timing, isAI) {
  const side = shooter.teamSide;
  const basket = baskets[side];
  const dist = distance(shooter, basket);
  const defenderDistance = nearestOpponentDistance(shooter);
  const defender = nearestOpponent(shooter);
  const contest = clamp((72 - defenderDistance) / 72, 0, 1);
  const timingScore = isAI ? .72 + (Math.random() - .5) * .22 : timing;
  const timingQuality = clamp(1 - Math.abs(timingScore - .72) * 2.3, .1, 1);
  const isThree = dist > 218;
  const distanceBase = isThree ? .44 : dist < 90 ? .78 : .58;
  const rangePenalty = dist > 430 ? (dist - 430) / 500 : 0;
  let chance = distanceBase + (shooter.shooting - 84) * .008 + timingQuality * .19 - contest * .3 - rangePenalty;
  if (!isAI && Math.abs(timing - .72) < .045) chance += .16;
  chance = clamp(chance, .03, .96);
  const made = Math.random() < chance;
  const shootingFoul = defenderDistance < 64 && Math.random() < (.08 + contest * .19);

  shooter.hasBall = false;
  game.ball.owner = null;
  game.ball.flight = {
    type: "shot",
    shooter,
    side,
    made,
    points: isThree ? 3 : 2,
    startX: shooter.x,
    startY: shooter.y,
    endX: basket.x,
    endY: basket.y,
    t: 0,
    duration: clamp(.65 + dist / 900, .68, 1.25),
    peak: 95 + dist * .12,
    timing: timingScore,
    contest,
    shootingFoul,
    defender
  };
  if (!isAI) {
    const text = Math.abs(timing - .72) < .045 ? "EXCELLENT RELEASE" : timing < .58 ? "EARLY RELEASE" : timing > .86 ? "LATE RELEASE" : "GOOD RELEASE";
    showShotFeedback(text, Math.abs(timing - .72) < .045 ? "#52ff91" : "#f4c95d");
  }
}

function showShotFeedback(text, color) {
  const element = $("#shotFeedback");
  element.textContent = text;
  element.style.color = color;
  element.classList.remove("show");
  void element.offsetWidth;
  element.classList.add("show");
}

function changePossessionTo(player, message = "") {
  [...game.homePlayers, ...game.awayPlayers].forEach(item => item.hasBall = false);
  player.hasBall = true;
  game.ball.owner = player;
  game.ball.flight = null;
  game.ball.loose = false;
  game.ball.z = 12;
  game.possession = player.teamSide;
  game.shotClock = 24;
  game.charge = 0;
  if (player.teamSide === "home") game.controlledIndex = player.index;
  if (message) announce(message);
}

function announce(text) {
  const element = $("#gameMessage");
  element.textContent = text;
  element.classList.remove("show");
  void element.offsetWidth;
  element.classList.add("show");
}

function gameLoop(timestamp) {
  if (!game || !game.running) return;
  const dt = Math.min((timestamp - lastFrame) / 1000, .034);
  lastFrame = timestamp;
  if (!game.paused) updateGame(dt);
  drawGame();
  animationFrame = requestAnimationFrame(gameLoop);
}

function updateGame(dt) {
  if (game.freeThrows) {
    updateFreeThrows(dt);
    updateScoreboard();
    return;
  }

  if (game.deadBall > 0) {
    game.deadBall -= dt;
    updateBall(dt);
    updateScoreboard();
    return;
  }

  if (game.dunk) {
    updateDunk(dt);
    updateScoreboard();
    return;
  }

  game.gameTime -= dt;
  game.shotClock -= dt;
  game.bounceTimer -= dt;
  game.squeakTimer -= dt;
  if (game.shotClock <= 0 && !game.ball.flight) {
    sound("buzzer");
    announce("SHOT CLOCK VIOLATION");
    resetPossession(game.possession === "home" ? "away" : "home");
    return;
  }
  if (game.gameTime <= 0) {
    endQuarter();
    return;
  }

  if (input.shooting && game.possession === "home" && game.ball.owner?.teamSide === "home") {
    game.charge += dt * .82 * game.chargeDirection;
    if (game.charge >= 1) {
      game.charge = 1;
      game.chargeDirection = -1;
    } else if (game.charge <= .04 && game.chargeDirection < 0) {
      game.charge = .04;
      game.chargeDirection = 1;
    }
  }

  updateUserPlayer(dt);
  updateAI(dt);
  resolvePlayerSpacing();
  updateBall(dt);
  [...game.homePlayers, ...game.awayPlayers].forEach(player => {
    player.stealCooldown = Math.max(0, player.stealCooldown - dt);
    player.foulCooldown = Math.max(0, player.foulCooldown - dt);
    if (!input.keys.shift || player !== controlledPlayer()) player.stamina = Math.min(100, player.stamina + dt * 8);
  });
  updateScoreboard();
}

function updateFreeThrows(dt) {
  const freeThrow = game.freeThrows;
  freeThrow.timer -= dt;
  const shooter = freeThrow.shooter;
  const basket = baskets[freeThrow.side];
  const laneX = freeThrow.side === "home" ? basket.x - 225 : basket.x + 225;
  shooter.x = laneX;
  shooter.y = basket.y;

  const cycle = clamp(1 - freeThrow.timer / 1.35, 0, 1);
  game.ball.x = lerp(laneX + (freeThrow.side === "home" ? 16 : -16), basket.x, cycle);
  game.ball.y = basket.y;
  game.ball.z = 18 + Math.sin(Math.PI * cycle) * 90;

  if (freeThrow.timer > 0) return;
  const ratingChance = clamp(.67 + (shooter.shooting - 75) * .008, .64, .94);
  const made = Math.random() < ratingChance;
  if (made) {
    game.score[freeThrow.side]++;
    sound("swish");
    sound("cheer");
    showShotFeedback("FREE THROW GOOD", "#52ff91");
  } else {
    sound("rim");
    showShotFeedback("FREE THROW MISSED", "#ef6b6b");
  }
  freeThrow.remaining--;
  if (freeThrow.remaining > 0) {
    freeThrow.timer = 1.35;
    updateFreeThrowHud();
    return;
  }

  const nextSide = freeThrow.side === "home" ? "away" : "home";
  game.freeThrows = null;
  $("#freeThrowHud").classList.remove("show");
  resetPossession(nextSide);
}

function updateDunk(dt) {
  const dunk = game.dunk;
  dunk.t += dt / dunk.duration;
  const t = clamp(dunk.t, 0, 1);
  const player = dunk.player;
  player.x = lerp(dunk.startX, dunk.targetX, t);
  player.y = lerp(dunk.startY, dunk.targetY, t);
  game.ball.x = player.x + 16;
  game.ball.y = player.y;
  game.ball.z = 26 + Math.sin(Math.PI * t) * 96;
  if (t >= 1) {
    player.dunking = false;
    game.dunk = null;
    if (dunk.made) {
      game.score.home += 2;
      sound("swish");
      sound("cheer");
      announce(dunk.shootingFoul ? "AND ONE SLAM!" : "SLAM DUNK!");
      if (dunk.shootingFoul) {
        callFoul(dunk.defender, "home", "SHOOTING FOUL", 1, player);
      } else {
        resetPossession("away");
      }
    } else {
      if (dunk.shootingFoul) {
        callFoul(dunk.defender, "home", "SHOOTING FOUL", 2, player);
        return;
      }
      sound("rim");
      game.ball.loose = true;
      game.ball.looseTimer = 0;
      game.ball.x = baskets.home.x - 25;
      game.ball.y = baskets.home.y;
      game.ball.z = 20;
      game.ball.vx = -120;
      game.ball.vy = (Math.random() - .5) * 150;
      announce("REJECTED!");
    }
  }
}

function updateUserPlayer(dt) {
  const player = controlledPlayer();
  if (!player || game.ball.flight?.type === "shot" && game.ball.flight.shooter === player) return;
  let dx = (input.keys.d || input.keys.arrowright ? 1 : 0) - (input.keys.a || input.keys.arrowleft ? 1 : 0) + input.moveX;
  let dy = (input.keys.s || input.keys.arrowdown ? 1 : 0) - (input.keys.w || input.keys.arrowup ? 1 : 0) + input.moveY;
  const magnitude = Math.hypot(dx, dy) || 1;
  dx /= magnitude;
  dy /= magnitude;
  const moving = Math.abs(dx) + Math.abs(dy) > .05;
  const sprinting = input.keys.shift && player.stamina > 2 && moving;
  const speed = player.speed * (sprinting ? 1.45 : 1) * (player.hasBall ? .93 : 1);
  if (sprinting) player.stamina = Math.max(0, player.stamina - dt * 17);
  if (moving && movingSpeedForSound(player) > 185 && game.squeakTimer <= 0 && Math.random() < dt * 2.4) {
    sound("squeak");
    game.squeakTimer = .28;
  }
  player.vx = lerp(player.vx, dx * speed, clamp(dt * 11, 0, 1));
  player.vy = lerp(player.vy, dy * speed, clamp(dt * 11, 0, 1));
  if (!moving) {
    player.vx *= Math.pow(.02, dt);
    player.vy *= Math.pow(.02, dt);
  }
  movePlayer(player, dt);
}

function movingSpeedForSound(player) {
  return Math.hypot(player.vx, player.vy);
}

function movePlayer(player, dt) {
  player.x = clamp(player.x + player.vx * dt, court.left + 22, court.right - 22);
  player.y = clamp(player.y + player.vy * dt, court.top + 22, court.bottom - 22);
}

function moveToward(player, targetX, targetY, dt, speedFactor = 1) {
  const dx = targetX - player.x;
  const dy = targetY - player.y;
  const d = Math.hypot(dx, dy) || 1;
  const slow = clamp(d / 85, .15, 1);
  const speed = player.speed * speedFactor * slow;
  player.vx = lerp(player.vx, dx / d * speed, clamp(dt * 6, 0, 1));
  player.vy = lerp(player.vy, dy / d * speed, clamp(dt * 6, 0, 1));
  movePlayer(player, dt);
}

function updateAI(dt) {
  const homeControlled = controlledPlayer();
  const ballOwner = game.ball.owner;

  game.homePlayers.forEach((player, index) => {
    if (player === homeControlled) return;
    if (game.possession === "home") {
      const spots = [[820,360],[900,190],[900,530]];
      let [targetX, targetY] = spots[index];
      if (ballOwner?.teamSide === "home" && ballOwner.x > 760) {
        targetX = index === 1 ? 1015 : 880;
        targetY = index === 1 ? 250 : 510;
      }
      moveToward(player, targetX, targetY, dt, .84);
    } else {
      const assignment = game.awayPlayers[index];
      const hoop = baskets.home;
      const targetX = assignment.x + (hoop.x - assignment.x) * .12;
      const targetY = assignment.y + (hoop.y - assignment.y) * .12;
      moveToward(player, targetX, targetY, dt, .92);
    }
  });

  game.awayPlayers.forEach((player, index) => {
    if (game.possession === "away") {
      if (player === ballOwner) updateCPUHandler(player, dt);
      else {
        const spots = [[450,360],[365,195],[365,525]];
        let [targetX, targetY] = spots[index];
        if (ballOwner?.x < 520) {
          targetX = index === 1 ? 245 : 390;
          targetY = index === 1 ? 230 : 510;
        }
        moveToward(player, targetX, targetY, dt, .86);
      }
    } else {
      const assignment = game.homePlayers[index];
      const hoop = baskets.away;
      const targetX = assignment.x + (hoop.x - assignment.x) * .12;
      const targetY = assignment.y + (hoop.y - assignment.y) * .12;
      moveToward(player, targetX, targetY, dt, .94);
    }
  });
}

function updateCPUHandler(player, dt) {
  player.aiTimer -= dt;
  const hoop = baskets.away;
  const dist = distance(player, hoop);
  const defenderDist = nearestOpponentDistance(player);

  if (player.aiTimer <= 0 && !game.ball.flight) {
    if ((dist < 390 && defenderDist > 54 && Math.random() < .62) || game.shotClock < 4) {
      player.aiTimer = 1.5;
      takeShot(player, .72, true);
      return;
    }
    if (defenderDist < 58 && Math.random() < .46) {
      const teammates = game.awayPlayers.filter(item => item !== player).sort((a, b) => nearestOpponentDistance(b) - nearestOpponentDistance(a));
      startPass(player, teammates[0]);
      player.aiTimer = 1 + Math.random();
      return;
    }
    player.aiTimer = .55 + Math.random() * .9;
  }

  const laneY = 360 + Math.sin(performance.now() / 700 + player.index) * 95;
  const driveX = dist < 130 ? 155 : hoop.x + 120;
  moveToward(player, driveX, laneY, dt, defenderDist < 60 ? 1.03 : .9);
}

function resolvePlayerSpacing() {
  const all = [...game.homePlayers, ...game.awayPlayers];
  for (let i = 0; i < all.length; i++) {
    for (let j = i + 1; j < all.length; j++) {
      const a = all[i];
      const b = all[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.hypot(dx, dy) || 1;
      const minimum = a.radius + b.radius - 3;
      if (d < minimum) {
        const push = (minimum - d) * .5;
        const nx = dx / d;
        const ny = dy / d;
        a.x -= nx * push;
        a.y -= ny * push;
        b.x += nx * push;
        b.y += ny * push;
      }
    }
  }
}

function updateBall(dt) {
  const ball = game.ball;
  if (ball.owner) {
    const owner = ball.owner;
    const moving = Math.hypot(owner.vx, owner.vy) > 25;
    const phase = performance.now() / (moving ? 105 : 155);
    ball.x = owner.x + (owner.teamSide === "home" ? 16 : -16);
    ball.y = owner.y + 8;
    ball.z = 10 + Math.abs(Math.sin(phase)) * 17;
    if (Math.sin(phase) < -.93 && game.bounceTimer <= 0) {
      sound("bounce");
      game.bounceTimer = .18;
    }
    return;
  }

  if (ball.flight?.type === "pass") {
    const flight = ball.flight;
    flight.t += dt / flight.duration;
    const t = clamp(flight.t, 0, 1);
    ball.x = lerp(flight.startX, flight.target.x, t);
    ball.y = lerp(flight.startY, flight.target.y, t);
    ball.z = 14 + Math.sin(Math.PI * t) * 28;
    if (t >= 1) {
      changePossessionTo(flight.target);
    }
    return;
  }

  if (ball.flight?.type === "shot") {
    const shot = ball.flight;
    shot.t += dt / shot.duration;
    const t = clamp(shot.t, 0, 1);
    const curve = Math.sin(Math.PI * t);
    ball.x = lerp(shot.startX, shot.endX, t);
    ball.y = lerp(shot.startY, shot.endY, t);
    ball.z = 20 + curve * shot.peak;
    if (t >= 1) finishShot(shot);
    return;
  }

  if (ball.loose) {
    ball.looseTimer += dt;
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;
    ball.vx *= Math.pow(.14, dt);
    ball.vy *= Math.pow(.14, dt);
    ball.z = 8 + Math.abs(Math.sin(ball.looseTimer * 7)) * Math.max(0, 22 - ball.looseTimer * 8);
    ball.x = clamp(ball.x, court.left + 10, court.right - 10);
    ball.y = clamp(ball.y, court.top + 10, court.bottom - 10);
    if (ball.looseTimer > .38) {
      const all = [...game.homePlayers, ...game.awayPlayers].sort((a, b) => distance(a, ball) - distance(b, ball));
      if (distance(all[0], ball) < 38 || ball.looseTimer > 1.6) {
        changePossessionTo(all[0], all[0].teamSide === game.possession ? "OFFENSIVE REBOUND" : "REBOUND");
      }
    }
  }
}

function finishShot(shot) {
  const ball = game.ball;
  if (shot.made) {
    game.score[shot.side] += shot.points;
    sound("swish");
    sound("cheer");
    announce(shot.shootingFoul ? "AND ONE!" : shot.points === 3 ? "THREE!" : "BUCKET!");
    updateScoreboard();
    if (shot.shootingFoul) {
      callFoul(shot.defender, shot.side, "SHOOTING FOUL", 1, shot.shooter);
    } else {
      resetPossession(shot.side === "home" ? "away" : "home");
    }
  } else {
    if (shot.shootingFoul) {
      ball.flight = null;
      callFoul(shot.defender, shot.side, "SHOOTING FOUL", shot.points, shot.shooter);
      return;
    }
    sound("rim");
    ball.flight = null;
    ball.loose = true;
    ball.looseTimer = 0;
    ball.owner = null;
    ball.x = shot.endX + (shot.side === "home" ? -18 : 18);
    ball.y = shot.endY + (Math.random() - .5) * 34;
    ball.z = 18;
    ball.vx = (shot.side === "home" ? -1 : 1) * (65 + Math.random() * 75);
    ball.vy = (Math.random() - .5) * 155;
  }
}

function endQuarter() {
  sound("buzzer");
  if (game.quarter >= 4) {
    if (game.score.home === game.score.away) {
      game.quarter++;
      game.gameTime = 60;
      game.teamFouls.home = 0;
      game.teamFouls.away = 0;
      announce("OVERTIME");
      resetPossession(game.quarter % 2 ? "home" : "away");
      return;
    }
    endGame();
    return;
  }
  game.quarter++;
  game.gameTime = game.quarterLength;
  game.teamFouls.home = 0;
  game.teamFouls.away = 0;
  announce(`START OF Q${game.quarter}`);
  resetPossession(game.quarter % 2 ? "home" : "away");
}

function endGame() {
  game.running = false;
  $("#winnerText").textContent = game.score.home > game.score.away ? "VICTORY" : "DEFEAT";
  $("#winnerText").style.color = game.score.home > game.score.away ? "#52ff91" : "#ef233c";
  $("#finalHomeScore").textContent = game.score.home;
  $("#finalAwayScore").textContent = game.score.away;
  $("#finalMatchup").textContent = `${teamTitle(game.homeTeam)} vs ${teamTitle(game.awayTeam)}`;
  openModal("endModal");
}

function drawGame() {
  ctx.clearRect(0, 0, W, H);
  drawArena();
  drawCourt();
  drawPlayers();
  drawBall();
  if (game.deadBall > 0) drawDeadBallOverlay();
}

function drawArena() {
  const gradient = ctx.createRadialGradient(640, 350, 100, 640, 350, 700);
  gradient.addColorStop(0, "#343941");
  gradient.addColorStop(.62, "#171a20");
  gradient.addColorStop(1, "#08090c");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#080a0e";
  ctx.fillRect(0, 0, W, 78);
  ctx.fillRect(0, 642, W, 78);

  // Arena ribbon boards.
  ctx.fillStyle = game.homeTeam.primary;
  ctx.fillRect(0, 45, W, 10);
  ctx.fillStyle = game.awayTeam.primary;
  ctx.fillRect(0, 665, W, 10);
  ctx.fillStyle = "rgba(255,255,255,.78)";
  ctx.font = "800 8px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`${game.homeTeam.city.toUpperCase()} ${game.homeTeam.name.toUpperCase()}  •  HARDWOOD 26  •  DEFENSE`, W / 2, 52);
  ctx.fillText(`${game.awayTeam.city.toUpperCase()} ${game.awayTeam.name.toUpperCase()}  •  MAKE SOME NOISE`, W / 2, 672);

  drawCrowdRows(false);
  drawCrowdRows(true);

  // Overhead arena lights.
  for (let x = 90; x < W; x += 180) {
    const light = ctx.createRadialGradient(x, 8, 1, x, 8, 32);
    light.addColorStop(0, "rgba(255,255,235,.8)");
    light.addColorStop(.25, "rgba(170,205,255,.22)");
    light.addColorStop(1, "rgba(170,205,255,0)");
    ctx.fillStyle = light;
    ctx.fillRect(x - 32, 0, 64, 40);
  }
}

function drawCrowdRows(bottom) {
  const shirtColors = [
    game.homeTeam.primary,
    game.awayTeam.primary,
    game.homeTeam.secondary,
    "#e6e8ed",
    "#242a34"
  ];
  const time = performance.now() / 500;
  for (let row = 0; row < 3; row++) {
    const spacing = 24 - row * 2;
    const baseY = bottom ? 684 + row * 14 : 13 + row * 14;
    for (let x = 8 + (row % 2) * 10; x < W; x += spacing) {
      const seed = Math.abs(Math.sin(x * 12.9898 + row * 78.233));
      const cheer = Math.sin(time + seed * 10) > .76;
      const personY = baseY + (cheer ? -2 : 0);
      const skin = ["#5e3424", "#9a603e", "#d49a6a", "#6d402d"][Math.floor(seed * 4)];
      const shirt = shirtColors[Math.floor(seed * shirtColors.length)];
      ctx.globalAlpha = .48 + row * .12;
      ctx.strokeStyle = skin;
      ctx.lineWidth = 2;
      ctx.beginPath();
      if (cheer) {
        ctx.moveTo(x - 3, personY + 4);
        ctx.lineTo(x - 7, personY - 5);
        ctx.moveTo(x + 3, personY + 4);
        ctx.lineTo(x + 7, personY - 5);
      } else {
        ctx.moveTo(x - 3, personY + 5);
        ctx.lineTo(x - 6, personY + 10);
        ctx.moveTo(x + 3, personY + 5);
        ctx.lineTo(x + 6, personY + 10);
      }
      ctx.stroke();
      ctx.fillStyle = shirt;
      ctx.fillRect(x - 5, personY + 2, 10, 10);
      ctx.fillStyle = skin;
      ctx.beginPath();
      ctx.arc(x, personY, 3.7, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

function drawCourt() {
  ctx.save();
  ctx.beginPath();
  ctx.rect(court.left, court.top, court.right - court.left, court.bottom - court.top);
  ctx.clip();

  const wood = ctx.createLinearGradient(court.left, 0, court.right, 0);
  wood.addColorStop(0, "#bf814b");
  wood.addColorStop(.5, "#dda66b");
  wood.addColorStop(1, "#bd7d47");
  ctx.fillStyle = wood;
  ctx.fillRect(court.left, court.top, court.right - court.left, court.bottom - court.top);

  for (let x = court.left; x < court.right; x += 42) {
    ctx.fillStyle = Math.floor((x - court.left) / 42) % 2 ? "rgba(255,255,255,.04)" : "rgba(83,38,13,.035)";
    ctx.fillRect(x, court.top, 21, court.bottom - court.top);
    ctx.strokeStyle = "rgba(82,43,18,.12)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, court.top);
    ctx.lineTo(x, court.bottom);
    ctx.stroke();
  }

  ctx.fillStyle = game.homeTeam.primary;
  ctx.globalAlpha = .84;
  ctx.fillRect(court.right - 270, 238, 270, 244);
  ctx.fillStyle = game.awayTeam.primary;
  ctx.fillRect(court.left, 238, 270, 244);
  ctx.globalAlpha = 1;

  ctx.strokeStyle = "rgba(255,255,255,.88)";
  ctx.lineWidth = 4;
  ctx.strokeRect(court.left, court.top, court.right - court.left, court.bottom - court.top);
  ctx.beginPath();
  ctx.moveTo(court.centerX, court.top);
  ctx.lineTo(court.centerX, court.bottom);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(court.centerX, court.centerY, 77, 0, Math.PI * 2);
  ctx.stroke();

  ctx.font = "900 29px 'Barlow Condensed', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "rgba(20,23,29,.55)";
  ctx.save();
  ctx.translate(court.centerX, court.centerY);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("HARDWOOD", 0, -8);
  ctx.fillStyle = "#ef233c";
  ctx.fillText("26", 0, 24);
  ctx.restore();

  drawHalfCourt("away");
  drawHalfCourt("home");
  ctx.restore();
}

function drawHalfCourt(side) {
  const leftSide = side === "away";
  const basket = baskets[side];
  const direction = leftSide ? 1 : -1;
  ctx.strokeStyle = "rgba(255,255,255,.9)";
  ctx.lineWidth = 3;

  ctx.strokeRect(leftSide ? court.left : court.right - 270, 238, 270, 244);
  ctx.beginPath();
  ctx.arc(leftSide ? court.left + 270 : court.right - 270, 360, 77, leftSide ? -Math.PI/2 : Math.PI/2, leftSide ? Math.PI/2 : Math.PI*1.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(basket.x, basket.y, 68, leftSide ? -1.05 : Math.PI - 1.05, leftSide ? 1.05 : Math.PI + 1.05);
  ctx.stroke();

  ctx.beginPath();
  if (leftSide) {
    ctx.moveTo(court.left, 140);
    ctx.lineTo(167, 140);
    ctx.arc(basket.x, basket.y, 255, -1.37, 1.37);
    ctx.lineTo(court.left, 580);
  } else {
    ctx.moveTo(court.right, 140);
    ctx.lineTo(court.right - 109, 140);
    ctx.arc(basket.x, basket.y, 255, Math.PI + 1.37, Math.PI - 1.37, true);
    ctx.lineTo(court.right, 580);
  }
  ctx.stroke();

  ctx.fillStyle = "#e8edf3";
  ctx.fillRect(basket.x + direction * -17, basket.y - 48, 8, 96);
  ctx.strokeStyle = "#ef5b35";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.ellipse(basket.x, basket.y, 21, 7, 0, 0, Math.PI * 2);
  ctx.stroke();
}

function drawPlayers() {
  const players = [...game.awayPlayers, ...game.homePlayers].sort((a, b) => a.y - b.y);
  players.forEach(drawPlayer);
}

function drawPlayer(player) {
  const controlled = player === controlledPlayer();
  const team = player.team;
  ctx.save();
  ctx.translate(player.x, player.y);

  const movingSpeed = Math.hypot(player.vx, player.vy);
  const run = performance.now() / 105 + player.animPhase;
  const stride = movingSpeed > 30 ? Math.sin(run) * 7 : 0;
  const facing = player.teamSide === "home" ? 1 : -1;
  const jumping = player.dunking && game.dunk ? Math.sin(Math.PI * clamp(game.dunk.t, 0, 1)) * 58 : 0;
  ctx.translate(0, -jumping);

  ctx.fillStyle = "rgba(0,0,0,.34)";
  ctx.beginPath();
  ctx.ellipse(5, 27 + jumping, player.radius + 8, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  if (controlled) {
    ctx.strokeStyle = "#5ce7ff";
    ctx.lineWidth = 4;
    ctx.setLineDash([8,5]);
    ctx.beginPath();
    ctx.arc(0, 6, player.radius + 17, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#5ce7ff";
    ctx.beginPath();
    ctx.moveTo(0, -player.radius - 21);
    ctx.lineTo(-7, -player.radius - 33);
    ctx.lineTo(7, -player.radius - 33);
    ctx.closePath();
    ctx.fill();
  }

  // Legs and shoes
  ctx.strokeStyle = player.skin;
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-7, 12);
  ctx.lineTo(-9 + stride, 30);
  ctx.moveTo(7, 12);
  ctx.lineTo(9 - stride, 30);
  ctx.stroke();
  ctx.strokeStyle = player.team.secondary;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-9 + stride, 30);
  ctx.lineTo(-15 + stride, 33);
  ctx.moveTo(9 - stride, 30);
  ctx.lineTo(15 - stride, 33);
  ctx.stroke();

  // Arms, raised during a dunk.
  ctx.strokeStyle = player.skin;
  ctx.lineWidth = 8;
  ctx.beginPath();
  if (player.dunking) {
    ctx.moveTo(-13, -8);
    ctx.lineTo(-8, -32);
    ctx.lineTo(5, -45);
    ctx.moveTo(13, -8);
    ctx.lineTo(17, -31);
    ctx.lineTo(13, -45);
  } else {
    ctx.moveTo(-13, -7);
    ctx.lineTo(-20 - stride * .35, 12);
    ctx.moveTo(13, -7);
    ctx.lineTo(20 + stride * .35, 12);
  }
  ctx.stroke();

  // Torso and team uniform.
  const jerseyGradient = ctx.createRadialGradient(-7, -8, 1, 0, 0, player.radius + 7);
  jerseyGradient.addColorStop(0, mixColor(team.primary, "#ffffff", .23));
  jerseyGradient.addColorStop(1, team.primary);
  ctx.fillStyle = jerseyGradient;
  ctx.strokeStyle = team.secondary;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-15, -14);
  ctx.quadraticCurveTo(0, -20, 15, -14);
  ctx.lineTo(18, 14);
  ctx.quadraticCurveTo(0, 22, -18, 14);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = team.secondary;
  ctx.font = `900 ${Math.max(15, player.radius - 3)}px 'Barlow Condensed', sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(player.number, 0, 2);

  // Head, hair, and facial direction.
  ctx.fillStyle = player.skin;
  ctx.beginPath();
  ctx.ellipse(0, -27, 10, 12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#1a1210";
  ctx.beginPath();
  ctx.arc(0, -31, 10, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#17100d";
  ctx.beginPath();
  ctx.arc(facing * 4, -27, 1.25, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(5,6,9,.83)";
  const playerLabel = `${shortName(player.name)}${player.fouls ? `  F${player.fouls}` : ""}`;
  const labelWidth = Math.max(64, ctx.measureText(playerLabel).width + 20);
  ctx.fillRect(-labelWidth/2, 38, labelWidth, 18);
  ctx.fillStyle = "#fff";
  ctx.font = "700 10px Inter, sans-serif";
  ctx.fillText(playerLabel, 0, 47);

  if (controlled) {
    ctx.fillStyle = "rgba(0,0,0,.65)";
    ctx.fillRect(-28, 60, 56, 5);
    ctx.fillStyle = player.stamina > 30 ? "#52df8a" : "#ef4b4b";
    ctx.fillRect(-28, 60, 56 * player.stamina / 100, 5);
  }

  if (game.charge > 0 && game.ball.owner === player) drawShotMeter(player);
  ctx.restore();
}

function drawShotMeter(player) {
  const x = -43;
  const y = -player.radius - 53;
  ctx.fillStyle = "rgba(0,0,0,.78)";
  ctx.fillRect(x, y, 86, 10);
  ctx.fillStyle = "#efc34a";
  ctx.fillRect(x + 2, y + 2, 82 * game.charge, 6);
  ctx.fillStyle = "#57f593";
  ctx.fillRect(x + 2 + 82 * .68, y + 1, 82 * .09, 8);
  ctx.strokeStyle = "rgba(255,255,255,.5)";
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, 86, 10);
}

function drawBall() {
  const ball = game.ball;
  const screenY = ball.y - ball.z;
  ctx.save();
  ctx.fillStyle = `rgba(0,0,0,${clamp(.3 - ball.z / 600, .08, .3)})`;
  ctx.beginPath();
  ctx.ellipse(ball.x + 4, ball.y + 9, 12 + ball.z * .02, 6, 0, 0, Math.PI * 2);
  ctx.fill();

  const gradient = ctx.createRadialGradient(ball.x - 4, screenY - 5, 2, ball.x, screenY, 14);
  gradient.addColorStop(0, "#f69a52");
  gradient.addColorStop(.5, "#c65b22");
  gradient.addColorStop(1, "#6e260d");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(ball.x, screenY, 13, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#4f1a0b";
  ctx.lineWidth = 1.7;
  ctx.beginPath();
  ctx.arc(ball.x, screenY, 13, -.85, .85);
  ctx.moveTo(ball.x - 13, screenY);
  ctx.lineTo(ball.x + 13, screenY);
  ctx.moveTo(ball.x, screenY - 13);
  ctx.quadraticCurveTo(ball.x - 7, screenY, ball.x, screenY + 13);
  ctx.stroke();
  ctx.restore();
}

function drawDeadBallOverlay() {
  ctx.fillStyle = "rgba(0,0,0,.12)";
  ctx.fillRect(0, 0, W, H);
}

function shortName(name) {
  const pieces = name.split(" ");
  return pieces.length > 1 ? `${pieces[0][0]}. ${pieces.slice(1).join(" ")}` : name;
}

function mixColor(colorA, colorB, amount) {
  const parse = color => color.match(/\w\w/g).map(value => parseInt(value, 16));
  const a = parse(colorA);
  const b = parse(colorB);
  return "#" + a.map((value, index) => Math.round(lerp(value, b[index], amount)).toString(16).padStart(2, "0")).join("");
}

// Touch controls
const stick = $("#touchStick");
const knob = $("#touchKnob");
let stickPointer = null;

stick.addEventListener("pointerdown", event => {
  stickPointer = event.pointerId;
  stick.setPointerCapture(event.pointerId);
  updateStick(event);
});
stick.addEventListener("pointermove", event => {
  if (event.pointerId === stickPointer) updateStick(event);
});
stick.addEventListener("pointerup", resetStick);
stick.addEventListener("pointercancel", resetStick);

function updateStick(event) {
  const rect = stick.getBoundingClientRect();
  let x = event.clientX - rect.left - rect.width / 2;
  let y = event.clientY - rect.top - rect.height / 2;
  const d = Math.hypot(x, y);
  const limit = 32;
  if (d > limit) {
    x = x / d * limit;
    y = y / d * limit;
  }
  knob.style.transform = `translate(${x}px, ${y}px)`;
  input.moveX = x / limit;
  input.moveY = y / limit;
}

function resetStick() {
  stickPointer = null;
  knob.style.transform = "";
  input.moveX = 0;
  input.moveY = 0;
}

$$(".touch-actions button").forEach(button => {
  const action = button.dataset.action;
  button.addEventListener("pointerdown", event => {
    event.preventDefault();
    if (action === "shoot") {
      input.shooting = true;
    } else if (action === "pass") {
      passBall();
    } else if (action === "dunk") {
      attemptDunk();
    } else {
      attemptSteal();
    }
  });
  if (action === "shoot") {
    const release = event => {
      event.preventDefault();
      if (input.shooting) {
        input.shooting = false;
        releaseShot();
      }
    };
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
  }
});
