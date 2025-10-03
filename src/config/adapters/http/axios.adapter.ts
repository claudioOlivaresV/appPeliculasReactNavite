import axios, {AxiosInstance} from 'axios';
import {HttpAdapter} from './http.adapter';
interface Options {
  baseUrl: string;
  params: Record<string, string>;
}
export class AxiosAdapter implements HttpAdapter {
  private axiosInstans: AxiosInstance;
  constructor(options: Options) {
    this.axiosInstans = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    });
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const {data} = await this.axiosInstans.get(url, options);
      return data;
    } catch {
      throw new Error('error');
    }
  }
}
