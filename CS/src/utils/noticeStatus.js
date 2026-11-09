/**
 * Calculates deadline status for a notice.
 *
 * @param {Object} notice - Notice object possibly containing a `deadline` field ("YYYY-MM-DD" or null).
 * @param {Date} [now=new Date()] - Reference date (defaults to current client time).
 * @returns {{ state: "no-deadline" | "safe" | "urgent" | "expired", daysLeft: number | null }}
 */
export function getNoticeStatus(notice, now = new Date()) {
  if (!notice || !notice.deadline) {
    return { state: "no-deadline", daysLeft: null };
  }

  const deadlineStr = String(notice.deadline).trim();

  // Validate format YYYY-MM-DD
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(deadlineStr);
  if (!match) {
    if (typeof console !== "undefined" && console.warn) {
      console.warn(`[getNoticeStatus] Invalid deadline format: "${notice.deadline}". Expected "YYYY-MM-DD". Notice id: ${notice.id ?? "unknown"}`);
    }
    return { state: "no-deadline", daysLeft: null };
  }

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10) - 1; // 0-indexed
  const day = parseInt(match[3], 10);

  const deadlineDate = new Date(year, month, day);

  // Validate that parsed date matches calendar date (guards against invalid days like 2026-02-31)
  if (
    isNaN(deadlineDate.getTime()) ||
    deadlineDate.getFullYear() !== year ||
    deadlineDate.getMonth() !== month ||
    deadlineDate.getDate() !== day
  ) {
    if (typeof console !== "undefined" && console.warn) {
      console.warn(`[getNoticeStatus] Malformed/impossible calendar date: "${notice.deadline}". Notice id: ${notice.id ?? "unknown"}`);
    }
    return { state: "no-deadline", daysLeft: null };
  }

  // Local calendar comparison using midnight to midnight to avoid timezone / DST offsets
  const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const msPerDay = 1000 * 60 * 60 * 24;
  const diffTime = deadlineDate.getTime() - todayDate.getTime();
  const daysLeft = Math.round(diffTime / msPerDay);

  if (daysLeft < 0) {
    return { state: "expired", daysLeft };
  }

  // Urgent: 0 to 7 days left (including closes today)
  if (daysLeft <= 7) {
    return { state: "urgent", daysLeft };
  }

  // Safe: more than 7 days left (> 7)
  return { state: "safe", daysLeft };
}

/**
 * Returns user-friendly label for deadline status.
 *
 * @param {{ state: string, daysLeft: number | null }} status
 * @returns {string}
 */
export function formatDeadlineLabel(status) {
  if (!status || status.daysLeft === null || status.daysLeft === undefined) {
    return "";
  }

  if (status.state === "expired") {
    return "Expired";
  }

  if (status.daysLeft === 0) {
    return "Closes today";
  }

  if (status.daysLeft === 1) {
    return "Closes tomorrow";
  }

  if (status.daysLeft > 1) {
    return `Closes in ${status.daysLeft} days`;
  }

  return "Expired";
}
