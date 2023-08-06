"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskServiceClient = exports.TaskServiceService = exports.TaskId = exports.Task = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseTask() {
    return { id: "", title: "", description: "", done: false };
}
exports.Task = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.done === true) {
            writer.uint32(32).bool(message.done);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.done = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            done: isSet(object.done) ? Boolean(object.done) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.done === true) {
            obj.done = message.done;
        }
        return obj;
    },
    create(base) {
        return exports.Task.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTask();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.done = (_d = object.done) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseTaskId() {
    return { id: "" };
}
exports.TaskId = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTaskId();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.TaskId.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTaskId();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
exports.TaskServiceService = {
    /** [Todos.v1.TaskService.GetTask] - */
    getTask: {
        path: "/sylklabs.Todos.v1.TaskService/GetTask",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.TaskId.encode(value).finish()),
        requestDeserialize: (value) => exports.TaskId.decode(value),
        responseSerialize: (value) => Buffer.from(exports.Task.encode(value).finish()),
        responseDeserialize: (value) => exports.Task.decode(value),
    },
};
exports.TaskServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TaskServiceService, "sylklabs.Todos.v1.TaskService");
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=Todos.js.map