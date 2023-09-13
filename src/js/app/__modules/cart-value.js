const cartTotal = document.querySelector(
	".block-cart__total span[data-cart-total]"
);
const products = document.querySelectorAll(".block-cart__item");
const shipping = document.querySelector(
	".block-cart__total span[data-cart-shipping]"
);
const blurredClass = "block-cart__item-deleted";
const allPricesElems = document.querySelectorAll(".block-cart__current-price");

/**
 * Updates the value of the product as well as the total cart value.
 *
 * @param {HTMLElement} product - The DOM element of the product whose value is to be updated.
 * @param {boolean} isIncrement - Determines whether the product quantity should be increased or decreased.
 */
function updateCartValue(product, isIncrement) {
	// Select necessary elements from the product.
	const quantity = product.querySelector(".block-cart__quantity");
	const productPrice = product.querySelector(".block-cart__current-price");
	const initialPrice = product.querySelector(".block-cart__initial-price");
	let productPhoto = product.querySelector(".block-cart__item-img");

	// Convert string values to numbers.
	let quantityValue = +quantity.value;
	let initialPriceValue = +initialPrice.innerText;

	// If isIncrement is true, we increase the quantity, otherwise we decrease it.
	if (isIncrement) {
		quantityValue++;
		if (quantityValue === 1) {
			productPhoto.classList.remove(blurredClass);
		}
	} else {
		if (quantityValue <= 0) {
			// Prevent decrementing the quantity below 0.
			return;
		}
		quantityValue--;
		if (quantityValue === 0) {
			// If product quantity is 0, add the class that blurs the product.
			productPhoto.classList.add(blurredClass);
		}
	}

	// Update the quantity and price of the product in the DOM.
	quantity.value = quantityValue;
	productPrice.innerText = (initialPriceValue * quantityValue).toFixed(2);

	// Calculate the total cost of all products.
	const allPrices = [...allPricesElems].map(
		(priceElem) => +priceElem.innerText
	);
	const totalValue =
		allPrices.reduce((acc, curr) => acc + curr, 0) + +shipping.innerText;

	// Update the total cart value.
	cartTotal.innerText = totalValue.toFixed(2);
}

/**
 * Initialization function that adds event listeners to the buttons of each product.
 */
export const cartValue = () => {
	products.forEach((product) => {
		const addButton = product.querySelector(".block-cart__math--add");
		const subtButton = product.querySelector(".block-cart__math--subt");

		addButton.addEventListener("click", () => updateCartValue(product, true));

		subtButton.addEventListener("click", () => updateCartValue(product, false));
	});
};
