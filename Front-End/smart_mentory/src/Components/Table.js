import React from 'react'

export default function Table() {
    return (
        <div className="container-central">
		<div className="container">
			<div className="table-wrapper">
				<div class="table-title">
					<div className="row">
						<div className="col-sm-6">
						<h2><b>Dispositivos</b></h2>
						</div>
						<div className="col-sm-6">
							<a className="btn btn-success" data-toggle="modal"><span>Adicionar Dispositivo</span></a>
							<a className="btn btn-danger" data-toggle="modal"><span>Delete Dispositivo</span></a>						
						</div>
					</div>
				</div>

				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>
								<span className="custom-checkbox">
									<input type="checkbox" id="selectAll"/>
									<label for="selectAll"></label>
								</span>
							</th>
							<th>Name</th>
							<th>Email</th>
							<th>Address</th>
							<th>Phone</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span className="custom-checkbox">
									<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
									<label for="checkbox1"></label>
								</span>
							</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>
								<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
								<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div id="addEmployeeModal" className="modal fade">
			<div className="modal-dialog">
				<div className="modal-content">
					<form method="post" action="index.php">
						<div className="modal-header">						
							<h4 className="modal-title">Add Employee</h4>
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						</div>
						<div className="modal-body">					
							<div className="form-group">
								<label>Name</label>
								<input type="text" className="form-control" name="username" placeholder="Enter name" required/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input type="email" className="form-control" name="useremail" placeholder="Enter email" required/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<textarea className="form-control" name="address" placeholder="Enter Address" required></textarea>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input type="text" className="form-control" name="phone" placeholder="Enter phone" required/>
							</div>					
						</div>
						<div className="modal-footer">
							<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
							<input type="submit" className="btn btn-success" name="add" value="Add"/>
						</div>
					</form>
				</div>
			</div>
		</div>

		<div id="editEmployeeModal" className="modal fade">
			<div className="modal-dialog">
				<div className="modal-content">
					<form>
						<div className="modal-header">						
							<h4 className="modal-title">Edit Employee</h4>
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						</div>
						<div className="modal-body">					
							<div className="form-group">
								<label>Name</label>
								<input type="text" className="form-control" required/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input type="email" className="form-control" required/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<textarea className="form-control" required></textarea>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input type="text" className="form-control" required/>
							</div>					
						</div>
						<div className="modal-footer">
							<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
							<input type="submit" className="btn btn-info" value="Save"/>
						</div>
					</form>
				</div>
			</div>
		</div>

		<div id="deleteEmployeeModal" className="modal fade">
			<div className="modal-dialog">
				<div className="modal-content">
					<form>
						<div className="modal-header">						
							<h4 className="modal-title">Delete Employee</h4>
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						</div>
						<div className="modal-body">					
							<p>Are you sure you want to delete these Records?</p>
							<p className="text-warning"><small>This action cannot be undone.</small></p>
						</div>
						<div className="modal-footer">
							<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
							<input type="submit" className="btn btn-danger" value="Delete"/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
    )
}
