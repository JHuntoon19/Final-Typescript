import Restuarant from "./Restuarant";
interface fastfoodProps {
    id: number
}
export default function FastFood({id}: fastfoodProps){

    return(
        <>
            <p>Fast Food Logo</p>
            <Restuarant id={id} />
            <div className="btn-container">
                <button>Love</button>
                <button>Hate</button>
            </div>
        </>
    )
}