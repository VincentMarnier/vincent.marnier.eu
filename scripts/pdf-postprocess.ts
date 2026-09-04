import { PDFName, PDFRawStream } from "pdf-lib";
import type { PDFDocument } from "pdf-lib";

export interface XmpInput {
  title: string;
  description: string;
  creator: string;
  subject: string;
  keywords: string[];
  language: string;
  profile: string;
  personJsonLd: Record<string, unknown>;
  pageCount: number;
}

export function embedXmp(doc: PDFDocument, data: XmpInput): void {
  const context = doc.context;
  const xmp = buildXmpPacket(data);
  const bytes = new TextEncoder().encode(xmp);

  const metaDict = context.obj({
    Type: "Metadata",
    Subtype: "XML",
    Length: bytes.length,
  });
  const stream = PDFRawStream.of(metaDict, bytes);
  const ref = context.register(stream);

  doc.catalog.set(PDFName.of("Metadata"), ref);
}

function buildXmpPacket(data: XmpInput): string {
  const now = new Date().toISOString();
  const escapeXml = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const jsonLdEscaped = escapeXml(JSON.stringify(data.personJsonLd));
  const keywordItems = data.keywords.map((k) => `<rdf:li>${escapeXml(k)}</rdf:li>`).join('');
  const keywordsAttr = escapeXml(data.keywords.join(', '));

  const lines: string[] = [];
  lines.push('<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?>');
  lines.push('<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="vincent.marnier.eu">');
  lines.push(' <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">');
  lines.push('  <rdf:Description rdf:about=""');
  lines.push('    xmlns:dc="http://purl.org/dc/elements/1.1/"');
  lines.push('    xmlns:xmp="http://ns.adobe.com/xap/1.0/"');
  lines.push('    xmlns:pdf="http://ns.adobe.com/pdf/1.3/"');
  lines.push('    xmlns:pdfx="http://ns.adobe.com/pdfx/1.3/"');
  lines.push('    xmlns:xmpTPg="http://ns.adobe.com/xap/1.0/t/pg/">');
  lines.push(`   <dc:title><rdf:Alt><rdf:li xml:lang="x-default">${escapeXml(data.title)}</rdf:li></rdf:Alt></dc:title>`);
  lines.push(`   <dc:description><rdf:Alt><rdf:li xml:lang="x-default">${escapeXml(data.description)}</rdf:li></rdf:Alt></dc:description>`);
  lines.push(`   <dc:creator><rdf:Seq><rdf:li>${escapeXml(data.creator)}</rdf:li></rdf:Seq></dc:creator>`);
  lines.push(`   <dc:subject><rdf:Bag>${keywordItems}</rdf:Bag></dc:subject>`);
  lines.push(`   <dc:format>application/pdf</dc:format>`);
  lines.push(`   <dc:language><rdf:Bag><rdf:li>${escapeXml(data.language)}</rdf:li></rdf:Bag></dc:language>`);
  lines.push(`   <pdf:Producer>vincent.marnier.eu resume pipeline</pdf:Producer>`);
  lines.push(`   <pdf:Keywords>${keywordsAttr}</pdf:Keywords>`);
  lines.push(`   <pdfx:profile>${escapeXml(data.profile)}</pdfx:profile>`);
  lines.push(`   <xmp:CreatorTool>vincent.marnier.eu</xmp:CreatorTool>`);
  lines.push(`   <xmp:CreateDate>${now}</xmp:CreateDate>`);
  lines.push(`   <xmp:ModifyDate>${now}</xmp:ModifyDate>`);
  lines.push(`   <xmpTPg:NPages>${data.pageCount}</xmpTPg:NPages>`);
  lines.push(`   <xmpTPg:Pages>${data.pageCount}</xmpTPg:Pages>`);
  lines.push(`   <pdfx:source>${jsonLdEscaped}</pdfx:source>`);
  lines.push('  </rdf:Description>');
  lines.push(' </rdf:RDF>');
  lines.push('</x:xmpmeta>');
  lines.push('<?xpacket end="w"?>');
  return lines.join("\n");
}
