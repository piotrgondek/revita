<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-own-navbar text-uppercase">
	<div class="container">
		<a class="navbar-brand" href="<?php echo Theme::siteUrl() ?>">
			<img src="bl-themes/TheMe-v1/img/baner.jpg" width="50%" height="50%" alt="banner">
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ml-auto">

				<!-- Static pages -->
				<?php foreach ($staticContent as $staticPage): ?>
				<li class="nav-item">
					<a class="nav-link" href="<?php echo $staticPage->permalink() ?>"><?php echo $staticPage->title() ?></a>
				</li>
				<?php endforeach ?>

				<!-- Social Networks -->
				
				<li class="nav-item">
					<a class="nav-link" href="https://www.revita-dukla.pl/" target="_self">
						Strona Główna
					</a>
				</li>
				

			</ul>
		</div>
	</div>
</nav>
