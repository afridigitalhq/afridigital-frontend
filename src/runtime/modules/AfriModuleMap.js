export const AFRI_MODULE_MAP = {
  afriai: () => import("../../features/afriai/index.js"),
  devops: () => import("../../features/devops/index.js"),
  commanddock: () => import("../../features/commanddock/index.js"),
  dashboard: () => import("../../features/dashboard/index.js"),
  afrivision: () => import("../../features/afrivision/index.js"),
  afrimetaworld: () => import("../../features/afrimetaworld/index.js"),
  africommerce: () => import("../../features/africommerce/index.js"),
  afriboost: () => import("../../features/afriboost/index.js"),
  africomm: () => import("../../features/africomm/index.js"),
  afrisports: () => import("../../features/afrisports/index.js"),
  devicetracking: () => import("../../features/devicetracking/index.js"),
  auth: () => import("../../features/auth/index.js"),
  identity: () => import("../../features/identity/index.js"),
  notifications: () => import("../../features/notifications/index.js"),
  storage: () => import("../../features/storage/index.js"),
  analytics: () => import("../../features/analytics/index.js")
};
