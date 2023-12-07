import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

// step4: validation schema
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required')
        .min(3, 'Too short')
        .max(20, 'Too long'),
    email: Yup.string()
        .email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Too short')
        .max(20, 'Too long')
        .required('Required'),
})


const Signup = () => {
    const navigate = useNavigate();
    //step1 : formik initialization
    const SignupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: async (values, action) => {

            console.log(values);

            const res = await fetch('http://localhost:5000/user/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            console.log(res.status)
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Success',
                    text: 'You have been successfully signed up!',
                })
                navigate('/Shop');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })

            }
        },
        validationSchema: SignupSchema
    })
    return (
        <div className="bg-img-signup">
            {/* <div className="card bg-dark bg-opacity-25" style={{height:"100vh",border:"none"}}> */}
            <div className='row '>
                <div className="col">
                    <div className="card login-card  bg-light bg-opacity-25">
                        <div className="card-header">
                            <h3 className='text-center mt-3 signup-heading'>Signup</h3>
                            <p className="text-center fs-5">Already a customer? <Link to="/Login" >Login</Link></p>

                        </div>
                        <div className="card-body">
                            {/* step3 : handling when submit */}
                            <form onSubmit={SignupForm.handleSubmit} className='w-75'>
                                {/* step2 : main form handling */}
                                <div className="form-group">

                                    <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.name && SignupForm.errors.name}</span>
                                    <input type="text" className=" input-signup text-white"
                                        placeholder="username" id="name"
                                        onChange={SignupForm.handleChange}
                                        value={SignupForm.values.name} />
                                </div>
                                <div className="form-group">

                                    <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.email && SignupForm.errors.email}</span>
                                    <input type="text" className="input-signup text-white"
                                        id="email" placeholder='email'
                                        onChange={SignupForm.handleChange}
                                        value={SignupForm.values.email} />
                                </div>
                                <div className="form-group">

                                    <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.password && SignupForm.errors.password}</span>
                                    <input type="text" className="input-signup text-white"
                                        id="password" placeholder='password'
                                        onChange={SignupForm.handleChange}
                                        value={SignupForm.values.password} />
                                </div>
                                <button type='submit' className="btn btn-primary w-100 mt-3 fs-4 p-1 mt-4 " style={{ marginLeft: "50px", borderRadius: "20px", fontFamily: "serif" }}>Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Signup