/**
 * ===================================================================
 * ARQUIVO: script.js
 * DESCRIÇÃO: Test-Drive Especializado com Diagnóstico Executivo de Alta
 * Conversão, Odontologia personalizada e categoria Outro Segmento.
 * ===================================================================
 */

// 1. DICIONÁRIO DE PRESETS COM OS NICHOS OTIMIZADOS
const NICHE_PRESETS = {
    // 1. DELIVERY UNIFICADO (TAG CONCISA E STATUS ALINHADO)
    delivery: {
        experienceType: 'delivery',
        nicheLabel: 'DELIVERY',
        defaultBusinessName: 'Sabor & Cia Delivery',
        statusBadge: '● Cozinha aberta',
        tagFeature: 'ENTREGA RÁPIDA',
        sectionTitle: 'Mais Pedido do Cardápio',
        defaultItemName: 'Combo Especial com Batata & Refri',
        defaultPrice: 38.90,
        itemIcon: '<i class="fa-solid fa-utensils"></i>',
        cardClasses: 'bg-gradient-to-br from-amber-500/20 to-amber-900/10 border border-amber-500/30',
        tagClasses: 'bg-amber-500 text-slate-950',
        iconBgClass: 'bg-slate-700 text-amber-400',
        infoSubtext: '30-45 min de entrega',
        actionBtnText: 'Ver Sacola',
        bottomLabel: 'Total do Pedido',
        modalTitle: 'Finalizar Pedido',
        itemTypeLabel: 'Quantidade de Itens',
        receiptTitle: 'NOVO PEDIDO DE DELIVERY!',
        explainText: 'Pedido formatado direto para a cozinha com endereço e forma de pagamento.'
    },

    // 2. SALÃO & ESTÉTICA
    beauty: {
        experienceType: 'booking',
        nicheLabel: 'ESTÉTICA & BELEZA',
        defaultBusinessName: 'Studio Bella VIP',
        statusBadge: '● Horários livres',
        tagFeature: 'ATENDIMENTO VIP',
        sectionTitle: 'Procedimento em Destaque',
        defaultItemName: 'Corte, Escova & Hidratação Glow',
        defaultPrice: 130.00,
        itemIcon: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
        cardClasses: 'bg-gradient-to-br from-fuchsia-500/20 to-rose-900/10 border border-fuchsia-500/30',
        tagClasses: 'bg-fuchsia-500 text-white',
        iconBgClass: 'bg-slate-700 text-fuchsia-400',
        serviceActionLabel: 'Agendar Horário Online',
        serviceBtnClasses: 'bg-fuchsia-500/20 border border-fuchsia-500/40 text-fuchsia-300 hover:bg-fuchsia-500 hover:text-white',
        infoSubtext: 'Atendimento com hora marcada',
        actionBtnText: 'Reservar Procedimento',
        bottomLabel: 'Investimento Estimado',
        modalTitle: 'Reserva de Horário',
        itemTypeLabel: 'Procedimento Escolhido',
        serviceDetailPrompt: 'Alguma preferência de profissional?',
        defaultServiceDetail: 'Sem preferência, primeiro horário disponível',
        receiptTitle: 'NOVO AGENDAMENTO DE SALÃO!',
        explainText: 'Horário reservado com procedimento definido sem precisar de mensagens manuais no WhatsApp.'
    },

    // 3. BARBEARIA CLÁSSICA
    barber: {
        experienceType: 'booking',
        nicheLabel: 'BARBEARIA',
        defaultBusinessName: 'Barbearia Vintage Club',
        statusBadge: '● Cadeira disponível',
        tagFeature: 'SEM ESPERA',
        sectionTitle: 'Combo Mais Popular',
        defaultItemName: 'Corte Degradê + Barboterapia',
        defaultPrice: 75.00,
        itemIcon: '<i class="fa-solid fa-scissors"></i>',
        cardClasses: 'bg-gradient-to-br from-amber-700/25 to-stone-900/20 border border-amber-600/30',
        tagClasses: 'bg-amber-600 text-white',
        iconBgClass: 'bg-slate-700 text-amber-500',
        serviceActionLabel: 'Garantir Vaga',
        serviceBtnClasses: 'bg-amber-600/20 border border-amber-600/40 text-amber-300 hover:bg-amber-600 hover:text-white',
        infoSubtext: 'Agendamento rápido sem fila',
        actionBtnText: 'Garantir Cadeira',
        bottomLabel: 'Valor do Combo',
        modalTitle: 'Reserva de Cadeira',
        itemTypeLabel: 'Combo Escolhido',
        serviceDetailPrompt: 'Barbeiro de preferência:',
        defaultServiceDetail: 'Qualquer barbeiro livre',
        receiptTitle: 'NOVA RESERVA DE BARBEARIA!',
        explainText: 'O cliente agenda a cadeira sozinho e chega sem ficar esperando no balcão.'
    },

    // 4. PET SHOP & BANHO E TOSA
    pet: {
        experienceType: 'booking',
        nicheLabel: 'PET SHOP',
        defaultBusinessName: 'Pet Charm Banho & Tosa',
        statusBadge: '● Vagas abertas',
        tagFeature: 'CUIDADO ESPECIAL',
        sectionTitle: 'Pacote de Cuidados Favorito',
        defaultItemName: 'Banho, Tosa Higiênica & Hidratação',
        defaultPrice: 85.00,
        itemIcon: '<i class="fa-solid fa-paw"></i>',
        cardClasses: 'bg-gradient-to-br from-cyan-500/20 to-teal-900/10 border border-cyan-500/30',
        tagClasses: 'bg-cyan-500 text-slate-950',
        iconBgClass: 'bg-slate-700 text-cyan-400',
        serviceActionLabel: 'Agendar para meu Pet',
        serviceBtnClasses: 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950',
        infoSubtext: 'Equipe especializada e carinho',
        actionBtnText: 'Agendar Pet',
        bottomLabel: 'Valor do Pacote',
        modalTitle: 'Agendamento Pet',
        itemTypeLabel: 'Serviço Pet',
        serviceDetailPrompt: 'Nome e Raça/Porte do Pet:',
        defaultServiceDetail: 'Thor (Golden Retriever - Médio Porte)',
        receiptTitle: 'NOVO AGENDAMENTO DE BANHO & TOSA!',
        explainText: 'Você recebe o nome do pet, a raça e o serviço pronto no Zap sem confusão.'
    },

    // 5. CENTRO AUTOMOTIVO & OFICINA
    auto: {
        experienceType: 'booking',
        nicheLabel: 'AUTO CENTER',
        defaultBusinessName: 'Auto Center Mecânica Nobre',
        statusBadge: '● Elevador disponível',
        tagFeature: 'ORÇAMENTO TRANSPARENTE',
        sectionTitle: 'Serviço Mais Solicitado',
        defaultItemName: 'Revisão Preventiva Geral + Alinhamento',
        defaultPrice: 240.00,
        itemIcon: '<i class="fa-solid fa-wrench"></i>',
        cardClasses: 'bg-gradient-to-br from-blue-500/20 to-indigo-900/10 border border-blue-500/30',
        tagClasses: 'bg-blue-500 text-white',
        iconBgClass: 'bg-slate-700 text-blue-400',
        serviceActionLabel: 'Agendar Diagnóstico',
        serviceBtnClasses: 'bg-blue-500/20 border border-blue-500/40 text-blue-300 hover:bg-blue-500 hover:text-white',
        infoSubtext: 'Peças com garantia de fábrica',
        actionBtnText: 'Agendar Oficina',
        bottomLabel: 'Preço Estimado',
        modalTitle: 'Diagnóstico Mecânico',
        itemTypeLabel: 'Serviço Automotivo',
        serviceDetailPrompt: 'Modelo e Ano do Carro:',
        defaultServiceDetail: 'Chevrolet Onix 2021 (Freio e Óleo)',
        receiptTitle: 'NOVA SOLICITAÇÃO MECÂNICA!',
        explainText: 'O motorista já chega com os dados do carro e o defeito relatado com antecedência.'
    },

    // 6. ACADEMIA & FITNESS
    fitness: {
        experienceType: 'health',
        nicheLabel: 'ACADEMIA',
        defaultBusinessName: 'Studio Força & Performance',
        statusBadge: '● Matrículas abertas',
        tagFeature: 'ACESSO DIGITAL',
        sectionTitle: 'Plano em Destaque',
        defaultItemName: 'Plano Livre Mensal + Musculação',
        defaultPrice: 119.90,
        itemIcon: '<i class="fa-solid fa-dumbbell"></i>',
        cardClasses: 'bg-gradient-to-br from-emerald-500/20 to-green-900/10 border border-emerald-500/30',
        tagClasses: 'bg-emerald-500 text-slate-950',
        iconBgClass: 'bg-slate-700 text-emerald-400',
        serviceActionLabel: 'Agendar Aula Experimental',
        serviceBtnClasses: 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950',
        infoSubtext: 'Musculação, cardio e vestiário',
        actionBtnText: 'Matricule-se Já',
        bottomLabel: 'Mensalidade',
        modalTitle: 'Adesão de Plano',
        itemTypeLabel: 'Plano Selecionado',
        receiptTitle: 'NOVO INTERESSE DE MATRÍCULA!',
        explainText: 'O aluno já escolhe o plano e turno de treino, facilitando a conversão do consultor.',
        goalLabel: 'Objetivo Principal de Treino:',
        goalsList: [
            'Hipertrofia & Ganho de Força',
            'Emagrecimento & Definição',
            'Condicionamento Físico & Saúde',
            'Aula Experimental com Personal'
        ]
    },

    // 7. ODONTOLOGIA COM QUEIXAS DENTÁRIAS EXCLUSIVAS
    dental: {
        experienceType: 'health',
        nicheLabel: 'ODONTOLOGIA',
        defaultBusinessName: 'Sorriso Prime Odontologia',
        statusBadge: '● Agenda aberta',
        tagFeature: 'AVALIAÇÃO COMPLETA',
        sectionTitle: 'Tratamento em Destaque',
        defaultItemName: 'Clareamento a Laser + Limpeza Profunda',
        defaultPrice: 350.00,
        itemIcon: '<i class="fa-solid fa-tooth"></i>',
        cardClasses: 'bg-gradient-to-br from-sky-500/20 to-cyan-900/10 border border-sky-400/30',
        tagClasses: 'bg-sky-400 text-slate-950',
        iconBgClass: 'bg-slate-700 text-sky-400',
        serviceActionLabel: 'Solicitar Pré-Agendamento',
        serviceBtnClasses: 'bg-sky-400/20 border border-sky-400/40 text-sky-300 hover:bg-sky-400 hover:text-slate-950',
        infoSubtext: 'Avaliação clínica especializada',
        actionBtnText: 'Agendar Consulta',
        bottomLabel: 'Valor Estimado',
        modalTitle: 'Triagem Odontológica',
        itemTypeLabel: 'Tratamento em Foco',
        receiptTitle: 'NOVO PRÉ-AGENDAMENTO ODONTOLÓGICO!',
        explainText: 'A secretária recebe o paciente com queixa dental triada e o turno de preferência.',
        goalLabel: 'Motivo da Consulta / Queixa Dental:',
        goalsList: [
            'Avaliação Geral / Check-up Preventivo',
            'Clareamento Dental & Estética do Sorriso',
            'Dor de Dente / Sensibilidade Urgente',
            'Aparelho Ortodôntico / Alinhadores',
            'Implante / Prótese Dentária'
        ]
    },

    // 8. NUTRIÇÃO COM METAS ALIMENTARES EXCLUSIVAS
    nutrition: {
        experienceType: 'health',
        nicheLabel: 'NUTRIÇÃO',
        defaultBusinessName: 'NutriVida Saúde & Nutrição',
        statusBadge: '● Vagas abertas',
        tagFeature: 'PLANO INDIVIDUALIZADO',
        sectionTitle: 'Consulta Principal',
        defaultItemName: 'Consulta Nutricional + Bioimpedância',
        defaultPrice: 180.00,
        itemIcon: '<i class="fa-solid fa-apple-whole"></i>',
        cardClasses: 'bg-gradient-to-br from-emerald-500/20 to-teal-900/10 border border-emerald-400/30',
        tagClasses: 'bg-emerald-400 text-slate-950',
        iconBgClass: 'bg-slate-700 text-emerald-400',
        serviceActionLabel: 'Agendar Consulta Inicial',
        serviceBtnClasses: 'bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400 hover:text-slate-950',
        infoSubtext: 'Dieta e acompanhamento por app',
        actionBtnText: 'Reservar Horário',
        bottomLabel: 'Investimento',
        modalTitle: 'Triagem Nutricional',
        itemTypeLabel: 'Tipo de Consulta',
        receiptTitle: 'NOVA CONSULTA NUTRICIONAL AGENDADA!',
        explainText: 'O paciente define o objetivo antes mesmo de iniciar o atendimento.',
        goalLabel: 'Objetivo Nutricional Principal:',
        goalsList: [
            'Emagrecimento Saudável & Queima de Gordura',
            'Ganho de Massa Magra / Hipertrofia',
            'Reeducação Alimentar & Longevidade',
            'Nutrição Esportiva para Performance',
            'Saúde Digestiva / Intolerâncias'
        ]
    },

    // 9. OUTRO SEGMENTO (COMÉRCIO OU SERVIÇOS)
    other: {
        experienceType: 'booking',
        nicheLabel: 'SERVIÇOS & COMÉRCIO',
        defaultBusinessName: 'Soluções & Negócios Prime',
        statusBadge: '● Atendimento online',
        tagFeature: 'DIRETO NO WHATSAPP',
        sectionTitle: 'Solução ou Produto Principal',
        defaultItemName: 'Atendimento Comercial Personalizado',
        defaultPrice: 150.00,
        itemIcon: '<i class="fa-solid fa-store"></i>',
        cardClasses: 'bg-gradient-to-br from-violet-500/20 to-purple-900/10 border border-violet-500/30',
        tagClasses: 'bg-violet-500 text-white',
        iconBgClass: 'bg-slate-700 text-violet-400',
        serviceActionLabel: 'Solicitar Orçamento / Vaga',
        serviceBtnClasses: 'bg-violet-500/20 border border-violet-500/40 text-violet-300 hover:bg-violet-500 hover:text-white',
        infoSubtext: 'Orçamento sem burocracia',
        actionBtnText: 'Pedir Orçamento',
        bottomLabel: 'Valor de Referência',
        modalTitle: 'Solicitação de Proposta',
        itemTypeLabel: 'Item / Serviço de Interesse',
        serviceDetailPrompt: 'Descreva resumidamente o que você precisa:',
        defaultServiceDetail: 'Gostaria de um orçamento detalhado e prazos.',
        receiptTitle: 'NOVA SOLICITAÇÃO COMERCIAL!',
        explainText: 'O lead entra qualificado com a necessidade já descrita, facilitando o fechamento da venda.'
    }
};

