export interface ProjectItem {
  id: string;
  title: string;
  status: "production" | "ongoing" | "research";
  category: "Edge AI & CV" | "Embedded & IoT" | "Full-Stack & Mobile";
  period: string;
  role: string;
  summary: string;
  tech: string[];
  githubUrl: string;
  iconBg: string;
  iconColor: string;
  iconSymbol: string;
}

export const PROFILE = {
  name: "Kaveesha Induwara",
  brand: "KAVEESHA",
  role: "Electronics & Information Technology Undergraduate",
  university: "University of Colombo — Faculty of Science (Dept. of Physics)",
  degree: "B.Sc. (Hons) in Electronics & Information Technology (3rd Year Undergraduate)",
  location: "Kalutara / Colombo, Sri Lanka",
  dob: "September 17, 2002",
  email: "induwarabarca1899@gmail.com",
  phone: "+94 76 784 9322",
  whatsappUrl: "https://wa.me/94767849322",
  github: "https://github.com/Kavi-Cs",
  linkedin: "https://www.linkedin.com/in/kaveesha-induwara-55974a359/",
  heroHeadline: ["Engineering", "Embedded Systems", "& Edge AI"],
  heroSubtext:
    "3rd Year Electronics & IT Honours Undergraduate at the University of Colombo. Specializing in Digital Signal Processing, TinyML, Embedded Firmware, and intelligent hardware-software systems.",
  visionQuote:
    "“My mission is to bridge the boundary between electronic engineering, digital signal processing, and modern Edge AI to build efficient, reliable systems for real-world engineering challenges.”",
};

export const EXPERTISE = [
  {
    title: "Embedded Systems & Firmware",
    description:
      "Bare-metal Embedded C/C++, ATmega328P, ESP32-S3, Seeed XIAO nRF52840, and industrial protocols (CAN bus, Modbus).",
    icon: "cpu",
  },
  {
    title: "Edge AI, TinyML & Vision",
    description:
      "Deploying YOLOv11, OpenCV, TensorFlow, and Edge Impulse models on Raspberry Pi 5 and resource-constrained MCUs.",
    icon: "eye",
  },
  {
    title: "DSP & Data Acquisition",
    description:
      "Hardware-timed ADC sampling, waveform reconstruction, digital filtering, FFT spectral analysis, and sensor interfacing.",
    icon: "activity",
  },
  {
    title: "Full-Stack & Mobile Software",
    description:
      "Production dashboards and cross-platform apps built with Next.js, React, Node.js, Spring Boot, Java, and Android.",
    icon: "code",
  },
];

export const EDUCATION = [
  {
    institution: "University of Colombo — Faculty of Science",
    degree: "B.Sc. (Hons) in Electronics & Information Technology (3rd Year Undergraduate)",
    period: "2023 — Present",
    details:
      "Department of Physics. Focusing on Digital Signal Processing (DSP), Embedded Systems, Data Acquisition, Robotics, Control Systems, and Edge AI.",
  },
  {
    institution: "Holy Cross College, Kalutara",
    degree: "G.C.E. Advanced Level (2022) — Physical Science Stream",
    period: "2008 — 2022",
    details:
      "Combined Mathematics, Physics, and Chemistry — Achieved BBC results with strong analytical foundations in engineering physics and mathematics.",
  },
];

export const EXPERIENCE = [
  {
    role: "Computer Operator & IT Operations Support",
    organization: "Boswell College International",
    period: "June 2023 — May 2024",
    bullets: [
      "Managed institutional computer systems, digital records, database administration, and daily IT infrastructure operations.",
      "Streamlined administrative documentation workflows and maintained hardware/software reliability across academic departments.",
    ],
  },
];

export const SKILLS = {
  "Embedded & Hardware": [
    "Embedded C / C++",
    "ATmega328P (AVR)",
    "Raspberry Pi 5",
    "ESP32-S3",
    "Seeed XIAO nRF52840",
    "CAN Bus & Modbus",
    "ADC & Sensor Interfacing",
  ],
  "Edge AI, DSP & Data": [
    "Python",
    "YOLOv11",
    "OpenCV",
    "TensorFlow / Keras",
    "PyTorch",
    "Edge Impulse / TinyML",
    "DSP & FFT Analysis",
    "NumPy / SciPy",
  ],
  "Web, Mobile & Databases": [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "JavaScript / TypeScript",
    "Node.js",
    "Java & Spring Boot",
    "Android (Mobile Dev)",
    "MySQL / MongoDB / PHP",
  ],
};

