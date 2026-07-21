import { Compass, CircuitBoard, Radar, FlaskConical, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    designation: "NULLPOINT",
    description: "Reconciles boundary drift across a sharded consensus ledger.",
    Icon: CircuitBoard,
  },
  {
    id: "02",
    designation: "ECHOFRAME",
    description: "Aligns temporal offsets against a rolling covariance window.",
    Icon: Radar,
  },
  {
    id: "03",
    designation: "DRIFTWAKE",
    description: "Throttles ego amplification through an adaptive backpressure valve.",
    Icon: FlaskConical,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <style>{`
        @keyframes draftIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .draft-in {
          animation: draftIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .card-grid:hover .app-card {
          opacity: 0.55;
        }
        .card-grid:hover .app-card:hover {
          opacity: 1;
        }
        .app-card {
          width: 300px;
          max-width: 100%;
          flex: 0 0 auto;
          transition: opacity 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
        .app-card:hover {
          transform: translateY(-2px);
        }
        .blueprint-grid {
          background-image:
            linear-gradient(rgba(103, 232, 249, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(103, 232, 249, 0.07) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .stamp {
          transform: rotate(-6deg);
        }
        .font-display {
          font-family: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
        }
        .font-technical {
          font-family: "JetBrains Mono", ui-monospace, monospace;
        }
        @media (prefers-reduced-motion: reduce) {
          .draft-in { animation: none; }
          .app-card { transition: none; }
        }
      `}</style>

      <div className="blueprint-grid flex-1 flex flex-col px-6 md:px-10 py-10">
        {/* header */}
        <div className="flex items-center gap-2 text-cyan-500">
          <Compass size={14} strokeWidth={2} />
          <span className="font-technical text-xs uppercase tracking-widest">
            Project Index — Sheet 001
          </span>
        </div>

        {/* card grid, centered in remaining space */}
        <div className="flex-1 flex items-center justify-center">
          <div className="card-grid flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl">
            {projects.map(({ id, designation, description, Icon }, i) => (
              <div
                key={id}
                className="app-card draft-in relative border border-slate-700 bg-slate-900/40 p-6 hover:border-cyan-500"
                style={{ animationDelay: `${i * 130}ms` }}
              >
                <CardCorners />

                <div className="stamp absolute top-4 right-4 border border-amber-400/40 bg-amber-400/10 text-amber-400 font-technical text-xs uppercase tracking-wide px-2 py-0.5">
                  Not built
                </div>

                <Icon className="text-cyan-500 mb-6" size={22} strokeWidth={1.75} />

                <div className="font-technical text-xs text-slate-500 mb-1">
                  Fig. {id}
                </div>
                <h2 className="font-display text-lg font-semibold tracking-tight text-slate-100 mb-2">
                  {designation}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  {description}
                </p>

                <button
                  type="button"
                  disabled
                  title="Not deployed yet"
                  className="inline-flex items-center gap-1 text-sm text-slate-600 cursor-not-allowed"
                >
                  Not deployed
                  <ArrowUpRight size={14} strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* title block */}
      <div className="border-t border-slate-800 px-6 md:px-10 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-x-6 gap-y-1 justify-between text-xs font-technical text-slate-600 tracking-wide">
          <span>WORKSHOP.IDX</span>
          <span>REV A</span>
          <span>SCALE N/A</span>
          <span>
            {new Date().toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

function CardCorners() {
  const base = "absolute w-3 h-3 border-cyan-600";
  return (
    <>
      <div className={`${base} top-0 left-0 border-t-2 border-l-2`} />
      <div className={`${base} top-0 right-0 border-t-2 border-r-2`} />
      <div className={`${base} bottom-0 left-0 border-b-2 border-l-2`} />
      <div className={`${base} bottom-0 right-0 border-b-2 border-r-2`} />
    </>
  );
}
