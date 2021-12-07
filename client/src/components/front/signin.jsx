import { useState } from "react";
import { Link } from "react-router-dom";


const SignIn = () => {

    const [user, setUser] = useState({
        userid: '', password: ''
    });

    let check = false;

    const handleChange = (e) => {
        //e.preventDefault();
        const target = e.target;
        console.log(e.target);

        if (target.id === "inputEmail")
            user.userid = target.value;
        if (target.id === "inputPassword")
            user.password = target.value;


        console.log(user);
    }


    const isLoggedIn = () => {
        if (user.userid == 'suzuka@gmail.com' && user.password == "sue") {
            <Link to="/admin"></Link>
        } else {
            <Link to="/signin"></Link>
        }
    }

    return (

        <div className="d-flex justify-content-center align-items-center container ">
            <form>
                <h3 className="display-5 text-center p-1">Sign In</h3>
                <div className="row mb-3">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label mx-3">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" name="inputEmail" id="inputEmail" placeholder="Email" onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label mx-3">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" name="inputPassword" id="inputPassword" placeholder="Password" onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-4">
                        <button type="submit" className="btn btn-primary" onClick={isLoggedIn()}>Sign in</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;