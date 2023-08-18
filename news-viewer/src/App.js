import React, { useCallback, useState } from 'react';
import Categories from '.Categories';
import NewsList from '.NewsList';

const App = () => {

  // 기본 카테고리 state 선언
  const [category, setCategory] = useState('all')
  // 콜백으로 사용 할 카테고리 함수
  const onSelect = useCallback(Category => setCategory(Category), [])

  return (
    <>
      {/* props로 카테고리 state와 함수를 넘겨줌 */}
      <Categories  category={category} onSelect={onSelect} />
      <NewsList category={category}/>
    </>
  );
};

export default App