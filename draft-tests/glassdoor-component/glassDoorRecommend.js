import { checkCssProperty } from '../../../helpers/helpers';
import { onDesktop, onMobile, onTabletLandscape, onTabletPortrait } from '../../../helpers/enviromentTypes';

describe('GlassDoor component Recommend section', () => {
	beforeEach(() => {
		browser.url('/about/careers.html');
	});

	/* Desktop */
	describe('Desktop', () => {
		onDesktop();

		it('Need has three columns on Desktop', async () => {
			await GlassDoorComponent.checkCountBlocks();
		});

		it('Checking styles for ".progress-meter" section', () => {
			checkCssProperty(GlassDoorComponent.progressMeter, [['stroke-width', '19px']]);
		});
	});

	/* Mobile */
	describe('Mobile', () => {
		onMobile();

		it('Need has three columns on Mobile', async () => {
			await onMobile();
			await checkCountBlocks();
		});
	});

	/* onTabletLandscape */
	describe('TabletLandscape', () => {
		onTabletLandscape();

		it('Need has three columns on TabletLandscape', async () => {
			await await checkCountBlocks();
		});
	});

	/* onTabletPortrait */
	describe('TabletPortrait', () => {
		onTabletPortrait();

		it('Need has three columns on TabletPortrait', async () => {
			await await checkCountBlocks();
		});
	});
});
