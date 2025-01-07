import { createRoot } from "react-dom/client";
import "./index.scss";

const myFlixApp = () => {
    return (
        <div className="myFlix" >
            <div> good morning</div>

        </div>
    );
}

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<myFlixApp />);
