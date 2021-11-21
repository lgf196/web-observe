import React, { memo, useEffect, useState } from 'react';
import { Button, Space } from 'antd';
const MutationObservers = memo(function MutationObservers() {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    // 选择需要观察变动的节点
    const targetNode = document.getElementById('mutation');

    // 观察器的配置（需要观察什么变动）
    const config = { attributes: true, childList: true, subtree: true };

    // 当观察到变动时执行的回调函数
    /* eslint-disable */
    const callback: MutationCallback = function (mutationsList, observer) {
      mutationsList.forEach((mutation) => {
        switch (mutation.type) {
          case 'childList':
            if (mutation.addedNodes.length) {
              console.log('有一个节点被添加');
            }
            if (mutation.removedNodes.length) {
              console.log('有一个节点被移除');
            }
            break;
          case 'attributes':
            console.log('这个 ' + mutation.attributeName + ' 属性有被改变过');
            break;
          case 'characterData':
            console.log('characterData节点变化');
            break;
        }
      });
    };

    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback);

    // 以上述配置开始观察目标节点
    observer.observe(targetNode!, config);

    return () => {
      //  之后，可停止观察
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <Button type="primary" onClick={() => setList((pre) => [...pre, '节点'])}>
        添加元素
      </Button>
      <div id="mutation">
        {list.map((item, index) => (
          <div key={index}>
            <Space>
              <span>
                {item}
                {index + 1}
              </span>
              <Button
                danger
                size="small"
                onClick={() => setList(list.filter((item, k) => k !== index))}
              >
                删除
              </Button>
            </Space>
          </div>
        ))}
      </div>
    </>
  );
});

export default MutationObservers;
