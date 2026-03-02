"use client"
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter()
  const go_settings = () => {
    router.push("/dashboard/settings")
  }
  return (
    <main style={{ padding: 32 }}>
      <h1>Dashboard</h1>
      <button onClick={go_settings}>settings</button>
     </main>
  );
}
