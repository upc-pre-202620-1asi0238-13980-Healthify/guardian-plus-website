import homeScreen from "../assets/images/app-screens/home.webp";
import homeNav from "../assets/images/app-screens/home-nav.webp";
import notificationsScreen from "../assets/images/app-screens/notifications.webp";
import videoCallScreen from "../assets/images/app-screens/video-call.webp";
import statusCheckScreen from "../assets/images/app-screens/status-check.webp";
import safeZonesScreen from "../assets/images/app-screens/safe-zones.webp";
import perimeterAlertScreen from "../assets/images/app-screens/perimeter-alert.webp";
import perimeterMonitoringScreen from "../assets/images/app-screens/perimeter-monitoring.webp";

/* Screens exported from the Guardian+ Prototyping Figma file. Ratio = height / width. */
export const APP_SCREENS = {
  home: {
    src: homeScreen,
    navOverlay: homeNav,
    ratio: 3860 / 1344,
    background: "#ffffff",
    alt: "Pantalla de inicio de la app Guardian+: Elena está bien, signos vitales, próximos recordatorios y última alerta",
  },
  notifications: {
    src: notificationsScreen,
    ratio: 1500 / 1349,
    background: "#ffffff",
    alt: "Notificaciones de la app: posible caída detectada, medicación pendiente, batería baja y reporte semanal",
  },
  videoCall: {
    src: videoCallScreen,
    ratio: 2551 / 1170,
    alt: "Videollamada con Elena mostrando su ritmo cardíaco, oxígeno, temperatura y presión en vivo",
  },
  statusCheck: {
    src: statusCheckScreen,
    ratio: 2845 / 1170,
    alt: "Verificación de estado: opciones para llamar al celular de Elena o a su cuidadora",
  },
  safeZones: {
    src: safeZonesScreen,
    ratio: 2532 / 1170,
    alt: "Zonas seguras configuradas: Hogar, Parque Central y Club de Adulto Mayor",
  },
  perimeterAlert: {
    src: perimeterAlertScreen,
    ratio: 2532 / 1170,
    alt: "Alerta de perímetro: Elena salió de la zona Hogar, con su última posición y botones para llamar o seguir la ruta",
  },
  perimeterMonitoring: {
    src: perimeterMonitoringScreen,
    ratio: 2814 / 1170,
    alt: "Monitoreo perimetral: retorno a zona segura confirmado y vigilancia normal en línea",
  },
};
