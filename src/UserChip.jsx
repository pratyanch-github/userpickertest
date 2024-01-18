const UserChip = (props) => {
    const { user, selectedUser, setSelectedUser } = props;
  
    const handleDelete = () => {
      const newlist = selectedUser.filter((u) => u.name !== user.name);
      setSelectedUser(newlist);
    };
  
    return (
      <div className="userchip h-8  bg-gray-200 px-2 py-1 rounded-full  m-1 flex items-center gap-2">
        <div ><img className="rounded-full h-6 w-6" src={user.image} alt="" /></div>
        <div>
             <span>{user.name}</span>
        </div>
        <div className="deletebtn ml-2 cursor-pointer" onClick={handleDelete}>
          ❌
        </div>
      </div>
    );
  };

  export default UserChip;