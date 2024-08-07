import { useEffect, useRef } from 'react'

export default function NumberCount(props) {
  
  // create a ref and declare an instance for each countUp animation
  const countupRef = useRef(null);
  let countUpAnim;
  // Use the suffix prop to add a suffix to the number
  const options = {
    suffix: props.suffix,
  }

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  // you don't have to import this way, but this works best for next.js
  async function initCountUp() {
    const countUpModule = await import('countup.js');
    countUpAnim = await new countUpModule.CountUp(countupRef.current, props.value, options);
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }
 
  // useEffect with empty dependency array runs once when component is mounted
  useEffect(() => {
    initCountUp();
  }, []);


  
  // in the jsx use the ref attribute to bind the element to `countupRef`
  return (
    <>
      <h1 color='#FFFFFF' ref={countupRef} onClick={() => {
        // replay animation on click
        countUpAnim.reset();
        countUpAnim.start();
      }}>0</h1>
    </>
  );
}