import { useEffect, useRef, useState } from "react";

function BuyBook(props){

    const [checkout, setCheckout] = useState(false);
    const checkoutRef = useRef(null);

    const handleCheckout = () => {
        setCheckout(true);
        setTimeout(() => {
            checkoutRef.current.scrollIntoView({ behavior: 'smooth' });
        },500);
    }

    useEffect(() => {
        
    },[])

    return(
        <div>
            <div className={props.isVisible ? "visible flex flex-col justify-center items-center w-full h-auto my-12 shadow-2xl" : "hidden"}>
                <h1 className="font-black font-sans shadow-2xl my-8">Confirm checkout</h1>
                <img loading="lazy" src={props.bookImg} className="book" alt="checkout Book Img"></img>
                <h2 className="font-black font-sans text-sm md:text-2xl shadow-2xl my-2 mt-10">Book name : {props.bookName}</h2>
                <h3 className="font-black font-sans text-xl md:text-3xl shadow-2xl mb-2">Price : {props.bookPrice}</h3>
                <button onClick={handleCheckout} className="p-7 font-black font-sans text-xl md:text-3xl shadow-2xl mb-10 border border-blue-900 rounded-full mt-10">Proceed</button>
            </div>
            <form className={checkout ? "flex flex-col justify-center items-center shadow-2xl text-xl md:text-2xl my-12" : "hidden"}>
                <h1 className="font-black text-2xl my-10">Enter your info below :</h1>
                <input required type="text" placeholder="enter your name" className="text-center border border-2xl border-blue-900 my-5"></input>
                <input required type="text" placeholder="enter your surname" className="text-center border border-2xl border-blue-900 my-5"></input>
                <input required type="text" placeholder="enter your adress" className="text-center border border-2xl border-blue-900 my-5"></input>
                <input required type="text" placeholder="enter your phone" className="text-center border border-2xl border-blue-900 my-5"></input>
                <button onClick={() => alert("Successfull, you should get your book in next 2-3 days, thanks for buying")} className="p-7 font-black font-sans text-xl md:text-3xl shadow-2xl mb-10 border border-blue-900 rounded-full mt-10">Submit</button>
            </form>
            <div ref={checkoutRef}></div>
        </div>
        

    )
}


export default BuyBook;