// 2. ESTADO GLOBAL DA APLICAÇÃO
const appState = {
    nicheKey: 'delivery',
    companyName: '',
    channel: 'whatsapp',
    productName: '',
    productPrice: 38.90,
    cartQuantity: 1,
    phoneScreen: 'catalog'
};

// 3. SELEÇÃO DE ELEMENTOS DO DOM (QUIZ & SMARTPHONE)
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const stepSuccess = document.getElementById('step-success');

const stepBadge = document.getElementById('step-badge');
const stepNumberText = document.getElementById('step-number-text');
const stepTitleText = document.getElementById('step-title-text');
const dot1 = document.getElementById('dot-1');
const dot2 = document.getElementById('dot-2');
const dot3 = document.getElementById('dot-3');

const inputCompanyName = document.getElementById('company-name');
const inputProductName = document.getElementById('product-name');
const inputProductPrice = document.getElementById('product-price');
const labelProductName = document.getElementById('label-product-name');
const labelProductPrice = document.getElementById('label-product-price');
const nicheButtons = document.querySelectorAll('.niche-btn');
const channelButtons = document.querySelectorAll('.channel-btn');

const btnNextToStep2 = document.getElementById('next-to-step-2');
const btnBackToStep1 = document.getElementById('back-to-step-1');
const btnNextToStep3 = document.getElementById('next-to-step-3');
const btnBackToStep2 = document.getElementById('back-to-step-2');
const btnFinishQuiz = document.getElementById('finish-quiz');
const btnRestartQuiz = document.getElementById('restart-quiz');
const ctaWhatsappLink = document.getElementById('cta-whatsapp-link');

