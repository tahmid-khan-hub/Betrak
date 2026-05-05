import { useEffect, useState } from "react";

export default function useSessionForm<T>(key: string, defaultValue: T){
    const [state, setState] = useState<T>(() => {
        if(typeof window === "undefined") return defaultValue;
        try {
            const storedData = sessionStorage.getItem(key);
            return storedData ? (JSON.parse(storedData) as T) : defaultValue;
        } catch {
            return defaultValue;
        }
    })

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(state))
    }, [state, key]);

    const clear = () => {
        sessionStorage.removeItem(key);
        setState(defaultValue);
    }

    return [state, setState, clear] as const;
}