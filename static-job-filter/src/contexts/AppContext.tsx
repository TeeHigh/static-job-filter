import React, {createContext, useContext} from "react"
import data from "../../data.json"

console.log(typeof(data))

const dataArray: DataItemTypes[] = [...data]

interface AppProviderType{
  children: React.ReactNode,
}

interface DataItemTypes{
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]
}

interface AppContextType{
  dataArray: DataItemTypes[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

console.log(dataArray)

const initialState: {} = {
  
}

// function reducer(state, action){

// }

const AppProvider: React.FC<AppProviderType> = ({children}) =>{

  return (
    <AppContext.Provider value={{
      dataArray
    }}>
      {children}
    </AppContext.Provider>
  )
}

function useApp(){
  const context = useContext(AppContext);
  if (context === undefined){
    throw new Error("AppContext was used outside of AppProvider")
  }

  return context;
}

export {useApp, AppProvider}