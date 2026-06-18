<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Agro Sustentável Brasil</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       CONFIGURAÇÕES GLOBAIS E RESET
       ========================================================================== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: #081c15; /* Verde ultra escuro de fundo */
      color: #ffffff;
      overflow-x: hidden;
      line-height: 1.6;
    }

    /* ==========================================================================
       NAVBAR (Menu de Navegação Superior com Glassmorphism)
       ========================================================================== */
    header {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
      background: rgba(8, 28, 21, 0.75); /* Fundo semi-transparente */
      backdrop-filter: blur(12px); /* Efeito de vidro fosco */
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(149, 213, 178, 0.1);
      transition: background 0.3s ease;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 8%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: #95d5b2; /* Verde claro neon */
      text-decoration: none;
      letter-spacing: 0.5px;
    }

    .logo span {
      color: #b07d62; /* Detalhe em tom de terra */
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 30px;
    }

    .nav-links a {
      color: #d8f3dc;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    /* Linha animada ao passar o mouse */
    .nav-links a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: #40916c;
      transition: width 0.3s ease;
    }

    .nav-links a:hover {
      color: #ffffff;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    /* Menu Hambúrguer (Mobile) */
    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      z-index: 1100;
    }

    .menu-toggle span {
      width: 28px;
      height: 3px;
      background-color: #95d5b2;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    /* ==========================================================================
       SEÇÃO HERO (Banner de Abertura)
       ========================================================================== */
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 140px 8% 60px 8%;
      background: linear-gradient(rgba(8, 28, 21, 0.65), rgba(8, 28, 21, 0.85)),
                  url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      text-align: center;
    }

    .hero-content {
      max-width: 800px;
      animation: fadeUp 1s ease forwards;
    }

    .hero-title {
      font-size: clamp(2.3rem, 5vw, 4rem);
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 25px;
      color: #ffffff;
    }

    .hero-description {
      font-size: 1.1rem;
      color: #b7e4c7;
      margin-bottom: 35px;
      font-weight: 300;
    }

    .btn {
      display: inline-block;
      padding: 14px 35px;
      background: #2d6a4f;
      border-radius: 40px;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      font-weight: 600;
      border: 1px solid transparent;
    }

    .btn:hover {
      background: #40916c;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(45, 106, 79, 0.3);
    }

    /* ==========================================================================
       SEÇÃO DE ESTATÍSTICAS
       ========================================================================== */
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 25px;
      padding: 60px 8%;
      background: #0b2b20;
    }

    .stat-card {
      background: rgba(27, 67, 50, 0.4);
      border: 1px solid rgba(149, 213, 178, 0.1);
      padding: 30px;
      border-radius: 16px;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
    }

    .stat-card h2 {
      color: #95d5b2;
      font-size: 2.8rem;
      margin-bottom: 5px;
      font-weight: 700;
    }

    .stat-card p {
      color: #d8f3dc;
      font-size: 0.95rem;
    }

    /* ==========================================================================
       ESTILOS DE SEÇÃO E CONTEÚDO GERAL
       ========================================================================== */
    section {
      padding: 90px 8%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .section-title {
      text-align: left;
      margin-bottom: 45px;
    }

    .section-title h2 {
      font-size: 2.2rem;
      color: #95d5b2;
      position: relative;
      padding-bottom: 12px;
      display: inline-block;
    }

    .section-title h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background: #b07d62;
      border-radius: 2px;
    }

    .section-title p {
      color: #b7e4c7;
      margin-top: 10px;
      font-size: 1.05rem;
    }

    /* Grid Layout Flexível */
    .grid-layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }

    /* Cards Padrão */
    .card {
      background: rgba(27, 67, 50, 0.3);
      border: 1px solid rgba(149, 213, 178, 0.1);
      border-radius: 12px;
      padding: 30px;
      transition: all 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: rgba(149, 213, 178, 0.3);
      background: rgba(27, 67, 50, 0.5);
    }

    .card h3 {
      margin-bottom: 15px;
      color: #b7e4c7;
      font-size: 1.25rem;
    }

    .card p {
      color: #d8f3dc;
      font-size: 0.95rem;
    }

    /* Caixas de Alerta (Problemas Ambientais) */
    .alert-box {
      background: rgba(229, 62, 62, 0.04);
      border: 1px solid rgba(254, 178, 178, 0.1);
      border-left: 5px solid #e53e3e;
    }
    
    .alert-box h3 { color: #feb2b2; }

    /* Caixas de Solução (Práticas Sustentáveis) */
    .solution-box {
      background: rgba(56, 161, 105, 0.04);
      border: 1px solid rgba(154, 230, 180, 0.1);
      border-left: 5px solid #38a169;
    }
    
    .solution-box h3 { color: #9ae6b4; }

    /* ==========================================================================
       BANNER PARALLAX INTERMEDIÁRIO
       ========================================================================== */
    .banner {
      height: 400px;
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),
                  url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px;
    }

    .banner h2 {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      max-width: 900px;
      line-height: 1.4;
      color: #ffffff;
    }
    
    .banner h2::after { display: none; }

    /* ==========================================================================
       MÍDIA (Vídeo)
       ========================================================================== */
    .video-container {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .video-wrapper {
      width: 100%;
      max-width: 900px;
      position: relative;
      padding-bottom: 56.25%; /* Mantém a proporção 16:9 */
      height: 0;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }

    .video-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }

    /* ==========================================================================
       SEÇÕES INTERATIVAS (Quiz Inteligente)
       ========================================================================== */
    .interactive-section {
      background: rgba(255, 255, 255, 0.02);
      border: 1px dashed rgba(176, 125, 98, 0.4);
      border-radius: 16px;
      padding: 40px;
      max-width: 800px;
      margin: 40px auto 0 auto;
      text-align: center;
    }

    .interactive-section h3 {
      margin-bottom: 25px;
      font-size: 1.3rem;
      color: #ffffff;
    }

    .quiz-options-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-width: 500px;
      margin: 0 auto;
    }

    .quiz-option {
      background: rgba(27, 67, 50, 0.5);
      border: 1px solid rgba(203, 213, 224, 0.2);
      padding: 16px 20px;
      border-radius: 8px;
      cursor: pointer;
      font-family: inherit;
      color: white;
      font-size: 1rem;
      text-align: left;
      transition: all 0.2s ease;
      width: 100%;
    }

    .quiz-option:hover {
      background: rgba(45, 106, 79, 0.6);
      transform: translateX(5px);
    }

    /* Classes dinâmicas aplicadas via JS */
    .quiz-option.correct {
      border-left: 6px solid #38a169;
      background: rgba(56, 161, 105, 0.15);
      border-color: rgba(56, 161, 105, 0.4);
    }

    .quiz-option.incorrect {
      border-left: 6px solid #e53e3e;
      background: rgba(229, 62, 62, 0.15);
      border-color: rgba(229, 62, 62, 0.4);
    }

    #quizResult {
      margin-top: 25px;
      font-size: 1.1rem;
      font-weight: 500;
      min-height: 27px;
    }

    /* ==========================================================================
       FORMULÁRIO DE CONTATO
       ========================================================================== */
    form {
      max-width: 700px;
      margin: 40px auto 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    input, textarea {
      padding: 18px;
      border: 1px solid rgba(149, 213, 178, 0.1);
      border-radius: 12px;
      background: #123524;
      color: white;
      font-family: inherit;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: #95d5b2;
    }

    textarea {
      resize: none;
      height: 160px;
    }

    form button {
      padding: 16px;
      border: none;
      border-radius: 12px;
      background: #2d6a4f;
      color: white;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    form button:hover {
      background: #40916c;
      transform: translateY(-2px);
    }

    /* ==========================================================================
       RODAPÉ (Footer)
       ========================================================================== */
    footer {
      background: #040c0a;
      padding: 50px 8%;
      text-align: center;
      border-top: 1px solid rgba(149, 213, 178, 0.05);
      color: #718096;
      font-size: 0.9rem;
    }

    footer p {
      color: #a0aec0;
      margin-bottom: 10px;
    }

    footer .highlight {
      color: #ffffff;
      font-weight: 500;
    }

    /* ==========================================================================
       ANIMAÇÃO DE ENTRADA
       ========================================================================== */
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ==========================================================================
       RESPONSIVIDADE (Ajustes Mobile Avançados)
       ========================================================================== */
    @media (max-width: 768px) {
      nav {
        padding: 15px 6%;
      }

      .menu-toggle {
        display: flex;
      }

      /* Transformação da Navbar em Menu Gaveta Lateral */
      .nav-links {
        position: fixed;
        right: -100%;
        top: 0;
        height: 100vh;
        width: 70%;
        max-width: 300px;
        background: #061510;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 35px;
        transition: right 0.4s ease;
        box-shadow: -10px 0 30px rgba(0,0,0,0.5);
      }

      .nav-links.active {
        right: 0;
      }

      /* Animação do Ícone Hamburguer ativo (X) */
      .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 5px);
      }
      .menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }
      .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -5px);
      }

      section {
        padding: 60px 6%;
      }

      .stats {
        padding: 40px 6%;
      }
    }
  </style>
