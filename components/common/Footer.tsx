//Basic styles import
import Link from 'next/link';
import styles from './styles/footer.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id={styles.footer}>
      <div className={styles.footWrapper}>
        <div className={styles.ulBox}>
          <h3>say hello</h3>

          <ul>
            <li>
              <a href="mailto:samalprajwal.302@gmail.com">hi@praj.dev</a>
            </li>
            <li>
              <a
                href="https://medium.com/@samalprajwal.05"
                target="_blanket"
                rel="noopener"
              >
                blog.praj.dev
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.ulBox}>
          <ul>
            <li>
              <Link href="#projects">My Works</Link>
            </li>
            <li>
              <a
                href="https://github.com/prajwal934"
                target="_blanket"
                rel="noopener"
              >
                My Shelf
              </a>
            </li>
            <li>
              {/* <a href="/files/resume.pdf" target="_blanket" rel="noopener">
                My Résumé
              </a> */}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footBase}>
        <small>&copy; Prajwal Samal {year}</small>

        <ul>
          <li>
            <a
              href="https://x.com/praj_dev_"
              target="_blanket"
              rel="noopener"
            >
            <TwitterIcon style={{ fontSize: 25, marginRight: 8 }} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/prajwal934"
              target="_blanket"
              rel="noopener"
            >
            <GitHubIcon style={{ fontSize: 25, marginRight: 8 }} />
            </a>
          </li>
        
          <li>
            <a
              href="https://www.instagram.com/its__p_r_a_j_w_a_l/"
              target="_blanket"
              rel="noopener"
            >
              <InstagramIcon style={{ fontSize: 25, marginRight: 8 }} />
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
}


// // Basic styles import
// import Link from 'next/link';
// import styles from './styles/footer.module.scss';


// import GitHubIcon from '@mui/icons-material/GitHub';

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer id={styles.footer}>
//       <div className={styles.footWrapper}>
//         <div className={styles.ulBox}>
//           <h3>say hello</h3>

//           <ul>
//             <li>
//               <a href="mailto:samalprajwal.302@gmail.com">hi@praj.dev</a>
//             </li>
//             <li>
//               <a
//                 href="https://medium.com/@samalprajwal.05"
//                 target="_blank"
//                 rel="noopener"
//               >
//                 {/* <ArticleIcon style={{ fontSize: 18, marginRight: 5 }} />
//                 blog.praj.dev */}
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className={styles.ulBox}>
//           <ul>
//             <li>
//               <Link href="#projects">My Works</Link>
//             </li>
//             <li>
//               <a
//                 href="https://github.com/prajwal934"
//                 target="_blank"
//                 rel="noopener"
//               >
//                 <GitHubIcon style={{ fontSize: 18, marginRight: 5 }} />
//                 My Shelf
//               </a>
//             </li>
//             <li>
//               {/* <a href="/files/resume.pdf" target="_blank" rel="noopener">
//                 My Résumé
//               </a> */}
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className={styles.footBase}>
//         <small>&copy; Prajwal Samal {year}</small>

//         <ul>
//           <li>
//             <a
//               href="https://x.com/praj_dev_"
//               target="_blank"
//               rel="noopener"
//             >
//               tw
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://github.com/prajwal934"
//               target="_blank"
//               rel="noopener"
//             >
//               gh
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.linkedin.com/in/omopariola-philip-6aa038178/"
//               target="_blank"
//               rel="noopener"
//             >
//               ln
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://instagram.com/hi5crt"
//               target="_blank"
//               rel="noopener"
//             >
//               ig
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// }
