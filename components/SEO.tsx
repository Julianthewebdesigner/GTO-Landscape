import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = '/images/Logo.jpeg',
  url = 'https://gtolandscape.com',
  type = 'website'
}) => {
  const fullTitle = `${title} | GTO Landscape LLC`;
  const fullImage = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content="landscaping, hardscaping, outdoor living, landscape design, property cleanup, Des Moines WA, Federal Way, Kent, Renton, Auburn, SeaTac, Burien, King County, paver patios, retaining walls, lawn care, commercial landscaping" />
      <meta name="author" content="GTO Landscape LLC" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="GTO Landscape LLC" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Geo Tags */}
      <meta name="geo.region" content="US-WA" />
      <meta name="geo.placename" content="Des Moines" />
      <meta name="geo.position" content="47.4018;-122.3243" />
      <meta name="ICBM" content="47.4018, -122.3243" />

      {/* Business Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "GTO Landscape LLC",
          "image": `${url}/images/Logo.jpeg`,
          "description": "Professional landscaping and hardscaping services in King County and surrounding areas, WA. Specializing in paver patios, retaining walls, landscape design, and outdoor living spaces.",
          "url": url,
          "telephone": "+12532692027",
          "email": "gtolandscape8@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Des Moines",
            "addressRegion": "WA",
            "postalCode": "98198",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "47.4018",
            "longitude": "-122.3243"
          },
          "areaServed": [
            "Des Moines",
            "Federal Way",
            "Kent",
            "Renton",
            "Auburn",
            "SeaTac",
            "Burien",
            "Tukwila",
            "Normandy Park",
            "Covington",
            "Maple Valley",
            "Black Diamond"
          ],
          "priceRange": "$$",
          "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
          "sameAs": [
            "https://facebook.com/gtolandscape",
            "https://instagram.com/gtolandscape"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
