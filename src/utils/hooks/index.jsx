import { useState, useEffect } from "react";
import { createContext } from "react";

export function useFetch(url) {

    const [dataUser, setData] = useState({})    
    const [isLoading, setLoading] = useState(true)    
    const [error, setError] = useState(false)
    
    useEffect(() => {
    
        if (!url) return        
            setLoading(true)        
        async function fetchData() {    
            try {            
                const response = await fetch(url)                
                const data = await response.json()                
                setData(data)            
            } catch (err) {            
                console.log('========',err)                
                setError(true)            
            } finally {            
                setLoading(false)            
            }        
        }        
        fetchData()

    }, [url])
    
    return { isLoading, dataUser, error }    
}

export const MockedContext = createContext()

export function MockedProvider({children}){
    const [isMocked, setMocked] = useState(false)
    const toggleContext = () => {
        setMocked(isMocked === false ? true : false)
    }
 
    return (
        <MockedContext.Provider value={{ isMocked, toggleContext }}>
            {children}
        </MockedContext.Provider>
    )
}