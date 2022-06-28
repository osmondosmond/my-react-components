
const Button = ({ children, ...others }) => {
  return (
    <button
      className="w-full 
        flex
        items-center
        justify-center
        px-8
        py-3
        border
        border-transparent
        text-base
        font-medium
        rounded-md
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        md:bg-sky-600
        md:py-4
        md:text-lg
        md:px-10"
      {...others}
    >
      {children}
    </button>
  )
}

export default Button