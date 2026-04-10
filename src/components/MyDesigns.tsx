import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaPalette, 
  FaSearch, 
  FaExpand, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaDownload,
  FaEye,
  FaLayerGroup
} from 'react-icons/fa';
import TiltCard3D from './TiltCard3D';
import './styles/MyDesigns.css';

gsap.registerPlugin(ScrollTrigger);

// Types de designs
interface Design {
  id: number;
  title: string;
  category: string;
  subcategory: string;
  image: string;
  description: string;
  year: string;
  client: string;
  tools: string[];
  color: string;
}

// Données exemples (à remplacer par vos vraies données)
const designsData: Design[] = [
  // AFFICHES - Événements
  {
    id: 1,
    title: 'Festival Tech Guinea 2024',
    category: 'Affiches',
    subcategory: 'Événements',
    image: '/images/designs/affiche-festival-tech.jpg',
    description: 'Affiche officielle pour le plus grand festival tech de Guinée',
    year: '2024',
    client: 'Tech Guinea Org',
    tools: ['Figma', 'Photoshop'],
    color: '#00d4ff',
  },
  {
    id: 2,
    title: 'Conférence Développeurs',
    category: 'Affiches',
    subcategory: 'Événements',
    image: '/images/designs/affiche-conference.jpg',
    description: 'Design moderne pour conférence développeurs web',
    year: '2024',
    client: 'DevCon Africa',
    tools: ['Figma', 'Illustrator'],
    color: '#ff0080',
  },
  {
    id: 3,
    title: 'Concert Noël Ensemble',
    category: 'Affiches',
    subcategory: 'Événements',
    image: '/images/designs/affiche-concert.jpg',
    description: 'Affiche festive pour concert de Noël communautaire',
    year: '2023',
    client: 'Communauté St-Marc',
    tools: ['Photoshop', 'Illustrator'],
    color: '#f59e0b',
  },
  
  // AFFICHES - Corporate
  {
    id: 4,
    title: 'Lancement NOUS Platform',
    category: 'Affiches',
    subcategory: 'Corporate',
    image: '/images/designs/affiche-nous.jpg',
    description: 'Campagne de lancement pour la fintech NOUS',
    year: '2024',
    client: 'NOUS Fintech',
    tools: ['Figma'],
    color: '#14b8a6',
  },
  {
    id: 5,
    title: 'Recrutement Saisonnier',
    category: 'Affiches',
    subcategory: 'Corporate',
    image: '/images/designs/affiche-recrutement.jpg',
    description: 'Affiche recrutement moderne et dynamique',
    year: '2023',
    client: 'Startup Conakry',
    tools: ['Illustrator', 'Figma'],
    color: '#8b5cf6',
  },
  
  // FLYERS - Promotions
  {
    id: 6,
    title: 'Soldes Été 2024',
    category: 'Flyers',
    subcategory: 'Promotions',
    image: '/images/designs/flyer-soldes.jpg',
    description: 'Flyer promotionnel pour soldes estivales',
    year: '2024',
    client: 'Mode Express',
    tools: ['Photoshop', 'Illustrator'],
    color: '#ec4899',
  },
  {
    id: 7,
    title: 'Black Friday Tech',
    category: 'Flyers',
    subcategory: 'Promotions',
    image: '/images/designs/flyer-blackfriday.jpg',
    description: 'Flyer impactant pour événement Black Friday',
    year: '2024',
    client: 'Tech Store GN',
    tools: ['Figma'],
    color: '#dc2626',
  },
  
  // FLYERS - Services
  {
    id: 8,
    title: 'Services Plomberie Express',
    category: 'Flyers',
    subcategory: 'Services',
    image: '/images/designs/flyer-plomberie.jpg',
    description: 'Flyer professionnel pour services de plomberie',
    year: '2023',
    client: 'Plomberie Express',
    tools: ['Illustrator'],
    color: '#3b82f6',
  },
  {
    id: 9,
    title: 'Coaching Digital',
    category: 'Flyers',
    subcategory: 'Services',
    image: '/images/designs/flyer-coaching.jpg',
    description: 'Flyer élégant pour service de coaching digital',
    year: '2024',
    client: 'Digital Coach GN',
    tools: ['Figma', 'Photoshop'],
    color: '#8b5cf6',
  },
  
  // LOGOS & BRANDING
  {
    id: 10,
    title: 'Identité Holy Ecosystem',
    category: 'Branding',
    subcategory: 'Logo',
    image: '/images/designs/branding-holy.jpg',
    description: 'Identité visuelle complète pour écosystème e-commerce',
    year: '2024',
    client: 'HOLY Ecosystem',
    tools: ['Illustrator', 'Figma'],
    color: '#ff0080',
  },
  {
    id: 11,
    title: 'Brand Guidelines NOUS',
    category: 'Branding',
    subcategory: 'Guidelines',
    image: '/images/designs/branding-nous.jpg',
    description: 'Charte graphique complète avec guidelines',
    year: '2024',
    client: 'NOUS Platform',
    tools: ['Figma'],
    color: '#00d4ff',
  },
];

