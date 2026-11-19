// ==========================================
// CONFIGURACIÓN PARA TI (DESARROLLADOR)
// ==========================================
const MODO_PRUEBAS = false; // Cámbialo a 'false' antes de dárselo el 1 de diciembre
const MES_ADVIENTO = 11;   // 11 = Diciembre (en JS los meses van de 0 a 11)

// ==========================================
// DATOS DE LOS 24 DÍAS (PERSONALIZADOS POR TI)
// ==========================================
const adventDays = [
    {
        day: 1,
        icon: "🎄",
        title: "¡Empieza la magia, Morrr!",
        type: "mensaje",
        content: `
            <p>Bienvenida a tu propio Calendario de Adviento, Victoria 💘.</p>
            <p>Cada día hasta Nochebuena podrás abrir una casilla nueva. Habrá vales, recuerdos, minijuegos y cositas hechas solo para ti.</p>
            <div class="voucher-box">🎟️ VALE INAUGURAL: Hoy eliges tu el plan que quieras y el dia que quieras hacerlo, aprovechalo 😉.</div>
        `
    },
    {
        day: 2,
        icon: "🎟️",
        title: "Vale por un capricho",
        type: "vale",
        content: `
            <p>Hoy mandas tú al 100% en lo que te apetezca comer o merendar.</p>
            <div class="voucher-box">🍕 VALE CANJEABLE: Tú eliges la cena o merienda de hoy y yo invito sin rechistar.</div>
        `
    },
    {
        day: 3,
        icon: "🪙",
        title: "Rasca y Gana Navideño",
        type: "scratch",
        prizeText: "💆‍♀️ ¡PREMIO! Vale por un masaje de 20 minutos donde tú elijas + mimitos infinitos 💘"
    },
    {
        day: 4,
        icon: "🔤",
        title: "Ahorcado Secreto",
        type: "hangman",
        hint: "Pista: Nuestra palabra favorita o cómo te llamo siempre 😉",
        secretWord: "MOR",
        winPrize: "💋 ¡Acertaste! Has ganado un beso de película de 15 segundos ahora mismo."
    },
    {
        day: 5,
        icon: "🎡",
        title: "Ruleta de la Suerte",
        type: "wheel",
        prizes: [
            "🍿 Noche de peli navideña elegida por ti",
            "🥐 Desayuno especial, elige lo que quieras.",
            "🔥 Vale por un deseo picantón",
            "🍦 Merienda dulce donde tú digas",
            "👑 Hoy tienes la razón en todo",
            "🧨 Todo lo que tu quieras durante 24 horas!"
        ]
    },
    {
        day: 6,
        icon: "🛷",
        title: "Atrapa los Regalos",
        type: "catcher",
        goal: 10,
        winPrize: "🍫 ¡10 regalos atrapados! Vale por elegir peli esta noche con palomitas incluidas🍿📺"
    },
    {
        day: 7,
        icon: "🤢",
        title: "¡Fuera el Grinch!",
        type: "whack",
        goal: 8,
        winPrize: "🎬 ¡Salvaste la Navidad! Vale por una bolsa de tus chuches favoritas😊"
    },
    {
        day: 8,
        icon: "🔔",
        title: "Simón Navideño",
        type: "simon",
        winPrize: "💋 ¡Menuda memoria, Morrr! Vale por 100 besos donde tú elijas."
    },
    {
        day: 9,
        icon: "🧩",
        title: "Memory de Parejas",
        type: "memory",
        winPrize: "📸 ¡Parejas encontradas! Vale para tarde de juegos juntos o ir a dar una vuelta por madrid y ver las luces."
    },
    {
        day: 10,
        icon: "📸",
        title: "Un recuerdo nuestro",
        type: "html",
        content: `
            <p>Mirando atrás desde el 7 de julio, cada momento contigo vale oro ✨.</p>
            <div class="polaroid-modal">
                <img src="assets/foto1.jpeg" alt="Nosotros" onerror="this.src='https://via.placeholder.com/260x210/8f1d3f/ffffff?text=Pon+foto1.jpeg+en+assets'">
                <p>Nuestro comienzo 💘</p>
            </div>
            <div class="voucher-box">🎟️ VALE POR: Una tarde entera de mimos, manta y sofá sin mirar el móvil.</div>
        `
    },
    {
        day: 11,
        icon: "🔮",
        title: "Bola de Cristal del Amor",
        type: "crystal",
        phrases: [
            "✨ Nunca dudes que eres la mujer mas guapa del mundo para mí.",
            "✨ Tu sonrisa me arregla cualquier mal día al instante.",
            "✨ Me vuelve loco cómo te queda mi ropa.",
            "✨ Contigo hasta un domingo lluvioso es un planazo.",
            "✨ Eres mi lugar seguro, mi compañera y mi vida entera."
        ],
        winPrize: "🎟️ VALE EXTRA: Un piropo al oído y un abrazo apretado de 1 minuto."
    },
    {
        day: 12,
        icon: "🔥",
        title: "Reto Picantón del Día",
        type: "html",
        content: `
            <p>Hoy no hay escapatoria, Victoria 😈...</p>
            <div class="voucher-box">🔥 RETO EXPRESS: Tienes que hacer lo que yo quiera durante 2 minutos.</div>
        `
    },
    {
        day: 13,
        icon: "🎨",
        title: "Lienzo Mágico de Navidad",
        type: "magicPaint",
        winPrize: "💆‍♀️ ¡Arte puro! Vale por una sesión VIP de caricias en el pelo y mimos en la cama hasta que tu quieras 💘."
    },
    {
        day: 14,
        icon: "🦌",
        title: "Flappy Reno",
        type: "flappy",
        goal: 3,
        winPrize: "🥐 ¡Vaya reflejos! Vale por un desayuno completo con tortitas o churros invitados por mí."
    },
    {
        day: 15,
        icon: "👑",
        title: "Comodín de la Reina",
        type: "html",
        content: `
            <p>Has llegado a la mitad de diciembre, mi vida, y te mereces un comodín oficial.</p>
            <div class="voucher-box">👑 COMODÍN DE LA RAZÓN: Úsalo cuando quieras para ganar una discusión tonta automáticamente sin rechistar.</div>
        `
    },
    {
        day: 16,
        icon: "🚗",
        title: "Cita Improvisada",
        type: "html",
        content: `
            <p>Hoy toca salir de la rutina un ratito juntos ✨.</p>
            <div class="voucher-box">🛣️ VALE POR CITA: Paseo por donde tu quieras y acabar cenando juntos.</div>
        `
    },
    {
        day: 17,
        icon: "❓",
        title: "Quiz Relámpago Vuestro",
        type: "quiz",
        questions: [
            { q: "¿Quién tarda más en dejar de ver una película?", opts: ["Tú", "Yo", "Nadie"], a: 0 },
            { q: "¿Qué prenda mía te queda mejor?", opts: ["Una sudadera", "Mis pantalones de deporte", "Una camiseta del atleti"], a: 2 },
            { q: "¿Cuánto te quiero?", opts: ["Mucho", "Infinito y cada día más 💘", "Un poquito"], a: 1 }
        ],
        winPrize: "🍨 ¡Pleno! Vale por tu postre o helado favorito el dia que quieras."
    },
    {
        day: 18,
        icon: "📸",
        title: "Recuerdo Especial",
        type: "html",
        content: `
            <p>Porque contigo cada día es una aventura nueva 💖.</p>
            <div class="polaroid-modal">
                <img src="assets/foto2.jpeg" alt="Recuerdo 2" onerror="this.src='https://via.placeholder.com/260x210/8f1d3f/ffffff?text=Pon+foto2.jpeg+en+assets'">
                <p>Siempre juntos ✨</p>
            </div>
            <div class="voucher-box">💆‍♀️ VALE POR: 15 minutos de caricias en el pelo hasta que te quedes frita.</div>
        `
    },
    {
        day: 19,
        icon: "😈",
        title: "Noche de Travesuras",
        type: "html",
        content: `
            <p>Un vale reservado para cuando estemos a solas y sin prisa 🤫...</p>
            <div class="voucher-box">🔥 VALE ATREVIDO: Tú pones las reglas durante 30 minutos y yo obedezco en todo.</div>
        `
    },
    {
        day: 20,
        icon: "🔢",
        title: "Puzzle Navideño 3x3",
        type: "puzzle",
        winPrize: "🍔 ¡Puzzle resuelto! Vale por cenar tu hamburguesa o pizza favorita."
    },
    {
        day: 21,
        icon: "🌟",
        title: "Luces de Navidad",
        type: "html",
        content: `
            <p>No hay luces de Navidad que brillen más que tus ojos cuando sonríes ✨.</p>
            <div class="voucher-box">🎄 PLAN NAVIDEÑO: Paseo cogidos de la mano viendo las luces de Navidad con algo calentito.</div>
        `
    },
    {
        day: 22,
        icon: "🔐",
        title: "Caja Fuerte Secreta",
        type: "safeLock",
        code: [7, 2, 4],
        hint: "Pista: Nuestro día especial de julio + el día de Nochebuena😉", //(7-2-4)
        winPrize: "🛍️ ¡CAJA ABIERTA! Vale por un capricho navideño: vamos juntos a una tienda y te regalo lo que tú señales (hasta X€) 🎁."
    },
    {
        day: 23,
        icon: "💋",
        title: "La Víspera de Nochebuena",
        type: "html",
        content: `
            <p>Mañana es el gran día, Morrr💘. Hoy toca recargar pilas de cariño.</p>
            <div class="voucher-box">🎟️ VALE PRE-NOCHEBUENA: Un masaje de espalda completo + sesión de besos infinitos.</div>
        `
    },
    {
        day: 24,
        icon: "🎁✨",
        title: "¡Feliz Nochebuena, mi vida! 🎄",
        type: "finalHeart",
        letterHtml: `
            <div class="final-letter-paper">
                <p><strong>Mi querida Morrr,</strong></p>
                <p>Has llegado al día 24, pero lo mejor de todo es que nuestro calendario juntos no tiene fecha de caducidad.</p>
                <p>Gracias por cada risa, por cada abrazo, por quedarte a mi lado y por hacer que cada día desde aquel 7 de julio sea único e irrepetible. Para mí eres la mujer más hermosa del mundo, mi compañera y mi todo.</p>
                <p>Espero que hayas disfrutado abriendo cada casilla tanto como yo disfrutado programándolas para ti.</p>
                <p>Te amo con todo mi corazón.<br><strong>Tu chico 💘</strong></p>
            </div>
            <div class="voucher-box">🎁 GRAN REGALO FINAL: ¡Ven a verme, para recibir tu regalo de Navidad! 🎄✨</div>
        `
    }
];

