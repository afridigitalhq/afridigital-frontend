import React from "react";
import { NotificationProvider } from "../commanddock/notifications";

export default function ShellProvider({ children }) {
  return (
    <NotificationProvider>
      {children}
    </NotificationProvider>
  );
}
