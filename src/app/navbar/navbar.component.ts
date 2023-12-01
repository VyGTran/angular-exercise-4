import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../Directives and Services/search.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentSearchTerm = '';
  
  constructor(private searchService: SearchService) {}

  addSearch() {
    this.searchService.forSearch(this.currentSearchTerm);
    this.currentSearchTerm = ''
  }
}
