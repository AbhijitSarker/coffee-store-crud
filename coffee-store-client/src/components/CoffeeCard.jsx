import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, details, url } = coffee;
    return (
        <div className='bg-[#f4f3f0] rounded-xl text-black'>
            <div className="card card-side shadow-xl">
                <figure><img className='ml-5' src={url} alt="Movie" /></figure>
                <div className="card-body flex flex-col lg:flex-row  justify-between">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                        <p>{category}</p>
                    </div>
                    <div className="card-actions flex flex-col justify-between">
                        <button className="btn btn-primary w-full">View</button>
                        <button className="btn btn-primary w-full">Edit</button>
                        <button className="btn btn-primary w-full">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;