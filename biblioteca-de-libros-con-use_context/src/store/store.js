import { createContext,useContext,useState } from "react"

const AppContext = createContext(
    {
        items:[],
        createItem: (item) => {},
        getItem: (id) => {},
        updateItem: ( item) => {},
        deleteItem: (id) => {}
    }
);

export default function Store({ children }) {
    const [items, setItems] = useState([]);

    function createItem(item) {
        const temp = [...items];
        temp.push(item);
        setItems(temp);
    }

    function getItem(id) {
        return items.find(item => item.id === id);
    }

   function updateItem(item) {
        const index = items.findIndex((i) => i.id === item.id ? item : i);
        const temp = [...items];
        temp[index] = item;
        setItems(temp);

    }

    function deleteItem(id) {
        const temp = items.filter(item => item.id !== id);
        setItems(temp);
    }

return (
    <AppContext.Provider value={{items,createItem,getItem,updateItem,deleteItem}}>{children}</AppContext.Provider>
)
}

export function useAppContext() {

    return useContext(AppContext);
}