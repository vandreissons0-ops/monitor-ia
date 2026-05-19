/* ============================================
   Monitor.IA — Atual Assessoria
   Complete Script (HTML/CSS/JS Puro)
   ============================================ */

// ==================== CONSTANTS ====================
var OPERADORES = [
    "DÉBORA FERREIRA GOMES",
    "EDUARDA REZENDES",
    "EDVANE BERNARDO DA SILVA",
    "LAIS MESSIAS DE OLIVEIRA",
    "MARIA EDUARDA DE LIMA MARA",
    "MARIA EDUARDA PRATES FERREIRA",
    "MIKAELI LIMA DE MATOS",
    "NATHALIA PIMENTEL DE MELO MENDES",
    "RYAN KARLLOS SOUZA RODRIGUES",
    "HAMYEL DA SILVA EUSTAQUIO",
    "LARISSA AKEME ARAKAKI DA SILVA",
    "ALESSANDRA GONZALEZ BARBOSA",
    "FABRÍCIO MARQUES PEREIRA DA SILVA",
    "FRANCIELLY ARCE DE OLIVEIRA",
    "ÍTALA CRISTINA FRETES ROA",
    "JULIA ALMEIDA COLMAN",
    "SINDEL SOARES AMARILHA",
    "MARIA EDUARDA SANTOS GUIMARÃES",
    "ISABELLE EMILY DOS SANTOS SILVA",
    "MARIA EDUARDA AMORIM DE OLIVEIRA",
    "MARIA EDUARDA DIAS DE OLIVEIRA",
    "YASMIN ARAUJO DA SILVA",
    "JHULIA SEVERINO",
    "MILLENA MORAIS",
    "LANA LUCIA GUILHERME",
    "LETICIA FREIRE BRANDÃO COELHO",
    "NATHALIA LEITE RAMOS",
    "LAÍSSA NUNES",
    "MARIA CLARA DE JESUS VIEIRA",
    "EMILY MARQUES FERREIRA",
    "JULIA DINIZ FERREIRA DOS ANJOS",
    "GABRIELLY MARTINS RODRIGUES"
];

var TURNOS = {};
OPERADORES.forEach(function(op, i) {
    TURNOS[op] = i < 16 ? "Manhã" : "Tarde";
});

var TOTAL_OPERADORES = OPERADORES.length; // 32
var AVALIACOES_POR_MES = TOTAL_OPERADORES * 4; // 128
var OPERADORES_POR_DIA = 7;

var STORAGE_KEYS = {
    session: "monitorIA_session",
    avaliacoes: "monitorIA_avaliacoes",
    historico: "monitorIA_historico",
    mesAtual: "monitorIA_mesAtual"
};

// ==================== UTILITY FUNCTIONS ====================

function getMesAno(date) {
    var d = date || new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
}

function getMesAnoLabel(mesAno) {
    var parts = mesAno.split("-");
    var ano = parts[0];
    var mes = parts[1];
    var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    return meses[parseInt(mes) - 1] + " " + ano;
}

function getDataFormatada(date) {
    var d = date || new Date();
    var dias = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
    var dia = dias[d.getDay()];
    return dia + ", " + d.toLocaleDateString("pt-BR");
}

