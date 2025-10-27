import { Hono } from "hono"

const app = new Hono()

const runtime = process.versions.bun ? `Bun@${process.versions.bun}` : `Node@${process.versions.node}`

app.get("/", (c) => {
  return c.text(`Hello Nitro with Hono! (Runtime: ${runtime})`)
})

export default app
