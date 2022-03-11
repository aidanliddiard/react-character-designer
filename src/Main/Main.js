import './Main.css';
import { useState } from 'react';

import Controls from '../Controls/Controls';
import Display from '../Display/Display';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');

  return (
    <main>
      <Controls setHead={setHead} setMiddle={setMiddle} />
      <Display head={head} middle={middle} />
    </main>
  );
}
