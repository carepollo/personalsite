import { Technology } from "./technology";

/**
 * representation of a public project to show
 */
export interface Project {
    /**
     * unique name of project
     */
    title: string;

    /**
     * when it was done the project, is going to be used the day it was declared
     * as finished
     */
    endDate: Date;

    /**
     * knowledge field required to do the project
     */
    skills: string[];

    /**
     * other technologies used that work with the main language of the project,
     * frameworks, libraries, databases, orm, etc.
     */
    technologies: Technology[];

    /**
     * main language of the project
     */
    language: Technology;

    /**
     * a very long text explaining the why and the how of the project
     */
    description: string;

    /**
     * remote repo api to get data of project
     */
    url: string;

    /**
     * how long took the project to do, it could be calculated but for simplicity reasons
     * is gonna be a hardcoded string.
     */
    developmentTime: string;
}
