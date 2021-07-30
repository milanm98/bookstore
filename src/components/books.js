import stari from "../assets/stari.jpg";
import factotum from "../assets/factotum.jpg";
import haripoter from "../assets/haripoter.jpg";
import podzemlje from "../assets/podzemlje.jpg";
import zlocinikazna from "../assets/zlocinikazna.jpg";

function Books(){
    return(
        <div className="my-12 flex flex-col items-center h-auto books-margin bg-gradient-to-r from-gray-100 to-gray-300 shadow-2xl">
            <div className="flex flex-row gap-12 my-8">
                <img loading="lazy" src={stari} alt="stari" className="book shadow-2xl"></img>
                <img loading="lazy" src={factotum} alt="factotum" className="book shadow-2xl"></img>
                <img loading="lazy" src={haripoter} alt="haripoter" className="book shadow-2xl"></img>
            </div>
            <div className="flex flex-row gap-12 my-8">
                <img loading="lazy" src={podzemlje} alt="podzemlje" className="book shadow-2xl"></img>
                <img loading="lazy" src={zlocinikazna} alt="zlocinikazna" className="book shadow-2xl"></img>
                <img loading="lazy" src={stari} alt="stari" className="book shadow-2xl"></img>
            </div>
            <div className="flex flex-row gap-12 my-8">
                <img loading="lazy" src={stari} alt="stari" className="book shadow-2xl"></img>
                <img loading="lazy" src={factotum} alt="factotum" className="book shadow-2xl"></img>
                <img loading="lazy" src={haripoter} alt="haripoter" className="book shadow-2xl"></img>
            </div>
            <div className="flex flex-row gap-12 my-8">
                <img loading="lazy" src={stari} alt="stari" className="book shadow-2xl"></img>
                <img loading="lazy" src={factotum} alt="factotum" className="book shadow-2xl"></img>
                <img loading="lazy" src={haripoter} alt="haripoter" className="book shadow-2xl"></img>
            </div>
        </div>
    )
}

export default Books;