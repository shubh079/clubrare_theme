export interface IconProps {
    classname?: string 
    width?: string | number
    height?: string | number
    fill?: string
    stroke?: string
}

export interface CheckIconProps extends IconProps {
    border?: string
    check?: string
}

export interface TokenIconProps extends IconProps {
    isActive?: boolean
}