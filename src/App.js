
import './App.css';
import ToDoList from "./Components/ToDoList";

function App() {
    function getRandomBackground() {
        const names = [
            "src/Components/Styles/Assets/abstract.jpg",
            "src/Components/Styles/Assets/nature (2).jpg"
        ];
        const randomBackground = names[Math.floor(Math.random() * names.length)];
        return {
            backgroundImage: `url(${randomBackground}) no-repeat center center fixed`,
            backgroundSize: "cover",
            minHeight: "100vh",
            textAlign: "center",
        };
    }

    return (
        <div>
            <h1 className="name">To Do List</h1>
            <ToDoList />
        </div>
    );
}

export default App;
