import React from 'react'

function Profile() {
    const infoDivs = {
        profilePic: 
            <div className='col-4 d-flex justify-content-center profile-column'>
                <div className='img-cropper'></div>
            </div>,
        leftSide: 
            <>
                <div>
                    <h6 className='text-secondary'>BIOGRAPHY</h6>
                    <h6><strong>Passionate Graphic Designer from Atlanta, GA.</strong></h6>
                </div>
                <div className='mb-2'>
                    <h6 className='text-secondary'>CONTACT</h6>
                    <strong className='profile-email'>janagomez019@gmail.com</strong>
                    <br/>
                    <strong>(949) 400-2637</strong>
                </div>
                <div>
                    <h6 className='text-secondary'>SKILLS</h6>
                    <strong>Adobe Design Suite & more.</strong>
                </div>
            </>,
        rightSide:
            <>
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
            </>
    }
    return (
        <div>
            <div className='row mt-4 big-screen'>
                <div className='col-4 vertical-space-between'>
                    {infoDivs.leftSide}
                </div>
                <div className='col-4 d-flex justify-content-center profile-column'>
                    <div className='img-cropper'></div>
                </div>
                <div className='col-4 vertical-space-between text-end'>
                    {infoDivs.rightSide}
                </div>
            </div>
            <div className='row mt-4 small-screen'>
                <div className='d-flex justify-content-center'>
                    {infoDivs.profilePic}
                </div>
                <div className='row'>
                    <div className='col-6 vertical-space-between'>
                        {infoDivs.leftSide}
                    </div>
                    <div className='col-6 vertical-space-between text-end'>
                        {infoDivs.rightSide}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
