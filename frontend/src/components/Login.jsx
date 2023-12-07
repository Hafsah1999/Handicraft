


    
    import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Required').min(3, 'Too short')
        .max(20, 'Too long'),
    email: Yup.string().required('Required').email('Invalid email'),
    password: Yup.string().required('Required').min(6, 'Too short').max(12, "Too Long")
})



const Login = () => {
    const navigate = useNavigate();


    const loginForm = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },

        onSubmit: (values) => {
            console.log(values)
            navigate('/Shop');

        },

        validationSchema: LoginSchema

    })
    return (
        <div>

            <div className="bg-img-signup">
                {/* <div className="card  bg-dark bg-opacity-25" style={{height:"100vh",border:"none"}}> */}

                <div className="row">
                    <div className="col">
                        <div className="card login-card bg-light bg-opacity-25  ">

                            <h1 className="text-center mt-5 signup-heading">Welcome Back</h1>



                            <div className="card-body">
                                <form className='w-75 ' onSubmit={loginForm.handleSubmit}>
                                <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{loginForm.touched.username && loginForm.errors.username}</span>
                                    <input type="text" placeholder="username" className="input-signup text-white " id="username" value={loginForm.values.username} onChange={loginForm.handleChange} />
                                    <span style={{ color: 'red', fontsize: '10' }}>{loginForm.touched.email && loginForm.errors.email}</span>

                                    <input type="email" placeholder="email" className="input-signup text-white " id="email" value={loginForm.values.email} onChange={loginForm.handleChange} />
                                    <span style={{ color: 'red', fontsize: '10',  }}>{loginForm.touched.password && loginForm.errors.password}</span>
                                  
                                    <input type="password" placeholder="password" className="input-signup text-white" id="password" value={loginForm.values.password} onChange={loginForm.handleChange} />

                                     <button className="btn btn-primary w-100   mt-4 fs-5 p-1  " style={{ marginLeft: '50px', borderRadius: "20px", fontFamily: "serif" }}>Log In</button>
                                 

                                </form>
                            </div>



                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
    


