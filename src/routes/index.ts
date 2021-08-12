import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (request: Request, repsonse: Response) => {
  return repsonse.json({ status: 'on' });
});

export default routes;
