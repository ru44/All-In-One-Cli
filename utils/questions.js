const questionsDP = [
    {

        type: 'list',
        name: 'Design Pattern',
        message: 'Choose the Design Pattern you want to use:',
        choices: ['MVC', 'RESTful API'],
    }
];
const questionsRun = [
    {
        type: 'confirm',
        name: 'Run Project',
        message: 'Do you want to run the project?',
    },
];
const questionsMVC = [
    {
        type: 'list',
        name: 'MVC',
        message: 'Choose the MVC framework which you want to use:',
        choices: ['TallStack', 'DjangoMTV'],
    }
];

const questionsRestApiW = [
    {
        type: 'list',
        name: 'frontend',
        message: 'Choose the front framework which you want to use:',
        choices: ['VueJs', 'NuxtJs', 'ReactJs', 'NextJs', 'Angular', 'Svelte'],
    },
];

const questionsRestApiM = [
    {
        type: 'list',
        name: 'mobile',
        message: '( Only Flutter is available for now ):',
        choices: ['Flutter'],
    },
];

const questionsRestApiFrontend = [
    {
        type: 'list',
        name: 'typeOfFrontend',
        message: 'is it mobile App or Website:',
        choices: ['Website', 'Mobile', 'Without Frontend'],
    },
];

const questionsRestApiB = [
    {
        type: 'list',
        name: 'backend',
        message: 'Choose the backend framework which you want to use:',
        choices: ['ExpressJs', 'NestJs', 'AdonisJs', 'Fastify', 'Django', 'Laravel', 'Spring Boot', 'ASP.NET', 'Without Backend'],
    }
];

const questionsPM = [
    {
        type: 'list',
        name: 'packageManager',
        message: 'Choose the package manager which you are using:',
        choices: ['npm', 'yarn'],
    },
];

const questionsDB = [
    {
        type: 'list',
        name: 'database',
        message: 'Choose the database which you want to use:',
        choices: ['MongoDB', 'SQLite'],
    }
];

const _questionsMVC = questionsMVC;
export { _questionsMVC as questionsMVC };
const _questionsDB = questionsDB;
export { _questionsDB as questionsDB };
const _questionsPM = questionsPM;
export { _questionsPM as questionsPM };
const _questionsDP = questionsDP;
export { _questionsDP as questionsDP };
const _questionsRun = questionsRun;
export { _questionsRun as questionsRun };
const _questionsRestApiB = questionsRestApiB;
export { _questionsRestApiB as questionsRestApiB };
const _questionsRestApiM = questionsRestApiM;
export { _questionsRestApiM as questionsRestApiM };
const _questionsRestApiW = questionsRestApiW;
export { _questionsRestApiW as questionsRestApiW };
const _questionsRestApiFrontend = questionsRestApiFrontend;
export { _questionsRestApiFrontend as questionsRestApiFrontend };