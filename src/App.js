import {useState} from "react";

function App() {
    const [likes, setLikes] = useState(0);
    const [inputValue, setInputValue] = useState(' ');

    function decrement() {
        setLikes(likes + 1)
    }

    function increment() {
        setLikes(likes - 1)
    }

    return (
        <div>
            <h1>{likes}</h1>
            <h1>{inputValue}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <input onChange={(event) => setInputValue(event.target.value)}/>
        </div>
    );
}

export default App;
