import { 
	handleUnaryCall,
	handleClientStreamingCall,
	handleServerStreamingCall,
	handleBidiStreamingCall,
	sendUnaryData,
	ServerDuplexStream,
	ServerReadableStream,
	ServerUnaryCall,
	ServerWritableStream,
	status,
	UntypedHandleCall,
	Metadata,
	Interceptor,
	credentials
 } from '@grpc/grpc-js';
import { ServiceError } from '../../utils/error';
import { ApiType } from '../../utils/interfaces';
import * as Todos from '../../protos/sylklabs/Todos/v1/Todos';
import { TaskServiceService } from '../../protos/sylklabs/Todos/v1/Todos';

class TaskService implements Todos.TaskServiceServer, ApiType<UntypedHandleCall> {
	[method: string]: any;

	tasks: Todos.Task[] = [
		Todos.Task.fromPartial({
			id: '1',
			title: 'Build App',
			description: 'Create a distributed system with sylk.build',
			done: true
		}),
		Todos.Task.fromPartial({
			id: '2',
			title: 'Implement AI Chatbot',
			description: 'Build an AI-powered chatbot using Python and TensorFlow',
		}),
		Todos.Task.fromPartial({
			id: '3',
			title: 'Optimize Database Queries',
			description: 'Improve the performance of database queries for faster application response',
		}),
	];

	// @rpc @@sylk - DO NOT REMOVE
	public getTask: handleUnaryCall<Todos.TaskId, Todos.Task> = (
		call: ServerUnaryCall<Todos.TaskId, Todos.Task>,
		callback: sendUnaryData<Todos.Task>
	) => {
		const {id } = call.request;
        console.log(`[GetTask] Got request for task data: ${id}`);

        let task = this.tasks.find(t => t.id === id);
        if(task) {
            callback(null, task, call.metadata);
        } else {
            callback(
                new ServiceError(
                    status.NOT_FOUND,
                    `Task "${id}" is not found.`,
                    undefined,
                    call.metadata
                ),
                undefined,
                call.metadata
            );
        };
	}


}

export {
	TaskService,
	TaskServiceService
};