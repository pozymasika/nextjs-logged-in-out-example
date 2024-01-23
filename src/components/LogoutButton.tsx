"use client";

import logout from "@/app/actions/logout";

export default function LogoutButton() {
  return (
    <button
      type="button"
      className="logout-link"
      onClick={async () => {
        logout();
      }}
    >
      Log Out
    </button>
  );
}
