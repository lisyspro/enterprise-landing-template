import { lisysproConfig } from "@/clients/lisyspro/config";
import { pistisConfig } from "@/clients/pistis/config";

export const clients = {
  lisyspro: lisysproConfig,
  pistis: pistisConfig,
};

export type ClientSlug = keyof typeof clients;

export function getClientConfig(slug: string) {
  return clients[slug as ClientSlug];
}