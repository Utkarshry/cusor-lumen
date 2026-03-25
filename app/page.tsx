import LumenCursor from "@/components/LumenCursor";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Ambient background gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(80,40,160,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <ParticleField />

      {/* Interactive cursor system */}
      <LumenCursor />

      {/* Hero content */}
      <section className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Wordmark */}
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-[0.85rem] tracking-[0.35em] uppercase font-medium"
            style={{ color: "rgba(180,140,255,0.7)" }}
          >
            introducing
          </span>
          <h1
            className="text-7xl sm:text-9xl font-black tracking-tight leading-none"
            style={{
              background:
                "linear-gradient(135deg, #c8a8ff 0%, #9060ff 40%, #c0e0ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(120,80,255,0.5))",
            }}
          >
            LUMEN
          </h1>
          <p
            className="text-base sm:text-lg font-light max-w-md"
            style={{ color: "rgba(210,190,255,0.75)" }}
          >
            Your cursor, reimagined as a living light source.
            <br />
            Beautiful. Fluid. Endlessly customizable.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="https://github.com/Utkarshry/cusor-lumen"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-7 py-3 rounded-full text-sm font-semibold overflow-hidden transition-all duration-300"
            style={{
              background: "rgba(120,80,255,0.2)",
              border: "1px solid rgba(160,120,255,0.4)",
              color: "rgba(220,200,255,0.95)",
            }}
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(160,100,255,0.3), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <span className="relative">View on GitHub</span>
          </a>

          <a
            href="#"
            className="group relative px-7 py-3 rounded-full text-sm font-semibold overflow-hidden transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(140,80,255,0.8), rgba(80,40,200,0.8))",
              border: "1px solid rgba(180,140,255,0.3)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(120,80,255,0.3)",
            }}
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(200,160,255,0.2), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <span className="relative">Try it live →</span>
          </a>
        </div>

        {/* Feature chips */}
        <ul className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            "Zero-dependency",
            "12 themes",
            "60 fps",
            "TypeScript",
            "Open source",
          ].map((label) => (
            <li
              key={label}
              className="px-4 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(100,60,200,0.15)",
                border: "1px solid rgba(140,100,255,0.25)",
                color: "rgba(200,170,255,0.8)",
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer
        className="absolute bottom-6 text-xs"
        style={{ color: "rgba(160,140,200,0.4)" }}
      >
        © {new Date().getFullYear()} LUMEN · cusor.me
      </footer>
    </main>
  );
}
