/* ========================================
   MONITOR.IA — DADOS E LÓGICA
======================================== */

// ==========================================
// DADOS EDITÁVEIS
// ==========================================

const carteiras = ['AEGEA MT01', 'AEGEA Manaus', 'AEGEA Guariroba', 'Equatorial', 'Varejo'];

const criterios = [
    'Abertura da ligação',
    'Identificação do cliente',
    'Sondagem / Diagnóstico',
    'Apresentação da proposta',
    'Negociação',
    'Argumentação',
    'Fechamento',
    'Registro no sistema',
    'Tom de voz e empatia',
    'Conformidade legal'
];

const pesos = {
    'Abertura da ligação': 8,
    'Identificação do cliente': 8,
    'Sondagem / Diagnóstico': 12,
    'Apresentação da proposta': 12,
    'Negociação': 15,
    'Argumentação': 12,
    'Fechamento': 13,
    'Registro no sistema': 8,
    'Tom de voz e empatia': 7,
    'Conformidade legal': 5
};

const operadores = [
  { nome: "DÉBORA FERREIRA GOMES", carteira: "AEGEA", turno: "Manhã", monitor: "Monitor 1" },
  { nome: "EDUARDA REZENDES", carteira: "AEGEA", turno: "Manhã", monitor: "Monitor 1" },
  { nome: "EDVANE BERNARDO DA SILVA", carteira: "AEGEA", turno: "Manhã", monitor: "Monitor 1" },
  { nome: "LAIS MESSIAS DE OLIVEIRA", carteira: "AEGEA", turno: "Manhã", monitor: "Monitor 1" },
  { nome: "MARIA EDUARDA DE LIMA MARA", carteira: "AEGEA", turno: "Manhã", monitor: "Monitor 1" },
  { nome: "MARIA EDUARDA PRATES FERREIRA", carteira: "AEGEA", turno: "Manhã", monitor: "Monitor 1" },
  { nome: "MIKAELI LIMA DE MATOS", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "NATHALIA PIMENTEL DE MELO MENDES", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "RYAN KARLLOS SOUZA RODRIGUES", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "HAMYEL DA SILVA EUSTAQUIO", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "LARISSA AKEME ARAKAKI DA SILVA", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "ALESSANDRA GONZALEZ BARBOSA", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "FABRÍCIO MARQUES PEREIRA DA SILVA", carteira: "AEGEA", turno: "Noite", monitor: "Monitor 3" },
  { nome: "FRANCIELLY ARCE DE OLIVEIRA", carteira: "AEGEA", turno: "Noite", monitor: "Monitor 3" },
  { nome: "ÍTALA CRISTINA FRETES ROA", carteira: "AEGEA", turno: "Noite", monitor: "Monitor 3" },
  { nome: "JULIA ALMEIDA COLMAN", carteira: "AEGEA", turno: "Noite", monitor: "Monitor 3" },
  { nome: "SINDEL SOARES AMARILHA", carteira: "AEGEA", turno: "Noite", monitor: "Monitor 3" },
  { nome: "MARIA EDUARDA SANTOS GUIMARÃES", carteira: "AEGEA", turno: "Noite", monitor: "Monitor 3" },
  { nome: "ISABELLE EMILY DOS SANTOS SILVA", carteira: "AEGEA", turno: "Manhã", monitor: "Monitor 1" },
  { nome: "MARIA EDUARDA AMORIM DE OLIVEIRA", carteira: "AEGEA", turno: "Manhã", monitor: "Monitor 1" },
  { nome: "MARIA EDUARDA DIAS DE OLIVEIRA", carteira: "AEGEA", turno: "Manhã", monitor: "Monitor 1" },
  { nome: "YASMIN ARAUJO DA SILVA", carteira: "AEGEA", turno: "Manhã", monitor: "Monitor 1" },
  { nome: "JHULIA SEVERINO", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "MILLENA MORAIS", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "LANA LUCIA GUILHERME", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "LETICIA FREIRE BRANDÃO COELHO", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "NATHALIA LEITE RAMOS", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "LAÍSSA NUNES", carteira: "AEGEA", turno: "Tarde", monitor: "Monitor 2" },
  { nome: "MARIA CLARA DE JESUS VIEIRA", carteira: "AEGEA", turno: "Noite", monitor: "Monitor 3" },
  { nome: "EMILY MARQUES FERREIRA", carteira: "AEGEA", turno: "Noite", monitor: "Monitor 3" },
  { nome: "JULIA DINIZ FERREIRA DOS ANJOS", carteira: "AEGEA", turno: "Noite", monitor: "Monitor 3" },
  { nome: "GABRIELLY MARTINS RODRIGUES", carteira: "AEGEA", turno: "Noite", monitor: "Monitor 3" }
];
    

