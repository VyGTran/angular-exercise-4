import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
    searchHistory: string [] = [];

    forSearch(term: string) {
        this.searchHistory.push(term);
    }
}