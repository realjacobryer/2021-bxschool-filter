// silence
document.addEventListener("DOMContentLoaded", function (e) {
	const filter_dropdowns = document.querySelectorAll("select.filter");

	filter_dropdowns.forEach(function (filter_dropdown) {
		filter_dropdown.addEventListener("change", function (e) {
			filter_schools();
		});
	});
});

function filter_schools() {
	const rank_class = document.querySelector("#rank").value;
	const poverty_class = document.querySelector("#poverty").value;
	const charter_class = document.querySelector("#charter").value;
	const race_class = document.querySelector("#race").value;


	const active_items = document.querySelectorAll(".item.active");

	active_items.forEach(function (item) {
		item.classList.remove("active");
	});

	const filtered_items = document.querySelectorAll(`.item.${rank_class}.${poverty_class}.${race_class}.${charter_class}`);

	filtered_items.forEach(function (item) {
		item.classList.add("active");
	});
}