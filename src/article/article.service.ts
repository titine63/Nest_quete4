/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async getArticles(): Promise<Article[]> {
    return await this.articleRepository.find();
  }

  async getArticle(id: number): Promise<Article[]> {
    return await this.articleRepository.find({
      // Properties to return. We don't want the password property.
      select: ['title', 'author', 'creationDate'],
      where: [{ id: id }],
    });
  }

  saveArticle(article: Article): Promise<Article> {
    return this.articleRepository.save(article);
  }

  deleteArticle(article: Article): void {
    console.log('article :>> ', article);
    this.articleRepository.delete(article);
  }
}