function getHoraFormatada() {
    return new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function isBusinessDay(date) {
    var day = date.getDay();
    return day !== 0 && day !== 6;
}

function getBusinessDaysInMonth(year, month) {
    var days = [];
    var lastDay = new Date(year, month + 1, 0).getDate();
    for (var d = 1; d <= lastDay; d++) {
        var date = new Date(year, month, d);
        if (isBusinessDay(date)) {
            days.push(new Date(year, month, d));
        }
    }
    return days;
}

function getISOWeek(date) {
    var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function getWeekNumber(date, businessDays) {
    var dateStr = date.toISOString().slice(0, 10);
    var weekNum = 0;
    var lastISOWeek = -1;
    for (var i = 0; i < businessDays.length; i++) {
        var bd = businessDays[i];
        var isoWeek = getISOWeek(bd);
        if (isoWeek !== lastISOWeek) {
            weekNum++;
            lastISOWeek = isoWeek;
        }
        if (bd.toISOString().slice(0, 10) === dateStr) {
            return weekNum;
        }
    }
    return 1;
}

// ==================== SCHEDULE ====================
// Every week, all 32 operators are distributed:
// Mon-Thu: 7 each (28), Fri: remaining 4
// If a week has fewer than 5 business days, the last day absorbs the rest.
// Each week uses the same 32 operators, ensuring 1 eval/operator/week = 4/month.

function getScheduleForMonth(year, month) {
    var businessDays = getBusinessDaysInMonth(year, month);
    var schedule = {};
    var weeks = {};

    // Group business days by ISO week
    businessDays.forEach(function(bd) {
        var isoW = getISOWeek(bd);
        if (!weeks[isoW]) weeks[isoW] = [];
        weeks[isoW].push(bd);
    });

    var weekKeys = Object.keys(weeks).sort(function(a, b) { return a - b; });

    weekKeys.forEach(function(wk) {
        var daysInWeek = weeks[wk];

        // Distribute all 32 operators across the days of this week
        var opIndex = 0;
        daysInWeek.forEach(function(day, dayIdx) {
            var dateStr = day.toISOString().slice(0, 10);
            var opsForDay = [];
            var count;
            if (dayIdx < daysInWeek.length - 1) {
                count = OPERADORES_POR_DIA; // 7
            } else {
                count = TOTAL_OPERADORES - opIndex; // Last day gets remaining
            }
            for (var i = 0; i < count && opIndex < TOTAL_OPERADORES; i++) {
                opsForDay.push(OPERADORES[opIndex]);
                opIndex++;
            }
            schedule[dateStr] = opsForDay;
        });
    });

    return schedule;
}

function getTodaySchedule() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var schedule = getScheduleForMonth(year, month);
    var todayStr = today.toISOString().slice(0, 10);

    if (schedule[todayStr]) {
        return { date: todayStr, operators: schedule[todayStr] };
    }
    return { date: todayStr, operators: [] };
}

// ==================== STORAGE ====================

function loadAvaliacoes() {
    try {
        var data = localStorage.getItem(STORAGE_KEYS.avaliacoes);
        return data ? JSON.parse(data) : {};
    } catch (e) {
        return {};
    }
}

function saveAvaliacoes(avaliacoes) {
    localStorage.setItem(STORAGE_KEYS.avaliacoes, JSON.stringify(avaliacoes));
}

function loadHistorico() {
    try {
        var data = localStorage.getItem(STORAGE_KEYS.historico);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveHistorico(historico) {
    localStorage.setItem(STORAGE_KEYS.historico, JSON.stringify(historico));
}

function checkMonthReset() {
    var currentMes = getMesAno();
    var savedMes = localStorage.getItem(STORAGE_KEYS.mesAtual);

    if (savedMes && savedMes !== currentMes) {
        // Archive previous month
        var avaliacoes = loadAvaliacoes();
        var historico = loadHistorico();

        var totalRealizadas = 0;
        var totalPendentes = 0;
        OPERADORES.forEach(function(op) {
            var opAvals = avaliacoes[op] || [];
            var realizadas = opAvals.filter(function(a) { return a.nota > 0; }).length;
            totalRealizadas += realizadas;
            totalPendentes += (4 - realizadas);
        });

        historico.push({
            mesAno: savedMes,
            label: getMesAnoLabel(savedMes),
            planejado: AVALIACOES_POR_MES,
            realizado: totalRealizadas,
            pendente: totalPendentes,
            percentual: AVALIACOES_POR_MES > 0 ? Math.round((totalRealizadas / AVALIACOES_POR_MES) * 100) : 0
        });

        saveHistorico(historico);
        saveAvaliacoes({});
    }

    localStorage.setItem(STORAGE_KEYS.mesAtual, currentMes);
}

function getAvaliacoesStats() {
    var avaliacoes = loadAvaliacoes();
    var totalRealizadas = 0;
    var totalPendentes = 0;
    var somaNotas = 0;
    var countNotas = 0;
    var completos = 0;

    OPERADORES.forEach(function(op) {
        var opAvals = avaliacoes[op] || [];
        var realizadas = opAvals.filter(function(a) { return a.nota > 0; }).length;
        totalRealizadas += realizadas;
        totalPendentes += (4 - realizadas);

        opAvals.forEach(function(a) {
            if (a.nota > 0) {
                somaNotas += a.nota;
                countNotas++;
            }
        });

        if (realizadas >= 4) completos++;
    });

    return {
        planejado: AVALIACOES_POR_MES,
        realizado: totalRealizadas,
        pendente: totalPendentes,
        media: countNotas > 0 ? (somaNotas / countNotas).toFixed(1) : "0.0",
        completos: completos,
        operadoresPendentes: TOTAL_OPERADORES - completos,
        percentual: AVALIACOES_POR_MES > 0 ? Math.round((totalRealizadas / AVALIACOES_POR_MES) * 100) : 0
    };
}

function getWeeklyStats() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var businessDays = getBusinessDaysInMonth(year, month);
    var schedule = getScheduleForMonth(year, month);
    var avaliacoes = loadAvaliacoes();

    var weeks = {};
    businessDays.forEach(function(bd) {
        var wk = getWeekNumber(bd, businessDays);
        if (!weeks[wk]) weeks[wk] = { dates: [], total: 0, done: 0 };
        var dateStr = bd.toISOString().slice(0, 10);
        weeks[wk].dates.push(dateStr);
        var ops = schedule[dateStr] || [];
        weeks[wk].total += ops.length;
        ops.forEach(function(op) {
            var opAvals = avaliacoes[op] || [];
            var avalForWeek = opAvals.find(function(a) { return a.semana === wk; });
            if (avalForWeek && avalForWeek.nota > 0) {
                weeks[wk].done++;
            }
        });
    });

    return weeks;
}

// ==================== LOGIN ====================

function doLogin() {
    var user = document.getElementById("loginUser").value.trim();
    var pass = document.getElementById("loginPass").value;
    var errorEl = document.getElementById("loginError");

    if (user === "admin" && pass === "admin123") {
        localStorage.setItem(STORAGE_KEYS.session, "true");
        errorEl.style.display = "none";
        showApp();
    } else {
        errorEl.style.display = "block";
    }
}

function doLogout() {
    localStorage.removeItem(STORAGE_KEYS.session);
    document.getElementById("appContainer").style.display = "none";
    document.getElementById("loginScreen").style.display = "flex";
    document.getElementById("loginUser").value = "";
    document.getElementById("loginPass").value = "";
}

function checkSession() {
    if (localStorage.getItem(STORAGE_KEYS.session) === "true") {
        showApp();
    }
}

function showApp() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("appContainer").style.display = "flex";
    initApp();
}

// ==================== NAVIGATION ====================

function switchTab(tabName) {
    document.querySelectorAll(".tab-content").forEach(function(t) { t.classList.remove("active"); });
    document.querySelectorAll(".nav-btn").forEach(function(b) { b.classList.remove("active"); });

    var tabEl = document.getElementById("tab-" + tabName);
    if (tabEl) tabEl.classList.add("active");

    var btn = document.querySelector('.nav-btn[data-tab="' + tabName + '"]');
    if (btn) btn.classList.add("active");

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        document.getElementById("sidebar").classList.remove("open");
    }

    // Render tab content
    switch (tabName) {
        case "visaoGeral": renderVisaoGeral(); break;
        case "avaliacoes": renderAvaliacoes(); break;
        case "evolucao": renderEvolucao(); break;
        case "operadores": renderOperadores(); break;
        case "calibragem": renderCalibragem(); break;
        case "relatorios": break; // static HTML
        case "configuracoes": renderConfiguracoes(); break;
    }
}

