import logout from "@/app/actions/logout";
import useUser from "@/hooks/useUser";
import React from "react";
import LogoutButton from "./LogoutButton";

export default function Nav() {
  const [username] = useUser();
  return (
    <nav>
      <div className="nav-items">
        <a
          href="#"
          className="flex items-center"
        >
          <img
            src="/static/logo.svg"
            className="h-8 mr-3"
            alt="Logo"
          />
        </a>
        {username ? (
          <LogoutButton />
        ) : (
          <a
            type="button"
            href="/login"
            className="login-link"
          >
            Log In
          </a>
        )}
      </div>
    </nav>
  );
}
