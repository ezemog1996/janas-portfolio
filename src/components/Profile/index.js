import React from 'react'

function Profile() {
    return (
        <div className='row mt-4'>
            <div className='col-4 vertical-space-between'>
            <div>
                <h6 className='text-secondary'>BIOGRAPHY</h6>
                <h6><strong>Passionate Graphic Designer from Atlanta, GA.</strong></h6>
            </div>
            <div className='mb-2'>
                <h6 className='text-secondary'>CONTACT</h6>
                <strong className='profile-email'>janagomez019@gmail.com</strong>
                <br/>
                <strong>(760) 468-5194</strong>
            </div>
            <div>
                <h6 className='text-secondary'>SKILLS</h6>
                <strong>Adobe Design Suite & more.</strong>
            </div>
            </div>
            <div className='col-4 d-flex justify-content-center profile-column'>
            <div className='img-cropper'></div>
            </div>
            <div className='col-4 vertical-space-between text-end'>
            <div className='mb-2'>
                <h6 className='text-secondary'>EDUCATION</h6>
                <strong>Design & Media Production Technology</strong>
            </div>
            <div>
                <h6 className='text-secondary'>EXPERIENCE</h6>
                <h4><strong>1 year</strong></h4>
            </div>
            <div>
                <h6 className='text-secondary'>PROJECTS</h6>
                <h3><strong>5</strong></h3>
            </div>
            </div>
        </div>
    )
}

export default Profile
