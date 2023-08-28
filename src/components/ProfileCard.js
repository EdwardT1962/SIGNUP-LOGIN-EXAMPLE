import './ProfileCard.css';


// src/components/ProfileCard.js
function ProfileCard({ name, image, description }) {
    return (
      <div className="profile-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  export default ProfileCard;
  