// Telas do Smartphone
const phoneViewCatalog = document.getElementById('phone-view-catalog');
const phoneViewDrawer = document.getElementById('phone-view-drawer');
const phoneViewReceipt = document.getElementById('phone-view-receipt');
const phoneBottomBar = document.getElementById('phone-bottom-bar');

// Tela 1: Catálogo
const previewHeaderCard = document.getElementById('preview-header-card');
const previewNicheTag = document.getElementById('preview-niche-tag');
const previewStatusBadge = document.getElementById('preview-status-badge');
const previewBusinessName = document.getElementById('preview-business-name');
const previewDeliveryTime = document.getElementById('preview-delivery-time');
const previewSectionTitle = document.getElementById('preview-section-title');
const previewTagFeature = document.getElementById('preview-tag-feature');
const previewItemIcon = document.getElementById('preview-item-icon');
const previewItemName = document.getElementById('preview-item-name');
const previewItemPrice = document.getElementById('preview-item-price');
const previewCartControls = document.getElementById('preview-cart-controls');
const previewServiceActionBtn = document.getElementById('preview-service-action-btn');
const cartQty = document.getElementById('cart-qty');
const btnCartMinus = document.getElementById('cart-minus');
const btnCartPlus = document.getElementById('cart-plus');
const previewBottomLabel = document.getElementById('preview-bottom-label');
const previewTotalPrice = document.getElementById('preview-total-price');
const previewBtnOrderText = document.getElementById('preview-btn-order-text');
const previewInteractionTip = document.getElementById('preview-interaction-tip');

