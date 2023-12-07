import {  useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useState } from 'react';
const addProductSchema = Yup.object().shape({});

const Addproduct = () => {

const Navigate = useNavigate();
const [selFile, setSelFile] = useState("");

const addProductForm = useFormik ({
  initialValues : {
    pname: "",
    pdetail: "",
    image:"",
  },

  onSubmit: async (values,action) => {
    values.image = selFile;
    console.log(values);
    const res = await fetch("http://localhost:5000/product/add", {
      method: "POST" ,
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json"},
    });
    console.log(res.status);
    action.resetForm();
    if (res.status === 200) {
      Swal.fire({
        icon:"success",
        title:"Item uploaded successfully",
      });
      Navigate("/Shop")
    }
    else{
      Swal.fire({
        icon :"error",
        title:"error",
        text:"Something went wrong"
      });
    }
  },
  validationSchema : addProductSchema,

});

const uploadFile = async (e) => {
  let file = e.target.files[0];
  setSelFile(file.name);
  const fd = new FormData();
  fd.append('myfile',file);

  const res = await fetch('http://localhost:5000/util/uploadfile',{
    method: 'POST',
    body: fd
  })
  console.log(res.status);
}
  return (
    <>
      <form onSubmit={addProductForm.handleSubmit} className="mb-2 w-50 m-auto mt-5 ">
        <div className="form-group">
          <label htmlFor="pname" className="mt-5 mb-2">pname</label>
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
          <label htmlFor="imageUrl" className="mb-2"></label>
          <input
            type="file"
            name="image"
            onChange={uploadFile}
            className="form-control mb-3"
            required=''
          />
        </div>
        <div className="form-group">
          <label htmlFor="pdetail" className="mb-2">pdetail</label>
          <textarea
            name="pdetail"
            onChange={addProductForm.handleChange}
            value={addProductForm.values.pdetail}
            className="form-control mb-4"
            required=''
          />
        </div>
       
        <button type="submit" className="btn btn-primary w-25">     Add Product</button>
      
       
      </form>
    </>
  )
}


export default Addproduct