// Server-rendered JSON-LD (visible to no-JS crawlers and indexers).
// Replaces the old client-side injected version so machines get the full
// structured resume in the static HTML. Zero visual impact.
import * as enData from "@/data/en";
import * as frData from "@/data/fr";
import type { LanguageCode } from "../language";

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (node == null || typeof node === "boolean") return "";
  if (Array.isArray(node)) return node.map(extractText).join(" ");
  if (typeof node === "object" && "props" in node)
    return extractText((node as { props: { children: React.ReactNode } }).props.children);
  return "";
}

export default function JsonLdScript({ lang }: { lang: LanguageCode }) {
  const data = lang === "fr" ? frData : enData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vincent Marnier",
    jobTitle: data.titles["Main title"],
    url: "https://vincent.marnier.eu",
    email: "vincent@marnier.eu",
    telephone: "+33-7-86-35-09-26",
    address: {
      "@type": "PostalAddress",
      addressLocality: lang === "fr" ? "Moirans" : "Grenoble",
      addressCountry: "FR",
    },
    knowsLanguage: lang === "fr" ? ["fr-FR", "en-US"] : ["en-US", "fr-FR"],
    knowsAbout: [...data.keySkills.data, ...data.skills.flatMap((s) => s.data)],
    worksFor: data.jobs.map((j) => ({
      "@type": "OrganizationRole",
      roleName: j.subTitle,
      startDate: j.startDate,
      endDate: j.endDate,
      worksFor: {
        "@type": "Organization",
        name: j.title,
      },
      description: extractText(j.description),
      ...(j.url ? { url: j.url } : {}),
    })),
    alumniOf: data.diplomas.map((d) => ({
      "@type": "CollegeOrUniversity",
      name: d.subTitle,
    })),
    hasCredential: data.diplomas.map((d) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: d.title,
      recognizedBy: {
        "@type": "Organization",
        name: d.subTitle,
      },
    })),
    description: extractText(data.profile),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
