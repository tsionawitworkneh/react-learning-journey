function ProfilePicture(){

    const imageUrl = './src/assets/aviation.jpg';
    const handleClick = () =>{
        alert("Profile picture clicked!");
    }

    return(
        <img src={imageUrl} alt="Profile Picture" onClick={handleClick} width={200} height={200} />
    );
}

export default ProfilePicture;