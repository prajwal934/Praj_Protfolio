//Basic styles import
import styles from './styles/about.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <article className={styles.textAbt}>
          <h1 id="h1BG">Architecture</h1>

          <p>
            I develop, even though I&apos;m probably not the typical backend engineer 
            just writing code. You can always find me optimizing APIs, 
            refining database queries, and architecting scalable systems (~_^).
            Building efficient and high-performance backends is something 
            I&apos;m committed to doing while ensuring everything runs seamlessly.
          </p>
        </article>

        <article className={styles.textAbt}>
          <h1 id="h1BG">Engineering</h1>

          <p>
            I have the ideal tools for developing Java backend applications, and I
            can definitely work without them to produce quick, durable solutions
            that are designed for growth &#8211; performance and scalability are
            top objectives on my radar.
          </p>
        </article>
      </div>
    </section>
  );
}
