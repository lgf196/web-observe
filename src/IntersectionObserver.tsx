import React, { memo, useEffect } from 'react';

const IntersectionComponent = memo(function IntersectionComponent() {
  useEffect(() => {
    /* eslint-disable */
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          console.log(`可见`);
        } else {
          console.log(`不可见`);
        }
      });
      console.log(`entries`, entries);
    };
    const intersection = new IntersectionObserver(callback);

    document.querySelector('#scrollerFooter') &&
      intersection.observe(document.querySelector('#scrollerFooter')!);
    return () => {
      intersection.disconnect();
    };
  }, []);
  return (
    <div>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <p>ant-simple-pro</p>
      <div id="scrollerFooter">我要出来啦</div>
    </div>
  );
});

export default IntersectionComponent;
