import {
    IoOpenOutline, IoSunny, IoMoon
} from "react-icons/io5";
import { SiPython, SiRust, SiJupyter, SiPandas, SiPlotly, SiPytorch, SiTensorflow, SiKeras, SiSelenium, SiScikitlearn, SiOpenaigym, SiNginx, SiGunicorn, SiGit, SiGithub, SiLinkedin, SiJekyll, SiPydantic } from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";

import { createElement } from "react";

const iconMap = {
    linkedin: SiLinkedin,
    github: SiGithub,
    open: IoOpenOutline,
    sun: IoSunny,
    moon: IoMoon,
    Python: SiPython,
    Rust: SiRust,
    Jupyter: SiJupyter,
    Pytorch: SiPytorch,
    TensorFlow: SiTensorflow,
    Keras: SiKeras,
    pandas: SiPandas,
    plotly: SiPlotly,
    selenium: SiSelenium,
    gymnasium: SiOpenaigym,
    "scikit-learn": SiScikitlearn,
    aws: BiLogoAws,
    nginx: SiNginx,
    gunicorn: SiGunicorn,
    git: SiGit,
    jekyll: SiJekyll,
    pydantic: SiPydantic,
};

export default function Icon(props) {
    if (!(props.name in iconMap)) {
        console.error("Could not find name " + props.name);
        return null;
    }
    return createElement(iconMap[props.name], props);
}