// Tela 2: Gaveta Dinâmica
const drawerBackBtn = document.getElementById('drawer-back-btn');
const drawerConfirmBtn = document.getElementById('drawer-confirm-btn');
const drawerConfirmBtnText = document.getElementById('drawer-confirm-btn-text');
const drawerModalTitle = document.getElementById('drawer-modal-title');
const drawerItemTitle = document.getElementById('drawer-item-title');
const drawerItemPrice = document.getElementById('drawer-item-price');
const drawerItemTypeLabel = document.getElementById('drawer-item-type-label');
const drawerItemQty = document.getElementById('drawer-item-qty');
const simulatedCustomerName = document.getElementById('simulated-customer-name');

// Grupos de campos da gaveta
const drawerGroupDelivery = document.getElementById('drawer-group-delivery');
const drawerGroupBooking = document.getElementById('drawer-group-booking');
const drawerGroupHealth = document.getElementById('drawer-group-health');
const drawerHealthLabel = document.getElementById('drawer-health-label');
const drawerServiceDetailLabel = document.getElementById('drawer-service-detail-label');
const simulatedServiceDetail = document.getElementById('simulated-service-detail');
const simulatedPayment = document.getElementById('simulated-payment');
const simulatedDay = document.getElementById('simulated-day');
const simulatedGoal = document.getElementById('simulated-goal');
const simulatedShift = document.getElementById('simulated-shift');

