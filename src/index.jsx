import { createRoot } from "react-dom/client";
import "./index.scss";
import { MainView } from "./components/Main-View/Main-View.jsx";
const MyFlixApp = () => {
    return (

        <MainView />

    );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(< MyFlixApp />);
