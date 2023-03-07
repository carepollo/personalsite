import { Project } from "../models/project";


type ProjectsDictionary = {
    [T in string]: Project;
}

/**
 * same thing as {@link projects} but in a hashmap for easier access
 */
export const repos: ProjectsDictionary = {
    'elevatorssystem': {
        title: 'elevatorssystem',
        endDate: new Date('2023-06-01'),
        skills: ['Data Structures', 'Algorithms', 'Concurrent systems'],
        technologies: [],
        language: {
            name: 'Go',
            docs: 'https://go.dev/',
            icon: 'https://www.svgrepo.com/show/373632/go.svg',
        },
        description: 'a very large text xd',
        url: 'https://github.com/carepollo/elevatorsystem',
        developmentTime: 'ongoing',
    },
    'assistant': {
        title: 'assistant',
        endDate: new Date('2023-02-01'),
        skills: ['Concurrent systems', 'asynchronous programming'],
        technologies: [
            {
                name: 'discord.py',
                docs: 'https://discordpy.readthedocs.io/en/latest/',
                icon: 'https://images.opencollective.com/discordpy/25fb26d/logo/256.png',
            },
            {
                name: 'flask',
                docs: 'https://flask.palletsprojects.com/en/2.2.x/',
                icon: 'https://www.seekpng.com/png/detail/70-701539_flask-flask-python-png.png',
            },
            {
                name: 'pexpect',
                docs: 'https://pexpect.readthedocs.io/en/stable/',
                icon: 'https://www.svgrepo.com/show/451131/no-image.svg',
            },
            {
                name: 'better-ipc',
                docs: 'https://docs.better-ipc.xyz/quick-start/introduction',
                icon: 'https://www.svgrepo.com/show/451131/no-image.svg',
            },
        ],
        language: {
            name: 'Python',
            docs: 'https://www.python.org/',
            icon: 'https://www.svgrepo.com/show/452091/python.svg',
        },
        description: 'a very large text xd',
        url: 'https://github.com/carepollo/assistant',
        developmentTime: '3 months',
    },
    'portfolio-os': {
        title: 'portfolio-os',
        endDate: new Date('2023-01-01'),
        skills: ['resumability'],
        technologies: [
            {
                name: 'Qwik',
                docs: 'https://qwik.builder.io/',
                icon: 'https://qwik.builder.io/favicons/favicon.svg'
            },
            {
                name: 'socket.io',
                docs: 'https://socket.io',
                icon: 'https://socket.io/images/logo.svg',
            },
        ],
        language: {
            name: 'TypeScript',
            docs: 'https://www.typescriptlang.org/',
            icon: 'https://www.svgrepo.com/show/374146/typescript-official.svg'
        },
        description: 'a very large text xd',
        url: 'https://github.com/carepollo/portfolio-os',
        developmentTime: '1 month',     
    },
    'alphacloud': {
        title: 'alphacloud',
        endDate: new Date('2023-02-01'),
        skills: ['API RESTful'],
        technologies: [
            {
                name: 'Fiber',
                docs: 'https://gofiber.io/',
                icon: 'https://gofiber.io/assets/images/logo.svg',
            },
        ],
        language: {
            name: 'Go',
            docs: 'https://go.dev/',
            icon: 'https://www.svgrepo.com/show/373632/go.svg',
        },
        description: 'a very large text xd',
        url: 'https://github.com/carepollo/alphacloud',
        developmentTime: '1 months',
    },
    'esolang': {
        title: 'esolang',
        endDate: new Date('2022-12-01'),
        skills: ['Low level programming', 'Compilers', 'Interpreters'],
        technologies: [],
        language: {
            name: 'Go',
            docs: 'https://go.dev/',
            icon: 'https://www.svgrepo.com/show/373632/go.svg',
        },
        description: 'a very large text xd',
        url: 'https://github.com/carepollo/esolang',
        developmentTime: '6 months',
    },
    'GenericApp': {
        title: 'GenericApp',
        endDate: new Date('2022-12-01'),
        skills: ['Low level programming', 'Embedded systems', 'API RESTful'],
        technologies: [
            {
                name: 'MongoDB',
                docs: 'https://www.mongodb.com/',
                icon: 'https://www.svgrepo.com/show/331488/mongodb.svg',
            },
            {
                name: 'Android',
                docs: 'https://www.android.com',
                icon: 'https://www.svgrepo.com/show/475631/android-color.svg'
            },
            {
                name: 'Arduino',
                docs: 'https://www.arduino.cc',
                icon: 'https://www.svgrepo.com/show/353423/arduino.svg',
            },
            {
                name: 'Gingonic',
                docs: 'https://gin-gonic.com/',
                icon: 'https://gin-gonic.com/favicons/favicon-16x16.png',
            },
        ],
        language: {
            name: 'Java',
            docs: 'https://www.java.com/',
            icon: 'https://www.svgrepo.com/show/452234/java.svg'
        },
        description: 'a very large text xd',
        url: 'https://github.com/carepollo/esolang',
        developmentTime: '4 months',
    },
    'SchulPlattform': {
        title: 'SchulPlattform',
        endDate: new Date('2021-12-01'),
        skills: ['OOP', 'API RESTful', 'Design Patterns'],
        technologies: [
            {
                name: 'Angular',
                docs: 'https://angular.io',
                icon: 'https://www.svgrepo.com/show/452156/angular.svg',
            },
            {
                name: 'NestJS',
                docs: 'https://www.nestjs.com',
                icon: 'https://www.svgrepo.com/show/354107/nestjs.svg',
            },
            {
                name: 'ChartJS',
                docs: 'https://www.chartjs.org/',
                icon: 'https://www.chartjs.org/img/chartjs-logo.svg',
            },
            {
                name: 'pdfJS',
                docs: 'https://mozilla.github.io/pdf.js/',
                icon: 'https://mozilla.github.io/pdf.js/images/logo.svg',
            },
            {
                name: 'SheetJS',
                docs: 'https://sheetjs.com/',
                icon: 'https://sheetjs.com/sketch128.png',
            },
            {
                name: 'MySQL',
                docs: 'https://www.mysql.com',
                icon: 'https://www.svgrepo.com/show/303251/mysql-logo.svg',
            },
        ],
        language: {
            name: 'TypeScript',
            docs: 'https://www.typescriptlang.org/',
            icon: 'https://www.svgrepo.com/show/374146/typescript-official.svg'
        },
        description: 'a very large text xd',
        url: 'https://github.com/carepollo/SchulPlattform',
        developmentTime: '12 months',  
    },
    'hangman': {
        title: 'hangman',
        endDate: new Date('2020-01-01'),
        skills: ['OOP'],
        technologies: [],
        language: {
            name: 'Python',
            docs: 'https://www.python.org/',
            icon: 'https://www.svgrepo.com/show/452091/python.svg',
        },
        description: 'a very large text xd',
        url: 'https://github.com/carepollo/hangman',
        developmentTime: '3 weeks',
    },

}
/**
 * projects done
 */
export const projects: Project[] = [
    repos['elevatorssystem'],
    repos['assistant'],
    repos['portfolio-os'],
    repos['alphacloud'],
    repos['esolang'],
    repos['GenericApp'],
    repos['SchulPlattform'],
    repos['hangman'],
];
