<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="style.css">
	<title>Grain Units calculation project</title>
</head>

<body>

	<?php include 'header.php' ?>
	<!-- Carousel (for main page) -->

	<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
				aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
				aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
				aria-label="Slide 3"></button>
		</div>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="img/carousel/carouselmeal4.jpg" class="d-block w-100" alt="...">
				<div class="carousel-caption d-none d-md-block carousel-text">
					<h5>First slide label</h5>
					<p>Some representative placeholder content for the first slide.</p>
				</div>
			</div>
			<div class="carousel-item">
				<img src="img/carousel/carouselmeal5.jpg" class="d-block w-100" alt="...">
				<div class="carousel-caption d-none d-md-block carousel-text">
					<h5>Second slide label</h5>
					<p>Some representative placeholder content for the second slide.</p>
				</div>
			</div>
			<div class="carousel-item">
				<img src="img/carousel/carouselmeal6.jpg" class="d-block w-100" alt="...">
				<div class="carousel-caption d-none d-md-block carousel-text">
					<h5>Third slide label</h5>
					<p>Some representative placeholder content for the third slide.</p>
				</div>
			</div>
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
			data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
			data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>


	<div class="container mt-5 text-center">
		<div class="card-group">
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title">First calculation</h5>
					<p class="card-text">Counting the number of grain units (useful for all people with diabetes, regardless
						of the method of administration of insulin (syringe - pen or insulin pump)</p>
					<a href="#" class="btn btn-primary">Calculate</a>
				</div>
			</div>
			<div class="card">
				<div class="card-body">
					Calculation example:
					So, 1 GU = 12gr of carbohydrates or 25gr of white bread.
					Someone choose to eat 1 banana which weight is 150gr, how many GU is it?
					100gr of banana = 20,2gr of carbohydrates.
					Then, 20,2*(150/100) =30,3gr of carbohydrates
					x GU = 30,3/12 = 2,525 GU
					So, 150gr of banana is equal to 2,5 GU.
				</div>
			</div>
		</div>
	</div>
	<div class="container mt-5 text-center">
		<div class="card-group">
			<div class="card">
				<div class="card-body">
					Let us consider person injects 4 units of insulin for his/her lunch, which always (most of the time) has
					the next form:
					1 piece of white bread, 200gr of mashed potatoes, 150gr of lamb, water and 1 pear.
					First, let us count GU for one “standard” meal:
					Bread = 1GU
					Mashed potatoes = (8,5*(200/100))/12=1,4 GU
					Water = 0 GU
					Pear = 1 GU
					Total: 1+1,4+1=3,4GU
					4 units / 3,4 GU = 1,1 unit of insulin per GU

				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title">Second calculation</h5>
					<p class="card-text"> Let us consider person injects 4 units of insulin for his/her lunch, which always
						(most of the time) has the next form</p>
					<a href="#" class="btn btn-primary">Calculate</a>
				</div>
			</div>
		</div>
	</div>
	<div class="container mt-5 text-center">
		<div class="card-group">
			<div class="card" style="width: 10rem;">
				<div class="card-body">
					<h5 class="card-title">Third calculation</h5>
					<p class="card-text">Simultaneous counting of the number of grain units and demanded dose of insulin.</p>
					<a href="#" class="btn btn-primary">Calculate</a>
				</div>
			</div>
			<div class="card">
				<div class="card-body">
					Let us take the same meal from previous calculation, but in this case person knows that his/ger dosage is
					0,9 unit/GU.
					So, 3,4 GU*0,9 unit/GU = 3,1 units of insulin.

					<body class="">
					</body>
				</div>
			</div>
		</div>
	</div>
	<?php include 'modal.php'?>
	<?php include 'footer.php'?>
	<!-- Made by Yeldos and Daniyal-->
</body>

</html>