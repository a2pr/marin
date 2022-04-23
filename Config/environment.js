import dotenv from 'dotenv'

export const loadEnvironment = function (){
    dotenv.config({path: "../.env"})
}