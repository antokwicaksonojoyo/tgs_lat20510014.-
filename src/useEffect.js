import { useState,useEffect } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Diklik ${count} kali`;
    });

    return (
        <div>
            <h2>Kamu telah klik {count} kali</h2>
            <button onClick={() => setCount (count + 1)}>
                Klik ini
            </button>
        </div>
    );
}
export default App;