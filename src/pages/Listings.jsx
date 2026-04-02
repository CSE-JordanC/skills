import {useState, useEffect} from "react";
import axios from "axios";
import House from "../components/House";

const Listings = () => {
    const [houses, setHouses] = useState(["a", "b", "c", "d"]);

    //after the page has loaded
    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("https://demo-backend-0ji8.onrender.com/api/skills");
            setHouses(response.data);
        };

        loadHouses();
    },[]);

    return (
        <main id="listings" className="main-content">
            <h2>Listings</h2>
            <div id="houses" className="columns">
                {houses.map((house)=>(
                    <House 
                    key={house._id}
                    _id={house._id}
                    title={house.category}
                    img_name={house.img_name}/>
                ))}
            </div>
        </main>
    );
};

export default Listings;