export function ProgressRing({ value, label }: { value: number; label: string }) {
  const normalized = Math.min(100, Math.max(0, value));
  return (
    <div className="progress-ring" style={{ "--progress": `${normalized * 3.6}deg` } as React.CSSProperties}>
      <div>
        <strong>{normalized}%</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}