// Tela 3: Comprovante WhatsApp
const receiptBadgeTitle = document.getElementById('receipt-badge-title');
const receiptBusinessName = document.getElementById('receipt-business-name');
const receiptTextBody = document.getElementById('receipt-text-body');
const receiptExplainText = document.getElementById('receipt-explain-text');
const receiptResetBtn = document.getElementById('receipt-reset-btn');

// Elementos da Tela de Sucesso (Diagnóstico Executivo de Alta Conversão)
const diagBusinessName = document.getElementById('diag-business-name');
const diagBottleneckTitle = document.getElementById('diag-bottleneck-title');
const diagBottleneckDesc = document.getElementById('diag-bottleneck-desc');
const diagSolutionTitle = document.getElementById('diag-solution-title');
const diagSolutionDesc = document.getElementById('diag-solution-desc');
const diagProductName = document.getElementById('diag-product-name');
const diagProductPrice = document.getElementById('diag-product-price');

// 4. FUNÇÃO DE CONTROLE DAS TELAS DO SMARTPHONE
function showPhoneScreen(screenName) {
    appState.phoneScreen = screenName;

    phoneViewCatalog.classList.toggle('hidden', screenName !== 'catalog');
    phoneViewDrawer.classList.toggle('hidden', screenName !== 'drawer');
    phoneViewReceipt.classList.toggle('hidden', screenName !== 'receipt');
    phoneBottomBar.classList.toggle('hidden', screenName !== 'catalog');

    if (screenName === 'drawer') {
        renderDrawerDetails();
    } else if (screenName === 'receipt') {
        renderReceiptDetails();
    }
}

// 5. RENDERIZAÇÃO DA VITRINE (VIEW 1)
function renderSmartphone() {
    const preset = NICHE_PRESETS[appState.nicheKey];

    previewBusinessName.textContent = appState.companyName.trim() || preset.defaultBusinessName;
    previewHeaderCard.className = `rounded-2xl p-4 transition-all duration-300 ${preset.cardClasses}`;
    previewNicheTag.textContent = preset.nicheLabel;
    previewNicheTag.className = `text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${preset.tagClasses}`;
    previewStatusBadge.textContent = preset.statusBadge;
    previewDeliveryTime.textContent = preset.infoSubtext;

    previewSectionTitle.textContent = preset.sectionTitle;
    previewTagFeature.textContent = preset.tagFeature;

    previewItemIcon.innerHTML = preset.itemIcon;
    previewItemIcon.className = `w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0 ${preset.iconBgClass}`;
    
    const currentName = appState.productName.trim() || preset.defaultItemName;
    previewItemName.textContent = currentName;
    previewItemPrice.textContent = `R$ ${appState.productPrice.toFixed(2).replace('.', ',')}`;

    if (preset.experienceType === 'delivery') {
        previewCartControls.classList.remove('hidden');
        previewServiceActionBtn.classList.add('hidden');
        cartQty.textContent = appState.cartQuantity;
        const total = appState.productPrice * appState.cartQuantity;
        previewTotalPrice.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        previewInteractionTip.textContent = 'Toque na barra verde abaixo para ver a sacola do pedido!';
    } else {
        previewCartControls.classList.add('hidden');
        previewServiceActionBtn.classList.remove('hidden');
        previewServiceActionBtn.textContent = preset.serviceActionLabel;
        previewServiceActionBtn.className = `px-2.5 py-1.5 rounded-lg text-[10px] font-bold shrink-0 transition ${preset.serviceBtnClasses}`;
        previewTotalPrice.textContent = `R$ ${appState.productPrice.toFixed(2).replace('.', ',')}`;
        previewInteractionTip.textContent = 'Toque no botão de ação ou na barra para testar a finalização!';
    }

    previewBottomLabel.textContent = preset.bottomLabel;
    previewBtnOrderText.textContent = preset.actionBtnText;

    if (preset.experienceType === 'delivery') {
        labelProductName.textContent = 'Qual é o seu produto mais vendido (Carro-chefe)?';
        labelProductPrice.textContent = 'Preço de venda médio (R$):';
    } else if (preset.experienceType === 'booking') {
        labelProductName.textContent = 'Qual é o procedimento, serviço ou produto principal?';
        labelProductPrice.textContent = 'Valor do procedimento / serviço (R$):';
    } else {
        labelProductName.textContent = 'Qual é o plano, mensalidade ou consulta em destaque?';
        labelProductPrice.textContent = 'Valor do plano / consulta (R$):';
    }

    updateWhatsAppLink();
}