function toggleSidebar() {
    var sb = document.getElementById("sidebar");
    sb.classList.toggle("open");
}

// ==================== CLOCK ====================

var clockInterval = null;

function updateClock() {
    var dateEl = document.getElementById("headerDate");
    var clockEl = document.getElementById("headerClock");
    var visaoEl = document.getElementById("visaoGeralDatetime");

    var now = new Date();
    var dateStr = getDataFormatada(now);
    var timeStr = getHoraFormatada();

    if (dateEl) dateEl.textContent = dateStr;
    if (clockEl) clockEl.textContent = timeStr;
    if (visaoEl) visaoEl.textContent = dateStr + " — " + timeStr;
}

// ==================== RENDER: VISÃO GERAL ====================

var chartSemanalInstance = null;
var chartStatusInstance = null;

function renderVisaoGeral() {
    var stats = getAvaliacoesStats();
    var kpiGrid = document.getElementById("kpiGrid");

    kpiGrid.innerHTML =
        '<div class="kpi-card">' +
            '<div class="kpi-label"><span class="material-icons-round">event_note</span> Planejadas no Mês</div>' +
            '<div class="kpi-value accent">' + stats.planejado + '</div>' +
        '</div>' +
        '<div class="kpi-card">' +
            '<div class="kpi-label"><span class="material-icons-round">check_circle</span> Realizadas</div>' +
            '<div class="kpi-value success">' + stats.realizado + '</div>' +
        '</div>' +
        '<div class="kpi-card">' +
            '<div class="kpi-label"><span class="material-icons-round">pending</span> Pendentes</div>' +
            '<div class="kpi-value warning">' + stats.pendente + '</div>' +
        '</div>' +
        '<div class="kpi-card">' +
            '<div class="kpi-label"><span class="material-icons-round">percent</span> Conclusão</div>' +
            '<div class="kpi-value info">' + stats.percentual + '%</div>' +
        '</div>' +
        '<div class="kpi-card">' +
            '<div class="kpi-label"><span class="material-icons-round">verified</span> Completos (4/4)</div>' +
            '<div class="kpi-value success">' + stats.completos + '</div>' +
        '</div>' +
        '<div class="kpi-card">' +
            '<div class="kpi-label"><span class="material-icons-round">hourglass_top</span> Op. Pendentes</div>' +
            '<div class="kpi-value danger">' + stats.operadoresPendentes + '</div>' +
        '</div>';

    renderChartSemanal();
    renderChartStatus(stats);
}

function renderChartSemanal() {
    var weeklyStats = getWeeklyStats();
    var labels = [];
    var dataDone = [];
    var dataTotal = [];

    Object.keys(weeklyStats).sort(function(a, b) { return a - b; }).forEach(function(wk) {
        labels.push("Sem " + wk);
        dataDone.push(weeklyStats[wk].done);
        dataTotal.push(weeklyStats[wk].total);
    });

    var ctx = document.getElementById("chartSemanal");
    if (!ctx) return;

    if (chartSemanalInstance) chartSemanalInstance.destroy();

    chartSemanalInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Realizadas",
                    data: dataDone,
                    backgroundColor: "rgba(108, 92, 231, 0.7)",
                    borderRadius: 6
                },
                {
                    label: "Planejadas",
                    data: dataTotal,
                    backgroundColor: "rgba(108, 92, 231, 0.2)",
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { labels: { color: "#8b8fa7", font: { family: "Plus Jakarta Sans" } } }
            },
            scales: {
                x: { ticks: { color: "#5c6078" }, grid: { color: "rgba(42,45,62,0.5)" } },
                y: { ticks: { color: "#5c6078" }, grid: { color: "rgba(42,45,62,0.5)" }, beginAtZero: true }
            }
        }
    });
}

