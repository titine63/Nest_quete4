import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article } from './article.entity/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ArticleService],
  controllers: [ArticleController],
})
@Module({
  imports: [TypeOrmModule.forFeature([Article])],
})
export class ArticleModule {}