// ==========================================
// LÓGICA DE FECHAS Y GUARDADO (LOCALSTORAGE)
// ==========================================
let openedDays = JSON.parse(localStorage.getItem("adviento_victoria_opened")) || [];

function canOpenDay(dayNumber) {
    if (MODO_PRUEBAS) return true;
    const today = new Date();
    return today.getMonth() === MES_ADVIENTO && today.getDate() >= dayNumber;
}

function renderCalendar() {
    const grid = document.getElementById("advent-grid");
    grid.innerHTML = "";

    adventDays.forEach((item) => {
        const box = document.createElement("div");
        const isUnlocked = canOpenDay(item.day);
        const isOpened = openedDays.includes(item.day);

        box.classList.add("day-box");
        if (item.day === 24) box.classList.add("day-24");

        if (isOpened) box.classList.add("opened");
        else if (isUnlocked) box.classList.add("available");
        else box.classList.add("locked");

        const statusIcon = isOpened ? "✅" : (isUnlocked ? item.icon : "🔒");
        const label24 = item.day === 24 ? `<span style="font-size:0.85rem; margin-top:4px;">Gran Final de Nochebuena</span>` : "";

        box.innerHTML = `
            <span class="day-number">${item.day}</span>
            <span class="day-icon">${statusIcon}</span>
            ${label24}
        `;

        box.onclick = () => handleDayClick(item, isUnlocked);
        grid.appendChild(box);
    });

    updateProgress();
}