function renderChartStatus(stats) {
    var ctx = document.getElementById("chartStatus");
    if (!ctx) return;

    if (chartStatusInstance) chartStatusInstance.destroy();

    chartStatusInstance = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Realizadas", "Pendentes"],
            datasets: [{
                data: [stats.realizado, stats.pendente],
                backgroundColor: ["#6c5ce7", "#2a2d3e"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: "70%",
            plugins: {
                legend: { labels: { color: "#8b8fa7", font: { family: "Plus Jakarta Sans" } } }
            }
        }
    });
}

// ==================== RENDER: AVALIAÇÕES ====================

function renderAvaliacoes() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var todayStr = today.toISOString().slice(0, 10);
    var businessDays = getBusinessDaysInMonth(year, month);
    var schedule = getScheduleForMonth(year, month);
    var avaliacoes = loadAvaliacoes();
    var weekNum = isBusinessDay(today) ? getWeekNumber(today, businessDays) : 0;

    var todayOps = schedule[todayStr] || [];

    // Dashboard lateral
    var dashEl = document.getElementById("avalDashboard");
    var realizadasHoje = 0;
    var somaNotasHoje = 0;
    var countNotasHoje = 0;

    todayOps.forEach(function(op) {
        var opAvals = avaliacoes[op] || [];
        var avalHoje = opAvals.find(function(a) { return a.data === todayStr; });
        if (avalHoje && avalHoje.nota > 0) {
            realizadasHoje++;
            somaNotasHoje += avalHoje.nota;
            countNotasHoje++;
        }
    });

    var stats = getAvaliacoesStats();
    var mediaHoje = countNotasHoje > 0 ? (somaNotasHoje / countNotasHoje).toFixed(1) : "—";

    dashEl.innerHTML =
        '<div class="aval-dash-card">' +
            '<div class="dash-label">Programadas Hoje</div>' +
            '<div class="dash-value" style="color:var(--accent-light)">' + todayOps.length + '</div>' +
        '</div>' +
        '<div class="aval-dash-card">' +
            '<div class="dash-label">Realizadas Hoje</div>' +
            '<div class="dash-value" style="color:var(--success)">' + realizadasHoje + '</div>' +
        '</div>' +
        '<div class="aval-dash-card">' +
            '<div class="dash-label">Pendentes Hoje</div>' +
            '<div class="dash-value" style="color:var(--warning)">' + (todayOps.length - realizadasHoje) + '</div>' +
        '</div>' +
        '<div class="aval-dash-card">' +
            '<div class="dash-label">Média Notas Hoje</div>' +
            '<div class="dash-value" style="color:var(--info)">' + mediaHoje + '</div>' +
        '</div>' +
        '<div class="aval-dash-card">' +
            '<div class="dash-label">Progresso do Mês</div>' +
            '<div class="dash-value" style="color:var(--accent-light)">' + stats.percentual + '%</div>' +
        '</div>' +
        '<div class="aval-dash-card">' +
            '<div class="dash-label">Completos (4/4)</div>' +
            '<div class="dash-value" style="color:var(--success)">' + stats.completos + '/' + TOTAL_OPERADORES + '</div>' +
        '</div>';

    // Cards
    var listEl = document.getElementById("avalList");

    if (!isBusinessDay(today)) {
        listEl.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;">' +
            '<span class="material-icons-round" style="font-size:48px;display:block;margin-bottom:12px;">weekend</span>' +
            'Hoje não é dia útil. As avaliações são realizadas de segunda a sexta.' +
        '</div>';
        return;
    }

    if (todayOps.length === 0) {
        listEl.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;">' +
            'Nenhum operador programado para hoje.' +
        '</div>';
        return;
    }

    var cardsHTML = "";
    todayOps.forEach(function(op, idx) {
        var opAvals = avaliacoes[op] || [];
        var avalHoje = opAvals.find(function(a) { return a.data === todayStr; });
        var nota = avalHoje ? avalHoje.nota : 0;
        var pontoAtencao = avalHoje ? (avalHoje.pontoAtencao || "") : "";
        var status = nota > 0 ? "Aplicado" : "Pendente";
        var badgeClass = nota > 0 ? "badge-aplicado" : "badge-pendente";
        var safeOp = op.replace(/'/g, "\\'");

        cardsHTML +=
        '<div class="aval-card" id="avalCard_' + idx + '">' +
            '<div class="aval-card-header">' +
                '<div class="aval-card-name">' + op + '</div>' +
                '<span class="aval-card-badge ' + badgeClass + '">' + status + '</span>' +
            '</div>' +
            '<div class="aval-card-info">' +
                '<span><span class="material-icons-round">schedule</span>' + (TURNOS[op] || "—") + '</span>' +
                '<span><span class="material-icons-round">date_range</span>Sem ' + weekNum + '</span>' +
                '<span><span class="material-icons-round">today</span>' + todayStr + '</span>' +
            '</div>' +
            '<div class="aval-card-fields">' +
                '<div class="field-row">' +
                    '<label>Nota (0–100)</label>' +
                    '<input type="number" min="0" max="100" value="' + nota + '" id="nota_' + idx + '">' +
                '</div>' +
                '<div class="field-row">' +
                    '<label>Ponto de Atenção</label>' +
                    '<textarea id="ponto_' + idx + '" placeholder="Observações...">' + pontoAtencao + '</textarea>' +
                '</div>' +
            '</div>' +
            '<div class="aval-card-actions">' +
                '<button class="btn-save" onclick="salvarAvaliacao(\'' + safeOp + '\', ' + idx + ', ' + weekNum + ')">' +
                    '<span class="material-icons-round" style="font-size:16px">save</span> Salvar' +
                '</button>' +
                '<button class="btn-reset" onclick="resetarAvaliacao(\'' + safeOp + '\', ' + idx + ')">' +
                    '<span class="material-icons-round">restart_alt</span>' +
                '</button>' +
            '</div>' +
        '</div>';
    });

    listEl.innerHTML = cardsHTML;
}

