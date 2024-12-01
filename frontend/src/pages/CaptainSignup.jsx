import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
    });
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div>
      <div className="py-5 px-5 h-screen flex flex-col justify-between">
        <div>
          {" "}
          <img
            className="w-16 mb-10"
            src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png"
            alt=""
          />
          <form onSubmit={submitHandler}>
            <h3 className="text-base font-medium mb-2">What's our Captain's name</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                className="bg-[#eeeeee]  w-1/2  rounded px-4 py-2 border text-base placeholder:text-sm"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
              <input
                required
                className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
            <h3 className="text-base font-medium mb-2">What's our Captain's email</h3>
            <input
              required
              className="bg-[#eeeeee] mb-6 w-full rounded px-4 py-2 border text-base placeholder:text-sm"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
            />
            <h3 className="text-base font-medium mb-2">Enter Password</h3>

            <input
              className="bg-[#eeeeee] mb-6 w-full  rounded px-4 py-2 border  text-base placeholder:text-sm"
              required
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-[#111] mb-5  text-white rounded-lg px-4 py-2  w-full text-base placeholder:text-base">
              Create Account
            </button>
            <p className="text-center ">
              Already have a account ?
              <Link to={"/captain-login"} className="text-blue-600 ">
                {" "}
                Login here
              </Link>
            </p>
          </form>
        </div>

        <div>
          <p className=" text-sm">
            By continuing, I confirm that I have read and agree to the Terms &
            Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
