import "../Footer.css"


function FooterDetails (image, alt, socialLink, social) {
    return (
        <div className='contactInfoBox'>
            <img src={image} alt={alt} className='footerIcon'/>
            <p><a href={socialLink}>{social}</a></p>
        </div>
    )
}

export default FooterDetails;