// 6. RENDERIZAÇÃO DA GAVETA DINÂMICA (VIEW 2)
function renderDrawerDetails() {
    const preset = NICHE_PRESETS[appState.nicheKey];
    const item = appState.productName.trim() || preset.defaultItemName;

    drawerModalTitle.textContent = preset.modalTitle;
    drawerItemTitle.textContent = item;
    drawerItemTypeLabel.textContent = preset.itemTypeLabel;

    drawerGroupDelivery.classList.toggle('hidden', preset.experienceType !== 'delivery');
    drawerGroupBooking.classList.toggle('hidden', preset.experienceType !== 'booking');
    drawerGroupHealth.classList.toggle('hidden', preset.experienceType !== 'health');

    if (preset.experienceType === 'delivery') {
        const total = appState.productPrice * appState.cartQuantity;
        drawerItemPrice.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        drawerItemQty.textContent = `${appState.cartQuantity}x (R$ ${appState.productPrice.toFixed(2).replace('.', ',')} un.)`;
        drawerConfirmBtnText.textContent = 'Simular Envio do Pedido';
    } else if (preset.experienceType === 'booking') {
        drawerItemPrice.textContent = `R$ ${appState.productPrice.toFixed(2).replace('.', ',')}`;
        drawerItemQty.textContent = '1x Atendimento / Orçamento';
        drawerServiceDetailLabel.textContent = preset.serviceDetailPrompt;
        simulatedServiceDetail.value = preset.defaultServiceDetail;
        drawerConfirmBtnText.textContent = 'Simular Envio ao WhatsApp';
    } else {
        drawerItemPrice.textContent = `R$ ${appState.productPrice.toFixed(2).replace('.', ',')}`;
        drawerItemQty.textContent = '1x Adesão / Avaliação';
        drawerConfirmBtnText.textContent = 'Simular Triagem & Reserva';

        if (drawerHealthLabel && preset.goalLabel) {
            drawerHealthLabel.textContent = preset.goalLabel;
        }

        simulatedGoal.innerHTML = '';
        if (preset.goalsList) {
            preset.goalsList.forEach(goalText => {
                const opt = document.createElement('option');
                opt.value = goalText;
                opt.textContent = goalText;
                simulatedGoal.appendChild(opt);
            });
        }
    }
}

// 7. RENDERIZAÇÃO DO COMPROVANTE WHATSAPP (VIEW 3)
function renderReceiptDetails() {
    const preset = NICHE_PRESETS[appState.nicheKey];
    const empresa = appState.companyName.trim() || preset.defaultBusinessName;
    const item = appState.productName.trim() || preset.defaultItemName;
    const cliente = simulatedCustomerName.value.trim() || 'Cliente';

    receiptBadgeTitle.textContent = preset.receiptTitle;
    receiptBusinessName.textContent = empresa;
    receiptExplainText.innerHTML = `<strong>Resultado real:</strong> ${preset.explainText}`;

    if (preset.experienceType === 'delivery') {
        const total = appState.productPrice * appState.cartQuantity;
        const pagamento = simulatedPayment.value;

        receiptTextBody.textContent = `*NOVO PEDIDO DELIVERY #482*
*Cliente:* ${cliente}
*Itens:* ${appState.cartQuantity}x ${item}
*Pagamento:* ${pagamento}
*Total:* R$ ${total.toFixed(2).replace('.', ',')}
*Entrega:* Bairro Central (30-45 min)
*Status:* ✅ Pronto para a Produção!`;

    } else if (preset.experienceType === 'booking') {
        const dia = simulatedDay.value;
        const detalhe = simulatedServiceDetail.value.trim();

        receiptTextBody.textContent = `*SOLICITAÇÃO DE ATENDIMENTO*
*Cliente:* ${cliente}
*Interesse:* ${item}
*Data/Prazo:* ${dia}
*Detalhes:* ${detalhe}
*Valor de Referência:* R$ ${appState.productPrice.toFixed(2).replace('.', ',')}
*Status:* 💬 Atendimento Pré-Formatado!`;

    } else {
        const objetivo = simulatedGoal.value;
        const turno = simulatedShift.value;

        receiptTextBody.textContent = `*FICHA DE TRIAGEM & ADESÃO*
*Paciente/Aluno:* ${cliente}
*Procedimento/Plano:* ${item}
*Queixa/Objetivo:* ${objetivo}
*Turno Preferencial:* ${turno}
*Investimento:* R$ ${appState.productPrice.toFixed(2).replace('.', ',')}
*Status:* 🩺 Triagem Concluída com Sucesso!`;
    }
}

