"use client";

const companies = [
  { name: "Airbnb", font: "var(--font-cedarville-cursive)", weight: 700 },
  { name: "Shopify", font: "system-ui", weight: 800 },
  { name: "Notion", font: "Georgia", weight: 500 },
  { name: "Linear", font: "var(--font-inter)", weight: 600 },
  { name: "Webflow", font: "var(--font-inter)", weight: 700 },
  { name: "Figma", font: "system-ui", weight: 600 },
  { name: "Slack", font: "Georgia", weight: 700 },
  { name: "Stripe", font: "system-ui", weight: 800 },
  { name: "Vercel", font: "var(--font-inter)", weight: 600 },
  { name: "Framer", font: "var(--font-source-serif-4)", weight: 600 },
];

export function TrustedBy() {
  const duplicated = [...companies, ...companies, ...companies, ...companies];
  return (
    <section className="az-trusted">
      <div className="az-trusted-inner">
        <p className="az-trusted-label">Partnered with top-tier companies globally</p>
        <div className="az-trusted-marquee">
          <div className="az-trusted-track">
            {duplicated.map((c, i) => (
              <span
                key={i}
                className="az-trusted-company"
                style={{ fontFamily: c.font, fontWeight: c.weight }}
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