const pontosAtencao = [
    'Não realizou sondagem adequada',
    'Faltou apresentar condições de parcelamento',
    'Tom de voz inadequado',
    'Não registrou acionamento no sistema',
    'Interrompeu o cliente durante a fala',
    'Não confirmou dados cadastrais',
    'Encerrou ligação sem oferecer alternativa',
    'Argumentação fraca na objeção de valor',
    'Não realizou fechamento efetivo',
    'Faltou empatia ao tratar inadimplência',
    'Não mencionou benefícios do acordo',
    'Usou linguagem técnica excessiva'
];

// Gerar avaliações de exemplo
const semanas = [
  "Semana 1",
  "Semana 2",
  "Semana 3",
  "Semana 4"
];

let avaliacoes = [];

operadores.forEach((op, index) => {
  semanas.forEach((semana, s) => {
    avaliacoes.push({
      id: `${index + 1}-${s + 1}`,
      operador: op.nome,
      turno: op.turno,
      carteira: op.carteira,
      semana: semana,
      notaFinal: 0,
      status: "Pendente",
      pontoAtencao: "-"
    });
  });

});
// ==========================================
// NAVEGAÇÃO
// ==========================================

const navLinks = document.querySelectorAll('.nav-link[data-page]');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.dataset.page;
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById('page-' + target).classList.add('active');
        initPage(target);
    });
});

document.getElementById('btn-sair').addEventListener('click', e => {
    e.preventDefault();
    if (confirm('Deseja realmente sair do sistema?')) {
        alert('Sessão encerrada.');
    }
});

// ==========================================
// HELPERS
// ==========================================

function getCategoria(media) {
    if (media >= 100) return { nome: 'Lendário', classe: 'cat-lendario', icon: '👑' };
    if (media >= 90) return { nome: 'Ouro', classe: 'cat-ouro', icon: '🥇' };
    if (media >= 80) return { nome: 'Prata', classe: 'cat-prata', icon: '🥈' };
    if (media >= 70) return { nome: 'Bronze', classe: 'cat-bronze', icon: '🥉' };
    return { nome: 'Atenção', classe: 'cat-atencao', icon: '⚠️' };
}

function notaClass(nota) {
    if (nota >= 80) return 'good';
    if (nota >= 70) return 'warn';
    return 'bad';
}

function formatDate(str) {
    const [y, m, d] = str.split('-');
    return `${d}/${m}/${y}`;
}

function mediaOp(nome) {
    const avs = avaliacoes.filter(a => a.operador === nome);
    if (!avs.length) return 0;
    return Math.round(avs.reduce((s, a) => s + a.notaFinal, 0) / avs.length);
}

// ==========================================
// 1. VISÃO GERAL
// ==========================================

function renderVisaoGeral() {
    const total = avaliacoes.length;
    const media = total ? Math.round(avaliacoes.reduce((s, a) => s + a.notaFinal, 0) / total) : 0;
    const opsAvaliados = [...new Set(avaliacoes.map(a => a.operador))].length;
    const opsAtencao = operadores.filter(op => mediaOp(op.nome) < 70 && mediaOp(op.nome) > 0).length;
    const melhor = total ? Math.max(...avaliacoes.map(a => a.notaFinal)) : 0;

    const kpis = [
        { label: 'Média Geral', value: media, icon: 'fa-chart-simple', color: '' },
        { label: 'Total de Avaliações', value: total, icon: 'fa-clipboard-list', color: 'navy' },
        { label: 'Operadores Avaliados', value: opsAvaliados, icon: 'fa-users', color: 'blue' },
        { label: 'Operadores em Atenção', value: opsAtencao, icon: 'fa-triangle-exclamation', color: 'red' },
        { label: 'Melhor Nota', value: melhor, icon: 'fa-trophy', color: 'purple' },
        { label: 'Meta de Qualidade', value: '80%', icon: 'fa-bullseye', color: 'orange' },
    ];

    document.getElementById('kpi-grid').innerHTML = kpis.map(k => `
        <div class="kpi-card ${k.color}">
            <div class="kpi-label">${k.label}</div>
            <div class="kpi-value">${k.value}</div>
            <div class="kpi-icon"><i class="fa-solid ${k.icon}"></i></div>
        </div>
    `).join('');

    // Top 5
    const ranking = operadores.map(op => ({ nome: op.nome, media: mediaOp(op.nome) }))
        .filter(o => o.media > 0)
        .sort((a, b) => b.media - a.media)
        .slice(0, 5);

    const rankColors = ['gold', 'silver', 'bronze', '', ''];
    document.getElementById('top5-list').innerHTML = ranking.map((r, i) => `
        <div class="top5-item">
            <div class="top5-rank ${rankColors[i]}">${i + 1}</div>
            <div class="top5-name">${r.nome}</div>
            <div class="top5-score">${r.media}</div>
        </div>
    `).join('');

    // Chart overview
    renderOverviewChart();
}

