import Link from 'next/link';
export default function Navbar(){
    return(

        <div className="flex flex-row... ml-1 p-1.5 rounded-lg font-bold bg-blue-300">
          <div className='ml-2 p-1.5 rounded-lg font-bold shadow-md ...'>  <Link href='/about' className='bg-slate-300'> About Me  </Link></div>
          <div className='ml-2 p-1.5 rounded-lg font-bold shadow-md ...'> <Link href='/career'className='bg-slate-300'> Career </Link></div>
          <div className='ml-2 p-1.5 rounded-lg font-bold shadow-md ...'><Link href='/qualification'className='bg-slate-300'> Qualification</Link></div>
          <div className='ml-2 p-1.5 rounded-lg font-bold shadow-md ...'>  <Link href='/contact' className='bg-slate-300'> Contact </Link></div>
        </div>
        
    )
}