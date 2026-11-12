// AI Enterprises - Animated Lucide Icons System
import {
  createIcons,
  AirVent,
  Snowflake,
  Wind,
  Gauge,
  Wrench,
  ShieldCheck,
  Layers,
  Clock,
  Zap,
  ArrowRight,
  Check,
  CheckCircle2,
  Building2,
  Hospital,
  Hotel,
  Factory,
  Store,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Calculator,
  Activity,
  Sparkles,
  Fan,
  FileCheck,
  CalendarCheck,
  Sliders,
  HelpCircle,
  Thermometer
} from 'lucide';

// Registered Lucide Icons dictionary
export const iconsMap = {
  AirVent,
  Snowflake,
  Wind,
  Gauge,
  Wrench,
  ShieldCheck,
  Layers,
  Clock,
  Zap,
  ArrowRight,
  Check,
  CheckCircle2,
  Building2,
  Hospital,
  Hotel,
  Factory,
  Store,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Calculator,
  Activity,
  Sparkles,
  Fan,
  FileCheck,
  CalendarCheck,
  Sliders,
  HelpCircle,
  Thermometer
};

// Initializes all Lucide icons on the page
export function renderLucideIcons() {
  createIcons({
    icons: iconsMap,
    attrs: {
      'stroke-width': '1.75',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'class': 'lucide-icon'
    }
  });
}
