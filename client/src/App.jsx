import "./App.css";
import Home from "./components/Home";

function App() {
    let tracks = [
        { name: "abc1", audio: "link1" },
        { name: "abc2", audio: "link2" },
    ];

    return (
        <>
            <Home/>
            {tracks.map((track, index) => {
                return (
                    <div className="card" key={index}>
                        <p>Name:{track.name}</p>
                        <p>link:{track.audi}</p>
                    </div>
                );
            })}
        </>
    );
}

export default App;