function renderOverviewChart() {
    const ctx = document.getElementById('chart-overview-line');
    if (ctx._chart) ctx._chart.destroy();

    const semanas = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
    const dados = semanas.map((_, i) => {
        const start = i * 4 + 1;
        const end = start + 6;
        const avs = avaliacoes.filter(a => {
            const d = parseInt(a.data.slice(8));
            return d >= start && d <= end;
        });
        return avs.length ? Math.round(avs.reduce((s, a) => s + a.notaFinal, 0) / avs.length) : null;
    });

    ctx._chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: semanas,
            datasets: [{
                label: 'Média Geral',
                data: dados,
                borderColor: '#00c853',
                backgroundColor: 'rgba(0,200,83,.1)',
                borderWidth: 3,
                tension: .4,
                fill: true,
                pointBackgroundColor: '#00c853',
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { backgroundColor: '#0f1b2d', padding: 10, cornerRadius: 8 }
            },
            scales: {
                y: { min: 50, max: 100, grid: { color: '#eaecf0' }, ticks: { font: { size: 11 } } },
                x: { grid: { display: false }, ticks: { font: { size: 11 } } }
            }
        }
    });
}

// ==========================================
// 2. AVALIAÇÕES
// ==========================================

function renderAvaliacoes(filtered) {
    const list = filtered || avaliacoes;

    // Populate filter selects
    const fCarteira = document.getElementById('f-carteira');
    const fOperador = document.getElementById('f-operador');
    if (fCarteira.options.length <= 1) {
        carteiras.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; fCarteira.appendChild(o); });
    }
    if (fOperador.options.length <= 1) {
        operadores.forEach(op => { const o = document.createElement('option'); o.value = op.nome; o.textContent = op.nome; fOperador.appendChild(o); });
    }

    document.getElementById('avaliacoes-grid').innerHTML = list.map(a => {
        const statusClass = a.status === 'Pendente' ? 'badge-pendente' : a.status === 'Aplicado' ? 'badge-aplicado' : 'badge-recusado';
        return `
        <div class="aval-card">
            <div class="aval-card-top">
                <div>
                    <div class="aval-operador">${a.operador}</div>
                    <div class="aval-data"><i class="fa-regular fa-calendar"></i> ${formatDate(a.data)}</div>
                </div>
                <span class="aval-carteira-tag">${a.carteira}</span>
            </div>
            <div class="aval-notas">
                <div class="aval-nota-box">
                    <div class="aval-nota-label">Nota IA</div>
                    <div class="aval-nota-value ${notaClass(a.notaIA)}">${a.notaIA}</div>
                </div>
                <div class="aval-nota-box">
                    <div class="aval-nota-label">Nota Final</div>
                    <div class="aval-nota-value ${notaClass(a.notaFinal)}">${a.notaFinal}</div>
                </div>
            </div>
            <div class="aval-info-row">
                <span class="aval-badge ${statusClass}"><i class="fa-solid fa-circle" style="font-size:6px"></i> ${a.status}</span>
            </div>
            <div class="aval-atencao"><strong>Atenção:</strong> ${a.pontoAtencao}</div>
            <div class="aval-card-footer">
                <button class="btn btn-navy btn-sm" onclick="showDetail(${a.id})"><i class="fa-solid fa-eye"></i> Ver Detalhes</button>
            </div>
        </div>`;
    }).join('');
}

