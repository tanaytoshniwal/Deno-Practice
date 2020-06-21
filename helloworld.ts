import { serve } from "https://deno.land/std/http/server.ts"

const app = serve({
    port: 8080,
    hostname: "127.0.0.1"
})

for await (const request of app) {
    request.respond({
        body: "Hello World! I am Deno"
    })
}