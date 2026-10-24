
"use client";

import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    let refreshing = false;

    const handleControllerChange = () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    };

    navigator.serviceWorker.addEventListener(
      "controllerchange",
      handleControllerChange
    );

    const registerServiceWorker = async () => {
      try {
        const registration =
          await navigator.serviceWorker.register("/sw.js", {
            updateViaCache: "none",
          });

        // Check for a newer service worker immediately.
        await registration.update().catch(() => {});

        // Check again when the visitor returns to the website.
        const handleVisibilityChange = () => {
          if (document.visibilityState === "visible") {
            registration.update().catch(() => {});
          }
        };

        document.addEventListener(
          "visibilitychange",
          handleVisibilityChange
        );

        return () => {
          document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange
          );
        };
      } catch (error) {
        console.error("Service worker registration failed:", error);
      }
    };

    let removeVisibilityListener: (() => void) | undefined;

    registerServiceWorker().then((cleanup) => {
      removeVisibilityListener = cleanup;
    });

    return () => {
      navigator.serviceWorker.removeEventListener(
        "controllerchange",
        handleControllerChange
      );

      removeVisibilityListener?.();
    };
  }, []);

  return null;
}
