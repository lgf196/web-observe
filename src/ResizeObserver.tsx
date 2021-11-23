import React, { memo, useEffect } from 'react';

const ResizeObserverComponent = memo(function ResizeObserverComponent() {
  useEffect(() => {
    /* eslint-disable */
    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach((item) => {
        if (item.contentRect) {
          const { width } = item.contentRect;
          (item.target as any).style.fontSize = Math.ceil(width / 14) + 'px';
        }
      });
    };
    const resizeObserver = new ResizeObserver(callback);
    document.querySelector('#resize')! &&
      resizeObserver.observe(document.querySelector('#resize')!);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <>
      <div id="resize" style={{ textAlign: 'center', lineHeight: '150px' }}>
        ant-simple-pro
      </div>
    </>
  );
});

export default ResizeObserverComponent;