function handleDayClick(item, isUnlocked) {
    if (!isUnlocked) {
        alert(`¡Quietecita ahí, impaciente! 🤫 Aún no es día ${item.day} de diciembre. ¡No hagas trampas, Morrr! 💘`);
        return;
    }

    if (!openedDays.includes(item.day)) {
        openedDays.push(item.day);
        localStorage.setItem("adviento_victoria_opened", JSON.stringify(openedDays));
        renderCalendar();
    }

    openModal(item);
}

function updateProgress() {
    const count = openedDays.length;
    document.getElementById("progress-text").innerText = `Abiertos: ${count} / 24 días`;
    document.getElementById("progress-fill").style.width = `${(count / 24) * 100}%`;
}

// ==========================================
// RENDERIZADO DEL MODAL Y TODOS LOS JUEGOS
// ==========================================
function openModal(item) {
    document.getElementById("modal-day-badge").innerText = `Día ${item.day} de Diciembre`;
    document.getElementById("modal-title").innerText = item.title;
    const body = document.getElementById("modal-body");

    switch (item.type) {
        case "scratch": initScratchCard(body, item); break;
        case "hangman": initHangman(body, item); break;
        case "wheel": initWheel(body, item); break;
        case "catcher": initCatcher(body, item); break;
        case "whack": initWhackGrinch(body, item); break;
        case "simon": initSimon(body, item); break;
        case "memory": initMiniMemory(body, item); break;
        case "crystal": initCrystalBall(body, item); break;
        case "magicPaint": initMagicPaint(body, item); break;
        case "flappy": initFlappyReno(body, item); break;
        case "quiz": initQuiz(body, item); break;
        case "puzzle": initSlidingPuzzle(body, item); break;
        case "safeLock": initSafeLock(body, item); break;
        case "finalHeart": initFinalHeart(body, item); break;
        default: body.innerHTML = item.content;
    }

    document.getElementById("surprise-modal").classList.add("active");
}

