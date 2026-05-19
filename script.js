/* ========================================
   MONITOR.IA — DADOS E LÓGICA
======================================== */

const carteiras = ['AEGEA'];

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
  { nome: "DÉBORA FERREIRA GOMES", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 1" },
  { nome: "EDUARDA REZENDES", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 1" },
  { nome: "EDVANE BERNARDO DA SILVA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 1" },
  { nome: "LAIS MESSIAS DE OLIVEIRA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 1" },
  { nome: "MARIA EDUARDA DE LIMA MARA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 1" },
  { nome: "MARIA EDUARDA PRATES FERREIRA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 1" },
  { nome: "MIKAELI LIMA DE MATOS", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "NATHALIA PIMENTEL DE MELO MENDES", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "RYAN KARLLOS SOUZA RODRIGUES", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "HAMYEL DA SILVA EUSTAQUIO", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "LARISSA AKEME ARAKAKI DA SILVA", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "ALESSANDRA GONZALEZ BARBOSA", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "FABRÍCIO MARQUES PEREIRA DA SILVA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 3" },
  { nome: "FRANCIELLY ARCE DE OLIVEIRA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 3" },
  { nome: "ÍTALA CRISTINA FRETES ROA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 3" },
  { nome: "JULIA ALMEIDA COLMAN", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 3" },
  { nome: "SINDEL SOARES AMARILHA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 3" },
  { nome: "MARIA EDUARDA SANTOS GUIMARÃES", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 3" },
  { nome: "ISABELLE EMILY DOS SANTOS SILVA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 1" },
  { nome: "MARIA EDUARDA AMORIM DE OLIVEIRA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 1" },
  { nome: "MARIA EDUARDA DIAS DE OLIVEIRA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 1" },
  { nome: "YASMIN ARAUJO DA SILVA", carteira: "AEGEA", turno: "Matutino", monitor: "Monitor 1" },
  { nome: "JHULIA SEVERINO", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "MILLENA MORAIS", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "LANA LUCIA GUILHERME", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "LETICIA FREIRE BRANDÃO COELHO", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "NATHALIA LEITE RAMOS", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "LAÍSSA NUNES", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 2" },
  { nome: "MARIA CLARA DE JESUS VIEIRA", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 3" },
  { nome: "EMILY MARQUES FERREIRA", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 3" },
  { nome: "JULIA DINIZ FERREIRA DOS ANJOS", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 3" },
  { nome: "GABRIELLY MARTINS RODRIGUES", carteira: "AEGEA", turno: "Vespertino", monitor: "Monitor 3" }
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

const semanasMonitoria = [
  { nome: "Semana 1", data: "2026-05-01" },
  { nome: "Semana 2", data: "2026-05-08" },
  { nome: "Semana 3", data: "2026-05-15" },
  { nome: "Semana 4", data: "2026-05-22" }
];

let avaliacoes = [];

operadores.forEach((op, index) => {
  semanasMonitoria.forEach((semana, s) => {
    avaliacoes.push({
      id: `${index + 1}${s + 1}`,
      operador: op.nome,
      turno: op.turno,
      carteira: op.carteira,
      semana: semana.nome,
      data: semana.data,
      notaIA: 0,
      notaHumana: 0,
      notaFinal: 0,
      status: "Pendente",
      pontoAtencao: "Avaliação semanal pendente",
      criteriosNotas: criterios.map(c => ({
        criterio: c,
        nota: 0
      }))
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

        const pageEl = document.getElementById('page-' + target);
        if (pageEl) {
            pageEl.classList.add('active');
            initPage(target);
        }
    });
});

const btnSair = document.getElementById('btn-sair');
if (btnSair) {
    btnSair.addEventListener('click', e => {
        e.preventDefault();
        if (confirm('Deseja realmente sair do sistema?')) {
            alert('Sessão encerrada.');
        }
    });
}

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
    const avs = avaliacoes.filter(a => a.operador === nome && a.status !== 'Pendente');
    if (!avs.length) return 0;
    return Math.round(avs.reduce((s, a) => s + a.notaFinal, 0) / avs.length);
}

function realizadasPorOperador(nome) {
    return avaliacoes.filter(a => a.operador === nome && a.status !== 'Pendente').length;
}

function getResumoSemanal() {
    return semanasMonitoria.map(sem => {
        const lista = avaliacoes.filter(a => a.semana === sem.nome);
        const realizadas = lista.filter(a => a.status !== 'Pendente').length;
        return {
            nome: sem.nome,
            total: lista.length,
            realizadas,
            pendentes: lista.length - realizadas
        };
    });
}

// ==========================================
// 1. VISÃO GERAL
// ==========================================

function renderVisaoGeral() {
    const totalPlanejado = avaliacoes.length;
    const realizadas = avaliacoes.filter(a => a.status !== 'Pendente').length;
    const pendentes = totalPlanejado - realizadas;
    const percentual = totalPlanejado ? Math.round((realizadas / totalPlanejado) * 100) : 0;

    const kpis = [
        { label: 'Meta Mensal', value: `${realizadas}/${totalPlanejado}`, icon: 'fa-clipboard-list', color: 'navy' },
        { label: 'Realizadas', value: realizadas, icon: 'fa-circle-check', color: '' },
        { label: 'Pendentes', value: pendentes, icon: 'fa-triangle-exclamation', color: 'red' },
        { label: 'Operadores', value: operadores.length, icon: 'fa-users', color: 'blue' },
        { label: 'Concluído', value: `${percentual}%`, icon: 'fa-chart-simple', color: 'purple' },
        { label: 'Regra', value: '1x/sem', icon: 'fa-calendar-check', color: 'orange' },
    ];

    const kpiGrid = document.getElementById('kpi-grid');
    if (kpiGrid) {
        kpiGrid.innerHTML = kpis.map(k => `
            <div class="kpi-card ${k.color}">
                <div class="kpi-label">${k.label}</div>
                <div class="kpi-value">${k.value}</div>
                <div class="kpi-icon"><i class="fa-solid ${k.icon}"></i></div>
            </div>
        `).join('');
    }

    const top5 = document.getElementById('top5-list');
    if (top5) {
        top5.innerHTML = getResumoSemanal().map((s, i) => `
            <div class="top5-item">
                <div class="top5-rank">${i + 1}</div>
                <div class="top5-name">${s.nome}</div>
                <div class="top5-score">${s.realizadas}/${s.total}</div>
            </div>
        `).join('');
    }

    renderOverviewChart();
}

function renderOverviewChart() {
    const ctx = document.getElementById('chart-overview-line');
    if (!ctx) return;
    if (ctx._chart) ctx._chart.destroy();

    const resumo = getResumoSemanal();

    ctx._chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: resumo.map(s => s.nome),
            datasets: [{
                label: 'Avaliações realizadas',
                data: resumo.map(s => s.realizadas),
                backgroundColor: '#00c853',
                borderRadius: 8,
                barThickness: 38
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
                y: { beginAtZero: true, grid: { color: '#eaecf0' }, ticks: { precision: 0, font: { size: 11 } } },
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

    const fCarteira = document.getElementById('f-carteira');
    const fOperador = document.getElementById('f-operador');

    if (fCarteira && fCarteira.options.length <= 1) {
        carteiras.forEach(c => {
            const o = document.createElement('option');
            o.value = c;
            o.textContent = c;
            fCarteira.appendChild(o);
        });
    }

    if (fOperador && fOperador.options.length <= 1) {
        operadores.forEach(op => {
            const o = document.createElement('option');
            o.value = op.nome;
            o.textContent = op.nome;
            fOperador.appendChild(o);
        });
    }

    const grid = document.getElementById('avaliacoes-grid');
    if (!grid) return;

    grid.innerHTML = list.map(a => {
        const statusClass = a.status === 'Pendente' ? 'badge-pendente' : a.status === 'Aplicado' ? 'badge-aplicado' : 'badge-recusado';

        return `
        <div class="aval-card">
            <div class="aval-card-top">
                <div>
                    <div class="aval-operador">${a.operador}</div>
                    <div class="aval-data">
                        <i class="fa-regular fa-calendar"></i> ${a.semana} — ${formatDate(a.data)}
                    </div>
                </div>
                <span class="aval-carteira-tag">${a.turno}</span>
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
                <span class="aval-badge ${statusClass}">
                    <i class="fa-solid fa-circle" style="font-size:6px"></i> ${a.status}
                </span>
            </div>

            <div class="aval-atencao"><strong>Atenção:</strong> ${a.pontoAtencao}</div>

            <div class="aval-card-footer">
                <button class="btn btn-navy btn-sm" onclick="showDetail('${a.id}')">
                    <i class="fa-solid fa-eye"></i> Ver Detalhes
                </button>
            </div>
        </div>`;
    }).join('');
}

function applyFilters() {
    let filtered = [...avaliacoes];

    const cart = document.getElementById('f-carteira')?.value;
    const op = document.getElementById('f-operador')?.value;
    const status = document.getElementById('f-status')?.value;
    const dIni = document.getElementById('f-data-ini')?.value;
    const dFim = document.getElementById('f-data-fim')?.value;

    if (cart) filtered = filtered.filter(a => a.carteira === cart);
    if (op) filtered = filtered.filter(a => a.operador === op);
    if (status) filtered = filtered.filter(a => a.status === status);
    if (dIni) filtered = filtered.filter(a => a.data >= dIni);
    if (dFim) filtered = filtered.filter(a => a.data <= dFim);

    renderAvaliacoes(filtered);
}

const btnFiltrar = document.getElementById('btn-filtrar');
if (btnFiltrar) btnFiltrar.addEventListener('click', applyFilters);

const btnLimpar = document.getElementById('btn-limpar');
if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
        if (document.getElementById('f-carteira')) document.getElementById('f-carteira').value = '';
        if (document.getElementById('f-operador')) document.getElementById('f-operador').value = '';
        if (document.getElementById('f-periodo')) document.getElementById('f-periodo').value = '';
        if (document.getElementById('f-status')) document.getElementById('f-status').value = '';
        if (document.getElementById('f-data-ini')) document.getElementById('f-data-ini').value = '';
        if (document.getElementById('f-data-fim')) document.getElementById('f-data-fim').value = '';
        renderAvaliacoes();
    });
}

// ==========================================
// MODAL DETALHES
// ==========================================

function showDetail(id) {
    const a = avaliacoes.find(x => x.id == id);
    if (!a) return;

    const cat = getCategoria(a.notaFinal);
    const statusClass = a.status === 'Pendente' ? 'badge-pendente' : a.status === 'Aplicado' ? 'badge-aplicado' : 'badge-recusado';

    const modalBody = document.getElementById('modal-body');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="detail-grid">
            <div class="detail-item">
                <div class="detail-label">Operador</div>
                <div class="detail-value">${a.operador}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Turno</div>
                <div class="detail-value">${a.turno}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Semana</div>
                <div class="detail-value">${a.semana}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Data</div>
                <div class="detail-value">${formatDate(a.data)}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Status</div>
                <div class="detail-value"><span class="aval-badge ${statusClass}">${a.status}</span></div>
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
    `;

    document.getElementById('modal-overlay')?.classList.add('open');
}

const modalClose = document.getElementById('modal-close');
if (modalClose) {
    modalClose.addEventListener('click', () => {
        document.getElementById('modal-overlay')?.classList.remove('open');
    });
}

const modalOverlay = document.getElementById('modal-overlay');
if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
        if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
    });
}

// ==========================================
// 3. EVOLUÇÃO
// ==========================================

function renderEvolucao() {
    const ctxLine = document.getElementById('chart-evolucao-line');
    if (ctxLine) {
        if (ctxLine._chart) ctxLine._chart.destroy();

        const resumo = getResumoSemanal();

        ctxLine._chart = new Chart(ctxLine, {
            type: 'bar',
            data: {
                labels: resumo.map(s => s.nome),
                datasets: [
                    {
                        label: 'Realizadas',
                        data: resumo.map(s => s.realizadas),
                        backgroundColor: '#00c853',
                        borderRadius: 6
                    },
                    {
                        label: 'Pendentes',
                        data: resumo.map(s => s.pendentes),
                        backgroundColor: '#f59e0b',
                        borderRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } },
                    tooltip: { backgroundColor: '#0f1b2d', padding: 10, cornerRadius: 8 }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#eaecf0' }, ticks: { precision: 0 } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    const ctxBar = document.getElementById('chart-evolucao-bar');
    if (ctxBar) {
        if (ctxBar._chart) ctxBar._chart.destroy();

        const porTurno = ['Matutino', 'Vespertino'].map(turno => {
            const lista = avaliacoes.filter(a => a.turno === turno);
            const feitas = lista.filter(a => a.status !== 'Pendente').length;
            return { turno, feitas, total: lista.length };
        });

        ctxBar._chart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: porTurno.map(x => x.turno),
                datasets: [{
                    label: 'Realizadas por turno',
                    data: porTurno.map(x => x.feitas),
                    backgroundColor: '#3b82f6',
                    borderRadius: 6,
                    barThickness: 32
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
                    y: { beginAtZero: true, grid: { color: '#eaecf0' }, ticks: { precision: 0 } },
                    x: { grid: { display: false }, ticks: { font: { size: 11, weight: 600 } } }
                }
            }
        });
    }
}

// ==========================================
// 4. OPERADORES
// ==========================================

function renderOperadores() {
    const tbody = document.getElementById('tbody-operadores');
    if (!tbody) return;

    function statusSemana(av) {
        if (!av) return '—';
        if (av.status === 'Pendente') {
            return '<span class="aval-badge badge-pendente">⏳ Pendente</span>';
        }
        return '<span class="aval-badge badge-aplicado">✅ Avaliado</span>';
    }

    tbody.innerHTML = operadores.map(op => {
        const avOp = avaliacoes.filter(a => a.operador === op.nome);

        const s1 = avOp.find(a => a.semana === 'Semana 1');
        const s2 = avOp.find(a => a.semana === 'Semana 2');
        const s3 = avOp.find(a => a.semana === 'Semana 3');
        const s4 = avOp.find(a => a.semana === 'Semana 4');

        const feitas = avOp.filter(a => a.status !== 'Pendente').length;
        const statusGeral = feitas === 4 ? 'Completo' : `${feitas}/4 realizadas`;

        return `<tr>
            <td style="font-weight:600">${op.nome}</td>
            <td>${op.turno}</td>
            <td>${statusSemana(s1)}</td>
            <td>${statusSemana(s2)}</td>
            <td>${statusSemana(s3)}</td>
            <td>${statusSemana(s4)}</td>
            <td style="font-weight:700;color:${feitas === 4 ? '#00a344' : '#f59e0b'}">${statusGeral}</td>
        </tr>`;
    }).join('');
}

// ==========================================
// 5. CALIBRAGEM
// ==========================================

function renderCalibragem() {
    const tbody = document.getElementById('tbody-calibragem');
    if (!tbody) return;

    tbody.innerHTML = avaliacoes.slice(0, 20).map(a => {
        const diff = a.notaIA - a.notaHumana;
        const absDiff = Math.abs(diff);
        let statusCalib, statusClass;

        if (absDiff <= 3) {
            statusCalib = 'Calibrado';
            statusClass = 'calibragem-ok';
        } else if (absDiff <= 7) {
            statusCalib = 'Atenção';
            statusClass = 'calibragem-atencao';
        } else {
            statusCalib = 'Divergente';
            statusClass = 'calibragem-divergente';
        }

        return `<tr>
            <td style="font-weight:600">${a.operador}</td>
            <td>${formatDate(a.data)}</td>
            <td style="font-weight:700">${a.notaIA}</td>
            <td style="font-weight:700">${a.notaHumana}</td>
            <td style="font-weight:600">${diff > 0 ? '+' : ''}${diff}</td>
            <td><span class="${statusClass}"><i class="fa-solid fa-circle-check"></i> ${statusCalib}</span></td>
        </tr>`;
    }).join('');

    const resumo = document.getElementById('calibragem-resumo');
    if (resumo) {
        resumo.innerHTML = `
            <div class="calib-stat">
                <span class="calib-stat-label">Registros Planejados</span>
                <span class="calib-stat-value" style="color:#0f1b2d">${avaliacoes.length}</span>
            </div>
            <div class="calib-stat">
                <span class="calib-stat-label">Pendentes</span>
                <span class="calib-stat-value" style="color:#f59e0b">${avaliacoes.filter(a => a.status === 'Pendente').length}</span>
            </div>
        `;
    }
}

// ==========================================
// 7. CONFIGURAÇÕES
// ==========================================

function renderConfiguracoes() {
    document.querySelectorAll('.config-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.config-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.config-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.config)?.classList.add('active');
        });
    });

    const carteiraSelect = document.getElementById('cfg-op-carteira');
    if (carteiraSelect) {
        carteiraSelect.innerHTML = carteiras.map(c => `<option value="${c}">${c}</option>`).join('');
    }

    renderCfgOperadores();
    renderCfgCarteiras();
    renderCfgCriterios();
    renderCfgPesos();
}

function renderCfgOperadores() {
    const tbody = document.getElementById('tbody-cfg-operadores');
    if (!tbody) return;

    tbody.innerHTML = operadores.map((op, i) => `
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
    const tags = document.getElementById('tags-carteiras');
    if (!tags) return;

    tags.innerHTML = carteiras.map((c, i) => `
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
    const tags = document.getElementById('tags-criterios');
    if (!tags) return;

    tags.innerHTML = criterios.map((c, i) => `
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
    const lista = document.getElementById('pesos-list');
    if (!lista) return;

    lista.innerHTML = criterios.map(c => `
        <div class="peso-row">
            <label>${c}</label>
            <input type="number" min="0" max="100" value="${pesos[c] || 0}" onchange="pesos['${c}'] = parseInt(this.value)">
            <span>%</span>
        </div>
    `).join('');
}

// ==========================================
// RELATÓRIOS
// ==========================================

function renderRelatorios() {
    alert('Relatórios em desenvolvimento.');
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
        case 'relatorios': renderRelatorios(); break;
        case 'configuracoes': renderConfiguracoes(); break;
    }
}

renderVisaoGeral();