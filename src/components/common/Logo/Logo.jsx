import { Heart } from "lucide-react";
import "./Logo.css";

function Logo({ variant = "light" }) {
  return (
    <span className={`logo logo--${variant}`}>
      <span className="logo__mark" aria-hidden="true">
        <Heart size={18} strokeWidth={2.2} />
      </span>
      <span className="logo__text">
        Guardian<span className="logo__plus">+</span>
      </span>
    </span>
  );
}

export default Logo;
