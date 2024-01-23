import dynamic from "next/dynamic";
import React from "react";

const LoginStatus = dynamic(() => import("./LoginStatus"), { ssr: false });

export default function NavPages() {
  return (
    <nav>
      <div className="nav-items">
        <a href="#" className="flex items-center">
          <img src="/static/logo.svg" className="h-8 mr-3" alt="Logo" />
        </a>
        <LoginStatus />
      </div>
    </nav>
  );
}
