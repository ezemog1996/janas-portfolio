import React from 'react'
import Butterflies from '../../assets/images/projects/Butterflies.png'
import WendysLogo from "../../assets/images/projects/Wendy's Logo.png"
import TypographySwirls from '../../assets/images/projects/Typography Swirls.png'
import TypographyBell from '../../assets/images/projects/Typography Bell.png'
import TypographyAlexandria1 from '../../assets/images/projects/Typography Alexandria 1.png'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

function Projects() {
    
    const projects = {
        illustrations: [
            {
                screenshot: Butterflies
            },
            {
                screenshot: WendysLogo
            }
        ],
        typography: [
            {
                screenshot: TypographySwirls
            },
            {
                screenshot: TypographyBell
            },
            {
                screenshot: TypographyAlexandria1
            }
        ]
    }
      
    return (
        <div className='col-12' id='works'>
            <h1 className='text-center'>Illustrations</h1>
            <div className='d-flex justify-content-center flex-wrap project-regular'>
            {
                projects.illustrations.map(project =>(
                    <div className='p-1' key={project.screenshot}>
                        <img src={project.screenshot} className='illustration' alt='illustration'/>
                    </div>
                ))
            }
            </div>
            <div className='project-scroll'>
                <ScrollMenu>
                {
                    projects.illustrations.map(project =>(
                        <div className='p-1' key={project.screenshot}>
                            <img src={project.screenshot} className='illustration' alt='illustration'/>
                        </div>
                    ))
                }
                </ScrollMenu>
            </div>
            <br/>
            <h1 className='text-center'>Typography</h1>
            <div className='d-flex justify-content-center flex-wrap project-regular'>
            {
                projects.typography.map(project =>(
                    <div className='p-1' key={project.screenshot}>
                        <img src={project.screenshot} className='typography' alt='typography'/>
                    </div>
                ))
            }
            </div>
            <div className='project-scroll'>
                <ScrollMenu>
                {
                    projects.typography.map(project =>(
                        <div className='p-1' key={project.screenshot}>
                            <img src={project.screenshot} className='typography' alt='typography'/>
                        </div>
                    ))
                }
                </ScrollMenu>
            </div>
        </div>
    )
}

export default Projects
