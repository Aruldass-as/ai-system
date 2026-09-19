import { Component, OnInit, inject } from '@angular/core';
import {
  LlmApiService,
  LlmModel,
} from '../services/llm-api.service';

@Component({
  selector: 'app-llm-page',
  imports: [],
  templateUrl: './llm-page.html',
  styleUrl: './llm-page.css',
})
export class LlmPage implements OnInit {
  private readonly llmApi = inject(LlmApiService);

  models: LlmModel[] = [];
  loading = false;
  error = '';

  ngOnInit(): void {
    this.loadModels();
  }

  loadModels(): void {
    this.loading = true;
    this.error = '';

    this.llmApi.getModels().subscribe({
      next: (response) => {
        this.models = response.data;
        this.loading = false;
      },

      error: (error) => {
        console.error('Failed to load LLM models', error);
        this.error = 'Failed to load LLM models';
        this.loading = false;
      },
    });
  }
}
