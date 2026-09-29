import {
  Activity,
  Heart,
  MapPin,
  Phone,
  Pill,
  ShieldCheck,
  TriangleAlert,
  Video,
} from "lucide-react";

export const HERO_HIGHLIGHTS = ["Configuración simple", "Soporte humano", "Sin permanencia"];

export const PAIN_POINTS = [
  {
    number: "01",
    question: "¿Se habrá caído?",
    answer: "Detectamos situaciones de riesgo automáticamente.",
  },
  {
    number: "02",
    question: "¿Tomó su medicación?",
    answer: "La rutina se confirma y, si hace falta, se recuerda otra vez.",
  },
  {
    number: "03",
    question: "¿Por qué no responde?",
    answer: "El círculo de cuidado recibe señales claras, sin tener que adivinar.",
  },
];

export const CARE_STEPS = [
  {
    icon: Heart,
    title: "La pulsera acompaña",
    description: "Monitorea señales de salud, ubicación, caídas e inactividad durante el día.",
  },
  {
    icon: Phone,
    title: "La app mantiene cerca",
    description: "Familiares y cuidadores ven lo importante y se conectan por videollamada.",
  },
  {
    icon: ShieldCheck,
    title: "Guardian+ responde",
    description: "Si algo ocurre, alerta y escala a cada contacto hasta obtener respuesta.",
  },
];

export const BENEFITS = [
  {
    id: "real-time-health",
    icon: Activity,
    tone: "default",
    title: "Salud en tiempo real",
    description: "Ritmo cardíaco, presión, oxígeno, temperatura y respiración en una vista simple.",
    details:
      "La pulsera registra los signos vitales durante el día y la app los muestra con su unidad y una interpretación en palabras: Normal, Elevado o Bajo. Si una lectura sale del rango configurado, el círculo de cuidado recibe una alerta.",
  },
  {
    id: "fall-detection",
    icon: TriangleAlert,
    tone: "alert",
    title: "Detección de caídas + SOS",
    description: "Alerta inmediata y escalamiento automático al círculo de cuidado.",
    details:
      "Ante una caída o al presionar SOS, la persona tiene 30 segundos para indicar que está bien. Si no responde, el contacto principal recibe la alerta con la ubicación y, si nadie la reconoce, se avisa al siguiente contacto.",
  },
  {
    id: "safe-zones",
    icon: MapPin,
    tone: "default",
    title: "Ubicación y zonas seguras",
    description: "Geocercas que avisan cuando la persona sale de un lugar definido.",
    details:
      "Define zonas seguras como la casa, el parque o el club. Guardian+ muestra la ubicación actual y te avisa cuando la persona sale de una de ellas, sin necesidad de llamarla a cada momento.",
  },
  {
    id: "routines",
    icon: Pill,
    tone: "default",
    title: "Rutinas sin olvidos",
    description: "Medicación, citas, hidratación y actividad con reintentos inteligentes.",
    details:
      "Cada recordatorio llega a la pulsera y se confirma con un toque. Si no se confirma, se recuerda otra vez y la familia puede ver qué quedó pendiente en el día.",
  },
  {
    id: "active-prevention",
    icon: Heart,
    tone: "default",
    title: "Prevención activa",
    description: "Identifica inactividad prolongada antes de que una situación escale.",
    details:
      "Guardian+ aprende la rutina habitual de actividad y avisa con calma cuando detecta un periodo de inactividad fuera de lo normal, para que puedas comunicarte a tiempo.",
  },
  {
    id: "always-close",
    icon: Video,
    tone: "default",
    title: "Siempre cerca",
    description: "Videollamada directa para acompañar, conversar y dar tranquilidad.",
    details:
      "Desde la app puedes iniciar una llamada o videollamada con un toque. En los modelos de pulsera con comunicación bidireccional, la persona responde directamente desde su muñeca.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Seguridad + salud + compañía",
    description: "Un ecosistema completo, no tres apps separadas.",
  },
  {
    title: "Información que se entiende",
    description: "Reportes claros para la familia, el cuidador y el médico.",
  },
  {
    title: "Una red que responde",
    description: "Alertas progresivas hasta que alguien confirma la ayuda.",
  },
];

export const TESTIMONIAL = {
  quote: "Ahora puedo trabajar tranquila. Sé que mi mamá está acompañada, y si algo cambia, me entero a tiempo.",
  author: "Ana María",
  initials: "AM",
  role: "Hija y parte del círculo de cuidado",
};