// 1. RASCA Y GANA
function initScratchCard(container, item) {
    container.innerHTML = `
        <p>Pasa el dedo por la tarjeta dorada para descubrir tu sorpresa ✨</p>
        <div class="scratch-wrapper">
            <div class="scratch-prize">${item.prizeText}</div>
            <canvas id="scratch-canvas" width="280" height="150"></canvas>
        </div>
    `;
    const canvas = document.getElementById("scratch-canvas");
    const ctx = canvas.getContext("2d");
    const grad = ctx.createLinearGradient(0, 0, 280, 150);
    grad.addColorStop(0, "#ffd166");
    grad.addColorStop(1, "#e09f3e");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 280, 150);
    ctx.fillStyle = "#3b081c";
    ctx.font = "bold 18px Nunito, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ RASCA AQUÍ ✨", 140, 80);

    let isDrawing = false;
    function scratch(x, y) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        ctx.fill();
    }
    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const cy = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: cx - rect.left, y: cy - rect.top };
    }
    canvas.addEventListener("mousedown", (e) => { isDrawing = true; const p = getPos(e); scratch(p.x, p.y); });
    canvas.addEventListener("mousemove", (e) => { if (isDrawing) { const p = getPos(e); scratch(p.x, p.y); } });
    window.addEventListener("mouseup", () => { isDrawing = false; });
    canvas.addEventListener("touchstart", (e) => { e.preventDefault(); isDrawing = true; const p = getPos(e); scratch(p.x, p.y); }, { passive: false });
    canvas.addEventListener("touchmove", (e) => { e.preventDefault(); if (isDrawing) { const p = getPos(e); scratch(p.x, p.y); } }, { passive: false });
    canvas.addEventListener("touchend", () => { isDrawing = false; });
}

// 2. MINI AHORCADO
function initHangman(container, item) {
    const word = item.secretWord.toUpperCase();
    let guessed = [];
    let lives = 6;
    function renderHangman() {
        const displayWord = word.split("").map(l => guessed.includes(l) ? l : "_").join(" ");
        const hearts = "❤️".repeat(lives) + "🖤".repeat(6 - lives);
        container.innerHTML = `
            <p style="font-size:0.95rem; margin-bottom:0.5rem;">${item.hint}</p>
            <div class="hangman-lives">${hearts}</div>
            <div class="hangman-word">${displayWord}</div>
            <div id="hangman-status"></div>
            <div class="keyboard-grid" id="hangman-keys"></div>
        `;
        if (!displayWord.includes("_")) {
            document.getElementById("hangman-status").innerHTML = `<div class="voucher-box">${item.winPrize}</div>`;
            return;
        }
        if (lives <= 0) {
            document.getElementById("hangman-status").innerHTML = `
                <p style="color:#c9184a; font-weight:bold;">¡Ups! La palabra era <strong>${word}</strong>.</p>
                <button class="btn-action" id="retry-hangman">Intentar de nuevo 🔄</button>
            `;
            document.getElementById("retry-hangman").onclick = () => initHangman(container, item);
            return;
        }
        "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").forEach(char => {
            const btn = document.createElement("button");
            btn.classList.add("key-btn");
            btn.innerText = char;
            btn.disabled = guessed.includes(char);
            btn.onclick = () => { guessed.push(char); if (!word.includes(char)) lives--; renderHangman(); };
            document.getElementById("hangman-keys").appendChild(btn);
        });
    }
    renderHangman();
}

// 3. RULETA NAVIDEÑA
let currentRotation = 0;
function initWheel(container, item) {
    container.innerHTML = `
        <p>¡Gira la ruleta navideña y descubre qué premio te toca hoy! 🎄</p>
        <div class="wheel-container">
            <div class="wheel-pointer">🔻</div>
            <div class="wheel-circle" id="wheel-spinner"><div class="wheel-center">💘</div></div>
        </div>
        <button class="btn-action" id="spin-btn">🎲 ¡Girar Ruleta!</button>
        <div id="wheel-result"></div>
    `;
    const spinBtn = document.getElementById("spin-btn");
    const wheel = document.getElementById("wheel-spinner");
    spinBtn.onclick = () => {
        spinBtn.disabled = true;
        currentRotation += 1440 + Math.floor(Math.random() * 360);
        wheel.style.transform = `rotate(${currentRotation}deg)`;
        setTimeout(() => {
            const prize = item.prizes[Math.floor(Math.random() * item.prizes.length)];
            document.getElementById("wheel-result").innerHTML = `<div class="voucher-box">🎉 ¡TE HA TOCADO!<br>${prize}</div>`;
            spinBtn.innerText = "Volver a girar 🔄";
            spinBtn.disabled = false;
        }, 4100);
    };
}

