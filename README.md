# Learn React Context API

Example to teach my students about React Context API Levels: [simple, full]

## Simple "basic" Level:

### Steps:
- In React project, create folder: context, then inside it, create file appContext.js
- inside appContext.js, create context called AppContext: const AppContext = createContext()
- inside appContext.js, create AppProvider arrow function
- inside AppProvider , return AppContext.Provider with value={{}} as attribute: <AppContext.Provider value={{}}></AppContext.Provider>
- inside AppProvider, create your states and functions. DON'T forget to add them in value attribute "in AppContext.Provider opening tag"
- add children props to AppProvider and to its return
- export AppProvider: export const AppProvider.....
- import and render AppProvider in index.js
- inside appContext.js "at the bottom" create custom hook called useAppContext and return useContext(AppContext) and export it: export const useAppContext = (() => {return useContext(AppContext)})
- Import and use useAppContext into desired components: const {valueName} = useAppContext() 

## Full "Intermediate" Level:

### Steps: TBC

