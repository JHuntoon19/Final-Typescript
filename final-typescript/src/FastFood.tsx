import Restuarant from "./Restuarant";
import McDonalds from "./Images/McDonalds.png";
import TacoBell from "./Images/Taco Bell.png";
import Wendys from "./Images/Wendys.png";
import Culvers from "./Images/Culvers.png";
import Runza from "./Images/Runza.png";
import Arbys from "./Images/Arbys.png";
interface fastfoodProps {
    id: number
}
export default function FastFood({id}: fastfoodProps){
    let photo : string = "";
    switch(id){
        case 1:
            photo = McDonalds;
            break;
        case 2:
            photo = TacoBell;
            break;
        case 3:
            photo = Wendys;
            break;
        case 4:
            photo = Culvers;
            break;
        case 5:
            photo = Runza;
            break;
        case 6:
            photo = Arbys;
    }
    function increaseLove(){
        console.log("Love increase");
    }
    function increaseHate(){
        console.log("Hate increased");
    }
    return(
        <>
        
            <img src={photo}></img>
            <Restuarant id={id} />
            <div className="btn-container">
                <button onClick={increaseLove}>Love</button>
                <button onClick={increaseHate}>Hate</button>
            </div>
        </>
    )
}