function salvarAvaliacao(operador, idx, semana) {
    var notaEl = document.getElementById("nota_" + idx);
    var pontoEl = document.getElementById("ponto_" + idx);
    if (!notaEl || !pontoEl) return;

    var nota = parseInt(notaEl.value) || 0;
    if (nota < 0) nota = 0;
    if (nota > 100) nota = 100;
    notaEl.value = nota;

    var ponto = pontoEl.value.trim();
    var todayStr = new Date().toISOString().slice(0, 10);

    var avaliacoes = loadAvaliacoes();
    if (!avaliacoes[operador]) avaliacoes[operador] = [];

    var existingIdx = avaliacoes[operador].findIndex(function(a) { return a.data === todayStr; });
    var avalObj = {
        data: todayStr,
        semana: semana,
        nota: nota,
        pontoAtencao: ponto
    };

    if (existingIdx >= 0) {
        avaliacoes[operador][existingIdx] = avalObj;
    } else {
        avaliacoes[operador].push(avalObj);
    }

    saveAvaliacoes(avaliacoes);

    // Update badge inline
    var card = document.getElementById("avalCard_" + idx);
    if (card) {
        var badge = card.querySelector(".aval-card-badge");
        if (nota > 0) {
            badge.textContent = "Aplicado";
            badge.className = "aval-card-badge badge-aplicado";
        } else {
            badge.textContent = "Pendente";
            badge.className = "aval-card-badge badge-pendente";
        }
    }
}

function resetarAvaliacao(operador, idx) {
    var notaEl = document.getElementById("nota_" + idx);
    var pontoEl = document.getElementById("ponto_" + idx);
    if (notaEl) notaEl.value = 0;
    if (pontoEl) pontoEl.value = "";

    var todayStr = new Date().toISOString().slice(0, 10);
    var avaliacoes = loadAvaliacoes();

    if (avaliacoes[operador]) {
        avaliacoes[operador] = avaliacoes[operador].filter(function(a) { return a.data !== todayStr; });
    }

    saveAvaliacoes(avaliacoes);

    var card = document.getElementById("avalCard_" + idx);
    if (card) {
        var badge = card.querySelector(".aval-card-badge");
        badge.textContent = "Pendente";
        badge.className = "aval-card-badge badge-pendente";
    }
}

// ==================== RENDER: EVOLUÇÃO ====================

function renderEvolucao() {
    var weeklyStats = getWeeklyStats();
    var container = document.getElementById("evolucaoContent");
    var html = "";
    var sortedWeeks = Object.keys(weeklyStats).sort(function(a, b) { return a - b; });

    if (sortedWeeks.length === 0) {
        html = '<div style="text-align:center;color:var(--text-muted);padding:40px;">Nenhuma semana disponível no mês atual.</div>';
    }

    sortedWeeks.forEach(function(wk) {
        var w = weeklyStats[wk];
        var pct = w.total > 0 ? Math.round((w.done / w.total) * 100) : 0;

        html +=
        '<div class="evolucao-week">' +
            '<h3><span class="material-icons-round" style="color:var(--accent);font-size:20px">date_range</span> Semana ' + wk + '</h3>' +
            '<div class="evolucao-bar"><div class="evolucao-bar-fill" style="width:' + pct + '%"></div></div>' +
            '<div class="evolucao-stats">' +
                '<span>Planejadas: <strong>' + w.total + '</strong></span>' +
                '<span>Realizadas: <strong style="color:var(--success)">' + w.done + '</strong></span>' +
                '<span>Conclusão: <strong style="color:var(--accent-light)">' + pct + '%</strong></span>' +
            '</div>' +
        '</div>';
    });

    container.innerHTML = html;
}

// ==================== RENDER: OPERADORES ====================

function renderOperadores() {
    var avaliacoes = loadAvaliacoes();
    var grid = document.getElementById("operadoresGrid");
    var colors = ["#6c5ce7","#00cec9","#fdcb6e","#ff6b6b","#74b9ff","#a29bfe","#55efc4","#fd79a8"];

    var html = "";
    OPERADORES.forEach(function(op, i) {
        var opAvals = avaliacoes[op] || [];
        var realizadas = opAvals.filter(function(a) { return a.nota > 0; }).length;
        var total = 4;
        var statusClass = realizadas >= 4 ? "completo" : realizadas > 0 ? "parcial" : "pendente-status";
        var initials = op.split(" ").slice(0, 2).map(function(n) { return n[0]; }).join("");
        var bgColor = colors[i % colors.length];

        html +=
        '<div class="operador-card">' +
            '<div class="operador-avatar" style="background:' + bgColor + '20;color:' + bgColor + '">' + initials + '</div>' +
            '<div class="operador-info">' +
                '<div class="operador-name" title="' + op + '">' + op + '</div>' +
                '<div class="operador-meta">' + (TURNOS[op] || "—") + '</div>' +
            '</div>' +
            '<div class="operador-status ' + statusClass + '">' + realizadas + '/' + total + '</div>' +
        '</div>';
    });

    grid.innerHTML = html;
}

