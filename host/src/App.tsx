import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import Account from 'remote/Account';

import "./index.scss";

const App = () => (
        <main className="mt-10 text-3xl mx-auto max-w-6xl">
                <Header />
                <div>Name: host</div>
                <Account/>
                <Footer />
        </main>
);
ReactDOM.render(<App />, document.getElementById("app"));
