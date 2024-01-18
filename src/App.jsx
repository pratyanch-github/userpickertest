import { useState } from "react";
import UserInpCard from "./UserInpCard";
import UserChip from "./Userchip";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import img9 from "./assets/img9.png";
import img10 from "./assets/img10.png";
import img11 from "./assets/img11.png";
import img12 from "./assets/img12.png";
import img13 from "./assets/img13.png";
import img14 from "./assets/img14.png";

function App() {
  const [userList, setUserList] = useState([
    { name: "John", email: "john@example.com", image: img1 },
    { name: "Joe", email: "Joe@example.com", image: img2 },
    { name: "Jeff", email: "Jeff@example.com", image: img3 },
    { name: "Alice", email: "alice@example.com", image: img4 },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com", image: img5 },
    { name: "David", email: "david@example.com", image: img6 },
    { name: "Emma", email: "emma@example.com", image: img7 },
    { name: "Frank", email: "frank@example.com", image: img8 },
    { name: "Grace", email: "grace@example.com", image: img9 },
    { name: "Henry", email: "henry@example.com", image: img10 },
    { name: "Ivy", email: "ivy@example.com", image: img11 },
    { name: "Jack", email: "jack@example.com", image: img12 },
    { name: "Katie", email: "katie@example.com", image: img13 },
    { name: "Leo", email: "leo@example.com", image: img14 },
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
      <div className="appcontainer flex  flex-col items-center justify-center w-[70%]  border-b-4 border-b-blue-600">
        <div className="heading text-4xl  font-bold mb-10 mt-6">Pick user</div>

        <div className="Usercontainer w-[100%] flex justify-start border-b-4 p-4 flex-wrap">
          <div className="chips flex flex-wrap">
            {selectedUser.map((user, index) => (
              <UserChip
                key={index}
                user={user}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            ))}

            <div className="inp relative ">
              <input
                placeholder="Add new user..."
                type="text"
                value={inp}
                onChange={(e) => {
                  setInp(e.target.value);
                  setIsInputFocused(true);
                }}
                onClick={() => setIsInputFocused(!isInputFocused)}
                onMouseEnter={() => setIsInputFocused(true)}
                className="px-2 py-1 focus:none"
              />

              {isInputFocused && (
                <div className="UserOptionsBox absolute bg-white z-1 mt-2 max-h-36 overflow-scroll ">
                  {userList
                    .filter((user) => {
                      for (let u of selectedUser) {
                        if (user.name == u.name) return false;
                      }
                      return true;
                    })
                    .filter((user) => {
                      if (
                        user.name.substring(0, inp.length).toLowerCase() ==
                        inp.toLowerCase()
                      )
                        return true;
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
                            setInp={setInp}
                          />
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
