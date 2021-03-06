import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const AddMyItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        swal({
            title: "Good job!",
            text: "Your Product Added",
            icon: "success",
            button: "Done",
          });
        const url=`https://gentle-dawn-71731.herokuapp.com/addmyitem`;
        fetch(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    }
    return (
        <div className='flex justify-center  items-center my-10 grid lg:grid-cols-2 px-12'>
            <div>
                <img src="https://i.ibb.co/wYwpmdF/image-2022-05-27-T19-11-16-023-Z.png" alt="" />
            </div>
            <div>
            <form className='sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl p-6 rounded-lg' id='form' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-xl font-bold'>New Products can help to grow more connection</h1>
            <small>It's time to launch a powerfull Product</small>
            <input type="text" name='name' placeholder="Product name" className="input input-bordered w-full mt-3" {...register("name")} />
            <input type="text" name='imgLink' placeholder="Image link" className="input input-bordered w-full my-6" {...register("img")}/>
            <input type="number" name='minimum' placeholder="Minimum order" className="input input-bordered w-full mb-3" {...register("minimum-quantity")} />
            <input type="number" name='available' placeholder="Available products" className="input input-bordered w-full mb-3" {...register("quantity")} />
            <input type="number" name='price' placeholder="Price" className="input input-bordered w-full mb-3" {...register('price')} />
            <textarea type="text" name='description' placeholder="Description" className="textarea textarea-bordered w-full mb-3" {...register('short_description')}/>
            <input type="submit" value="Add Products" className='btn bg-primary font-bold border-none w-full text-white'/>
            </form>
            </div>
            
        </div>
    );
};

export default AddMyItem;