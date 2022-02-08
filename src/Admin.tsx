import React, { useState, useEffect } from 'react';
import './App.css';

function Admin() {

  const [data, setData] = useState([{
      firstName: "",
      lastName: "",
      photo: "",
      email: "",
      phone: "",
      movie: "",
      sessions: [{date:undefined, time:undefined}],
      selectedSession: "",
      seatRow:null,
      seatNumber:null,
  }])

  useEffect(()=>{
    const getUsers = async () => {
      const users = await localStorage.getItem('data');
      console.log(users && JSON.parse(users));
 
      if(users !== undefined)
        setData(users && JSON.parse(users))
    }
    getUsers();
    console.log('))))')
    console.log(data)
  }, [])

  return (
    <div>
 
        <h1>Admin panel</h1>

        <table>
          <thead>
          <tr>
            <th>User</th>
            <th>E-mail</th>
            <th>Full name</th>
            <th>Phone</th>
            <th>Movie</th>
            <th>Session</th>
            <th>Seat R / N</th>
          </tr>
          </thead>
          <tbody>
          { data && data.length > 0 &&
            data.map((user, index) => {
              console.log(user)
              return(
                <tr key={index}>
                  <td>{index}</td>
                  <td>{user.email}</td>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.phone}</td>
                  <td>{user.movie}</td>
                   
                  <td>{user.seatNumber} / {user.seatRow}</td>
                </tr>
              )
            })
          }
          </tbody>
      </table>
 
    </div>
  );
}

export default Admin;
