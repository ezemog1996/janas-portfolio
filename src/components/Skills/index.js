import React from 'react'

function Skills() {
    const skills = [
        {
          icon: 'fi fi-brands-illustrator',
          skill: 'Illustrator'
        },
        {
          icon: 'fi fi-brands-indesign',
          skill: 'InDesign'
        },
        {
          icon: 'fi fi-brands-photoshop',
          skill: 'Photoshop'
        }
    ]
    return (
        <div id="skills" className='row'>
            <div className='col-12'>
                <h1 className='text-center'>My Skills</h1>
                <div className='d-flex justify-content-around'>
                {
                    skills.map(skill => (
                    <div key={skill.skill}>
                        <h1 className='skill-icon text-center'><i className={skill.icon}></i></h1>
                        <strong>{skill.skill}</strong>
                    </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Skills
