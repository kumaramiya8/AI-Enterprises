export const services = [
  {
    id: "hvac-design",
    icon: "compass",
    badge: "Engineering Phase",
    title: "HVAC Engineering Design & Heat Load",
    shortDesc: "ASHRAE & ISHRAE compliant computerized heat load calculations, 3D BIM duct modeling, and optimal equipment sizing for minimum energy consumption.",
    fullDesc: "Our engineering wing performs meticulous heat load calculations taking into account building envelope thermal transmittance (U-values), solar radiation, fenestration, lighting load, and peak occupancy. We utilize industry-standard simulation software to engineer duct routes, static pressure calculations, and equipment selection for maximum COP/ISEER efficiency.",
    deliverables: [
      "Computerized Heat Load Analysis (ASHRAE/ISHRAE standards)",
      "3D BIM HVAC & Duct Layout Coordination",
      "Airflow (CFM) Distribution & Static Pressure Drop Calculations",
      "Bill of Quantities (BOQ) & Tender Specifications"
    ],
    idealFor: "New constructions, retrofits, and green building certified projects (LEED/IGBC)."
  },
  {
    id: "vrv-vrf",
    icon: "cpu",
    badge: "Core Technology",
    title: "VRV / VRF Central Air Conditioning",
    shortDesc: "High-efficiency Variable Refrigerant Flow systems with modular inverter outdoor units and customized indoor units for individualized zone comfort.",
    fullDesc: "We design and execute complete VRV/VRF projects utilizing top-tier OEM equipment (Daikin, Mitsubishi, Blue Star, Voltas, Carrier). Offering seamless inverter modulation, wide piping flexibility (up to 1,000m total length), and BMS integration, VRV/VRF systems provide unparalleled multi-zone energy savings and silent operation.",
    deliverables: [
      "Modular Inverter Condenser Installations",
      "Brazed High-Pressure Copper Refrigerant Piping with Nitrogen purging",
      "Cassette, Ducted, and Concealed Ceiling Indoor Units",
      "Centralized Touch Controllers & Smart BMS Interface"
    ],
    idealFor: "Corporate offices, luxury hotels, premium retail, villas, and hospitals."
  },
  {
    id: "chilled-water",
    icon: "snowflake",
    badge: "Heavy Commercial",
    title: "Chilled Water Plants & Central Cooling",
    shortDesc: "Turnkey chilled water cooling solutions featuring water/air-cooled chillers, cooling towers, primary-secondary pumping loops, and AHU/FCU networks.",
    fullDesc: "For extensive multi-story developments, convention centers, and industrial facilities, our chilled water systems deliver robust, high-tonnage cooling reliability. We handle complete mechanical plant rooms, variable speed centrifugal/screw chillers, vibration isolation, hydraulic balancing, and thermal energy storage.",
    deliverables: [
      "Water-Cooled & Air-Cooled Screw/Centrifugal Chillers",
      "Cooling Tower Erection & Condenser Water Piping",
      "Primary & Secondary VFD Pumping Stations",
      "Double-Skin Air Handling Units (AHU) & Fan Coil Units (FCU)"
    ],
    idealFor: "Commercial towers, large shopping malls, manufacturing plants, and universities."
  },
  {
    id: "ventilation-exhaust",
    icon: "wind",
    badge: "Safety & Air Quality",
    title: "Ventilation & Smoke Exhaust Systems",
    shortDesc: "Engineered basement ventilation with CO sensors, impulse jet fans, kitchen scrubber exhaust, and fire safety stairwell pressurization.",
    fullDesc: "Proper ventilation is vital for life safety, fire norms, and air freshness. AI Enterprises delivers heavy-duty ventilation systems adhering to National Building Code (NBC) fire safety regulations, including automatic smoke spill fans, scrubber units for commercial kitchens, and energy recovery ventilation (ERV/HRV).",
    deliverables: [
      "Basement Ventilation with Jet Fans & Carbon Monoxide Detection",
      "Kitchen Exhaust Ducts with Wet Scrubbers & Ecology Units",
      "Staircase & Lift Lobby Smoke Pressurization Systems",
      "Treated Fresh Air (TFA) Units with Heat Recovery Wheels"
    ],
    idealFor: "Basements, car parks, commercial kitchens, multi-story towers, and factories."
  },
  {
    id: "cleanroom-hospital",
    icon: "shield-check",
    badge: "Specialized Healthcare",
    title: "Cleanroom & Hospital Operation Theatre HVAC",
    shortDesc: "Critical environmental control systems with certified HEPA filtration, laminar airflow ceilings, and micro-precision differential pressure zoning.",
    fullDesc: "Healthcare and pharmaceutical spaces demand zero-compromise environmental purity. We engineer Class 100 to Class 100,000 cleanrooms, surgical suites (OTs), ICUs, and bio-containment rooms featuring 99.997% HEPA terminal filters, precise RH humidity control, anti-microbial coatings, and validation documentation.",
    deliverables: [
      "Modular Laminar Flow Air Distribution Ceilings",
      "H14 HEPA & Carbon Chemical Filtration Stages",
      "Positive/Negative Differential Pressure Regulators",
      "Precision Close-Control Dehumidification Systems"
    ],
    idealFor: "Hospitals, IVF clinics, pharmaceutical production, and cleanroom labs."
  },
  {
    id: "ducting-fabrication",
    icon: "layers",
    badge: "Precision Craft",
    title: "GI & Pre-Insulated Ducting Fabrication",
    shortDesc: "Factory-fabricated Galvanized Iron (GI) and Pre-Insulated (PIR/Phenolic) ductwork engineered to SMACNA standards with negligible air leakage.",
    fullDesc: "Air distribution efficiency depends on aerodynamic duct geometry and airtight sealing. We fabricate and install heavy-gauge galvanized iron ductwork (Class 8 & 9) and lightweight thermal pre-insulated ducting, equipped with motorized fire smoke dampers, acoustic attenuation silencers, and linear slot diffusers.",
    deliverables: [
      "SMACNA Standard Rectangular & Spiral GI Ductwork",
      "Pre-Insulated Polyisocyanurate (PIR) High-Thermal Ducts",
      "Motorized Fire & Smoke Dampers with UL Certification",
      "Linear Slot Diffusers, Grilles, and Volume Control Dampers"
    ],
    idealFor: "All commercial, institutional, and industrial ventilation installations."
  },
  {
    id: "tab-commissioning",
    icon: "check-circle-2",
    badge: "Quality Assurance",
    title: "Testing, Adjusting & Balancing (TAB)",
    shortDesc: "Rigorous pre-commissioning testing, calibrated CFM air balancing, hydronic water balancing, and acoustic vibration sign-off reports.",
    fullDesc: "Before handover, our certified test engineers utilize calibrated instruments (flow hoods, digital manometers, thermal imaging, and tachometers) to verify every zone matches design parameters. We eliminate hot spots, optimize pump heads, balance CFM across all diffusers, and ensure energy compliance.",
    deliverables: [
      "Air Balancing across Grilles, Diffusers, and Branches",
      "Hydronic Water Flow Balancing across Chillers and AHUs",
      "Motor Current, Voltage, and Vibration Level Audits",
      "Comprehensive Handover As-Built Dossier & Calibration Certificates"
    ],
    idealFor: "Final project commissioning, pre-occupancy audits, and troubleshooting existing systems."
  },
  {
    id: "amc-service",
    icon: "wrench",
    badge: "24/7 Support",
    title: "Annual Maintenance Contracts (AMC) & Emergency",
    shortDesc: "Comprehensive & Non-Comprehensive maintenance programs, routine coil descaling, refrigerant audit, and round-the-clock emergency mobile response.",
    fullDesc: "Protect your capital investment with AI Enterprises' proactive AMC service. Our dedicated technicians perform scheduled preventive checks, coil chemical cleans, electrical inspection, and filter replacements. Plus, our 24/7 emergency hotline ensures rapid on-site troubleshooting to minimize downtime.",
    deliverables: [
      "Comprehensive (with spares) & Non-Comprehensive AMC Tiers",
      "Quarterly Preventive Servicing & High-Pressure Coil Washing",
      "Refrigerant Gas Leakage Audits & Compressor Health Reports",
      "24/7 Priority Emergency Breakdown Response Team"
    ],
    idealFor: "Banquet halls, hotels, corporate towers, hospitals, and retail chains."
  }
];
