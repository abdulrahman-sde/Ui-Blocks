"use client";

const tickerItems = [
  "Brand Identity",
  "App Development",
  "Visual Design",
  "Creative Video",
  "Iconography",
];

export function CurvedLines({ side }: { side: "left" | "right" }) {
  return (
    <div className={`az-lines az-lines--${side}`}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={`az-line az-line--${side}`}
          style={{
            width: 60 + i * 10,
            animationDelay: `${i * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
}

export function TopLines() {
  return (
    <div className="az-lines az-lines--top">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="az-line az-line--top"
          style={{
            height: 20 + i * 6,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

export function TickerRow() {
  const duplicated = [
    ...tickerItems,
    ...tickerItems,
    ...tickerItems,
    ...tickerItems,
  ];
  return (
    <div className="az-ticker">
      <div className="az-ticker-track">
        {duplicated.map((item, i) => (
          <span key={i} className="az-ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="az-hero">
      <CurvedLines side="left" />
      <CurvedLines side="right" />
      <TopLines />
      <div className="az-hero-content">
        <TickerRow />
        <h1 className="az-title text-balance max-w-5xl">
          Premium <br /> creative
          <span className="az-title-serif float-right"> alwayzz</span>
          <sup className="az-title-sup">&reg;</sup> on demand.
        </h1>
        <p className="az-subtitle text-balance">
          A flexible design partnership for founders, brands, and agencies who
          want top craft delivered on their timeline.
        </p>
        <div className="az-cta-row">
          <button className="az-btn az-btn--primary">View Plans</button>
          <button className="az-btn az-btn--book">
            <img
              className="az-avatar"
              src="https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png"
              alt=""
            />
            <span className="az-btn-book-text">
              <span className="az-btn-book-primary">Chat for 15 minutes</span>
              <span className="az-btn-book-secondary">
                <span className="az-green-dot" />
                Pick a slot
              </span>
            </span>
          </button>
        </div>
      </div>
      <div className="az-blur" />
    </section>
  );
}
