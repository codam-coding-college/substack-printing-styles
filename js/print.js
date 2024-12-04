console.log('[Substack Printing Styles] Print.js loaded');

function getArticle() {
	return document.querySelector('article');
}

function checkForPaywall() {
	const paywall = document.querySelector('.paywall');
	return (paywall !== null);
}

function addPaywallNotice() {
	console.log('[Substack Printing Styles] Adding paywall notice to the beginning of the article');
	const article = getArticle();
	const paywallNotice = document.createElement('div');
	paywallNotice.classList.add('paywall-notice');
	paywallNotice.style.color = 'white';
	paywallNotice.style.backgroundColor = 'darkred';
	paywallNotice.style.fontWeight = 'bold';
	paywallNotice.style.padding = '1em';
	paywallNotice.style.marginBottom = '1em';
	paywallNotice.textContent = 'This article is behind a paywall and may not print properly. Either log in to Substack or click the "View in browser" link in the newsletter e-mail to view and print the article.';
	article.insertBefore(paywallNotice, article.firstChild);
	console.log(paywallNotice);
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
	if (!postFooter) {
		console.warn('[Substack Printing Styles] No post footer found, cannot create print footer!');
		return;
	}
	const printPostFooter = document.createElement('div');
	printPostFooter.classList.add('print-post-footer', 'substack-printing-only');
	postFooter.parentElement.insertBefore(printPostFooter, postFooter.nextSibling);
	console.log('[Substack Printing Styles] Printable post footer created:', printPostFooter);
}

function copyArticleCopyrightToPrint() {
	console.log('[Substack Printing Styles] Copying article copyright to print');
	const footerCopyrightBlurb = document.querySelector('.footer-copyright-blurb');
	console.log('[Substack Printing Styles] Footer copyright blurb:', footerCopyrightBlurb);
	const article = getArticle();
	const printPostFooter = article.querySelector('.print-post-footer.substack-printing-only');
	if (!printPostFooter) {
		console.warn('[Substack Printing Styles] No print footer found, cannot copy article copyright!');
		return;
	}
	// Copy the copyright to the print footer by cloning the element
	const copyrightClone = footerCopyrightBlurb.cloneNode(true);
	printPostFooter.appendChild(copyrightClone);
	console.log('[Substack Printing Styles] Copyright cloned:', copyrightClone);
}

if (checkForPaywall()) {
	console.warn('[Substack Printing Styles] Paywall detected! This article wouldn\'t print properly.');
	// addPaywallNotice();
}
else {
	createPrintPostFooter();
	copyNewsletterTitleToPrint();
	copyArticleCopyrightToPrint();
}
