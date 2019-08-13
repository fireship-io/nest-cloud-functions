import express, { Express } from 'express';
export declare const server: Express;
export declare const createNestServer: (expressInstance: express.Express) => Promise<import("@nestjs/common").INestApplication>;
