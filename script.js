/* ============================================
   Monitor.IA — Atual Assessoria — Script v2
   ============================================ */

// ======= LOGO BASE64 =======
var LOGO_B64 = "data:image/png;base64,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";

// ======= DEFAULT OPERADORES =======
var DEFAULT_OPERADORES = [
    { nome: "DÉBORA FERREIRA GOMES", turno: "Manhã" },
    { nome: "EDUARDA REZENDES", turno: "Manhã" },
    { nome: "EDVANE BERNARDO DA SILVA", turno: "Manhã" },
    { nome: "LAIS MESSIAS DE OLIVEIRA", turno: "Manhã" },
    { nome: "MARIA EDUARDA DE LIMA MARA", turno: "Manhã" },
    { nome: "MARIA EDUARDA PRATES FERREIRA", turno: "Manhã" },
    { nome: "MIKAELI LIMA DE MATOS", turno: "Manhã" },
    { nome: "NATHALIA PIMENTEL DE MELO MENDES", turno: "Manhã" },
    { nome: "RYAN KARLLOS SOUZA RODRIGUES", turno: "Manhã" },
    { nome: "HAMYEL DA SILVA EUSTAQUIO", turno: "Manhã" },
    { nome: "LARISSA AKEME ARAKAKI DA SILVA", turno: "Manhã" },
    { nome: "ALESSANDRA GONZALEZ BARBOSA", turno: "Manhã" },
    { nome: "FABRÍCIO MARQUES PEREIRA DA SILVA", turno: "Manhã" },
    { nome: "FRANCIELLY ARCE DE OLIVEIRA", turno: "Manhã" },
    { nome: "ÍTALA CRISTINA FRETES ROA", turno: "Manhã" },
    { nome: "JULIA ALMEIDA COLMAN", turno: "Manhã" },
    { nome: "SINDEL SOARES AMARILHA", turno: "Tarde" },
    { nome: "MARIA EDUARDA SANTOS GUIMARÃES", turno: "Tarde" },
    { nome: "ISABELLE EMILY DOS SANTOS SILVA", turno: "Tarde" },
    { nome: "MARIA EDUARDA AMORIM DE OLIVEIRA", turno: "Tarde" },
    { nome: "MARIA EDUARDA DIAS DE OLIVEIRA", turno: "Tarde" },
    { nome: "YASMIN ARAUJO DA SILVA", turno: "Tarde" },
    { nome: "JHULIA SEVERINO", turno: "Tarde" },
    { nome: "MILLENA MORAIS", turno: "Tarde" },
    { nome: "LANA LUCIA GUILHERME", turno: "Tarde" },
    { nome: "LETICIA FREIRE BRANDÃO COELHO", turno: "Tarde" },
    { nome: "NATHALIA LEITE RAMOS", turno: "Tarde" },
    { nome: "LAÍSSA NUNES", turno: "Tarde" },
    { nome: "MARIA CLARA DE JESUS VIEIRA", turno: "Tarde" },
    { nome: "EMILY MARQUES FERREIRA", turno: "Tarde" },
    { nome: "JULIA DINIZ FERREIRA DOS ANJOS", turno: "Tarde" },
    { nome: "GABRIELLY MARTINS RODRIGUES", turno: "Tarde" }
];

// ======= STORAGE KEYS =======
var SK_USERS = "monitorIA_users";
var SK_OPERADORES = "monitorIA_operadores";
var SK_AVALIACOES = "monitorIA_avaliacoes";
var SK_HISTORICO = "monitorIA_historico";
var SK_SESSION = "monitorIA_session";

// ======= STATE =======
var currentUser = null;
var clockInterval = null;
var chartInstances = {};

// ======= UTIL =======
function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return document.querySelectorAll(sel); }
function ge(id) { return document.getElementById(id); }

// ======= USERS =======
function loadUsers() {
    var raw = localStorage.getItem(SK_USERS);
    if (raw) {
        try { return JSON.parse(raw); } catch (e) { }
    }
    var defaults = [{ username: "admin", password: "admin123", role: "admin" }];
    localStorage.setItem(SK_USERS, JSON.stringify(defaults));
    return defaults;
}
function saveUsers(users) { localStorage.setItem(SK_USERS, JSON.stringify(users)); }

// ======= OPERADORES =======
function loadOperadores() {
    var raw = localStorage.getItem(SK_OPERADORES);
    if (raw) {
        try { return JSON.parse(raw); } catch (e) { }
    }
    localStorage.setItem(SK_OPERADORES, JSON.stringify(DEFAULT_OPERADORES));
    return JSON.parse(JSON.stringify(DEFAULT_OPERADORES));
}
function saveOperadores(ops) { localStorage.setItem(SK_OPERADORES, JSON.stringify(ops)); }

// ======= AVALIACOES =======
function getMonthKey() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
}
function loadAvaliacoes() {
    var raw = localStorage.getItem(SK_AVALIACOES);
    if (raw) { try { return JSON.parse(raw); } catch (e) { } }
    return {};
}
function saveAvaliacoes(data) { localStorage.setItem(SK_AVALIACOES, JSON.stringify(data)); }

function getMonthData() {
    var all = loadAvaliacoes();
    var mk = getMonthKey();
    if (!all[mk]) { all[mk] = {}; saveAvaliacoes(all); }
    return all[mk];
}
function setMonthData(data) {
    var all = loadAvaliacoes();
    all[getMonthKey()] = data;
    saveAvaliacoes(all);
}

