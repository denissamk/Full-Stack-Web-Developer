import { Suspense } from "react"

async function CatFact() {
    const res = await fetch("https://catfact.ninja/fact", { cache: "no-store" })
    const data = await res.json()
    return (
        <div>
            <p>{data.fact}</p>
            <p>Rendered at: {new Date().toISOString()}</p>
        </div>
    )
}

export default function Page() {
    return (
        <main>
            <h1>SSR (dynamic rendering)</h1>
            <Suspense fallback={<p>Loading cat fact...</p>}>
                <CatFact />
            </Suspense>
        </main>
    )
}