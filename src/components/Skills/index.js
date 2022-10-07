import React from 'react'

function Skills() {
    const skills = [
        {
          icon: 'fi fi-brands-illustrator',
          skill: 'Adobe Illustrator'
        },
        {
          icon: 'fi fi-brands-indesign',
          skill: 'Adobe InDesign'
        },
        {
          icon: 'fi fi-brands-photoshop',
          skill: 'Adobe Photoshop'
        }
    ]
    return (
        <div id="skills">
            <h1 className='text-center'>My Skills</h1>
            <div className='d-flex justify-content-around'>
            {
                skills.map(skill => (
                <div key={skill}>
                    <div className='skill-div bg-light text-center py-3 px-4 icon-div'>
                        <i className={skill.icon}></i>
                    </div>
                    <strong>{skill.skill}</strong>
                </div>
                ))
            }
            </div>
        </div>
    )
}

export default Skills
