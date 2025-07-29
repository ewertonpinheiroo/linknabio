"use client";

import { useEffect } from "react";

export default function AbrirWhatsapp() {
  useEffect(() => {
    const url = "https://api.whatsapp.com/send/?phone=5592993669080&text&type=phone_number&app_absent=0";

    const win = window.open(url, "_blank", "noopener,noreferrer,width=800,height=600");

    if (!win) {
      window.location.href = url;
    }
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        fontFamily: "sans-serif",
        color: "#462209",
      }}
    >
      Redirecionando para o WhatsApp...
    </div>
  );
}
