import React, { memo, useEffect } from 'react';

const Anchor = memo(function Anchor() {
  const navList = [
    { title: '家电区', bg: '#ff000026', id: 'homeAppliances' },
    { title: '服装区', bg: '#9c27b03d', id: 'clothing' },
    { title: '美食区', bg: '#3f51b547', id: 'delicacy' },
    { title: '生活区', bg: '#03a9f442', id: 'life' },
    { title: '婴儿区', bg: '#ff572238', id: 'baby' },
  ];
  const getStyle = (bg: string): React.CSSProperties => ({
    background: bg,
    height: '700px',
    width: '70%',
    margin: '20px 0',
  });
  const positioningNavigation = (id: string) => {
    const element = document.querySelector(`#${id}`);
    element && element.scrollIntoView({ behavior: 'smooth' });
  };
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

    navList.forEach((item) => {
      const element = document.querySelector(`#${item.id}`);
      element && intersection.observe(element);
    });
    return () => {
      intersection.disconnect();
    };
  }, []);
  return (
    <div>
      {navList.map((item, index) => (
        <div style={getStyle(item.bg)} id={item.id} key={index}>
          <h2 style={{ textAlign: 'center' }}>{item.title}</h2>
        </div>
      ))}
      <ul
        style={{
          position: 'fixed',
          top: '20%',
          right: '50px',
          border: '1px solid #ccc',
          textAlign: 'center',
        }}
      >
        {navList.map((item) => (
          <li
            key={item.id}
            style={{ padding: '10px', cursor: 'pointer' }}
            onClick={() => positioningNavigation(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Anchor;
