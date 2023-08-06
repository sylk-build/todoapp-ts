# todoapp-ts

This project has been generated thanks to [```sylk.build```](https://www.sylk.build) !

This project is using gRPC as main code generator and utilize HTTP2 + protobuf protocols for communication.

# Index
Usage:
- [Typescript](#typescript)

Resources:
- [TaskService](#taskservice)
- [Todos](#todos)

# Services

## TaskService

__`GetTask`__ [Unary]
- Input: [sylklabs.Todos.v1.TaskId](#taskid)
- Output: [sylklabs.Todos.v1.Task](#task)

# Packages

## `sylklabs.Todos.v1`


<details id="#Task">
<summary><b>Task</b></summary>

### __Task__
: 
* __id__ [TYPE_STRING]


* __title__ [TYPE_STRING]


* __description__ [TYPE_STRING]


* __done__ [TYPE_BOOL]

</details>


<details id="#TaskId">
<summary><b>TaskId</b></summary>

### __TaskId__
: 
* __id__ [TYPE_STRING]

</details>


# Usage

This project supports clients communication in the following languages:

### Typescript

```ts
import { todoappts } from './clients/typescript/';

let client = new todoappts();

// Unary call
client.<Unary>(<InMessage>)
	.then((res:<OutMessage>) => {
		console.log(res);
	}).catch((err: any) => console.log(err));

// Server Stream
client.<ServerStream>(<InMessage>)
	.subscribe((res: <OutMessage>) => {
		console.log(res);
	})

// Client Stream

// Bidi Stream
responses = client.<BidiStream>()
	.subscribe((res: <OutMessage>) => {
		console.log(res)
	})

responses.write(<InMessage>)
```


* * *
__This project and README file has been created thanks to [sylk.build](https://www.sylk.build)__