//Basic styles import
import styles from './styles/header.module.scss';

export default function Header() {
  return (
    <header id={styles.header}>
      <div className={styles.wrapperLanding}>
        <div className={styles.text}>
          <div className={styles.textI}>
            <div className={styles.gradientText}>
              <h1>Backend</h1>

              <h1>
                Developer<span>.</span>
              </h1>
            </div>

            <p>
            I craft robust and scalable backend systems for seamless performance.
            </p>
          </div>

          <div className={styles.paraG}>
            <p id="h1BG">
              Highly skilled in scalable backend architecture, system design &amp; API engineering.
            </p>

            <p id="h1BG">
              Over a two years of experience building products for clients
              across india.
            </p>
          </div>
        </div>

        <div className={styles.imageH}>
          <div>
          
            <div
              role="img"
              aria-label="Prajwal's Picture"
              className={styles.fineBoy}
            />
          </div>
          <span></span>
        </div>
      </div>
    </header>
  );
}
