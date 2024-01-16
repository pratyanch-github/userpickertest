const UserInpCard = (props) => {
    const { udetail, setSelectedUser } = props;
  
    const handleClick = () => {
       console.log("adding user");
      setSelectedUser((list) => [...list, udetail]);
    };
  
    return (
      <div
        className="userinpcard cursor-pointer  px-2 py-1 rounded mb-1"
        onClick={handleClick}
      >
        {udetail.name}, {udetail.email}
      </div>
    );
  };

  export default UserInpCard;