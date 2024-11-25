import { useState, useRef } from "react";
import Sidebar from "../component/Sidebar";
import FormField from "../component/FormField";

import Artist1 from "../assets/images/artist_1_paw.png";
// import { getUsername } from "../services/auth.service";
// import { getEmail } from "../services/auth.service";

// const token = localStorage.getItem("token");
// console.log(token)
// console.log(getUsername(token))

const Profile = () => {
  const [profileImage, setProfileImage] = useState(Artist1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDeletePassword, setShowDeletePassword] = useState(false);
  const [showDeleteConfirmPassword, setShowDeleteConfirmPassword] =
    useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    // username: getUsername(token),
    // email: getEmail(token),
    password: "abcdefgh",
    confirmPassword: "abcdefgh",
  });

  const [confirmedData, setConfirmedData] = useState({
    // username: getUsername(token),
    // email: getEmail(token),
  });

  const [deleteData, setDeleteData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  
//   useEffect(() => {
//     setUsername(getUsername(token));
// },[]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDeleteInputChange = (field, value) => {
    setDeleteData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setConfirmedData({
      username: formData.username,
      email: formData.email,
    });
  };

  const handleCancel = () => {
    setFormData({
      ...formData,
      username: confirmedData.username,
      email: confirmedData.email,
    });
  };

  const handleDeleteAccount = () => {
    {/* Logic to delete account */}
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="min-h-screen max-w-screen flex font-jakarta overflow-y-auto">
      <div className="w-1/5 bg-[#181818] border-r-2 border-[#FF2DF7]">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-[#181818] px-[3vw] py-[4vh]">
        {/* Profile Section */}
        <div className="min-h-[30vh] w-full bg-[#1e1e1e] rounded-lg px-[2vw] py-[3vh] flex justify-between mb-[5vh] relative">
          <div className="flex flex-col gap-3 min-w-1/4 h-[24vh] justify-end">
            <p className="text-6xl font-bold text-white">
              {confirmedData.username}
            </p>
            <p className="text-lg text-white font-semibold">
              {confirmedData.email}
            </p>
          </div>
          <div className="min-w-1/4 h-[24vh] flex items-center relative">
            {profileImage && (
              <div className="w-[150px] h-[150px] scale-110 rounded-full overflow-hidden mb-4">
                <img
                  src={profileImage}
                  alt={confirmedData.username}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div
              className="absolute bottom-2 right-2 w-10 h-10 bg-[#343434] rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              <span className="text-white text-sm font-bold">+</span>
            </div>
            {/* Input File Tersembunyi */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleProfileImageChange}
            />
          </div>
        </div>
        {/* Edit Profile Section */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-white mb-6">
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {/* Username Field */}
            <FormField
              id="username"
              type="text"
              label="Username"
              value={formData.username}
              onChange={(value) => handleInputChange("username", value)}
            />
            {/* Email Field */}
            <FormField
              id="email"
              type="email"
              label="Email"
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)}
            />
            {/* Password Field */}
            <FormField
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              value={formData.password}
              onChange={(value) => handleInputChange("password", value)}
              showToggle={true}
              toggleValue={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />
            {/* Confirm Password Field */}
            <FormField
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={(value) =>
                handleInputChange("confirmPassword", value)
              }
              showToggle={true}
              toggleValue={showConfirmPassword}
              onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
            />
            {/* Submit and Cancel Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#5200FF] to-[#A100FF] text-white py-3 px-6 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow duration-300"
              >
                Update
              </button>
              <button
                type="button"
                className="bg-[#343434] text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-[#444444] transition-colors duration-300"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        {/* Delete Account Section */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-4">Delete Your Account</h2>
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleDeleteAccount();
            }}
          >
            {/* Username Field */}
            <FormField
              id="delete-username"
              type="text"
              label="Username"
              value={deleteData.username}
              onChange={(value) =>
                handleDeleteInputChange("username", value)
              }
            />
            {/* Password Field */}
            <FormField
              id="delete-password"
              type={showDeletePassword ? "text" : "password"}
              label="Password"
              value={deleteData.password}
              onChange={(value) =>
                handleDeleteInputChange("password", value)
              }
              showToggle={true}
              toggleValue={showDeletePassword}
              onToggle={() => setShowDeletePassword(!showDeletePassword)}
            />
            {/* Confirm Password Field */}
            <FormField
              id="delete-confirm-password"
              type={showDeleteConfirmPassword ? "text" : "password"}
              label="Confirm Password"
              value={deleteData.confirmPassword}
              onChange={(value) =>
                handleDeleteInputChange("confirmPassword", value)
              }
              showToggle={true}
              toggleValue={showDeleteConfirmPassword}
              onToggle={() =>
                setShowDeleteConfirmPassword(!showDeleteConfirmPassword)
              }
            />
            {/* Delete Button */}
            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#5200FF] to-[#A100FF] text-white py-3 px-6 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow duration-300"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
