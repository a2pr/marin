import dotenv from 'dotenv'

export default function loadEnvironment(){
    dotenv.config({path: "../.env"})
}