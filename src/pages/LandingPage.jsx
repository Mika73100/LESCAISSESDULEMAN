import React, { useState, useRef } from 'react'
import { useTrustindex } from '../composants/useTrustindex'
import { useMenu } from '../composants/useMenu'

const LandingPage = () => {
  useTrustindex()
  const { isMenuOpen, toggleMenu, setIsMenuOpen } = useMenu()
  const [activeImage, setActiveImage] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)
  
  const images = [
    { src: '/assets/imgs/caisse.png', alt: 'Caisses enregistreuses', label: 'Caisses' },
    { src: '/assets/imgs/geneve.png', alt: 'Genève', label: 'Genève' },
    { src: '/assets/imgs/graphisme.png', alt: 'Graphisme', label: 'Graphisme' },
    { src: '/assets/imgs/graphisme2.png', alt: 'Graphisme 2', label: 'Graphisme 2' },
    { src: '/assets/imgs/jetgeneve.png', alt: 'Jet Genève', label: 'Jet Genève' },
    { src: '/assets/imgs/Aix-les-bains.png', alt: 'Aix-les-Bains', label: 'Aix-les-Bains' },
    { src: '/assets/imgs/lesalpes.png', alt: 'Les Alpes', label: 'Les Alpes' },
    { src: '/assets/imgs/chevalet.png', alt: 'Chevalet', label: 'Chevalet' },
    { src: '/assets/imgs/genevebureau.png', alt: 'Bureau Genève', label: 'Bureau Genève' },
    { src: '/assets/imgs/sunmi.png', alt: 'Sunmi', label: 'Sunmi' }
  ]

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length)
  }
  
  // Informations de contact
  const contactInfo = {
    email: 'contact@lescaissesduleman.ch',
    phone: '+41 78 662 34 46',
    address: 'Région du Léman, Genève'
  }

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

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
        setIsVideoPlaying(false)
      } else {
        videoRef.current.play()
        setIsVideoPlaying(true)
      }
    }
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
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a>
              <a href="#tarifs" onClick={(e) => { e.preventDefault(); scrollToSection('tarifs') }}>Tarifs</a>
              <a href="#apropos" onClick={(e) => { e.preventDefault(); scrollToSection('apropos') }}>À propos</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>FAQ</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className="nav-cta-btn">Devis gratuit</a>
            </nav>
            <button className="burger-menu" onClick={toggleMenu} aria-label="Menu">
              <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
              <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
              <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
            </button>
            {isMenuOpen && (
              <div className="mobile-menu">
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a>
                <a href="#tarifs" onClick={(e) => { e.preventDefault(); scrollToSection('tarifs') }}>Tarifs</a>
                <a href="#apropos" onClick={(e) => { e.preventDefault(); scrollToSection('apropos') }}>À propos</a>
                <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>FAQ</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className="mobile-cta-btn">Devis gratuit</a>
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
              <span className="hero-title-black">Développez votre business</span>{' '}
              <span className="hero-title-red">avec nos solutions digitales</span>
            </h1>
            <p className="hero-description">
              <strong>Développement web</strong>, <strong>e-commerce</strong>, <strong>graphisme</strong>, <strong>caisses enregistreuses</strong> et <strong>gestion des réseaux sociaux</strong>. 
              Nous vous accompagnons de <strong>l'idée à la production</strong> avec un <strong>suivi complet</strong> de votre projet. 
              <strong>Synchronisez votre caisse avec votre site web</strong> pour une <strong>gestion unifiée</strong> de vos ventes en ligne et en magasin.
            </p>
            <div className="hero-metrics">
              <div className="hero-metric">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#10B981"/>
                </svg>
                <span>+100 <strong>caisses enregistreuses</strong> livrées</span>
              </div>
              <div className="hero-metric">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#10B981"/>
                </svg>
                <span>+200 <strong>projets web</strong> accompagnés</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('services')}>Découvrir nos services</button>
              <button className="btn btn-secondary" onClick={scrollToContact}>Nous contacter</button>
            </div>
          </div>
          <div className="hero-promo-card">
            <div className="promo-card-content">
              <video 
                ref={videoRef}
                src="/assets/video/LESCAISSESDULEMAN.mp4" 
                playsInline
                className="promo-video"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => setIsVideoPlaying(false)}
                onClick={togglePlayPause}
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              <button 
                className="promo-play-button" 
                onClick={togglePlayPause} 
                aria-label={isVideoPlaying ? "Pause" : "Play"}
              >
                {isVideoPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            </div>
            <div className="promo-card-panel">
              <div className="promo-panel-row">
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <span><strong>Installation</strong> rapide</span>
                </div>
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span><strong>SAV</strong> et <strong>conseil</strong></span>
                </div>
              </div>
              <div className="promo-panel-row">
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <span><strong>Contact</strong> direct</span>
                </div>
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span><strong>Caisses</strong> & <strong>bornes</strong></span>
                </div>
              </div>
              <div className="promo-panel-row">
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span><strong>Web</strong> & <strong>graphisme</strong></span>
                </div>
                <div className="promo-panel-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                  <span><strong>Expertise</strong> Franco-Suisse</span>
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
              <text fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif" textAnchor="middle">
                <textPath href="#catalogue-circle-path" startOffset="50%">
                  Telecharger         le         catalogue
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
              Quand vous voulez des <strong>solutions IT</strong> qui évoluent vite,
              avec un <strong>accompagnement 360°</strong> de <strong>l'idée à la production</strong>.
            </h3>
            <p className="services-intro-description">
              Experts en <strong>développement</strong>, <strong>data & IA</strong>, nous vous accompagnons tout au long de votre projet. 
              De la <strong>conception à la mise en production</strong>, notre équipe vous guide pour garantir un <strong>socle technique 
              solide et performant</strong>.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/system_computer.png" alt="Site web et mobile" />
              </div>
              <h3>Site web et mobile</h3>
              <p>
                Création de <strong>sites web modernes</strong>, <strong>e-commerce</strong> et d'<strong>applications mobiles</strong> sur mesure. 
                Nous développons des solutions <strong>performantes</strong> et <strong>responsives</strong>, adaptées à vos besoins, 
                de la <strong>conception à la mise en ligne</strong>. <strong>Synchronisez votre caisse avec votre site web</strong> 
                pour une <strong>gestion unifiée</strong> de vos ventes en ligne et en magasin.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/campaign_marketing.png" alt="Graphisme et communication" />
              </div>
              <h3>Graphisme et communication</h3>
              <p>
                Services de <strong>design graphique</strong> et de <strong>communication visuelle</strong>. Création de <strong>logos</strong>, <strong>chartes graphiques</strong>, 
                <strong>supports marketing</strong> et <strong>identité visuelle</strong> pour renforcer votre <strong>image de marque</strong>.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/tags_price.png" alt="Matériel de publicité digital" />
              </div>
              <h3>Matériel de publicité digital</h3>
              <p>
                Fourniture et installation d'<strong>écrans publicitaires digitaux</strong>, <strong>bornes interactives</strong> et solutions d'<strong>affichage 
                dynamique</strong> pour votre communication en <strong>point de vente</strong> et <strong>espaces publics</strong>.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/shopping_shop.png" alt="Matériel et logiciel de caisses" />
              </div>
              <h3>Matériel et logiciel de caisses</h3>
              <p>
                Solutions complètes de <strong>caisses enregistreuses</strong>, <strong>terminaux de paiement</strong> et <strong>logiciels de gestion de point de vente</strong>. 
                <strong>Installation</strong>, <strong>configuration</strong> et <strong>formation</strong> pour optimiser vos <strong>ventes</strong> et votre <strong>gestion</strong>.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/data.png" alt="SAV et maintenance informatique" />
              </div>
              <h3>SAV et maintenance informatique</h3>
              <p>
                <strong>Service après-vente</strong> et <strong>maintenance préventive</strong> de vos équipements informatiques. <strong>Dépannage</strong>, <strong>réparation</strong>, 
                <strong>mises à jour</strong> et <strong>support technique</strong> pour garantir la <strong>continuité</strong> de vos activités.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/icons/business_building.png" alt="Domotique professionnel" />
              </div>
              <h3>Domotique professionnel</h3>
              <p>
                Solutions de <strong>domotique</strong> et d'<strong>automatisation</strong> pour entreprises. <strong>Gestion centralisée</strong> de l'éclairage, 
                chauffage, sécurité et équipements pour optimiser le <strong>confort</strong> et réduire les <strong>coûts énergétiques</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="pricing">
        <div className="container">
          <div className="pricing-header">
            <div className="pricing-badge">Nos Tarifs</div>
            <h2 className="section-title">Tarifs Transparents</h2>
            <p className="pricing-subtitle">
              Des <strong>tarifs clairs</strong> et <strong>adaptés</strong> à vos besoins. 
              Tous nos devis sont <strong>gratuits</strong> et personnalisés selon votre projet.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Caisses Enregistreuses</h3>
                <div className="pricing-icon">
                  <img src="/assets/icons/shopping_shop.png" alt="Caisses" />
                </div>
              </div>
              <div className="pricing-content">
                <p className="pricing-description">
                  Solutions complètes de <strong>caisses enregistreuses</strong> avec installation et formation.
                </p>
                <ul className="pricing-features">
                  <li>Installation sur site</li>
                  <li>Formation du personnel</li>
                  <li>Support technique inclus</li>
                  <li>Maintenance disponible</li>
                </ul>
                <div className="pricing-footer">
                  <p className="pricing-note">À partir de</p>
                  <button className="btn btn-primary" onClick={scrollToContact}>Demander un devis</button>
                </div>
              </div>
            </div>
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge-featured">Populaire</div>
              <div className="pricing-card-header">
                <h3>Développement Web</h3>
                <div className="pricing-icon">
                  <img src="/assets/icons/system_computer.png" alt="Web" />
                </div>
              </div>
              <div className="pricing-content">
                <p className="pricing-description">
                  Création de <strong>sites web</strong>, <strong>e-commerce</strong> et <strong>applications mobiles</strong> sur mesure.
                </p>
                <ul className="pricing-features">
                  <li>Site web responsive</li>
                  <li>E-commerce sur mesure</li>
                  <li>Synchronisation caisse/site web</li>
                  <li>Application mobile</li>
                  <li>Hébergement inclus</li>
                  <li>Maintenance & support</li>
                </ul>
                <div className="pricing-footer">
                  <p className="pricing-note">Sur devis personnalisé</p>
                  <button className="btn btn-primary" onClick={scrollToContact}>Demander un devis</button>
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Graphisme & Communication</h3>
                <div className="pricing-icon">
                  <img src="/assets/icons/campaign_marketing.png" alt="Graphisme" />
                </div>
              </div>
              <div className="pricing-content">
                <p className="pricing-description">
                  Services de <strong>design graphique</strong> et <strong>communication visuelle</strong>.
                </p>
                <ul className="pricing-features">
                  <li>Logo & charte graphique</li>
                  <li>Supports marketing</li>
                  <li>Identité visuelle</li>
                  <li>Conseil en communication</li>
                </ul>
                <div className="pricing-footer">
                  <p className="pricing-note">Sur devis personnalisé</p>
                  <button className="btn btn-primary" onClick={scrollToContact}>Demander un devis</button>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-cta">
            <p>Besoin d'une <strong>solution sur mesure</strong> ?</p>
            <button className="btn btn-secondary" onClick={scrollToContact}>Contactez-nous pour un devis gratuit</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="about-badge">Notre Histoire</div>
              <h2 className="section-title">À Propos de Nous</h2>
              <div className="about-divider"></div>
              <p>
                Fondée sur les valeurs du <strong>service client à la suisse</strong>, notre entreprise allie <strong>proximité, organisation et excellence</strong>. 
                Située au pied des Alpes et enrichie par une solide expérience genevoise, nous proposons des <strong>solutions informatiques 
                complètes</strong> : <strong>caisses enregistreuses</strong>, <strong>bornes interactives</strong>, <strong>développement de sites web sur mesure</strong> et <strong>création graphique</strong>.
              </p>
              <p>
                En complément de nos services techniques, nous vous accompagnons dans votre <strong>présence digitale</strong> avec la gestion de vos 
                plateformes sociales (LinkedIn, Instagram) et le <strong>covering automobile</strong> pour valoriser votre <strong>image de marque</strong>.
              </p>
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>En savoir plus</button>
            </div>
            <div className="about-stats">
              <div className="animated-grid">
                <div className="grid-column grid-column-up">
                  {[...images.filter((_, index) => index % 2 === 0), ...images.filter((_, index) => index % 2 === 0)].map((image, index) => (
                    <div key={`up-${index}`} className="grid-item">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="grid-item-image" 
                      />
                    </div>
                  ))}
                </div>
                <div className="grid-column grid-column-down">
                  {[...images.filter((_, index) => index % 2 === 1), ...images.filter((_, index) => index % 2 === 1)].map((image, index) => (
                    <div key={`down-${index}`} className="grid-item">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="grid-item-image" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="faq-header">
            <div className="faq-badge">Questions Fréquentes</div>
            <h2 className="section-title">FAQ</h2>
            <p className="faq-subtitle">
              Trouvez les réponses aux <strong>questions les plus fréquentes</strong> sur nos services.
            </p>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={(e) => {
                const item = e.currentTarget.parentElement
                item.classList.toggle('active')
              }}>
                <span>Quels sont vos délais de livraison pour une caisse enregistreuse ?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  Les délais varient selon le modèle et la disponibilité. En général, nous livrons et installons 
                  votre <strong>caisse enregistreuse</strong> sous <strong>7 à 14 jours</strong> après validation du devis. 
                  Pour les commandes urgentes, nous proposons des solutions express.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={(e) => {
                const item = e.currentTarget.parentElement
                item.classList.toggle('active')
              }}>
                <span>Proposez-vous un service après-vente ?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  Oui, nous proposons un <strong>service après-vente complet</strong> incluant dépannage, réparation, 
                  maintenance préventive et support technique. Nous sommes disponibles pour vous accompagner 
                  tout au long de la vie de vos équipements.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={(e) => {
                const item = e.currentTarget.parentElement
                item.classList.toggle('active')
              }}>
                <span>Combien coûte la création d'un site web ?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  Le prix d'un <strong>site web</strong> dépend de vos besoins spécifiques : nombre de pages, 
                  fonctionnalités, design personnalisé, etc. Nous proposons des <strong>devis gratuits</strong> 
                  et personnalisés sous 48h. Contactez-nous pour discuter de votre projet.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={(e) => {
                const item = e.currentTarget.parentElement
                item.classList.toggle('active')
              }}>
                <span>Intervenez-vous dans toute la Suisse ?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  Nous intervenons principalement dans la <strong>région du Léman</strong> (Genève, Vaud, Haute-Savoie) 
                  pour les installations sur site. Pour les services de <strong>développement web</strong> et 
                  <strong>graphisme</strong>, nous travaillons avec des clients dans toute la Suisse et à l'international.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={(e) => {
                const item = e.currentTarget.parentElement
                item.classList.toggle('active')
              }}>
                <span>Proposez-vous des formations pour utiliser les équipements ?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  Oui, nous proposons des <strong>formations personnalisées</strong> pour votre équipe lors de 
                  l'installation de vos équipements. Nous vous formons à l'utilisation optimale de vos 
                  <strong>caisses enregistreuses</strong> et logiciels pour garantir une prise en main rapide.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={(e) => {
                const item = e.currentTarget.parentElement
                item.classList.toggle('active')
              }}>
                <span>Comment obtenir un devis gratuit ?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  Pour obtenir un <strong>devis gratuit</strong>, contactez-nous par email, téléphone ou via notre 
                  formulaire de contact. Nous vous répondons sous <strong>48h</strong> avec un devis détaillé 
                  adapté à vos besoins. Vous pouvez également nous contacter directement via WhatsApp.
                </p>
              </div>
            </div>
          </div>
          <div className="faq-cta">
            <p>Vous avez d'autres questions ?</p>
            <button className="btn btn-primary" onClick={scrollToContact}>Contactez-nous</button>
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
            <h2>Prêt à <strong>commencer</strong> ?</h2>
            <p>Rejoignez-nous <strong>dès aujourd'hui</strong> et découvrez comment nous pouvons <strong>vous aider</strong></p>
            <a href={`mailto:${contactInfo.email}`} className="btn btn-primary btn-large">Commencer maintenant</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <img src="/assets/imgs/logotypo.png" alt="Les Caisses du Léman" className="footer-logo" />
              <p>Votre <strong>partenaire</strong> de <strong>solutions digitales</strong></p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>{contactInfo.email}</li>
                <li>{contactInfo.phone}</li>
                <li>{contactInfo.address}</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Suivez-nous</h4>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://www.tiktok.com/@lescaissesduleman" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/tiktok-icon.png" alt="TikTok" />
                </a>
                <a href="https://www.instagram.com/lescaissesduleman" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/instagram.png" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Les Caisses du Léman. <span className="footer-line-break">Tous droits réservés.</span></p>
          </div>
        </div>
      </footer>

      {/* WhatsApp CTA Button */}
      <a 
        href="https://wa.me/41786623446" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-cta"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <img src="/assets/icons/wattsapp.png" alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </div>
  )
}

export default LandingPage

