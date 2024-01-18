const UserInpCard = (props) => {
    const { udetail, setSelectedUser ,setInp} = props;
  
    const handleClick = () => {
      console.log("adding user");
      setInp((inp)=>""); 
      setSelectedUser((list) => [...list, udetail]);
    };
  
    return (
      <div
        className="userinpcard flex w-64 h-12 gap-2 cursor-pointer  px-2 py-1 rounded mb-1 hover:bg-gray-200"
        onClick={handleClick}
      > 
        <div className="flex h-8 w-8 "><img className="rounded-full" src={udetail.image} alt="" /></div>
        <div>{udetail.name}</div>   
        <div>{udetail.email}</div>   

      </div>
    );
  };

  export default UserInpCard;