import { notFound } from "next/navigation";

import ClientLanding from "@/components/templates/ClientLanding";

import {
  clients,
  getClientConfig,
} from "@/clients";

type ClientPageProps = {
  params: Promise<{
    client: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(clients).map((client) => ({
    client,
  }));
}

export default async function ClientPage({
  params,
}: ClientPageProps) {
  const { client: slug } = await params;

  const client = getClientConfig(slug);

  if (!client) {
    notFound();
  }

  return <ClientLanding client={client} />;
}