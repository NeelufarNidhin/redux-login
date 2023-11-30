import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";


function Profile() {
  
  const { id } = useParams();
	const [userData, setUserData] = useState({});
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [status, setStatus] = useState();
//	const [error, setError] = useState();
	
//	const [selectedImage, setSelectedImage] = useState(null);

	
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
			}, [userData]);
			
        const handleSubmit = (e) => {
            e.preventDefault();
			getUserData();
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
                  //  getUserData();
                    
                })
                .catch((err) => {
					console.log (err.message);
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
				<img style={{
				height:"200px",
				width:"200px",
				borderRaduis : "50%",
			    objectFit:'cover'}}
				
				src={ file? file : '../profile-pic.jpeg'} alt=''
				
				 />
				
				<div>
					<p>First Name: {userData?.firstName}</p>
					<p>Last Name: {userData?.lastName}</p>
					<p>Email: {userData?.email}</p>
				</div>
				
			</div>
			<form className="mt-3" id="edit-form" onSubmit={handleSubmit}>
				{status && <p className="text-success form-text">{status}</p>}
				
						

					<div>
				<h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
			
            {/* <img src={file} alt="" /> */}
			</div>

				{/* <button className="btn btn-success" type="submit">
					Update
				</button> */}
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


