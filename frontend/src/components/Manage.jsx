import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Manage = () => {
    const [Data, setData] = useState([]);

    // User fetch function
    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/product/getall');

        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    // Delete function
    const deleteFunction = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/product/delete/' + id, { method: 'DELETE' });

        if (res.status === 200) {
            fetchUserData();
        }
    };

    // User display function
    const displayUsers = () => {
        return Data.map((obj) => (
            <tr key={obj._id} >
                 <td>
                    <img src={`http://localhost:5000/${obj.image}`} alt={obj.pname} style={{ width: '60px', height: '60px' }} />
                </td>
                <td >{obj.pname}</td>
                <td>{obj.category}</td>

                <td>{obj.pdetail}</td>
               
                <td>
                    <Link to={`/update/${obj._id}`} className="btn btn-warning me-2">Update</Link>
                    <button className="btn btn-danger" onClick={() => { deleteFunction(obj._id) }}>Delete</button>
                </td>
            </tr>
        ));
    };

    return (
        <div>
            <div className="container mt-5">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                    <tr>
                    <th>Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Product Detail</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayUsers()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage;
