import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [drawSection1, setDrawSection1] = useState('');
  const [drawSection2, setDrawSection2] = useState('');
  const [drawSection3, setDrawSection3] = useState('');
  const [drawSection4, setDrawSection4] = useState('');

  const starsPattern = (count, type, star, space) => {
    let result = '';
    switch (type) {
      case 'section1':
        for (let i = 0; i <= count; i++) {
          for (let j = 0; j <= i - 1; j++) {
            result += space;
          }
          for (let k = 0; k < count - i + 1; k++) {
            result += star;
          }
          result += '\n';
        }
        break;
      case 'section2':
        for (let i = count; i >= 0; i--) {
          for (let j = 0; j <= i; j++) {
            result += star;
          }
          for (let k = 0; k < count - i; k++) {
            result += space;
          }
          result += '\n';
        }
          break;
      case 'section3':
          for (let i = count; i >= 0; i--) {
            for (let j = 0; j <= i -1; j++) {
              result += space;
            }
            for (let k = 0; k < count - i +1; k++) {
              result += star;
            }
            result += '\n';
          }
        break;
      case 'section4':
        for (let i = 0; i <= count; i++) {
          for (let j = 0; j <= i; j++) {
            result += star;
          }
          for (let k = 0; k < count - i; k++) {
            result += space;
          }
          result += '\n';
        }
        break;
      default:
        break;
    }
    return result;
  };

  const drawStars = () => {
    if (count < 20) {
      const stars1 = starsPattern(count, 'section1', '⭐', '🌠');
      const stars2 = starsPattern(count, 'section2', '⭐', '🌠');
      const stars3 = starsPattern(count, 'section3', '⭐', '🌠');
      const stars4 = starsPattern(count, 'section4', '⭐', '🌠');

      setDrawSection1(stars1);
      setDrawSection2(stars2);
      setDrawSection3(stars3);
      setDrawSection4(stars4);

      setCount(count + 1); // Increment count
    } else {
      alert('최대 숫자입니다 (20).');
    }
  };

  return (
    <div>
      <button onClick={drawStars}>{count}+</button>
      <div>
        <div style={{ display: 'inline-block' }}>
          <pre style={{ margin: '0px' }}>{drawSection1}</pre>
          <pre style={{ margin: '0px' }}>{drawSection2}</pre>
        </div>
        <div style={{ display: 'inline-block' }}>
          <pre style={{ margin: '0px' }}>{drawSection3}</pre>
          <pre style={{ margin: '0px' }}>{drawSection4}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
