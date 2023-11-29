import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from '../actions/authSlice';
import axios from "axios";

function Home() {
  const { auth } = useSelector((state) => state.auth);

	// useEffect(() => {
	// 	//
	// }, [auth]);

	

	const dispatch = useDispatch();
    const [userData,setUserData] = useState("");
	const handleLogout = () => {
		localStorage.clear();
		dispatch(userLogout());
		console.log("logging out");
	};
    useEffect(() => {

	auth &&	getUserData()
	}, [userData]);
	const getUserData = () =>{
			axios.get(`http://localhost:8000/api/userId${auth?.email}`).then((response)=>{
				setUserData(response.data).catch((err)=>{
					console.log(err.message)
				 })
				
			},)
	}
		
  return (
	
    <div>
     
			<h1>Home Page</h1>
			<div className="d-flex flex-column gap-1">
				{!auth && (
					<>
						
					</>
				)}
				{auth && (
				<>					
				{auth?.roles[0] === 'User' && (
					
					<Link to={`/profile/${userData	}`}>
						<button className="btn btn-primary w-100" type="button">
							Go to profile
						</button>
					</Link>
				)}
				{auth?.roles[0] === 'Admin' && (
					<Link to="/dashboard">
						<button className="btn btn-primary w-100" type="button">
							Admin Dashboard
						</button>
					</Link>
				)}
				{auth && (
					<button
						className="btn btn-secondary"
						type="button"
						onClick={handleLogout}
					>
						Logout
					</button>
				)}
				</>	
)}
			</div>
		
    </div>
  )
}

export default Home




