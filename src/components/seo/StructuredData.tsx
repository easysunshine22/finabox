export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Finabox",
    "description": "Smart, secure inbox for financial transaction messages. Cut SMS costs and deliver instant alerts with built-in dispute tools.",
    "url": "https://finabox.com",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tier available"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "author": {
      "@type": "Organization",
      "name": "Finabox",
      "url": "https://finabox.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}