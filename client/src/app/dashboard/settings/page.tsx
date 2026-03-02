"use client"
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter()

  const back = () => {
    router.push('/dashboard')
  }
  return (
    <main style={{ padding: 32 }}>
      <h1>settings</h1>
      <button onClick={back}>Back</button>
     </main>
  );
}
