import './Main.css';
import { useState } from 'react';

import Controls from '../Controls/Controls';
import Display from '../Display/Display';

export default function Main() {
  const [head, setHead] = useState('bird');

  return (
    <main>
      <Controls setHead={setHead} />
      <Display head={head} />
    </main>
  );
}
