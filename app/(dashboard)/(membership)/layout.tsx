"use client";

import React from "react";
import { usePathname } from "next/navigation";
import DashboardNavbar from "../_components/dashboard-navbar";
import Footer from "@/components/common/footer";

export default function MembershipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMainDashboard = pathname === "/dashboard" || pathname === "/dashboard/";
  const isLeaderboard = pathname.startsWith("/leaderboard");
  const isReferrals = pathname.startsWith("/referrals");
  const isPrivacy = pathname.includes("privacy-policy");
  const isTerms = pathname.includes("term-and-condition");
  const isManifesto = pathname.includes("manifesto");
  const showNavbar = !isMainDashboard && !isLeaderboard && !isReferrals && !isPrivacy && !isTerms && !isManifesto;

  return (
    <div className="min-h-screen w-full relative">
      {showNavbar && <DashboardNavbar />}
      {children}
      <Footer />
    </div>
  );
}
