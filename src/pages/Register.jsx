import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo_paw.png";
import SoundBar from "../component/SoundBar";
import RegisterLogo from "../assets/images/register_paw.png";
import GoogleLogo from "../assets/images/google_paw.png";
import TwitterLogo from "../assets/images/twitter_paw.png";
import FacebookLogo from "../assets/images/facebook_paw.png";
import SocialMediaButton from "../component/SocialMediaButton";
import FormField from "../component/FormField";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password || !repeatPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "https://auths-backend.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            email: email,
            password: password,
          }),
        }
      );

      console.log("Status:", response.status);

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Error response:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json() // Ambil respons JSON
      console.log("Response data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-w-[100vw] min-h-[100vh] flex flex-col items-center px-[6vw] md:px-[4vw] lg:px-[5vw] py-[5vh] bg-[#100424] font-jakarta">
      {/* Navbar */}
      <div className="w-full h-[6vh] flex justify-between items-center mb-[4vh]">
        <button
          className="flex gap-3 items-center justify-center"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="app_logo" width={30} height={30} />
          <h2 className="text-2xl md:text-3xl text-white">Melodify</h2>
        </button>
        <div className="flex items-center gap-1 md:gap-4 lg:gap-6">
          <div className="flex gap-1 md:gap-4 lg:gap-6">
            <Link
              to="/register"
              className={`text-sm sm:text-base md:text-lg px-4 py-2 rounded-full ${
                isRegisterPage
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-white hover:bg-purple-600 hover:text-white"
              }`}
            >
              REGISTER
            </Link>
            <Link
              to="/login"
              className={`text-sm sm:text-base md:text-lg px-4 py-2 rounded-full ${
                isLoginPage
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-white hover:bg-purple-600 hover:text-white"
              }`}
            >
              LOGIN
            </Link>
          </div>
          <SoundBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-5/6 xl:w-3/4 h-auto md:h-[75vh] bg-[#08040c] rounded-3xl flex flex-col md:flex-row gap-5 mb-[5vh] p-6 md:p-0">
        {/* Image Section */}
        <div className="hidden md:flex w-1/2 relative h-full items-center justify-center">
          <img
            src={RegisterLogo}
            alt="register_logo"
            className="w-full h-full rounded-3xl object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white">
            <h2 className="text-4xl md:text-6xl font-bold">
              Nice to meet you :)
            </h2>
            <p className="text-xl md:text-2xl mt-6">
              Just register to join with us
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-white font-bold text-2xl md:text-3xl">
              Register
            </h2>
            <div className="flex gap-2 md:gap-4 items-center justify-center">
              <SocialMediaButton
                icon={FacebookLogo}
                label="FACEBOOK"
                color="#5200FF"
                onClick={() => ``}
              />
              <SocialMediaButton
                icon={TwitterLogo}
                label="TWITTER"
                color="#00F0FF"
                onClick={() => ``}
              />
              <SocialMediaButton
                icon={GoogleLogo}
                label="GOOGLE"
                color="#FF2DF7"
                onClick={() => ``}
              />
            </div>
          </div>
          <div className="flex gap-4 md:gap-6 my-[3vh] items-center justify-center w-full">
            <hr className="w-[4vw] md:w-[6vw] bg-[#8c8b91]" />
            <p className="text-[#8c8b91]">Or login with email</p>
            <hr className="w-[4vw] md:w-[6vw] bg-[#8c8b91]" />
          </div>
          <div className="flex flex-col gap-4 w-full pr-[2vw]">
            <FormField
              id="name"
              type="text"
              label="Name"
              value={name}
              onChange={setName}
            />
            <FormField
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={setEmail}
            />
            <FormField
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              value={password}
              onChange={setPassword}
              showToggle
              toggleValue={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />
            <FormField
              id="repeat-password"
              type={showRepeatPassword ? "text" : "password"}
              label="Repeat Password"
              value={repeatPassword}
              onChange={setRepeatPassword}
              showToggle
              toggleValue={showRepeatPassword}
              onToggle={() => setShowRepeatPassword(!showRepeatPassword)}
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 text-[#00F0FF] bg-transparent border-[#8c8b91] rounded focus:ring-0"
              />
              <label htmlFor="terms" className="text-white">
                I have read and accept the{" "}
                <span className="text-[#00F0FF]">
                  Terms of Service & Privacy Policy
                </span>{" "}
                *
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-full md:w-4/5 py-3 text-lg font-bold text-white bg-gradient-to-r from-[#5200FF] to-[#A100FF] rounded-full hover:shadow-lg transition-shadow duration-300"
                onClick={handleRegister}
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