// ==================== RENDER: CALIBRAGEM ====================

var chartCalibragemInstance = null;

function renderCalibragem() {
    var avaliacoes = loadAvaliacoes();
    var notas = [];

    OPERADORES.forEach(function(op) {
        var opAvals = avaliacoes[op] || [];
        opAvals.forEach(function(a) {
            if (a.nota > 0) notas.push(a.nota);
        });
    });

    // Distribution buckets
    var buckets = { "0-20": 0, "21-40": 0, "41-60": 0, "61-80": 0, "81-100": 0 };
    notas.forEach(function(n) {
        if (n <= 20) buckets["0-20"]++;
        else if (n <= 40) buckets["21-40"]++;
        else if (n <= 60) buckets["41-60"]++;
        else if (n <= 80) buckets["61-80"]++;
        else buckets["81-100"]++;
    });

    var ctx = document.getElementById("chartCalibragem");
    if (ctx) {
        if (chartCalibragemInstance) chartCalibragemInstance.destroy();

        chartCalibragemInstance = new Chart(ctx, {
            type: "bar",
            data: {
                labels: Object.keys(buckets),
                datasets: [{
                    label: "Quantidade de Notas",
                    data: Object.values(buckets),
                    backgroundColor: ["#ff6b6b","#fdcb6e","#74b9ff","#a29bfe","#00cec9"],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { ticks: { color: "#5c6078" }, grid: { color: "rgba(42,45,62,0.5)" } },
                    y: { ticks: { color: "#5c6078", stepSize: 1 }, grid: { color: "rgba(42,45,62,0.5)" }, beginAtZero: true }
                }
            }
        });
    }

    // Table
    var tableEl = document.getElementById("calibragemTable");
    var tableHTML = '<table>' +
        '<thead><tr><th>Operador</th><th>Turno</th><th>Avaliações</th><th>Média</th></tr></thead>' +
        '<tbody>';

    OPERADORES.forEach(function(op) {
        var opAvals = avaliacoes[op] || [];
        var notasOp = opAvals.filter(function(a) { return a.nota > 0; }).map(function(a) { return a.nota; });
        var media = notasOp.length > 0 ? (notasOp.reduce(function(s, n) { return s + n; }, 0) / notasOp.length).toFixed(1) : "—";

        tableHTML += '<tr>' +
            '<td>' + op + '</td>' +
            '<td>' + (TURNOS[op] || "—") + '</td>' +
            '<td>' + notasOp.length + '/4</td>' +
            '<td>' + media + '</td>' +
        '</tr>';
    });

    tableHTML += '</tbody></table>';
    tableEl.innerHTML = tableHTML;
}

// ==================== RENDER: CONFIGURAÇÕES ====================

function renderConfiguracoes() {
    var historico = loadHistorico();
    var container = document.getElementById("historicoContainer");

    if (historico.length === 0) {
        container.innerHTML = '<p class="historico-empty">Nenhum mês anterior registrado.</p>';
        return;
    }

    var html = "";
    historico.slice().reverse().forEach(function(h) {
        html +=
        '<div class="historico-card">' +
            '<div>' +
                '<div class="hist-label">Mês</div>' +
                '<div class="hist-value">' + h.label + '</div>' +
            '</div>' +
            '<div>' +
                '<div class="hist-label">Planejado</div>' +
                '<div class="hist-value">' + h.planejado + '</div>' +
            '</div>' +
            '<div>' +
                '<div class="hist-label">Realizado</div>' +
                '<div class="hist-value" style="color:var(--success)">' + h.realizado + '</div>' +
            '</div>' +
            '<div>' +
                '<div class="hist-label">Pendente</div>' +
                '<div class="hist-value" style="color:var(--warning)">' + h.pendente + '</div>' +
            '</div>' +
            '<div>' +
                '<div class="hist-label">Conclusão</div>' +
                '<div class="hist-value" style="color:var(--accent-light)">' + h.percentual + '%</div>' +
            '</div>' +
        '</div>';
    });

    container.innerHTML = html;
}

function resetMesAtual() {
    if (!confirm("Tem certeza que deseja resetar o mês atual? Os dados serão salvos no histórico.")) return;

    var avaliacoes = loadAvaliacoes();
    var historico = loadHistorico();
    var mesAtual = getMesAno();

    var totalRealizadas = 0;
    var totalPendentes = 0;
    OPERADORES.forEach(function(op) {
        var opAvals = avaliacoes[op] || [];
        var realizadas = opAvals.filter(function(a) { return a.nota > 0; }).length;
        totalRealizadas += realizadas;
        totalPendentes += (4 - realizadas);
    });

    historico.push({
        mesAno: mesAtual,
        label: getMesAnoLabel(mesAtual),
        planejado: AVALIACOES_POR_MES,
        realizado: totalRealizadas,
        pendente: totalPendentes,
        percentual: AVALIACOES_POR_MES > 0 ? Math.round((totalRealizadas / AVALIACOES_POR_MES) * 100) : 0
    });

    saveHistorico(historico);
    saveAvaliacoes({});
    renderConfiguracoes();
    renderVisaoGeral();
}

function limparTodosDados() {
    if (!confirm("ATENÇÃO: Isso apagará TODOS os dados (avaliações, histórico, configurações). Deseja continuar?")) return;

    localStorage.removeItem(STORAGE_KEYS.avaliacoes);
    localStorage.removeItem(STORAGE_KEYS.historico);
    renderConfiguracoes();
    renderVisaoGeral();
}

// ==================== PDF REPORTS ====================

function getPDFHeader(doc, title) {
    var now = new Date();
    var dateStr = now.toLocaleDateString("pt-BR");
    var timeStr = now.toLocaleTimeString("pt-BR");

    doc.setFillColor(28, 31, 46);
    doc.rect(0, 0, 210, 30, "F");

    doc.setTextColor(108, 92, 231);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Monitor.IA", 14, 14);

    doc.setTextColor(162, 155, 254);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text("Atual Assessoria de Cobrança", 14, 20);

    doc.setTextColor(139, 143, 167);
    doc.setFontSize(8);
    doc.text("Gerado em: " + dateStr + " às " + timeStr, 14, 26);

    doc.setTextColor(50, 50, 50);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 40);

    return 48;
}