function applyFilters() {
    let filtered = [...avaliacoes];
    const cart = document.getElementById('f-carteira').value;
    const op = document.getElementById('f-operador').value;
    const periodo = document.getElementById('f-periodo').value;
    const status = document.getElementById('f-status').value;
    const dIni = document.getElementById('f-data-ini').value;
    const dFim = document.getElementById('f-data-fim').value;

    if (cart) filtered = filtered.filter(a => a.carteira === cart);
    if (op) filtered = filtered.filter(a => a.operador === op);
    if (status) filtered = filtered.filter(a => a.status === status);
    if (dIni) filtered = filtered.filter(a => a.data >= dIni);
    if (dFim) filtered = filtered.filter(a => a.data <= dFim);
    if (periodo) {
        const now = new Date(2026, 4, 18);
        const limit = new Date(now);
        limit.setDate(limit.getDate() - parseInt(periodo));
        filtered = filtered.filter(a => new Date(a.data) >= limit);
    }

    renderAvaliacoes(filtered);
}

document.getElementById('btn-filtrar').addEventListener('click', applyFilters);
document.getElementById('btn-limpar').addEventListener('click', () => {
    document.getElementById('f-carteira').value = '';
    document.getElementById('f-operador').value = '';
    document.getElementById('f-periodo').value = '';
    document.getElementById('f-status').value = '';
    document.getElementById('f-data-ini').value = '';
    document.getElementById('f-data-fim').value = '';
    renderAvaliacoes();
});

// ==========================================
// MODAL DETALHES
// ==========================================

function showDetail(id) {
    const a = avaliacoes.find(x => x.id === id);
    if (!a) return;

    const cat = getCategoria(a.notaFinal);
    const statusClass = a.status === 'Pendente' ? 'badge-pendente' : a.status === 'Aplicado' ? 'badge-aplicado' : 'badge-recusado';

    document.getElementById('modal-body').innerHTML = `
        <div class="detail-grid">
            <div class="detail-item">
                <div class="detail-label">Operador</div>
                <div class="detail-value">${a.operador}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Carteira</div>
                <div class="detail-value">${a.carteira}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Data da Avaliação</div>
                <div class="detail-value">${formatDate(a.data)}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Status Feedback</div>
                <div class="detail-value"><span class="aval-badge ${statusClass}">${a.status}</span></div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Nota IA</div>
                <div class="detail-value big ${notaClass(a.notaIA)}">${a.notaIA}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Nota Humana</div>
                <div class="detail-value big ${notaClass(a.notaHumana)}">${a.notaHumana}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Nota Final</div>
                <div class="detail-value big ${notaClass(a.notaFinal)}">${a.notaFinal}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Categoria</div>
                <div class="detail-value"><span class="cat-badge ${cat.classe}">${cat.icon} ${cat.nome}</span></div>
            </div>
            <div class="detail-item full">
                <div class="detail-label">Ponto de Atenção</div>
                <div class="detail-value" style="font-size:13px;font-weight:500;color:#475467">${a.pontoAtencao}</div>
            </div>
        </div>
        <div style="margin-top:20px">
            <div class="detail-label" style="margin-bottom:12px">NOTAS POR CRITÉRIO</div>
            ${a.criteriosNotas.map(cn => `
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
                    <span style="flex:1;font-size:12.5px;color:#475467">${cn.criterio}</span>
                    <span style="font-weight:700;font-size:13px;color:${cn.nota >= 80 ? '#00a344' : cn.nota >= 70 ? '#f59e0b' : '#ef4444'};width:35px;text-align:right">${cn.nota}</span>
                    <div style="width:120px;height:6px;background:#eaecf0;border-radius:3px;overflow:hidden">
                        <div style="width:${cn.nota}%;height:100%;background:${cn.nota >= 80 ? '#00c853' : cn.nota >= 70 ? '#f59e0b' : '#ef4444'};border-radius:3px"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('modal-overlay').classList.add('open');
}

document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal-overlay').classList.remove('open');
});
document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
});

// ==========================================
// 3. EVOLUÇÃO
// ==========================================

