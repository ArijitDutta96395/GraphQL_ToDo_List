const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const cors= require('cors');
const {default: axios} = require('axios');
const {USERS}=require('./user');
const {TODOS} = require('./todos');




async function startServer() {
    const server = new ApolloServer({
        typeDefs: `

            type User {
                id: ID!
                username: String!
                name: String!
                email: String!
                phone: String!
                website: String!
            }
            type Todo {
                id: ID!
                title: String!
                completed: Boolean!
                user:User
            }

            type Query {
                getTodos: [Todo]
                getAllUsers: [User]
                getUserById(id: ID!): User
            }
        `,
        resolvers: {
            Todo: {
                user: (todo) => USERS.find((e) => e.id === todo.id)
            },
            Query: {
                getTodos: () => TODOS,
                getAllUsers: () => USERS,
                getUserById: (parent, { id }) => USERS.find((e) => e.id === id)
            }
        }
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 8000 }
    });

    console.log(`🚀 Server ready at ${url}`);
};

    startServer();