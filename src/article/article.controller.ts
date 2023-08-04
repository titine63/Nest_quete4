import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';

import { ArticleService } from './article.service';
import { Article } from './article.entity/article.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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
  @UseGuards(JwtAuthGuard)
  create(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  update(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteUser(@Param() params) {
    console.log('params :>> ', params);
    this.service.deleteArticle(params.id);
    return;
  }
}
