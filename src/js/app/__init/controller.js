import { cartValue } from "../__modules/cart-value";
import { customCheckbox } from "../__modules/custom-checkbox";

// GLOBAL APP CONTROLLER
const controller = {
	init() {},
	loaded() {
		cartValue();
		customCheckbox();
	},
	resized() {},
	mouseUp(e) {},
	keyDown(e) {},
	scrolled(e) {},
};

export default controller;
