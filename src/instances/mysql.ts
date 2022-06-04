import { Sequelize } from "sequelize"

//importand as variáveis de ambiente
import dotenv from 'dotenv'

dotenv.config()

//colocando os dados no banco
export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
       dialect: 'mysql',
       port:parseInt(process.env.MYSQL_PORT as string)
    }
)

