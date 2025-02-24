/* eslint-disable @next/next/no-img-element */
import React from "react";

//Basic styles import
import styles from "./styles/experience.module.scss";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.expWrapper}>
        <article className={styles.expText}>
          <h1 id="h1BG">Over the years,</h1>

          <p>(~_^)</p>
          <p>
            I&apos;ve built scalable and high-performance backend systems across
            diverse domains, focusing on efficiency, security, and seamless
            digital experiences.
          </p>

          <p>
            I played a key role in developing <strong>Skyword</strong>, a
            content management platform, implementing microservices and
            optimizing search performance. I also built{" "}
            <strong>HotelHive</strong>, a microservices-driven hotel management
            system, enhancing booking workflows and real-time event processing.
            Additionally, I created <strong>Task Tracker</strong>, a
            productivity tool with role-based access control and performance
            analytics to streamline task management.
          </p>
        </article>
      </div>
    </section>
  );
}