// 4. ATRAPA REGALOS
function initCatcher(container, item) {
    let score = 0, active = true;
    container.innerHTML = `
        <p>Desliza el dedo por el cuadro para mover el trineo y atrapar <strong>${item.goal} regalos</strong> 🎁</p>
        <div style="font-weight:800; color:#8f1d3f; margin-top:5px;">Puntos: <span id="catch-score">0</span> / ${item.goal}</div>
        <div class="catcher-area" id="catcher-area"><div class="catcher-basket" id="catcher-basket">🛷</div></div>
    `;
    const area = document.getElementById("catcher-area");
    const basket = document.getElementById("catcher-basket");
    let basketX = 140;
    function moveBasket(cx) {
        const rect = area.getBoundingClientRect();
        basketX = Math.max(25, Math.min(rect.width - 25, cx - rect.left));
        basket.style.left = basketX + "px";
    }
    area.addEventListener("mousemove", (e) => moveBasket(e.clientX));
    area.addEventListener("touchmove", (e) => { e.preventDefault(); moveBasket(e.touches[0].clientX); }, { passive: false });

    const spawner = setInterval(() => {
        if (!active || !document.getElementById("catcher-area")) { clearInterval(spawner); return; }
        const drop = document.createElement("div");
        drop.classList.add("falling-item");
        drop.innerText = ["🎁", "💘", "🎄", "⭐"][Math.floor(Math.random() * 4)];
        const dropX = Math.random() * (area.offsetWidth - 40) + 10;
        drop.style.left = dropX + "px";
        area.appendChild(drop);
        let topPos = -20;
        const fall = setInterval(() => {
            if (!active) { clearInterval(fall); drop.remove(); return; }
            topPos += 4;
            drop.style.top = topPos + "px";
            if (topPos > 185 && topPos < 225 && Math.abs(dropX - basketX) < 38) {
                score++;
                document.getElementById("catch-score").innerText = score;
                drop.remove(); clearInterval(fall);
                if (score >= item.goal) {
                    active = false; clearInterval(spawner);
                    area.innerHTML = `<div style="padding:3rem 1rem; color:#fff; font-weight:bold;">🎉 ¡CONSEGUIDO!</div>`;
                    container.innerHTML += `<div class="voucher-box">${item.winPrize}</div>`;
                }
            } else if (topPos > 245) { drop.remove(); clearInterval(fall); }
        }, 25);
    }, 750);
}

// 5. APLASTA AL GRINCH
function initWhackGrinch(container, item) {
    let hits = 0, running = true;
    container.innerHTML = `
        <p>¡Dale rápido al Grinch 🤢 (${item.goal} veces) y evita darle a Papá Noel 🎅!</p>
        <div style="font-weight:800; color:#8f1d3f; margin-top:5px;">Aciertos: <span id="grinch-score">0</span> / ${item.goal}</div>
        <div class="mole-grid" id="mole-grid"></div>
    `;
    const grid = document.getElementById("mole-grid");
    for (let i = 0; i < 9; i++) {
        const hole = document.createElement("div");
        hole.classList.add("mole-hole");
        grid.appendChild(hole);
    }
    const holes = document.querySelectorAll(".mole-hole");
    const timer = setInterval(() => {
        if (!running || !document.getElementById("mole-grid")) { clearInterval(timer); return; }
        holes.forEach(h => { h.innerText = ""; h.onclick = null; });
        const idx = Math.floor(Math.random() * 9);
        const isGrinch = Math.random() > 0.25;
        holes[idx].innerText = isGrinch ? "🤢" : "🎅";
        holes[idx].onclick = () => {
            if (!running) return;
            if (isGrinch) {
                hits++; holes[idx].innerText = "💥";
                document.getElementById("grinch-score").innerText = hits;
                if (hits >= item.goal) {
                    running = false; clearInterval(timer);
                    container.innerHTML += `<div class="voucher-box">${item.winPrize}</div>`;
                }
            } else {
                hits = Math.max(0, hits - 1);
                document.getElementById("grinch-score").innerText = hits;
            }
            holes[idx].onclick = null;
        };
    }, 750);
}

