import { ClientUnaryCall, Metadata, ChannelCredentials, ServiceError as _service_error } from '@grpc/grpc-js';
import * as Todosv1 from './protos/sylklabs/Todos/v1/Todos';
/**
 * Generated thanks to [sylk.build](https://www.sylk.build)
 */
export interface SylkClientOpts {
    host: string;
    port: number;
    metadata: Metadata;
    channelCreds: ChannelCredentials;
}
export declare class TaskServiceV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly TaskServicev1Client;
    /**
    * @method TaskService.GetTask
    * @description None
    * @kind Unary
    * @param request Todosv1.TaskId
    * @param metadata Metadata
    * @returns Promise<Todosv1.Task>
    */
    GetTask(request: Todosv1.TaskId, metadata?: Metadata): Promise<Todosv1.Task>;
    /**
    * @method TaskService.GetTask
    * @description None
    * @kind Unary
    * @param request Todosv1.TaskId
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Todosv1.Task
    * @returns ClientUnaryCall
    */
    GetTask(request: Todosv1.TaskId, metadata: Metadata, callback: (error: _service_error | null, response: Todosv1.Task) => void): ClientUnaryCall;
}
