import personnalImg from './ProfilePhoto.jpg';
function ProfilePic () {
    return (
        <img className="photo" src={personnalImg} width="200px" alt='profilePhoto' />
    );
}
export default ProfilePic;