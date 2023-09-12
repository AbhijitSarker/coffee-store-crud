import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const url = form.url.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, url }
        console.log(newCoffee);
        // form.reset()

        //send data to server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="bg-[#f4f3f0] p-24">
            <h1 className='text-5xl text-purple-600 font-extrabold'>Coffee Maker</h1>

            <form action="" onSubmit={handleAddCoffee}>

                {/* row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black ">Your Coffee</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Coffee Name"
                                className="input input-bordered bg-white text-black w-full"
                                name="name"
                            />
                        </label>
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Available Quantity"
                                className="input input-bordered bg-white text-black w-full"
                                name="quantity"
                            />
                        </label>
                    </div>
                </div>

                {/* row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black ">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Supplier Name"
                                className="input input-bordered bg-white text-black w-full"
                                name="supplier"
                            />
                        </label>
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Taste</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Taste Name"
                                className="input input-bordered bg-white text-black w-full"
                                name="taste"
                            />
                        </label>
                    </div>
                </div>
                {/* row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black ">Category</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Category Name"
                                className="input input-bordered bg-white text-black w-full"
                                name="category"
                            />
                        </label>
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Details</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Details"
                                className="input input-bordered bg-white text-black w-full"
                                name="details"
                            />
                        </label>
                    </div>
                </div>

                {/* row */}
                <div className="form-control w-full mb-8">
                    <label className="label">
                        <span className="label-text text-black">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered bg-white text-black w-full"
                            name="url"
                        />
                    </label>
                </div>


                <input type="submit" className="btn btn-neutral w-full" />
            </form>
        </div>


    )
};

export default AddCoffee;