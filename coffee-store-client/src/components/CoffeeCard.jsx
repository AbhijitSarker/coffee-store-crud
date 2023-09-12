import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, url } = coffee;

    const handleDelete = (_id) => {
        // console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
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
                        <button className="btn btn-primary w-full bg-green-500">View</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn btn-primary w-full">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary w-full bg-orange-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;