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

        setTimeout(() => {
            checkoutRef.current.scrollIntoView({ behavior: 'smooth' });  
        },500);
       
    }

    return(
        <div>
            <div className="my-12 flex flex-col items-center h-auto books-margin bg-gradient-to-r from-gray-100 to-gray-300 shadow-2xl">
                <div className="flex flex-col md:flex-row gap-12 my-8">
                    <img onClick={handlePurchase} loading="lazy" src={stari} alt="39,90" name="Notes of a dirty old man" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={factotum} alt="59,90" name="Factotum" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={haripoter} alt="49,90" name="Harry Poter" className="book shadow-2xl transform -skew-y-6"></img>
                </div>
                <div className="flex  flex-col md:flex-row gap-12 my-8">
                    <img onClick={handlePurchase} loading="lazy" src={podzemlje} alt="39,90" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={zlocinikazna} alt="39,90" name="Crime and punishment" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={stari} alt="39,90" name="Notes of a dirty old man" className="book shadow-2xl transform -skew-y-6"></img>
                </div>
                <div className="flex  flex-col md:flex-row gap-12 my-8">
                    <img onClick={handlePurchase} loading="lazy" src={stari} alt="39,90" name="Notes of a dirty old man" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={factotum} alt="39,90" name="Factotum" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={haripoter} alt="39,90" name="Hari Poter" className="book shadow-2xl transform -skew-y-6"></img>
                </div>
                <div className="flex  flex-col md:flex-row gap-12 my-8">
                    <img onClick={handlePurchase} loading="lazy" src={stari} alt="39,90" name="Notes of a dirty old man" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={factotum} alt="39,90" name="Factotum" className="book shadow-2xl transform -skew-y-6"></img>
                    <img onClick={handlePurchase} loading="lazy" src={haripoter} alt="39,90" name="Hari Poter" className="book shadow-2xl transform -skew-y-6"></img>
                </div>
            </div>

            <BuyBook bookName={bookName} bookPrice={bookPrice} bookImg={bookImg} isVisible= {checkoutVisibility}></BuyBook>
            <div ref={checkoutRef}></div>


        </div>
    )
}

export default Books;