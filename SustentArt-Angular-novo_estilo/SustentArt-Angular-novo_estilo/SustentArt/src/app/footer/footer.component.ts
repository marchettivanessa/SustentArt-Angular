import { Component, OnInit } from '@angular/core';
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { faFile, faHandsHelping, faTasks, faUsers, faUsersCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
  faGithub = faGithub
  faUsers =  faUsers
  faUsersCog = faUsersCog
  faTasks = faTasks
  faHandsHelping = faHandsHelping
  faFile = faFile
  

  constructor() { }

  ngOnInit(): void {
  }

}