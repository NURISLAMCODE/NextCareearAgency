import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import Swal from 'sweetalert2';
import { ApiService } from '../shared/api.service';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = localStorage.getItem('uname');
  email = localStorage.getItem('uemail');
  users: User[] = [];
  questionArray: any[];
  currentQuestion: number;
  questionInterval$: any;
  counter = 50;
  isCurrentAnswer: boolean;
  selectedAnswer: any[];
  points: number=0;
  constructor(private service: ApiService, private router: Router, http: HttpClient) {
    this.currentQuestion = 0;
    this.isCurrentAnswer = false;
    this.questionArray = [
      {
        "questionLabel": "Which of the following is not a datatype in typescript?",
        "options": [{
          "label": "date.",
          "correct": true
        },
        {
          "label": "void."
        },
        {
          "label": "number."
        },

        {
          "label": "string."
        }]
      },
      {
        "questionLabel": "How can we specify properties and methods for an object in TypeScript?",
        "options": [{
          "label": "Use Classes."

        },
        {
          "label": "Use interfaces.",
          "correct": true
        },
        {
          "label": "Use enums."
        },

        {
          "label": "Use async/await."
        }]
      },
      {
        "questionLabel": " The command to build angular application for production is",
        "options": [{
          "label": "Ng serve."

        },
        {
          "label": "Ng new."

        },
        {
          "label": "Ng build.",
          "correct": true
        },

        {
          "label": "Ng create."
        }]
      },
      {
        "questionLabel": "Which object-oriented terms not supported by Typescript?",
        "options": [{
          "label": " Abstract Class.",
          "correct": true
        },
        {
          "label": "Classes.",

        },
        {
          "label": "Interfaces."
        },

        {
          "label": "Modules."
        }]
      },
      {
        "questionLabel": "Which file is acts as placeholder for basic angular app?",
        "options": [{
          "label": "Main.ts."

        },
        {
          "label": "app.module.ts."
        },
        {
          "label": "index.html.",
          "correct": true
        },

        {
          "label": " app.template.html."
        }]
      },
      {
        "questionLabel": "Two-way bindings are used with--------- HTML elements",
        "options": [{
          "label": "Table."

        },
        {
          "label": "Form.",
          "correct": true
        },
        {
          "label": "Div ."
        },

        {
          "label": "Heading."
        }]
      },
      {
        "questionLabel": "Which keyword is used to identify data or types that you want to use elsewhere in the application?",
        "options": [{
          "label": "Import."

        },
        {
          "label": "Export.",
          "correct": true
        },
        {
          "label": "New."
        },

        {
          "label": "Add."
        }]
      },
      {
        "questionLabel": "Angular configuration file name is?",
        "options": [{
          "label": "Package.json."

        },
        {
          "label": "Composer.json."
        },
        {
          "label": "Angular.json.",
          "correct": true
        },

        {
          "label": "Config.json."
        }]
      },
      {
        "questionLabel": "Which of the following command is correct for installing angular-cli?",
        "options": [{
          "label": "npm install -g @angular/cli.",
          "correct": true
        },
        {
          "label": "npm install -global @angular/cli."
        },
        {
          "label": "npm install -g angular/cli."
        },

        {
          "label": "npm install -global angular/cli."
        }]
      },
      {
        "questionLabel": "Which of the following is a filter in Angular Js?",
        "options": [{
          "label": "Currency."
        },
        {
          "label": "Date."
        },
        {
          "label": "Uppercase."
        },

        {
          "label": "All of the above.",
          "correct": true
        }]
      }
    ];
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        console.log("Hidden");
      } else {
        console.log("Shown");
      }
    })
  }

  ngOnInit(): void {
    this.startCounter();
    setTimeout(timer => {
      this.questionInterval$.unsubscribe();
      // alert("Correct ans is: " + this.points + "\nWrong ans is: " + (this.questionArray.length - this.points));
      localStorage.setItem("value", JSON.stringify(this.points));
      if(this.points>=5){
        this.addUser();
        Swal.fire("Congratulations "+this.name, 'You are priliminary selected for this course. And Your Registration Successfully Completed!', 'success');
          this.router.navigate(['/login']);
        
      }else{
        // alert("")
        Swal.fire({
          icon: 'error',
          title: 'Oops... '+this.name,
          text: 'You are not qualified for this course.\nPlease try to next time!!',
          footer: '<a routerLink="/result">Why do I have this issue?</a>'
        })
        this.router.navigateByUrl('/result');
      }
      
    }, 50000)
 
// var value: number;
     
    
  }
  

  nextQuestion() {
    if (!(this.questionArray.length - 1 == this.currentQuestion)) {
      this.currentQuestion++;
      this.startCounter();
    } else { }
  }

  prevQuestion() {
    if (this.currentQuestion !== 0) {
      this.currentQuestion--;
    }
  }

  onSelect(question: any, options: any, option: any) {
    question.isAttempted = true;
    options.forEach((element: { isSelected: boolean; }) => {
      element.isSelected = false;
    });
    this.isCurrentAnswer = true;
    if (option.correct) {
      this.points++;
    }
    option.isSelected = true;
  }

  startCounter() {
    this.counter = 50;
    this.questionInterval$ = interval(1000).subscribe(counter => {
      this.counter--;
      if (this.counter == 0) {
        this.nextQuestion();
      }
    })
  }

  @HostListener('window:beforeunload', ['$event']) beforeUnloadHander(event: any) {
    var isFormDirty = true;
    console.log(isFormDirty);
    if (isFormDirty) {
      return false;
    } else {
      return true;
    }
  }
  addUser() {
    let user: User={
      fullname: localStorage.getItem('uname'),
      email: localStorage.getItem("uemail"),
      password: localStorage.getItem("upassword"),
      mobile: localStorage.getItem("umobile")
    }
    this.service.postUser(user)
      .subscribe((res)=>{
        this.users.unshift(res);
      })
      localStorage.clear()
  }

}
