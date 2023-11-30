import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function Dashboard() {
   
    const [refresh, setRefresh] =useState("");
	const [userList, setUserList] = useState([]);
	const [error, setError] = useState();
	const [search,setSearch] = useState();
  //  const navigate = useNavigate();
    useEffect(() => {
        getAllUsers()
	}, []);

    const getAllUsers =() =>{
        axios.get('http://localhost:8000/api/getall').then((response) =>{
            setUserList(response.data);
           
        })
       
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleNewUserList = () => {
		setRefresh("");
		getAllUsers();
	};

    const handleDelete = (id) => {
		
		axios
			.delete(`http://localhost:8000/api/${id}`)
			.then((response) => {
                handleNewUserList();
				//setError();
				
			})
			.catch((err) => {
				setError(error);
			});
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.get(`http://localhost:8000/api/search?query=${search}`)
			.then((response) => {
				setError();
				setUserList(response.data);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

  return (
    <div>

<form className="mt-3 mb-3" onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-md-9">
						<input
							type="text"
							placeholder="Search with email"
							className="form-control"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							required
						/>
					</div>
					<div className="col-md-3">
						<button type="submit" className="btn btn-primary w-200">
							Search
						</button>
					</div>
				</div>
			</form>

        <table className="table table-hover">
					<thead className="table-primary">
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{userList?.map((user) => (
							<tr key={user.id}>
								<td>{user.firstName}</td>
								<td>{user.lastName}</td>
								<td>{user.email}</td>
								<td className="d-flex justify-content-around gap-1">
									{user.role !== "Admin" && (
										<button
											type="button"
											className="btn btn-danger w-100"
											onClick={() =>
												// handleDelete(user.id)
												{ confirmAlert({
													title: 'User Delete',
													message: 'Are you sure to do this.',
													buttons: [
													  {
														label: 'Yes',
														onClick: () => handleDelete(user.id)
													  },
													  {
														label: 'No',
														//onClick: () => alert('Click No')
													  }
													]
											  });
											}}>
												
										
											Delete
										</button>
									)}
									<Link to={`/update/${user.id}`} className="w-100">
										<button type="button" className="btn btn-secondary w-100">
											Edit
										</button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
      
    </div>
  )
}

export default Dashboard