// 8. RENDERIZAÇÃO DO DIAGNÓSTICO EXECUTIVO DE ALTA CONVERSÃO
function renderSuccessDiagnosis() {
    const preset = NICHE_PRESETS[appState.nicheKey];
    const empresa = appState.companyName.trim() || preset.defaultBusinessName;
    const item = appState.productName.trim() || preset.defaultItemName;

    // Injeta nome e produto analisado
    diagBusinessName.textContent = empresa;
    diagProductName.textContent = item;
    diagProductPrice.textContent = `R$ ${appState.productPrice.toFixed(2).replace('.', ',')}`;

    // Adapta o diagnóstico à dor relatada pelo cliente na Etapa 2
    if (appState.channel === 'whatsapp') {
        diagBottleneckTitle.textContent = 'Gargalo: Atendimento Manual Lento no WhatsApp';
        diagBottleneckDesc.textContent = 'Em horários de pico, a demora nas respostas faz até 35% dos clientes desistirem e comprarem no concorrente.';
        diagSolutionTitle.textContent = 'Solução: Catálogo & Pedidos com 1 Clique';
        diagSolutionDesc.textContent = 'O cliente escolhe o que quer sem esperar resposta humana, e o pedido cai 100% calculado e pronto para execução.';
    } else if (appState.channel === 'apps') {
        diagBottleneckTitle.textContent = 'Gargalo: Sangria de Lucro em Comissões (25% a 30%)';
        diagBottleneckDesc.textContent = 'Grande parte da sua margem de lucro fica com plataformas terceiras, e você não é dono da base dos seus próprios clientes.';
        diagSolutionTitle.textContent = 'Solução: Canal Próprio com 0% de Comissões';
        diagSolutionDesc.textContent = 'Todo o faturamento das vendas fica na sua conta, além de fidelizar o cliente diretamente no seu WhatsApp.';
    } else {
        diagBottleneckTitle.textContent = 'Gargalo: Desorganização no Direct / Telefone';
        diagBottleneckDesc.textContent = 'Pedidos e agendamentos anotados manualmente geram erros frequentes, confusão de horários e falta de controle financeiro.';
        diagSolutionTitle.textContent = 'Solução: Fluxo Digital Padronizado';
        diagSolutionDesc.textContent = 'Centralização dos pedidos em uma página rápida, eliminando cadernos e retrabalho na equipe.';
    }

    updateWhatsAppLink();
}

