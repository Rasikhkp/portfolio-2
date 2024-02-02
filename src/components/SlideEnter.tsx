import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const SlideEnter = ({
    children,
    className,
}: {
    children: any;
    className?: string;
}) => {
    const rootRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to("#content", { opacity: 0, duration: 0 });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "0% 100%",
                },
            });

            tl.to("#cover", {
                width: "100%",
                duration: 0.7,
                ease: "power3.inOut",
            })
                .to("#content", { opacity: "100%", duration: 0 })
                .to("#cover", {
                    marginLeft: "100%",
                    duration: 0.7,
                    ease: "power3.inOut",
                });
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            className={`relative overflow-hidden w-fit ${className}`}
            ref={rootRef}
        >
            <div id="content">{children}</div>
            <div
                id="cover"
                className="absolute top-0 h-full bg-slate-200"
            ></div>
        </div>
    );
};

export default SlideEnter;
