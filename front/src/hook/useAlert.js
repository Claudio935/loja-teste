import { createContext, useContext } from "react";


export const AlertContext = createContext();

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('Contexto inexistente!');
    }
    return context;
};
