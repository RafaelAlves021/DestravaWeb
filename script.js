/**
 * ===================================================================
 * ARQUIVO: script.js
 * DESCRIÇÃO: Lógica do Simulador Raio-X com comportamento "Camaleão"
 * adaptado para 9 nichos de mercado (Alimentação, Estética, Barbearia,
 * Pet Shop, Fitness, Mecânica e Clínicas de Saúde).
 * ===================================================================
 */

// 1. DICIONÁRIO DE PRESETS DOS 9 NICHOS (COMPORTAMENTO CAMALEÃO)
const NICHE_PRESETS = {
    burger: {
        nicheLabel: 'Hambúrguer Artesanal',
        defaultBusinessName: 'Prime Burger Gourmet',
        statusBadge: '● Aberto agora',
        tagFeature: 'ENTREGA RÁPIDA',
        sectionTitle: 'Mais Pedido',
        defaultItemName: 'Smash Bacon Duplo Especial',
        defaultPrice: 34.90,
        itemIcon: '<i class="fa-solid fa-burger"></i>',
        itemType: 'product',
        cardClasses: 'bg-gradient-to-br from-amber-500/20 to-amber-900/10 border border-amber-500/30',
        tagClasses: 'bg-amber-500 text-slate-950',
        iconBgClass: 'bg-slate-700 text-amber-400',
        infoSubtext: '30-45 min de entrega',
        actionBtnText: 'Pedir Agora',
        bottomLabel: 'Total do Pedido'
    },
    pizza: {
        nicheLabel: 'Pizzaria Artesanal',
        defaultBusinessName: 'Forno Nobre Pizzaria',
        statusBadge: '● Aberto agora',
        tagFeature: 'ENTREGA RÁPIDA',
        sectionTitle: 'Mais Pedido',
        defaultItemName: 'Pizza Calabresa Especial Família',
        defaultPrice: 59.90,
        itemIcon: '<i class="fa-solid fa-pizza-slice"></i>',
        itemType: 'product',
        cardClasses: 'bg-gradient-to-br from-red-500/20 to-red-900/10 border border-red-500/30',
        tagClasses: 'bg-red-500 text-white',
        iconBgClass: 'bg-slate-700 text-red-400',
        infoSubtext: '40-50 min de entrega',
        actionBtnText: 'Pedir Agora',
        bottomLabel: 'Total do Pedido'
    },
    beauty: {
        nicheLabel: 'Salão & Estética',
        defaultBusinessName: 'Studio Beleza & Estética VIP',
        statusBadge: '● Horários livres hoje',
        tagFeature: 'ATENDIMENTO VIP',
        sectionTitle: 'Serviço Mais Procurado',
        defaultItemName: 'Corte, Escova & Hidratação',
        defaultPrice: 120.00,
        itemIcon: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
        itemType: 'service',
        serviceActionLabel: 'Agendar Horário Online',
        cardClasses: 'bg-gradient-to-br from-fuchsia-500/20 to-rose-900/10 border border-fuchsia-500/30',
        tagClasses: 'bg-fuchsia-500 text-white',
        iconBgClass: 'bg-slate-700 text-fuchsia-400',
        serviceBtnClasses: 'bg-fuchsia-500/20 border border-fuchsia-500/40 text-fuchsia-300 hover:bg-fuchsia-500 hover:text-white',
        infoSubtext: 'Atendimento com hora marcada',
        actionBtnText: 'Confirmar Horário',
        bottomLabel: 'Investimento Estimado'
    },
    barber: {
        nicheLabel: 'Barbearia Clássica',
        defaultBusinessName: 'Barbearia Vintage Club',
        statusBadge: '● Cadeira disponível agora',
        tagFeature: 'SEM ESPERA',
        sectionTitle: 'Combo Mais Popular',
        defaultItemName: 'Cabelo & Barba Terapia',
        defaultPrice: 75.00,
        itemIcon: '<i class="fa-solid fa-scissors"></i>',
        itemType: 'service',
        serviceActionLabel: 'Garantir Vaga',
        cardClasses: 'bg-gradient-to-br from-amber-700/25 to-stone-900/20 border border-amber-600/30',
        tagClasses: 'bg-amber-600 text-white',
        iconBgClass: 'bg-slate-700 text-amber-500',
        serviceBtnClasses: 'bg-amber-600/20 border border-amber-600/40 text-amber-300 hover:bg-amber-600 hover:text-white',
        infoSubtext: 'Agendamento rápido sem fila',
        actionBtnText: 'Garantir Horário',
        bottomLabel: 'Valor do Combo'
    },
    pet: {
        nicheLabel: 'Pet Shop & Clínica',
        defaultBusinessName: 'Pet Charm Banho & Tosa',
        statusBadge: '● Vagas abertas para banho',
        tagFeature: 'CUIDADO ESPECIAL',
        sectionTitle: 'Plano Favorito',
        defaultItemName: 'Banho, Tosa & Hidratação',
        defaultPrice: 85.00,
        itemIcon: '<i class="fa-solid fa-paw"></i>',
        itemType: 'service',
        serviceActionLabel: 'Agendar para meu Pet',
        cardClasses: 'bg-gradient-to-br from-cyan-500/20 to-teal-900/10 border border-cyan-500/30',
        tagClasses: 'bg-cyan-500 text-slate-950',
        iconBgClass: 'bg-slate-700 text-cyan-400',
        serviceBtnClasses: 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950',
        infoSubtext: 'Cuidado e carinho profissional',
        actionBtnText: 'Agendar Pet',
        bottomLabel: 'Investimento'
    },
    fitness: {
        nicheLabel: 'Academia & Studio',
        defaultBusinessName: 'Studio Força & Movimento',
        statusBadge: '● Matrículas abertas',
        tagFeature: 'CHECK-IN DIGITAL',
        sectionTitle: 'Plano em Destaque',
        defaultItemName: 'Passe Livre Mensal + Treino',
        defaultPrice: 119.90,
        itemIcon: '<i class="fa-solid fa-dumbbell"></i>',
        itemType: 'service',
        serviceActionLabel: 'Agendar Aula Experimental',
        cardClasses: 'bg-gradient-to-br from-emerald-500/20 to-green-900/10 border border-emerald-500/30',
        tagClasses: 'bg-emerald-500 text-slate-950',
        iconBgClass: 'bg-slate-700 text-emerald-400',
        serviceBtnClasses: 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950',
        infoSubtext: 'Acesso total aos treinos',
        actionBtnText: 'Matricule-se Já',
        bottomLabel: 'Mensalidade'
    },
    auto: {
        nicheLabel: 'Oficina & Centro Automotivo',
        defaultBusinessName: 'Auto Center Mecânica Nobre',
        statusBadge: '● Diagnóstico rápido',
        tagFeature: 'ORÇAMENTO TRANSPARENTE',
        sectionTitle: 'Serviço Principal',
        defaultItemName: 'Revisão Geral Preventiva',
        defaultPrice: 240.00,
        itemIcon: '<i class="fa-solid fa-wrench"></i>',
        itemType: 'service',
        serviceActionLabel: 'Pedir Orçamento Direto',
        cardClasses: 'bg-gradient-to-br from-blue-500/20 to-indigo-900/10 border border-blue-500/30',
        tagClasses: 'bg-blue-500 text-white',
        iconBgClass: 'bg-slate-700 text-blue-400',
        serviceBtnClasses: 'bg-blue-500/20 border border-blue-500/40 text-blue-300 hover:bg-blue-500 hover:text-white',
        infoSubtext: 'Peças originais e garantia',
        actionBtnText: 'Solicitar Orçamento',
        bottomLabel: 'Preço Médio'
    },
    dental: {
        nicheLabel: 'Clínica Odontológica',
        defaultBusinessName: 'Sorriso Prime Odontologia',
        statusBadge: '● Agenda aberta para avaliações',
        tagFeature: 'AVALIAÇÃO COMPLETA',
        sectionTitle: 'Tratamento em Destaque',
        defaultItemName: 'Clareamento a Laser & Profilaxia',
        defaultPrice: 350.00,
        itemIcon: '<i class="fa-solid fa-tooth"></i>',
        itemType: 'service',
        serviceActionLabel: 'Solicitar Pré-Agendamento',
        cardClasses: 'bg-gradient-to-br from-sky-500/20 to-cyan-900/10 border border-sky-400/30',
        tagClasses: 'bg-sky-400 text-slate-950',
        iconBgClass: 'bg-slate-700 text-sky-400',
        serviceBtnClasses: 'bg-sky-400/20 border border-sky-400/40 text-sky-300 hover:bg-sky-400 hover:text-slate-950',
        infoSubtext: 'Avaliação clínica especializada',
        actionBtnText: 'Agendar Consulta',
        bottomLabel: 'Valor Estimado'
    },
    nutrition: {
        nicheLabel: 'Clínica de Nutrição',
        defaultBusinessName: 'NutriVida Saúde & Performance',
        statusBadge: '● Vagas abertas para novos pacientes',
        tagFeature: 'PLANO INDIVIDUALIZADO',
        sectionTitle: 'Consulta Principal',
        defaultItemName: 'Consulta Nutricional + Bioimpedância',
        defaultPrice: 180.00,
        itemIcon: '<i class="fa-solid fa-apple-whole"></i>',
        itemType: 'service',
        serviceActionLabel: 'Agendar Consulta Inicial',
        cardClasses: 'bg-gradient-to-br from-emerald-500/20 to-teal-900/10 border border-emerald-400/30',
        tagClasses: 'bg-emerald-400 text-slate-950',
        iconBgClass: 'bg-slate-700 text-emerald-400',
        serviceBtnClasses: 'bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400 hover:text-slate-950',
        infoSubtext: 'Acompanhamento nutricional completo',
        actionBtnText: 'Reservar Horário',
        bottomLabel: 'Investimento'
    }
};