export const PLANS = [
  {
    id: "essential",
    name: "Esencial",
    tagline: "Para comenzar a cuidar",
    price: 0,
    features: ["App para 2 familiares", "Botón SOS", "Recordatorios básicos", "Resumen diario"],
    ctaLabel: "Comenzar gratis",
    isFeatured: false,
  },
  {
    id: "guardian-plus",
    name: "Guardian+",
    tagline: "Pulsera incluida · al mes",
    price: 19,
    features: [
      "Todo en Esencial",
      "Signos vitales en tiempo real",
      "Caídas, GPS y geocercas",
      "Escalamiento de alertas",
      "Videollamadas y reportes",
    ],
    ctaLabel: "Elegir este plan",
    isFeatured: true,
  },
  {
    id: "care-pro",
    name: "Cuidado Pro",
    tagline: "Para cuidado intensivo · al mes",
    price: 39,
    features: [
      "Todo en Guardian+",
      "Cuidadores ilimitados",
      "Reportes médicos avanzados",
      "Historial extendido",
      "Soporte prioritario",
    ],
    ctaLabel: "Elegir este plan",
    isFeatured: false,
  },
];

export const CARE_RECIPIENT_OPTIONS = [
  { value: "parent", label: "Mi mamá o mi papá" },
  { value: "grandparent", label: "Mi abuela o mi abuelo" },
  { value: "other-relative", label: "Otro familiar" },
  { value: "patient", label: "Una persona a mi cargo como cuidador" },
  { value: "other", label: "Otra persona" },
];

export const WRISTBAND_FEATURES = [
  {
    id: "sos",
    title: "Botón SOS",
    description: "Una pulsación larga avisa de inmediato a los contactos de emergencia.",
  },
  {
    id: "im-fine",
    title: "Estoy bien",
    description: "Tras una advertencia, la persona confirma en 30 segundos que está a salvo.",
  },
  {
    id: "vital-signs",
    title: "Sensores de signos vitales",
    description: "Ritmo cardíaco, oxígeno, temperatura y respiración durante todo el día.",
  },
  {
    id: "fall-detection",
    title: "Detección de caídas",
    description: "Reconoce un impacto brusco y abre la ventana de confirmación.",
  },
  {
    id: "gps",
    title: "GPS integrado",
    description: "Comparte la ubicación en tiempo real con el círculo de cuidado.",
  },
  {
    id: "reminders",
    title: "Recordatorios con vibración",
    description: "Avisa la medicación con una vibración suave y se confirma con un toque.",
  },
];

export const APP_TOUR = [
  {
    id: "home",
    label: "Inicio",
    title: "Todo de un vistazo",
    description:
      "El estado de la persona, sus signos vitales, lo próximo en su rutina y la última alerta, en una sola pantalla.",
    screen: "home",
  },
  {
    id: "alerts",
    label: "Alertas",
    title: "Avisos que se entienden",
    description:
      "Cada notificación llega con su nivel de urgencia: una posible caída nunca se ve igual que un recordatorio.",
    screen: "notifications",
  },
  {
    id: "video-call",
    label: "Videollamada",
    title: "Conversa y acompaña",
    description: "Habla cara a cara con Elena mientras ves su ritmo cardíaco, oxígeno y temperatura en vivo.",
    screen: "videoCall",
  },
  {
    id: "status-check",
    label: "Verificación",
    title: "Siempre hay una forma de contactar",
    description:
      "Si su pulsera no tiene altavoz, la app te propone llamar a su celular o a la persona que la acompaña.",
    screen: "statusCheck",
  },
];

export const SAFE_ZONE_STEPS = [
  {
    id: "define",
    title: "Define sus lugares",
    description: "Hogar, parque o club: tú decides dónde está segura y el radio de cada zona.",
    screen: "safeZones",
  },
  {
    id: "alert",
    title: "Te avisamos si sale",
    description: "Recibes la alerta con la distancia y su última posición para llamarla o ir a buscarla.",
    screen: "perimeterAlert",
  },
  {
    id: "return",
    title: "Confirmamos su regreso",
    description: "Cuando vuelve a la zona, la alerta se cierra sola y la vigilancia sigue su curso.",
    screen: "perimeterMonitoring",
  },
];
