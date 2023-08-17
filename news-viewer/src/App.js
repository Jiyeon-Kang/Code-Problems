import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  // API를 넘겨받을 state 선언
  const [data, setData ] = useState(null);

  const onClick = async () => {
    // axios 라이브러리로 apic call 
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=jp&apiKey=912eb5849b2448f4ba8bd2254bdde456',
      );
      // 응답 data state 저장
      setData(response.data);
    } catch (e) {
      console.log(e)
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => onClick()}>呼び込む</button>
      </div>
      {/* JSON 문자열 뿌릴 영역 */}
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};

export default App