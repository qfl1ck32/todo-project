import {
  Service,
  Inject,
  EventManager,
  ContainerInstance,
} from "@bluelibs/core";
import { ObjectId } from "@bluelibs/ejson";
import { TodosCollection } from "../collections";
import { UserTodosCreateInput } from "./inputs/UserTodosCreate.input";

@Service()
export class TodoService {
  constructor(protected readonly container: ContainerInstance) {}

  /*
    gql`
      UserTodosCreate($input: ...) {

      }
    `

    const id = await createTodo(...)
  */

  public async create(input: UserTodosCreateInput, userId: ObjectId) {
    const { title } = input;

    const todosCollection = this.container.get(TodosCollection);

    const todo = await todosCollection.insertOne(
      {
        title,
        isDone: false,
      },
      {
        context: {
          userId,
        },
      }
    );

    return todo.insertedId;
  }

  public update(input: any, userId: ObjectId) {
    // userId a creat input.todoId
    // SecurityService
    // checkUserOwnsTodo( ... )

    /// update, pentru ca user-ul sigur detine todo-ul
    throw new Error("Not implemented, yet.");
  }

  public delete() {
    throw new Error("Not implemented, yet.");
  }
}

// { title }
// const [todos, setTodos] = useState(...)

// setTodos(prevTodos => {
// return prevTodos.concat({
// title,
// _id,
// isDone: false,
//})
//})
