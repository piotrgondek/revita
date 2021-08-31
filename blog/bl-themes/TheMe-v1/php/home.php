<div style="        font-family: 'Roboto', sans-serif;">

<div style="width:100%; padding-top:140px; padding-bottom:100px;">
	<h1 style="text-align:center;">Blog</h1>
</div>




            
            
<?php /* Main Content standard */ ?>

<?php if ($WHERE_AM_I == 'page') { // Content taki jak w single.php ?>

<div style="max-width: 1100px; margin: 32px auto;">

<?php // wtyczki wpinane w początek strony ?>
<?php Theme::plugins('pageBegin'); ?>

<h1>
	<?php echo $page->title(); ?>
</h1>

<?php // Cover image ?>
<?php if ($page->coverImage()): ?>
<div style="height: 320px; width: 100%; background: url('<?php echo $page->coverImage(); ?>'); background-size: cover; background-position: center;box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.3);"><!-- dummy --></div>
<?php endif ?>

<!-- Full content -->
<?php echo $page->content(); ?>
<a href="<?php echo Theme::siteUrl() ?>" style="display: block; width: fit-content; color: #666; background: transparent; padding: 16px;">Wróć do bloga</a>

	</div>

<!-- Load Bludit Plugins: Page End -->
<?php Theme::plugins('pageEnd'); ?>



<?php } else { // Dalej content taki jak w category.php ?>
	
	<?php // automat do wyświetlania info o braku wpisów ?>
	<?php if (empty($content)): ?>
		<div class="mt-4">
		<?php $language->p('No pages found') ?>
		</div>
	<?php endif ?>

	<?php foreach ($content as $page): ?>
	<?php // Post ?>
	<div style="max-width: 1100px; margin: 32px auto;">

		<?php // Load Bludit Plugins: Page Begin ?>
		<?php Theme::plugins('pageBegin'); ?>

		
		<h2 class="title"><a class="text-dark" href="<?php echo $page->permalink(); ?>"><?php echo $page->title(); ?></a></h2>
		
		<?php // Cover image ?>
		<?php if ($page->coverImage()): ?>
		<div style="height: 320px; width: 100%; background: url('<?php echo $page->coverImage(); ?>'); background-size: cover; background-position: center;box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.3);"><!-- dummy --></div>
		<?php endif ?>

		<?php // Breaked content ?>
		<?php echo $page->contentBreak(); ?>

		<?php // "Read more" button ?>
		<?php if ($page->readMore()): ?>
		<a href="<?php echo $page->permalink(); ?>" style="display: block; width: fit-content; color: #666; background: transparent; padding: 16px;">Czytaj dalej</a>
		<?php endif ?>

	</div>

		<!-- Load Bludit Plugins: Page End -->
		<?php Theme::plugins('pageEnd'); ?>

	<hr>
	<?php endforeach ?>

	<!-- Pagination -->
	<?php if (Paginator::numberOfPages()>1): ?>
	<nav class="paginator">
		<ul class="pagination flex-wrap">

			<!-- Previous button -->
			<li class="page-item mr-2 <?php if (!Paginator::showPrev()) echo 'disabled' ?>">
				<a class="page-link" href="<?php echo Paginator::previousPageUrl() ?>" tabindex="-1">&#9664; <?php echo $L->get('Previous'); ?></a>
			</li>

			<!-- Home button -->
			<li class="page-item <?php if (Paginator::currentPage()==1) echo 'disabled' ?>">
				<a class="page-link" href="<?php echo Theme::siteUrl() ?>">Home</a>
			</li>

			<!-- Next button -->
			<li class="page-item ml-2 <?php if (!Paginator::showNext()) echo 'disabled' ?>">
				<a class="page-link" href="<?php echo Paginator::nextPageUrl() ?>"><?php echo $L->get('Next'); ?> &#9658;</a>
			</li>

		</ul>
	</nav>
	<?php endif ?>

<?php }  ?>

<?php /* END Main Content standard */ ?>

</div>