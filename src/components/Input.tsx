import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParts } from "../Context/SearchContext";

 


function Input(){

    const [search,setSearch] = useState<string>('');

    const { setSearchItems,setLoading } = useSearchParts();
	useEffect(()=>{
        
      const controller = new AbortController();
      const signal = controller.signal;
       const fetchSearchItems = async () => {
        setLoading(true);
      	 const res = await fetch(`https://airbus-project-server.vercel.app/search?q=${search}`,{signal});
      	 const json = await res.json();
      	setLoading(false);
           setSearchItems(json);
           console.log(json);
       }
      
       fetchSearchItems();
       
      return () => {
      	controller.abort();
        console.log('aborted');
      }

	},[search])

  return <div className="flex bg-white justify-center items-center rounded-2xl border-4 border-black md:w-[500px] w-[300px] lg:w-[600px]  shadow-black"> 
       <input type = 'text' className="text-bg-transparent text-[10px] sm:text-[16px] md:text-[20px] md:w-[500px] w-[300px] lg:w-[600px] py-2 px-4 outline-none rounded-2xl" placeholder="search the airplane parts...." 
           onChange={(e) => setSearch(e.target.value)}
       />
      <Link to="/search"> <button> <Search className="w-8 h-8 mr-4"/> </button> </Link>
   </div>
}

type IconProps = {
	className:string;
}
const Search:React.FC<IconProps> = ({className}) => {
	return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
  </svg>
}



export default memo(Input);