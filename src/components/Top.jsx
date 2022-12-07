import React from 'react';

export default function Top(){
    return(
        <>
            <div className='top'>
                <img src="https://cdn.discordapp.com/attachments/968508474038317107/1049766565194760202/image.png" alt="img" height={'300px'} className="img"/>
                <h4 className='name'>Laura Smith</h4>
                <p>FrontEnd Developer</p>
                <p className='website'>laurasmith.website</p>
                <br /><br /><br />
                <button>✉ Email</button>
            </div>
        </>
    )
}