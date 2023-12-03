import React, { useEffect, useState } from "react";

const form = (id) => {
  const [value, setValue] = useState("");
  
  useEffect(() => {
    let selectedMember = memberData.find((member) => member.id === id);
    setValue({
      ...value,
      name: selectedMember.name,
      email: selectedMember.email,
    });
  }, []);


  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={value.name}
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              email="email"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
          </div>
          <button className="btn btn-info">update</button>
        </form>
      </div>
    </div>
  );
};

export default form;
