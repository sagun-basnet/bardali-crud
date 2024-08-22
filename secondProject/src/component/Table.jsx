import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Table = () => {
  const [data, setData] = useState([]);
  // console.log(data)


  // wait for the data and go in the next line of code
  const fetchData = async () => {
    await axios.get("http://localhost:5500/api/getAllUsers")
      .then((res) => {

        //storing the data in res.data
        setData(res.data)
      })

      .catch((err) => {
        console.log(err)
      })

  }

  // using [] helps in getting only one data instead of infinite
  useEffect(() => {
    fetchData()
  }, [data])


  const handleDelete = (id) => {
    axios.delete(`http://localhost:5500/api/deleteUser/${id}`).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div className='w-full'>
      <div className="flex justify-end">
        <Link to='/add'>
          <button className='p-2 px-4 bg-blue-400 rounded-md'>Add</button>
        </Link>
      </div>

      <table className='w-full mt-8'>
        <thead>
          <tr>
            <th className='border-2 border-black'>Name</th>
            <th className='border-2 border-black'>Email</th>
            <th className='border-2 border-black'>Password</th>
            <th className='border-2 border-black'>Address</th>
            <th className='border-2 border-black'>Phone</th>
            <th className='border-2 border-black'>Hobby</th>
            <th className='border-2 border-black'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='border-2 border-black'>{item.name}</td>
              <td className='border-2 border-black'>{item.email}</td>
              <td className='border-2 border-black'>{item.password}</td>
              <td className='border-2 border-black'>{item.address}</td>
              <td className='border-2 border-black'>{item.phone}</td>
              <td className='border-2 border-black'>{item.hobby}</td>
              <td className='border-2 border-black flex items-center justify-center gap-4'>
                <Link to={`update/${item.id}`}>
                  <button className='bg-green-400 p-2 px-4 rounded-md' >Update</button>
                </Link>
                <button className='bg-red-400 p-2 px-4 rounded-md' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>))}
        </tbody>
      </table>

    </div>
  )
}

export default Table
