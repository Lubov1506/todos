import { LuColumns3 } from "react-icons/lu";
import { MdOutlineTableRows } from "react-icons/md";
const ToggleVisibility = ({setVisibility}) => {
    return (
        <div className="flex gap-2  ">
            <LuColumns3 onClick={()=>setVisibility('lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ')} className="hover:text-teal-600 transition-all duration-150 ease-in-out" size={28}/>
            <MdOutlineTableRows onClick={()=>setVisibility('grid-cols-1')} className="hover:text-teal-600 transition-all duration-150 ease-in-out" size={28}/>
            
        </div>
    );
}

export default ToggleVisibility;
