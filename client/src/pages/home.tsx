import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [aiWorkingModalOpen, setAiWorkingModalOpen] = useState(false);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold gradient-text">BrokerFlow AI</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#planos" 
                onClick={(e) => handleAnchorClick(e, '#planos')}
                className="text-gray-600 hover:text-brand-orange transition-colors font-medium"
              >
                Planos
              </a>
              <a 
                href="#como-funciona" 
                onClick={(e) => handleAnchorClick(e, '#como-funciona')}
                className="text-gray-600 hover:text-brand-orange transition-colors font-medium"
              >
                Como Funciona
              </a>
              <a 
                href="https://app.neurobroker-ai.cloud/" 
                className="text-gray-600 hover:text-brand-orange transition-colors font-medium"
              >
                Login
              </a>
            </nav>
            
            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://app.neurobroker-ai.cloud/" 
                className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover-lift shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Quero Começar Agora
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#planos" 
                onClick={(e) => handleAnchorClick(e, '#planos')}
                className="block text-gray-600 hover:text-brand-orange transition-colors font-medium"
              >
                Planos
              </a>
              <a 
                href="#como-funciona" 
                onClick={(e) => handleAnchorClick(e, '#como-funciona')}
                className="block text-gray-600 hover:text-brand-orange transition-colors font-medium"
              >
                Como Funciona
              </a>
              <a 
                href="https://app.neurobroker-ai.cloud/" 
                className="block text-gray-600 hover:text-brand-orange transition-colors font-medium"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-16 lg:pb-24 gradient-bg relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Notícias do mercado imobiliário <span className="text-yellow-300">da sua cidade</span>, com 1 clique.
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Pare de só enviar imóveis. Crie um canal inteligente com conteúdo relevante sobre o mercado da sua região e se torne referência para seus clientes.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://app.neurobroker-ai.cloud/" 
                  className="bg-white text-brand-orange px-8 py-4 rounded-xl font-bold text-lg hover-lift shadow-2xl hover:shadow-3xl transition-all duration-200 inline-flex items-center justify-center"
                >
                  <i className="fas fa-rocket mr-3"></i>
                  Começar Agora
                </a>
                <button 
                  onClick={() => setDemoModalOpen(true)}
                  className="text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center"
                >
                  <i className="fas fa-play mr-3"></i>
                  Ver Demonstração
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 text-center lg:text-left">
                <p className="text-white/80 text-sm mb-4">Usado por corretores, construtoras e imobiliárias:</p>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-bold">+500</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="animate-float">
                {/* Video dashboard mockup */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="bg-white rounded-2xl p-3 shadow-xl overflow-hidden">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    {/* Video em loop no card */}
                    <div className="rounded-lg overflow-hidden">
                      <video 
                        className="w-full h-auto"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        src="https://s3.neurobroker-ai.cloud/markentingneuro/BrokerFlowAI%20%E2%80%90%20Feito%20com%20o%20Clipchamp.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=dBQrCVeF4NloLZqf56Vn%2F20250811%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250811T215111Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=56ee8961e114244ae6ac0c6a5c53a91cd044a5f340a428f3f3108125777e1897"
                        onError={(e) => {
                          console.error('Erro ao carregar vídeo no card:', e);
                          // Fallback para mockup estático
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                        onLoadStart={() => console.log('Carregando vídeo no card')}
                        onCanPlay={() => console.log('Vídeo do card pronto')}
                      >
                        Seu navegador não suporta vídeo HTML5.
                      </video>
                      {/* Fallback mockup (oculto por padrão) */}
                      <div className="hidden space-y-4 p-3">
                        <div className="h-4 bg-gradient-to-r from-brand-orange to-brand-purple rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="h-20 bg-gray-100 rounded"></div>
                          <div className="h-20 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <button 
                onClick={() => setAiWorkingModalOpen(true)}
                className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce hover:bg-yellow-300 transition-colors cursor-pointer"
              >
                IA Trabalhando!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o <span className="gradient-text">BrokerFlow AI</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A solução completa para profissionais do mercado imobiliário que querem criar conexões inteligentes com seus clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Benefit 1 */}
            <div className="text-center fade-in bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notícias Locais</h3>
              <p className="text-gray-600 leading-relaxed">
                Conteúdo sobre o mercado imobiliário da sua cidade. Mantenha seus clientes informados sobre tendências e oportunidades locais.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center fade-in bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Geração Rápida</h3>
              <p className="text-gray-600 leading-relaxed">
                Com 1 clique você gera conteúdo profissional em segundos. Sempre disponível quando você precisar.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center fade-in bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-share-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Canal Inteligente</h3>
              <p className="text-gray-600 leading-relaxed">
                Crie um canal de comunicação que vai além de apenas mostrar imóveis. Eduque e engaje seus clientes com informações valiosas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Em apenas 3 passos simples, você terá conteúdo profissional disponível com 1 clique.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center fade-in relative">
              <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Preencha seus dados</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Cadastre-se e informe sua cidade. Nossa IA já tem todas as informações do mercado imobiliário local.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <i className="fas fa-user-edit text-3xl text-brand-orange mb-2"></i>
                <div className="text-sm text-gray-500">Configuração inicial</div>
              </div>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-8 -right-6 text-brand-orange text-2xl">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="text-center fade-in relative">
              <div className="w-16 h-16 bg-brand-purple text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gere notícias personalizadas</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Com 1 clique, nossa IA cria notícias e análises do mercado imobiliário específicas da sua cidade.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <i className="fas fa-robot text-3xl text-brand-purple mb-2"></i>
                <div className="text-sm text-gray-500">Geração instantânea</div>
              </div>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-8 -right-6 text-brand-purple text-2xl">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Acesse quando quiser</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Todo conteúdo fica salvo na sua conta: posts, textos, imagens e hashtags. Pronto para usar!
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <i className="fas fa-inbox text-3xl text-green-500 mb-2"></i>
                <div className="text-sm text-gray-500">Sempre disponível</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu plano
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planos flexíveis que se adaptam ao seu ritmo de trabalho. Sem pegadinhas, sem surpresas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Plano Avulso sem assinatura */}
            <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 fade-in">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Avulso</h3>
                  <p className="text-sm text-gray-500 mb-4">Sem assinatura</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">R$ 14,90</span>
                    <p className="text-sm text-gray-500">por 1 crédito</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-3 mb-6">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      1 crédito
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Sem compromisso
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Teste a plataforma
                    </li>
                  </ul>
                  <a 
                    href="https://app.neurobroker-ai.cloud/" 
                    className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 block text-center"
                  >
                    Comprar Agora
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* Plano Mensal */}
            <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 fade-in">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Mensal</h3>
                  <p className="text-sm text-gray-500 mb-4">Flexibilidade máxima</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">R$ 49,90</span>
                    <p className="text-sm text-gray-500">5 créditos - R$ 9,98/crédito</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-3 mb-6">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      5 créditos mensais
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Cancele quando quiser
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Suporte prioritário
                    </li>
                  </ul>
                  <a 
                    href="https://app.neurobroker-ai.cloud/" 
                    className="w-full bg-brand-orange text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors duration-200 block text-center"
                  >
                    Assinar Agora
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* Plano Anual - DESTAQUE */}
            <Card className="shadow-lg border-2 border-brand-purple relative fade-in transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </span>
              </div>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Anual</h3>
                  <p className="text-sm text-brand-purple mb-4">Economia de 34%</p>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">R$ 359,90</span>
                    <p className="text-sm text-gray-500">55 créditos - R$ 6,54/crédito</p>
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                    Equivale a R$ 29,99/mês
                  </div>
                  <ul className="text-sm text-gray-600 space-y-3 mb-6">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      55 créditos anuais
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Economia de R$ 239,90
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Suporte VIP
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Acesso antecipado
                    </li>
                  </ul>
                  <a 
                    href="https://app.neurobroker-ai.cloud/" 
                    className="w-full gradient-bg text-white py-3 rounded-xl font-semibold hover-lift shadow-lg transition-all duration-200 block text-center"
                  >
                    Assinar Agora
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* Plano Avulso com assinatura */}
            <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 fade-in">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Avulso</h3>
                  <p className="text-sm text-gray-500 mb-4">Para assinantes</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">R$ 8,00</span>
                    <p className="text-sm text-gray-500">por 1 crédito extra</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-3 mb-6">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      1 crédito adicional
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Só para assinantes
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Preço especial
                    </li>
                  </ul>
                  <a 
                    href="https://app.neurobroker-ai.cloud/" 
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 block text-center"
                  >
                    Comprar Crédito
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Dúvidas sobre qual plano escolher?</p>
            <a href="https://app.neurobroker-ai.cloud/" className="text-brand-orange hover:text-brand-purple font-semibold transition-colors duration-200">
              Fale com nosso time de vendas
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 500 corretores já transformaram seus resultados com o BrokerFlow AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Maria Rodrigues</h4>
                  <p className="text-sm text-gray-500">Corretora, São Paulo</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Aumentei minhas vendas em 40% depois que comecei a usar o BrokerFlow AI. O conteúdo é incrível e meus clientes sempre elogiam!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">João Silva</h4>
                  <p className="text-sm text-gray-500">Corretor, Rio de Janeiro</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Economizo 10 horas por semana! Agora posso focar totalmente em atender clientes e fechar negócios. Recomendo demais!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  AC
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Ana Costa</h4>
                  <p className="text-sm text-gray-500">Corretora, Brasília</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Minha presença digital nunca esteve tão profissional. Recebo elogios constantemente sobre a qualidade dos meus posts!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 lg:py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para transformar seu marketing imobiliário?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Junte-se a mais de 500 corretores que já estão vendendo mais com conteúdo automatizado de qualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://app.neurobroker-ai.cloud/" 
              className="bg-white text-brand-orange px-8 py-4 rounded-xl font-bold text-lg hover-lift shadow-2xl transition-all duration-200 inline-flex items-center"
            >
              <i className="fas fa-rocket mr-3"></i>
              Começar Agora
            </a>
          </div>
          
          <p className="text-white/70 text-sm">
            ✓ Conteúdo personalizado ✓ Mercado local ✓ Suporte especializado
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold gradient-text">BrokerFlow AI</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A plataforma de IA mais completa para corretores de imóveis. Conteúdo automatizado, personalizado e pronto para converter.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/neurobroker/" className="text-gray-400 hover:text-brand-orange transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="https://app.neurobroker-ai.cloud/" className="hover:text-white transition-colors">Login</a></li>
              </ul>
            </div>
            
            
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BrokerFlow AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Demo Video Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Demonstração - BrokerFlow AI</h3>
              <button 
                onClick={() => setDemoModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video">
              <video 
                className="w-full h-full"
                controls
                autoPlay
                src="https://s3.neurobroker-ai.cloud/markentingneuro/BrokerFlowAI%20%E2%80%90%20Feito%20com%20o%20Clipchamp.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=dBQrCVeF4NloLZqf56Vn%2F20250811%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250811T215111Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=56ee8961e114244ae6ac0c6a5c53a91cd044a5f340a428f3f3108125777e1897"
              >
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* AI Working Modal */}
      {aiWorkingModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">IA Trabalhando! 🤖</h3>
              <button 
                onClick={() => setAiWorkingModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video">
              <video 
                className="w-full h-full"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                src="https://s3.neurobroker-ai.cloud/markentingneuro/BrokerFlowAI%20%E2%80%90%20Feito%20com%20o%20Clipchamp.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=dBQrCVeF4NloLZqf56Vn%2F20250811%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250811T215111Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=56ee8961e114244ae6ac0c6a5c53a91cd044a5f340a428f3f3108125777e1897"
                onError={(e) => {
                  console.error('Erro ao carregar vídeo:', e);
                  e.currentTarget.style.display = 'none';
                }}
                onLoadStart={() => console.log('Iniciando carregamento do vídeo')}
                onCanPlay={() => console.log('Vídeo pronto para reproduzir')}
              >
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>
            <div className="p-6 bg-gray-50 text-center">
              <p className="text-gray-600">Veja nossa IA gerando conteúdo personalizado para o mercado imobiliário!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}