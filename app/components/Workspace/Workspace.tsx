import React from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";   
import { Splitter, SplitterPanel } from 'primereact/splitter';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';

type WorkspaceProps ={}

const Workspace: React.FC<WorkspaceProps> = () => {
  return(
                <Splitter style={{minHeight: '300px'}}>
                    <SplitterPanel className="flex align-items-center justify-content-center max-w-[50vw]">
                        <ProblemDescription></ProblemDescription>
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        <Playground></Playground>
                    </SplitterPanel>
                </Splitter>
  )
}

export default Workspace;

{/* <Split className='split'>
            <ProblemDescription></ProblemDescription>
            <div>The code editor will be there</div>
  </Split> */}