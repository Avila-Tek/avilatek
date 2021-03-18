import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light-blue w-full px-6 md:px-10 lg:px-20 py-2">
      <p>asdasdasd</p>
      <hr className="w-full my-4 border-medium-blue" />
      <p className="text-xs lg:text-sm my-2">
        &copy; {new Date().getFullYear()} Avila Tek. Todos los derechos
        reservados
      </p>
    </footer>
  );
}
