import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { ArticleService } from './article.service';
import { Article } from './article.entity/article.entity';

@Controller('article')
export class ArticleController {
  constructor(private service: ArticleService) {}

  @Get()
  getAll() {
    return this.service.getArticles();
  }
  @Get(':id')
  get(@Param() params) {
    return this.service.getArticle(params.id);
  }

  @Post()
  create(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Put()
  update(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    console.log('params :>> ', params);
    this.service.deleteArticle(params.id);
    return;
  }
}
