<script>

</script>

<footer>

	<img src="/img/round-shape.png" alt="Footer Start">

	<div class="join-container">
		<div>
			<div class="join-area">
				<div class="left">
					<!-- <span class="subtitle">Become a part of our community</span> -->
					<h3 class="title">Become a part of our community</h3>
				</div>
				<div class="right">
					<div>
						<a href="https://twitter.com/defi_lotto">
							<img src="/img/twitter.png" alt="Twitter">
						</a>
					</div>
					<div>
						<a href="https://t.me/DeFi_Lotto">
							<img src="/img/telegram.png" alt="Telegram">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="links-container">
		<a href="/#Roadmap">Roadmap</a>
		<p>|</p>
		<a href="/about">About</a>
		<p>|</p>
		<a href="/about/#FAQ">FAQ</a>
		<p>|</p>
		<a href="/about/#Contact">Contact</a>
	</div>
	<hr>
	<p class="copyright">Copyright © 2022 - DeFi Lotto</p>

</footer>

<style>

@media (min-width: 0px) and (max-width: 480px) {
	.join-area {
		display: grid !important;
		justify-items: center !important;
		justify-content: center !important;
		padding: 25px 50px !important;
	}

	h3 {
		font-size: 32px !important;
		justify-content: center !important;
		width: 200px !important;
	}

	.left {
		width: 180px !important;
	}

	.right {
		margin: 50px 0px 0px 0px !important;
		justify-items: center !important;
		grid-template-columns: 30px 50px 0px 0px !important;
	}

	.links-container {
		grid-template-columns: auto auto auto!important;
		justify-items: center !important;
	}

	.links-container > p:nth-child(4) {
		display: none;
	}
}

	footer {
		background-color: #2d0865;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0px;
		z-index: 5;
	}

	footer > img {
		margin: -2px 0px 0px 0px;
		max-width: 100%;
		height: auto;
	}

	.join-container {
		width: 80%;
		margin-right: 0px;
		margin-left: 0px;
	}

	.join-container > div {
		width: 100%;
		margin: -210px 0px 0px 0px;
	}

	.join-area {
		padding: 50px 50px;
		background-image: -moz-linear-gradient(135deg, #5496ff 0%, #8739e6 100%);
		background-image: -webkit-linear-gradient(135deg, #5496ff 0%, #8739e6 100%);
		background-image: -ms-linear-gradient(135deg, #5496ff 0%, #8739e6 100%);
		box-shadow: 0px 19px 56px 0px rgb(0 0 0 / 50%);
		border-radius: 30px;
		-webkit-border-radius: 30px;
		-moz-border-radius: 30px;
		-ms-border-radius: 30px;
		-o-border-radius: 30px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}

	.join-area .left {
		width: 50%;
	}

	*, ::after, ::before {
		box-sizing: border-box;
	}

	.join-area .left .subtitle {
		font-size: 24px;
		font-weight: 600;
		color: #ffb200;
		margin-bottom: 10px;
	}

	span {
		font-size: 16px;
		color: #c4cbf9;
		line-height: 1.7;
		margin: 0;
	}

	.join-area .left .title {
		color: #ffffff;
		font-size: 32px;
	}

	h3 {
		color: #ffffff;
		font-weight: 600;
		margin: 0;
		line-height: 1.3;
		font-size: 24px;
	}

	.right {
		display: grid;
		justify-items: right;
		align-items: center;
		grid-template-columns: auto auto;
		grid-gap: 5px;
	}

	.right > div > a > img {
		width: 40px;
		height: 40px;
		border-radius: 15px;
	}

	.right > div > a > img:hover {
		transition: all 0.2s linear;
		transform: scale(1.1);
		border: 2px solid hsla(271, 76%, 53%, 0.5);
		cursor: pointer;
	} 

	.links-container {
		margin: 50px 0px 25px 0px;
		display: grid;
		justify-items: right;
		align-items: left;
		grid-template-columns: auto auto auto auto auto auto auto;
	}

	.links-container > p {
		margin: 5px 5px;
		font-size: 25px;
		padding: 0;
		font-weight: 600;
		color: white;
		color: #686fc5;
		pointer-events: none;
	}

	.links-container > a {
		text-decoration: none;
		color: #d2d5fc;
		margin: 10px;
	}

	.links-container > a:hover {
		color: white;
		transition: all 0.2s linear;
	}

	hr {
		margin: 0px;
		border-color: rgba(104, 111, 197, 0.4) !important;
		width: 90%;
	}

	.copyright {
		color: #d2d5fc;
    	margin: 25px 0px 40px 0px;
	}

</style>
