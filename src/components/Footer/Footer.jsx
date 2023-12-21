import './Footer.css'

function Footer ({ backColor }) {

    return <>
        <div className="footer" style={{ backgroundColor: backColor }}>
            <h1>Sargis Khachatryan ©</h1>
            <div className="soc-icons">
                <a href="/#"><i className='fab fa-linkedin'></i></a>
                <a href="/#"><i className='fab fa-github-square'></i></a>
                <a href="/#"><i className='fab fa-dev'></i></a>
                <a href="/#"><i className='fab fa-facebook-square'></i></a>
                <a href="/#"><i className='fab fa-instagram'></i></a>
                <div style={{width: 16, display: 'inline-block' }}></div>
                <a href="mailto:sargiskhachatryan@yahoo.com"><i className='fa fa-yahoo'></i></a>
                <a href="mailto:sargis_khachatryan@aol.com" className='aol'>Aol.</a>
            </div>
        </div>
    </>
}

export default Footer