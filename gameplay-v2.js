(() => {
  if (typeof updateReferee === "function") return;

  updateReferee = function(dt) {
    const referee = game.referee ||= { x: court.centerX, y: court.top - 8, vx: 0 };
    const target = game.ball.owner || game.ball;
    const targetX = clamp(target.x, court.left + 125, court.right - 125);
    referee.vx = lerp(referee.vx, (targetX - referee.x) * 4.2, clamp(dt * 5, 0, 1));
    referee.x = clamp(referee.x + referee.vx * dt, court.left + 90, court.right - 90);
    referee.y = court.top - 8;
  };

  updateAI = function(dt) {
    const homeControlled = controlledPlayer();
    const ballOwner = game.ball.owner;
    const ballX = ballOwner?.x ?? game.ball.x;
    const ballY = ballOwner?.y ?? game.ball.y;

    game.homePlayers.forEach((player, index) => {
      if (player === homeControlled) return;
      if (game.possession === "home") {
        const highSide = ballY > court.centerY ? court.top + 120 : court.bottom - 120;
        const lowSide = ballY > court.centerY ? court.bottom - 105 : court.top + 105;
        const targetX = index === 1 ? clamp(ballX + 145, 610, 1035) : clamp(ballX + 55, 560, 965);
        const targetY = index === 1 ? highSide : lowSide;
        const defenderGap = nearestOpponentDistance(player);
        const cutOpen = ballX > 760 && defenderGap > 105 && index !== homeControlled?.index;
        moveToward(player, cutOpen ? 1080 : targetX, cutOpen ? 360 : targetY, dt, cutOpen ? 1.03 : .9);
      } else {
        const assignment = game.awayPlayers[index];
        const hoop = baskets.away;
        const handlerThreat = ballOwner?.teamSide === "away" && distance(ballOwner, hoop) < 245;
        const isHelpDefender = distance(player, ballOwner || game.ball) < 190;
        const helpAmount = handlerThreat && isHelpDefender ? .34 : .15;
        const targetX = lerp(assignment.x, ballX, helpAmount) + (hoop.x - assignment.x) * .08;
        const targetY = lerp(assignment.y, ballY, helpAmount) + (hoop.y - assignment.y) * .08;
        moveToward(player, targetX, targetY, dt, handlerThreat ? 1.02 : .94);
      }
    });

    game.awayPlayers.forEach((player, index) => {
      if (game.possession === "away") {
        if (player === ballOwner) updateCPUHandler(player, dt);
        else {
          const upper = index === 1;
          const defenderGap = nearestOpponentDistance(player);
          const baselineY = upper ? court.top + 105 : court.bottom - 105;
          let targetX = clamp(ballX - (upper ? 150 : 70), 225, 650);
          let targetY = baselineY;
          if (ballX < 490 && defenderGap > 100) {
            targetX = upper ? 205 : 315;
            targetY = upper ? court.top + 165 : court.bottom - 165;
          }
          if (ballOwner && distance(player, ballOwner) < 125) targetY = upper ? court.top + 90 : court.bottom - 90;
          moveToward(player, targetX, targetY, dt, defenderGap > 95 ? .96 : .88);
        }
      } else {
        const assignment = game.homePlayers[index];
        const hoop = baskets.home;
        const driveThreat = ballOwner?.teamSide === "home" && distance(ballOwner, hoop) < 235;
        const helpAmount = driveThreat && assignment !== ballOwner ? .28 : .14;
        const targetX = lerp(assignment.x, ballX, helpAmount) + (hoop.x - assignment.x) * .09;
        const targetY = lerp(assignment.y, ballY, helpAmount) + (hoop.y - assignment.y) * .09;
        moveToward(player, targetX, targetY, dt, driveThreat ? 1.04 : .96);
      }
    });
    updateReferee(dt);
  };

  updateCPUHandler = function(player, dt) {
    player.aiTimer -= dt;
    const hoop = baskets.away;
    const dist = distance(player, hoop);
    const defenderDist = nearestOpponentDistance(player);
    if (player.aiTimer <= 0 && !game.ball.flight) {
      const passingOptions = game.awayPlayers.filter(item => item !== player).map(teammate => ({
        teammate,
        openness: nearestOpponentDistance(teammate),
        progress: 500 - distance(teammate, hoop)
      })).sort((a, b) => (b.openness + b.progress * .08) - (a.openness + a.progress * .08));
      const bestPass = passingOptions[0];
      const openShot = defenderDist > (dist > 218 ? 78 : 62);
      const goodRange = dist < 360 || player.shooting > 92 && dist < 430;
      if ((openShot && goodRange && Math.random() < .82) || game.shotClock < 5) {
        player.aiTimer = 1.25;
        takeShot(player, .72, true);
        return;
      }
      if (bestPass && bestPass.openness > defenderDist + 28 && (defenderDist < 72 || Math.random() < .34)) {
        startPass(player, bestPass.teammate);
        player.aiTimer = .75 + Math.random() * .45;
        return;
      }
      player.aiTimer = .35 + Math.random() * .55;
    }
    const defender = nearestOpponent(player);
    const laneDirection = defender ? Math.sign(player.y - defender.y) || (player.index % 2 ? 1 : -1) : 1;
    const laneY = clamp(360 + laneDirection * (defenderDist < 90 ? 115 : 65), court.top + 105, court.bottom - 105);
    const driveX = dist < 105 ? hoop.x + 42 : hoop.x + (defenderDist < 58 ? 170 : 105);
    moveToward(player, driveX, laneY, dt, defenderDist < 60 ? 1.08 : .96);
  };

  function drawRefereeUpgrade() {
    const referee = game.referee;
    if (!referee) return;
    const stride = Math.abs(referee.vx) > 18 ? Math.sin(performance.now() / 85) * 6 : 0;
    const facing = referee.vx >= 0 ? 1 : -1;
    ctx.save(); ctx.translate(referee.x, referee.y);
    ctx.fillStyle = "rgba(0,0,0,.3)"; ctx.beginPath(); ctx.ellipse(0, 25, 18, 6, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#252932"; ctx.lineWidth = 6; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(-6, 11); ctx.lineTo(-8 + stride, 29); ctx.moveTo(6, 11); ctx.lineTo(8 - stride, 29); ctx.stroke();
    ctx.strokeStyle = "#d6a078"; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-11, -5); ctx.lineTo(-17 - stride * .35, 10); ctx.moveTo(11, -5); ctx.lineTo(17 + stride * .35, 10); ctx.stroke();
    ctx.fillStyle = "#e8ebef"; ctx.strokeStyle = "#16191f"; ctx.lineWidth = 2; ctx.fillRect(-12, -13, 24, 28); ctx.strokeRect(-12, -13, 24, 28);
    ctx.strokeStyle = "#242832"; for (let x = -8; x <= 8; x += 4) { ctx.beginPath(); ctx.moveTo(x, -12); ctx.lineTo(x, 14); ctx.stroke(); }
    ctx.fillStyle = "#d6a078"; ctx.beginPath(); ctx.arc(0, -22, 9, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#20232a"; ctx.beginPath(); ctx.arc(0, -25, 9, Math.PI, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#111"; ctx.beginPath(); ctx.arc(facing * 3, -22, 1, 0, Math.PI * 2); ctx.fill(); ctx.restore();
  }

  const baseDrawGame = drawGame;
  drawGame = function() {
    baseDrawGame();
    drawRefereeUpgrade();
  };
})();
