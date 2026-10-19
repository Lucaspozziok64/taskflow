import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { TasksStackParamList } from "../navigation/TasksStack";
import TaskDetail from "../components/TaskDetail";
import { Task } from "../constants/types";

type TasDetailRouteProp = RouteProp<TasksStackParamList, "TaskDetail">;

export default function TaskDetailScreen() {
    const route = useRoute<TasDetailRouteProp>()
    const navigation = useNavigation()
    const { id, title, description, category, createdAt } = route.params;

    const task: Task = {
        id,
        title,
        description,
        category,
        createdAt: new Date(createdAt),
    }
    return <TaskDetail task={task} onBack={() => navigation.goBack()} />
}