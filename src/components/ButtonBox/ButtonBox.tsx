// src/components/ButtonBox/ButtonBox.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import "./ButtonBox.css";

interface ButtonBoxProps {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
}

const ButtonBox: React.FC<ButtonBoxProps> = ({
  icon,
  titleKey,
  descriptionKey,
  link,
}) => {
  const { t } = useTranslation();

  return (
    <Link to={link} className='button-box'>
      <span className="button-box-media">
        <img src={icon} alt="" className='button-box-icon' loading="lazy" />
      </span>
      <span className="button-box-content">
        <span className="button-box-title-row">
          <h3 className='button-box-title'>{t(titleKey)}</h3>
          <span className="button-box-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
        </span>
        <span className='button-box-description'>{t(descriptionKey)}</span>
      </span>
    </Link>
  );
};

export default ButtonBox;
