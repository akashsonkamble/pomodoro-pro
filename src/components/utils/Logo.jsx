const Logo = ({ width = "150px"}) => {
    return (
        <div>
            <img src="./src/assets/logo.png" width={width} className="inline" alt="logo" />
        </div>
    )
}

export default Logo;