import { Client, Databases } from "node-appwrite";

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
const PORTFOLIOS_COLLECTION_ID = process.env.APPWRITE_PORTFOLIOS_COLLECTION_ID!;

export async function getPortfolioBySubdomain(subdomain: string) {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_KEY!);

    const databases = new Databases(client);

    const result = await databases.listDocuments(
      DATABASE_ID,
      PORTFOLIOS_COLLECTION_ID,
      [`subdomain="${subdomain}"`]
    );

    if (result.documents.length === 0) {
      return null;
    }

    return {
      subdomain: result.documents[0].subdomain,
      htmlContent: result.documents[0].htmlContent,
    };
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return null;
  }
}
