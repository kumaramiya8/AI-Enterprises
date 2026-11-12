export const sectors = [
  {
    id: "commercial-buildings",
    title: "Commercial Buildings & High-Rises",
    badge: "Large Scale",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    summary: "Integrated central cooling and ventilation engineered for multi-tenant towers, low acoustic footprints, and high seasonal energy efficiency.",
    keyChallenges: [
      "Diverse multi-tenant cooling demands across different floors",
      "Minimizing plant room footprint and structural roof loads",
      "Stringent NBC fire and stairwell smoke pressurization compliance"
    ],
    engineeredSolutions: [
      "Modular VRV/VRF or Central Chilled Water with individual tenant energy billing meters",
      "Demand Controlled Ventilation (DCV) with continuous CO2 monitoring",
      "Automated building management system (BMS) with remote fault diagnosis"
    ],
    typicalCapacity: "100 TR to 2,500+ TR"
  },
  {
    id: "banquet-halls",
    title: "Banquet Halls & Convention Centers",
    badge: "High Density",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    summary: "Heavy-duty rapid pull-down cooling and silent air delivery designed specifically for high-capacity social gatherings and fluctuating crowds.",
    keyChallenges: [
      "Sudden surge in heat load when guests arrive for events",
      "High food buffet aromas and smoke requiring continuous air scrubbing",
      "Low sound decibel requirements for wedding ceremonies and speeches"
    ],
    engineeredSolutions: [
      "Fast-response multi-stage packaged units or high-CFM VRF systems",
      "Treated Fresh Air (TFA) units with heavy charcoal filtration and wet exhaust scrubbers",
      "Internally lined acoustic sound attenuators and double-deflection silent grilles"
    ],
    typicalCapacity: "50 TR to 400+ TR"
  },
  {
    id: "hotels-hospitality",
    title: "Hotels & Luxury Hospitality",
    badge: "Ultra Quiet",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    summary: "Whisper-quiet guest room climate control, aesthetic architectural grilles, kitchen ecology exhaust, and laundry ventilation.",
    keyChallenges: [
      "Guest comfort with independent in-room thermostat control and zero noise",
      "Heavy commercial kitchen ventilation and heat dissipation in central kitchens",
      "24/7 continuous operation without single points of failure"
    ],
    engineeredSolutions: [
      "Concealed ultra-low NC (Noise Criterion < 25) Fan Coil Units and VRF indoor units",
      "Heat recovery chillers generating free domestic hot water from cooling exhaust",
      "Dedicated kitchen ventilation hoods with UV grease eliminators"
    ],
    typicalCapacity: "80 TR to 800+ TR"
  },
  {
    id: "corporate-offices",
    title: "Corporate Offices & IT Parks",
    badge: "Energy Saving",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    summary: "Smart, zoned climate engineering focused on employee productivity, pristine indoor air quality (IAQ), and minimized monthly power bills.",
    keyChallenges: [
      "High internal heat load from computers, servers, and meeting spaces",
      "Stuffy meeting rooms causing fatigue and low productivity",
      "Flexible office partition changes requiring adaptable ducting"
    ],
    engineeredSolutions: [
      "Variable Air Volume (VAV) systems and inverter VRF with intelligent zoning",
      "High MERV-13 air filtration with real-time PM2.5 and TVOC displays",
      "Precision Server Room Air Conditioning (PAC) with N+1 redundancy"
    ],
    typicalCapacity: "30 TR to 1,200+ TR"
  },
  {
    id: "hospitals-healthcare",
    title: "Hospitals & Healthcare Facilities",
    badge: "Critical Environment",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    summary: "Medical-grade air conditioning, sterile Operation Theatres, negative pressure isolation rooms, and certified HEPA air purification.",
    keyChallenges: [
      "Preventing airborne cross-contamination and hospital-acquired infections (HAI)",
      "Strict temperature (21°C ± 2°C) and relative humidity (40-60%) tolerances in OTs",
      "100% fresh air air-changes per hour (ACH) mandated by NABH guidelines"
    ],
    engineeredSolutions: [
      "Dedicated Cleanroom AHUs with H14 HEPA filters (99.997% @ 0.3 micron)",
      "Positive pressure differential in surgical suites and negative pressure in isolation units",
      "Steam / ultrasonic humidifiers and chilled-water reheat coils for humidity control"
    ],
    typicalCapacity: "150 TR to 1,500+ TR"
  },
  {
    id: "retail-malls",
    title: "Retail Spaces & Shopping Malls",
    badge: "High Footfall",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd302?auto=format&fit=crop&w=800&q=80",
    summary: "Comfort cooling designed for steady customer retention, invisible air curtains at shop entrances, and balanced atrium air circulation.",
    keyChallenges: [
      "Massive thermal infiltration through frequently opened entrance doors",
      "Varying ceiling heights, glass facades, and architectural atrium thermals",
      "Aesthetic integration with store lighting and interior architecture"
    ],
    engineeredSolutions: [
      "Industrial high-velocity air curtains over external doors to seal treated air inside",
      "Jet nozzle diffusers for long-throw atrium air distribution",
      "Packaged rooftop and central chiller systems with variable speed drives"
    ],
    typicalCapacity: "50 TR to 3,000+ TR"
  },
  {
    id: "industrial-facilities",
    title: "Industrial Facilities & Warehouses",
    badge: "Heavy Duty",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    summary: "Heavy industrial ventilation, evaporative cooling, fume extraction, and machine process temperature stabilization.",
    keyChallenges: [
      "Intense process heat, welding fumes, chemical vapors, or dust generation",
      "Expansive floor areas with high roofs where conventional AC is cost-prohibitive",
      "Worker heat stress and stringent OSHA / Factory Act ventilation standards"
    ],
    engineeredSolutions: [
      "Indirect-Direct Evaporative Cooling (IDEC) for massive energy savings",
      "High Volume Low Speed (HVLS) ceiling fans combined with roof power exhausts",
      "Explosion-proof spark-resistant fans and baghouse dust collector integration"
    ],
    typicalCapacity: "10,000 to 100,000+ CFM"
  }
];
