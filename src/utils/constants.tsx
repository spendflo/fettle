export const Status = {
  OPERATIONAL: "operational",
  PARTIAL_OUTAGE: "partial_outage",
  OUTAGE: "outage",
  UNKNOWN: "unknown",
};

export const ServiceNameMapper: Record<string, string> = {
  Dashboard: "app.spendflo.com",
  "V2-Apis": "Spendflo API",
  "V3-Apis": "Spendflo AI",
};

export const getServiceDisplayName = (serviceName: string): string => {
  return ServiceNameMapper[serviceName] || serviceName;
};
