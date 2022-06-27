export default function MultiRange({
  min,
  max,
  left,
  right,
  onChange,
}: {
  min: number;
  max: number;
  left: number;
  right: number;
  onChange: ([left, right]: [number, number]) => void;
}) {
  return (
    <>
      <input
        type="number"
        min={min}
        max={right - 1}
        value={left}
        onChange={(e) => onChange([Math.min(parseInt((e.target as HTMLInputElement).value), right - 1), right])}
      />
      <input
        type="number"
        min={left + 1}
        max={max}
        value={right}
        onChange={(e) => onChange([left, Math.max(parseInt((e.target as HTMLInputElement).value), left + 1)])}
      />
    </>
  );
}
