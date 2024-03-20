import './Button.scss'

interface ButtonProps {
    type?: 'submit' | 'button',
    buttonText: string
}

const Button = ({type, buttonText}: ButtonProps) => {
    return <button type={type}>{buttonText}</button>
}

export default Button;