import { FastifyReply } from 'fastify';

// TODO: Log errors in a better way

function unauthorizedErrorResponse(reply: FastifyReply, error: string) {
	reply.status(403).send({
		error
	});
	throw new Error(error);
}

export function invalidDataError(reply: FastifyReply) {
	unauthorizedErrorResponse(reply, 'Invalid Data');
}

export function invalidUserError(reply: FastifyReply) {
	unauthorizedErrorResponse(reply, 'Invalid Username or Password');
}

export function userExistsError(reply: FastifyReply) {
	unauthorizedErrorResponse(reply, 'User already exists');
}

export function unexpectedError(reply: FastifyReply) {
	reply.status(500).send({ error: 'Unexpected Server Error' });
}

export function sessionExpiredError(reply: FastifyReply) {
	unauthorizedErrorResponse(reply, 'Session expired');
}