


function FooterDetails (image, alt, socialLink, social) {
    return (
        <li><div className='contactInfoBox'>
            <img src={image} alt={alt} className='footerIcon'/>
            <p><a href={socialLink}>{social}</a></p>
        </div></li>
    )
}

export default FooterDetails;