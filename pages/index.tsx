import { useRef } from 'react'
import Solution from './component/solution';
import Navbar from "./component/navbar";
import Problem from './component/problem';

export default function Home() {
  const problemRef = useRef<null | HTMLDivElement>(null);
  const solutionRef = useRef<null | HTMLDivElement>(null);

  const navClicked = (section: number) => {
    switch(section){
      case 1: 
        problemRef.current?.scrollIntoView({behavior: 'smooth'});
        break;
      case 2: 
        solutionRef.current?.scrollIntoView({behavior: 'smooth'});
        break;
      default:
        break;      
      }

  }
  return (
    <div className='section'>
      <Navbar clicked={navClicked}/>
      
      <div ref={problemRef} className="container">
        <Problem/>
      </div>
      <div ref={solutionRef} className="container">
        <Solution/>
      </div>
    </div>
  )
}
