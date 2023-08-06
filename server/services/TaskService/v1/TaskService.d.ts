import { handleUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { ApiType } from '../../utils/interfaces';
import * as Todos from '../../protos/sylklabs/Todos/v1/Todos';
import { TaskServiceService } from '../../protos/sylklabs/Todos/v1/Todos';
declare class TaskService implements Todos.TaskServiceServer, ApiType<UntypedHandleCall> {
    [method: string]: any;
    tasks: Todos.Task[];
    getTask: handleUnaryCall<Todos.TaskId, Todos.Task>;
}
export { TaskService, TaskServiceService };
