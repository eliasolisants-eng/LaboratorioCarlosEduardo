import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  Plus,
  Sparkles,
  X,
} from 'lucide-react';

type Service = {
  name: string;
  description: string;
  image: string;
  number: string;
  details: { name: string; price: string }[];
};

const services: Service[] = [
  {
    name: 'Metalocerâmica',
    description: 'Estética e resistência para resultados naturais.',
    image: 'https://images.pexels.com/photos/6627592/pexels-photo-6627592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    number: '01',
    details: [{ name: 'Copping s/ dente', price: 'R$ 110,00' }, { name: 'Copping s/ implante', price: 'R$ 110,00' }, { name: 'Aplicação s/ dente', price: 'R$ 205,00' }, { name: 'Aplicação s/ implante', price: 'R$ 205,00' }],
  },
  {
    name: 'E-Max',
    description: 'Translucidez e precisão em cada detalhe.',
    image: 'https://images.pexels.com/photos/16309612/pexels-photo-16309612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    number: '02',
    details: [{ name: 'Coroa total', price: 'R$ 390,00' }, { name: 'Faceta', price: 'R$ 410,00' }, { name: 'Lente de contato', price: 'R$ 410,00' }, { name: 'Inlay/Onlay', price: 'R$ 380,00' }, { name: 'Adesiva', price: 'R$ 430,00' }],
  },
  {
    name: 'Protocolo',
    description: 'Planejamento seguro para reabilitações completas.',
    image: 'https://images.pexels.com/photos/6627600/pexels-photo-6627600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    number: '03',
    details: [{ name: 'Imediato', price: 'R$ 1.480,00' }, { name: 'Tardia', price: 'R$ 1.300,00' }, { name: 'Over denture', price: 'R$ 1.200,00' }],
  },
  {
    name: 'Prótese Total',
    description: 'Conforto, função e harmonia para o sorriso.',
    image: 'https://images.pexels.com/photos/6627590/pexels-photo-6627590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    number: '04',
    details: [{ name: 'Moldeira individual', price: 'R$ 50,00' }, { name: 'Chapa de prova', price: 'R$ 55,00' }, { name: 'Montagem de dente', price: 'R$ 100,00' }, { name: 'Acrilização c/ palato incolor', price: 'R$ 140,00' }, { name: 'Acrilização personalizada', price: 'R$ 210,00' }, { name: 'Reembasamento', price: 'R$ 110,00' }],
  },
  {
    name: 'Prótese Parcial Removível',
    description: 'Soluções personalizadas para cada necessidade.',
    image: 'https://images.pexels.com/photos/38362421/pexels-photo-38362421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    number: '05',
    details: [{ name: 'PPR metálica', price: 'R$ 255,00' }, { name: 'Montagem', price: 'R$ 100,00' }, { name: 'Acrilização', price: 'R$ 140,00' }],
  },
  {
    name: 'Resina Diamond',
    description: 'Acabamento refinado e estética de alto padrão.',
    image: 'https://images.pexels.com/photos/6627597/pexels-photo-6627597.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    number: '06',
    details: [{ name: 'Acrilização de PT', price: 'R$ 350,00' }, { name: 'Troca de dente protocolo', price: 'R$ 500,00' }, { name: 'Protocolo imediato', price: 'R$ 1.680,00' }, { name: 'Protocolo tardio', price: 'R$ 1.500,00' }],
  },
  {
    name: 'Placas',
    description: 'Proteção e conforto com ajuste preciso.',
    image: 'https://images.pexels.com/photos/6627606/pexels-photo-6627606.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    number: '07',
    details: [{ name: 'Clareamento', price: 'R$ 80,00' }, { name: 'Acetato 2mm', price: 'R$ 80,00' }, { name: 'Acrílica', price: 'R$ 125,00' }, { name: 'Silicone 2mm', price: 'R$ 80,00' }, { name: 'Silicone 3mm', price: 'R$ 80,00' }],
  },
  {
    name: 'Diversos',
    description: 'Reparos e componentes para sua rotina clínica.',
    image: 'https://images.pexels.com/photos/6627663/pexels-photo-6627663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    number: '08',
    details: [{ name: 'Barra reforço fundido', price: 'R$ 150,00' }, { name: 'Clone', price: 'R$ 60,00' }, { name: 'Casquete', price: 'R$ 25,00' }, { name: 'Conserto', price: 'R$ 62,00' }, { name: 'Conserto de protocolo', price: 'R$ 82,00' }, { name: 'Conserto c/ reforço', price: 'R$ 100,00' }, { name: 'Fundição de ucla', price: 'R$ 95,00' }, { name: 'Guia acrílico', price: 'R$ 115,00' }, { name: 'Guia acetato', price: 'R$ 90,00' }, { name: 'Ponto de solda', price: 'R$ 80,00' }, { name: 'Provisório', price: 'R$ 70,00' }, { name: 'Provisório adesiva', price: 'R$ 85,00' }, { name: 'Ponte fixa provisória meia arcada', price: 'R$ 350,00' }],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [revealedPrice, setRevealedPrice] = useState<string | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient-bg" aria-hidden="true"><span className="ambient-orb ambient-orb-a" /><span className="ambient-orb ambient-orb-b" /><span className="ambient-grain" /></div>
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Carlos Eduardo - início">
          <span className="brand-mark">CE</span>
          <span className="brand-copy">
            <strong>Carlos Eduardo</strong>
            <small>Laboratório de Prótese Dentária</small>
          </span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#sobre" onClick={closeMenu}>O laboratório</a>
          <a href="#servicos" onClick={closeMenu}>Especialidades</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="nav-cta" href="https://wa.me/5514999256480" target="_blank" rel="noreferrer" onClick={closeMenu}>
            <MessageCircle size={16} /> Fale conosco
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <div className="eyebrow"><span /> Precisão que transforma sorrisos</div>
            <h1>O detalhe que faz<br /><em>toda a diferença.</em></h1>
            <p className="hero-intro">Próteses dentárias com excelência artesanal, tecnologia e cuidado em cada etapa.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#servicos">Conheça nosso trabalho <ArrowDown size={17} /></a>
              <a className="text-link" href="#contato">Para dentistas <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src="https://images.pexels.com/photos/6627592/pexels-photo-6627592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profissional trabalhando com prótese dentária" />
            </div>
            <div className="hero-caption">Excelência em<br /><strong>prótese dentária</strong></div>
          </div>
          <div className="scroll-hint"><span>01 — 03</span><div className="scroll-line" /><span>Scroll</span></div>
        </section>

        <section className="intro-section section-pad" id="sobre">
          <div className="section-label">01 / O laboratório</div>
          <div className="intro-grid">
            <h2>Feito para quem<br /><em>não abre mão</em> do melhor.</h2>
            <div className="intro-text">
              <p>Somos um laboratório de prótese dentária dedicado a transformar a visão clínica do dentista em resultados que encantam.</p>
              <p>Unimos experiência, precisão técnica e um olhar apurado para a estética em uma parceria próxima, transparente e confiável.</p>
              <a className="line-link" href="#contato">Conheça nossa essência <ChevronRight size={17} /></a>
            </div>
          </div>
          <div className="values-row">
            <div className="value-item"><span className="value-icon"><Check size={17} /></span><div><strong>Precisão</strong><small>Em cada milímetro</small></div></div>
            <div className="value-item"><span className="value-icon"><Sparkles size={17} /></span><div><strong>Estética</strong><small>Natural por essência</small></div></div>
            <div className="value-item"><span className="value-icon"><Clock3 size={17} /></span><div><strong>Parceria</strong><small>De perto, sempre</small></div></div>
          </div>
        </section>

        <section className="services-section section-pad" id="servicos">
          <div className="services-heading">
            <div><div className="section-label">02 / Especialidades</div><h2>Nosso trabalho,<br /><em>em detalhes.</em></h2></div>
            <p>Um portfólio completo para acompanhar cada indicação com o padrão de qualidade que sua clínica merece.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const isExpanded = expandedService === service.name;
              return (
                <article className={`service-card ${isExpanded ? 'is-expanded' : ''}`} key={service.name}>
                  <div className="service-image"><img src={service.image} alt={service.name} loading="lazy" /><span className="service-number">{service.number}</span><span className="image-overlay" /></div>
                  <div className="service-content"><div><h3>{service.name}</h3><p className={isExpanded ? 'show-description' : ''}>{service.description}</p>{isExpanded && <div className="service-details"><span>O que fazemos — clique para ver o valor</span><ul>{service.details.map((detail) => { const key = `${service.name}-${detail.name}`; const isRevealed = revealedPrice === key; return <li key={detail.name} className={isRevealed ? 'is-revealed' : ''} onClick={() => setRevealedPrice(isRevealed ? null : key)}><span>{detail.name}</span><strong>{isRevealed ? detail.price : 'Toque para ver'}</strong></li>; })}</ul></div>}</div><button onClick={() => { setExpandedService(isExpanded ? null : service.name); setRevealedPrice(null); }} aria-label={`${isExpanded ? 'Fechar' : 'Ver'} detalhes de ${service.name}`}><Plus size={18} /></button></div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-orb orb-one" /><div className="contact-orb orb-two" />
          <div className="contact-inner">
            <div className="section-label light-label">03 / Vamos conversar</div>
            <h2>Seu melhor trabalho<br /><em>começa aqui.</em></h2>
            <p>Estamos prontos para ser o parceiro ideal da sua clínica.</p>
            <a className="button button-light" href="https://wa.me/5514999256480" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Chamar no WhatsApp <ArrowUpRight size={17} /></a>
            <div className="contact-details">
              <a href="tel:+5514999256480"><Phone size={16} /><span><small>Telefone</small>(14) 99925-6480</span></a>
              <a href="https://instagram.com/tpd.carlos_eduardo" target="_blank" rel="noreferrer"><Instagram size={16} /><span><small>Instagram</small>@tpd.carlos_eduardo</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">CE</span><span className="brand-copy"><strong>Carlos Eduardo</strong><small>Laboratório de Prótese Dentária</small></span></a><span>Precisão que transforma sorrisos.</span><span>© 2024 Carlos Eduardo</span></footer>
    </div>
  );
}

export default App;
