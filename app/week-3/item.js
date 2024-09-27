

export default function Item({name, quantity, category}){
    return (
        
        <main className="px-5">
        <div className="bg-yellow-500 px-3 py-1 rounded my-2 w-80 ">
            <h2 className="text-xl font-semibold ">{name}</h2>
            {/* <p className="text-lg">Qty: {quantity}</p>
            <p>Available in {category}</p> */}
            <p>Buy {quantity} in {category}</p>
        </div>
        </main>
    );

    
}