// 6. SIMÓN DICE NAVIDEÑO
function initSimon(container, item) {
    const colors = [
        { bg: "#e63946", icon: "🎄" }, { bg: "#2a9d8f", icon: "🎁" },
        { bg: "#e9c46a", icon: "⭐" }, { bg: "#8338ec", icon: "💘" }
    ];
    let sequence = [], playerStep = 0, canClick = false;
    container.innerHTML = `
        <p>Memoriza la secuencia hasta llegar al <strong>nivel 4</strong> ✨</p>
        <div id="simon-status" style="font-weight:800; color:#8f1d3f; margin-top:5px;">Nivel: 1 / 4</div>
        <div class="simon-grid" id="simon-grid"></div>
    `;
    const grid = document.getElementById("simon-grid");
    colors.forEach((c, idx) => {
        const btn = document.createElement("button");
        btn.classList.add("simon-btn"); btn.style.background = c.bg; btn.innerText = c.icon;
        btn.onclick = () => handleSimonClick(idx);
        grid.appendChild(btn);
    });
    const btns = document.querySelectorAll(".simon-btn");
    function flash(idx) { btns[idx].classList.add("lit"); setTimeout(() => btns[idx].classList.remove("lit"), 400); }
    function nextRound() {
        canClick = false; playerStep = 0;
        sequence.push(Math.floor(Math.random() * 4));
        document.getElementById("simon-status").innerText = `Nivel: ${sequence.length} / 4`;
        sequence.forEach((val, i) => {
            setTimeout(() => { flash(val); if (i === sequence.length - 1) canClick = true; }, (i + 1) * 650);
        });
    }
    function handleSimonClick(idx) {
        if (!canClick) return;
        flash(idx);
        if (idx === sequence[playerStep]) {
            playerStep++;
            if (playerStep === sequence.length) {
                if (sequence.length >= 4) {
                    canClick = false;
                    container.innerHTML += `<div class="voucher-box">${item.winPrize}</div>`;
                } else setTimeout(nextRound, 700);
            }
        } else {
            alert("¡Uy! Empezamos de nuevo 😉");
            sequence = []; setTimeout(nextRound, 500);
        }
    }
    setTimeout(nextRound, 500);
}

// 7. MEMORY DE PAREJAS (DÍA 9)
function initMiniMemory(container, item) {
    const icons = ["🎄", "💘", "🎁", "🐧", "❄️", "🍷"];
    const deck = [...icons, ...icons].sort(() => Math.random() - 0.5);
    let flipped = [], matched = 0, lock = false;

    container.innerHTML = `<p>Encuentra las 6 parejas navideñas 🧩</p><div class="mini-memory-grid" id="mem-grid"></div>`;
    const grid = document.getElementById("mem-grid");

    deck.forEach((emoji) => {
        const card = document.createElement("div");
        card.classList.add("mini-mem-card");
        card.innerText = emoji;
        card.onclick = () => {
            if (lock || card.classList.contains("revealed")) return;
            card.classList.add("revealed");
            flipped.push(card);
            if (flipped.length === 2) {
                lock = true;
                if (flipped[0].innerText === flipped[1].innerText) {
                    matched++;
                    flipped = []; lock = false;
                    if (matched === 6) container.innerHTML += `<div class="voucher-box">${item.winPrize}</div>`;
                } else {
                    setTimeout(() => {
                        flipped[0].classList.remove("revealed");
                        flipped[1].classList.remove("revealed");
                        flipped = []; lock = false;
                    }, 700);
                }
            }
        };
        grid.appendChild(card);
    });
}

// 8. BOLA DE CRISTAL (DÍA 11)
function initCrystalBall(container, item) {
    let taps = 0;
    container.innerHTML = `
        <p>Toca la bola mágica para descubrir mensajes para ti 🔮</p>
        <div id="crystal-btn" style="font-size:4.5rem; cursor:pointer; margin:0.8rem 0; user-select:none;">🔮</div>
        <div id="crystal-msg" class="voucher-box">Pulsa la bola...</div>
    `;
    document.getElementById("crystal-btn").onclick = () => {
        taps++;
        const phrase = item.phrases[Math.floor(Math.random() * item.phrases.length)];
        document.getElementById("crystal-msg").innerHTML = phrase;
        if (taps === 3) {
            container.innerHTML += `<div class="voucher-box" style="border-style:solid;">${item.winPrize}</div>`;
        }
    };
}

