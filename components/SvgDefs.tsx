export default function SvgDefs() {
  return (
    <svg className="svg-defs" aria-hidden="true">
      <defs>
        {/* Diagonal hatch pattern — thin 45° lines, light on dark bg */}
        <pattern
          id="hatchPattern"
          patternUnits="userSpaceOnUse"
          width="10"
          height="10"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#cdd1e8"
            strokeWidth="1"
            strokeOpacity="0.08"
          />
        </pattern>
      </defs>
    </svg>
  );
}
