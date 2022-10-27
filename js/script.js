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

            else if (activities.includes(this.inputTask.toLowerCase())) {
                this.validator = false;  
                this.errorMessagge = "This task is in your list..."
                this.inputTask = "";
            }            
        
        },

        // task-completed
        taskCompleted : function(index) {
        this.tasksList.splice(index , 1);
        },

        taskNCompleted : function(contentText) {
             this.tasksList = this.tasksList.filter(item=> item.task !== contentText);
        },

        // check-tasks
        checkElement : function(index){
            this.tasksList[index].done = !this.tasksList[index].done;
        }
    
    }

}).mount("#root");