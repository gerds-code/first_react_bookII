import React from "react";

export default function Greeter(props) {
  const [greeting, setGreeting] = React.useState("");
  function handleGreetClick() {
    alert(`Hello, ${greeting}`);
  }

  const charsRemaining = props.maxLength - greeting.length;
  const greetingInvalid = greeting.length === 0 || charsRemaining < 0;

  return (
    <div>
      Greeting:
      <input value={greeting} onChange={(e) => setGreeting(e.target.value)} />
      <span>{charsRemaining}</span>
      <button disabled={greetingInvalid} onClick={handleGreetClick}>
        Greet
      </button>
    </div>
  );
}
