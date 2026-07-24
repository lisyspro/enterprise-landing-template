import {
  Cloud,
  Server,
  Monitor,
  Zap,
  Database,
  Headset,
} from "lucide-react";

type Props = {
  name: string;
};

export default function ServiceIcon({ name }: Props) {
  switch (name) {
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

    default:
      return <Monitor size={28} />;
  }
}