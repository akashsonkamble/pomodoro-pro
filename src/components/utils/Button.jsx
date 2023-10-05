const Button = ({
    children,
    type = "button",
    textColor = "text-white",
    bgColor = "bg-[#663399]",
    hoverFocusColor = "active:bg-white hover:bg-white hover:text-[#663399] hover:border-[#663399] focus:outline-none",
    className = "",
    ...props
}) => {
    return (
        <button
            className={`px-4 py-2 rounded-full 
            ${bgColor} 
            ${hoverFocusColor} 
            ${className}`}
            {...props}
        >{children}
        </button>
    )
}

export default Button;