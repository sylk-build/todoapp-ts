import { ChannelCredentials } from '@grpc/grpc-js';
import { TaskServiceV1, SylkClientOpts } from './clients/typescript';
import { TaskId } from './clients/typescript/protos/sylklabs/Todos/v1/Todos';

const client = new TaskServiceV1(<SylkClientOpts>{
    host: 'localhost',
    port: 44880,
});

client.GetTask(TaskId.fromPartial({
    id: '1'
})).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});