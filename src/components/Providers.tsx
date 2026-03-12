"use client";

import { NotificationsProvider } from "@/lib/notificationsContext";
import { ToastProvider } from "@/lib/toastContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NotificationsProvider>
      <ToastProvider>{children}</ToastProvider>
    </NotificationsProvider>
  );
}