function gerarRelatorioMensalGeral() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = getPDFHeader(doc, "Relatório Mensal Geral — " + getMesAnoLabel(getMesAno()));

    var stats = getAvaliacoesStats();
    var avaliacoes = loadAvaliacoes();

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);

    var info = [
        ["Total de Operadores", TOTAL_OPERADORES],
        ["Avaliações Planejadas", stats.planejado],
        ["Avaliações Realizadas", stats.realizado],
        ["Avaliações Pendentes", stats.pendente],
        ["Conclusão", stats.percentual + "%"],
        ["Média Geral", stats.media],
        ["Operadores Completos (4/4)", stats.completos]
    ];

    info.forEach(function(item) {
        doc.text(item[0] + ": " + item[1], 14, y);
        y += 6;
    });

    y += 6;

    var tableData = OPERADORES.map(function(op) {
        var opAvals = avaliacoes[op] || [];
        var notasOp = opAvals.filter(function(a) { return a.nota > 0; }).map(function(a) { return a.nota; });
        var media = notasOp.length > 0 ? (notasOp.reduce(function(s, n) { return s + n; }, 0) / notasOp.length).toFixed(1) : "—";
        return [op, TURNOS[op] || "—", notasOp.length + "/4", media];
    });

    doc.autoTable({
        startY: y,
        head: [["Operador", "Turno", "Aval.", "Média"]],
        body: tableData,
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [108, 92, 231], textColor: 255 },
        alternateRowStyles: { fillColor: [245, 245, 250] }
    });

    doc.save("relatorio_mensal_geral.pdf");
}

function gerarRelatorioPendencias() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = getPDFHeader(doc, "Relatório de Pendências — " + getMesAnoLabel(getMesAno()));

    var avaliacoes = loadAvaliacoes();
    var pendentes = [];

    OPERADORES.forEach(function(op) {
        var opAvals = avaliacoes[op] || [];
        var realizadas = opAvals.filter(function(a) { return a.nota > 0; }).length;
        if (realizadas < 4) {
            pendentes.push([op, TURNOS[op] || "—", realizadas + "/4", (4 - realizadas) + " pendente(s)"]);
        }
    });

    if (pendentes.length === 0) {
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        doc.text("Nenhuma pendência encontrada. Todas as avaliações foram realizadas.", 14, y);
    } else {
        doc.autoTable({
            startY: y,
            head: [["Operador", "Turno", "Status", "Pendências"]],
            body: pendentes,
            styles: { fontSize: 8, cellPadding: 2 },
            headStyles: { fillColor: [253, 203, 110], textColor: [40, 40, 40] },
            alternateRowStyles: { fillColor: [255, 252, 240] }
        });
    }

    doc.save("relatorio_pendencias.pdf");
}

function gerarRelatorioPorOperador() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = getPDFHeader(doc, "Relatório por Operador — " + getMesAnoLabel(getMesAno()));

    var avaliacoes = loadAvaliacoes();

    OPERADORES.forEach(function(op, idx) {
        if (idx > 0 && y > 240) {
            doc.addPage();
            y = getPDFHeader(doc, "Relatório por Operador (cont.)");
        }

        var opAvals = avaliacoes[op] || [];
        var notasOp = opAvals.filter(function(a) { return a.nota > 0; });
        var soma = notasOp.map(function(a) { return a.nota; }).reduce(function(s, n) { return s + n; }, 0);
        var media = notasOp.length > 0 ? (soma / notasOp.length).toFixed(1) : "—";

        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(108, 92, 231);
        doc.text(op, 14, y);
        y += 5;

        doc.setFont("helvetica", "normal");
        doc.setTextColor(60, 60, 60);
        doc.setFontSize(8);
        doc.text("Turno: " + (TURNOS[op] || "—") + " | Avaliações: " + notasOp.length + "/4 | Média: " + media, 14, y);
        y += 4;

        if (notasOp.length > 0) {
            notasOp.forEach(function(a) {
                var txt = "  Sem " + (a.semana || "?") + " — " + a.data + " — Nota: " + a.nota;
                if (a.pontoAtencao) txt += " — Obs: " + a.pontoAtencao.substring(0, 60);
                doc.text(txt, 14, y);
                y += 4;
            });
        } else {
            doc.text("  Nenhuma avaliação registrada.", 14, y);
            y += 4;
        }

        y += 4;
    });

    doc.save("relatorio_por_operador.pdf");
}