// ======= HISTORICO =======
function loadHistorico() {
    var raw = localStorage.getItem(SK_HISTORICO);
    if (raw) { try { return JSON.parse(raw); } catch (e) { } }
    return {};
}
function saveHistorico(h) { localStorage.setItem(SK_HISTORICO, JSON.stringify(h)); }

// ======= SCHEDULE =======
function getBusinessDaysInMonth(year, month) {
    var days = [];
    var d = new Date(year, month, 1);
    while (d.getMonth() === month) {
        var dow = d.getDay();
        if (dow !== 0 && dow !== 6) days.push(new Date(d));
        d.setDate(d.getDate() + 1);
    }
    return days;
}

function getScheduleForMonth() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var bDays = getBusinessDaysInMonth(year, month);
    var ops = loadOperadores();
    var totalOps = ops.length;
    var opsPerDay = 7;
    var schedule = {};

    for (var d = 0; d < bDays.length; d++) {
        var dateKey = bDays[d].toISOString().split("T")[0];
        var dayOps = [];
        for (var s = 0; s < opsPerDay; s++) {
            var idx = (d * opsPerDay + s) % totalOps;
            dayOps.push(ops[idx].nome);
        }
        schedule[dateKey] = dayOps;
    }
    return schedule;
}

function getTodaySchedule() {
    var sched = getScheduleForMonth();
    var today = new Date().toISOString().split("T")[0];
    return sched[today] || [];
}

function getWeekNumber(date) {
    var d = new Date(date);
    var first = new Date(d.getFullYear(), d.getMonth(), 1);
    return Math.ceil((d.getDate() + first.getDay()) / 7);
}

// ======= LOGIN =======
function doLogin() {
    var username = ge("loginUser").value.trim().toLowerCase();
    var password = ge("loginPass").value;
    var users = loadUsers();
    var found = null;
    for (var i = 0; i < users.length; i++) {
        if (users[i].username.toLowerCase() === username && users[i].password === password) {
            found = users[i]; break;
        }
    }
    if (!found) {
        ge("loginError").style.display = "block";
        return;
    }
    ge("loginError").style.display = "none";
    currentUser = found;
    localStorage.setItem(SK_SESSION, JSON.stringify({ username: found.username, role: found.role }));
    showApp();
}
function doLogout() {
    localStorage.removeItem(SK_SESSION);
    currentUser = null;
    ge("appContainer").style.display = "none";
    ge("loginScreen").style.display = "flex";
    ge("loginUser").value = "";
    ge("loginPass").value = "";
    if (clockInterval) clearInterval(clockInterval);
}
function checkSession() {
    var raw = localStorage.getItem(SK_SESSION);
    if (!raw) return false;
    try {
        var s = JSON.parse(raw);
        var users = loadUsers();
        for (var i = 0; i < users.length; i++) {
            if (users[i].username === s.username) { currentUser = users[i]; return true; }
        }
    } catch (e) { }
    return false;
}

// ======= APP INIT =======
function showApp() {
    ge("loginScreen").style.display = "none";
    ge("appContainer").style.display = "flex";
    ge("headerUserName").textContent = currentUser.username;

    // Set logo
    ge("loginLogoImg").src = LOGO_B64;
    ge("sidebarLogoImg").src = LOGO_B64;

    startClock();
    switchTab("visaoGeral");
}

function startClock() {
    if (clockInterval) clearInterval(clockInterval);
    function tick() {
        var now = new Date();
        var opts = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        ge("headerDate").textContent = now.toLocaleDateString("pt-BR", opts);
        ge("headerClock").textContent = now.toLocaleTimeString("pt-BR");
        var el = ge("visaoGeralDatetime");
        if (el) el.textContent = now.toLocaleDateString("pt-BR", opts) + " — " + now.toLocaleTimeString("pt-BR");
    }
    tick();
    clockInterval = setInterval(tick, 1000);
}

// ======= TABS =======
function switchTab(tab) {
    qsa(".tab-content").forEach(function (el) { el.classList.remove("active"); });
    qsa(".nav-btn").forEach(function (el) { el.classList.remove("active"); });
    var section = ge("tab-" + tab);
    if (section) section.classList.add("active");
    var btn = qs('.nav-btn[data-tab="' + tab + '"]');
    if (btn) btn.classList.add("active");

    if (tab === "visaoGeral") renderVisaoGeral();
    else if (tab === "avaliacoes") renderAvaliacoes();
    else if (tab === "evolucao") renderEvolucao();
    else if (tab === "operadores") renderOperadores();
    else if (tab === "calibragem") renderCalibragem();
    else if (tab === "configuracoes") renderConfiguracoes();
}
function toggleSidebar() { ge("sidebar").classList.toggle("open"); }

// ======= MODAL =======
function abrirModal(title, bodyHTML) {
    ge("modalTitle").textContent = title;
    ge("modalBody").innerHTML = bodyHTML;
    ge("modalOverlay").style.display = "flex";
}
function fecharModal() { ge("modalOverlay").style.display = "none"; }

