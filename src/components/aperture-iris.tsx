/**
 * Aperture iris — the hero's animated centerpiece.
 *
 * A camera aperture rendered as thin ember lines: N straight blades, each a
 * chord tangent to the central opening, rotated in 360/N steps. Pure SVG + CSS,
 * so this ships zero JS and has no hydration surface (geometry is a deterministic
 * constant map — no Math.random, no Date).
 *
 * The "breathe" is the elegant part: each blade's opening/closing is a CSS
 * translateY on the <line> along its own (pre-rotation) normal, which composes
 * under the parent <g>'s rotate() attribute to move every blade toward/away from
 * centre uniformly. Rotation lives on a separate ancestor (the rotor), so the two
 * motions never fight. Everything animated is transform/opacity only.
 */

const C = 600; // viewBox centre (0 0 1200 1200)
const BLADES = 8;
const angles = Array.from({ length: BLADES }, (_, i) => (i * 360) / BLADES);

export function ApertureIris() {
  return (
    <div
      aria-hidden
      className="iris-stage pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="iris-svg"
        viewBox="0 0 1200 1200"
        fill="none"
        focusable="false"
        aria-hidden
      >
        <defs>
          <radialGradient id="iris-bloom-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.06" />
            <stop offset="72%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* light blooming through the opening (sits under the blades) */}
        <circle
          className="iris-bloom"
          cx={C}
          cy={C}
          r={360}
          fill="url(#iris-bloom-grad)"
        />

        {/* machined lens barrel — two hairlines */}
        <circle cx={C} cy={C} r={560} stroke="var(--border)" strokeWidth={1} />
        <circle cx={C} cy={C} r={540} stroke="var(--border)" strokeWidth={1} opacity={0.5} />

        {/* primary rotor — focus ticks + 8 blades */}
        <g className="iris-rotor">
          <circle
            cx={C}
            cy={C}
            r={505}
            stroke="var(--accent-line)"
            strokeWidth={1}
            strokeDasharray="2 14"
            opacity={0.7}
          />
          {angles.map((a) => (
            <g key={`p-${a}`} transform={`rotate(${a} ${C} ${C})`}>
              <line className="iris-blade" x1={C - 455} y1={C - 210} x2={C + 455} y2={C - 210} />
            </g>
          ))}
        </g>

        {/* echo rotor — fainter, offset 22.5°, counter-rotating, breathes in antiphase */}
        <g className="iris-rotor iris-rotor--echo">
          {angles.map((a) => (
            <g key={`e-${a}`} transform={`rotate(${a + 22.5} ${C} ${C})`}>
              <line
                className="iris-blade iris-blade--echo"
                x1={C - 430}
                y1={C - 280}
                x2={C + 430}
                y2={C - 280}
              />
            </g>
          ))}
        </g>
      </svg>

      {/* readability scrim — darkens the iris directly behind the copy */}
      <div className="iris-vignette" />
    </div>
  );
}
