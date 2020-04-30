import clsx from "clsx";
import React from "react";

interface Props {
  error: boolean;
}

export default function ContactMessage({ error }: Props) {
  return (
    <div className={clsx("contact-modal")}>
      <h3 className="message-title">
        {error
          ? "Erreur lors de l'envoi, vérifiez les informations fournies"
          : "Message Envoyé"}
      </h3>
      {!error && (
        <img
          src={require("../static/assets/images/Flat_tick_icon.svg.png")}
          className="message-icon"
        />
      )}
      {error && (
        <img
          src={require("../static/assets/images/cross-icon-png-1.png")}
          className="message-icon"
        />
      )}
    </div>
  );
}
