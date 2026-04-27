"use client";

import { useEffect, useState } from "react";

const LocalTimeComponent = ({
  customClass,
  periodClass,
}: {
  customClass: string;
  periodClass: string;
}) => {
  const [timeData, setTimeData] = useState<{
    time: string;
    period: string;
  } | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Europe/Skopje",
      });

      const parts = formatter.formatToParts(now);

      const timeStr = parts
        .filter((p) => p.type !== "dayPeriod")
        .map((p) => p.value)
        .join("")
        .trim();

      const periodStr = parts.find((p) => p.type === "dayPeriod")?.value || "";

      setTimeData({ time: timeStr, period: periodStr });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeData) {
    return (
      <span className={customClass}>
        --:-- <span className={periodClass}>--</span>
      </span>
    );
  }

  return (
    <span className={customClass}>
      {timeData.time}
      <span className={`ml-1 ${periodClass}`}>{timeData.period}</span>
    </span>
  );
};

export default LocalTimeComponent;
