import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)

        // post request using axios
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add__service">
            <h2>Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;