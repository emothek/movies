import React, { useState } from 'react';
import './App.css';

import options from './movies.json';

function UserSignup() {


    const [state , setState] = useState({
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
    })

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }; 
    
    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await signUpUser()
    };

    // getting the event handlers from our custom hook
    // const { onChange, onSubmit, values, setValues } = useForm(signUpUser, state);

    async function signUpUser() {
        // send "state" to localStorage in-memory database
        console.log(state)
        let previousData = localStorage.getItem('data');
        let parsedData = previousData && JSON.parse(previousData);
        let newData = parsedData ? [...Object.entries(parsedData), state] : [state];

        localStorage.setItem('data', JSON.stringify(newData))
 
    }

    const handleChange = (event: any) => {
        console.log(event.target.value)
        console.log(options[event.target.value])
        setState({ 
            ...state, 
            movie: event.target.value, 
            // problem updating the sessions with mock data to display the second drop down !
            //sessions: options[event.target.value].sessions
        });
      };
    

  return (
    <div >

        <p>
          User Sign-up form
        </p>
 
        <form onSubmit={onSubmit}>
        <div className="Form">

            <input
                name='firstName'
                id='firstName'
                type="text"
                placeholder='First name'
                onChange={onChange}
                required
                />

            <input
                name='lastName'
                id='lastName'
                type="text"
                placeholder='Last name'
                onChange={onChange}
                required
                />

            <input
                type="file"
                name="photo"
                id="photo"
                value={state.photo}
                onChange={onChange}
                required
                />

            <input
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
                required
                />

            <input
                name='phone'
                id='phone'
                type='number'
                placeholder='Phone'
                onChange={onChange}
                required
                />

            <label>
                Select a movie<br></br>
                <select value={state.movie} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={index}>
                        {option.category} - {option.title} - {option.IMDB}
                        </option>
                ))}
                </select>
            </label>



            { state.sessions.length > 0 && state.sessions[0].date &&
                <label>
                    Sessions<br></br>
                    <select value={state.selectedSession} onChange={handleChange}>
                    {state.sessions.map((option, index) => (
                        <option key={index} value={option.date}>{option.date} - {option.time}</option>
                    ))}
                    </select>
                </label>
            }


 
            <button className='Login' type='submit'>Sign up</button>
        </div>
        </form>

    </div>
  );
}

export default UserSignup;
