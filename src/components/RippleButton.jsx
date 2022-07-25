function hideRippleButtonLoader(e) {
	document.getElementById("rippleLoader").classList.add("hidden")
	document.getElementById("rippleLoader").setAttribute("disabled", false)
	console.log(e);
}

function showRippleButtonLoader(e) {
	document.getElementById("rippleLoader").classList.remove("hidden")
	document.getElementById("rippleLoader").setAttribute("disabled", true)
	console.log(e);
}

function RippleButton(props) {
	// const [isLoading, setIsLoading] = useState(false)
	let isLoading = props.isLoading
console.log(isLoading);
	function handleRippleEffect(e) {
		let rippleEffect = document.createElement("span");
		rippleEffect.classList.add("ripple-effect");
		rippleEffect.style.left = `${e.clientX - e.target.offsetLeft}px`;
		rippleEffect.style.top = `${e.clientY - e.target.offsetTop}px`;
		e.target.appendChild(rippleEffect);
		setTimeout(function () {
			rippleEffect.remove();
		}, 666);
	}

	return (
		<button
			id={props?.id}
			className={"ripple-btn " + props?.className}
			style={props?.style}
			type={props?.id || "button"}
			onClick={(e) => {
				handleRippleEffect(e);

				if (!props?.click) return;

				if (Array.isArray(props?.click)) {
					return props?.click.map((clk) => clk());
				}

				if (props?.click instanceof Function) return props?.click();
			}}
		>

			{
				!isLoading ?
					""
					:
					<svg id="rippleLoader" className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
						<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
			}

			{props?.children}
		</button>
	);
}
export { RippleButton, showRippleButtonLoader, hideRippleButtonLoader }