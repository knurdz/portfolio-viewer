import { getPortfolioBySubdomain } from "@/lib/appwrite";
import { notFound } from "next/navigation";

export default async function PortfolioPage({ 
  params 
}: { 
  params: Promise<{ subdomain: string }> 
}) {
  const { subdomain } = await params;
  
  const portfolio = await getPortfolioBySubdomain(subdomain);

  if (!portfolio) {
    notFound();
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: portfolio.htmlContent }}
      style={{ width: "100%", minHeight: "100vh" }}
    />
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
