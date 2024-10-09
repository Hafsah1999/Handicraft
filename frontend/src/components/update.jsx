import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        pname: "",
        pdetail: "",
        image: "",
        category: "",
    });
    
    const [imagePreview, setImagePreview] = useState(""); // State for image preview

    // Hard-coded categories for dropdown
    const categories = [
        "Metalware",
        "Woodwork",
        "Pottery",
        "Jute",
        "Carpets",
        "Handmade"
    ];

    // Fetch the product data
    const fetchProductData = async () => {
        const res = await fetch(`http://localhost:5000/product/getbyid/${id}`);
        if (res.status === 200) {
            const data = await res.json();
            setProduct(data);
            setImagePreview(data.image); // Set the existing image for preview
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    // Handle file input change for image upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProduct((prevProduct) => ({
                ...prevProduct,
                image: file.name // Store the file name or file object as needed
            }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set image preview
            };
            reader.readAsDataURL(file); // Read file as Data URL
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:5000/product/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        if (res.status === 200) {
            alert("Product updated successfully!");
            navigate("/manage"); // Redirect to manage page after updating
        } else {
            alert("Failed to update product.");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="pname" className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pname"
                        name="pname"
                        value={product.pname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pdetail" className="form-label">Product Detail</label>
                    <textarea
                        className="form-control"
                        id="pdetail"
                        name="pdetail"
                        rows="3"
                        value={product.pdetail}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Product Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                    />
                    {imagePreview && (
                        <div className="mt-2">
                            <img
                                src={imagePreview}
                                alt="Product Preview"
                                className="img-thumbnail"
                                style={{ width: "200px", height: "auto" }}
                            />
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        className="form-control"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
