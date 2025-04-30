# Self Evaluation - Kanban Task Dashboard

## 📝 Half-Page Summary

This project is a Kanban-style task management dashboard that allows users to view tasks across three columns (To Do, In Progress, Done), add new tasks, and move tasks using drag-and-drop. Tasks are fetched and saved through a mock API using `json-server`. The UI is built using Material-UI and the drag-and-drop logic is handled with `react-dnd`. The application is fully responsive, adapting to mobile and desktop layouts.

## 🔍 Self-Criticism

While the app meets all core requirements, some areas could use enhancement. For example, error handling for API calls is minimal and could be improved with toast notifications or validation messages. The drag-and-drop system works well, but edge cases like dropping outside of valid zones need better UX feedback.

## 🔧 Improvements

If I had more time:
- Add user authentication (e.g., login)
- Integrate animations when tasks are moved
- Implement task editing and deletion
- Add loading states and better error handling
- Write unit tests for core components

## ⭐ Technology Rating

| Technology     | Rating (out of 10) |
|----------------|--------------------|
| React          | 9                  |
| Material-UI    | 9                  |
| react-dnd      | 8                  |
| Axios          | 10                  |
| json-server    | 8                  |

