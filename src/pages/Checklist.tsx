import React, { useState } from 'react';
import {
  Box,
  Toolbar,
  CssBaseline,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Divider,
  Select,
  MenuItem,
  LinearProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

function Checklist() {
  // State and functionality for the checklist
  const [tasks, setTasks] = useState<
    { id: number; text: string; category: string; completed: boolean }[]
  >([]);
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('General');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), category, completed: false },
      ]);
      setNewTask('');
    }
  };

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Document Management Checklist
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Progress</Typography>
          <LinearProgress variant="determinate" value={progress} />
          <Typography variant="caption">
            {completedTasks}/{totalTasks} tasks completed
          </Typography>
        </Box>

        {/* Add Task Section */}
        <Card sx={{ mb: 3, p: 2, backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Add New Task
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TextField
                fullWidth
                label="Task"
                variant="outlined"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                displayEmpty
              >
                <MenuItem value="General">General</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddTask}
              >
                Add
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Task List Section */}
        <Card sx={{ p: 2, backgroundColor: '#ffffff' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Your Tasks
            </Typography>
            {tasks.length === 0 ? (
              <Typography color="textSecondary">No tasks yet.</Typography>
            ) : (
              <List>
                {tasks.map((task) => (
                  <React.Fragment key={task.id}>
                    <ListItem
                      secondaryAction={
                        <>
                          <IconButton
                            edge="end"
                            onClick={() => handleDeleteTask(task.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                          <IconButton edge="end">
                            <EditIcon />
                          </IconButton>
                          <IconButton edge="end">
                            <FileUploadIcon />
                          </IconButton>
                        </>
                      }
                    >
                      <Checkbox
                        edge="start"
                        checked={task.completed}
                        onChange={() => handleToggleTask(task.id)}
                      />
                      <ListItemText
                        primary={task.text}
                        secondary={`Category: ${task.category}`}
                        style={{
                          textDecoration: task.completed
                            ? 'line-through'
                            : 'none',
                        }}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Checklist;
