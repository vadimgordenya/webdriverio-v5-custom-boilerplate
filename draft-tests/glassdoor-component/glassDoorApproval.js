import { checkCssProperty } from '../../helpers/helpers';
import { onDesktop, onMobile, onTabletLandscape, onTabletPortrait } from '../../helpers/enviromentTypes';

describe('Glassdoor Widget Approval Item', () => {
	beforeEach(() => {
		browser.url('/about/careers.html');
	});

	/**
	 * Objects
	 */
	const isIE = $$('.ie11');
	const glassdoorWidget = $$('.glassdoorWidget.slick-carousel');
	const glassdoorItemApproval = browser.findElementFromElement(glassdoorWidget, '.glassdoor-item-approval');
	const approvalSection = browser.findElementFromElement(glassdoorItemApproval, '.glassdoorWidgetComponent.approval');
	const approvalContainer = browser.findElementFromElement(approvalSection, '.glassdoorWidgetComponent.approval .approval-container');
	const circleRating = browser.findElementFromElement(approvalContainer, '.circle-rating');
	const circleContainer = browser.findElementFromElement(circleRating, '.circle-container');
	const valueRating = browser.findElementFromElement(circleContainer, '.value-rating');
	const progressBar = browser.findElementFromElement(valueRating, '.progress-bar');
	const progressMeter = browser.findElementFromElement(progressBar, '.progress-meter');
	const progressValue = browser.findElementFromElement(progressBar, '.progress-value');
	const approvalImg = browser.findElementFromElement(approvalContainer, '.approval-img');
	const approvalDescription = browser.findElementFromElement(approvalContainer, '.approval-description');
	const approvalPosition = browser.findElementFromElement(approvalDescription, '.approval-position');
	const approvalUsername = browser.findElementFromElement(approvalDescription, '.approval-username');
	const poweredGd = browser.findElementFromElement(approvalSection, '.powered-gd');
	const img = browser.findElementFromElement(poweredGd, 'img');

	/* Desktop */
	describe('Desktop', () => {
		onDesktop();

		it('The each widget within 4 column grid which is ~ 33.33%', async () => {
			let columnGridWidth = glassdoorWidget.getSize() / 3;

			assert.strictEqual(columnGridWidth, '33.33%');
		});

		// it('Checking styles for ".progress-meter" section', () => {
		// 	checkCssProperty(GlassDoorComponent.progressMeter, [['stroke-width', '19px']]);
		// });
	});

	// /* Mobile */
	// describe('Mobile', () => {
	// 	onMobile();

	// 	it('Need has three columns on Mobile', async () => {
	// 		await onMobile();
	// 		await checkCountBlocks();
	// 	});
	// });

	// /* onTabletLandscape */
	// describe('TabletLandscape', () => {
	// 	onTabletLandscape();

	// 	it('Need has three columns on TabletLandscape', async () => {
	// 		await await checkCountBlocks();
	// 	});
	// });

	// /* onTabletPortrait */
	// describe('TabletPortrait', () => {
	// 	onTabletPortrait();

	// 	it('Need has three columns on TabletPortrait', async () => {
	// 		await await checkCountBlocks();
	// 	});
	// });
});
