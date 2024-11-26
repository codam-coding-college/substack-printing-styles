console.log('[Substack Printing Styles] Print.js loaded');

function getArticle() {
	return document.querySelector('article');
}

function copyNewsletterTitleToPrint() {
	console.log('[Substack Printing Styles] Copying newsletter title to print');
	const titleElem = document.querySelector('.topbar-content .navbar-title');
	console.log('[Substack Printing Styles] Title element:', titleElem);
	const article = getArticle();
	const postHeader = article.querySelector('.post-header');
	// Copy the title to the print header by cloning the element
	const titleClone = titleElem.cloneNode(true);
	titleClone.classList.add('substack-printing-only');
	postHeader.insertBefore(titleClone, postHeader.firstChild);
	console.log('[Substack Printing Styles] Title cloned:', titleClone);
}

function createPrintPostFooter() {
	console.log('[Substack Printing Styles] Creating printable post footer');
	const article = getArticle();
	const postFooter = article.querySelector('.post-footer');
	const printPostFooter = document.createElement('div');
	printPostFooter.classList.add('print-post-footer', 'substack-printing-only');
	article.insertBefore(printPostFooter, postFooter.nextSibling);
	console.log('[Substack Printing Styles] Printable post footer created:', printPostFooter);
}

function copyArticleCopyrightToPrint() {
	console.log('[Substack Printing Styles] Copying article copyright to print');
	const footerCopyrightBlurb = document.querySelector('.footer-copyright-blurb');
	console.log('[Substack Printing Styles] Footer copyright blurb:', footerCopyrightBlurb);
	const article = getArticle();
	const printPostFooter = article.querySelector('.print-post-footer.substack-printing-only');
	// Copy the copyright to the print footer by cloning the element
	const copyrightClone = footerCopyrightBlurb.cloneNode(true);
	printPostFooter.appendChild(copyrightClone);
	console.log('[Substack Printing Styles] Copyright cloned:', copyrightClone);
}

createPrintPostFooter();
copyNewsletterTitleToPrint();
copyArticleCopyrightToPrint();
