import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  currentTutorial=null;
  message='';
  constructor(private route:ActivatedRoute,private router:Router,
    private tutorialService:TutorialService) { }

  ngOnInit(): void {

    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
    }

    getTutorial(id){

      console.log('Inside TutorialDetailsComponent..........');
      this.tutorialService.get(id).subscribe(

        data =>{

          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
        
      );
    }


    updatePublished(status){

      const data ={
        title:this.currentTutorial.title,
        description: this.currentTutorial.description,
        published:status
      }

      this.tutorialService.update(this.currentTutorial.id, data).subscribe(

        response =>{

          console.log(response);
          this.currentTutorial.published = status;
        },
        error =>{

          console.log(error);
        }
      );

    }

    deleteTutorial(){
      this.tutorialService.delete(this.currentTutorial.id).subscribe(

        response =>{
            console.log(response);
            this.router.navigate(['/saatvik']);
        },
        error =>{
          console.log(error);
        }
        
      );
    }

    updateTutorial(){

      this.tutorialService.update(this.currentTutorial.id, this.currentTutorial).
      subscribe(

        response =>{

          console.log(response);
          this.message = 'Record has been updated successfully.';
        }



      )
    }


}
