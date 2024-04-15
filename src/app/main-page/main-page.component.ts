import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  user: any;
  repositories: any[] = [];
  isLoading = false;
  page = 1;
  itemsPerPage = 10; // Number of items per page

  constructor(private githubService: GithubService) { }

  onSearch(username: string) {
    this.isLoading = true;

    this.githubService.getUser(username).subscribe(
      (userData: any) => {
        this.user = userData;

        // Fetch repositories after fetching user data
        this.fetchRepositories(username);
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
        this.isLoading = false; // Set isLoading to false on error
      }
    );
  }

  fetchRepositories(username: string) {
    // Calculate start index based on the current page
    const startIndex = (this.page - 1) * this.itemsPerPage;

    this.githubService.getUserRepositories(username).subscribe(
      (repoData: any[]) => {
        // Update repositories to display only items for the current page
        this.repositories = repoData.slice(startIndex, startIndex + this.itemsPerPage);
      },
      (error: any) => {
        console.error('Error fetching user repositories:', error);
        this.isLoading = false; // Set isLoading to false on error
      },
      () => {
        this.isLoading = false; // Set isLoading to false after fetching repositories
      }
    );
  }

  onPageChange(newPage: number) {
    // Update the current page when the page changes
    this.page = newPage;

    // Fetch repositories based on the new page
    this.fetchRepositories(this.user.username); // Replace 'username' with the actual property name of username in your user object
  }
}

