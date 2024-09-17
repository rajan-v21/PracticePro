"use client";

import { useState } from "react";
import "./globals.css";
import SideNav from '@/app/sidenav';
import Home from '@/app/page';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav onSelectUser={setSelectedUser} />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            <Home selectedUser={selectedUser} />
          </div>
        </div>
      </body>
    </html>
  );
}
