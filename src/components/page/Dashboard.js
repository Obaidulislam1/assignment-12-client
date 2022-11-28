import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/orders?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-3'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Name</th>
                            <th>location</th>
                            <th>number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{order.location}</td>
                                <td>{order.number}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;