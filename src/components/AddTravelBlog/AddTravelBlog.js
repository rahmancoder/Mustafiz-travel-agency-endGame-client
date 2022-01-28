import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddTravelBlog.css';

const AddTravelBlog = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        // axios.post('http://localhost:5000/blog', data)
        axios.post('https://frightening-spell-88460.herokuapp.com/blog', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }



    return (
        <div>
            <h3 className="text-warning">Let's Add a Travel Blog!!</h3>


            <div className="add-blog">
                <h2 className="text-warning">Please Add a Travel Blog</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ height: '10vh' }} {...register("name", { required: true, maxLength: 20 })} placeholder="Travel Blog Name" />
                    <textarea style={{ height: '10vh' }} {...register("description")} placeholder="Travel Description and Information" />
                    <input style={{ height: '5vh' }} type="number" {...register("price")} placeholder="Travel Cost" />
                    <input style={{ height: '5vh' }} {...register("img")} placeholder="Travel image url" />
                    <input style={{ height: '5vh' }} {...register("status")} placeholder="Destination image url" defaultValue="pending" />

                    <input type="submit" />
                </form>
            </div>


        </div>
    );
};

export default AddTravelBlog;