/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticleTable1690379091184 implements MigrationInterface {
  name = 'CreateArticleTable1690379091184';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(50) NOT NULL, \`content\` varchar(5000) NOT NULL, \`author\` varchar(80) NOT NULL, \`creationDate\` varchar(80) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`article\``);
  }
}
