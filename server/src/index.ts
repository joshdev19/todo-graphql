import express from 'express';
import formData from 'express-form-data';
import cors from 'cors';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import { schema } from '../schemas/schema';
dotenv.config();

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(formData.parse());
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.DEV_STATUS === "development" ? true : false
}))

app.listen(PORT, () => console.log(`Server is running at port http://localhost:${PORT}`));