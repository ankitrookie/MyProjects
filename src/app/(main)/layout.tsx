import { SideBar } from "@/components/sidebar"
import React from "react"

type childrenProps = {
  children: React.ReactNode
}

export default function Layout({ children }: childrenProps) {
  return <div className="flex overflow-hidden h-screen">
    <SideBar />
    <div className="w-full">
      {children}
    </div>
  </div>
}
