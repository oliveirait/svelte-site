import { writable } from "svelte/store";

export const globalLang = writable({
    lang: 'pt'
})

export const globalDataLangPt = writable({
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
        description: "Sou um profissional de Ti apaixonado por tecnologia. Atualmente trabalho como desenvolvedor de software. Estou trabalhando para me tornar um profissional melhor, capaz de gerir grandes projetos, por isso, me dedico e estudo todos os dias incansavelmente para isso. Conheça-me melhor!",
        buttons: {
            playstore: "Play Store",
            github: "GitHub",
            linkedin: "Linkedin"
        }
    },

    projects: {
        title: "Projetos",
        description: "Para mais informações sobre projetos privados ou download de aplicativos, favor, entrar em contato."
    },

    contact: {
        title: "Contato",
        description: "Entre em contato. Responderemos o mais breve possível.",
        form: {
            name: "Nome",
            placeholderName: "Seu nome",
            email: "E-mail",
            placeholderEmail: "mail@exemple.com",
            message: "Mensagem",
            placeholderMessage: "Escreva sua mensagem",
            sendButton: "Enviar",
            sending: "Enviando mensagem..."
        }
    }
})

export const globalDataLangEn = writable({
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
        description: "I am an IT professional passionate about technology. I currently work as a software developer. I'm working to become a better professional, capable of managing large projects, so I dedicate myself and study tirelessly every day to achieve this. Get to know me better!"
        ,
        buttons: {
            playstore: "Play Store",
            github: "GitHub",
            linkedin: "Linkedin"
        }
    },

    projects: {
        title: "Projects",
        description: "For more information about private projects or application downloads, please get in touch."
    },

    contact: {
        title: "Contact",
        description: "Please contact me. I will respond as soon as possible.",
        form: {
            name: "Name",
            placeholderName: "Your name",
            email: "E-mail",
            placeholderEmail: "mail@exemple.com",
            message: "Message",
            placeholderMessage: "Your message",
            sendButton: "Send",
            sending: "Sending..."
        }
    }
})
