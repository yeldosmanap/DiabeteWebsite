<!-- Первый модальный диалог -->
<div class="modal fade" id="modal" aria-hidden="true" aria-labelledby="..." tabindex="-1">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Registration</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>

			<div class="modal-body">
				<form action="reg.php" method="POST">
					<div class="row">
						<div class="col">
							<input type="email" name="email" class="form-control" placeholder="Email" aria-label="Email">
						</div>
						<div class="col">
							<input type="text" name="fullName" class="form-control" placeholder="Full Name"
								aria-label="Full Name">
						</div>
					</div>
					<input type="password" name="password" class="form-control mt-2" placeholder="Password"
						aria-label="Password">
			</div>
			<div class="modal-footer">
				<a href="#" class="nav-link" data-bs-target="#modal2" data-bs-toggle="modal" data-bs-dismiss="modal">Already
					have an account ?</a>
				<button type="submit" class="btn btn-primary">Register</button>
			</div>
			</form>

		</div>
	</div>
</div>
<!-- Второй модальный диалог -->
<div class="modal fade" id="modal2" aria-hidden="true" aria-labelledby="..." tabindex="-1">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Authorization</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>

			<div class="modal-body">
				<form action="log.php" method="POST">
					<div class="form-row">
						<div class="form-group col-md-6">
							<label for="inputEmail4">Email</label>
							<input name="email" type="email" class="form-control" id="inputEmail4">
						</div>
						<div class="form-group col-md-6">
							<label for="inputPassword4">Password</label>
							<input name="password" type="password" class="form-control" id="inputPassword4">
						</div>
					</div>

			</div>
			<div class="modal-footer">
				<a class="nav-link" href="#modal" data-bs-toggle="modal" data-bs-dismiss="modal2" role="button">Do not have
					an account ?</a>
				<button type="submit" class="btn btn-primary">Log In</button>
			</div>
			</form>
		</div>
	</div>
</div>