// 2. ESTADO GLOBAL DA APLICAÇÃO
const appState = {
    nicheKey: 'burger',
    companyName: '',
    channel: 'whatsapp',
    productName: '',
    productPrice: 34.90,
    cartQuantity: 1
};

// 3. REFERÊNCIAS DOS ELEMENTOS DO DOM (QUIZ & SMARTPHONE)
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
const previewBtnOrder = document.getElementById('preview-btn-order');
const previewBtnOrderText = document.getElementById('preview-btn-order-text');
const previewOrderAlert = document.getElementById('preview-order-alert');
const previewOrderAlertText = document.getElementById('preview-order-alert-text');

// 4. FUNÇÃO PRINCIPAL DE RENDERIZAÇÃO DO MOCKUP CAMALEÃO
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

    if (preset.itemType === 'product') {
        previewCartControls.classList.remove('hidden');
        previewServiceActionBtn.classList.add('hidden');
        cartQty.textContent = appState.cartQuantity;
        const total = appState.productPrice * appState.cartQuantity;
        previewTotalPrice.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    } else {
        previewCartControls.classList.add('hidden');
        previewServiceActionBtn.classList.remove('hidden');
        previewServiceActionBtn.textContent = preset.serviceActionLabel;
        previewServiceActionBtn.className = `px-2.5 py-1.5 rounded-lg text-[10px] font-bold shrink-0 transition ${preset.serviceBtnClasses}`;
        previewTotalPrice.textContent = `R$ ${appState.productPrice.toFixed(2).replace('.', ',')}`;
    }

    previewBottomLabel.textContent = preset.bottomLabel;
    previewBtnOrderText.textContent = preset.actionBtnText;

    if (preset.itemType === 'product') {
        labelProductName.textContent = 'Qual é o seu produto mais vendido (Carro-chefe)?';
        labelProductPrice.textContent = 'Preço de venda médio (R$):';
    } else {
        labelProductName.textContent = 'Qual é o seu principal serviço, consulta ou plano em destaque?';
        labelProductPrice.textContent = 'Valor médio do serviço / consulta (R$):';
    }

    updateWhatsAppLink();
}

