import {
  Cloud,
  Server,
  Monitor,
  Zap,
  Database,
  Headset,
  ShieldCheck,
  GraduationCap,
  Siren,
  TriangleAlert,
  Layers3,
  HeartPulse,
} from "lucide-react";

type Props = {
  name: string;
};

export default function ServiceIcon({ name }: Props) {
  switch (name) {
    // Tecnología
    case "cloud":
      return <Cloud size={28} />;

    case "server":
      return <Server size={28} />;

    case "monitor":
      return <Monitor size={28} />;

    case "zap":
      return <Zap size={28} />;

    case "database":
      return <Database size={28} />;

    case "headset":
      return <Headset size={28} />;

    // Seguridad y Salud en el Trabajo
    case "shield":
      return <ShieldCheck size={28} />;

    case "training":
      return <GraduationCap size={28} />;

    case "emergency":
      return <Siren size={28} />;

    case "risk":
      return <TriangleAlert size={28} />;

    case "management":
      return <Layers3 size={28} />;

    case "health":
      return <HeartPulse size={28} />;

    default:
      return <Monitor size={28} />;
  }
}