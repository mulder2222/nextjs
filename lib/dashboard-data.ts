export const healthCards = [
  {
    label: "Failed Jobs",
    value: "14",
    trend: "Down 18% from yesterday",
  },
  {
    label: "Pending Deliveries",
    value: "09",
    trend: "Stable in the last hour",
  },
  {
    label: "Failed Deliveries",
    value: "03",
    trend: "Two endpoints need attention",
  },
  {
    label: "Healthy Workflows",
    value: "28",
    trend: "Across billing, orders, and support",
  },
];

export const recentEvents = [
  {
    id: "evt-1",
    title: "Payment retry queue drained",
    meta: "2 minutes ago • jobs-worker-2",
    status: "healthy",
  },
  {
    id: "evt-2",
    title: "Webhook delivery failed for partner-b",
    meta: "11 minutes ago • order-1842",
    status: "failed",
  },
  {
    id: "evt-3",
    title: "Inventory sync still pending",
    meta: "19 minutes ago • sync-batch-99",
    status: "pending",
  },
];

export const deliveries = [
  {
    id: "wh-2041",
    target: "partner-a/orders",
    status: "delivered",
    attempts: 1,
    lastError: "None",
  },
  {
    id: "wh-2042",
    target: "partner-b/orders",
    status: "failed",
    attempts: 3,
    lastError: "504 gateway timeout",
  },
  {
    id: "wh-2043",
    target: "erp/invoices",
    status: "pending",
    attempts: 1,
    lastError: "Waiting for retry window",
  },
];
