/**
 * Availible enviroment types
 *
 * @function onDesktop - indicator for Desktop
 * @function onTabletLandscape - indicator for TabletLandscape
 * @function onTabletPortrait - indicator for TabletPortrait
 * @function onMobile - indicator for Mobile
 */

export function onDesktop() {
	return browser.setWindowSize(1600, 1400);
}
export function onTabletLandscape() {
	return browser.setWindowSize(1200, 1400);
}
export function onTabletPortrait() {
	return browser.setWindowSize(980, 1400);
}
export function onMobile() {
	return browser.setWindowSize(768, 1400);
}

export function customResize(width = 500, height = 500) {
	return browser.setWindowSize(width, height);
}