function renderEvolucao() {
    // Weekly line chart
    const ctxLine = document.getElementById('chart-evolucao-line');
    if (ctxLine._chart) ctxLine._chart.destroy();

    const semanas = ['Sem 1\n(01-04)', 'Sem 2\n(05-08)', 'Sem 3\n(09-12)', 'Sem 4\n(13-17)'];
    const mediaIA = [], mediaFinal = [];
    [1, 5, 9, 13].forEach((start, i) => {
        const end = i === 3 ? 17 : start + 3;
        const avs = avaliacoes.filter(a => {
            const d = parseInt(a.data.slice(8));
            return d >= start && d <= end;
        });
        mediaIA.push(avs.length ? Math.round(avs.reduce((s, a) => s + a.notaIA, 0) / avs.length) : null);
        mediaFinal.push(avs.length ? Math.round(avs.reduce((s, a) => s + a.notaFinal, 0) / avs.length) : null);
    });

    ctxLine._chart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: semanas,
            datasets: [
                {
                    label: 'Média IA',
                    data: mediaIA,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59,130,246,.08)',
                    borderWidth: 2.5, tension: .4, fill: true,
                    pointBackgroundColor: '#3b82f6', pointRadius: 4
                },
                {
                    label: 'Média Final',
                    data: mediaFinal,
                    borderColor: '#00c853',
                    backgroundColor: 'rgba(0,200,83,.08)',
                    borderWidth: 2.5, tension: .4, fill: true,
                    pointBackgroundColor: '#00c853', pointRadius: 4
                }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } },
                tooltip: { backgroundColor: '#0f1b2d', padding: 10, cornerRadius: 8 }
            },
            scales: {
                y: { min: 50, max: 100, grid: { color: '#eaecf0' } },
                x: { grid: { display: false } }
            }
        }
    });

    // Bar chart by operator
    const ctxBar = document.getElementById('chart-evolucao-bar');
    if (ctxBar._chart) ctxBar._chart.destroy();

    const opData = operadores.map(op => ({ nome: op.nome.split(' ')[0], media: mediaOp(op.nome) }))
        .filter(o => o.media > 0)
        .sort((a, b) => b.media - a.media);

    ctxBar._chart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: opData.map(o => o.nome),
            datasets: [{
                label: 'Média Final',
                data: opData.map(o => o.media),
                backgroundColor: opData.map(o =>
                    o.media >= 90 ? '#00c853' : o.media >= 80 ? '#3b82f6' : o.media >= 70 ? '#f59e0b' : '#ef4444'
                ),
                borderRadius: 6,
                barThickness: 28
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                tooltip: { backgroundColor: '#0f1b2d', padding: 10, cornerRadius: 8 }
            },
            scales: {
                x: { min: 50, max: 100, grid: { color: '#eaecf0' } },
                y: { grid: { display: false }, ticks: { font: { size: 11, weight: 600 } } }
            }
        }
    });
}

// ==========================================
// 4. OPERADORES
// ==========================================

function renderOperadores() {
    const tbody = document.getElementById('tbody-operadores');
    tbody.innerHTML = operadores.map(op => {
        const med = mediaOp(op.nome);
        const cat = getCategoria(med);
        const qtd = avaliacoes.filter(a => a.operador === op.nome).length;
        const avOp = avaliacoes.filter(a => a.operador === op.nome);
        const atencao = avOp.length ? avOp[avOp.length - 1].pontoAtencao : '—';

        return `<tr>
            <td style="font-weight:600">${op.nome}</td>
            <td>${op.turno}</td>
            <td><span class="aval-carteira-tag" style="font-size:9.5px">${op.carteira}</span></td>
            <td style="text-align:center;font-weight:600">${qtd}</td>
            <td style="font-weight:700;color:${med >= 80 ? '#00a344' : med >= 70 ? '#f59e0b' : '#ef4444'}">${med || '—'}</td>
            <td><span class="cat-badge ${cat.classe}">${cat.icon} ${cat.nome}</span></td>
            <td style="font-size:12px;color:#475467;max-width:220px">${atencao}</td>
        </tr>`;
    }).join('');
}

// ==========================================
// 5. CALIBRAGEM
// ==========================================

