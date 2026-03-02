import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <Link href="/dashboard">Dashboard</Link>
      <br />
      <Link href="/dashboard/settings">settings</Link>
      <h1>Welcome to Next.js!</h1>
      <p>This is the default starter page. Edit <code>src/app/page.tsx</code> to get started.</p>
    </main>
  );
}
