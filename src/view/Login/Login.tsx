import NavbarLoginPage from './Navbar';
import pic from './../../pic.jpg'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInAnonymously, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { firebaseConfig } from '../../Firebase';
import { useEffect } from 'react';
import Auth from '../../Auth';

export default function Login() {

    const navigate = useNavigate();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleClick = async () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                localStorage.setItem('uid', res.user.uid);
                Auth.authnticate();
                navigate('/dashboard');
            })
            .catch((err) => {
                console.error(err);
            })
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