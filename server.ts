import { Elysia } from 'elysia'

const runtime = process.versions.bun ? `Bun@${process.versions.bun}` : `Node@${process.versions.node}`

const app = new Elysia()

app.get('/', () => `Nitro + Elysia Works! (Runtime: ${runtime})`)

export default app
