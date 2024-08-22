import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        hobby: '',
        address: ''
    });
    console.log(formData, 11);

    const fetchData = async () => {
        await axios.get(`http://localhost:5500/api/getSingleUser/${id}`).then((res) => {
            setFormData(res.data);
        }).catch((err) => {
            console.log("ERROR: ", err);

        })
    }

    useEffect(() => {
        fetchData();
    }, [id])

  



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5500/api/updateUser/${id}`, formData).then((res) => {
            console.log(res.data);
            navigate('/');
        })
            .catch((err) => {
                console.log("ERROR: ", err);
            })
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md border border-gray-300">
            <h2 className="text-2xl font-bold mb-4 text-center">Update User</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="hobby"
                    placeholder="Hobby"
                    value={formData.hobby}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Update User
                </button>
            </form>
        </div>
    );
};

export default UpdateUser;