// ======= RENDER: VISÃO GERAL =======
function renderVisaoGeral() {
    var ops = loadOperadores();
    var md = getMonthData();
    var sched = getScheduleForMonth();
    var totalSlots = 0;
    var totalAvaliados = 0;
    var somaNotas = 0;
    var countNotas = 0;

    var allDates = Object.keys(sched);
    for (var i = 0; i < allDates.length; i++) {
        var dt = allDates[i];
        var names = sched[dt];
        totalSlots += names.length;
        for (var j = 0; j < names.length; j++) {
            var key = dt + "||" + names[j];
            if (md[key] && md[key].nota !== null && md[key].nota !== undefined && md[key].nota !== "") {
                totalAvaliados++;
                somaNotas += parseFloat(md[key].nota);
                countNotas++;
            }
        }
    }

    var pendentes = totalSlots - totalAvaliados;
    var mediaMes = countNotas > 0 ? (somaNotas / countNotas).toFixed(1) : "—";
    var pctConcluido = totalSlots > 0 ? ((totalAvaliados / totalSlots) * 100).toFixed(1) : 0;

    ge("kpiGrid").innerHTML =
        kpiCard("groups", "Total Operadores", ops.length, "accent") +
        kpiCard("assignment_turned_in", "Avaliados", totalAvaliados, "success") +
        kpiCard("pending_actions", "Pendentes", pendentes, "warning") +
        kpiCard("star", "Média do Mês", mediaMes, "info") +
        kpiCard("percent", "Conclusão", pctConcluido + "%", "accent");

    renderChartSemanal(sched, md);
    renderChartStatus(totalAvaliados, pendentes);
}
function kpiCard(icon, label, value, color) {
    return '<div class="kpi-card"><div class="kpi-label"><span class="material-icons-round">' + icon +
        '</span>' + label + '</div><div class="kpi-value ' + color + '">' + value + '</div></div>';
}

function destroyChart(name) {
    if (chartInstances[name]) { chartInstances[name].destroy(); chartInstances[name] = null; }
}

function renderChartSemanal(sched, md) {
    destroyChart("semanal");
    var weeks = {};
    var dates = Object.keys(sched).sort();
    for (var i = 0; i < dates.length; i++) {
        var wk = "Sem " + getWeekNumber(new Date(dates[i] + "T12:00:00"));
        if (!weeks[wk]) weeks[wk] = { total: 0, feito: 0 };
        var names = sched[dates[i]];
        weeks[wk].total += names.length;
        for (var j = 0; j < names.length; j++) {
            var key = dates[i] + "||" + names[j];
            if (md[key] && md[key].nota !== null && md[key].nota !== undefined && md[key].nota !== "") weeks[wk].feito++;
        }
    }
    var labels = Object.keys(weeks);
    var data1 = labels.map(function (l) { return weeks[l].total; });
    var data2 = labels.map(function (l) { return weeks[l].feito; });

    var ctx = ge("chartSemanal").getContext("2d");
    chartInstances["semanal"] = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                { label: "Programado", data: data1, backgroundColor: "rgba(108,92,231,0.3)", borderColor: "#6c5ce7", borderWidth: 1 },
                { label: "Avaliado", data: data2, backgroundColor: "rgba(0,206,201,0.3)", borderColor: "#00cec9", borderWidth: 1 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: true,
            plugins: { legend: { labels: { color: "#8b8fa7", font: { family: "Plus Jakarta Sans", size: 11 } } } },
            scales: {
                x: { ticks: { color: "#5c6078", font: { family: "Plus Jakarta Sans", size: 10 } }, grid: { color: "#2a2d3e" } },
                y: { beginAtZero: true, ticks: { color: "#5c6078", font: { family: "Plus Jakarta Sans", size: 10 } }, grid: { color: "#2a2d3e" } }
            }
        }
    });
}

function renderChartStatus(avaliados, pendentes) {
    destroyChart("status");
    var ctx = ge("chartStatus").getContext("2d");
    chartInstances["status"] = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Avaliados", "Pendentes"],
            datasets: [{ data: [avaliados, pendentes], backgroundColor: ["#00cec9", "#fdcb6e"], borderWidth: 0 }]
        },
        options: {
            responsive: true, maintainAspectRatio: true, cutout: "70%",
            plugins: { legend: { labels: { color: "#8b8fa7", font: { family: "Plus Jakarta Sans", size: 11 } } } }
        }
    });
}

