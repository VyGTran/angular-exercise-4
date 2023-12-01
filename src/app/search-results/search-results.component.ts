import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../Directives and Services/search.service';
import { RandomBGColorDirective } from '../Directives and Services/random-bgcolor.directive';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RandomBGColorDirective],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  
  constructor(public searchService: SearchService) {}

  
}
