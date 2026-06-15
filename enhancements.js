(() => {
  const hasBuiltInVisuals = typeof playerJerseyNumber === "function";

  const arena = document.querySelector(".arena-shell");
  const canvas = document.querySelector("#gameCanvas");
  if (arena && canvas && !document.querySelector("#matchupIntro")) {
    canvas.insertAdjacentHTML("afterend", `
      <div id="matchupIntro" class="matchup-intro" aria-hidden="true">
        <div class="intro-light intro-light-left"></div><div class="intro-light intro-light-right"></div>
        <div class="intro-team intro-home"><div class="intro-badge" id="introHomeBadge">HOME</div><small id="introHomeEra">MODERN</small><h2 id="introHomeName">HOME</h2><p id="introHomeLineup"></p></div>
        <div class="intro-center"><span>HARDWOOD ARENA</span><b>VS</b><em>QUICK GAME</em></div>
        <div class="intro-team intro-away"><div class="intro-badge" id="introAwayBadge">AWAY</div><small id="introAwayEra">MODERN</small><h2 id="introAwayName">AWAY</h2><p id="introAwayLineup"></p></div>
      </div>
      <div id="periodGraphic" class="period-graphic" aria-hidden="true"><small>HARDWOOD 26</small><b id="periodGraphicTitle">SECOND QUARTER</b><span>THE GAME CONTINUES</span></div>
    `);
  }

  const numbers = {
    "Trae Young":"11","Jalen Johnson":"1","Dyson Daniels":"5","Dominique Wilkins":"21","Bob Pettit":"9","Dikembe Mutombo":"55","Jayson Tatum":"0","Jaylen Brown":"7","Derrick White":"9","Larry Bird":"33","Bill Russell":"6","Paul Pierce":"34","Cam Thomas":"24","Nic Claxton":"33","Cameron Johnson":"2","Jason Kidd":"5","Julius Erving":"32","Vince Carter":"15","LaMelo Ball":"1","Brandon Miller":"24","Miles Bridges":"0","Kemba Walker":"15","Larry Johnson":"2","Alonzo Mourning":"33","Coby White":"0","Josh Giddey":"3","Nikola Vucevic":"9","Michael Jordan":"23","Scottie Pippen":"33","Derrick Rose":"1","Donovan Mitchell":"45","Darius Garland":"10","Evan Mobley":"4","LeBron James":"23","Mark Price":"25","Brad Daugherty":"43","Anthony Davis":"3","Kyrie Irving":"11","Klay Thompson":"31","Dirk Nowitzki":"41","Luka Doncic":"77","Nikola Jokic":"15","Jamal Murray":"27","Aaron Gordon":"32","Alex English":"2","Carmelo Anthony":"15","Cade Cunningham":"2","Jalen Duren":"0","Ausar Thompson":"9","Isiah Thomas":"11","Joe Dumars":"4","Ben Wallace":"3","Stephen Curry":"30","Jimmy Butler":"10","Draymond Green":"23","Wilt Chamberlain":"13","Kevin Durant":"35","Alperen Sengun":"28","Jalen Green":"4","Amen Thompson":"1","Hakeem Olajuwon":"34","Moses Malone":"24","James Harden":"13","Tyrese Haliburton":"0","Pascal Siakam":"43","Myles Turner":"33","Reggie Miller":"31","Jermaine O'Neal":"7","Paul George":"8","Kawhi Leonard":"2","Ivica Zubac":"40","Chris Paul":"3","Bob McAdoo":"11","Austin Reaves":"15","Magic Johnson":"32","Kobe Bryant":"24","Kareem Abdul-Jabbar":"33","Ja Morant":"12","Jaren Jackson Jr.":"13","Desmond Bane":"22","Marc Gasol":"33","Zach Randolph":"50","Bam Adebayo":"13","Tyler Herro":"14","Andrew Wiggins":"22","Dwyane Wade":"3","Giannis Antetokounmpo":"34","Damian Lillard":"0","Khris Middleton":"22","Oscar Robertson":"1","Anthony Edwards":"5","Julius Randle":"30","Rudy Gobert":"27","Kevin Garnett":"21","Kevin Love":"42","Zion Williamson":"1","Trey Murphy III":"25","CJ McCollum":"3","Jalen Brunson":"11","Karl-Anthony Towns":"32","Mikal Bridges":"25","Patrick Ewing":"33","Walt Frazier":"10","Shai Gilgeous-Alexander":"2","Jalen Williams":"8","Chet Holmgren":"7","Russell Westbrook":"0","Gary Payton":"20","Paolo Banchero":"5","Franz Wagner":"22","Jalen Suggs":"4","Shaquille O'Neal":"32","Penny Hardaway":"1","Dwight Howard":"12","Joel Embiid":"21","Tyrese Maxey":"0","Allen Iverson":"3","Devin Booker":"1","Bradley Beal":"3","Steve Nash":"13","Charles Barkley":"34","Anfernee Simons":"1","Scoot Henderson":"00","Deni Avdija":"8","Clyde Drexler":"22","Bill Walton":"32","Domantas Sabonis":"11","Zach LaVine":"8","DeMar DeRozan":"10","Chris Webber":"4","Mitch Richmond":"2","Victor Wembanyama":"1","De'Aaron Fox":"4","Stephon Castle":"5","Tim Duncan":"21","David Robinson":"50","George Gervin":"44","Scottie Barnes":"4","RJ Barrett":"9","Immanuel Quickley":"5","Chris Bosh":"4","Lauri Markkanen":"23","Walker Kessler":"24","Keyonte George":"3","Karl Malone":"32","John Stockton":"12","Pete Maravich":"7","Jordan Poole":"13","Alex Sarr":"20","Bilal Coulibaly":"0","Wes Unseld":"41","Elvin Hayes":"11","Gilbert Arenas":"0"
  };
  const overrides = {"MIA:LeBron James":"6","NYK:Carmelo Anthony":"7","PHI:Julius Erving":"6","PHI:Moses Malone":"2","IND:Paul George":"24","LAC:James Harden":"1","MIL:Oscar Robertson":"1","SAC:Oscar Robertson":"14","NOP:Anthony Davis":"23"};
  const heights = {"Trae Young":73,"Chris Paul":72,"Kemba Walker":72,"Allen Iverson":72,"Jalen Brunson":74,"Darius Garland":73,"Donovan Mitchell":75,"Stephen Curry":74,"Tyrese Maxey":74,"Ja Morant":74,"Victor Wembanyama":88,"Dikembe Mutombo":86,"Kareem Abdul-Jabbar":86,"Wilt Chamberlain":85,"David Robinson":85,"Marc Gasol":83,"Chet Holmgren":85,"Rudy Gobert":85,"Joel Embiid":84,"Karl-Anthony Towns":84,"Lauri Markkanen":84,"Walker Kessler":84,"Alex Sarr":84,"Patrick Ewing":84,"Brad Daugherty":84,"Nikola Jokic":83,"Alperen Sengun":83,"Tim Duncan":83,"Kevin Garnett":83,"Chris Bosh":83,"Bill Walton":83,"Anthony Davis":82,"Shaquille O'Neal":85,"Dwight Howard":82,"Bill Russell":82,"Moses Malone":82,"Alonzo Mourning":82,"Nikola Vucevic":82,"Domantas Sabonis":83,"Jaren Jackson Jr.":83,"Myles Turner":83,"Nic Claxton":83,"Evan Mobley":83,"Giannis Antetokounmpo":83,"Kevin Durant":83,"LeBron James":81,"Magic Johnson":81,"Larry Bird":81,"Jayson Tatum":80,"Luka Doncic":79,"Scottie Pippen":80,"Michael Jordan":78,"Kobe Bryant":78};
  if (!hasBuiltInVisuals) {
    const jersey = (name, teamId) => overrides[`${teamId}:${name}`] || numbers[name] || "0";
    const baseCreatePlayer = createPlayer;
    createPlayer = function(side, index, name, team, era) {
      const player = baseCreatePlayer(side, index, name, team, era);
      const height = heights[name] || [77,81,79][index];
      player.height = height; player.visualScale = Math.max(.88, Math.min(1.2, 1 + (height - 78) * .022));
      player.radius = 20 + (player.visualScale - 1) * 8; player.speed += (78 - height) * 1.8; player.number = jersey(name, team.id);
      return player;
    };
    const baseDrawPlayer = drawPlayer;
    drawPlayer = function(player) {
      const scale = player.visualScale || 1; if (Math.abs(scale - 1) < .01) return baseDrawPlayer(player);
      const x = player.x, y = player.y; ctx.save(); ctx.translate(x, y); ctx.scale(scale, scale); player.x = 0; player.y = 0;
      try { baseDrawPlayer(player); } finally { player.x = x; player.y = y; ctx.restore(); }
    };
    const showIntro = () => {
      const intro = document.querySelector("#matchupIntro"); if (!intro || !game) return;
      const home = game.homeTeam, away = game.awayTeam; intro.style.setProperty("--intro-home", home.primary); intro.style.setProperty("--intro-away", away.primary);
      [["Home",home,game.homeEra],["Away",away,game.awayEra]].forEach(([side,team,era]) => {
        document.querySelector(`#intro${side}Badge`).textContent = team.id;
        document.querySelector(`#intro${side}Badge`).style.cssText += `;--badge-color:${team.primary};--badge-text:${team.secondary}`;
        document.querySelector(`#intro${side}Era`).textContent = era === "alltime" ? "ALL-TIME LINEUP" : "MODERN LINEUP";
        document.querySelector(`#intro${side}Name`).textContent = teamTitle(team).toUpperCase(); document.querySelector(`#intro${side}Lineup`).textContent = team[era].join(" / ");
      });
      intro.classList.remove("show"); void intro.offsetWidth; intro.classList.add("show"); game.deadBall = 3.15;
    };
    const baseBeginMatch = beginMatch; beginMatch = function() { baseBeginMatch(); showIntro(); };
    const showPeriod = title => { const graphic = document.querySelector("#periodGraphic"); if (!graphic) return; document.querySelector("#periodGraphicTitle").textContent = title; graphic.classList.remove("show"); void graphic.offsetWidth; graphic.classList.add("show"); };
    const baseEndQuarter = endQuarter;
    endQuarter = function() { const previousQuarter = game.quarter; baseEndQuarter(); if (!game || !game.running || game.quarter === previousQuarter) return; game.deadBall = 1.85; showPeriod(game.quarter > 4 ? "OVERTIME" : `${["FIRST","SECOND","THIRD","FOURTH"][game.quarter - 1]} QUARTER`); };
  }

  updateStick = function(event) {
    event.preventDefault();
    const rect = stick.getBoundingClientRect(); const knobSize = knob.getBoundingClientRect().width || 48;
    let x = event.clientX - rect.left - rect.width / 2, y = event.clientY - rect.top - rect.height / 2;
    const distance = Math.hypot(x, y), limit = Math.max(18, (rect.width - knobSize) / 2);
    if (distance > limit) { x = x / distance * limit; y = y / distance * limit; }
    knob.style.transform = `translate(${x}px,${y}px)`;
    input.moveX = x / limit; input.moveY = y / limit; input.keys.shift = distance > limit * .82;
  };
  const clearTouchSprint = () => { input.moveX = 0; input.moveY = 0; input.keys.shift = false; };
  stick.addEventListener("pointerup", clearTouchSprint); stick.addEventListener("pointercancel", clearTouchSprint);
  stick.addEventListener("lostpointercapture", () => { resetStick(); clearTouchSprint(); });
  document.addEventListener("visibilitychange", () => { if (document.hidden) { resetStick(); clearTouchSprint(); } });

  const stopCrowdLoop = () => { if (!crowdSource) return; try { crowdSource.stop(); } catch (_) {} crowdSource = null; crowdGain = null; };
  startArenaAudio = function() { if (!soundEnabled) return; ensureAudio(); stopCrowdLoop(); };
  function playTone(frequency, duration, volume, type = "sine", endFrequency = frequency) {
    const audio = ensureAudio(), oscillator = audio.createOscillator(), gain = audio.createGain();
    oscillator.type = type; oscillator.frequency.setValueAtTime(frequency, audio.currentTime);
    if (endFrequency !== frequency) oscillator.frequency.exponentialRampToValueAtTime(endFrequency, audio.currentTime + duration);
    gain.gain.setValueAtTime(volume, audio.currentTime); gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + duration);
    oscillator.connect(gain); gain.connect(masterGain); oscillator.start(); oscillator.stop(audio.currentTime + duration);
  }
  function playFilteredNoise(duration, volume, filterType, frequency) {
    const audio = ensureAudio(), source = audio.createBufferSource(), filter = audio.createBiquadFilter(), gain = audio.createGain();
    source.buffer = noiseBuffer(duration); filter.type = filterType; filter.frequency.value = frequency; filter.Q.value = .6;
    gain.gain.setValueAtTime(.001, audio.currentTime); gain.gain.linearRampToValueAtTime(volume, audio.currentTime + .06); gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + duration);
    source.connect(filter); filter.connect(gain); gain.connect(masterGain); source.start();
  }
  const baseSound = sound;
  sound = function(type) {
    if (!soundEnabled) return;
    try {
      if (type === "cheer") { playFilteredNoise(1.45, .085, "bandpass", 720); playFilteredNoise(1.15, .035, "lowpass", 1200); navigator.vibrate?.([20,35,25]); return; }
      if (type === "swish") { playFilteredNoise(.24, .045, "highpass", 2400); playTone(720, .18, .035, "sine", 220); return; }
      if (type === "rim") { playTone(330, .13, .055, "triangle", 250); playTone(510, .09, .035, "square", 390); navigator.vibrate?.(18); return; }
      if (type === "bounce") { playTone(105, .055, .04, "sine", 72); return; }
      if (type === "steal") { playTone(520, .1, .06, "triangle", 860); navigator.vibrate?.(12); return; }
      if (type === "whistle") { playTone(1650, .24, .055, "sine", 2050); playTone(2150, .18, .025, "sine", 1800); navigator.vibrate?.([18,30,18]); return; }
      baseSound(type);
    } catch (_) {}
  };
})();
