export default function RippleButton(props) {
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
			className={"ripple-btn " + props?.class}
			style={props?.style}
			type={props?.id || "button"}
			onClick={(e) => {
				handleRippleEffect(e);

				if (!props?.click) return;

				if (Array.isArray(props?.click)) {
					props?.click.map((clk) => clk());
				}

				if (props?.click instanceof Function) return props?.click();
			}}
		>
			{props?.children}
		</button>
	);
}
