const UserChip = (props) => {
    const { user, selectedUser, setSelectedUser } = props;
  
    const handleDelete = () => {
      const newlist = selectedUser.filter((u) => u.name !== user.name);
      setSelectedUser(newlist);
    };
  
    return (
      <div className="userchip h-8  bg-gray-200 px-2 py-1 rounded-full  m-1 flex items-center">
        <div className="rounded-full"><img src={user.image} alt="" /></div>
        <span>{user.name}</span>
        <div className="deletebtn ml-2 cursor-pointer" onClick={handleDelete}>
          ❌
        </div>
      </div>
    );
  };

  export default UserChip;