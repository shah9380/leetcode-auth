// import Workspace from "../../../components/Workspace/Workspace";
// import { Problem } from "../../../utils/types/problem";
// import { problems } from "../../../utils/problems";

// type ProblemPageProps = {
//     problem: Problem
// }

// const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) =>{
//     console.log(problem, " I am form")
//     return(
//         <div>
//             <Workspace></Workspace>
//         </div>
//     )
// }

// export default ProblemPage;
// // it gonna create dynamic routes 
// export async function getStaticPaths(){
//     const paths = Object.keys(problems).map((key) =>({
            
//                 params:{
//                     pid: key,
//                 }
//     }));
//     return {
//         paths,
//         fallback: false
//     }
// }

// // this one fetches only the data


// export async function getStaticProps({params}:{params:{pid:string}}) {
//     const {pid} = params;
//     const problem = problems[pid]; 

//     if(!problem){
//         return{
//             notFound: true
//         }
//     }
//     problem.handlerFunction = problem.handlerFunction.toString();
//     return{
//         props:{
//             problem
//         }
//     }
// }

"use client"
import { useEffect, useState } from 'react';
import Workspace from "../../components/Workspace/Workspace";
import { Problem } from "../../utils/types/problem";
import { problems } from "../../utils/problems/index";
import { useRouter } from 'next/router';

type ProblemPageProps = {
    pid: string;
}

const ProblemPage: React.FC<ProblemPageProps> = ({ pid }) => {
    const router = useRouter();
    const [problem, setProblem] = useState<Problem | null>(null);

    useEffect(() => {
        if (router.isReady) { // Ensure router is ready before accessing query
            const fetchData = async () => {  
                if (!pid || typeof pid !== 'string') {
                    console.error("Invalid problem ID");
                    return;
                }
    
                const fetchedProblem = problems[pid];
                if (!fetchedProblem) {
                    console.error(`Problem with ID ${pid} not found`);
                    return;
                }
    
                fetchedProblem.handlerFunction = fetchedProblem.handlerFunction.toString();
                setProblem(fetchedProblem);
            };
    
            fetchData();
        }
    }, [router.isReady, pid]);

    if (!problem) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Workspace></Workspace>
        </div>
    );
};

export default ProblemPage;
