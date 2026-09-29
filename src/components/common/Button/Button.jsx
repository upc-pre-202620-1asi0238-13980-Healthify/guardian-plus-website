import "./Button.css";

function Button({ href, variant = "primary", block = false, className = "", children, ...props }) {
  const classes = ["button", `button--${variant}`, block ? "button--block" : "", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
