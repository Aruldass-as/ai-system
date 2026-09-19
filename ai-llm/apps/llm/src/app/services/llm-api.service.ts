import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LlmModel {
  id: string;
  name: string;
  provider: string;
  status: string;
}

export interface LlmModelsResponse {
  data: LlmModel[];
}

@Injectable({
  providedIn: 'root',
})
export class LlmApiService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:3000/api/llm';

  getModels(): Observable<LlmModelsResponse> {
    return this.http.get<LlmModelsResponse>(
      `${this.apiUrl}/models`
    );
  }
}