</head>

<body>

  <header>
    <nav>
      <a href="#home" class="logo">Agro <span>Sustentável</span></a>
      
      <div class="menu-toggle" id="mobile-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#producao">Produção</a></li>
        <li><a href="#sustentabilidade">Sustentabilidade</a></li>
        <li><a href="#desafios">Desafios</a></li>
        <li><a href="#solucoes">Soluções</a></li>
        <li><a href="#interativos">Quiz</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero-section" id="home">
    <div class="hero-content">
      <h1 class="hero-title">O Futuro do Agro é Sustentável</h1>
      <p class="hero-description">
        O agronegócio move a economia brasileira e alimenta milhões de pessoas. 
        A tecnologia e a sustentabilidade são o caminho para produzir mais, preservando os recursos naturais para as futuras gerações.
      </p>
      <a href="#producao" class="btn">Saiba Mais</a>
    </div>
  </section>

  <section class="stats">
    <div class="stat-card">
      <h2>29%</h2>
      <p>Participação do Agro no PIB brasileiro</p>
    </div>
    <div class="stat-card">
      <h2>40%</h2>
      <p>Das exportações nacionais vêm do setor</p>
    </div>
    <div class="stat-card">
      <h2>70%</h2>
      <p>Da água tratada mundial vai para agricultura</p>
    </div>
    <div class="stat-card">
      <h2>Milhões</h2>
      <p>De empregos diretos e indiretos gerados</p>
    </div>
  </section>

  <section id="producao">
    <div class="section-title">
      <h2>Produção e Economia</h2>
      <p>O Brasil como potência agrícola global responsável</p>
    </div>
    <div class="grid-layout">
      <div class="card">
        <h3>Exportações</h3>
        <p>O agronegócio brasileiro abastece cadeias internacionais complexas, destacando produtos chave como o complexo de soja, milho, café de alta qualidade e fibras orgânicas.</p>
      </div>
      <div class="card">
        <h3>Segurança Alimentar</h3>
        <p>Desempenhamos um papel crucial no combate à fome global, mitigando riscos de abastecimento em múltiplos continentes através de uma logística escalável.</p>
      </div>
      <div class="card">
        <h3>Geração de Valor</h3>
        <p>A engrenagem do campo se estende aos centros urbanos, estimulando pesquisas científicas de ponta, desenvolvimento industrial e automação em tecnologia verde.</p>
      </div>
    </div>
  </section>

  <section class="banner">
    <h2>Produzir mais com menos impacto ambiental é o maior desafio do século XXI.</h2>
  </section>

  <section id="sustentabilidade">
    <div class="section-title">
      <h2>Sustentabilidade no Campo</h2>
      <p>Tecnologia e inovação orientadas à conservação ecológica</p>
    </div>
    <div class="grid-layout">
      <div class="card solution-box">
        <h3>Plantio Direto</h3>
        <p>Evita a mobilização profunda do solo, mitigando processos erosivos e promovendo a fixação biológica de carbono atmosférico na palhada.</p>
      </div>
      <div class="card solution-box">
        <h3>Agricultura de Precisão</h3>
        <p>Integração de telemetria por satélite, drones e sensores IoT para aplicar corretivos e insumos com precisão cirúrgica em sub-hectares.</p>
      </div>
      <div class="card solution-box">
        <h3>Irrigação Inteligente</h3>
        <p>Sistemas automatizados por sensores de evapotranspiração reduzem a captação de recursos hídricos em até 30% sem perder rendimento produtivos.</p>
      </div>
      <div class="card solution-box">
        <h3>Integração ILPF</h3>
        <p>Sistemas que alternam Lavoura, Pecuária e Floresta na mesma área otimizam o ciclo de nutrientes e criam microclimas benéficos ao gado.</p>
      </div>
    </div>
  </section>

  <section id="desafios">
    <div class="section-title">
      <h2>Desafios Ambientais</h2>
      <p>Fatores críticos que exigem monitoramento e mitigação urgentes</p>
    </div>
    <div class="grid-layout">
      <div class="card alert-box">
        <h3>Desmatamento</h3>
        <p>A supressão irregular de vegetação nativa desequilibra biomas preciosos, alterando regimes regionais de chuvas e reduzindo a biodiversidade.</p>
      </div>
      <div class="card alert-box">
        <h3>Emissões Atmosféricas</h3>
        <p>O manejo incorreto de dejetos pecuários e uso excessivo de fertilizantes nitrogenados elevam a liberação de gases estufa à atmosfera.</p>
      </div>
      <div class="card alert-box">
        <h3>Lixiviação e Poluição</h3>
        <p>A aplicação desmedida ou fora do período correto de defensivos pode contaminar o lençol freático e corpos d'água adjacentes.</p>
      </div>
    </div>
  </section>

  <section id="solucoes">
    <div class="section-title">
      <h2>Soluções e Inovações</h2>
      <p>A transformação digital redesenhando as cadeias produtivas</p>
    </div>
    <div class="grid-layout">
      <div class="card">
        <h3>Intensificação Sustentável</h3>
        <p>Recuperação biológica de pastagens degradadas para expandir a produção de grãos sem derrubar uma única árvore nativa.</p>
      </div>
      <div class="card">
        <h3>Conformidade e Legislação</h3>
        <p>Adoção estrita de ferramentas de georreferenciamento ligadas ao Cadastro Ambiental Rural (CAR) para atestar a origem limpa dos produtos.</p>
      </div>
    </div>

    <div class="video-container">
      <div class="video-wrapper">
        <iframe src="https://www.youtube.com/embed/8V4T9mP1mKU" title="Agricultura Sustentável" allowfullscreen></iframe>
      </div>
    </div>
  </section>

  <section id="interativos">
    <div class="section-title">
      <h2>Espaço Interativo</h2>
      <p>Valide suas conclusões sobre o agronegócio do amanhã</p>
    </div>
    <div class="interactive-section">
      <h3>Qual tecnologia de engenharia hídrica foca diretamente na redução do desperdício de água no cultivo agrícola?</h3>
      
      <div class="quiz-options-container">
        <button class="quiz-option" data-correct="true">Sensores de umidade subterrânea e irrigação inteligente gotejada</button>
        <button class="quiz-option" data-correct="false">Práticas convencionais de queima controlada e desmatamento expansivo</button>
        <button class="quiz-option" data-correct="false">Irrigação por inundação contínua de canais abertos em períodos de estiagem</button>
      </div>

      <div id="quizResult"></div>
    </div>
  </section>

  <section id="contato">
    <div class="section-title">
      <h2>Canal de Contato</h2>
      <p>Envie dúvidas, contribuições acadêmicas ou sugestões</p>
    </div>
    <form action="#" onsubmit="event.preventDefault(); alert('Mensagem enviada com sucesso! (Simulação)'); this.reset();">
      <input type="text" placeholder="Seu Nome completo" required>
      <input type="email" placeholder="Seu Melhor E-mail" required>
      <textarea placeholder="Escreva aqui sua consideração técnica ou mensagem..." required></textarea>
      <button type="submit">Enviar Mensagem</button>
    </form>
  </section>

  <footer>
    <p class="highlight">© 2026 Agro Sustentável Brasil</p>
    <p>Plataforma digital para fins de conscientização sobre automação, produtividade limpa e bioeconomia.</p>
    <p style="margin-top: 15px; font-size: 0.8rem; opacity: 0.6;">Fontes científicas de referência: Embrapa, CNA, IBGE, MAPA.</p>
  </footer>

  <script>
    // --- LÓGICA DO MENU HAMBÚRGUER REATIVO ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Abre e fecha o menu ao clicar no ícone das três linhas
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });

    // Fecha o menu automaticamente quando o usuário clica em qualquer link
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });

    // --- LÓGICA DO QUIZ DINÂMICO ---
    const options = document.querySelectorAll('.quiz-option');
    const resultDisplay = document.getElementById('quizResult');

    options.forEach(button => {
      button.addEventListener('click', () => {
        // Remove marcações anteriores de todas as opções
        options.forEach(opt => {
          opt.classList.remove('correct', 'incorrect');
          opt.disabled = true; // Desabilita para não trocar a resposta após escolher
        });

        const isCorrect = button.getAttribute('data-correct') === 'true';

        if (isCorrect) {
          button.classList.add('correct');
          resultDisplay.style.color = "#38a169";
          resultDisplay.innerHTML = "✅ **Excelente!** A irrigação inteligente integrada a sensores direciona a água na quantidade exata demandada pelas raízes, minimizando a evaporação e o desperdício.";
        } else {
          button.classList.add('incorrect');
          resultDisplay.style.color = "#e53e3e";
          resultDisplay.innerHTML = "❌ **Incorreto.** Essa prática agrava as condições de estresse hídrico e causa sérias perdas estruturais e ecológicas ao solo.";
          
          // Mostra sutilmente qual era a opção correta para fins educativos
          options.forEach(opt => {
            if(opt.getAttribute('data-correct') === 'true') {
              opt.classList.add('correct');
            }
          });
        }
      });
    });
  </script>
</body>
</html>
