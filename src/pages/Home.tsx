import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
	gsap.registerPlugin(ScrollTrigger);
	const rootRef = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to("#boxFirst", {
				x: 1000,
				duration: 9,
				ease: "back.out(1.7)",
				// rotate: 1080,
				scrollTrigger: {
					trigger: rootRef.current,
					// start: "top 70%",
					// end: "top 10%",
					scrub: true,
					// markers: true,
					toggleActions: "restart none resume none",
				},
			});

			gsap.to(".bulat", {
				scrollTrigger: {
					trigger: ".trigger",
					pin: ".bulat",
					markers: true,
					// pinSpacing: false,
					start: "top 70%",
					end: "top 10%",
				},
			});
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<>
			<div ref={rootRef} className="w-full h-screen bg-slate-100">
				<div className="w-full h-screen bg-red-400"></div>

				<div id="boxFirst" className="w-20 h-20 mb-3 bg-red-400"></div>
				<div id="boxFirst" className="w-20 h-20 mb-3 bg-red-400"></div>
				<div id="boxFirst" className="w-20 h-20 mb-3 bg-red-400"></div>
				<div id="boxFirst" className="w-20 h-20 mb-3 bg-red-400"></div>
				<div id="boxFirst" className="w-20 h-20 mb-3 bg-red-400"></div>

				<div className="w-full h-[2000px] bg-red-400">
					<div className="w-20 h-20 rounded-full bulat bg-slate-600"></div>
					<div className="w-20 h-20 mt-10 bg-yellow-400 trigger"></div>
				</div>
			</div>
		</>
	);
};

export default Home;
