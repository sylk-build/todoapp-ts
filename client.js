"use strict";
exports.__esModule = true;
var typescript_1 = require("./clients/typescript");
var Todos_1 = require("./clients/typescript/protos/sylklabs/Todos/v1/Todos");
var client = new typescript_1.TaskServiceV1({
    host: 'localhost',
    port: 44880
});
client.GetTask(Todos_1.TaskId.fromPartial({
    id: '1'
})).then(function (res) {
    console.log(res);
})["catch"](function (err) {
    console.log(err);
});
