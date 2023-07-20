import Pixel from './Pixel';
import styles from '../app.css';

export default function PixelPage({ PixelData }) {
  // PixelData is your array, is there a way to store changed states? 
  return (
    <div className={styles.pixelContainer}>
      {
        PixelData.map((item, i) => (
          <Pixel 
            {...item}
            key={item.id + i} 
          />
        ))
      }
    </div>
  );
}
