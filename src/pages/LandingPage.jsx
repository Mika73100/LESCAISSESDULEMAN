import React, { useState, useRef } from 'react'
import { useTrustindex } from '../composants/useTrustindex'
import { useMenu } from '../composants/useMenu'

const MAIN_MODULES_COUNT = 20

const LandingPage = () => {
  useTrustindex()
  const { isMenuOpen, toggleMenu, setIsMenuOpen } = useMenu()
  const [activeImage, setActiveImage] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false)
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
    { src: '/assets/imgs/sunmi.png', alt: 'Sunmi', label: 'Sunmi' },
    { src: '/assets/imgs/casio-geneve.png', alt: 'Casio Genève', label: 'Casio Genève' }
  ]

  const sunmiImages = [
    '/assets/imgs/sunmi/borne.png',
    '/assets/imgs/sunmi/pad.png',
    '/assets/imgs/sunmi/sunmi_imp.png',
    '/assets/imgs/sunmi/sunmi_v3.png',
    '/assets/imgs/sunmi/sunmi.png',
    '/assets/imgs/sunmi/sunmi1.png',
    '/assets/imgs/sunmi/sunmi2.png',
    '/assets/imgs/sunmi/sunmi3.png',
    '/assets/imgs/sunmi/tpe.png',
    '/assets/imgs/sunmi/tpe2.png',
    '/assets/imgs/sunmi/sunmitpe.png'
  ]

  const epsonImages = [
    '/assets/imgs/epson/caisse-epson.webp',
    '/assets/imgs/epson/caisse-epson-ecran.webp',
    '/assets/imgs/epson/30958-productpicture-lores-ix-tm-m30ii-s_main.png',
    '/assets/imgs/epson/Img_27934693.png',
    '/assets/imgs/epson/shopping.webp',
    '/assets/imgs/epson/36476-productpicture-lores-int-int-tm-p20ii_main.webp',
    '/assets/imgs/epson/epson-tm-p20ii-8-pts-mm-203-dpi-usb-c-bt-couleur-blanc-inclus-cable-usb-usb-c.jpg',
    '/assets/imgs/epson/ChatGPT Image 4 mars 2026, 20_49_58.png',
    '/assets/imgs/epson/tmyt70ii_004.webp',
    '/assets/imgs/epson/epsontm-t20iii-3.jpg'
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
    phone: '+33 6 07 53 56 27',
    address: 'Aix-les-Bains | Genève'
  }

  // Modules du logiciel de caisse (style POS / Paramètres) — chaque module a un picto unique
  const posModuleIcons = [
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M12 11v6"/><path d="M9 14h6"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="8" x2="7" y2="8.01"/><line x1="11" y1="12" x2="11" y2="12.01"/><line x1="15" y1="12" x2="15" y2="12.01"/><line x1="19" y1="12" x2="19" y2="12.01"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M8 7l4-4 4 4"/><path d="M8 17l4 4 4-4"/><path d="M3 12h2"/><path d="M5 10h2"/><path d="M5 14h2"/><path d="M19 12h2"/><path d="M17 10h2"/><path d="M17 14h2"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><rect x="9" y="6" width="6" height="2" rx="1"/><circle cx="12" cy="14" r="2"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="3"/><path d="M19 12v6"/><path d="M22 15l-3 3-3-3"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/><path d="M5 5l14 14"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><line x1="7.5" y1="4.21" x2="16.5" y2="19.79"/><line x1="16.5" y1="4.21" x2="7.5" y2="19.79"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M12 12h.01"/><path d="M12 16h.01"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M9 15l2 2 4-4"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="6" x2="6" y2="6"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="2" y1="18" x2="6" y2="18"/><line x1="9" y1="6" x2="22" y2="6"/><line x1="9" y1="12" x2="22" y2="12"/><line x1="9" y1="18" x2="22" y2="18"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M6 6h4"/><path d="M6 10h4"/><path d="M6 14h4"/><path d="M6 18h4"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/><path d="M14 6h4"/><path d="M14 10h4"/><path d="M14 14h4"/><path d="M14 18h4"/><path d="M18 6h4"/><path d="M18 10h4"/><path d="M18 14h4"/><path d="M18 18h4"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h7v7H4z"/><path d="M13 4h7v4h-7z"/><path d="M13 13h7v7h-7z"/><path d="M4 13h7v7H4z"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="2"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/><path d="M7 15h.01"/><path d="M12 15h.01"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M12 12l9-5"/><path d="M12 12v9.5"/><path d="M12 12L3 7"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l3 3"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M8 7l4-4 4 4"/><path d="M8 17l4 4 4-4"/><path d="M3 12h2"/><path d="M5 10h2"/><path d="M5 14h2"/><path d="M19 12h2"/><path d="M17 10h2"/><path d="M17 14h2"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M6 16h4"/><path d="M14 16h4"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/><line x1="9" y1="19" x2="12" y2="19"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 6 6 0 0 0 9-9z"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M12 11v6"/><path d="M9 14h6"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/><path d="M7 15h2"/><path d="M15 15h2"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>),
    (props) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>)
  ]

  const posModules = [
    'Imprimante ticket',
    'Ticket sans détail',
    'Bons de préparations',
    'Impression code barres',
    'Gestion des commandes',
    'Livraison',
    'Click and collect',
    'À emporter',
    'Sur place',
    'Stock',
    'Import / Export stocks',
    'Inventaire',
    'Plan de salle',
    'Formules / Menus',
    'Partage des règlements',
    'Encaissement partiel',
    'Gestion des utilisateurs',
    'Pointeuse',
    'Compte client',
    'Fidélité client',
    'Statistiques avancées',
    'TPE / Paiement',
    'Bons cadeaux / Avoirs',
    'Pourboire',
    'Multi-Poste (Pad)',
    'Borne de commande',
    'Ecran cuisine (KDS)',
    'Balance connectée',
    'Télécommande (Pad)',
    'Afficheur client (Display)',
    'Code d\'accès et verrouillage',
    'Badge de connexion',
    'Happy hour',
    'Gestion des déclinaisons',
    'Options et suppléments',
    'Retours produits',
    'Edition en masse',
    'Import / Export produits',
    'Fournisseur',
    'Images',
    'Indisponibilités',
    'Famille d\'article',
    'Pack d\'article',
    'Article prix variable',
    'Article avec unités',
    'Gestion de code barre',
    'Lecteur code barre via caméra',
    'Grille de bouton avancée',
    'Multi tarifs',
    'Activité en temps réel (Live)',
    'Gestion des emplacements',
    'Viva Wallet',
    'SumUp',
    'Ingenico',
    'Resto Flash',
    'Deliverect',
    'Bon d\'achats',
    'Flux de caisse',
    'Gestion fonds de caisse',
    'Française des jeux',
    'Aide au comptage de la caisse',
    'Reconnaissance ticket restaurant',
    'Carte titre restaurant',
    'Yavin',
    'Verifone',
    'CashDro',
    'Nepting',
    'LoyalPay',
    'Worldline',
    'Mode école',
    'Assistance soir et weekend',
    'Menu digital',
    'Commandes par QR code',
    'Quota de commande',
    'Atilla Pay',
    'KillBills',
    'Billiv',
    'Easybeer'
  ]

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
              <a href="#tarifs" onClick={(e) => { e.preventDefault(); scrollToSection('tarifs') }}>Offres</a>
              <a href="#apropos" onClick={(e) => { e.preventDefault(); scrollToSection('apropos') }}>À propos</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>FAQ</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className="nav-cta-btn">Contact</a>
            </nav>
            <button className="burger-menu" onClick={toggleMenu} aria-label="Menu">
              <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
              <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
              <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
            </button>
            {isMenuOpen && (
              <div className="mobile-menu">
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a>
                <a href="#tarifs" onClick={(e) => { e.preventDefault(); scrollToSection('tarifs') }}>Offres</a>
                <a href="#apropos" onClick={(e) => { e.preventDefault(); scrollToSection('apropos') }}>À propos</a>
                <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>FAQ</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className="mobile-cta-btn">Contact</a>
              </div>
            )}
          </div>
        </div>
      </header>

      <main id="main-content">
      {/* Hero Section */}
      <section id="accueil" className="hero" aria-label="Accueil">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
              </svg>
              <span>Devis gratuit disponible sous 48h</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-title-black">Caisse enregistreuse en Suisse et en France</span>{' '}
              <span className="hero-title-red">et solutions POS pour commerces et restaurants</span>
            </h1>
            <p className="hero-description">
              <strong>Installation de caisse enregistreuse</strong>, <strong>systeme POS</strong>, <strong>logiciel de caisse</strong> et <strong>terminal de paiement</strong> pour votre point de vente. 
              Nous accompagnons les commerces et restaurants en <strong>Suisse et en France</strong>, de <strong>Geneve a Lausanne</strong> et d'<strong>Annecy a Chambery</strong>, de l'etude a la mise en service. 
              <strong>Synchronisez votre caisse avec votre site web</strong> pour une <strong>gestion unifiee</strong> de vos ventes en ligne et en magasin.
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
        <div className="catalogue-button" aria-hidden="true">
          <div className="catalogue-badge">
            <svg className="catalogue-text-curved" viewBox="0 0 200 200" width="120" height="120" aria-hidden="true">
              <defs>
                <path id="catalogue-circle-path" d="M 100, 100 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
              </defs>
              <text fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif" textAnchor="middle">
                <textPath href="#catalogue-circle-path" startOffset="50%">
                  Les Caisses du Léman
                </textPath>
              </text>
            </svg>
            <img src="/assets/imgs/logo-icon.png" alt="Les Caisses du Léman" className="catalogue-logo" />
          </div>
        </div>
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
              Quand vous voulez des <strong>solutions digitales</strong> qui évoluent vite,
              avec un <strong>accompagnement 360°</strong> de <strong>l'idée à la production</strong>.
            </h3>
            <p className="services-intro-description">
              Experts en <strong>solutions digitales</strong> : <strong>développement web</strong>, <strong>e-commerce</strong>, <strong>graphisme</strong>, <strong>gestion des réseaux sociaux</strong> et <strong>équipements de point de vente</strong>, nous vous accompagnons tout au long de votre projet. 
              De la <strong>conception à la mise en production</strong>, notre équipe vous guide pour garantir des <strong>solutions solides et performantes</strong>. 
              Nous proposons la <strong>synchronisation entre votre caisse</strong>, <strong>votre site web</strong>, <strong>votre e-commerce</strong> et <strong>vos réseaux sociaux</strong> pour une <strong>gestion unifiée</strong> de votre activité.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card feature-card-with-bg feature-card-web">
              <div className="feature-card-overlay"></div>
              <div className="feature-card-content">
                <h3>Site web et mobile</h3>
                <p>
                  Création de <strong>sites web modernes</strong>, <strong>e-commerce</strong> et d'<strong>applications mobiles</strong> sur mesure. 
                  Nous développons des solutions <strong>performantes</strong> et <strong>responsives</strong>, adaptées à vos besoins, 
                  de la <strong>conception à la mise en ligne</strong>. <strong>Synchronisez votre caisse avec votre site web</strong> 
                  pour une <strong>gestion unifiée</strong> de vos ventes en ligne et en magasin.
                </p>
              </div>
            </div>
            <div className="feature-card feature-card-with-bg feature-card-graphisme">
              <div className="feature-card-overlay"></div>
              <div className="feature-card-content">
                <h3>Graphisme et communication</h3>
                <p>
                  Services de <strong>design graphique</strong> et de <strong>communication visuelle</strong>. Création de <strong>logos</strong>, <strong>chartes graphiques</strong>, 
                  <strong>supports marketing</strong> et <strong>identité visuelle</strong> pour renforcer votre <strong>image de marque</strong>, sur le <strong>web</strong> comme sur vos <strong>réseaux sociaux</strong>.
                </p>
              </div>
            </div>
            <div className="feature-card feature-card-with-bg feature-card-pub">
              <div className="feature-card-overlay"></div>
              <div className="feature-card-content">
                <h3>Réseaux sociaux & publicité digitale</h3>
                <p>
                  <strong>Gestion</strong> et <strong>animation</strong> de vos <strong>réseaux sociaux</strong> (contenus, visuels, campagnes), ainsi que mise en place de <strong>publicités digitales</strong> 
                  pour augmenter votre <strong>visibilité en ligne</strong> et soutenir vos <strong>ventes en magasin et e-commerce</strong>.
                </p>
              </div>
            </div>
            <div className="feature-card feature-card-with-bg feature-card-materiel">
              <div className="feature-card-overlay"></div>
              <div className="feature-card-content">
                <h3>Matériel et logiciel de caisses</h3>
                <p>
                  Solutions complètes de <strong>caisses enregistreuses</strong>, <strong>terminaux de paiement</strong> et <strong>logiciels de gestion de point de vente</strong>. 
                  <strong>Installation</strong>, <strong>configuration</strong> et <strong>formation</strong> pour optimiser vos <strong>ventes</strong> et votre <strong>gestion</strong>.
                </p>
              </div>
            </div>
            <div className="feature-card feature-card-with-bg feature-card-sav">
              <div className="feature-card-overlay"></div>
              <div className="feature-card-content">
                <h3>SAV et maintenance informatique</h3>
                <p>
                  <strong>Service après-vente</strong> et <strong>maintenance préventive</strong> de vos équipements informatiques. <strong>Dépannage</strong>, <strong>réparation</strong>, 
                  <strong>mises à jour</strong> et <strong>support technique</strong> pour garantir la <strong>continuité</strong> de vos activités.
                </p>
              </div>
            </div>
            <div className="feature-card feature-card-with-bg feature-card-domotique">
              <div className="feature-card-overlay"></div>
              <div className="feature-card-content">
                <h3>Domotique professionnel</h3>
                <p>
                  Solutions de <strong>domotique</strong> et d'<strong>automatisation</strong> pour entreprises. <strong>Gestion centralisée</strong> de l'éclairage, 
                  chauffage, sécurité et équipements pour optimiser le <strong>confort</strong> et réduire les <strong>coûts énergétiques</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Partners Section */}
      <section className="technologies">
        <div className="container">
          <div className="technologies-header">
            <p className="technologies-label">TECHNOLOGIES & PARTENAIRES</p>
            <h3 className="technologies-title">
              Des <strong>solutions professionnelles</strong> de <strong>qualité</strong>
            </h3>
          </div>
          <div className="technologies-scroll">
            <div className="technologies-track">
              <div className="technology-item">
                <img src="/assets/icons/adobe.png" alt="Adobe" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/atillapos.png" alt="AtillaPOS" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/expo.png" alt="Expo" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/Epson-Logo.png" alt="Epson" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/sunmi.png" alt="Sunmi" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/wordpress.png" alt="WordPress" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/imin.png" alt="Imin" className="technology-logo" />
              </div>
              {/* Duplication pour l'effet de boucle infinie */}
              <div className="technology-item">
                <img src="/assets/icons/adobe.png" alt="Adobe" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/atillapos.png" alt="AtillaPOS" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/expo.png" alt="Expo" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/sunmi.png" alt="Sunmi" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/wordpress.png" alt="WordPress" className="technology-logo" />
              </div>
              <div className="technology-item">
                <img src="/assets/icons/imin.png" alt="Imin" className="technology-logo" />
              </div>
            </div>
          </div>

          {/* Partenaires financement Oney & PayPal */}
          <div className="finance-partner">
            <div className="finance-partner-logo-wrap">
              <img src="/assets/imgs/Logo_Oney.svg.png" alt="Oney" className="finance-partner-logo" />
              <img src="/assets/imgs/PayPal.svg.png" alt="PayPal" className="finance-partner-logo" />
            </div>
            <p className="finance-partner-text">Financer vos projets en plusieurs fois</p>
          </div>
          
          {/* Galerie d'images Sunmi */}
          <div className="sunmi-gallery-section">
            <div className="sunmi-gallery-header">
              <h3 className="sunmi-gallery-title">Nos <strong>produits Sunmi</strong></h3>
              <p className="sunmi-gallery-subtitle">Découvrez notre gamme complète de <strong>caisses enregistreuses</strong> et <strong>terminaux</strong> Sunmi</p>
            </div>
            <div className="sunmi-gallery-grid">
              {sunmiImages.map((image, index) => (
                <div 
                  key={index}
                  className="sunmi-gallery-item"
                >
                  <div className="sunmi-gallery-image-wrapper">
                    <img 
                      src={image} 
                      alt={`Produit Sunmi ${index + 1}`}
                      className="sunmi-gallery-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Galerie d'images Epson */}
          <div className="epson-gallery-section">
            <div className="epson-gallery-header">
              <h3 className="epson-gallery-title">Nos <strong>produits Epson</strong></h3>
              <p className="epson-gallery-subtitle">Découvrez notre gamme d'<strong>imprimantes à reçus</strong> et <strong>caisses</strong> Epson</p>
            </div>
            <div className="epson-gallery-grid">
              {epsonImages.map((image, index) => (
                <div 
                  key={index}
                  className="epson-gallery-item"
                >
                  <div className="epson-gallery-image-wrapper">
                    <img 
                      src={image} 
                      alt={`Produit Epson ${index + 1}`}
                      className={`epson-gallery-image ${image.includes('Img_27934693.png') ? 'epson-gallery-image--featured' : ''}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche ? */}
      <section id="comment-ca-marche" className="how-it-works">
        <div className="container">
          <div className="how-it-works-header">
            <h2 className="section-title">Comment ça marche ?</h2>
            <p className="how-it-works-subtitle">
              De l&apos;échange à la mise en place, nous vous accompagnons en <strong>4 étapes</strong>.
            </p>
          </div>
          <div className="how-it-works-timeline">
            <div className="how-it-works-step">
              <div className="how-it-works-step-marker">
                <span className="how-it-works-step-dot" aria-hidden="true" />
              </div>
              <div className="how-it-works-step-content">
                <h3 className="how-it-works-step-title">1. Échange & diagnostic</h3>
                <p className="how-it-works-step-text">Nous échangeons sur vos besoins (caisse, borne, site, graphisme) et analysons votre activité pour proposer la solution adaptée.</p>
              </div>
            </div>
            <div className="how-it-works-step">
              <div className="how-it-works-step-marker">
                <span className="how-it-works-step-dot" aria-hidden="true" />
              </div>
              <div className="how-it-works-step-content">
                <h3 className="how-it-works-step-title">2. Devis sur mesure</h3>
                <p className="how-it-works-step-text">Vous recevez une proposition personnalisée et gratuite, sans engagement. Nous ajustons ensemble selon votre budget.</p>
              </div>
            </div>
            <div className="how-it-works-step">
              <div className="how-it-works-step-marker">
                <span className="how-it-works-step-dot" aria-hidden="true" />
              </div>
              <div className="how-it-works-step-content">
                <h3 className="how-it-works-step-title">3. Installation & formation</h3>
                <p className="how-it-works-step-text">Mise en place du matériel et du logiciel, puis formation de votre équipe pour une prise en main rapide.</p>
              </div>
            </div>
            <div className="how-it-works-step">
              <div className="how-it-works-step-marker">
                <span className="how-it-works-step-dot" aria-hidden="true" />
              </div>
              <div className="how-it-works-step-content">
                <h3 className="how-it-works-step-title">4. Mise en route & SAV</h3>
                <p className="how-it-works-step-text">Votre solution est opérationnelle. Nous restons à vos côtés pour le SAV, les mises à jour et les évolutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="pricing">
        <div className="container">
          <div className="pricing-header">
            <div className="pricing-badge">Nos Offres</div>
            <h2 className="section-title">Des offres adaptées à votre projet</h2>
            <p className="pricing-subtitle">
              Des <strong>offres sur mesure</strong> selon vos besoins. 
              Tous nos devis sont <strong>gratuits</strong> et personnalisés.
              Un <strong>dossier de financement</strong> (Oney) est possible pour payer en plusieurs fois.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
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
                  <li>Application mobile</li>
                  <li>Hébergement inclus</li>
                  <li>Maintenance & support</li>
                </ul>
                <div className="pricing-footer">
                  <button className="btn btn-primary" onClick={scrollToContact}>Demander un devis</button>
                </div>
              </div>
            </div>
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge-featured">Populaire</div>
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
                  <li>Synchronisation caisse/site web</li>
                  <li>Support technique inclus</li>
                  <li>Maintenance disponible</li>
                </ul>
                <div className="pricing-footer">
                  <button className="btn btn-primary" onClick={scrollToContact}>Demander un devis</button>
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Graphisme & Réseaux sociaux</h3>
                <div className="pricing-icon">
                  <img src="/assets/icons/campaign_marketing.png" alt="Graphisme & réseaux sociaux" />
                </div>
              </div>
              <div className="pricing-content">
                <p className="pricing-description">
                  Services de <strong>design graphique</strong>, <strong>identité visuelle</strong> et <strong>gestion de vos réseaux sociaux</strong>.
                </p>
                <ul className="pricing-features">
                  <li>Logo & charte graphique</li>
                  <li>Supports marketing & visuels pour réseaux sociaux</li>
                  <li>Stratégie & calendrier éditorial</li>
                  <li>Publication & animation des comptes</li>
                </ul>
                <div className="pricing-footer">
                  <button className="btn btn-primary" onClick={scrollToContact}>Demander un devis</button>
                </div>
              </div>
            </div>
          </div>
          <div className="services-grid-section">
            <div className="services-grid-header">
              <h3>Nos Services Complets</h3>
              <p>Les modules disponibles avec notre solution de caisse enregistreuse</p>
            </div>
            <div className="services-grid-cards pos-modules-grid">
              {posModules.slice(0, MAIN_MODULES_COUNT).map((name, i) => {
                const Icon = posModuleIcons[i]
                return (
                  <div key={i} className="pos-module-card">
                    <div className="pos-module-icon-wrap">
                      {Icon ? <Icon width={32} height={32} /> : null}
                    </div>
                    <span className="pos-module-title-btn">{name}</span>
                  </div>
                )
              })}
            </div>
            <div className="pos-more-options-accordion">
              <button
                type="button"
                className={`pos-more-options-toggle ${moreOptionsOpen ? 'is-open' : ''}`}
                onClick={() => setMoreOptionsOpen((o) => !o)}
                aria-expanded={moreOptionsOpen}
              >
                <span className="pos-more-options-toggle-text">Plus d'options</span>
                <svg className="pos-more-options-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {moreOptionsOpen && (
                <div className="services-grid-cards pos-modules-grid pos-more-options-grid">
                  {posModules.slice(MAIN_MODULES_COUNT).map((name, i) => {
                    const idx = MAIN_MODULES_COUNT + i
                    const Icon = posModuleIcons[idx]
                    return (
                      <div key={idx} className="pos-module-card">
                        <div className="pos-module-icon-wrap">
                          {Icon ? <Icon width={32} height={32} /> : null}
                        </div>
                        <span className="pos-module-title-btn">{name}</span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            <div className="services-grid-cta">
              <p>Besoin d'une <strong>solution sur mesure</strong> ?</p>
              <button className="btn btn-secondary" onClick={scrollToContact}>Contactez-nous pour un devis gratuit</button>
              <p className="services-grid-cta-note">Un dossier de financement (Oney) est possible pour étaler vos paiements.</p>
            </div>
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
                Située au pied des Alpes et forte d&rsquo;une solide expérience genevoise, nous concevons des <strong>sites internet sur mesure</strong>, des <strong>identités visuelles</strong> et <strong>supports graphiques</strong>, 
                ainsi que des <strong>solutions informatiques complètes</strong> : <strong>caisses enregistreuses</strong>, <strong>bornes interactives</strong>, etc.
              </p>
              <p>
                En complément de nos services techniques, nous renforçons votre <strong>présence digitale</strong> grâce à la gestion de vos <strong>plateformes sociales</strong> (LinkedIn, Instagram) 
                et au <strong>covering automobile</strong>, afin de valoriser et d&rsquo;unifier votre <strong>image de marque</strong>, <strong>en ligne</strong> comme <strong>sur le terrain</strong>.
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

      {/* Bande défilante Aix-les-Bains > Genève */}
      <section className="scrolling-band">
        <div className="scrolling-band-track">
          <div className="scrolling-band-content">
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
          </div>
          <div className="scrolling-band-content">
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
            <span>Aix-les-Bains <img src="/assets/icons/droit.png" alt="→" className="scrolling-arrow" /> Genève</span>
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
                  Nous développons également des <strong>sites e-commerce</strong> qui peuvent être 
                  <strong> synchronisés avec le stock magasin</strong> et <strong>reliés à la caisse enregistreuse</strong>. 
                  Cette solution vous permet de gérer votre inventaire en temps réel, que vos ventes soient effectuées 
                  en ligne ou en magasin, pour une <strong>gestion unifiée</strong> de votre activité commerciale.
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
                  Nous intervenons principalement dans la <strong>région du Léman</strong> (Genève, Haute-Savoie, Savoie) 
                  pour les installations sur site. Pour les services de <strong>développement web</strong> et 
                  <strong> graphisme</strong>, nous travaillons avec des clients dans toute la Suisse et France.
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
                  <strong> caisses enregistreuses</strong> et logiciels pour garantir une prise en main rapide.
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
                  Un <strong>dossier de financement</strong> (Oney) est possible pour payer en plusieurs fois.
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
                <a href="https://www.linkedin.com/in/michael-barreca/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
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
            <div className="footer-section">
              <h4>Partenaires</h4>
              <ul>
                <li><a href="https://kwisatz-logiciel-caisse.fr/" target="_blank" rel="noopener noreferrer">KWISATZ</a></li>
                <li><a href="https://www.sunmi.com/en/" target="_blank" rel="noopener noreferrer">SUNMI</a></li>
                <li><a href="https://www.planet-monetic.fr/" target="_blank" rel="noopener noreferrer">Planet Monetic</a></li>
                <li><a href="https://my.contabo.com/" target="_blank" rel="noopener noreferrer">Contabo</a></li>
                <li><a href="https://blog.bluestarinc.com/en-gb" target="_blank" rel="noopener noreferrer">BlueStar Vertical 360</a></li>
                <li><a href="https://www.imin.com/" target="_blank" rel="noopener noreferrer">iMin</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Les Caisses du Léman. <span className="footer-line-break">Tous droits réservés.</span></p>
          </div>
        </div>
      </footer>
      </main>

      {/* WhatsApp CTA Button */}
      <a 
        href="https://wa.me/33607535627" 
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

