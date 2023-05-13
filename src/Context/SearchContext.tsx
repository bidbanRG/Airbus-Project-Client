import { ReactNode, createContext, useContext, useState } from "react";
import { SearchItem } from "../Types";

type SearchContextType = {
   data:SearchItem[];
   pageNumber:number;
   setSearchItems?:React.Dispatch<React.SetStateAction<SearchItem[]>>
   setPageNumber?:React.Dispatch<React.SetStateAction<number>>
   loading:boolean;
   setLoading?:React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchContext = createContext<SearchContextType>({data:[],pageNumber:1,loading:false});

export function useSearchParts(){
	return useContext(SearchContext);
}

export default function SearchContextProvider({children}:{children:ReactNode}){

 const [searchItems,setSearchItems] = useState<SearchItem[]>([]);
 const [pageNumber,setPageNumber] = useState<number>(1);
 const [loading,setLoading] = useState(false);
	return (
     <SearchContext.Provider value={{pageNumber,setPageNumber,setSearchItems,data:searchItems,loading,setLoading}}>
        {children}
     </SearchContext.Provider>
	)
}