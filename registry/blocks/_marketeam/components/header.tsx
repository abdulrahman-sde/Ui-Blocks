"use client";

const navLinks = ["Your Team", "Solutions", "Blog", "Pricing"];

function NavUnderline({ color }: { color: string }) {
  return (
    <span
      className="nav-underline"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 1,
        backgroundColor: color,
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.3s ease",
      }}
    />
  );
}

function NavLink({ label, color = "#000000", weight = 400 }: { label: string; color?: string; weight?: number }) {
  return (
    <a
      href="#"
      style={{
        position: "relative",
        fontSize: 15,
        fontWeight: weight,
        color,
        textDecoration: "none",
        paddingBottom: 2,
      }}
      onMouseEnter={(e) => {
        const line = e.currentTarget.querySelector(".nav-underline") as HTMLElement;
        if (line) line.style.transform = "scaleX(1)";
      }}
      onMouseLeave={(e) => {
        const line = e.currentTarget.querySelector(".nav-underline") as HTMLElement;
        if (line) line.style.transform = "scaleX(0)";
      }}
    >
      {label}
      <NavUnderline color={color} />
    </a>
  );
}

export function BorderButton({ label, dir = "left" }: { label: string; dir?: "left" | "right" }) {
  const startX = dir === "left" ? "-100%" : "100%";

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 50,
        display: "inline-block",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -3,
          borderRadius: "inherit",
          padding: 3,
          background: "conic-gradient(from var(--border-angle), #A068FF, #070319, #A068FF, #070319, #A068FF)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          animation: "rotate-border 3s linear infinite",
          pointerEvents: "none",
        }}
      />
      <button
        style={{
          position: "relative",
          zIndex: 1,
          borderRadius: 50,
          padding: "12px 26px",
          fontSize: 15,
          fontWeight: 500,
          color: "#fff",
          background: "#000000",
          border: "none",
          cursor: "pointer",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          const fill = e.currentTarget.querySelector(".btn-fill") as HTMLElement;
          if (fill) fill.style.transform = "translateX(0)";
        }}
        onMouseLeave={(e) => {
          const fill = e.currentTarget.querySelector(".btn-fill") as HTMLElement;
          if (fill) fill.style.transform = `translateX(${startX})`;
        }}
      >
        <span
          className="btn-fill"
          style={{
            position: "absolute",
            inset: 0,
            background: "#A068FF",
            transform: `translateX(${startX})`,
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
            borderRadius: "inherit",
          }}
        />
        <span style={{ position: "relative", zIndex: 2 }}>{label}</span>
      </button>
    </div>
  );
}

export function Header() {
  return (
    <header
      style={{
        animation: "fade-down 0.8s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-6 flex justify-between items-center">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-12">
          <img
            src="https://polo-pecan-73837341.figma.site/_assets/v11/17ae538989a509947a8de3892c644664895e69b1.png"
            alt="Marketeam"
            style={{ height: 32 }}
          />
          <nav className="hidden md:flex gap-6 lg:gap-8">
            {navLinks.map((label) => (
              <NavLink key={label} label={label} />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <NavLink label="Log In" color="#ffffff" weight={500} />
          <BorderButton label="Join Now" />
        </div>
      </div>
    </header>
  );
}