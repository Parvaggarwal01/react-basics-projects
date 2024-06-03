import { useEffect, useState } from "react"

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("Render");
  })
  //Log the textRender each time the component re-renders

  useEffect(() => {
    console.log("Hi");

    return () => {
        console.log("Bye");
    }
  }, [])
  //Log text Hi when the component mounts
  //Log the text Bye when the component unmounts

  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age])
  //Log the text My name is {name} and I am {age} years old whenever the name or age changes

  useEffect(() => {
    document.title = name

    const timeout = setTimeout(() => {
        console.log(`My name is ${name}`);
    }, 1000)

    return () => {
        clearTimeout(timeout)
    }
  }, [name])
  //Updating the title to be equal to name whenever the name changes
  //Log the text My name is {name} only after there has been a 1 second delay since the last time the name was changed.

  

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(a => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge(a => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}