function renderCalibragem() {
    const tbody = document.getElementById('tbody-calibragem');
    tbody.innerHTML = avaliacoes.slice(0, 20).map(a => {
        const diff = a.notaIA - a.notaHumana;
        const absDiff = Math.abs(diff);
        let statusCalib, statusClass;
        if (absDiff <= 3) { statusCalib = 'Calibrado'; statusClass = 'calibragem-ok'; }
        else if (absDiff <= 7) { statusCalib = 'Atenção'; statusClass = 'calibragem-atencao'; }
        else { statusCalib = 'Divergente'; statusClass = 'calibragem-divergente'; }

        return `<tr>
            <td style="font-weight:600">${a.operador}</td>
            <td>${formatDate(a.data)}</td>
            <td style="font-weight:700;color:${notaClass(a.notaIA) === 'good' ? '#00a344' : notaClass(a.notaIA) === 'warn' ? '#f59e0b' : '#ef4444'}">${a.notaIA}</td>
            <td style="font-weight:700;color:${notaClass(a.notaHumana) === 'good' ? '#00a344' : notaClass(a.notaHumana) === 'warn' ? '#f59e0b' : '#ef4444'}">${a.notaHumana}</td>
            <td style="font-weight:600">${diff > 0 ? '+' : ''}${diff}</td>
            <td><span class="${statusClass}"><i class="fa-solid ${statusCalib === 'Calibrado' ? 'fa-circle-check' : statusCalib === 'Atenção' ? 'fa-triangle-exclamation' : 'fa-circle-xmark'}"></i> ${statusCalib}</span></td>
        </tr>`;
    }).join('');

    // Scatter chart
    const ctxScatter = document.getElementById('chart-calibragem');
    if (ctxScatter._chart) ctxScatter._chart.destroy();

    ctxScatter._chart = new Chart(ctxScatter, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'IA × Humana',
                data: avaliacoes.map(a => ({ x: a.notaIA, y: a.notaHumana })),
                backgroundColor: 'rgba(0,200,83,.5)',
                borderColor: '#00c853',
                pointRadius: 5,
                pointHoverRadius: 7
            }, {
                label: 'Linha ideal',
                data: [{ x: 50, y: 50 }, { x: 100, y: 100 }],
                type: 'line',
                borderColor: '#d0d5dd',
                borderDash: [6, 4],
                borderWidth: 2,
                pointRadius: 0,
                fill: false
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } },
                tooltip: { backgroundColor: '#0f1b2d', padding: 10, cornerRadius: 8 }
            },
            scales: {
                x: { title: { display: true, text: 'Nota IA', font: { size: 11, weight: 600 } }, min: 50, max: 100, grid: { color: '#eaecf0' } },
                y: { title: { display: true, text: 'Nota Humana', font: { size: 11, weight: 600 } }, min: 50, max: 100, grid: { color: '#eaecf0' } }
            }
        }
    });

    // Summary stats
    const diffs = avaliacoes.map(a => Math.abs(a.notaIA - a.notaHumana));
    const calibrados = diffs.filter(d => d <= 3).length;
    const atencao = diffs.filter(d => d > 3 && d <= 7).length;
    const divergentes = diffs.filter(d => d > 7).length;
    const avgDiff = (diffs.reduce((a, b) => a + b, 0) / diffs.length).toFixed(1);

    document.getElementById('calibragem-resumo').innerHTML = `
        <div class="calib-stat">
            <span class="calib-stat-label">Avaliações Calibradas (≤3 pts)</span>
            <span class="calib-stat-value" style="color:#00a344">${calibrados}</span>
        </div>
        <div class="calib-stat">
            <span class="calib-stat-label">Em Atenção (4-7 pts)</span>
            <span class="calib-stat-value" style="color:#f59e0b">${atencao}</span>
        </div>
        <div class="calib-stat">
            <span class="calib-stat-label">Divergentes (>7 pts)</span>
            <span class="calib-stat-value" style="color:#ef4444">${divergentes}</span>
        </div>
        <div class="calib-stat">
            <span class="calib-stat-label">Diferença Média Absoluta</span>
            <span class="calib-stat-value" style="color:#0f1b2d">${avgDiff} pts</span>
        </div>
        <div class="calib-stat">
            <span class="calib-stat-label">Taxa de Calibração</span>
            <span class="calib-stat-value" style="color:#00a344">${Math.round(calibrados / avaliacoes.length * 100)}%</span>
        </div>
    `;
}

