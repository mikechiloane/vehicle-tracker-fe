import React from 'react';
import 'rsuite/Timeline/styles/index.css';


import MainLayout from "./components/Layout.tsx";

export interface Vehicle {
    id: string;
    reg: string;
}

const App: React.FC = () => {

    return (
       <MainLayout/>
    );
};


export default App;
