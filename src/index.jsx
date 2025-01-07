import { createRoot } from "react-dom/client";
import "./index.scss";

const MyFlixApp = () => {
    return (
        <div className="MyFlix" >
            <div> good morning</div>

        </div>
    );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(< MyFlixApp />);
