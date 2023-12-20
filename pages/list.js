import Link from "next/link";
import style from '../styles/list.module.css'
export default function List(){
    return(
        <>
        <div className={style.div}> 
        <ul className={style.ulist}>
        <li>
        <a href="#" className={style.list}>
       Home
        </a>
      </li>
      <li >
        <a className={style.list} href="#about">
       About
        </a>
      </li>
      <li >
        <a href="#project" className={style.list}>
       Project
        </a>
      </li>
    
       </ul>
        </div>
        </>
    )
}