// Catégories principales
const mainCategories = ['Tous', 'Affiches', 'Flyers', 'Branding'];

// Sous-catégories
const subCategories: Record<string, string[]> = {
  'Tous': [],
  'Affiches': ['Tous', 'Événements', 'Corporate'],
  'Flyers': ['Tous', 'Promotions', 'Services'],
  'Branding': ['Tous', 'Logo', 'Guidelines'],
};

const MyDesigns = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [activeSubcategory, setActiveSubcategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [hoveredDesign, setHoveredDesign] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Filtrer les designs
  const filteredDesigns = designsData.filter((design) => {
    const matchesCategory = activeCategory === 'Tous' || design.category === activeCategory;
    const matchesSubcategory = activeSubcategory === 'Tous' || design.subcategory === activeSubcategory;
    const matchesSearch = design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         design.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  // Reset subcategory when main category changes
  useEffect(() => {
    setActiveSubcategory('Tous');
  }, [activeCategory]);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.designs-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.design-filters',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.design-filters',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animation des cartes quand les filtres changent
  useEffect(() => {
    if (!galleryRef.current) return;

    const cards = galleryRef.current.querySelectorAll('.design-card-wrapper');
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      }
    );
  }, [activeCategory, activeSubcategory, searchQuery]);

  const openLightbox = (design: Design) => {
    setSelectedDesign(design);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedDesign(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!selectedDesign) return;
    
    const currentIndex = filteredDesigns.findIndex(d => d.id === selectedDesign.id);
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + filteredDesigns.length) % filteredDesigns.length;
    } else {
      newIndex = (currentIndex + 1) % filteredDesigns.length;
    }
    
    setSelectedDesign(filteredDesigns[newIndex]);
  };

  return (
    <section ref={sectionRef} className="my-designs-section" id="designs">
      <div className="designs-container">
        {/* Header */}
        <div className="designs-header">
          <div className="header-icon">
            <FaPalette />
          </div>
          <span className="designs-subtitle">Portfolio Créatif</span>
          <h2 className="designs-title">
            Mes <span className="gradient-text">Designs</span>
          </h2>
          <p className="designs-description">
            Une collection de mes créations graphiques : affiches, flyers et identités visuelles
          </p>
        </div>

        {/* Search Bar */}
        <div className="design-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un design..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="design-filters">
          <div className="main-categories">
            {mainCategories.map((category) => (
              <button
                key={category}
                className={`filter-btn main ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sub-categories (only show if not 'Tous') */}
          {activeCategory !== 'Tous' && subCategories[activeCategory] && (
            <div className="sub-categories">
              {subCategories[activeCategory].map((sub) => (
                <button
                  key={sub}
                  className={`filter-btn sub ${activeSubcategory === sub ? 'active' : ''}`}
                  onClick={() => setActiveSubcategory(sub)}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="designs-stats">
          <div className="stat">
            <span className="stat-value">{filteredDesigns.length}</span>
            <span className="stat-label">Designs</span>
          </div>
          <div className="stat">
            <span className="stat-value">{mainCategories.length - 1}</span>
            <span className="stat-label">Catégories</span>
          </div>
          <div className="stat">
            <span className="stat-value">50+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div ref={galleryRef} className="designs-gallery">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="design-card-wrapper"
              onMouseEnter={() => setHoveredDesign(design.id)}
              onMouseLeave={() => setHoveredDesign(null)}
            >
              <TiltCard3D
                tiltAmount={hoveredDesign === design.id ? 10 : 5}
                perspective={1000}
                scale={hoveredDesign === design.id ? 1.03 : 1}
                glareEnable={true}
                glareMaxOpacity={0.15}
                className="design-tilt-card"
              >
                <div 
                  className="design-card"
                  style={{ '--design-color': design.color } as React.CSSProperties}
                  onClick={() => openLightbox(design)}
                >
                  {/* Image */}
                  <div className="design-image-container">
                    <div 
                      className="design-image-placeholder"
                      style={{ backgroundColor: `${design.color}15` }}
                    >
                      <FaLayerGroup style={{ color: design.color }} />
                    </div>
                    
                    {/* Overlay */}
                    <div className={`design-overlay ${hoveredDesign === design.id ? 'active' : ''}`}>
                      <button className="view-btn">
                        <FaExpand />
                        <span>Voir</span>
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="design-category-badge" style={{ backgroundColor: design.color }}>
                      {design.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="design-content">
                    <h3 className="design-title">{design.title}</h3>
                    <p className="design-subtitle">{design.subcategory}</p>
                    <p className="design-description">{design.description}</p>
                    
                    {/* Meta */}
                    <div className="design-meta">
                      <span className="meta-item">
                        <strong>Client:</strong> {design.client}
                      </span>
                      <span className="meta-item">
                        <strong>Année:</strong> {design.year}
                      </span>
                    </div>

                    {/* Tools */}
                    <div className="design-tools">
                      {design.tools.map((tool, i) => (
                        <span key={i} className="tool-tag">{tool}</span>
                      ))}
                    </div>
                  </div>

                  {/* Glow */}
                  <div 
                    className="design-glow"
                    style={{ 
                      background: `radial-gradient(circle at 50% 0%, ${design.color}20, transparent 60%)`,
                      opacity: hoveredDesign === design.id ? 1 : 0
                    }}
                  />
                </div>
              </TiltCard3D>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDesigns.length === 0 && (
          <div className="empty-state">
            <FaSearch className="empty-icon" />
            <h3>Aucun design trouvé</h3>
            <p>Essayez avec d'autres critères de recherche</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedDesign && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            
            <button 
              className="lightbox-nav prev"
              onClick={() => navigateLightbox('prev')}
            >
              <FaChevronLeft />
            </button>
            <button 
              className="lightbox-nav next"
              onClick={() => navigateLightbox('next')}
            >
              <FaChevronRight />
            </button>

            <div className="lightbox-image-container">
              <div 
                className="lightbox-image-placeholder"
                style={{ backgroundColor: `${selectedDesign.color}20` }}
              >
                <span style={{ color: selectedDesign.color }}>
                  {selectedDesign.title}
                </span>
              </div>
            </div>

            <div className="lightbox-info">
              <h2>{selectedDesign.title}</h2>
              <p className="lightbox-category">{selectedDesign.category} • {selectedDesign.subcategory}</p>
              <p className="lightbox-description">{selectedDesign.description}</p>
              
              <div className="lightbox-details">
                <div className="detail-item">
                  <strong>Client:</strong> {selectedDesign.client}
                </div>
                <div className="detail-item">
                  <strong>Année:</strong> {selectedDesign.year}
                </div>
                <div className="detail-item">
                  <strong>Outils:</strong> {selectedDesign.tools.join(', ')}
                </div>
              </div>

              <div className="lightbox-actions">
                <button className="action-btn primary" style={{ backgroundColor: selectedDesign.color }}>
                  <FaEye />
                  <span>Voir le projet</span>
                </button>
                <button className="action-btn secondary">
                  <FaDownload />
                  <span>Télécharger</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyDesigns;