// ======= RENDER: AVALIAÇÕES =======
function renderAvaliacoes() {
    var todayOps = getTodaySchedule();
    var md = getMonthData();
    var today = new Date().toISOString().split("T")[0];
    var ops = loadOperadores();

    // Dashboard
    var totalHoje = todayOps.length;
    var feitoHoje = 0;
    var somaHoje = 0;
    for (var i = 0; i < todayOps.length; i++) {
        var k = today + "||" + todayOps[i];
        if (md[k] && md[k].nota !== null && md[k].nota !== undefined && md[k].nota !== "") {
            feitoHoje++;
            somaHoje += parseFloat(md[k].nota);
        }
    }
    var mediaHoje = feitoHoje > 0 ? (somaHoje / feitoHoje).toFixed(1) : "—";

    ge("avalDashboard").innerHTML =
        '<div class="aval-dash-card"><div class="dash-label">Programados Hoje</div><div class="dash-value" style="color:var(--accent-light)">' + totalHoje + '</div></div>' +
        '<div class="aval-dash-card"><div class="dash-label">Avaliados Hoje</div><div class="dash-value" style="color:var(--success)">' + feitoHoje + '</div></div>' +
        '<div class="aval-dash-card"><div class="dash-label">Pendentes Hoje</div><div class="dash-value" style="color:var(--warning)">' + (totalHoje - feitoHoje) + '</div></div>' +
        '<div class="aval-dash-card"><div class="dash-label">Média Hoje</div><div class="dash-value" style="color:var(--info)">' + mediaHoje + '</div></div>';

    // Cards
    if (todayOps.length === 0) {
        ge("avalList").innerHTML = '<p style="color:var(--text-muted);padding:20px;">Nenhum operador programado para hoje (final de semana ou sem programação).</p>';
        return;
    }

    var html = "";
    for (var i = 0; i < todayOps.length; i++) {
        var nome = todayOps[i];
        var key = today + "||" + nome;
        var av = md[key] || { nota: "", obs: "" };
        var turno = "—";
        for (var o = 0; o < ops.length; o++) { if (ops[o].nome === nome) { turno = ops[o].turno; break; } }
        var isPendente = av.nota === null || av.nota === undefined || av.nota === "";
        var badgeClass = isPendente ? "badge-pendente" : "badge-aplicado";
        var badgeText = isPendente ? "Pendente" : "Nota: " + av.nota;
        var safeNome = nome.replace(/"/g, "&quot;");

        html += '<div class="aval-card">' +
            '<div class="aval-card-header"><span class="aval-card-name">' + nome + '</span>' +
            '<span class="aval-card-badge ' + badgeClass + '">' + badgeText + '</span></div>' +
            '<div class="aval-card-info"><span><span class="material-icons-round">schedule</span>' + turno + '</span>' +
            '<span><span class="material-icons-round">calendar_today</span>' + today + '</span></div>' +
            '<div class="aval-card-fields">' +
            '<div class="field-row"><label>Nota (0-100)</label>' +
            '<input type="number" min="0" max="100" id="nota_' + i + '" value="' + (av.nota || "") + '"></div>' +
            '<div class="field-row"><label>Ponto de Atenção</label>' +
            '<textarea id="obs_' + i + '">' + (av.obs || "") + '</textarea></div></div>' +
            '<div class="aval-card-actions">' +
            '<button class="btn-save" onclick="salvarAvaliacao(\'' + safeNome + '\',' + i + ')"><span class="material-icons-round" style="font-size:16px">save</span> Salvar</button>' +
            '<button class="btn-reset" onclick="resetAvaliacao(\'' + safeNome + '\',' + i + ')"><span class="material-icons-round" style="font-size:16px">restart_alt</span></button>' +
            '</div></div>';
    }
    ge("avalList").innerHTML = html;
}

function salvarAvaliacao(nome, idx) {
    var nota = ge("nota_" + idx).value;
    var obs = ge("obs_" + idx).value;
    if (nota === "" || parseFloat(nota) < 0 || parseFloat(nota) > 100) return;
    var today = new Date().toISOString().split("T")[0];
    var md = getMonthData();
    md[today + "||" + nome] = { nota: parseFloat(nota), obs: obs };
    setMonthData(md);
    renderAvaliacoes();
}
function resetAvaliacao(nome, idx) {
    var today = new Date().toISOString().split("T")[0];
    var md = getMonthData();
    delete md[today + "||" + nome];
    setMonthData(md);
    renderAvaliacoes();
}

// ======= RENDER: EVOLUÇÃO =======
function renderEvolucao() {
    var sched = getScheduleForMonth();
    var md = getMonthData();
    var weeks = {};
    var dates = Object.keys(sched).sort();
    for (var i = 0; i < dates.length; i++) {
        var wk = getWeekNumber(new Date(dates[i] + "T12:00:00"));
        var wkLabel = "Semana " + wk;
        if (!weeks[wkLabel]) weeks[wkLabel] = { total: 0, feito: 0, soma: 0 };
        var names = sched[dates[i]];
        weeks[wkLabel].total += names.length;
        for (var j = 0; j < names.length; j++) {
            var key = dates[i] + "||" + names[j];
            if (md[key] && md[key].nota !== null && md[key].nota !== undefined && md[key].nota !== "") {
                weeks[wkLabel].feito++;
                weeks[wkLabel].soma += parseFloat(md[key].nota);
            }
        }
    }

    var html = "";
    var wkLabels = Object.keys(weeks);
    for (var i = 0; i < wkLabels.length; i++) {
        var w = weeks[wkLabels[i]];
        var pct = w.total > 0 ? ((w.feito / w.total) * 100).toFixed(0) : 0;
        var media = w.feito > 0 ? (w.soma / w.feito).toFixed(1) : "—";
        html += '<div class="evolucao-week">' +
            '<h3><span class="material-icons-round" style="color:var(--accent);font-size:18px">date_range</span>' + wkLabels[i] + '</h3>' +
            '<div class="evolucao-bar"><div class="evolucao-bar-fill" style="width:' + pct + '%"></div></div>' +
            '<div class="evolucao-stats">' +
            '<span>Avaliados: <strong style="color:var(--success)">' + w.feito + '/' + w.total + '</strong></span>' +
            '<span>Conclusão: <strong style="color:var(--accent-light)">' + pct + '%</strong></span>' +
            '<span>Média: <strong style="color:var(--info)">' + media + '</strong></span>' +
            '</div></div>';
    }
    ge("evolucaoContent").innerHTML = html || '<p style="color:var(--text-muted)">Nenhuma semana calculada.</p>';
}

// ======= RENDER: OPERADORES =======
function renderOperadores() {
    var ops = loadOperadores();
    var md = getMonthData();
    var sched = getScheduleForMonth();
    var isAdmin = currentUser && currentUser.role === "admin";

    // Count evals per operator
    var evalCount = {};
    var dates = Object.keys(sched);
    for (var d = 0; d < dates.length; d++) {
        var names = sched[dates[d]];
        for (var n = 0; n < names.length; n++) {
            var key = dates[d] + "||" + names[n];
            if (!evalCount[names[n]]) evalCount[names[n]] = { total: 0, feito: 0 };
            evalCount[names[n]].total++;
            if (md[key] && md[key].nota !== null && md[key].nota !== undefined && md[key].nota !== "") evalCount[names[n]].feito++;
        }
    }

    var colors = ["#6c5ce7", "#00cec9", "#fdcb6e", "#74b9ff", "#ff6b6b", "#a29bfe", "#55efc4", "#fab1a0"];
    var html = "";
    for (var i = 0; i < ops.length; i++) {
        var op = ops[i];
        var initials = op.nome.split(" ").map(function (w) { return w[0]; }).slice(0, 2).join("");
        var color = colors[i % colors.length];
        var ec = evalCount[op.nome] || { total: 0, feito: 0 };
        var status, statusClass;
        if (ec.feito === 0) { status = "0/" + ec.total; statusClass = "pendente-status"; }
        else if (ec.feito === ec.total) { status = ec.feito + "/" + ec.total; statusClass = "completo"; }
        else { status = ec.feito + "/" + ec.total; statusClass = "parcial"; }

        var safeNome = op.nome.replace(/'/g, "\\'");
        var removeBtn = isAdmin ? '<button class="btn-icon-sm" title="Remover" onclick="confirmarRemoverOperador(\'' + safeNome + '\')"><span class="material-icons-round">delete</span></button>' : '';

        html += '<div class="operador-card">' +
            '<div class="operador-avatar" style="background:' + color + '20;color:' + color + '">' + initials + '</div>' +
            '<div class="operador-info"><div class="operador-name" title="' + op.nome + '">' + op.nome + '</div>' +
            '<div class="operador-meta">' + op.turno + '</div></div>' +
            '<span class="operador-status ' + statusClass + '">' + status + '</span>' +
            '<div class="operador-actions">' + removeBtn + '</div></div>';
    }
    ge("operadoresGrid").innerHTML = html || '<p style="color:var(--text-muted)">Nenhum operador cadastrado.</p>';
}

function abrirModalAddOperador() {
    var body = '<div class="field-group"><label>Nome do Operador</label><input type="text" id="modalOpNome" placeholder="Nome completo"></div>' +
        '<div class="field-group"><label>Turno</label><select id="modalOpTurno"><option value="Manhã">Manhã</option><option value="Tarde">Tarde</option></select></div>' +
        '<button class="btn-primary" onclick="confirmarAddOperador()">Adicionar</button>';
    abrirModal("Adicionar Operador", body);
}
function confirmarAddOperador() {
    var nome = ge("modalOpNome").value.trim().toUpperCase();
    var turno = ge("modalOpTurno").value;
    if (!nome) return;
    var ops = loadOperadores();
    for (var i = 0; i < ops.length; i++) { if (ops[i].nome === nome) { fecharModal(); return; } }
    ops.push({ nome: nome, turno: turno });
    saveOperadores(ops);
    fecharModal();
    renderOperadores();
}
function confirmarRemoverOperador(nome) {
    var body = '<p style="margin-bottom:16px;color:var(--text-secondary)">Remover operador <strong style="color:var(--text-primary)">' + nome + '</strong>?</p>' +
        '<p style="margin-bottom:16px;color:var(--text-muted);font-size:12px">As avaliações já registradas serão mantidas.</p>' +
        '<button class="btn-primary" style="background:var(--danger)" onclick="removerOperador(\'' + nome.replace(/'/g, "\\'") + '\')">Confirmar Remoção</button>';
    abrirModal("Remover Operador", body);
}
function removerOperador(nome) {
    var ops = loadOperadores();
    ops = ops.filter(function (o) { return o.nome !== nome; });
    saveOperadores(ops);
    fecharModal();
    renderOperadores();
}

// ======= RENDER: CALIBRAGEM =======
function renderCalibragem() {
    destroyChart("calibragem");
    var md = getMonthData();
    var ops = loadOperadores();
    var opNotas = {};
    var allKeys = Object.keys(md);
    for (var i = 0; i < allKeys.length; i++) {
        var parts = allKeys[i].split("||");
        if (parts.length < 2) continue;
        var nome = parts[1];
        if (md[allKeys[i]].nota !== null && md[allKeys[i]].nota !== undefined && md[allKeys[i]].nota !== "") {
            if (!opNotas[nome]) opNotas[nome] = [];
            opNotas[nome].push(parseFloat(md[allKeys[i]].nota));
        }
    }

    // Distribution chart
    var faixas = { "0-20": 0, "21-40": 0, "41-60": 0, "61-80": 0, "81-100": 0 };
    for (var n in opNotas) {
        var media = opNotas[n].reduce(function (a, b) { return a + b; }, 0) / opNotas[n].length;
        if (media <= 20) faixas["0-20"]++;
        else if (media <= 40) faixas["21-40"]++;
        else if (media <= 60) faixas["41-60"]++;
        else if (media <= 80) faixas["61-80"]++;
        else faixas["81-100"]++;
    }

    var ctx = ge("chartCalibragem").getContext("2d");
    chartInstances["calibragem"] = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(faixas),
            datasets: [{ label: "Operadores", data: Object.values(faixas), backgroundColor: ["#ff6b6b", "#fdcb6e", "#74b9ff", "#a29bfe", "#00cec9"], borderWidth: 0 }]
        },
        options: {
            responsive: true, maintainAspectRatio: true, indexAxis: "y",
            plugins: { legend: { display: false } },
            scales: {
                x: { beginAtZero: true, ticks: { color: "#5c6078", stepSize: 1, font: { family: "Plus Jakarta Sans", size: 10 } }, grid: { color: "#2a2d3e" } },
                y: { ticks: { color: "#8b8fa7", font: { family: "Plus Jakarta Sans", size: 11 } }, grid: { display: false } }
            }
        }
    });

    // Table
    var rows = [];
    for (var i = 0; i < ops.length; i++) {
        var nome = ops[i].nome;
        var notas = opNotas[nome] || [];
        var media = notas.length > 0 ? (notas.reduce(function (a, b) { return a + b; }, 0) / notas.length).toFixed(1) : "—";
        rows.push({ nome: nome, turno: ops[i].turno, avaliacoes: notas.length, media: media });
    }
    rows.sort(function (a, b) { return (parseFloat(b.media) || 0) - (parseFloat(a.media) || 0); });

    var thtml = '<table><thead><tr><th>#</th><th>Operador</th><th>Turno</th><th>Avaliações</th><th>Média</th></tr></thead><tbody>';
    for (var i = 0; i < rows.length; i++) {
        thtml += '<tr><td>' + (i + 1) + '</td><td>' + rows[i].nome + '</td><td>' + rows[i].turno + '</td><td>' + rows[i].avaliacoes + '</td><td style="font-weight:700;color:var(--accent-light)">' + rows[i].media + '</td></tr>';
    }
    thtml += '</tbody></table>';
    ge("calibragemTable").innerHTML = thtml;
}

