import { useState } from "react";
import UserInpCard from "./UserInpCard";
import UserChip from "./Userchip";


function App() {

  const [userList, setUserList] = useState([
    { name: "John", email: "john@example.com" , image: "img1.png"},
    { name: "Joe", email: "Joe@example.com", image: "img2.png" },
    { name: "Jeff", email: "Jeff@example.com" , image: "img3.png"},
    { name: "Alice", email: "alice@example.com" , image: "img4.png"},
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" , image: "img5.png"},
    { name: "David", email: "david@example.com" , image: "img6.png"},
    { name: "Emma", email: "emma@example.com" , image: "img7.png"},
    { name: "Frank", email: "frank@example.com" , image: "img8.png"},
    { name: "Grace", email: "grace@example.com" , image: "img9.png"},
    { name: "Henry", email: "henry@example.com" , image: "img10.png"},
    { name: "Ivy", email: "ivy@example.com" , image: "img11.png"},
    { name: "Jack", email: "jack@example.com" , image: "img12.png"},
    { name: "Katie", email: "katie@example.com" , image: "img13.png"},
    { name: "Leo", email: "leo@example.com" , image: "img14.png"},
  ]);
  
  
  const [selectedUser, setSelectedUser] = useState([]);
  const [inp, setInp] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  // console.log("selected", selectedUser);

  let handleAdd = (user) => {
    let newList = [...selectedUser, user];
    setSelectedUser(newList);
  };

  return (
    <>
      <div className="appcontainer flex  flex-col items-center justify-center w-[100%]">
        <div className="heading text-4xl font-bold mb-10 mt-6">Pick user</div>
       
        <div className="Usercontainer flex w-[100px]  border-b-4 p-4 border-b-blue-700 flex-wrap">
          <div className="chips flex">
            {selectedUser.map((user, index) => (
              <UserChip
                key={index}
                user={user}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            ))}
          </div>

          <div className="inp relative z-1">           
            <input
              placeholder="Add new user..."
              type="text"
              value={inp}
              onChange={(e) => setInp(e.target.value)}
              onClick={() => setIsInputFocused(!isInputFocused)}
              className="px-2 py-1 rounded"
            />

            {isInputFocused && (
              <div className="UserOptionsBox absolute bg-white z-1 mt-2 h-32 overflow-scroll ">
                {userList
                  .filter((user) => {
                    for (let u of selectedUser) {
                      if (user.name == u.name) return false;
                    }
                    return true;
                  })
                  .filter((user)=>{
                       if(user.name.substring(0,inp.length).toLowerCase()==inp.toLowerCase())return true;
                       else return false;
                  })
                  .map((user, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          handleAdd(user);
                        }}
                      >
                        <UserInpCard
                          udetail={user}
                          setSelectedUser={setSelectedUser}
                        />
                      </div>
                    );
                  })}
              </div>
            )}


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
