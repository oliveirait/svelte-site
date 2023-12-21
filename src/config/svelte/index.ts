export const site_config = {
    _url: 'https://oliveiracode.online',
    _name: "Felipe's portfolio",
    _title: ["Felipe's", "portfolio"],
    _description: '',
    _acronym: 'FP',
    _: "",
}

type Buttons = {
    playstore: string
    github: string
    linkedin: string
}

type Home = {
    title: string
    description: string
    buttons: Buttons
}

type Menu = {
    home: string
    project: string
    contact: string
}

type Header = {
    name: string
    menu: Menu
}

type LanguageProps = {
    header: Header
    home: Home
}

export type CurrentProps = {
    pt?: LanguageProps | undefined
    en?: LanguageProps | undefined
}

const pt_descricao = "Sou um profissional de Ti apaixonado por tecnologia. Atualmente trabalho como desenvolvedor de software. Estou trabalhando para me tornar um profissional melhor, capaz de gerir grandes projetos, por isso, me dedico e estudo todos os dias incansavelmente para isso. Conheça-me melhor!"
const en_description = "I am an IT professional passionate about technology. I currently work as a software developer. I'm working to become a better professional, capable of managing large projects, so I dedicate myself and study tirelessly every day to achieve this. Get to know me better!"

export const language = {
    pt: {
        header: {
            name: "Felipe's portfolio",
            menu: {
                home: 'Inicio',
                projects: 'Projetos',
                contact: 'Contato'
            }
        },
        home: {
            title: "Bem vindo(a) Portifolio do Felipe",
            description: pt_descricao,
            buttons: {
                playstore: "Play Store",
                github: "GitHub",
                linkedin: "Linkedin"
            }
        }
    },

    en: {
        header: {
            name: "Felipe's portfolio",
            menu: {
                home: 'Home',
                projects: 'Projects',
                contact: 'Contact'
            }
        },
        home: {
            title: "Welcome to Felipe's portfolio",
            description: en_description,
            buttons: {
                playstore: "Play Store",
                github: "GitHub",
                linkedin: "Linkedin"
            }
        }
    }
}