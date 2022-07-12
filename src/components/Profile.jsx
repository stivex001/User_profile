import "./Profile.scss";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { profileData } from "../components/Profile-data";

const Profile = () => {
  const [userprofile, setUserProfile] = useState(profileData);

  const removeProfile = (id) => {
    const newProfileList = userprofile.filter((profile) => profile.id !== id);
    setUserProfile(newProfileList);
  };

  return (
    <section className="profile-sec --flex-center --100vh --bg-primary">
      <div className="container">
        <h2 className="--text-light">My Team Profile App</h2>
        {userprofile.map((profile) => {
          const { id, name, job, img } = profile;
          return (
            <div className="profile --card --flex-between --p" key={id}>
              <img src={img} alt="avater" />
              <div className="desc">
                <h4 className="--text-light">Name: {name}</h4>
                <p className="--text-light">Job: {job}</p>
              </div>
              <FaTrashAlt
                size={18}
                className="icon"
                onClick={() => removeProfile(id)}
              />
            </div>
          );
        })}

        <button className="--btn --btn-danger" onClick={() => setUserProfile([])}>Clear All</button>
      </div>
    </section>
  );
};

export default Profile;
