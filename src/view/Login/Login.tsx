import { signInWithGoogle } from '../../Firebase';
import NavbarLoginPage from './Navbar';
import pic from './../../pic.jpg'

export default function Login() {

    const handleClick = () => {
        signInWithGoogle();
    }
    return (
        <>

            <NavbarLoginPage />
            <div
                className="d-flex align-items-center "
                style={{ minHeight: "100vh" }}
            >
                <div className="container-fluid">
                    <div className="row justify-content-center">

                        <div className="col-12 col-md-6 col-lg-6 col-xl-6  px-xl-6 my-5 ">
                            <p className="fw-bold fs-larger fs-3 mb-5">
                                Welcome Back to <br />
                                Skrate!!
                            </p>
                            <div className='mx-xl-6 mt-5 d-flex align-items-center justify-content-center'>
                                <div className="btn btn-primary  mr-3" onClick={handleClick}>
                                    Sign in with google
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-none d-lg-block">
                            <div className="text-center">
                                <img src={pic} alt="..." className="img-fluid" style={{ height: '600px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}