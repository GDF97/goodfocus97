import React from "react";

export default function Container({ children }) {
  return (
    <main className="w-full min-h-screen flex flex-col gap-4">{children}</main>
  );
}
