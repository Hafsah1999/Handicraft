import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductView = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]); // State for related products
  const [reviews, setReviews] = useState([]); // State for reviews
  const [rating, setRating] = useState(0); // State for rating
  const [reviewText, setReviewText] = useState(''); // State for review text

  const fetchProductData = async () => {
    const res = await fetch(`http://localhost:5000/product/getbyid/${id}`); // Fetch product by ID
    if (res.status === 200) {
      const data = await res.json();
      setProduct(data);
      fetchRelatedProducts(data.category); // Fetch related products based on the category
      fetchReviews(data._id); // Fetch reviews for the product
    }
  };

  const fetchRelatedProducts = async (category) => {
    const res = await fetch(`http://localhost:5000/product/getbycategory/${category}`); // Fetch related products
    if (res.status === 200) {
      const data = await res.json();
      setRelatedProducts(data);
    }
  };

  const fetchReviews = async (productId) => {
    const res = await fetch(`http://localhost:5000/reviews/getbyproduct/${productId}`); // Fetch reviews for the product
    if (res.status === 200) {
      const data = await res.json();
      setReviews(data);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      productId: id,
      rating,
      text: reviewText,
    };

    const res = await fetch('http://localhost:5000/reviews/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });

    if (res.status === 200) {
      alert('Review submitted successfully!');
      setReviewText(''); // Reset the review text
      fetchReviews(id); // Refresh reviews after submission
    } else {
      alert('Failed to submit review.');
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id]); // Fetch product when the component mounts or ID changes

  if (!product) {
    return <h1 className='text-center fw-bold'>Loading...</h1>; // Show loading state
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <img src={`http://localhost:5000/${product.image}`} alt={product.pname} className="img-fluid" style={{ objectFit: "cover", height: "400px" }} />
        </div>
        <div className="col-md-6">
          <h1 className='fw-bold'>{product.pname}</h1>
          <p className='text-secondary'>{product.pdetail}</p>
          <h3 className='text-success'>Price: ${product.price}</h3>
          <button className="btn btn-dark">Add to Cart</button> {/* Add your cart logic here */}
        </div>
        <div className="col-md-3">
          <h2>Related Products</h2>
          <div className="row">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct._id} >
                <div className="row my-3">
                <div className="col-md-5">
                <Link to={`/view-product/${relatedProduct._id}`}>
                  <img style={{ height: "100px" }} src={`http://localhost:5000/${relatedProduct.image}`} alt={relatedProduct.pname} className="card-img-top img-fluid" />
                  </Link>
                </div>
                <div className="col-md-7 ">
                    <h5 className="card-title">{relatedProduct.pname}</h5>
                    <h5 className="text-success">Price: ${relatedProduct.price}</h5>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products Section */}


      {/* Review Rating System */}
      <div className="mt-5">
        <h2>Reviews</h2>
        <form onSubmit={handleReviewSubmit}>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select className="form-select" value={rating} onChange={(e) => setRating(e.target.value)} required>
              <option value="">Select a rating</option>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>{star}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Review</label>
            <textarea
              className="form-control"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>

        <h3 className="mt-4">Customer Reviews</h3>
        <ul className="list-group">
          {reviews.map((review, index) => (
            <li key={index} className="list-group-item">
              <strong>{review.rating} Stars:</strong> {review.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductView;
