import {Singleton} from "typescript-ioc";

@Singleton
export class AppConfig{
    omdbApiKey: string
    omdbApiUrl: string
    constructor() {
        this.omdbApiKey = process.env.OMDB_API_KEY || ''
        this.omdbApiUrl = process.env.OMDB_API_URL || ''
    }
}