function gerarRelatorioPorTurno() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = getPDFHeader(doc, "Relatório por Turno — " + getMesAnoLabel(getMesAno()));

    var avaliacoes = loadAvaliacoes();

    ["Manhã", "Tarde"].forEach(function(turno) {
        var ops = OPERADORES.filter(function(op) { return TURNOS[op] === turno; });

        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(108, 92, 231);
        doc.text("Turno: " + turno, 14, y);
        y += 6;

        var tableData = ops.map(function(op) {
            var opAvals = avaliacoes[op] || [];
            var notasOp = opAvals.filter(function(a) { return a.nota > 0; }).map(function(a) { return a.nota; });
            var media = notasOp.length > 0 ? (notasOp.reduce(function(s, n) { return s + n; }, 0) / notasOp.length).toFixed(1) : "—";
            return [op, notasOp.length + "/4", media];
        });

        doc.autoTable({
            startY: y,
            head: [["Operador", "Aval.", "Média"]],
            body: tableData,
            styles: { fontSize: 8, cellPadding: 2 },
            headStyles: { fillColor: [108, 92, 231], textColor: 255 },
            alternateRowStyles: { fillColor: [245, 245, 250] }
        });

        y = doc.lastAutoTable.finalY + 10;
    });

    doc.save("relatorio_por_turno.pdf");
}

function gerarRelatorioFechamento() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = getPDFHeader(doc, "Fechamento do Mês — " + getMesAnoLabel(getMesAno()));

    var stats = getAvaliacoesStats();
    var avaliacoes = loadAvaliacoes();

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);

    var info = [
        ["Total de Operadores", TOTAL_OPERADORES],
        ["Avaliações Planejadas", stats.planejado],
        ["Avaliações Realizadas", stats.realizado],
        ["Avaliações Pendentes", stats.pendente],
        ["Percentual de Conclusão", stats.percentual + "%"],
        ["Operadores Completos (4/4)", stats.completos],
        ["Operadores Pendentes", stats.operadoresPendentes]
    ];

    info.forEach(function(item) {
        doc.text(item[0] + ": " + item[1], 14, y);
        y += 6;
    });

    y += 6;

    var tableData = OPERADORES.map(function(op) {
        var opAvals = avaliacoes[op] || [];
        var realizadas = opAvals.filter(function(a) { return a.nota > 0; }).length;
        var status = realizadas >= 4 ? "COMPLETO" : realizadas + "/4";
        return [op, TURNOS[op] || "—", status];
    });

    doc.autoTable({
        startY: y,
        head: [["Operador", "Turno", "Status"]],
        body: tableData,
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [108, 92, 231], textColor: 255 },
        alternateRowStyles: { fillColor: [245, 245, 250] },
        didParseCell: function(data) {
            if (data.section === "body" && data.column.index === 2) {
                if (data.cell.raw === "COMPLETO") {
                    data.cell.styles.textColor = [0, 180, 170];
                    data.cell.styles.fontStyle = "bold";
                }
            }
        }
    });

    doc.save("fechamento_mes.pdf");
}

function gerarRelatorioHistorico() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var y = getPDFHeader(doc, "Histórico de Meses Anteriores");

    var historico = loadHistorico();

    if (historico.length === 0) {
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        doc.text("Nenhum mês anterior registrado no histórico.", 14, y);
    } else {
        var tableData = historico.map(function(h) {
            return [h.label, h.planejado, h.realizado, h.pendente, h.percentual + "%"];
        });

        doc.autoTable({
            startY: y,
            head: [["Mês", "Planejado", "Realizado", "Pendente", "Conclusão"]],
            body: tableData,
            styles: { fontSize: 9, cellPadding: 3 },
            headStyles: { fillColor: [108, 92, 231], textColor: 255 },
            alternateRowStyles: { fillColor: [245, 245, 250] }
        });
    }

    doc.save("historico_meses.pdf");
}

// ==================== INIT ====================

function initApp() {
    checkMonthReset();
    updateClock();
    if (clockInterval) clearInterval(clockInterval);
    clockInterval = setInterval(updateClock, 1000);
    switchTab("visaoGeral");
}

// Login via Enter key
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        var loginScreen = document.getElementById("loginScreen");
        if (loginScreen && loginScreen.style.display !== "none") {
            doLogin();
        }
    }
});

// Auto-check session on load
document.addEventListener("DOMContentLoaded", function() {
    checkSession();
});
