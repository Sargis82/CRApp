import './Footer.css'

function Footer ({ backColor }) {

    return <>
        <div className="footer" style={{ backgroundColor: backColor }}>
            <h1>Sargis Khachatryan ©</h1>
            <div className="soc-icons">
                <a href="https://www.linkedin.com/in/sargiskhachatryan" target="_blank" rel="noreferrer"><i className='fab fa-linkedin'></i></a>
                <a href="https://github.com/Sargis82" target="_blank" rel="noreferrer"><i className='fab fa-github-square'></i></a>
                <a href="https://dev.to/sargis_wd" target="_blank" rel="noreferrer"><i className='fab fa-dev'></i></a>
                <a href="https://www.facebook.com/surckeez" target="_blank" rel="noreferrer"><i className='fab fa-facebook-square'></i></a>
                <a href="https://www.instagram.com/sargiskhachatryan82/" target="_blank" rel="noreferrer"><i className='fab fa-instagram'></i></a>
                <div style={{width: 16, display: 'inline-block' }}></div>
                <a href="mailto:sargiskhachatryan@yahoo.com" target="_blank" rel="noreferrer"><i className='fa fa-yahoo'></i></a>
                <a href="mailto:sargis_khachatryan@aol.com" target="_blank" rel="noreferrer" className='aol'>Aol.</a>
            </div>
        </div>
    </>
}

export default Footer