import React, { useState } from "react";
import PhoneBookForm1 from "./PhoneBookForm1";
import style from "./Style";


const InformationTable = (props) => {
    const sortedUsers = props.y.sort((a, b) =>
      a.userLastname.localeCompare(b.userLastname),
      
    );
    // console.log(sortedUsers)
    const display =
      sortedUsers.length > 0 ? (   // if part
        sortedUsers.map((user, index) => (
          
          
          <tr key={index}>
            <td style={style.tableCell}>{user.userFirstname}</td>
            <td style={style.tableCell}>{user.userLastname}</td>
            <td style={style.tableCell}>{user.userPhone}</td>
          </tr>
        ))
      ) : (    //else part
        <tr clospan={3}>&nbsp;</tr>
      );
  
    return (<div>
      <table style={style.table}>
        <thead>
          <tr>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
          </tr>
        </thead>
        <tbody>{display}</tbody>
      </table>
     
      </div>
    );
  };

////------- RUN METHOD ------//////
const Run = () => {
    const usersListObjc = [];
    const [users, setUsers] = useState(usersListObjc);
    //console.log(usersListObjc)
    console.log(users)
  
    const addUserItem = (user) => {
      // console.log("user", users.length);
      // console.log(user)
      user.id = users.length + 1;
      setUsers([...users, user]);
    };
    
    return (
      <section>
        <PhoneBookForm1 x={addUserItem} />
        
        <hr ></hr>
        <InformationTable y={users} />
      </section>
    );
  }
  export default Run