
const Button = ({ children, ...others }) => {
  return <button className="text-sky-600" { ...others } >{children}</button>
}

export default Button