// 9. LINK DE CONVERSÃO DO WHATSAPP DA DESTRAVACOMMERCE
function updateWhatsAppLink() {
    const seuNumeroWhatsapp = "5521966386120";
    const preset = NICHE_PRESETS[appState.nicheKey];
    const empresa = appState.companyName.trim() || preset.defaultBusinessName;
    const item = appState.productName.trim() || preset.defaultItemName;

    let canalTexto = 'WhatsApp manual lento';
    if (appState.channel === 'apps') canalTexto = 'Aplicativos com taxas altas (25% a 30%)';
    if (appState.channel === 'direct') canalTexto = 'Direct do Instagram / Telefone';

    const mensagem = `Olá! Realizei o Raio-X Digital da minha empresa na DestravaCommerce:
*Empresa:* ${empresa}
*Segmento:* ${preset.nicheLabel}
*Gargalo Atual:* ${canalTexto}
*Destaque Comercial:* ${item} (R$ ${appState.productPrice.toFixed(2).replace('.', ',')})

Gostaria de receber uma proposta para colocar um sistema próprio no ar e destravar minhas vendas!`;

    ctaWhatsappLink.href = `https://wa.me/${seuNumeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// 10. EVENTOS DA ETAPA 1 (Nome e Seleção dos Nichos)
inputCompanyName.addEventListener('input', (e) => {
    appState.companyName = e.target.value;
    renderSmartphone();
});

nicheButtons.forEach(button => {
    button.addEventListener('click', () => {
        nicheButtons.forEach(btn => btn.classList.remove('active-niche'));
        button.classList.add('active-niche');

        const chosenKey = button.dataset.niche;
        appState.nicheKey = chosenKey;

        const preset = NICHE_PRESETS[chosenKey];
        inputProductName.value = preset.defaultItemName;
        inputProductPrice.value = preset.defaultPrice.toFixed(2);
        
        appState.productName = preset.defaultItemName;
        appState.productPrice = preset.defaultPrice;
        appState.cartQuantity = 1;

        showPhoneScreen('catalog');
        renderSmartphone();
    });
});

btnNextToStep2.addEventListener('click', () => {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');

    stepBadge.textContent = '2';
    stepNumberText.textContent = '2';
    stepTitleText.textContent = 'Gargalos no Atendimento';
    dot2.classList.remove('bg-slate-700');
    dot2.classList.add('bg-emerald-500');
});

// 11. EVENTOS DA ETAPA 2 (Gargalos)
btnBackToStep1.addEventListener('click', () => {
    step2.classList.add('hidden');
    step1.classList.remove('hidden');

    stepBadge.textContent = '1';
    stepNumberText.textContent = '1';
    stepTitleText.textContent = 'Identidade do Negócio';
    dot2.classList.remove('bg-emerald-500');
    dot2.classList.add('bg-slate-700');
});

channelButtons.forEach(button => {
    button.addEventListener('click', () => {
        channelButtons.forEach(btn => btn.classList.remove('active-channel'));
        button.classList.add('active-channel');
        appState.channel = button.dataset.channel;
    });
});

btnNextToStep3.addEventListener('click', () => {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');

    stepBadge.textContent = '3';
    stepNumberText.textContent = '3';
    stepTitleText.textContent = 'Itens, Serviços & Valores';
    dot3.classList.remove('bg-slate-700');
    dot3.classList.add('bg-emerald-500');
});

// 12. EVENTOS DA ETAPA 3 (Preços)
btnBackToStep2.addEventListener('click', () => {
    step3.classList.add('hidden');
    step2.classList.remove('hidden');

    stepBadge.textContent = '2';
    stepNumberText.textContent = '2';
    stepTitleText.textContent = 'Gargalos no Atendimento';
    dot3.classList.remove('bg-emerald-500');
    dot3.classList.add('bg-slate-700');
});

inputProductName.addEventListener('input', (e) => {
    appState.productName = e.target.value;
    renderSmartphone();
});

inputProductPrice.addEventListener('input', (e) => {
    const valor = parseFloat(e.target.value);
    appState.productPrice = isNaN(valor) || valor < 0 ? 0 : valor;
    renderSmartphone();
});

// 13. FINALIZAÇÃO DO FORMULÁRIO (CHAMA O DIAGNÓSTICO)
btnFinishQuiz.addEventListener('click', () => {
    step3.classList.add('hidden');
    stepSuccess.classList.remove('hidden');

    stepBadge.innerHTML = '<i class="fa-solid fa-check text-xs"></i>';
    stepTitleText.textContent = 'Diagnóstico Concluído';

    // Gera o diagnóstico dinâmico com base nas respostas
    renderSuccessDiagnosis();

    // Mostra o comprovante realista no smartphone
    showPhoneScreen('receipt');
});

btnRestartQuiz.addEventListener('click', () => {
    stepSuccess.classList.add('hidden');
    step1.classList.remove('hidden');

    stepBadge.textContent = '1';
    stepNumberText.textContent = '1';
    stepTitleText.textContent = 'Identidade do Negócio';
    dot2.classList.remove('bg-emerald-500');
    dot2.classList.add('bg-slate-700');
    dot3.classList.remove('bg-emerald-500');
    dot3.classList.add('bg-slate-700');

    showPhoneScreen('catalog');
});

// 14. CONTROLES DO SMARTPHONE
btnCartPlus.addEventListener('click', (e) => {
    e.stopPropagation();
    appState.cartQuantity += 1;
    renderSmartphone();
});

btnCartMinus.addEventListener('click', (e) => {
    e.stopPropagation();
    if (appState.cartQuantity > 1) {
        appState.cartQuantity -= 1;
        renderSmartphone();
    }
});

previewServiceActionBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showPhoneScreen('drawer');
});

phoneBottomBar.addEventListener('click', () => {
    showPhoneScreen('drawer');
});

drawerBackBtn.addEventListener('click', () => {
    showPhoneScreen('catalog');
});

drawerConfirmBtn.addEventListener('click', () => {
    showPhoneScreen('receipt');
});

receiptResetBtn.addEventListener('click', () => {
    showPhoneScreen('catalog');
});

// 15. INICIALIZAÇÃO COM O PRESET UNIFICADO DE DELIVERY
const initialPreset = NICHE_PRESETS[appState.nicheKey];
inputProductName.value = initialPreset.defaultItemName;
inputProductPrice.value = initialPreset.defaultPrice.toFixed(2);
appState.productName = initialPreset.defaultItemName;
appState.productPrice = initialPreset.defaultPrice;

showPhoneScreen('catalog');
renderSmartphone();