// ==========================================
// 7. CONFIGURAÇÕES
// ==========================================

function renderConfiguracoes() {
    // Config tabs
    document.querySelectorAll('.config-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.config-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.config-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.config).classList.add('active');
        });
    });

    // Operadores config
    const carteiraSelect = document.getElementById('cfg-op-carteira');
    carteiraSelect.innerHTML = carteiras.map(c => `<option value="${c}">${c}</option>`).join('');

    renderCfgOperadores();
    renderCfgCarteiras();
    renderCfgCriterios();
    renderCfgPesos();

    // Add operador
    document.getElementById('btn-add-operador').addEventListener('click', () => {
        const nome = document.getElementById('cfg-op-nome').value.trim();
        const turno = document.getElementById('cfg-op-turno').value;
        const cart = document.getElementById('cfg-op-carteira').value;
        if (!nome) return alert('Informe o nome do operador.');
        operadores.push({ nome, turno, carteira: cart });
        document.getElementById('cfg-op-nome').value = '';
        renderCfgOperadores();
    });

    // Add carteira
    document.getElementById('btn-add-carteira').addEventListener('click', () => {
        const nome = document.getElementById('cfg-cart-nome').value.trim();
        if (!nome) return alert('Informe o nome da carteira.');
        if (!carteiras.includes(nome)) {
            carteiras.push(nome);
            document.getElementById('cfg-cart-nome').value = '';
            renderCfgCarteiras();
        }
    });

    // Add critério
    document.getElementById('btn-add-criterio').addEventListener('click', () => {
        const nome = document.getElementById('cfg-crit-nome').value.trim();
        if (!nome) return alert('Informe o nome do critério.');
        if (!criterios.includes(nome)) {
            criterios.push(nome);
            pesos[nome] = 5;
            document.getElementById('cfg-crit-nome').value = '';
            renderCfgCriterios();
            renderCfgPesos();
        }
    });
}

function renderCfgOperadores() {
    document.getElementById('tbody-cfg-operadores').innerHTML = operadores.map((op, i) => `
        <tr>
            <td style="font-weight:600">${op.nome}</td>
            <td>${op.turno}</td>
            <td>${op.carteira}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeOperador(${i})"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `).join('');
}

window.removeOperador = function(i) {
    if (confirm(`Remover ${operadores[i].nome}?`)) {
        operadores.splice(i, 1);
        renderCfgOperadores();
    }
};

function renderCfgCarteiras() {
    document.getElementById('tags-carteiras').innerHTML = carteiras.map((c, i) => `
        <span class="tag-item">${c} <button class="tag-remove" onclick="removeCarteira(${i})"><i class="fa-solid fa-xmark"></i></button></span>
    `).join('');
}

window.removeCarteira = function(i) {
    if (confirm(`Remover carteira "${carteiras[i]}"?`)) {
        carteiras.splice(i, 1);
        renderCfgCarteiras();
    }
};

function renderCfgCriterios() {
    document.getElementById('tags-criterios').innerHTML = criterios.map((c, i) => `
        <span class="tag-item">${c} <button class="tag-remove" onclick="removeCriterio(${i})"><i class="fa-solid fa-xmark"></i></button></span>
    `).join('');
}

window.removeCriterio = function(i) {
    if (confirm(`Remover critério "${criterios[i]}"?`)) {
        delete pesos[criterios[i]];
        criterios.splice(i, 1);
        renderCfgCriterios();
        renderCfgPesos();
    }
};

function renderCfgPesos() {
    document.getElementById('pesos-list').innerHTML = criterios.map(c => `
        <div class="peso-row">
            <label>${c}</label>
            <input type="number" min="0" max="100" value="${pesos[c] || 0}" onchange="pesos['${c}'] = parseInt(this.value)">
            <span>%</span>
        </div>
    `).join('');
}

// ==========================================
// INIT
// ==========================================

function initPage(page) {
    switch (page) {
        case 'visao-geral': renderVisaoGeral(); break;
        case 'avaliacoes': renderAvaliacoes(); break;
        case 'evolucao': renderEvolucao(); break;
        case 'operadores': renderOperadores(); break;
        case 'calibragem': renderCalibragem(); break;
        case 'configuracoes': renderConfiguracoes(); break;
    }
}

// Initial render
renderVisaoGeral();
