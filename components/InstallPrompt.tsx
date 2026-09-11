"use client";

import { useEffect } from "react";

export default function InstallPrompt() {
  useEffect(() => {
    const handleServiceWorker = async () => {
      if (!("serviceWorker" in navigator)) {
        return;
      }

      /*
       * During development, remove any previously installed
       * service worker so it cannot serve stale Next.js files.
       */
      if (process.env.NODE_ENV !== "production") {
        try {
          const registrations =
            await navigator.serviceWorker.getRegistrations();

          for (const registration of registrations) {
            await registration.unregister();
          }

          console.log(
            "BM KONXEPT: development service workers cleared."
          );
        } catch (error) {
          console.error(
            "BM KONXEPT: failed to clear development service workers.",
            error
          );
        }

        return;
      }

      /*
       * Production:
       * Register the PWA service worker normally.
       */
      try {
        const registration = await navigator.serviceWorker.register(
          "/sw.js"
        );

        console.log(
          "BM KONXEPT service worker registered:",
          registration.scope
        );
      } catch (error) {
        console.error(
          "BM KONXEPT service worker registration failed:",
          error
        );
      }
    };

    handleServiceWorker();
  }, []);

  return null;
}