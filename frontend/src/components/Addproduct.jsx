import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useState } from 'react';

const addProductSchema = Yup.object().shape({
    pname: Yup.string().required("Product name is required"),
    pdetail: Yup.string().required("Product detail is required"),
    category: Yup.string().required("Category is required"),
});

const AddProduct = () => {
    const navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const addProductForm = useFormik({
        initialValues: {
            pname: "",
            pdetail: "",
            image: "",
            category: "",
        },
        onSubmit: async (values, actions) => {
            values.image = selFile;
            console.log(values);
            const res = await fetch("http://localhost:5000/product/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-Type": "application/json" },
            });
            console.log(res.status);
            actions.resetForm();
            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Item uploaded successfully",
                });
                navigate("/Shop");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong",
                });
            }
        },
        validationSchema: addProductSchema,
    });

    const uploadFile = async (e) => {
        let file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:5000/util/uploadfile', {
            method: 'POST',
            body: fd,
        });
        console.log(res.status);
    };

    // Hard-coded categories for dropdown
    const categories = [
        "Metalware",
        "Woodwork",
        "Pottery",
        "Jute",
        "Carpets"
    ];

    return (
        <>
            <form onSubmit={addProductForm.handleSubmit} className="mb-2 w-50 m-auto mt-5">
                <div className="form-group">
                    <label htmlFor="pname" className="mt-5 mb-2">Product Name</label>
                    <input
                        type="text"
                        name='pname'
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.pname}
                        className="form-control mb-3"
                        required=""
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image" className="mb-2">Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={uploadFile}
                        className="form-control mb-3"
                        required=""
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="pdetail" className="mb-2">Product Detail</label>
                    <textarea
                        name="pdetail"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.pdetail}
                        className="form-control mb-4"
                        required=""
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category" className="mb-2">Category</label>
                    <select
                        name="category"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.category}
                        className="form-control mb-4"
                        required=""
                    >
                        <option value="">Select a category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-25">Add Product</button>
            </form>
        </>
    );
}

export default AddProduct;
