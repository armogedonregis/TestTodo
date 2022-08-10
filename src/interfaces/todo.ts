export interface ITodos {
    todos: ITodo[];
}

export interface ITodo {
    id: number;
    itemTitle: string;
    tasks: ITask[];
}

export interface ITask {
    task: string;
    text: string;
    num: number;
    done: boolean;
}
