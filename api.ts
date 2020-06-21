import { Application, Router } from "https://deno.land/x/oak/mod.ts";

interface Person {
    name: string,
    age: number,
    membership: boolean
}

let people: Array<Person> = [
    {
        name: "John Doe",
        age: 21,
        membership: true
    },
    {
        name: "Jane Doe",
        age: 18,
        membership: true
    },
    {
        name: "Nibba",
        age: 14,
        membership: false
    }
]

export const getPeople = ({response} : {response: any}) => {
    response.body = people
}

export const addPeople = async (
        { request, response } : { request: any, response: any }
    ) => {
    const body = await request.body()
    const person: Person = body.value
    people.push(person)
    response.body = {
        addPerson: "SUCCESS"
    }
    response.status = 200
}

const router = new Router()
const app = new Application()
const PORT = 8080

router
    .get("/display", getPeople)
    .post("/add", addPeople)

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({
    port: PORT
})