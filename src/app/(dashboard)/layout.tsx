"use client";

import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-16 md:w-64 bg-white shadow-2xl p-4 flex-shrink-0 overflow-hidden">
        <Link href="/" className="flex items-center justify-center md:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width="32" height="32" />
          <span className="hidden md:block font-bold">SchoolLama</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="flex-1 bg-[#F7F8FA] overflow-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}