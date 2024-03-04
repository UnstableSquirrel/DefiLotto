
<script>

	let amount = 1

	$: if (amount < 0) {
		amount = 0
	}

	$: if (amount > 1000) {
		amount = 1000
	}

	function  increaseAmount() {
		amount++
	}

	function  decreaseAmount() {
		amount--
	}

</script>

	<section class="section1">
		<h1>Winner List</h1>
		<p>We’d love to talk about how we can work together. Send us a message below and we’ll respond as soon as possible.</p>

		<div class="latest-winner-container">
			<div>Test</div>
		</div>
	</section>
	<div class="bottom-banner">
		<img src="/img/wave2.svg" alt="Bottom-Banner">
	</div>

	<section class="section2">

	</section>

	<section class="section3">

		<div>
			<h2>Explanation</h2>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ex eget mi sollicitudin consequat. 
				Sed rhoncus ligula vel justo dignissim aliquam. Maecenas non est vitae ipsum luctus feugiat. 
				Fusce purus nunc, sodales at condimentum sed, ullamcorper a nulla.
				Nam justo est, venenatis quis tellus in, volutpat eleifend nunc. Vestibulum congue laoreet mi non interdum. Ut ut dapibus tellus.
			</p>
		</div>

	</section>
	

<style>

	main {
		display: grid;
		justify-content: center;
		align-items: center;
		background-color: #0f0233;
		/* padding: 350px 50px 250px 50px; */
		padding: 50px !important; 
	}

	.section1 {
		display: grid;
		justify-items: center;
		align-items: center;
		padding: 500px 10px 0px 10px;
    	background-image: linear-gradient(0deg, #ec1379 0%, #8d0b70 25%, #54056a 50%, #54056a 75%, #54056a 100%);
		margin: 0px;
		z-index: 2;
	}

	.section1 > h1 {
		text-align: center;
		margin: -420px 0px 0px 0px;
		font-size: 60px;
		color: #ffffff;
		font-weight: 600;
		text-transform: uppercase;
	}

	.section1 > p {
		text-align: center;
		margin: -250px 0px 0px 0px;
		font-size: 18px;
		color: #f1f3ff;
	}

	.bottom-banner {
		/* position: absolute; */
		margin: 0px;
		background-color: #0f0233;
	}

	.bottom-banner > img {
		max-width: 100%;
		height: auto;
	}

	.section2 {
		display: grid;
		justify-items: center;
		align-items: center;
		margin: 0px 0px 0px 0px;
    	background-color: #0f0233;
		padding: 0px 0px 50px 0px;
		z-index: 1;
	}

	.latest-winner-container {
		padding: 50px 20px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		align-items: flex-end;
		border-radius: 20px;
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		-ms-border-radius: 20px;
		-o-border-radius: 20px;
		/* background-color: #7d51f7; */
		background-image: -moz-linear-gradient(90deg, #c165dd 0%, #5c27fe 100%);
    	background-image: -webkit-linear-gradient(90deg, #c165dd 0%, #5c27fe 100%);
    	background-image: -ms-linear-gradient(90deg, #c165dd 0%, #5c27fe 100%);
		width: 200px;
		margin: 0px 0px -100px 0px;
    	z-index: 1;
	}

	.section3 {
		display: grid;
		justify-items: center;
		align-items: center;
		margin: 0px 0px 0px 0px;
    	background-color: #0f0233;
		padding: 0px 10px 200px 10px;
		z-index: 1;
	}

	.section3 > div {
		display: grid;
		justify-items: left;
		align-items: center;
		max-width: 700px
	}

	.section3 > div > h2 {
		text-align: left;
		color: #ffffff;
		font-weight: 600;
		margin: 25px 0px;
	}
		
</style>
