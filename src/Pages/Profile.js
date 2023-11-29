import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";


function Profile() {
  
  const { id } = useParams();
	const [userData, setUserData] = useState({});
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	
	const [error, setError] = useState();
	const [status, setStatus] = useState();
//	const [img, setImg] = useState(null);

	const navigate = useNavigate();

	const goBack = () => navigate(-1);
 
    const getUserData = () => {
        axios.get(`http://localhost:8000/api/${id}`).then((response) =>{
		
            setUserData(response.data)
           
        }).catch((err)=>{
            console.log(err.message)
        })}
		useEffect(() => {
			getUserData();
			}, []);
			
        const handleSubmit = (e) => {
            e.preventDefault();
    
            axios
                .put(
                    `http://localhost:8000/api/${userData.id}`,
                    JSON.stringify({ firstName, lastName}),
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true,
                    }
                )
                .then((response) => {
                    setStatus("Successfully Updated");
                    getUserData();
                    // setFirstName("");
                    // setLastName("");
                    
                })
                .catch((err) => {
                    setError(err.message);
                });
        };
		const [file, setFile] = useState();
		function handleChange(e) {
			console.log(e.target.files);
			setFile(URL.createObjectURL(e.target.files[0]));
		}

	return (
		<section>
			<h1 className="text-center mb-3">Your profile</h1>
			<div className="d-flex justify-content-between" id="display">
				<div>
					<p>First Name: {userData?.firstName}</p>
					<p>Last Name: {userData?.lastName}</p>
					<p>Email: {userData?.email}</p>
				</div>
				
			</div>
			<form className="mt-3" id="edit-form" onSubmit={handleSubmit}>
				{status && <p className="text-success form-text">{status}</p>}
				{/* <h4>Update Profile</h4>
				<div className="row">
					<div className="col-md-2">
						<label htmlFor="first-name" className="form-label">
							First Name
						</label>
					</div>
					<div className="col-md-10">
						<input
							type="text"
							id="first-name"
							className="form-control"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-2">
						<label className="form-label" htmlFor="last-name">
							Last Name
						</label>
					</div>
					<div className="col-md-10">
						<input
							type="text"
							id="last-name"
							className="form-control"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div> */}

					<div>
				<h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
			</div>

				{/* </div> */}
				
					
				
				<button className="btn btn-success" type="submit">
					Update
				</button>
				<button
					type="button"
					onClick={goBack}
					className="mx-1 btn btn-secondary"
				>
					Go Back
				</button>
			</form>
		</section>
	);
};

export default Profile;