// ======= RENDER: CONFIGURAÇÕES =======
function renderConfiguracoes() {
    renderUsersList();
    renderHistorico();
}

function renderUsersList() {
    var users = loadUsers();
    var isAdmin = currentUser && currentUser.role === "admin";
    var html = "";
    for (var i = 0; i < users.length; i++) {
        var u = users[i];
        var safeU = u.username.replace(/'/g, "\\'");
        var actions = '';
        if (isAdmin) {
            actions += '<button class="btn-sm" onclick="abrirModalAlterarSenha(\'' + safeU + '\')"><span class="material-icons-round">key</span> Senha</button>';
            if (u.username !== "admin") {
                actions += '<button class="btn-sm danger" onclick="confirmarRemoverUsuario(\'' + safeU + '\')"><span class="material-icons-round">delete</span> Remover</button>';
            }
        } else if (u.username === currentUser.username) {
            actions += '<button class="btn-sm" onclick="abrirModalAlterarSenha(\'' + safeU + '\')"><span class="material-icons-round">key</span> Minha Senha</button>';
        }
        html += '<div class="user-row"><div class="user-row-info"><div class="user-row-name">' + u.username + '</div>' +
            '<div class="user-row-role">' + (u.role === "admin" ? "Administrador" : "Operador") + '</div></div>' +
            '<div class="user-row-actions">' + actions + '</div></div>';
    }
    ge("usersListContainer").innerHTML = html;
}

function abrirModalAddUsuario() {
    var body = '<div class="field-group"><label>Usuário</label><input type="text" id="modalNewUser" placeholder="Nome de usuário"></div>' +
        '<div class="field-group"><label>Senha</label><input type="password" id="modalNewPass" placeholder="Senha"></div>' +
        '<div class="field-group"><label>Tipo</label><select id="modalNewRole"><option value="user">Operador</option><option value="admin">Administrador</option></select></div>' +
        '<button class="btn-primary" onclick="confirmarAddUsuario()">Criar Usuário</button>';
    abrirModal("Adicionar Usuário", body);
}
function confirmarAddUsuario() {
    var username = ge("modalNewUser").value.trim().toLowerCase();
    var password = ge("modalNewPass").value;
    var role = ge("modalNewRole").value;
    if (!username || !password) return;
    var users = loadUsers();
    for (var i = 0; i < users.length; i++) { if (users[i].username === username) { fecharModal(); return; } }
    users.push({ username: username, password: password, role: role });
    saveUsers(users);
    fecharModal();
    renderUsersList();
}
function abrirModalAlterarSenha(username) {
    var body = '<div class="field-group"><label>Nova Senha para <strong>' + username + '</strong></label><input type="password" id="modalNewPassChange" placeholder="Nova senha"></div>' +
        '<button class="btn-primary" onclick="confirmarAlterarSenha(\'' + username + '\')">Alterar Senha</button>';
    abrirModal("Alterar Senha", body);
}
function confirmarAlterarSenha(username) {
    var newPass = ge("modalNewPassChange").value;
    if (!newPass) return;
    var users = loadUsers();
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username) { users[i].password = newPass; break; }
    }
    saveUsers(users);
    fecharModal();
    renderUsersList();
}
function confirmarRemoverUsuario(username) {
    var body = '<p style="margin-bottom:16px;color:var(--text-secondary)">Remover o usuário <strong style="color:var(--text-primary)">' + username + '</strong>?</p>' +
        '<button class="btn-primary" style="background:var(--danger)" onclick="removerUsuario(\'' + username + '\')">Confirmar Remoção</button>';
    abrirModal("Remover Usuário", body);
}
function removerUsuario(username) {
    var users = loadUsers();
    users = users.filter(function (u) { return u.username !== username; });
    saveUsers(users);
    fecharModal();
    renderUsersList();
}

