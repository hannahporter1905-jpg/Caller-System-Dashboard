"use client";

import { NotificationsProvider } from "@/lib/notificationsContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <NotificationsProvider>{children}</NotificationsProvider>;
}
