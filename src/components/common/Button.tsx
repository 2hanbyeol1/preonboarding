import { Link, LinkProps } from "react-router-dom";

function Button({ children, ...props }: LinkProps) {
  // & ComponentProps<"button">
  return (
    <Link
      className="px-3 py-1 bg-blue-500 hover:brightness-95 text-white text-sm rounded-sm"
      {...props}
    >
      {children}
    </Link>
  );
  // return (
  //   <button
  //     className="px-3 py-1 bg-blue-500 hover:brightness-95 text-white text-sm rounded-sm"
  //     {...props}
  //   >
  //     {children}
  //   </button>
  // );
}

export default Button;
