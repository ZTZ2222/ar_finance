import Link from "next/link"

export default function Home() {
  return (
    <main className="container">
      <h1 className="my-10 text-center text-3xl font-bold">Home Page</h1>
      <Link href="/login">Login</Link>
    </main>
  )
}
