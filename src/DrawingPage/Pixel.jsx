import { useState } from 'react';

export default function Pixel({ id }) {

  const [color, setColor] = useState('pink');

  function handleColor() {
    setColor('grey');
  }

  return (
    <div style={{ background: color }} onClick={handleColor}>
      <p>{id}</p>
    </div>
  );
}