function renderHistorico() {
    var h = loadHistorico();
    var keys = Object.keys(h).sort().reverse();
    if (keys.length === 0) {
        ge("historicoContainer").innerHTML = '<p class="historico-empty">Nenhum histórico salvo.</p>';
        return;
    }
    var html = "";
    for (var i = 0; i < keys.length; i++) {
        var d = h[keys[i]];
        html += '<div class="historico-card">' +
            '<div><div class="hist-label">Mês</div><div class="hist-value">' + keys[i] + '</div></div>' +
            '<div><div class="hist-label">Avaliações</div><div class="hist-value">' + (d.totalAvaliados || 0) + '</div></div>' +
            '<div><div class="hist-label">Média</div><div class="hist-value">' + (d.media || "—") + '</div></div>' +
            '</div>';
    }
    ge("historicoContainer").innerHTML = html;
}

function resetMesAtual() {
    if (!confirm("Salvar dados atuais no histórico e resetar o mês?")) return;
    var md = getMonthData();
    var keys = Object.keys(md);
    var soma = 0;
    var count = 0;
    for (var i = 0; i < keys.length; i++) {
        if (md[keys[i]].nota !== null && md[keys[i]].nota !== undefined && md[keys[i]].nota !== "") {
            soma += parseFloat(md[keys[i]].nota);
            count++;
        }
    }
    var hist = loadHistorico();
    var mk = getMonthKey();
    hist[mk] = { totalAvaliados: count, media: count > 0 ? (soma / count).toFixed(1) : "—" };
    saveHistorico(hist);
    var all = loadAvaliacoes();
    delete all[mk];
    saveAvaliacoes(all);
    renderConfiguracoes();
    switchTab("visaoGeral");
}

