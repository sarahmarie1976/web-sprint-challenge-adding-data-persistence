		const express = require('express');
		//const helmet = require('helmet');

		// const db = require('./data/db-config.js');
		const ProjectRouter = require('./routers/project-router.js');
		const ResourceRouter = require('./routers/resource-router.js');
		const TaskRouter = require('./routers/task-router.js')
		
		
		
		
		const server = express();

		server.use(express.json());
		server.use('/api/project', ProjectRouter);
		server.use('/api/resource', ResourceRouter);
		server.use('/api/task', TaskRouter);
		
		
		


        module.exports = server;
        