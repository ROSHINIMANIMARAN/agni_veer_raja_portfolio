export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  location: string;
  concept: string;
  description: string;
  coverImage: string;
  images: string[];
  brief: string;
  siteAnalysis: string;
  conceptDevelopment: string;
  sustainability: string;
  outcome: string;
  materials: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'modern-residential-villa',
    number: '01',
    title: 'Modern Residential Villa',
    category: 'Residential Architecture',
    year: '2025',
    location: 'Bangalore, India',
    concept: 'Where light sculpts space and silence speaks volumes.',
    description: 'A private residence that blurs the boundary between built form and landscape.',
    coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    ],
    brief: 'Design a 4-bedroom private villa for a family of four that maximizes natural light, provides indoor-outdoor connectivity, and responds sensitively to the tropical climate.',
    siteAnalysis: 'The 800 sqm site sits at the edge of a residential neighborhood with views toward a preserved green belt. Analysis revealed prevailing south-west winds, strong afternoon sun from the west, and opportunity to frame views of mature trees to the north.',
    conceptDevelopment: 'The concept emerged from studying the play of light through latticed screens in traditional Indian architecture. A series of perforated brick screens filter harsh sunlight while creating dramatic shadow patterns that shift throughout the day.',
    sustainability: 'Passive cooling through cross-ventilation, roof gardens for thermal insulation, rainwater harvesting, and locally sourced stone and brick reduce the environmental footprint significantly.',
    outcome: 'This project taught me to see climate not as a constraint but as a design tool. The interplay of light, shadow, breeze, and material became the primary architectural language.',
    materials: ['Exposed brick', 'Kota stone', 'Weathered timber', 'Structural concrete', 'Bronze hardware'],
    tags: ['Residential', 'Sustainable', 'Tropical', 'Light & Shadow'],
  },
  {
    id: 'sustainable-community-centre',
    number: '02',
    title: 'Sustainable Community Centre',
    category: 'Public Architecture',
    year: '2024',
    location: 'Mysuru, India',
    concept: 'Architecture as community — a shared living room for the city.',
    description: 'A net-zero community centre that becomes the social and cultural heart of the neighbourhood.',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
      'https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?w=1200&q=80',
    ],
    brief: 'Create a multipurpose community centre serving 5,000 residents with flexible programming, green infrastructure, and accessible design for all ages and abilities.',
    siteAnalysis: 'Located on a former industrial brownfield, the site required remediation and offered an opportunity to reintroduce green space into a dense urban fabric.',
    conceptDevelopment: 'The building is organized around a central courtyard — an open-air room that belongs to everyone. Flexible hall spaces unfold from this core, activatable for markets, performances, workshops, and gatherings.',
    sustainability: 'Solar panels integrated into roof canopies, grey-water recycling, permeable paving, and native planting contribute to the net-zero energy target.',
    outcome: 'Working at a community scale taught me to design not just for the present population but for future adaptability and intergenerational use.',
    materials: ['Reclaimed brick', 'Bamboo screens', 'Recycled steel', 'Green roof substrate', 'Polished concrete'],
    tags: ['Public', 'Sustainable', 'Community', 'Net-Zero'],
  },
  {
    id: 'urban-mixed-use',
    number: '03',
    title: 'Urban Mixed-Use Development',
    category: 'Urban Design',
    year: '2024',
    location: 'Chennai, India',
    concept: 'Stitching the city back together — layer by layer.',
    description: 'A vertical urban village that integrates retail, workspace, and housing in one activated street edge.',
    coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
    ],
    brief: 'Design a 12-storey mixed-use tower for a dense urban site that activates the ground plane, provides affordable workspace, and creates 80 residential units.',
    siteAnalysis: 'A corner site at a major transit intersection with high pedestrian flow. Existing street life informed the need for a permeable, activated ground floor with retail and public amenities.',
    conceptDevelopment: 'Inspired by the traditional bazaar typology — narrow lanes, overlapping activities, constant human exchange — the building stacks public, semi-public, and private zones as it rises.',
    sustainability: 'Sky gardens at every third floor provide green relief and improve air quality. The building targets IGBC Gold certification.',
    outcome: 'Urban design at this scale demanded systems thinking — understanding how individual design decisions aggregate into neighbourhood-level impact.',
    materials: ['Glass curtain wall', 'Precast concrete panels', 'Terracotta brise-soleil', 'Living wall substrate'],
    tags: ['Urban', 'Mixed-Use', 'Transit-Oriented', 'High-Rise'],
  },
  {
    id: 'contemporary-interior',
    number: '04',
    title: 'Contemporary Interior Design',
    category: 'Interior Architecture',
    year: '2024',
    location: 'Pune, India',
    concept: 'Warmth through restraint — a home stripped to its essentials.',
    description: 'A minimal apartment renovation that finds richness in material honesty and careful proportion.',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80',
    ],
    brief: 'Redesign a 1,200 sqft apartment for a young couple, stripping away excess to create calm, functional spaces that breathe.',
    siteAnalysis: 'The existing apartment had been poorly subdivided, fragmenting natural light. Removing a non-structural wall opened a continuous living-dining-kitchen space flooded with east morning light.',
    conceptDevelopment: 'A palette of linen, plaster, oak, and aged brass creates a quiet warmth. Joinery was designed as architectural elements — long horizontal lines that extend the perceived volume of each room.',
    sustainability: 'Material reuse, low-VOC finishes, and energy-efficient lighting reduced both embodied carbon and operational impact.',
    outcome: 'Interior scale taught me the power of restraint — that removing, editing, and simplifying is often more powerful than adding.',
    materials: ['Venetian plaster', 'White oak', 'Aged brass', 'Linen upholstery', 'Terrazzo tile'],
    tags: ['Interior', 'Residential', 'Minimal', 'Renovation'],
  },
  {
    id: 'landscape-public-space',
    number: '05',
    title: 'Landscape & Public Space',
    category: 'Landscape Architecture',
    year: '2023',
    location: 'Coimbatore, India',
    concept: 'Reclaiming the margins — transforming forgotten urban edges into living corridors.',
    description: 'A riverside linear park that restores ecology while creating a beloved public promenade.',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80',
    ],
    brief: 'Design a 1.2km riverside park along a neglected urban waterfront, restoring riparian ecology while providing recreational infrastructure for the surrounding communities.',
    siteAnalysis: 'The river edge had been informally encroached and ecologically degraded. Hydrological analysis identified flood-prone zones that informed a raised promenade strategy.',
    conceptDevelopment: 'Three landscape layers — water, transition, and upland — organize the park into distinct ecological zones that also provide varied recreational character.',
    sustainability: 'Native riparian planting, bioswales, and permeable surfaces manage stormwater naturally. The project sequesters carbon and restores habitat for local bird species.',
    outcome: 'Landscape architecture taught me to design with ecological time — to think in decades, not just in construction years.',
    materials: ['Corten steel', 'Reclaimed timber decking', 'Native stone', 'Riparian planting', 'Permeable gravel'],
    tags: ['Landscape', 'Public Space', 'Ecology', 'Waterfront'],
  },
  {
    id: 'academic-thesis',
    number: '06',
    title: 'Academic Thesis Project',
    category: 'Thesis | Institutional',
    year: '2025',
    location: 'Ahmedabad, India',
    concept: 'Architecture as a mediator between memory, community, and the contemporary city.',
    description: 'A cultural memory centre that archives intangible heritage through spatial experience.',
    coverImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&q=80',
    ],
    brief: 'Design a cultural memory institution in the historic walled city of Ahmedabad that archives living traditions — crafts, music, oral histories — through immersive spatial experiences.',
    siteAnalysis: 'Located within the UNESCO World Heritage designated old city, the site navigated sensitive heritage regulations. A series of traditional pols (residential clusters) adjacent to the site informed the organizational logic.',
    conceptDevelopment: 'The building is conceived as a series of "memory chambers" — spaces calibrated for different modes of cultural experience: solitary reflection, communal gathering, active participation, and archival study.',
    sustainability: 'Passive climate control through traditional jaalis, deep courtyards, and thermal mass reduces mechanical cooling needs by 60% over a conventional building.',
    outcome: 'The thesis was an act of discovery — learning that architecture can be a form of cultural preservation, and that designing within heritage contexts demands deep humility and rigorous research.',
    materials: ['Sandstone', 'Traditional brick', 'Teak', 'Brass inlay', 'Handcrafted tile'],
    tags: ['Thesis', 'Institutional', 'Heritage', 'Cultural'],
  },
];