function limparTodosDados() {
    if (!confirm("Apagar TODOS os dados (avaliações, histórico, operadores)? Esta ação não pode ser desfeita.")) return;
    localStorage.removeItem(SK_AVALIACOES);
    localStorage.removeItem(SK_HISTORICO);
    localStorage.removeItem(SK_OPERADORES);
    renderConfiguracoes();
    switchTab("visaoGeral");
}

// ======= PDF REPORTS =======
function pdfHeader(doc, titulo) {
    doc.setFillColor(108, 92, 231);
    doc.rect(0, 0, 210, 28, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Monitor.IA — Atual Assessoria", 14, 12);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(titulo, 14, 20);
    doc.text(new Date().toLocaleDateString("pt-BR"), 196, 12, { align: "right" });
    doc.setTextColor(0, 0, 0);
    return 36;
}

function gerarRelatorioMensalGeral() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = pdfHeader(doc, "Relatório Mensal Geral — " + getMonthKey());
    var md = getMonthData();
    var ops = loadOperadores();
    var rows = [];
    for (var i = 0; i < ops.length; i++) {
        var notas = [];
        var allKeys = Object.keys(md);
        for (var j = 0; j < allKeys.length; j++) {
            if (allKeys[j].indexOf("||" + ops[i].nome) !== -1 && md[allKeys[j]].nota !== null && md[allKeys[j]].nota !== undefined && md[allKeys[j]].nota !== "") {
                notas.push(parseFloat(md[allKeys[j]].nota));
            }
        }
        var media = notas.length > 0 ? (notas.reduce(function (a, b) { return a + b; }, 0) / notas.length).toFixed(1) : "—";
        rows.push([ops[i].nome, ops[i].turno, notas.length.toString(), media]);
    }
    doc.autoTable({
        startY: y, head: [["Operador", "Turno", "Avaliações", "Média"]],
        body: rows,
        styles: { fontSize: 8, font: "helvetica" },
        headStyles: { fillColor: [108, 92, 231] }
    });
    doc.save("relatorio_mensal_" + getMonthKey() + ".pdf");
}

function gerarRelatorioPendencias() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = pdfHeader(doc, "Relatório de Pendências — " + getMonthKey());
    var sched = getScheduleForMonth();
    var md = getMonthData();
    var rows = [];
    var dates = Object.keys(sched).sort();
    for (var d = 0; d < dates.length; d++) {
        var names = sched[dates[d]];
        for (var n = 0; n < names.length; n++) {
            var key = dates[d] + "||" + names[n];
            if (!md[key] || md[key].nota === null || md[key].nota === undefined || md[key].nota === "") {
                rows.push([dates[d], names[n]]);
            }
        }
    }
    doc.autoTable({
        startY: y, head: [["Data", "Operador"]],
        body: rows.length > 0 ? rows : [["—", "Sem pendências"]],
        styles: { fontSize: 8, font: "helvetica" },
        headStyles: { fillColor: [253, 203, 110], textColor: [0, 0, 0] }
    });
    doc.save("pendencias_" + getMonthKey() + ".pdf");
}

