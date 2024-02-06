import { problems } from '@/app/mockfproblems/problems';
import Link from 'next/link';
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs'

type ProblemsTableProps = {

}

const ProblemsTable:React.FC<ProblemsTableProps> = ()=>{
    return (
        <tbody>
            {problems.map((doc, idx)=>{
                return(
                    <tr className={`${idx % 2 == 1 ? 'bg-gray-700/25': ''}`} key={doc.id}>
                        <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green'>
                            <BsCheckCircle className='text-green-600' fontSize={"18"} width={"18"} />
                        </th>
                        <td className='px-6 py-4 font-medium'>
                                <Link className='hover:text-blue-600' href={`/problems/${doc.id}`}>
                                    {doc.title}
                                </Link>
                        </td>
                        <td className={`${doc.difficulty=== "Easy" ? 'text-green-600' : (doc.difficulty=== 'Hard'? 'text-red-600': 'text-amber-600')} font-medium`}>
                                {doc.difficulty}
                        </td>
                        <td className='px-6 py-4 font-medium'>
                            {doc.category}
                        </td>
                        <td>
                            {doc.videoId ? (
                                <Link href={`/video/${doc.videoId}`}>
                                ▶️
                            </Link>
                            ) : (<p>Coming Soon</p>)}
                            
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}
export default ProblemsTable;