import React from 'react'
import { useTrustindex } from '../composants/useTrustindex'
import { useMenu } from '../composants/useMenu'

const LandingPage = () => {
  useTrustindex()
  const { isMenuOpen, toggleMenu, setIsMenuOpen } = useMenu()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToContact = () => {
    scrollToSection('contact')
  }

  const downloadCatalogue = () => {
    const link = document.createElement('a')
    link.href = '/assets/doc/catalogue-lescaissesduleman.pdf'
    link.download = 'catalogue-lescaissesduleman.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('accueil') }} style={{ cursor: 'pointer' }}>
              <img src="/assets/imgs/logo-horizontal.png" alt="Les Caisses du Léman" className="logo-img" />
            </div>
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <a href="#accueil" onClick={(e) => { e.preventDefault(); scrollToSection('accueil') }}>Accueil</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a>
              <a href="#apropos" onClick={(e) => { e.preventDefault(); scrollToSection('apropos') }}>À propos</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
            </nav>
            <button className="burger-menu" onClick={toggleMenu} aria-label="Menu">
              <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
              <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
              <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
            </button>
            {isMenuOpen && (
              <div className="mobile-menu">
                <a href="#accueil" onClick={(e) => { e.preventDefault(); scrollToSection('accueil') }}>Accueil</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a>
                <a href="#apropos" onClick={(e) => { e.preventDefault(); scrollToSection('apropos') }}>À propos</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
              </svg>
              <span>Devis gratuit disponible sous 48h</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-title-black">L'équipe IT</span>{' '}
              <span className="hero-title-red">qui vous guide</span>
            </h1>
            <p className="hero-description">
              Développement web, graphisme, caisses enregistreuses et gestion des réseaux sociaux. 
              Nous vous accompagnons de l'idée à la production avec un suivi complet de votre projet.
            </p>
            <div className="hero-metrics">
              <div className="hero-metric">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#10B981"/>
                </svg>
                <span>+100 caisses enregistreuses livrées</span>
              </div>
              <div className="hero-metric">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#10B981"/>
                </svg>
                <span>+200 projets web accompagnés</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary">Découvrir nos services</button>
              <button className="btn btn-secondary" onClick={scrollToContact}>Nous contacter</button>
            </div>
          </div>
          <div className="hero-promo-card">
            <div className="promo-card-content">
              <button className="promo-card-badge">Découvrez nos services</button>
              <h2 className="promo-card-title">PULS▷ 'igital</h2>
              <p className="promo-card-subtitle">Nearshoring sécurisé et agile</p>
              <button className="promo-play-button" aria-label="Play">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <div className="promo-card-panel">
              <div className="promo-panel-row">
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Démarrage en 48h</span>
                </div>
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <span>Équipe IT full stack</span>
                </div>
              </div>
              <div className="promo-panel-row">
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
                  </svg>
                  <span>Livraisons hebdo</span>
                </div>
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>24h Réponse</span>
                </div>
              </div>
              <div className="promo-panel-row">
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                  </svg>
                  <span>Tarif journalier dès CHF 180.-</span>
                </div>
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>12+ Années</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="catalogue-button" onClick={downloadCatalogue}>
          <div className="catalogue-badge">
            <svg className="catalogue-text-curved" viewBox="0 0 200 200" width="120" height="120">
              <defs>
                <path id="catalogue-circle-path" d="M 100, 100 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
              </defs>
              <text fill="#FFFFFF" font-size="11" font-weight="700" font-family="Arial, sans-serif" text-anchor="middle">
                <textPath href="#catalogue-circle-path" startOffset="50%">
                  Telecharger le catalogue
                </textPath>
              </text>
            </svg>
            <img src="/assets/imgs/logo-icon.png" alt="Logo" className="catalogue-logo" />
          </div>
        </button>
      </section>

      {/* Features Section */}
      <section id="services" className="features">
        <div className="container">
          {/* Logo */}
          <div className="services-logo">
            <img src="/assets/imgs/lescaissesdulemanlogo.png" alt="Les Caisses du Léman" className="services-logo-img" />
          </div>
          {/* Texte d'introduction */}
          <div className="services-intro">
            <p className="services-intro-label">QUAND NOS SOLUTIONS SONT LA BONNE RÉPONSE</p>
            <h3 className="services-intro-title">
              Quand vous voulez des solutions IT qui évoluent vite,
              avec un accompagnement 360° de l'idée à la production.
            </h3>
            <p className="services-intro-description">
              Experts en développement, data & IA, nous vous accompagnons tout au long de votre projet. 
              De la conception à la mise en production, notre équipe vous guide pour garantir un socle technique 
              solide et performant.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/system_computer.png" alt="Site web et mobile" />
              </div>
              <h3>Site web et mobile</h3>
              <p>
                Création de sites web modernes et d'applications mobiles sur mesure. Nous développons des solutions 
                performantes, responsives et adaptées à vos besoins, de la conception à la mise en ligne.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/campaign_marketing.png" alt="Graphisme et communication" />
              </div>
              <h3>Graphisme et communication</h3>
              <p>
                Services de design graphique et de communication visuelle. Création de logos, chartes graphiques, 
                supports marketing et identité visuelle pour renforcer votre image de marque.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/tags_price.png" alt="Matériel de publicité digital" />
              </div>
              <h3>Matériel de publicité digital</h3>
              <p>
                Fourniture et installation d'écrans publicitaires digitaux, bornes interactives et solutions d'affichage 
                dynamique pour votre communication en point de vente et espaces publics.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/shopping_shop.png" alt="Matériel et logiciel de caisses" />
              </div>
              <h3>Matériel et logiciel de caisses</h3>
              <p>
                Solutions complètes de caisses enregistreuses, terminaux de paiement et logiciels de gestion de point de vente. 
                Installation, configuration et formation pour optimiser vos ventes et votre gestion.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/data.png" alt="SAV et maintenance informatique" />
              </div>
              <h3>SAV et maintenance informatique</h3>
              <p>
                Service après-vente et maintenance préventive de vos équipements informatiques. Dépannage, réparation, 
                mises à jour et support technique pour garantir la continuité de vos activités.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/business_building.png" alt="Domotique professionnel" />
              </div>
              <h3>Domotique professionnel</h3>
              <p>
                Solutions de domotique et d'automatisation pour entreprises. Gestion centralisée de l'éclairage, 
                chauffage, sécurité et équipements pour optimiser le confort et réduire les coûts énergétiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">À Propos de Nous</h2>
              <p>
                Experts IT en développement, data & IA, nous accompagnons nos clients de l'idée à la production 
                avec un accompagnement 360°. Notre équipe d'experts passionnés développe constamment de nouvelles 
                solutions pour répondre aux besoins changeants dans un monde en évolution rapide.
              </p>
              <p>
                Avec plus de 100 projets livrés et plus de 200 profils IT staffés, nous avons développé une expertise 
                solide dans le développement, la data et l'intelligence artificielle. Nous nous engageons à fournir 
                des services de qualité supérieure, alliant innovation technique et accompagnement personnalisé.
              </p>
              <button className="btn btn-primary">En savoir plus</button>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients satisfaits</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support disponible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="google-reviews-section" className="google-reviews">
      <div className="container">
        <div className="ti-widget" data-widget-id="bdd668f624ea6214a4761c20403" />
      </div>
    </section>
      <div id="trustindex-loader" src="https://cdn.trustindex.io/loader.js?bdd668f624ea6214a4761c20403"></div>


      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à commencer ?</h2>
            <p>Rejoignez-nous dès aujourd'hui et découvrez comment nous pouvons vous aider</p>
            <button className="btn btn-primary btn-large">Commencer maintenant</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <img src="/assets/imgs/logotypo.png" alt="Les Caisses du Léman" className="footer-logo" />
              <p>Votre partenaire de solutions digitales</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>Email: contact@lescaissesduleman.ch</li>
                <li>Téléphone: +41 XX XXX XX XX</li>
                <li>Adresse: Région du Léman, Suisse</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Suivez-nous</h4>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="#" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/tiktok-icon.png" alt="TikTok" />
                </a>
                <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/instagram.png" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Les Caisses du Léman. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

