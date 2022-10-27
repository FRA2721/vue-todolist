// dev: Francesco Cimino;
// proj: Vue To Do List;
// lang: js;


// init
const{createApp}=Vue;

createApp({
    data(){
        return {

            // array-tasks
            tasksList:[
                // default-tasks (examples)

                {
                    task : "Make my bed;",
                    done : false
                },

                {
                    task : "Complete my homework;",
                    done : false
                },

                {
                    task : "Go to the gym;",
                    done : false
                }

            ],

            inputTask : "",
            validator : true,
            defaultTasks : false,
            errorMessagge : "",
          
        }
    },

    // enter-new-tasks-method
    methods:{
        enterNewTask : function() {

           this.inputTask = this.inputTask.trim();
           const activities = this.tasksList.map(item=> item.task.toLowerCase());

            // conditions
           if (this.inputTask.length > 5 && !activities.includes(this.inputTask.toLowerCase())){
                this.tasksList.push({
                    task : this.inputTask,
                    done : false
                })

                this.inputTask = "";
                this.validator = true;    
            }

              else if (this.inputTask.length < 5) {
              this.validator = false;  
              this.errorMessagge = "Enter minimun 5 characters please..."
            }

            else if (activities.includes(this.inputTask.toLowerCase())) {
                this.validator = false;  
                this.errorMessagge = "This task is in your list..."
                this.inputTask = "";
            }            
        
        },

        // task-completed
        //change the status of done key from the object inside tasksList
        taskDone(index) {
        this.tasksList[index].done = !this.tasksList[index].done
        },
        
        //remove the object from tasksList in the clicked item index
        crossedTasks(index) {
            this.tasksList.splice([index], 1)
        }
    
    }

}).mount("#root");