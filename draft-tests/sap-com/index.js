import { checkCssProperty } from '../../helpers/helpers';
import { onDesktop, onMobile, onTabletLandscape, onTabletPortrait } from '../../helpers/enviromentTypes';

describe('GlassDoor component', () => {
	beforeEach(() => {
		browser.url('/about/careers.html');
	});

	/* Desktop */
	describe('Desktop', () => {
		onDesktop();

		it('Need has three columns on Desktop', async () => {
			browser.pause(2000);
			const items = await $('.threeColumnGlassDoorStyle .responsiveColumnControl-item-set').children().length;

			assert.strictEqual(items, '3');
		});

		it('Checking styles for ".progress-meter" section', () => {
			const progressMeter = $('.threeColumnGlassDoorStyle .responsiveColumnControl-item-set .progress-meter');
			checkCssProperty(progressMeter, [['stroke-width', '19px']]);
		});
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
