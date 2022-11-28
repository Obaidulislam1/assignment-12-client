import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {
    const {data: allUser = [], refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUser');
            const data = await res.json();
            return data;
        }
    })
    const handleAdmin = id =>{
      fetch(`http://localhost:5000/allUser/admin/${id}`, {
        method: 'PUT',
      })
      .then(res => res.json())  
      .then(data => {
        if(data.modifiedCount > 0){
            toast.success('Make admin successfully');
            refetch();
        }
        console.log(data)
      })
    }
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>All user</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        allUser.map((user, i) =>  <tr key={user._id}>
                            <th>{i+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{
                                user?.role !== 'admin' &&
                                <button onClick={() =>handleAdmin(user._id)} className="btn btn-xs btn-active btn-ghost">Make Admin</button>}</td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;