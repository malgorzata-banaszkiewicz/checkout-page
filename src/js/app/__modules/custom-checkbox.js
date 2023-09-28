const checkbox = document.querySelector(".block-form__checkbox");
const checkboxContainer = document.querySelector(
	".block-form__checkbox-container"
);

export const customCheckbox = () => {
	checkboxContainer.addEventListener("click", () => {
		if (!checkbox.checked) {
			checkbox.setAttribute("checked", "");
			checkbox.checked = true;
		} else if (checkbox.checked) {
			checkbox.removeAttribute("checked");
			checkbox.checked = false;
		}
	});
};
