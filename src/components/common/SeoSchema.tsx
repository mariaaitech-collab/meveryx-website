import Script from "next/script";
import { site } from "@/lib/site";

export function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,

        name: site.name,

        url: site.url,

        logo: `${site.url}${site.logo}`,

        image: `${site.url}${site.ogImage}`,

        description: site.description,

        email: site.email,

        telephone: site.phone,
        

        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: site.country,
        },

        sameAs: [
          site.facebook,
          site.instagram,
          site.linkedin,
          site.github,
        ].filter(Boolean),
      },

      {
        "@type": "WebSite",

        "@id": `${site.url}/#website`,

        url: site.url,

        name: site.name,

        description: site.description,

        publisher: {
          "@id": `${site.url}/#organization`,
        },

        potentialAction: {
          "@type": "SearchAction",

          target: `${site.url}/search?q={search_term_string}`,

          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "LocalBusiness",

        "@id": `${site.url}/#business`,

        name: site.name,

        image: `${site.url}${site.ogImage}`,

        url: site.url,

        telephone: site.phone,

        email: site.email,

        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: site.city,
          addressCountry: site.country,
        },

        openingHours: "Mo-Sa 09:00-18:00",

        priceRange: "$$",
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}