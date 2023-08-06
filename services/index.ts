import { 
	handleUnaryCall
	,ClientUnaryCall
	,ClientReadableStream,
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
	credentials,
	ChannelCredentials,
	ServiceError as _service_error
 } from '@grpc/grpc-js';
import { promisify } from 'util';
import { Observable } from 'rxjs';
import * as Todosv1 from './protos/sylklabs/Todos/v1/Todos';
import { TaskServiceService, TaskServiceClient as TaskServicev1Client  } from './protos/sylklabs/Todos/v1/Todos';


const interceptorsProviders: Interceptor[] = []
const _DEFAULT_OPTION = {
	"grpc.keepalive_time_ms": 120000,
	"grpc.http2.min_time_between_pings_ms": 120000,
	"grpc.keepalive_timeout_ms": 20000,
	"grpc.http2.max_pings_without_data": 0,
	"grpc.keepalive_permit_without_calls": 1,
	"interceptors": interceptorsProviders,
}

/**
 * Generated thanks to [sylk.build](https://www.sylk.build)
 */
export interface SylkClientOpts {
	host: string;
	port: number;
	metadata: Metadata;
	channelCreds: ChannelCredentials
}
const DEFAULT_CLIENT_OPTS: SylkClientOpts = {
	host: "localhost",
	port: 44880,
	metadata: new Metadata(),
	channelCreds: credentials.createInsecure()
}


export class TaskServiceV1 {
	constructor(opts: SylkClientOpts) {
		const { host, metadata, port, channelCreds } = {...DEFAULT_CLIENT_OPTS, ...opts}
		this.host = host;
		this.port = port;
		this.metadata = metadata;
		this.metadata.add('sylk-version','0.3.4');
		this.TaskServicev1Client = new TaskServicev1Client(`${this.host}:${this.port}`, <ChannelCredentials>channelCreds,_DEFAULT_OPTION);
	}

	private readonly metadata: Metadata;
	private readonly host: string;
	private readonly port: number;
	private readonly TaskServicev1Client: TaskServicev1Client;

	/**
	* @method TaskService.GetTask
	* @description None
	* @kind Unary
	* @param request Todosv1.TaskId
	* @param metadata Metadata
	* @returns Promise<Todosv1.Task>
	*/
	public GetTask(request: Todosv1.TaskId, metadata?: Metadata): Promise<Todosv1.Task>;
	/**
	* @method TaskService.GetTask
	* @description None
	* @kind Unary
	* @param request Todosv1.TaskId
	* @param metadata Metadata
	* @param callback A callback function to be excuted once the server responds with Todosv1.Task
	* @returns ClientUnaryCall
	*/
	public GetTask(request: Todosv1.TaskId, metadata: Metadata, callback: (error: _service_error | null, response: Todosv1.Task) => void): ClientUnaryCall;
	public GetTask(request: Todosv1.TaskId, metadata: Metadata = this.metadata, callback?: (error: _service_error | null, response: Todosv1.Task) => void): ClientUnaryCall | Promise<Todosv1.Task> {
		if (callback === undefined) {
			return promisify<Todosv1.TaskId, Metadata, Todosv1.Task>(this.TaskServicev1Client.getTask.bind(this.TaskServicev1Client))(Todosv1.TaskId.fromJSON(request), metadata);
		} else {
		 return this.TaskServicev1Client.getTask(Todosv1.TaskId.fromJSON(request), metadata, callback);
		}
	}
}