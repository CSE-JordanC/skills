import "../css/House.css";
import housePic from "../images/house.webp";

const House = (props) => {
    return (
        <section className="house">
            <h3>{props.title}</h3>
            <img src={`https://demo-backend-0ji8.onrender.com/images/${props.img_name}`} />
        </section>
    )
};

export default House;