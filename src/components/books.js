import stari from "../assets/stari.jpg";
import factotum from "../assets/factotum.jpg";
import haripoter from "../assets/haripoter.jpg";
import podzemlje from "../assets/podzemlje.jpg";
import zlocinikazna from "../assets/zlocinikazna.jpg";
import BuyBook from "./buyBook";
import { useRef, useState } from "react";

function Books(){

    const [bookName, setBookName] = useState("");
    const [bookPrice, setBookPrice] = useState("");
    const [bookImg, setBookImg] = useState("");
    const [checkoutVisibility, setCheckoutVisibility] = useState(false);

    const checkoutRef = useRef(null);

    const handlePurchase = (e) => {
        setBookImg(e.target.src);
        setBookName(e.target.name);
        setBookPrice(e.target.alt);
        setCheckoutVisibility(true);
        checkoutRef.current.scrollIntoView();  
    }

    return(
        <div>
            <div className="my-12 flex flex-col items-center h-auto books-margin bg-gradient-to-r from-gray-100 to-gray-300 shadow-2xl">
                <div className="flex flex-col md:flex-row gap-12 my-8">
                    <img onClick={handlePurchase} loading="lazy" src={stari} alt="39,90" name="Diary of a dirty old man" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={factotum} alt="factotum" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={haripoter} alt="haripoter" className="book shadow-2xl transform -skew-y-6"></img>
                </div>
                <div className="flex  flex-col md:flex-row gap-12 my-8">
                    <img onClick={handlePurchase} loading="lazy" src={podzemlje} alt="podzemlje" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={zlocinikazna} alt="zlocinikazna" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={stari} alt="stari" className="book shadow-2xl transform -skew-y-6"></img>
                </div>
                <div className="flex  flex-col md:flex-row gap-12 my-8">
                    <img onClick={handlePurchase} loading="lazy" src={stari} alt="stari" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={factotum} alt="factotum" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={haripoter} alt="haripoter" className="book shadow-2xl transform -skew-y-6"></img>
                </div>
                <div className="flex  flex-col md:flex-row gap-12 my-8">
                    <img onClick={handlePurchase} loading="lazy" src={stari} alt="stari" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={factotum} alt="factotum" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={haripoter} alt="haripoter" className="book shadow-2xl transform -skew-y-6"></img>
                </div>
            </div>

            <BuyBook bookName={bookName} bookPrice={bookPrice} bookImg={bookImg} isVisible= {checkoutVisibility}></BuyBook>
            <div ref={checkoutRef}></div>


        </div>
    )
}

export default Books;