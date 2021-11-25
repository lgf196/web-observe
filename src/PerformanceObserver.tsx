import React, { memo, useEffect } from 'react';
import { Button } from 'antd';
const PerformanceObserverComponent = memo(function PerformanceObserverComponent() {
  useEffect(() => {
    /* eslint-disable */
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log(
          '名称: ' +
            entry.name +
            ', 类型: ' +
            entry.entryType +
            ', 开始时间: ' +
            entry.startTime +
            ', 时间: ' +
            entry.duration +
            '\n',
        );
      });
    });
    observer.observe({ entryTypes: ['resource', 'mark', 'measure'] });
    performance.mark('registered-observer');
    return () => {
      observer.disconnect();
    };
  }, []);
  const trigger = () => {
    performance.measure('button clicked');
  };
  return (
    <>
      <Button danger size="small" onClick={trigger}>
        点击我看性能
      </Button>
    </>
  );
});

export default PerformanceObserverComponent;