// 5. ATUALIZAÇÃO DO LINK DO WHATSAPP
function updateWhatsAppLink() {
    const seuNumeroWhatsapp = "5521966386120";
    const preset = NICHE_PRESETS[appState.nicheKey];
    const empresa = appState.companyName.trim() || preset.defaultBusinessName;
    const item = appState.productName.trim() || preset.defaultItemName;
    const tipoItem = preset.itemType === 'product' ? 'Produto' : 'Serviço/Consulta';

    const mensagem = `Olá! Acabei de fazer a simulação do Raio-X com o meu negócio:
*Empresa/Clínica:* ${empresa}
*Ramo de Atuação:* ${preset.nicheLabel}
*${tipoItem} em Destaque:* ${item} (R$ ${appState.productPrice.toFixed(2).replace('.', ',')})

Gostaria de saber como ter um sistema profissional próprio como esse no ar!`;

    ctaWhatsappLink.href = `https://wa.me/${seuNumeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// 6. EVENTOS DA ETAPA 1
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

// 7. EVENTOS DA ETAPA 2
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

// 8. EVENTOS DA ETAPA 3
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

// 9. FINALIZAÇÃO DA SIMULAÇÃO
btnFinishQuiz.addEventListener('click', () => {
    step3.classList.add('hidden');
    stepSuccess.classList.remove('hidden');

    stepBadge.innerHTML = '<i class="fa-solid fa-check text-xs"></i>';
    stepTitleText.textContent = 'Simulação Concluída';

    previewOrderAlertText.innerHTML = `<strong>Demonstração Pronta!</strong> Integrada diretamente ao WhatsApp.`;
    previewOrderAlert.classList.remove('hidden');
    setTimeout(() => {
        previewOrderAlert.classList.add('hidden');
    }, 4500);
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
});

// 10. CONTROLES DO SMARTPHONE
btnCartPlus.addEventListener('click', () => {
    appState.cartQuantity += 1;
    renderSmartphone();
});

btnCartMinus.addEventListener('click', () => {
    if (appState.cartQuantity > 1) {
        appState.cartQuantity -= 1;
        renderSmartphone();
    }
});

previewServiceActionBtn.addEventListener('click', () => {
    const preset = NICHE_PRESETS[appState.nicheKey];
    previewOrderAlertText.innerHTML = `<strong>${preset.serviceActionLabel}:</strong> Horário reservado no sistema!`;
    previewOrderAlert.classList.remove('hidden');
    setTimeout(() => {
        previewOrderAlert.classList.add('hidden');
    }, 3000);
});

previewBtnOrder.addEventListener('click', () => {
    const preset = NICHE_PRESETS[appState.nicheKey];
    previewOrderAlertText.innerHTML = `<strong>${preset.actionBtnText}:</strong> Pedido formatado para o WhatsApp!`;
    previewOrderAlert.classList.remove('hidden');
    setTimeout(() => {
        previewOrderAlert.classList.add('hidden');
    }, 3000);
});

// 11. INICIALIZAÇÃO AUTOMÁTICA DO SIMULADOR
const initialPreset = NICHE_PRESETS[appState.nicheKey];
inputProductName.value = initialPreset.defaultItemName;
inputProductPrice.value = initialPreset.defaultPrice.toFixed(2);
appState.productName = initialPreset.defaultItemName;
appState.productPrice = initialPreset.defaultPrice;
renderSmartphone();