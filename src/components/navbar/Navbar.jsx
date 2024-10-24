
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <div className="flex flex-wrap justify-between items-center py-6">
            
            <div className="text-2xl font-semibold">Recipe Calories</div>
            <div>
                <ul className="flex text-gray-600 gap-8">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>

            </div>
            <div className="flex items-center gap-3">
              <input className="bg-gray-200 rounded-full py-1 px-2 outline-none" type="text" placeholder="search" /><button className="text-3xl  bg-green-400 rounded-full"><CgProfile/> </button>

            </div>
            
        </div>
    );
};

export default Navbar;