// 9. LIENZO MÁGICO CREATIVO (DÍA 13)
function initMagicPaint(container, item) {
    let strokes = 0, unlocked = false;
    container.innerHTML = `
        <p>Pinta pasando el dedo por el cielo nocturno para encender las estrellas y descubrir tu mensaje ✨</p>
        <div class="magic-canvas-box">
            <canvas id="magic-reveal-canvas" width="260" height="180"></canvas>
        </div>
        <div id="magic-prize-area"></div>
    `;
    const canvas = document.getElementById("magic-reveal-canvas");
    const ctx = canvas.getContext("2d");
    let drawing = false;

    function paintStar(x, y) {
        const colors = ["#ffd166", "#ffb3c6", "#ff758f", "#ffffff"];
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.font = "18px Arial";
        ctx.fillText(["✨", "💖", "⭐", "❄️"][Math.floor(Math.random() * 4)], x - 8, y + 6);
        strokes++;
        if (strokes >= 35 && !unlocked) {
            unlocked = true;
            ctx.fillStyle = "rgba(43, 9, 28, 0.85)";
            ctx.fillRect(0, 55, 260, 70);
            ctx.fillStyle = "#ffd166";
            ctx.font = "bold 20px Dancing Script, cursive";
            ctx.textAlign = "center";
            ctx.fillText("Eres mi estrella favorita, Morrr 💘", 130, 95);
            document.getElementById("magic-prize-area").innerHTML = `<div class="voucher-box">${item.winPrize}</div>`;
        }
    }

    function getPos(e) {
        const r = canvas.getBoundingClientRect();
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const cy = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: cx - r.left, y: cy - r.top };
    }

    canvas.addEventListener("mousedown", (e) => { drawing = true; const p = getPos(e); paintStar(p.x, p.y); });
    canvas.addEventListener("mousemove", (e) => { if (drawing) { const p = getPos(e); paintStar(p.x, p.y); } });
    window.addEventListener("mouseup", () => drawing = false);
    canvas.addEventListener("touchstart", (e) => { e.preventDefault(); drawing = true; const p = getPos(e); paintStar(p.x, p.y); }, { passive: false });
    canvas.addEventListener("touchmove", (e) => { e.preventDefault(); if (drawing) { const p = getPos(e); paintStar(p.x, p.y); } }, { passive: false });
    canvas.addEventListener("touchend", () => drawing = false);
}

// 10. FLAPPY RENO FÁCIL A 3 PUNTOS (DÍA 14)
function initFlappyReno(container, item) {
    container.innerHTML = `
        <p>Toca la pantalla suavemente para esquivar <strong>${item.goal} chimeneas</strong> 🦌</p>
        <canvas id="flappy-canvas" width="280" height="220"></canvas>
    `;
    const canvas = document.getElementById("flappy-canvas");
    const ctx = canvas.getContext("2d");
    let y = 100, vy = 0, pipeX = 300, gapY = 50, score = 0, running = true;

    function jump() { if (running) vy = -3.4; }
    canvas.addEventListener("mousedown", jump);
    canvas.addEventListener("touchstart", (e) => { e.preventDefault(); jump(); }, { passive: false });

    const loop = setInterval(() => {
        if (!running || !document.getElementById("flappy-canvas")) { clearInterval(loop); return; }
        vy += 0.14; // Caída muy suave
        y += vy;
        pipeX -= 1.6; // Velocidad lenta
        const gapHeight = 120; // Hueco muy amplio

        if (pipeX < -35) {
            pipeX = 285; gapY = Math.random() * 60 + 20; score++;
            if (score >= item.goal) {
                running = false; clearInterval(loop);
                container.innerHTML += `<div class="voucher-box">${item.winPrize}</div>`;
                return;
            }
        }
        ctx.clearRect(0, 0, 280, 220);
        ctx.fillStyle = "#ffd166";
        ctx.fillRect(pipeX, 0, 30, gapY);
        ctx.fillRect(pipeX, gapY + gapHeight, 30, 220);
        ctx.font = "24px Arial";
        ctx.fillText("🦌", 40, y);
        ctx.fillStyle = "#fff"; ctx.font = "bold 14px Nunito";
        ctx.fillText(`Puntos: ${score}/${item.goal}`, 10, 20);

        if (y > 218 || y < 8 || (pipeX < 58 && pipeX > 20 && (y - 14 < gapY || y > gapY + gapHeight))) {
            y = 100; vy = 0; pipeX = 300; score = 0;
        }
    }, 25);
}

// 11. QUIZ RELÁMPAGO (DÍA 17)
function initQuiz(container, item) {
    let idx = 0;
    function renderQ() {
        if (idx >= item.questions.length) {
            container.innerHTML = `<div class="voucher-box">${item.winPrize}</div>`;
            return;
        }
        const q = item.questions[idx];
        container.innerHTML = `<p style="font-weight:800; margin-bottom:0.8rem;">${q.q}</p><div id="q-opts"></div>`;
        q.opts.forEach((opt, i) => {
            const btn = document.createElement("button");
            btn.classList.add("quiz-opt"); btn.innerText = opt;
            btn.onclick = () => {
                if (i === q.a) { idx++; renderQ(); }
                else alert("¡Casi, Morrr! Prueba otra vez 😉");
            };
            document.getElementById("q-opts").appendChild(btn);
        });
    }
    renderQ();
}

