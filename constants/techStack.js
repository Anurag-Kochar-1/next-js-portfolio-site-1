import {SiFirebase , SiRedux , SiTypescript , SiTailwindcss , SiSwiper} from "react-icons/si"
import {RiReactjsLine} from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { FaHtml5 } from "react-icons/fa"


export const skills = [

    {
        name: "Next JS",
        icon: <TbBrandNextjs style={{color:"white"}}/>,
        id: 0
    },

    {
        name: "React JS",
        icon: <RiReactjsLine style={{color:"#00D8FF"}}/>,
        id: 1
    },

    {
        name: "Typscript / Javascript",
        icon: <SiTypescript style={{color:"#007ACC"}}/>,
        id: 2
    },

    {
        name: "Redux",
        icon: <SiRedux style={{color:"#764ABC"}}/>,
        id: 3
    },

    {
        name: "Firebase",
        icon: <SiFirebase style={{color:"#FBCA3F"}}/>,
        id: 4
    },

    {
        name: "Sanity CMS",
        icon: <SiSwiper style={{color:"#F04939"}}/>,
        id: 5
    },

    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss style={{color:"#08B6CE"}}/>,
        id: 6
    },

    {
        name: "HTML/CSS",
        icon: <FaHtml5 style={{color:"#EF652A"}}/>,
        id: 7
    }
]