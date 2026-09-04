"use client"

import { useLocalizedData } from "../LanguageContext"
import { useEffect, useMemo } from "react"

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node
  if (typeof node === "number") return String(node)
  if (node == null || typeof node === "boolean") return ""
  if (Array.isArray(node)) return node.map(extractText).join(" ")
  if (typeof node === "object" && "props" in node) return extractText((node as { props: { children: React.ReactNode } }).props.children)
  return ""
}

export default function JsonLd({ lang }: { lang?: string }) {
  const data = useLocalizedData()

  const skills = useMemo(() => [
    ...data.keySkills.data,
    ...data.skills.flatMap((s) => s.data),
  ], [data.keySkills.data, data.skills])

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vincent Marnier",
    jobTitle: "Lead Developer / Tech Lead",
    url: "https://vincent.marnier.eu",
    email: "vincent@marnier.eu",
    telephone: "+33-7-86-35-09-26",
    address: {
      "@type": "PostalAddress",
      addressLocality: lang === "fr" ? "Moirans" : "Grenoble",
      addressCountry: "FR",
    },
    knowsLanguage: lang === "fr" ? ["fr-FR", "en-US"] : ["en-US", "fr-FR"],
    hasCredential: data.diplomas.map((d) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      recognizedBy: {
        "@type": "Organization",
        name: d.subTitle ?? "",
      },
    })),
    knowsAbout: skills,
    worksFor: data.jobs.slice(0, 1).map((j) => ({
      "@type": "OrganizationRole",
      roleName: j.subTitle,
      startDate: j.startDate,
      endDate: j.endDate,
      worksFor: {
        "@type": "Organization",
        name: j.title,
      },
    })),
    alumniOf: data.diplomas.map((d) => ({
      "@type": "CollegeOrUniversity",
      name: d.subTitle,
    })),
    description: extractText(data.profile),
  }), [lang, data, skills])

  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(jsonLd)
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [jsonLd])

  return null
}
