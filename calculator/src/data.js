export const operations = [
    {
        id: 1,
        oper: "+"
    },
    {
        id: 2,
        oper: "-"
    },
    {
        id: 3,
        oper: "*"
    },
    {
        id: 4,
        oper: "/"
    },
    {
        id: 5,
        oper: "."
    },
    {
        id: 6,
        oper: "%"
    },
]

export const operation = operations.map((op)=>op.oper)

export function num(){
    const numbers = []

    for(let i=1;i<10;i++){
        numbers.push(i)
    }
    numbers.push(0)

    return numbers
}