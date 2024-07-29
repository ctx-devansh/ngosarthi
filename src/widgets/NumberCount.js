import { useEffect, useRef } from "react";

export default function NumberCount(props) {
  // create a ref and declare an instance for each countUp animation
  const countupRef = useRef(null);
  let countUpAnim;

  // Use the suffix prop to add a suffix to the number
  const options = {
    suffix: props.suffix,
  };

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  async function initCountUp() {
    const countUpModule = await import("countup.js");
    countUpAnim = new countUpModule.CountUp(
      countupRef.current,
      props.value,
      options
    );
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initCountUp();
            observer.unobserve(countupRef.current); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (countupRef.current) {
      observer.observe(countupRef.current);
    }

    return () => {
      if (countupRef.current) {
        observer.unobserve(countupRef.current);
      }
    };
  }, []);

  // in the jsx use the ref attribute to bind the element to `countupRef`
  return (
    <h1
      ref={countupRef}
      onClick={() => {
        // replay animation on click
        countUpAnim.reset();
        countUpAnim.start();
      }}
    >
      0
    </h1>
  );
}