// 12. PUZZLE DESLIZANTE 3x3 (DÍA 20)
function initSlidingPuzzle(container, item) {
    let tiles = [1, 2, 3, 4, 5, 6, 7, 0, 8];
    function renderPuzzle() {
        container.innerHTML = `<p>Ordena los números del 1 al 8 tocando las fichas junto al hueco 🧩</p><div class="puzzle-grid" id="puz-grid"></div>`;
        const grid = document.getElementById("puz-grid");
        tiles.forEach((val, i) => {
            const div = document.createElement("div");
            div.classList.add("puzzle-tile");
            if (val === 0) div.classList.add("empty");
            else div.innerText = val;
            div.onclick = () => {
                const emptyIdx = tiles.indexOf(0);
                const validMoves = [emptyIdx - 1, emptyIdx + 1, emptyIdx - 3, emptyIdx + 3];
                if (validMoves.includes(i) && !(emptyIdx % 3 === 0 && i === emptyIdx - 1) && !(emptyIdx % 3 === 2 && i === emptyIdx + 1)) {
                    [tiles[i], tiles[emptyIdx]] = [tiles[emptyIdx], tiles[i]];
                    renderPuzzle();
                    if (tiles.join("") === "123456780") {
                        container.innerHTML += `<div class="voucher-box">${item.winPrize}</div>`;
                    }
                }
            };
            grid.appendChild(div);
        });
    }
    renderPuzzle();
}

// 13. CAJA FUERTE SECRETA (DÍA 22)
function initSafeLock(container, item) {
    let current = [0, 0, 0];
    function renderSafe() {
        container.innerHTML = `
            <p>${item.hint}</p>
            <div class="safe-dials">
                ${current.map((num, idx) => `
                    <div class="dial-col">
                        <button class="dial-btn" onclick="changeDial(${idx}, 1)">▲</button>
                        <div class="dial-num">${num}</div>
                        <button class="dial-btn" onclick="changeDial(${idx}, -1)">▼</button>
                    </div>
                `).join("")}
            </div>
            <button class="btn-action" id="open-safe-btn">🔓 Abrir Caja Fuerte</button>
            <div id="safe-result"></div>
        `;
        window.changeDial = (idx, delta) => {
            current[idx] = (current[idx] + delta + 10) % 10;
            renderSafe();
        };
        document.getElementById("open-safe-btn").onclick = () => {
            if (current[0] === item.code[0] && current[1] === item.code[1] && current[2] === item.code[2]) {
                document.getElementById("safe-result").innerHTML = `<div class="voucher-box">${item.winPrize}</div>`;
            } else {
                alert("¡Combinación incorrecta! Lee bien la pista, Morrr 😉");
            }
        };
    }
    renderSafe();
}

// 14. CORAZÓN LATIDOS FINAL (DÍA 24)
function initFinalHeart(container, item) {
    let taps = 0;
    const needed = 15;
    container.innerHTML = `
        <p>Dale <strong>15 toques rápidos</strong> al corazón para abrir tu carta final de Nochebuena 💌</p>
        <div class="big-heart-btn" id="final-heart-tap">💖</div>
        <div class="progress-bar"><div class="progress-fill" id="final-heart-bar"></div></div>
    `;
    document.getElementById("final-heart-tap").onclick = () => {
        taps++;
        document.getElementById("final-heart-bar").style.width = `${(taps / needed) * 100}%`;
        if (taps >= needed) {
            container.innerHTML = item.letterHtml;
        }
    };
}

// ==========================================
// CONTROLES MODAL, MÚSICA, NIEVE Y REINICIO
// ==========================================
function closeModal() {
    document.getElementById("surprise-modal").classList.remove("active");
    document.getElementById("modal-body").innerHTML = "";
}

function closeModalOutside(e) {
    if (e.target.id === "surprise-modal") closeModal();
}

let isPlaying = false;
function toggleMusic() {
    const audio = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");
    if (isPlaying) { audio.pause(); btn.innerText = "🔇"; }
    else {
        audio.play().catch(() => alert("Añade 'cancion.mp3' en la carpeta assets para que suene 🎵"));
        btn.innerText = "🎵";
    }
    isPlaying = !isPlaying;
}

function createSnow() {
    const container = document.getElementById("snow-container");
    const flakes = ["❄️", "✨", "•"];
    setInterval(() => {
        const flake = document.createElement("div");
        flake.classList.add("snowflake");
        flake.innerText = flakes[Math.floor(Math.random() * flakes.length)];
        flake.style.left = Math.random() * 100 + "vw";
        flake.style.fontSize = (Math.random() * 12 + 8) + "px";
        flake.style.animationDuration = (Math.random() * 4 + 4) + "s";
        container.appendChild(flake);
        setTimeout(() => flake.remove(), 8000);
    }, 350);
}

// Reinicio secreto pulsando 5 veces el título principal
let titleTaps = 0;
document.querySelector("h1").addEventListener("click", () => {
    titleTaps++;
    if (titleTaps >= 5) {
        if (confirm("¿Quieres reiniciar todos los días abiertos a 0? 🔄")) {
            localStorage.removeItem("adviento_victoria_opened");
            location.reload();
        }
        titleTaps = 0;
    }
});

window.onload = () => {
    renderCalendar();
    createSnow();
};