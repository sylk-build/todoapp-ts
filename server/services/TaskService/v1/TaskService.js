"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskServiceService = exports.TaskService = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const error_1 = require("../../utils/error");
const Todos = __importStar(require("../../protos/sylklabs/Todos/v1/Todos"));
const Todos_1 = require("../../protos/sylklabs/Todos/v1/Todos");
Object.defineProperty(exports, "TaskServiceService", { enumerable: true, get: function () { return Todos_1.TaskServiceService; } });
class TaskService {
    constructor() {
        this.tasks = [
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
        this.getTask = (call, callback) => {
            const { id } = call.request;
            console.log(`[GetTask] Got request for task data: ${id}`);
            let task = this.tasks.find(t => t.id === id);
            if (task) {
                callback(null, task, call.metadata);
            }
            else {
                callback(new error_1.ServiceError(grpc_js_1.status.NOT_FOUND, `Task "${id}" is not found.`, undefined, call.metadata), undefined, call.metadata);
            }
            ;
        };
    }
}
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map