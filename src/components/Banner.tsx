import React from "react";
import Button from '../components/ui/Button';
import AtTheOffice from "../assets/illustrations/on-the-office-animate.svg";

export default function Banner() {
  return (
    <div className="bg-light-blue pt-10 min-h-screen relative flex gap-16">
      <div>
        <h1>Frase con palabra que cambia</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit
          id hac.{" "}
        </p>
        <Button
          type="button"
          onClick={() => {
            console.log("conoci mas");
          }}
        >
          Conoce más
        </Button>
      </div>
      <img
        src={AtTheOffice}
        alt="at the office illustration"
        className="w-4/12"
      />
    </div>
  );
}
