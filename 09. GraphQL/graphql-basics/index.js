const { ApolloServer, gql } = require('apollo-server');
const EmployeeService = require('./datasources/file');
const ProjectService = require('./datasources/project');

const typeDefs = gql`
type Query {
    employees(
        id: ID,
        firstName: String,
        lastName: String,
        designation: String,
        department: String,
        nearestCity: String
    ): [Employee],
    findEmployeeById(id: ID): Employee,
    projects: [Project],
    findProjectById(id: ID): Project
}

type Employee {
    id: ID!,
    firstName: String,
    lastName: String,
    designation: String,
    department: String,
    nearestCity: String @deprecated (reason: "It doesn't matter. Because all employees are working from home."),
    projects: [Project]
}

type Project {
    id:ID!,
    projectName: String,
    startDate: String,
    client: String,
    employees: [Int]
}
`;


const dataSources = () => ({
    employeeService: new EmployeeService(),
    projectService: new ProjectService()
});

const resolvers = {
    Query: {
        employees: (parent, args, {dataSources}, info) => {
            return dataSources.employeeService.getEmployees(args);
        },
        findEmployeeById: (parent, {id}, {dataSources}, info) => {
            return dataSources.employeeService.getEmployeeById(id);
        },
        projects: (parent, args, { dataSources }, info) => {
            return dataSources.projectService.getProjects();
        },
        findProjectById: (parent, { id }, { dataSources }, info) => {
            return dataSources.projectService.getProjectById(id);
        }
    },
    Employee: {
        async projects(employee, args, { dataSources }, info) {
            const projects = await dataSources.projectService.getProjects();
            return projects.filter((project) => project.employees.includes(employee.id));
        }
    }
};

const gqlServer = new ApolloServer({ typeDefs, resolvers, dataSources });

gqlServer.listen({port: process.env.port || 4000})
    .then(({url}) => console.log(`GraphQL server is running on port ${url}`));

