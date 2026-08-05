import { Check, Circle, LockKeyhole, Play } from "lucide-react";

export type Status = "completed" | "current" | "available" | "locked";

export function StatusBadge({ status }: { status: Status }) {
  const labels: Record<Status, string> = {
    completed: "Completed",
    current: "In progress",
    available: "Available",
    locked: "Locked",
  };
  const icons = {
    completed: Check,
    current: Play,
    available: Circle,
    locked: LockKeyhole,
  };
  const Icon = icons[status];
  return (
    <span className={`status-badge ${status}`}>
      <Icon aria-hidden="true" />
      {labels[status]}
    </span>
  );
}