export const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: "smart-parking",
    title: "Smart University Parking & ANPR",
    status: "ongoing",
    category: "Edge AI & CV",
    period: "Oct 2026 — Jan 2027",
    role: "Lead ML & Raspberry Pi 5 Engineer (Group Project)",
    summary:
      "Automated university CCTV number plate recognition and IN/OUT vehicle logging pipeline running YOLOv11, OpenCV, and TinyML on Raspberry Pi 5.",
    tech: ["Raspberry Pi 5", "YOLOv11", "OpenCV", "TinyML", "Python"],
    githubUrl: "https://github.com/Kavi-Cs/Smart-Vehicle-Access-and-Parking-Management-System",
    iconBg: "#E6F7ED",
    iconColor: "#07291E",
    iconSymbol: "SP",
  },
  {
    id: "predictive-maintenance",
    title: "Industrial Motor Predictive Maintenance",
    status: "ongoing",
    category: "Embedded & IoT",
    period: "Oct 2026 — Jan 2027",
    role: "Individual R&D Engineer",
    summary:
      "Advanced Edge AI & IoT condition-monitoring architecture acquiring multi-bus telemetry (CAN bus, Modbus) and vibration FFT spectra for early fault detection.",
    tech: ["CAN Bus", "Modbus", "Edge AI", "DSP / FFT", "IoT"],
    githubUrl: "https://github.com/Kavi-Cs",
    iconBg: "#EEF2FF",
    iconColor: "#1E3A8A",
    iconSymbol: "PM",
  },
  {
    id: "rodent-surveillance",
    title: "Edge AI Rodent Surveillance System",
    status: "research",
    category: "Edge AI & CV",
    period: "Nov 2026 — Jan 2027",
    role: "Research Contributor (Group Project)",
    summary:
      "Research-level low-power acoustic and computer vision surveillance node for real-time rodent detection and species classification on edge hardware.",
    tech: ["Edge AI", "TinyML", "Computer Vision", "Embedded Linux"],
    githubUrl: "https://github.com/Kavi-Cs",
    iconBg: "#FEF3C7",
    iconColor: "#92400E",
    iconSymbol: "RS",
  },
  {
    id: "iot-flood-alert",
    title: "IoT Flood Alert & Water Monitor",
    status: "production",
    category: "Embedded & IoT",
    period: "2026",
    role: "Embedded Systems Developer",
    summary:
      "Real-time hydrological telemetry and early flood warning node engineered on bare-metal ATmega328P microcontroller with automated threshold alerts.",
    tech: ["ATmega328P", "Embedded C", "IoT Telemetry", "Sensors"],
    githubUrl: "https://github.com/Kavi-Cs/IoT-Water-Level-Monitor-AVR",
    iconBg: "#E0F2FE",
    iconColor: "#0369A1",
    iconSymbol: "FL",
  },
  {
    id: "crop-disease-ai",
    title: "Smart Crop Disease Analyzer",
    status: "production",
    category: "Edge AI & CV",
    period: "2026",
    role: "Deep Learning & Web Dashboard Developer",
    summary:
      "Deep learning plant pathology classifier built with TensorFlow, Keras, and OpenCV paired with an interactive Python diagnostic web dashboard.",
    tech: ["TensorFlow", "Keras", "OpenCV", "Python Dashboard"],
    githubUrl: "https://github.com/Kavi-Cs/crop-disease-ai",
    iconBg: "#ECFDF5",
    iconColor: "#047857",
    iconSymbol: "CD",
  },
  {
    id: "p2p-renta",
    title: "P2P Renta Android Application",
    status: "production",
    category: "Full-Stack & Mobile",
    period: "2026",
    role: "Mobile Application Developer",
    summary:
      "Peer-to-peer rental marketplace Android application featuring real-time item listings, booking workflows, and user verification.",
    tech: ["Android", "Java", "Mobile UI", "REST API"],
    githubUrl: "https://github.com/Kavi-Cs",
    iconBg: "#F3E8FF",
    iconColor: "#6B21A8",
    iconSymbol: "P2P",
  },
  {
    id: "suwalink-pro",
    title: "SuwaLinkPro Healthcare Web App",
    status: "ongoing",
    category: "Full-Stack & Mobile",
    period: "2026",
    role: "Full-Stack Developer",
    summary:
      "Full-stack healthcare management platform engineered with React, Node.js, and Java Spring Boot backend services.",
    tech: ["React.js", "Node.js", "Java", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com/Kavi-Cs/SuwaLink-IT3003-Project",
    iconBg: "#FCE7F3",
    iconColor: "#9D174D",
    iconSymbol: "SL",
  },
];