function gerarRelatorioPorOperador() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = pdfHeader(doc, "Relatório por Operador — " + getMonthKey());
    var md = getMonthData();
    var ops = loadOperadores();
    for (var i = 0; i < ops.length; i++) {
        var notas = [];
        var details = [];
        var allKeys = Object.keys(md).sort();
        for (var j = 0; j < allKeys.length; j++) {
            if (allKeys[j].indexOf("||" + ops[i].nome) !== -1 && md[allKeys[j]].nota !== null && md[allKeys[j]].nota !== undefined && md[allKeys[j]].nota !== "") {
                var dt = allKeys[j].split("||")[0];
                notas.push(parseFloat(md[allKeys[j]].nota));
                details.push([dt, md[allKeys[j]].nota.toString(), md[allKeys[j]].obs || ""]);
            }
        }
        if (y > 250) { doc.addPage(); y = 20; }
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(108, 92, 231);
        doc.text(ops[i].nome + " (" + ops[i].turno + ")", 14, y);
        doc.setTextColor(0, 0, 0);
        y += 4;
        doc.autoTable({
            startY: y, head: [["Data", "Nota", "Observação"]],
            body: details.length > 0 ? details : [["—", "—", "Sem avaliações"]],
            styles: { fontSize: 7, font: "helvetica" },
            headStyles: { fillColor: [108, 92, 231] },
            margin: { left: 14 }
        });
        y = doc.lastAutoTable.finalY + 8;
    }
    doc.save("por_operador_" + getMonthKey() + ".pdf");
}

function gerarRelatorioPorTurno() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = pdfHeader(doc, "Relatório por Turno — " + getMonthKey());
    var ops = loadOperadores();
    var md = getMonthData();
    var turnos = ["Manhã", "Tarde"];
    for (var t = 0; t < turnos.length; t++) {
        var turnoOps = ops.filter(function (o) { return o.turno === turnos[t]; });
        var rows = [];
        for (var i = 0; i < turnoOps.length; i++) {
            var notas = [];
            var allKeys = Object.keys(md);
            for (var j = 0; j < allKeys.length; j++) {
                if (allKeys[j].indexOf("||" + turnoOps[i].nome) !== -1 && md[allKeys[j]].nota !== null && md[allKeys[j]].nota !== undefined && md[allKeys[j]].nota !== "") {
                    notas.push(parseFloat(md[allKeys[j]].nota));
                }
            }
            var media = notas.length > 0 ? (notas.reduce(function (a, b) { return a + b; }, 0) / notas.length).toFixed(1) : "—";
            rows.push([turnoOps[i].nome, notas.length.toString(), media]);
        }
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(108, 92, 231);
        doc.text("Turno: " + turnos[t], 14, y);
        doc.setTextColor(0, 0, 0);
        y += 4;
        doc.autoTable({
            startY: y, head: [["Operador", "Avaliações", "Média"]],
            body: rows, styles: { fontSize: 8, font: "helvetica" },
            headStyles: { fillColor: [108, 92, 231] }
        });
        y = doc.lastAutoTable.finalY + 10;
    }
    doc.save("por_turno_" + getMonthKey() + ".pdf");
}

function gerarRelatorioFechamento() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = pdfHeader(doc, "Fechamento do Mês — " + getMonthKey());
    var md = getMonthData();
    var sched = getScheduleForMonth();
    var totalSlots = 0;
    var totalFeito = 0;
    var soma = 0;
    var dates = Object.keys(sched);
    for (var d = 0; d < dates.length; d++) {
        var names = sched[dates[d]];
        totalSlots += names.length;
        for (var n = 0; n < names.length; n++) {
            var key = dates[d] + "||" + names[n];
            if (md[key] && md[key].nota !== null && md[key].nota !== undefined && md[key].nota !== "") {
                totalFeito++;
                soma += parseFloat(md[key].nota);
            }
        }
    }
    var media = totalFeito > 0 ? (soma / totalFeito).toFixed(1) : "—";
    var pct = totalSlots > 0 ? ((totalFeito / totalSlots) * 100).toFixed(1) + "%" : "0%";

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text("Total Programado: " + totalSlots, 14, y); y += 7;
    doc.text("Total Avaliado: " + totalFeito, 14, y); y += 7;
    doc.text("Pendentes: " + (totalSlots - totalFeito), 14, y); y += 7;
    doc.text("Conclusão: " + pct, 14, y); y += 7;
    doc.setFont("helvetica", "bold");
    doc.text("Média Geral: " + media, 14, y);
    doc.save("fechamento_" + getMonthKey() + ".pdf");
}

function gerarRelatorioHistorico() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = pdfHeader(doc, "Histórico de Meses");
    var hist = loadHistorico();
    var keys = Object.keys(hist).sort().reverse();
    var rows = [];
    for (var i = 0; i < keys.length; i++) {
        rows.push([keys[i], (hist[keys[i]].totalAvaliados || 0).toString(), hist[keys[i]].media || "—"]);
    }
    doc.autoTable({
        startY: y, head: [["Mês", "Avaliações", "Média"]],
        body: rows.length > 0 ? rows : [["—", "—", "Sem histórico"]],
        styles: { fontSize: 9, font: "helvetica" },
        headStyles: { fillColor: [108, 92, 231] }
    });
    doc.save("historico_meses.pdf");
}

// ======= KEYPRESS ENTER =======
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && ge("loginScreen").style.display !== "none") {
        doLogin();
    }
});

// ======= INIT =======
(function init() {
    ge("loginLogoImg").src = LOGO_B64;
    if (checkSession()) {
        showApp();
    }
})();
