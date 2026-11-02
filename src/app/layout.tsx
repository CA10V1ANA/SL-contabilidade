import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
export const metadata: Metadata = {
  title: "SL Contabilidade & Coworking | Dê direção ao seu negócio",
  description: "Contabilidade próxima. Espaço para crescer. Conheça as soluções da SL em contabilidade, abertura de empresas e coworking em Horizonte e Pacajus, Ceará.",
  applicationName: "SL Contabilidade & Coworking",
  openGraph: { title: "SL Contabilidade & Coworking", description: "Dê direção ao seu negócio. Contabilidade próxima. Espaço para crescer.", locale: "pt_BR", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
