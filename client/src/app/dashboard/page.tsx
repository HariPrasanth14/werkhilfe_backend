"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/app/button/button";

export default function Dashboard() {
  const router = useRouter()
  const go_settings = () => {
    router.push("/dashboard/settings")
  }

  const bgColor = () => {
    router.push("/dashboard")
  }
  let [num, setNum] = useState(0)

  let incNum = ():void => {
    setNum(prev=>prev+1)
  }
  return (
    <main style={{ padding: 32 }}>
      <h1>Dashboard</h1>
      <h1>
        {num?num:"no numbers"}
      </h1>
      <Button onClick={go_settings} label="Settings"/>
      <button onClick={bgColor}>dashboard</button>
    </main>
  );
}
